(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1ea9":function(t,n,a){"use strict";(function(t){a("9571"),a("921b");r(a("66fd"));var n=r(a("ee8b"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},"834b":function(t,n,a){},8947:function(t,n,a){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return r}),a.d(n,"b",function(){return e})},"922e":function(t,n,a){"use strict";a.r(n);var r=a("cb91"),e=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(n,t,function(){return r[t]})}(i);n["default"]=e.a},bc7e:function(t,n,a){"use strict";var r=a("834b"),e=a.n(r);e.a},cb91:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return a.e("components/uni-swiper-dot/uni-swiper-dot").then(a.bind(null,"3cac"))},e={components:{uniSwiperDot:r},data:function(){return{banner_status:!0,room_status:!0,school_status:!0,title:"Hello",current:0,mode:"default",dotsStyles:{},info:[{url:"../../static/img/lunbo.png"},{url:"../../static/img/lunbo.png"},{url:"../../static/img/lunbo.png"}],icon:[{src:"../../static/img/xiao.png",txt:"考场详情",url:""},{src:"../../static/img/xiao.png",txt:"考场详情",url:""},{src:"../../static/img/xiao.png",txt:"考场详情",url:""},{src:"../../static/img/xiao.png",txt:"考场详情",url:""}],arra:[],arrb:[]}},onLoad:function(){this.getbanner(),this.getdriving_room(),this.getdriving_school()},methods:{change:function(t){this.current=t.detail.current},kaochang:function(){t.navigateTo({url:"/pages/kaochang/index"})},kaochangs:function(n){var a=n.currentTarget.dataset.id;t.navigateTo({url:"/pages/kaochangs/index?id="+a})},jiaxiao:function(){t.navigateTo({url:"/pages/jiaxiao/index"})},jiaxiaos:function(){t.navigateTo({url:"/pages/jiaxiaos/index"})},getbanner:function(){var n=this,a=this.$url;t.request({url:a+"Index/get_banner",success:function(t){400==t.data.error?(n.banner_status=!1,n.lunbo=t.data.info):200==t.data.error&&(n.lunbo=t.data.data)}})},getdriving_room:function(){var n=this,a=this.$url;t.request({url:a+"Index/driving_room",success:function(t){400==t.data.error?(n.room_status=!1,n.arra=t.data.info):200==t.data.error&&(n.arra=t.data.data)}})},getdriving_school:function(){var n=this,a=this.$url;t.request({url:a+"Index/driving_school",success:function(t){400==t.data.error?(n.school_status=!1,n.arrb=t.data.info):200==t.data.error&&(n.arrb=t.data.data)}})}}};n.default=e}).call(this,a("6e42")["default"])},ee8b:function(t,n,a){"use strict";a.r(n);var r=a("8947"),e=a("922e");for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);a("bc7e");var o=a("2877"),u=Object(o["a"])(e["default"],r["a"],r["b"],!1,null,null,null);n["default"]=u.exports}},[["1ea9","common/runtime","common/vendor"]]]);