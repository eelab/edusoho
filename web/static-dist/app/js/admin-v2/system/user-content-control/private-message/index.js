!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static-dist/",a(a.s=584)}({584:function(e,t){var n=$(".js-private-message-setting-save-btn");$("#user_content_control_private_message").validate({rules:{},ajax:!0,submitSuccess:function(){cd.message({type:"success",message:Translator.trans("site.save_success_hint")}),n.button("reset")}});n.on("click",function(e){$(e.currentTarget).button("loading"),$("#user_content_control_private_message").submit()}),$('input[name="enable_private_message"]').change(function(e){var t=$(e.currentTarget),n=$(".js-sub-management");"0"===t.val()?n.addClass("hidden"):"1"===t.val()&&n.removeClass("hidden")})}});