<?php

namespace AppBundle\Controller\AdminV2\Operating;

use AppBundle\Common\BlockToolkit;
use AppBundle\Common\Exception\AbstractException;
use AppBundle\Common\Exception\FileToolkitException;
use AppBundle\Common\FileToolkit;
use AppBundle\Common\StringToolkit;
use AppBundle\Controller\AdminV2\BaseController;
use Biz\Certificate\Service\TemplateService;
use Biz\Certificate\TemplateException;
use Biz\Content\Service\BlockService;
use Biz\Content\Service\FileService;
use Biz\System\Service\SettingService;
use AppBundle\Common\Paginator;
use AppBundle\Common\ArrayToolkit;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CertificateTemplateController extends BaseController
{
    public function indexAction(Request $request)
    {
        $conditions = $request->request->all();

        $paginator = new Paginator(
            $request,
            $this->getCertificateTemplateService()->count($conditions),
            20
        );

        $templates = $this->getCertificateTemplateService()->search(
            $conditions,
            ['createdTime' => 'desc'],
            $paginator->getOffsetCount(),
            $paginator->getPerPageCount()
        );
        $users = $this->getUserService()->findUsersByIds(ArrayToolkit::column($templates, 'createdUserId'));

        return $this->render('admin-v2/operating/certificate-template/index.html.twig', array(
            'templates' => $templates,
            'paginator' => $paginator,
            'users' => ArrayToolkit::index($users, 'id'),
        ));
    }

    public function editAction(Request $request, $id)
    {
        $template = $this->getCertificateTemplateService()->get($id);
        if (empty($template)) {
            $this->createNewException(TemplateException::NOTFOUND_TEMPLATE());
        }

        if ($request->isMethod('POST')) {
            $fields = $request->request->all();
            $this->getCertificateTemplateService()->update($id, $fields);

            return $this->redirect($this->generateUrl('admin_v2_operation_certificate_template_creat_step_two', ['id' => $id]));
        }

        return $this->render('admin-v2/operating/certificate-template/manage/step-one.html.twig', ['template' => $template]);

    }

    public function deleteAction(Request $request, $id)
    {

    }

    public function createAction(Request $request)
    {
        if ($request->isMethod('POST')) {
            $data = $request->request->all();

            $template = $this->getCertificateTemplateService()->create($data);

            return $this->redirect($this->generateUrl('admin_v2_operation_certificate_template_creat_step_two', ['id' => $template['id']]));
        }

        return $this->render('admin-v2/operating/certificate-template/manage/step-one.html.twig');
    }

    public function stepTwoAction(Request $request, $id)
    {
        $template = $this->getCertificateTemplateService()->get($id);

        if ($request->isMethod('POST')) {
            $type = $request->request->get('styleType');

            $template = $this->getCertificateTemplateService()->update($id, ['styleType' => $type]);

            return $this->redirect($this->generateUrl('admin_v2_operation_certificate_template_creat_step_three', ['id' => $template['id']]));
        }

        return $this->render('admin-v2/operating/certificate-template/manage/step-two.html.twig', ['template' => $template]);
    }

    public function stepThreeAction(Request $request, $id)
    {
        $template = $this->getCertificateTemplateService()->get($id);

        if ($request->isMethod('POST')) {
            $fields = $request->request->all();

            if (!empty($fields['basemapFileId'])) {
                $this->getCertificateTemplateService()->updateBaseMap($id, $fields['basemapFileId']);
            }
            if (!empty($fields['stampFileId'])) {
                $this->getCertificateTemplateService()->updateStamp($id, $fields['stampFileId']);
            }

            return $this->redirect($this->generateUrl('admin_v2_operation_certificate_template_creat_step_four', ['id' => $template['id']]));
        }

        return $this->render('admin-v2/operating/certificate-template/manage/step-three.html.twig', ['template' => $template]);
    }

    public function stepFourAction(Request $request, $id)
    {
        $template = $this->getCertificateTemplateService()->get($id);

        if ($request->isMethod('POST')) {
            $fields = $request->request->all();
            $this->getCertificateTemplateService()->update($id, $fields);

            return $this->redirect($this->generateUrl('admin_v2_operation_certificate_template_manage'));

        }

        return $this->render('admin-v2/operating/certificate-template/manage/step-four.html.twig', ['template' => $template]);
    }

    public function baseMapModalAction(Request $request, $id)
    {
        if ($request->isMethod('POST')) {
            $options = $request->request->all();

            return $this->buildImgJsonResponse($options['images'][0]['id']);
        }

        return $this->render('admin-v2/operating/certificate-template/img/basemap-modal.html.twig', [
            'template' => $this->getCertificateTemplateService()->get($id)
        ]);
    }

    public function stampModalAction(Request $request)
    {
        if ($request->isMethod('POST')) {
            $options = $request->request->all();

            return $this->buildImgJsonResponse($options['images'][0]['id']);
        }

        return $this->render('admin-v2/operating/certificate-template/img/stamp-modal.html.twig');
    }

    public function previewAction(Request $request, $id)
    {

    }

    protected function buildImgJsonResponse($fileId)
    {
        $file = $this->getFileService()->getFile($fileId);
        $image = $this->getWebExtension()->getFpath($file['uri']);

        return $this->createJsonResponse([
            'fileId' => $file['id'],
            'image' => $image,
        ], 200);
    }

    /**
     * @return TemplateService
     */
    protected function getCertificateTemplateService()
    {
        return $this->createService('Certificate:TemplateService');
    }

    /**
     * @return FileService
     */
    protected function getFileService()
    {
        return $this->createService('Content:FileService');
    }
}