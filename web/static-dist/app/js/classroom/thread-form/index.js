webpackJsonp(["app/js/classroom/thread-form/index"],{0:function(e,a){e.exports=jQuery},dd5cae0f2aab7adf0aef:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var d=t("d5fb0e67d2d4c1ebaaed"),r=n(d),i=t("0f84c916401868c4758e"),o=n(i),c=t("b334fd7e4c5a19234db2"),l=n(c),s=$("#thread-form"),u=s.validate({rules:{title:{required:!0,trim:!0},content:{required:!0}}}),f=CKEDITOR.replace("thread_content",{toolbar:"Thread",filebrowserImageUploadUrl:$("#thread_content").data("imageUploadUrl")});f.on("change",function(){$("#thread_content").val(f.getData()),u.form()}),f.on("blur",function(){$("#thread_content").val(f.getData()),u.form()}),"event"==s.find('[name="type"]').val()&&(s.find('[name="maxUsers"]').rules("add",{positive_integer:!0}),s.find('[name="location"]').rules("add",{visible_character:!0}),s.find('[name="startTime"]').rules("add",{required:!0,DateAndTime:!0}),s.find('[name="startTime"]').datetimepicker({language:document.documentElement.lang,autoclose:!0,format:"yyyy-mm-dd hh:ii",minView:"hour"}).on("hide",function(e){s.validate("[name=startTime]")}),s.find('[name="startTime"]').datetimepicker("setStartDate",new Date),new o.default({element:"#js-activity-uploader",onUploadSuccess:function(e,a){s.find("[name=actvityPicture]").val(a.url),(0,l.default)("success",Translator.trans("site.upload_success_hint"))}})),new r.default(s)}},["dd5cae0f2aab7adf0aef"]);