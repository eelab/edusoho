!function(c){function e(e){for(var t,n,a=e[0],i=e[1],r=e[2],s=0,o=[];s<a.length;s++)n=a[s],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&o.push(d[n][0]),d[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(c[t]=i[t]);for(h&&h(e);o.length;)o.shift()();return u.push.apply(u,r||[]),l()}function l(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==d[r]&&(a=!1)}a&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},d={216:0},u=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=c,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var i=0;i<t.length;i++)e(t[i]);var h=a;u.push([687,0]),l()}({159:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(29),i=n.n(a),r=n(0),s=n.n(r),o=n(1),c=n.n(o),l=function(){function t(e){s()(this,t),this.$elem=$(e),this.init(),this.selectMap={}}return c()(t,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var t=this;this.$elem.on("click",".js-checkbox",function(e){t.toggleItem(e),t.changeSelectedNum()}),this.$elem.on("click",".js-select-all",function(e){$(e.target).prop("checked")?(t.$elem.find(".js-select-all").prop("checked",!0),t.addItems()):(t.$elem.find(".js-select-all").prop("checked",!1),t.removeItems()),t.changeSelectedNum()})}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,a=e.removeCb,i=void 0===a?function(){}:a;this.addCb=n,this.removeCb=i}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var n=this;this.$elem.find(".js-checkbox").each(function(e,t){$(t).prop("checked")||(n.addItem(t),n.addCb&&n.addCb(t))})}},{key:"removeItems",value:function(){var a=this;this.$elem.find(".js-checkbox").each(function(e,t){var n;$(t).prop("checked")&&(n=a.getItem($(t)),a.removeItem(n),a.removeCb&&a.removeCb(t))})}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return i()(this.selectMap).length}},{key:"toJson",value:function(){return i()(this.selectMap)}},{key:"updateTable",value:function(){var n=this;this.$elem.find(".js-checkbox").each(function(e,t){n.selectMap[$(t).data("id")]&&$(t).prop("checked",!0)}),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){0<this.$elem.find(".js-select-number").length&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),t}()},687:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1),s=n.n(r),o=n(159);new(function(){function e(){i()(this,e),this.table=$(".js-testpaper-html"),this.selector=new o.a(this.table),this.renderUrl=$("#renderUrl").data("url"),this.init()}return s()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var t=this;this.table.on("click","#batch-add",function(e){t.onBatchAdd(e)}),this.table.on("click",".pagination li",function(e){t.onClickPagination(e)})}},{key:"onBatchAdd",value:function(e){var t=$(e.currentTarget),n=t.data("name"),a=this.selector.toJson();0!==a.length?cd.confirm({title:Translator.trans("site.data.add_title_hint",{name:n}),content:Translator.trans("site.data.add_check_name_hint",{name:n}),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(t.data("url"),{ids:a},function(e){e?(cd.message({type:"success",message:Translator.trans("site.add_success_hint")}),window.location.reload()):cd.message({type:"danger",message:Translator.trans("site.add_fail_hint")})}).error(function(e){cd.message({type:"danger",message:Translator.trans("site.add_fail_hint")})})}):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:n})})}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.table.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"renderTable",value:function(e){e||this._resetPage();var t=this,n=this.table.find('[data-role="search-conditions"]').serialize()+"&page="+this.table.find(".js-page").val();this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:n}).done(function(e){t.table.html(e),t.table.updateTable()}).fail(function(){t._loaded_error()})}},{key:"_resetPage",value:function(){this.table.find(".js-page").val(1)}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}}]),e}())}});