webpackJsonp([0,4],{0:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(80),u=r(o),a=n(3),s=r(a),i=n(114),c=r(i),f=n(38),l=r(f),d=n(77),v=r(d),_=n(70),h=r(_);n(137),n(133),n(131),n(132),n(135),n(136),n(134),n(129),n(130);var g=n(153);s.default.use(c.default),(0,g.sync)(v.default,h.default);var L=new s.default((0,u.default)({router:h.default,store:v.default},l.default));L.$mount("#app")},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.TEST="TEST",e.HOME="HOME",e.DEGREELIST="DEGREELIST",e.BLOCKLIST="BLOCKLIST",e.NODELIST="NODELIST",e.NODESTATUS="NODESTATUS",e.BLOCKSTATUS="BLOCKSTATUS",e.LASTBLOCK="LASTBLOCK",e.LASTDEGREE="LASTDEGREE"},24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.API_ROOT="http://54.222.240.78:7070/",e.CookieDomain=".jackhu.top"},38:function(t,e,n){var r,o;n(127),r=n(63);var u=n(146);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,t.exports=r},39:function(t,e,n){var r,o;n(128),r=n(64);var u=n(150);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=u.render,o.staticRenderFns=u.staticRenderFns,o._scopeId="data-v-ed3ff356",t.exports=r},63:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(39),u=r(o);e.default={name:"app",data:function(){return{}},component:{Hello:u.default}}},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n(138);e.default={name:"Hello",computed:(0,r.mapGetters)({testDatas:"testData"}),methods:(0,r.mapActions)([]),created:function(){(0,o.Toast)({message:"操作成功",iconClass:"icon icon-success"}),this.$store.dispatch("test")},data:function(){return{msg:"Welcome to Your Vue.js App"}}}},68:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=n(69),u=r(o);e.default={getTestData:function(){return u.TestResource.get()},getDegreeListData:function(){return u.DegreeListResource.get()},getBlockListData:function(){return u.BlockListResource.get()},getNodeListData:function(){return u.NodeListResource.get()},getNodeStatus:function(){return u.NodeStatusResource.get()},getBlockStatus:function(){return u.BlocStatusResource.get()},getLastBlock:function(){return u.LastBlockResource.get()},getLastDegree:function(){return u.LastDegreeReource.get()}}},69:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.LastDegreeReource=e.LastBlockResource=e.BlocStatusResource=e.NodeStatusResource=e.NodeListResource=e.BlockListResource=e.DegreeListResource=e.TestResource=void 0;var o=n(3),u=r(o),a=n(151),s=r(a),i=n(24),c=n(71);u.default.use(s.default),u.default.http.options.crossOrigin=!0,u.default.http.options.credentials=!0,u.default.http.interceptors.push(function(t,e){t.headers=t.headers||{},(0,c.getCookie)("token")&&(t.headers.Authorizatin="Bearer "+(0,c.getCookie)("token").replace(/(^\")|(\"$)/g,"")),e(function(t){401===t.status&&((0,c.signOut)(),window.location.pathname="/login")})});e.TestResource=u.default.resource(i.API_ROOT+"test/data"),e.DegreeListResource=u.default.resource(i.API_ROOT+"transaction/service/getRecentlyList"),e.BlockListResource=u.default.resource(i.API_ROOT+"blocks/service/getBlocks"),e.NodeListResource=u.default.resource(i.API_ROOT+"node/service/getNodeLocalDB"),e.NodeStatusResource=u.default.resource(i.API_ROOT+"node/service/getNodeLocalDBtotal"),e.BlocStatusResource=u.default.resource(i.API_ROOT+"blocks/service/getCurrentSumInfo"),e.LastBlockResource=u.default.resource(i.API_ROOT+"blocks/service/getBlocksOne"),e.LastDegreeReource=u.default.resource(i.API_ROOT+"transaction/service/getRecentlyOne")},70:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),u=r(o),a=n(152),s=r(a);u.default.use(s.default);var i=function(t){return n.e(0,function(){return t(n(38))})},c=function(t){return n.e(2,function(){return t(n(145))})},f=function(t){return n.e(1,function(){return t(n(144))})},l=[{path:"/",component:i,children:[{path:"",redirect:"/main"},{path:"/main",component:f},{path:"/test",component:c}]},{path:"*",redirect:"/"}];e.default=new s.default({mode:"hash",scrollBehavior:function(){return{y:0}},routes:l})},71:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){f.default.save(t,e,d)}function u(t){return f.default.load(t)}function a(t){f.default.remove(t,d)}function s(){f.default.remove("token",d)}function i(){return!!f.default.load("token")}Object.defineProperty(e,"__esModule",{value:!0}),e.saveCookie=o,e.getCookie=u,e.removeCookie=a,e.signOut=s,e.isLogin=i;var c=n(140),f=r(c),l=n(24),d={};""!==l.CookieDomain&&(d={domain:l.CookieDomain})},72:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.lastDegree=e.lastBlock=e.blockStatus=e.nodeStatus=e.nodeList=e.blockList=e.degreeList=e.home=e.test=void 0;var u=n(68),a=o(u),s=n(6),i=r(s);e.test=function(t){var e=t.commit;a.default.getTestData().then(function(t){if(t.ok){var n=t.body;e(i.TEST,{data:n})}})},e.home=function(t){var e=t.commit;a.default.getHomeData().then(function(t){for(var n=t.body,r=0;r<n.length;r++)n[r].txId.length>55&&(n[r].txId=n[r].txId.substr(0,55)+"...");e(i.HOME,{data:n})})},e.degreeList=function(t){var e=t.commit;a.default.getDegreeListData().then(function(t){for(var n=t.body,r=0;r<n.length;r++)n[r].txIdS=n[r].txId.substr(0,40)+"...";e(i.DEGREELIST,{data:n})})},e.blockList=function(t){var e=t.commit;a.default.getBlockListData().then(function(t){for(var n=t.body,r=0;r<n.length;r++)n[r].hashS=n[r].hash.substr(0,40)+"...";e(i.BLOCKLIST,{data:n})})},e.nodeList=function(t){var e=t.commit;a.default.getNodeListData().then(function(t){var n=t.body.dataList;e(i.NODELIST,{data:n})})},e.nodeStatus=function(t){var e=t.commit;a.default.getNodeStatus().then(function(t){var n=t.body;e(i.NODESTATUS,{data:n})})},e.blockStatus=function(t){var e=t.commit;a.default.getBlockStatus().then(function(t){var n=t.body;e(i.BLOCKSTATUS,{data:n})})},e.lastBlock=function(t){var e=t.commit;a.default.getLastBlock().then(function(t){var n=t.body;e(i.LASTBLOCK,{data:n})})},e.lastDegree=function(t){var e=t.commit;a.default.getLastDegree().then(function(t){var n=t.body;e(i.LASTDEGREE,{data:n})})}},73:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.testData=function(t){return t.test.test.data},e.tradeData=function(t){return t.home.tradeData},e.degreeList=function(t){return t.main.degreeList},e.blockList=function(t){return t.main.blockList},e.nodeList=function(t){return t.main.nodeList},e.nodeStatus=function(t){return t.main.nodeStatus},e.blockStatus=function(t){return t.main.blockStatus}},74:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),u=r(o),a=n(6),s={tradeData:[]},i=(0,u.default)({},a.HOME,function(t,e){var n=e.data;t.tradeData=n});e.default={state:s,mutations:i}},75:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u,a=n(11),s=o(a),i=n(6),c=r(i),f={degreeList:[],blockList:[],nodeList:[],nodeStatus:{},blockStatus:{}},l=(u={},(0,s.default)(u,c.DEGREELIST,function(t,e){var n=e.data;t.degreeList=n}),(0,s.default)(u,c.BLOCKLIST,function(t,e){var n=e.data;t.blockList=n}),(0,s.default)(u,c.NODELIST,function(t,e){var n=e.data;t.nodeList=n}),(0,s.default)(u,c.NODESTATUS,function(t,e){var n=e.data;t.nodeStatus=n}),(0,s.default)(u,c.BLOCKSTATUS,function(t,e){var n=e.data;t.blockStatus=n}),(0,s.default)(u,c.LASTBLOCK,function(t,e){var n=e.data,r=!0;for(var o in t.blockList)if(t.blockList[o].hash==n.hash){r=!1;break}r&&(n.hashS=n.hash.substr(0,40)+"...",t.blockList.unshift(n),t.blockList.pop())}),(0,s.default)(u,c.LASTDEGREE,function(t,e){var n=e.data,r=!0;for(var o in t.degreeList)if(t.degreeList[o].txId==n.txId){r=!1;break}r&&(n.txIdS=n.txId.substr(0,40)+"...",t.degreeList.unshift(n),t.degreeList.pop())}),u);e.default={state:f,mutations:l}},76:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),u=r(o),a=n(6),s={test:[]},i=(0,u.default)({},a.TEST,function(t,e){var n=e.data;t.test=n});e.default={state:s,mutations:i}},77:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=n(3),a=o(u),s=n(9),i=o(s),c=n(72),f=r(c),l=n(73),d=r(l),v=n(76),_=o(v),h=n(74),g=o(h),L=n(75),p=o(L),m=!1;a.default.use(i.default),a.default.config.debug=m,e.default=new i.default.Store({modules:{test:_.default,home:g.default,main:p.default},actions:f,getters:d})},127:function(t,e){},128:function(t,e){},129:function(t,e){},130:function(t,e){},131:function(t,e){},132:function(t,e){},133:function(t,e){},134:function(t,e){},135:function(t,e){},136:function(t,e){},137:function(t,e){},146:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)},staticRenderFns:[]}},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),n("ul",[t._l(t.testDatas,function(e){return n("ul",[n("li",[t._v(t._s(e.Title))])])}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("br"),t._v(" "),t._m(4)],2),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(5)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},154:function(t,e){}});
//# sourceMappingURL=app.dd82db32d4139cbf57fa.js.map