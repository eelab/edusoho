!function(p){function t(t){for(var e,r,n=t[0],o=t[1],u=t[2],a=0,i=[];a<n.length;a++)r=n[a],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&i.push(l[r][0]),l[r]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(p[e]=o[e]);for(d&&d(t);i.length;)i.shift()();return f.push.apply(f,u||[]),c()}function c(){for(var t,e=0;e<f.length;e++){for(var r=f[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==l[u]&&(n=!1)}n&&(f.splice(e--,1),t=a(a.s=r[0]))}return t}var r={},l={204:0},f=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return p[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=p,a.c=r,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/static-dist/";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var d=n;f.push([678,0]),c()}({678:function(t,e,r){"use strict";r.r(e);var n=new(r(165).a)({element:"#logo-crop",group:"group",cropedWidth:1140,cropedHeight:150});n.afterCrop=function(t){var e=$("#upload-picture-btn").data("url");$.post(e,{images:t},function(){document.location.href=$("#upload-picture-btn").data("reloadUrl")})},$("#upload-picture-btn").click(function(t){t.stopPropagation(),n.crop({imgs:{backgroundLogo:[1140,150]}})})}});