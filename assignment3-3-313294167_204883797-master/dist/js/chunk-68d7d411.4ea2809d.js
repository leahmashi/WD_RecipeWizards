(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68d7d411"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var u=r.call(e,t);if("object"!==typeof u)throw TypeError("RegExp exec method returned something other than an Object or null");return u}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},37906:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"searchPage"}},[r("div",{attrs:{id:"form"}},[r("h1",{staticClass:"title"},[e._v("Search")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSearch(t)},reset:function(t){return t.preventDefault(),e.onReset(t)}}},[r("b-form-group",{attrs:{id:"input-group-search","label-cols-sm":"3",label:"search:","label-for":"search"}},[r("b-form-input",{attrs:{id:"search",type:"text",state:e.validateState("search")},model:{value:e.$v.form.search.$model,callback:function(t){e.$set(e.$v.form.search,"$model",t)},expression:"$v.form.search.$model"}}),e.$v.form.search.required?e._e():r("b-form-invalid-feedback",[e._v(" Search is required ")]),e.$v.form.search.alpha?e._e():r("b-form-invalid-feedback",[e._v(" search should be only letters ")])],1),r("b-form-group",{attrs:{id:"input-group-number","label-cols-sm":"3",label:"number of results:","label-for":"numberOfSearch"}},[r("b-form-select",{attrs:{id:"numberOfSearch",options:e.numberOfSearch,state:e.validateState("numberOfSearch")},model:{value:e.$v.form.numberOfSearch.$model,callback:function(t){e.$set(e.$v.form.numberOfSearch,"$model",t)},expression:"$v.form.numberOfSearch.$model"}})],1),r("b-form-group",{attrs:{id:"input-group-searchBy","label-cols-sm":"3",label:"search by:","label-for":"searchBy"}},[r("b-form-select",{attrs:{id:"searchBy",options:e.searchBy,state:e.validateState("searchBy")},model:{value:e.$v.form.searchBy.$model,callback:function(t){e.$set(e.$v.form.searchBy,"$model",t)},expression:"$v.form.searchBy.$model"}})],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[e._v("Search")])],1),e._l(e.recipes,(function(t){return r("li",{key:t.id},[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:t}}),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Search failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)}))],2)])},a=[],u=(r("fb6a"),r("ac1f"),r("841c"),r("2909")),o=(r("96cf"),r("1da1")),i=r("b5ae"),c=r("832a"),f={name:"Search",components:{RecipePreview:c["a"]},data:function(){return{form:{search:"",numberOfSearch:"5",searchBy:"",submitError:void 0},numberOfSearch:[{value:"5",text:"5"},{value:"10",text:"10"},{value:"15",text:"15"}],searchBy:[{value:"foodname",text:"food name"},{value:"recipename",text:"recipe name"}],errors:[],validated:!1,recipes:[]}},validations:{form:{search:{required:i["required"],alpha:i["alpha"]},numberOfSearch:{required:i["required"]},searchBy:{required:i["required"]}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Search:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o,i,c,f,l,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,console.log(e.form.search),console.log(e.form.searchBy),console.log(e.form.numberOfSearch),"foodname"!=e.form.searchBy){t.next=17;break}return n="food",a=e.$root.store.server_domain+"/recipes/search/"+n+"/"+e.form.search,t.next=9,e.axios.get(a);case 9:o=t.sent,i=o.data,e.recipes=[],(r=e.recipes).push.apply(r,Object(u["a"])(i)),e.recipes=e.recipes.slice(0,e.form.numberOfSearch),console.log(e.recipes),t.next=27;break;case 17:return n="recipe",f=e.$root.store.server_domain+"/recipes/search/"+n+"/"+e.form.search,t.next=21,e.axios.get(f);case 21:l=t.sent,s=l.data.results,e.recipes=[],(c=e.recipes).push.apply(c,Object(u["a"])(s)),e.recipes=e.recipes.slice(0,e.form.numberOfSearch),console.log(e.recipes);case 27:t.next=33;break;case 29:t.prev=29,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 33:case"end":return t.stop()}}),t,null,[[0,29]])})))()},onSearch:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Search()},onReset:function(){var e=this;this.form={search:"",numberOfSearch:"5",searchBy:""},this.$nextTick((function(){e.$v.$reset()}))}}},l=f,s=r("2877"),d=Object(s["a"])(l,n,a,!1,null,null,null);t["default"]=d.exports},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,u=(0,n.regex)("email",a);t.default=u},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,u=(0,n.regex)("url",a);t.default=u},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var o=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===u(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=o;var i=function(e){return Array.isArray(e)?e.length:"object"===u(e)?Object.keys(e).length:String(e).length};t.len=i;var c=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=c;var f=function(e,t){return(0,n.default)({type:e},(function(e){return!o(e)||t.test(e)}))};t.regex=f},"841c":function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),u=r("1d80"),o=r("129f"),i=r("14c3");n("search",1,(function(e,t,r){return[function(t){var r=u(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var u=a(e),c=String(this),f=u.lastIndex;o(f,0)||(u.lastIndex=0);var l=i(u,c);return o(u.lastIndex,f)||(u.lastIndex=f),null===l?-1:l.index}]}))},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",VUE_APP_server_domain:"https://recipeWizard.cs.bgu.ac.il",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(u)}))};t.default=a;var u=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),u=RegExp.prototype.exec,o=String.prototype.replace,i=u,c=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],s=c||l||f;s&&(i=function(e){var t,r,a,i,s=this,d=f&&s.sticky,p=n.call(s),b=s.source,v=0,m=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(b="(?: "+b+")",m=" "+m,v++),r=new RegExp("^(?:"+b+")",p)),l&&(r=new RegExp("^"+b+"$(?!\\s)",p)),c&&(t=s.lastIndex),a=u.call(d?r:s,m),d?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=s.lastIndex,s.lastIndex+=a[0].length):s.lastIndex=0:c&&a&&(s.lastIndex=s.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=i},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var a=E(r("6235")),u=E(r("3a54")),o=E(r("45b8")),i=E(r("ec11")),c=E(r("5d75")),f=E(r("c99d")),l=E(r("91d3")),s=E(r("2a12")),d=E(r("5db3")),p=E(r("d4f4")),b=E(r("aa82")),v=E(r("e652")),m=E(r("b6cb")),y=E(r("772d")),h=E(r("d294")),g=E(r("3360")),P=E(r("6417")),_=E(r("eb66")),x=E(r("46bc")),O=E(r("1331")),j=E(r("c301")),S=$(r("78ef"));function w(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return w=function(){return e},e}function $(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=w();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=a?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function E(e){return e&&e.__esModule?e:{default:e}}t.helpers=S},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(u)}));t.default=a;var u=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},u=n.vuelidate?n.vuelidate.withParams:a;t.withParams=u}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),u=r("b622"),o=r("9263"),i=r("9112"),c=u("species"),f=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),s=u("replace"),d=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,s){var b=u(e),v=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),m=v&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[b]=/./[b]),r.exec=function(){return t=!0,null},r[b](""),!t}));if(!v||!m||"replace"===e&&(!f||!l||d)||"split"===e&&!p){var y=/./[b],h=r(b,""[e],(function(e,t,r,n,a){return t.exec===o?v&&!a?{done:!0,value:y.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),g=h[0],P=h[1];n(String.prototype,e,g),n(RegExp.prototype,b,2==t?function(e,t){return P.call(e,this,t)}:function(e){return P.call(e,this)})}s&&i(RegExp.prototype[b],"sham",!0)}},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a}}]);
//# sourceMappingURL=chunk-68d7d411.4ea2809d.js.map