!function(l){function e(e){for(var t,n,r=e[0],o=e[1],a=e[2],u=0,i=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&i.push(s[n][0]),s[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(p&&p(e);i.length;)i.shift()();return c.push.apply(c,a||[]),d()}function d(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},s={42:0},c=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=l,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var p=r;c.push([460,0]),d()}({460:function(e,t,n){"use strict";n.r(t);var r=n(59),o=n.n(r);!function(e){window.QiQiuYun||(window.QiQiuYun={});var t=new XMLHttpRequest;t.open("GET",e+"?"+~~(o()()/1e3/60),!1),t.send(null);var n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.text=t.responseText,n.parentNode.insertBefore(r,n)}($(".js-cloud-url").data("url"));var a=$("#document-content");new QiQiuYun.Player({id:"document-content",playServer:app.cloudPlayServer,sdkBaseUri:app.cloudSdkBaseUri,disableDataUpload:app.cloudDisableLogReport,disableSentry:app.cloudDisableLogReport,resNo:a.data("resNo"),token:a.data("token"),user:{id:a.data("userId"),name:a.data("userName")}}),window.onmessage=function(e){var t,n;null==e||null==e||"boolean"==typeof(t=e.data)&&(n=$("#task-content-iframe",window.parent.document),t?(n.removeClass("screen-full"),n.width("100%")):(n.addClass("screen-full"),n.width(window.document.body.offsetWidth+"px")))}}});