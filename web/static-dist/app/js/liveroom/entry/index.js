!function(t){function e(e){for(var i,r,o=e[0],u=e[1],l=e[2],h=0,v=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);for(c&&c(e);v.length;)v.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={243:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static-dist/";var o=window.webpackJsonp=window.webpackJsonp||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;a.push([882,0]),n()}({323:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(1),s=n.n(i),a=n(3),r=n.n(a),o=n(42),u=n.n(o),l=(n(344),n(345),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s()(this,t),this.$element=null===e?$(".all-wrapper"):e,this.mask='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                    <div class="continue-studying">\n                        <button class="btn btn-primary js-continue-studying">'.concat(Translator.trans("course.task.out_focus_mask.continue_studying"),"</button>\n                    </div>\n                </div>\n            </div>"),this.mask1='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                </div>\n            </div>',this.initEvent()}return r()(t,[{key:"initEvent",value:function(){this._registerChannel()}},{key:"validateMask",value:function(){return this.$element.find(".out-focus-mask").length>0}},{key:"initLearStopTips",value:function(){this.validateMask()||(this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.stop.tips")),this.popAfter())}},{key:"initAntiBrushTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"initBanTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask1),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"continueStudying",value:function(){this.destroyMask(),this._publishResponse("play")}},{key:"destroyMask",value:function(){this.$element.find(".out-focus-mask").remove()}},{key:"popAfter",value:function(){this._publishResponse("pause")}},{key:"_registerChannel",value:function(){return u.a.instanceId("task"),u.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"out"}]),this}},{key:"_publishResponse",value:function(t){u.a.publish({channel:"task-events",topic:"monitoringEvent",data:t})}}]),t}()),c=n(19),h=n(76),v=n.n(h),d=function(){function t(e){s()(this,t),this.maskElement=e.maskElement||null,this.OutFocusMask=new l(this.maskElement),this.activityTimer=null,this.ACTIVITY_TIME=1200,this.eventMaskElement=null,this.eventMaskTimer=null,this.EVENT_MASK_TIME=30,this.videoPlayRule=e.videoPlayRule,this.taskType=e.taskType,this.taskPipe=e.taskPipe,this.lastFullScreenState=v.a.isFullscreen,this.fullScreenTimer=null,this.initEvent()}return r()(t,[{key:"initEvent",value:function(){var t=this;$("body").off("click",".js-continue-studying"),$("body").on("click",".js-continue-studying",(function(){t.OutFocusMask.continueStudying(),t.taskPipe._flush({reActive:1}),t.taskPipe.absorbedChange(0)})),Object(c.f)()||"auto_pause"===this.videoPlayRule&&"video"===this.taskType&&(c.a.safari&&this.safariResetFullScreenState(),this.initMaskElement(),this.initVisibilitychange(),this.initActivity())}},{key:"initMaskElement",value:function(){$("body").append('\n      <div class="monitor-event-mask" style="position: fixed; left: 0; right: 0; top: 0; bottom: 0; opacity: 0; display: none;"></div>\n    '),this.eventMaskElement=$(".monitor-event-mask"),this.maskElementShow()}},{key:"ineffectiveEvent",value:function(){this.OutFocusMask.initLearStopTips(),this.taskPipe.absorbedChange(1),this.taskPipe._flush()}},{key:"triggerEvent",value:function(t){this.taskPipe.absorbedChange(1),"reject_current"!==t?"kick_previous"!==t||this.OutFocusMask.initAntiBrushTips():this.OutFocusMask.initBanTips()}},{key:"initVisibilitychange",value:function(){var t=this;document.addEventListener("visibilitychange",(function(){if("hidden"===document.visibilityState){if(c.a.safari&&!t.lastFullScreenState&&v.a.isFullscreen)return void(t.lastFullScreenState=v.a.isFullscreen);t.ineffectiveEvent()}}))}},{key:"safariResetFullScreenState",value:function(){var t=this;window.addEventListener("resize",(function(){!t.fullScreenTimer&&t.lastFullScreenState&&(t.fullScreenTimer=setTimeout((function(){t.lastFullScreenState=v.a.isFullscreen,clearTimeout(t.fullScreenTimer),t.fullScreenTimer=null}),66))}))}},{key:"initActivity",value:function(){this.afterActivity(),document.onmousedown=this.afterActivity.bind(this),document.onscroll=this.afterActivity.bind(this),document.onkeypress=this.afterActivity.bind(this),document.onmousemove=this.afterActivity.bind(this)}},{key:"afterActivity",value:function(){var t=this;this.maskElementHide(),clearTimeout(this.activityTimer),this.activityTimer=null,this.activityTimer=setTimeout((function(){t.ineffectiveEvent()}),1e3*this.ACTIVITY_TIME)}},{key:"maskElementShow",value:function(){var t=this;clearTimeout(this.eventMaskTimer),this.eventMaskTimer=null,this.eventMaskTimer=setTimeout((function(){t.eventMaskElement.show()}),1e3*this.EVENT_MASK_TIME)}},{key:"maskElementHide",value:function(){this.eventMaskElement.hide(),this.maskElementShow()}}]),t}()},81:function(t,e,n){"use strict";var i=n(16),s=n.n(i),a=n(1),r=n.n(a),o=n(3),u=n.n(o),l=(n(104),function(){function t(){r()(this,t)}return u()(t,null,[{key:"set",value:function(t,e,n){var i=store.get("durations",{});i&&i instanceof Array||(i=new Array);var s=t+"-"+e+":"+n;i.length>0&&i.slice(i.length-1,i.length)[0].indexOf(t+"-"+e)>-1&&i.splice(i.length-1,i.length),i.length>=20&&i.shift(),i.push(s),store.set("durations",i)}},{key:"get",value:function(t,e){var n=store.get("durations",{});if(n)for(var i=0;i<n.length;i++){if(n[i].indexOf(t+"-"+e)>-1){var a=n[i];return s()(a.split(":")[1])}}return 0}},{key:"del",value:function(t,e){var n=store.get("durations");if(n){for(var i=0;i<n.length;i++){n[i].indexOf(t+"-"+e)>-1&&n.splice(i,1)}store.set("durations",n)}}}]),t}());e.a=l},882:function(t,e,n){"use strict";n.r(e);var i=n(14),s=n.n(i),a=n(1),r=n.n(a),o=n(3),u=n.n(o),l=n(47),c=n(81),h=n(323),v=n(19);new(function(){function t(){r()(this,t),this.taskId=$("#entry").data("taskId"),this.courseId=$("#entry").data("courseId"),this.taskPipeCounter=0,this.pushing=!1,this.sign="",this.absorbed=0,this.TASK_PIPE_INTERNAL=60,this.intervalId=null,this.lastTimestamp=0,this.init()}return u()(t,[{key:"init",value:function(){"student"===$("#entry").data("role")&&0!=this.taskId&&this.triggerLiveEvent()}},{key:"triggerLiveEvent",value:function(){this._initInterval(),v.a.safari&&!Object(v.f)()&&this.safariVisibilitychange()}},{key:"_clearInterval",value:function(){clearInterval(this.intervalId)}},{key:"_initInterval",value:function(){var t=this;this._flush(),window.onbeforeunload=function(){t._clearInterval(),t._flush(),t.sign.length>0&&localStorage.setItem("flowSign",t.sign)},this._clearInterval(),this.intervalId=setInterval((function(){return t._addPipeCounter()}),1e3)}},{key:"_flush",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.pushing)if(""===this.sign){var n={},i=localStorage.getItem("flowSign");i&&(this.lastSign=i,n.lastSign=i,localStorage.removeItem("flowSign")),l.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"start"},data:s()({client:"pc"},n)}).then((function(n){if(t.MonitoringEvents=new h.a({videoPlayRule:t.videoPlayRule,taskType:"live",taskPipe:t,maskElement:$("body")}),n.learnControl.allowLearn||"kick_previous"!==n.learnControl.denyReason){if(!n.learnControl.allowLearn&&"reject_current"===n.learnControl.denyReason)return t.MonitoringEvents.triggerEvent("reject_current"),t._clearInterval(),void $("[name=classroom]").attr("src","");t.sign=n.record.flowSign,t.record=n.record,t._doing(e)}else t.MonitoringEvents.triggerEvent("kick_previous")}))}else this._doing(e)}},{key:"_doing",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0!==this.sign.length){var n={client:"pc",sign:this.sign,duration:this.taskPipeCounter,status:this.absorbed,lastLearnTime:c.a.get(this.userId,this.fileId)};if(e.watchTime){var i={watchData:{duration:e.watchTime}};n=s()(n,i)}e.reActive&&(n.reActive=e.reActive),this.pushing=!0,l.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"doing"},data:n}).then((function(e){t.pushing=!1,t.record=e.record,t.taskPipeCounter=0,t.lastTimestamp=(new Date).getTime(),e.learnControl.allowLearn||"kick_previous"!==e.learnControl.denyReason?e.learnControl.allowLearn||"reject_current"!==e.learnControl.denyReason||t.MonitoringEvents.triggerEvent("reject_current"):t.MonitoringEvents.triggerEvent("kick_previous")})).catch((function(e){t.pushing=!1,t._clearInterval(),cd.message({type:"danger",message:Translator.trans("task_show.user_login_protect_tip")})}))}}},{key:"absorbedChange",value:function(t){this.absorbed=t}},{key:"_addPipeCounter",value:function(){this.taskPipeCounter++,this.taskPipeCounter>=this.TASK_PIPE_INTERNAL&&this._flush()}},{key:"safariVisibilitychange",value:function(){var t=this;document.addEventListener("visibilitychange",(function(){var e=document.visibilityState;"hidden"===e?t._clearInterval():"visible"===e&&(t.taskPipeCounter=Math.round(((new Date).getTime()-t.lastTimestamp)/1e3),t.intervalId=setInterval((function(){return t._addPipeCounter()}),1e3))}))}}]),t}())}});