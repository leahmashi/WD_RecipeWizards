(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-160e51e6":"1d5c35b9","chunk-24dd81e3":"7762896a","chunk-2d0d30d1":"f43e9627","chunk-2d0e1bb0":"1dd2e755","chunk-2d1a28c6":"6fdf7599","chunk-51eb9084":"5fb3cccc","chunk-60362ff0":"7ee4e6db","chunk-73f99599":"3545456a","chunk-955f36ce":"d613cb96"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-160e51e6":1,"chunk-24dd81e3":1,"chunk-2d1a28c6":1,"chunk-51eb9084":1,"chunk-60362ff0":1,"chunk-73f99599":1,"chunk-955f36ce":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-160e51e6":"1929ab1c","chunk-24dd81e3":"13df2398","chunk-2d0d30d1":"31d6cfe0","chunk-2d0e1bb0":"31d6cfe0","chunk-2d1a28c6":"a951bac8","chunk-51eb9084":"7c1b91e4","chunk-60362ff0":"b95e6f5f","chunk-73f99599":"86a530f5","chunk-955f36ce":"cfae2e60"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push(["56d7","chunk-vendors"]),n()})({"3c68":function(e,t,n){"use strict";var r=n("91ca"),a=n.n(r);a.a},"4d4a":function(e,t,n){"use strict";var r=n("8140"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-nav",[n("b-nav-item",[n("router-link",{attrs:{to:{name:"main"}}},[e._v(" Main ")])],1),n("b-nav-item",[n("router-link",{attrs:{to:{name:"search"}}},[e._v(" Search ")])],1),n("b-nav-item",[n("router-link",{attrs:{to:{name:"newRecipe"}}},[e._v(" Add Recipe ")])],1),n("b-nav-item",[n("router-link",{attrs:{to:{name:"about"}}},[e._v(" About Us ")])],1),n("b-navbar-nav",{staticClass:"ml-auto"},[e.$root.store.username?n("span",{attrs:{id:"user"}},[n("b-nav-item-dropdown",{attrs:{text:"Personal"}},[n("b-dropdown-item",[n("router-link",{attrs:{to:{name:"favorites"},id:"favoritesLink"}},[e._v("Favorites")])],1),n("b-dropdown-item",[n("router-link",{attrs:{to:{name:"private"},id:"privateLink"}},[e._v("Private")])],1),n("b-dropdown-item",[n("router-link",{attrs:{to:{name:"family"},id:"familyLink"}},[e._v("Family")])],1)],1),n("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" "+e._s(e.$root.store.username)+" ")]},proxy:!0}])},[n("b-dropdown-item",[n("button",{on:{click:e.Logout}},[e._v("Logout")])])],1)],1):n("span",{attrs:{id:"guest"}},[n("b-nav-item-dropdown",{attrs:{text:"Guest",right:""}},[n("b-dropdown-item",[n("router-link",{attrs:{to:{name:"register"},id:"registerLink"}},[e._v("Register")])],1),n("b-dropdown-item",[n("router-link",{attrs:{to:{name:"login"},id:"loginLink"}},[e._v("Login")])],1)],1)],1)])],1)],1)],1),n("div",{attrs:{id:"routerView"}},[n("router-view")],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("p",{attrs:{id:"contactUs"}},[e._v("Contact Us At: leahma@post.bgu.ac.il")])])}],i=(n("96cf"),n("1da1")),c={name:"App",methods:{Logout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$root.store.logout(),e.$root.toast("Logout","User logged out successfully","success"),t.prev=2,t.next=5,e.axios.post(e.$root.store.server_domain+"/Logout");case 5:t.sent,t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message,e.$router.push("/")["catch"]((function(){e.$forceUpdate()}));case 13:case"end":return t.stop()}}),t,null,[[2,8]])})))()}}},s=c,u=(n("3c68"),n("2877")),l=Object(u["a"])(s,a,o,!1,null,"70989474",null),d=l.exports,p=n("a7fe"),f=n.n(p),m=n("bc3a"),v=n.n(m),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"mainPage"}},[n("div",{staticClass:"column",attrs:{id:"left"}},[n("h1",{staticClass:"title"},[e._v("Explore this recipes")]),n("RecipePreviewList",{staticClass:"RandomRecipes",attrs:{title:"Random Recipes"}}),n("button",{on:{click:e.getRandom}},[e._v("Accio 3 new recipes")])],1),n("div",{staticClass:"column",attrs:{id:"right"}},[e.$root.store.username?e._e():n("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to view this")]),e.$root.store.username?n("div",[n("LastViewedRecipes",{class:{lastViewed:!0,center:!0},attrs:{title:"Last Viewed Recipes"}})],1):n("div",[n("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)],1)])},b=[],g=n("99d8"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("h1",[e._v(" "+e._s(e.title)+" "),e._t("default")],2),n("b-row",{attrs:{id:"recipesPreview"}},e._l(e.recipes,(function(e){return n("b-col",{key:e.id,staticClass:"recipeView"},[n("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},w=[],_=n("2909"),y=n("832a"),x=(n("c0d6"),{name:"LastViewedRecipes",components:{RecipePreview:y["a"]},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.LastViewed()},methods:{LastViewed:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/lastViewed");case 3:r=t.sent,console.log(r),a=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(_["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}}),R=x,$=(n("f7d3"),Object(u["a"])(R,k,w,!1,null,"342594fc",null)),j=$.exports,O={name:"MainPage",components:{RecipePreviewList:g["a"],LastViewedRecipes:j},mounted:function(){this.getRandom()},methods:{getRandom:function(){this.$root.$emit("randomRecipes")}}},P=O,L=(n("a2ab"),Object(u["a"])(P,h,b,!1,null,"a90264de",null)),C=L.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Four Oh Four you didn't")]),n("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},S=[],T={},F=Object(u["a"])(T,E,S,!1,null,null,null),A=F.exports,V=[{path:"/",name:"main",component:C},{path:"/register",name:"register",component:function(){return n.e("chunk-60362ff0").then(n.bind(null,"eaff"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-51eb9084").then(n.bind(null,"62cc"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-24dd81e3").then(n.bind(null,"37906"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-955f36ce").then(n.bind(null,"478b"))}},{path:"/recipe/:recipeId",name:"recipe",component:function(){return n.e("chunk-73f99599").then(n.bind(null,"6619"))}},{path:"/favorites",name:"favorites",component:function(){return n.e("chunk-2d1a28c6").then(n.bind(null,"5231"))}},{path:"/newRecipe",name:"newRecipe",component:function(){return n.e("chunk-160e51e6").then(n.bind(null,"0945"))}},{path:"/family",name:"family",component:function(){return n.e("chunk-2d0e1bb0").then(n.bind(null,"7c4b"))}},{path:"/private",name:"private",component:function(){return n.e("chunk-2d0d30d1").then(n.bind(null,"5ab1"))}},{path:"*",name:"notFound",component:A}],I=V,M=n("8c4f"),q=n("1dce"),U=n.n(q),N=(n("f9e3"),n("2dd8"),n("1073")),B=n("cbd0"),D=n("b1fc"),H=n("7049"),G=n("a7e2"),J=n("f9bc"),z=n("44d4"),K=n("cca8"),W=n("51c2"),Y=n("498a"),Q=n("c0d6");r["default"].use(M["a"]);var X=new M["a"]({routes:I});[N["a"],B["a"],D["a"],H["a"],G["a"],J["a"],z["a"],K["a"],W["a"],Y["a"]].forEach((function(e){return r["default"].use(e)})),r["default"].use(U.a),v.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),r["default"].use(f.a,v.a),r["default"].config.productionTip=!1;var Z={username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0},server_domain:Q["state"].server_domain,lastSearched:null};console.log(Z),new r["default"]({router:X,data:function(){return{store:Z}},methods:{toast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:n,solid:!0,appendToast:r,autoHideDelay:3e3})}},render:function(e){return e(d)}}).$mount("#app")},5872:function(e,t,n){},8140:function(e,t,n){},"832a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[n("div",[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:e.recipe.title,"img-src":e.recipe.image,"img-alt":"Image","img-top":"",tag:"article"}},[n("b-card-text",[e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes ⏰ "),n("br"),e._v(" "+e._s(e.recipe.aggregateLikes)+" likes 👍 ")])],1)],1)]),n("button",{on:{click:e.addToFavorites}},[e._v("❤")])],1)},a=[],o=(n("96cf"),n("1da1")),i={name:"RecipePreview",mounted:function(){var e=this;this.axios.get(this.recipe.image).then((function(){e.image_load=!0}))},data:function(){return{image_load:!1}},props:{recipe:{type:Object,required:!0}},methods:{addToFavorites:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$root.store.server_domain+"/users/favorites",t.prev=1,t.next=4,e.axios.post(n,{user_name:e.$root.store.username,recipe_id:e.recipe.id});case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},c=i,s=(n("4d4a"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"e53977ee",null);t["a"]=u.exports},"91ca":function(e,t,n){},"99d8":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("h3",[e._v(" "+e._s(e.title)+" "),e._t("default")],2),n("b-row",e._l(e.recipes,(function(e){return n("b-col",{key:e.id},[n("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},a=[],o=n("2909"),i=(n("96cf"),n("1da1")),c=n("832a"),s=n("c0d6"),u={name:"RecipePreviewList",components:{RecipePreview:c["a"]},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){var e=this;this.$root.$on("randomRecipes",(function(){e.updateRecipes()})),this.$root.$on("favorite",(function(){e.getFavorites()})),this.$root.$on("private",(function(){e.getPrivate()})),this.$root.$on("family",(function(){e.getFamily()}))},methods:{updateRecipes:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(s.state.server_domain+"/recipes/random");case 3:r=t.sent,console.log(r.data),a=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(o["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getFavorites:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:r=t.sent,console.log(r.data),a=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(o["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getPrivate:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/personal");case 3:r=t.sent,console.log(r.data),a=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(o["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getFamily:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/familyrecipes");case 3:r=t.sent,console.log(r),a=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(o["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},l=u,d=(n("f95f"),n("2877")),p=Object(d["a"])(l,r,a,!1,null,"1d87f2b4",null);t["a"]=p.exports},a2ab:function(e,t,n){"use strict";var r=n("5872"),a=n.n(r);a.a},b979:function(e,t,n){},c0d6:function(e,t){var n={server_domain:"https://recipeWizard.cs.bgu.ac.il"};t.state=n},cfdf:function(e,t,n){},f7d3:function(e,t,n){"use strict";var r=n("b979"),a=n.n(r);a.a},f95f:function(e,t,n){"use strict";var r=n("cfdf"),a=n.n(r);a.a}});
//# sourceMappingURL=app.3e7750ee.js.map