(window.webpackJsonp=window.webpackJsonp||[]).push([["classroom~course~courseTry"],{"50ad":function(t,e,s){"use strict";var i=s("8171");s.n(i).a},7067:function(t,e,s){"use strict";s("e17f");var i=s("2241"),a=(s("e7e5"),s("d399")),n=s("a026"),r=s("3ce7"),c=/micromessenger/.test(navigator.userAgent.toLowerCase());e.a=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||s&&!e)a.a.fail("缺少分享参数");else{var o={domainUri:location.origin,itemUri:"",source:"h5"};r.a.marketingActivities({query:{activityId:t},data:o}).then((function(t){var r=-1!==t.url.indexOf("?")?"&":"?",o=s?"".concat(e).concat(r,"ticket=").concat(t.ticket):t.url;c?window.location.href=o:i.a.confirm({message:"去微信完成活动",confirmButtonText:"复制链接",title:""}).then((function(){try{n.a.prototype.$copyText(o).then((function(){a.a.success("复制成功")}),(function(){a.a.fail("请更换浏览器复制")}))}catch(t){a.a.fail("请更换浏览器复制")}})).catch((function(){}))})).catch((function(t){a.a.fail(t.message)}))}}},8171:function(t,e,s){},b127:function(t,e,s){"use strict";s("8e6e"),s("456d"),s("e7e5");var i=s("d399"),a=(s("6762"),s("2fdb"),s("ac6a"),s("c5f6"),s("bd86")),n=s("2f62"),r=s("0d25"),c=s("faa5"),o=s("d863");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(a.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}s("3ce7");var h={mixins:[o.a],props:{hiddeTitle:{type:Boolean,default:!1},errorMsg:{type:String,default:""}},data:function(){return{directoryArray:[],chapters:[],tasks:[],unit:[],optionalMap:[],unitShow:{},firstLesson:""}},computed:u(u(u({},Object(n.d)("course",{details:function(t){return t.details},joinStatus:function(t){return t.joinStatus},courseLessons:function(t){return t.courseLessons},selectedPlanId:function(t){return t.selectedPlanId}})),Object(n.d)(["courseSettings","user"])),{},{currentCourseType:function(){return Number(this.details.parentId)?"班级":"课程"},liveClass:function(){return function(t){var e=(new Date).getTime(),s=new Date(1e3*t.startTime),i=new Date(1e3*t.endTime);return e<=s?"grey-medium":e>i?"ungenerated"===t.activity.replayStatus?"live-done":"live-replay":"living"}}}),watch:{selectedPlanId:{deep:!0,immediate:!0,handler:function(t){var e=this;if(this.courseLessons.length){var s=0,i=0,a=0;this.directoryArray=this.courseLessons.map((function(t){if(e.firstLesson||(e.firstLesson=t.type),s++,e.$set(t,"show",!0),"chapter"===t.type&&(a++,s=0),"unit"===t.type&&(i=s-1),"lesson"===t.type){var n="chapter"===e.firstLesson?Math.max(a-1,0):Math.max(a,0),r=i;e.$set(t,"show","".concat(n,"-").concat(r))}return t})),this.getTasks(this.directoryArray)}}}},methods:u(u({},Object(n.c)("course",{setSourceType:c.q})),{},{lessonToggle:function(t,e){var s="".concat(t,"-").concat(e);this.$set(this.unitShow,s,!this.unitShow[s])},filterNumber:function(t,e,s){return s?"":"1"===t.isOptional?"选修":e+1},getTasks:function(t){var e=this,s=[],i=0,a=0;this.chapters=[],this.tasks=[],this.unit=[],this.optionalMap=[],t.forEach((function(t){if("lesson"==t.type&&(a++,i=Number(t.isOptional)?++i:i,e.optionalMap[a]=i,t.tasks.forEach((function(t){t.tagStatus=e.getCurrentStatus(t)}))),"chapter"!==t.type){if("unit"===t.type){var n="chapter"===e.firstLesson?e.chapters.length-1:e.chapters.length,r=s.length;e.$set(e.unitShow,"".concat(n,"-").concat(r),!0),e.unit.push(t)}s.push(t)}else s.length>0?(e.tasks.push([].concat(s)),s=[]):e.chapters.length>0&&e.tasks.push([]),e.chapters.push(t)})),this.unit.length&&"chapter"===this.firstLesson||this.$set(this.unitShow,"".concat(0,"-",0),!0),"chapter"!==t[t.length-1].type&&this.tasks.push(s),"chapter"!==t[0].type&&this.chapters.unshift({show:!0})},getCurrentStatus:function(t){return Number(t.isFree)?"is-free":Number(this.details.tryLookable)&&"video"===t.type&&t.activity.mediaStorage?"is-tryLook":""},filterTaskStatus:function(t){return this.details.member||"is-free"!==t.tagStatus?this.details.member||"is-tryLook"!==t.tagStatus?"":"试看":"免费"},lessonCellClick:function(t){if(this.errorMsg||"create"===t.status)this.$emit("showDialog");else if(!this.details.allowAnonymousPreview&&this.$router.push({name:"login",query:{redirect:this.redirect}}),!this.joinStatus&&["is-tryLook","is-free"].includes(t.tagStatus))switch(t.type){case"video":case"audio":this.$router.push({name:"course_try"}),this.setSourceType({sourceType:t.type,taskId:t.id});break;case"doc":case"text":case"ppt":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type,preview:1}});break;default:return Object(i.a)("请先加入".concat(this.currentCourseType))}else this.joinStatus?this.showTypeDetail(t):Object(i.a)("请先加入".concat(this.currentCourseType))},showTypeDetail:function(t){if("published"===t.status)switch(t.type){case"video":"self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):Object(i.a)("暂不支持此类型");break;case"audio":this.setSourceType({sourceType:"audio",taskId:t.id});break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type}});break;case"live":var e=new Date,s=new Date(1e3*t.endTime),a=(new Date(1e3*t.startTime),!1);if(e>s){if("videoGenerated"==t.activity.replayStatus)return void("self"===t.mediaSource?this.setSourceType({sourceType:"video",taskId:t.id}):Object(i.a)("暂不支持此类型"));if("ungenerated"==t.activity.replayStatus)return void Object(i.a)("暂无回放");a=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:t.id,type:t.type,title:t.title,replay:a}});break;default:Object(i.a)("暂不支持此类型")}else Object(i.a)("敬请期待")}}),filters:{liveStatusText:function(t){var e=(new Date).getTime(),s=new Date(1e3*t.startTime),i=new Date(1e3*t.endTime);return e<=s?Object(r.formatCompleteTime)(s):e>i?"ungenerated"===t.activity.replayStatus?"已结束":"回放":"直播中"}}},p=s("a6c2"),d=Object(p.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("e-panel",{staticClass:"directory",attrs:{"hidde-title":t.hiddeTitle,title:"课程目录"}},[0==t.courseLessons.length?s("div",{staticClass:"empty"},[t._v("暂无学习任务")]):s("div",{staticClass:"directory-list"},t._l(t.chapters,(function(e,i){return s("div",{key:i,staticClass:"directory-list__item"},["chapter"===e.type?s("div",{staticClass:"directory-list__item-chapter",on:{click:function(t){e.show=!e.show}}},[s("span",{staticClass:"text-overflow"},[t._v("第"+t._s(e.number)+t._s(t.courseSettings.chapter_name)+"："+t._s(e.title))]),s("i",{class:[e.show?"icon-packup":"icon-unfold"]})]):t._e(),t._l(t.tasks[i],(function(a,n){return s("div",{key:n,class:["directory-list__item-unit",{"unit-show":e.show||e.show&&"lesson"===t.tasks[i][0].type}]},["unit"===a.type?s("div",{staticClass:"lesson-cell__unit"},[s("span",{staticClass:"lesson-cell__unit-title text-overflow"},[t._v("第"+t._s(a.number)+t._s(t.courseSettings.part_name)+"："+t._s(a.title))]),s("i",{class:[t.unitShow[i+"-"+n]?"icon-packup":"icon-unfold"],on:{click:function(e){return t.lessonToggle(i,n)}}})]):t._e(),"lesson"===a.type?s("div",{staticClass:"lesson-cell__hour text-overflow",class:{"lesson-show":t.unitShow[a.show]||"lesson"===t.tasks[i][0].type}},[a.tasks.length>1?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow"},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18"}),s("span",[t._v(t._s(Number(a.isOptional)?"选修 ":"课时 ")+" "+t._s(Number(a.isOptional)?" ":a.number-t.optionalMap[a.number]+"：")+t._s(a.title))])]),t._l(a.tasks,(function(e,i){return s("div",{key:i,class:["box","show-box"]},[s("div",{staticClass:"lesson-cell"},[Number(a.isOptional)?t._e():s("span",{staticClass:"lesson-cell__number pull-left"},[t._v(t._s(t.filterNumber(e,i)))]),s("div",{class:["lesson-cell__content","live"===a.tasks[i].type?"pr10":""],on:{click:function(s){return t.lessonCellClick(e)}}},[s("div",{staticClass:"lesson-cell__text"},[s("span",{staticClass:"text-overflow"},[t._v(t._s(e.title))]),"live"===a.tasks[i].type&&"published"===a.tasks[i].status?s("span",{class:[t.liveClass(a.tasks[i]),"live-text","ml5"]},[t._v(t._s(t._f("liveStatusText")(a.tasks[i])))]):t._e()]),s("span",{staticClass:"lesson-cell-last__text"},[t._v(t._s(t._f("taskType")(e))+t._s(t._f("filterTask")(e)))])]),t.details.member?t._e():s("div",{class:["lesson-cell__status",t.details.member?"":e.tagStatus]},[t._v("\n                  "+t._s(t.filterTaskStatus(e))+"\n                ")])])])}))],2):t._e(),1===a.tasks.length?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow",on:{click:function(e){return t.lessonCellClick(a.tasks[0])}}},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18 pull-left"}),s("div",{staticClass:"lesson-cell__text "},[s("span",{staticClass:"pl3 text-overflow"},[t._v(t._s(Number(a.isOptional)?"选修 ":"课时 ")+" "+t._s(Number(a.isOptional)?" ":a.number-t.optionalMap[a.number]+"：")+t._s(a.tasks[0].title))]),"published"===a.tasks[0].status&&"live"===a.tasks[0].type?s("span",{class:[t.liveClass(a.tasks[0]),"live-text","ml5"]},[t._v(t._s(t._f("liveStatusText")(a.tasks[0])))]):t._e()]),s("div",{staticClass:"lesson-cell"},[s("span",{staticClass:"lesson-cell__number"},[t._v(t._s(t.filterNumber(a.tasks[0],0,!0)))]),s("div",{staticClass:"lesson-cell__content pl3"},[s("span",{staticClass:"lesson-cell-last__text"},[t._v(t._s(t._f("taskType")(a.tasks[0]))+t._s(t._f("filterTask")(a.tasks[0])))])]),t.details.member?t._e():s("div",{class:["lesson-cell__status",t.details.member?"":a.tasks[0].tagStatus]},[t._v("\n                  "+t._s(t.filterTaskStatus(a.tasks[0]))+"\n                ")])])])]):t._e()]):t._e()])}))],2)})),0)])}),[],!1,null,null,null);e.a=d.exports},bced:function(t,e,s){"use strict";var i={name:"ETagLink",props:{tagData:{type:Object,default:{earnings:0,isShow:!1,link:"",className:"",minDirectRewardRatio:0}}}},a=s("a6c2"),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return this.tagData.isShow?e("div",{staticClass:"e-tag-link",class:this.tagData.className},[e("a",{attrs:{href:this.tagData.link}},[e("span",[this._v("赚"+this._s(this.tagData.earnings)+"元")])])]):this._e()}),[],!1,null,null,null);e.a=n.exports},d863:function(t,e,s){"use strict";s("a481");var i=s("7067");e.a={data:function(){return{redirect:""}},created:function(){this.redirect=decodeURIComponent(this.$route.fullPath)},methods:{afterLogin:function(){var t=this,e=this.$route.query.redirect?decodeURIComponent(this.$route.query.redirect):"/",s=this.$route.query.skipUrl?decodeURIComponent(this.$route.query.skipUrl):"",a=this.$route.query.callbackType,n=this.$route.query.activityId,r=decodeURIComponent(this.$route.query.callback);setTimeout((function(){if(a)switch(a){case"marketing":Object(i.a)(n,r)}else s?t.$router.replace({path:e,query:{backUrl:s}}):t.$router.replace({path:e})}),2e3)}}}},fd23:function(t,e,s){"use strict";s("6b54");var i=s("0d25"),a={props:{activity:{type:Object,default:{}}},data:function(){return{timer:null,counting:!0,seckillClass:"seckill-unstart",seckilling:!1,buyCountDownText:"",endCountDownText:""}},computed:{statusTitle:{get:function(){var t=this.activity.status;if("unstart"===t)return this.counting=!1,"秒杀未开始";if("closed"===t)return this.counting=!1,this.seckillClass="seckill-closed","秒杀已结束";if("ongoing"===t){if(!this.counting)return"秒杀已结束";if(0==this.activity.productRemaind)return this.counting=!1,this.seckillClass="seckill-closed",this.$emit("sellOut",!0),"商品已售空";var e=(new Date).getTime();if(this.startStamp<e&&e<this.endStamp)return this.seckilling=!0,this.counting=!0,this.seckillClass="seckill-ongoing",'距离结束仅剩<span class="ml10 mlm">'.concat(this.endCountDownText,"</span>");if(this.startStamp>e)return this.seckilling=!1,this.counting=!0,this.seckillClass="seckill-unstart",'距离开抢<span class="ml10 mlm">'.concat(this.buyCountDownText,"</span>")}},set:function(){}},startStamp:function(){return new Date(this.activity.startTime).getTime()},endStamp:function(){return new Date(this.activity.endTime).getTime()}},created:function(){this.countDownTime()},beforeDestroy:function(){this.clearInterval()},methods:{countDownTime:function(){var t=this;this.timer=setInterval((function(){t.endCountDownText=Object(i.dateTimeDown)(t.endStamp),t.buyCountDownText=Object(i.dateTimeDown)(t.startStamp),"已到期"==t.endCountDownText&&(t.seckillClass="seckill-closed",t.counting=!1,t.clearInterval(),t.$emit("timesUp"))}),1e3)},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearInterval(this.timer),this.timer=null}))}},n=(s("50ad"),s("a6c2")),r=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:["seckill-countdown-container clearfix",this.seckillClass]},[e("span",{staticClass:"pull-left status-title"},[this._v("秒杀"+this._s("ongoing"===this.activity.status&&this.seckilling?"中":""))]),e("div",{staticClass:"pull-right text-12",domProps:{innerHTML:this._s(this.statusTitle)}})])}),[],!1,null,null,null);e.a=r.exports}}]);