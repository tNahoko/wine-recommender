(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("v-app-bar",{attrs:{app:"",dark:"",fixed:""}},[n("h1",[e._v("Wine Recommender")])]),n("v-main",[n("Search"),!0===e.showList?n("List"):e._e()],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-toolbar",{attrs:{dark:"",color:"teal"}},[n("v-toolbar-title",[e._v("Your current favorite")]),n("v-autocomplete",{staticClass:"mx-4",attrs:{items:e.items,loading:e.isLoading,"search-input":e.search,"cache-items":"","hide-no-data":"","hide-details":"",label:"Search/choose the wine you like","solo-inverted":"","return-object":""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),n("v-toolbar",[n("v-btn",{attrs:{outlined:"",block:"",color:"green"},on:{click:e.handleClick}},[e._v("See top 7 recommendation")])],1)],1)},c=[],s=n("b85c"),u=n("1da1"),l=(n("96cf"),n("4de4"),{name:"Search",data:function(){return{isLoading:!1,items:[],search:null,select:null,id:"",title:""}},computed:{allWines:function(){return this.$store.state.allWines}},methods:{handleClick:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$store.state.allWines.filter((function(e){return e[6]===n.select}))[0][0],e.next=3,this.$store.dispatch("getRecommendation",t);case 3:return e.next=5,this.$store.dispatch("setShowList",!0);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getAllWines");case 2:t=this.$store.state.allWines,n=Object(s["a"])(t);try{for(n.s();!(r=n.n()).done;)a=r.value,this.items.push(a[6])}catch(o){n.e(o)}finally{n.f()}case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}),p=l,f=n("2877"),m=n("6544"),d=n.n(m),h=n("c6a6"),v=n("8336"),b=n("a523"),w=n("71d9"),g=n("2a7f"),y=Object(f["a"])(p,i,c,!1,null,null,null),x=y.exports;d()(y,{VAutocomplete:h["a"],VBtn:v["a"],VContainer:b["a"],VToolbar:w["a"],VToolbarTitle:g["a"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.recommendation,(function(t){return n("li",{key:t.id},[e._v(" "+e._s(t.title)+" ")])})),0)},O=[],j={name:"List",data:function(){return{items:this.$store.state.recommendation}},computed:{recommendation:function(){return this.$store.state.recommendation}},methods:{}},k=j,R=Object(f["a"])(k,_,O,!1,null,null,null),S=R.exports,L={name:"App",components:{List:S,Search:x},data:function(){return{items:this.$store.state.recommendation}},computed:{showList:function(){return this.$store.state.showList}},methods:{}},$=L,W=n("7496"),A=n("40dc"),V=n("f6c4"),P=Object(f["a"])($,a,o,!1,null,null,null),T=P.exports;d()(P,{VApp:W["a"],VAppBar:A["a"],VContainer:b["a"],VMain:V["a"]});var C=n("f309");r["a"].use(C["a"]);var M=new C["a"]({}),E=n("2f62"),B=n("bc3a"),J=n.n(B);r["a"].use(E["a"]);var I=new E["a"].Store({state:{allWines:[],recommendation:[],showList:!1},mutations:{setAllWines:function(e,t){e.allWines=t},setRecommendation:function(e,t){e.recommendation=t},setShowList:function(e,t){e.showList=t}},actions:{getAllWines:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,J.a.get("http://127.0.0.1:5000/wine/all");case 4:r=e.sent,n("setAllWines",r.data.wine_data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),n("setAllWines",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}(),getRecommendation:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,e.next=4,J.a.get("http://127.0.0.1:5000/wine/recommendation/".concat(n));case 4:a=e.sent,r("setRecommendation",a.data.recommendation),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),r("setRecommendation",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),setShowList:function(e,t){var n=e.commit;n("setShowList",t)}},getters:{getRecommendation:function(e){return e.recommendation}}});r["a"].config.productionTip=!1,new r["a"]({store:I,vuetify:M,render:function(e){return e(T)}}).$mount("#app")}});
//# sourceMappingURL=app.5b3c7549.js.map