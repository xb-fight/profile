(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/profile/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0094":function(t,e,n){"use strict";n("0a1c")},"0429":function(t,e,n){},"0a1c":function(t,e,n){},"0bc2":function(t,e,n){"use strict";n("1018")},1018:function(t,e,n){},"102a":function(t,e,n){"use strict";n("9b62")},"13b6":function(t,e,n){"use strict";n("fd0c")},"22e4":function(t,e,n){"use strict";n("6d8d")},"2c79":function(t,e,n){"use strict";n("efee")},"2ced":function(t,e,n){},"38d9":function(t,e,n){"use strict";n("7bbf")},"3db0":function(t,e,n){"use strict";n("4402")},4402:function(t,e,n){},"4b51":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Layout",{scopedSlots:t._u([{key:"left",fn:function(){return[n("SideAside")]},proxy:!0}])},[n("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Layout-container"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"main"},[t._t("default")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},c=[],o={},l=o,p=(n("f293"),n("2877")),u=Object(p["a"])(l,r,c,!1,null,"c522db78",null),m=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SideAside-container"},[n("Avatar",{attrs:{url:t.url,size:150}}),n("Menu"),n("Contact")],1)},h=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"Avatar-container",style:{width:t.size+"px",height:t.size+"px"},attrs:{src:t.url}})},f=[],v=(n("a9e3"),{props:{url:{type:String,required:!0},size:{type:Number}}}),b=v,y=(n("f298"),Object(p["a"])(b,g,f,!1,null,"1aab93e4",null)),_=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"menu-container"},t._l(t.items,(function(e){return n("RouterLink",{key:e.link,attrs:{exact:e.exact,to:{name:e.name},"active-class":"selected","exact-active-class":""}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:e.icon}})],1),n("span",[t._v(t._s(e.title))])])})),1)},j=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"iconfont Icon-container",class:t.getType})},w=[],k={home:"iconzhuye",success:"iconzhengque",error:"iconcuowu",close:"iconguanbi",warn:"iconjinggao",info:"iconxinxi",blog:"iconblog",code:"iconcode",about:"iconset_about_hov",weixin:"iconweixin",mail:"iconemail",github:"icongithub",qq:"iconsign_qq",arrowUp:"iconiconfonticonfonti2copy",arrowDown:"iconiconfonticonfonti2",empty:"iconempty",chat:"iconliuyan"},O={props:{type:{type:String,required:!0}},computed:{getType:function(){return k[this.type]}}},A=O,P=(n("22e4"),Object(p["a"])(A,x,w,!1,null,"0b376b40",null)),T=P.exports,L={components:{Icon:T},data:function(){return{items:[{name:"Home",title:"首页",icon:"home",exact:!0},{name:"Article",title:"文章",icon:"blog",exact:!1},{name:"About",title:"关于我",icon:"about",exact:!0},{name:"Project",title:"项目&效果",icon:"code",exact:!0}]}}},S=L,$=(n("13b6"),Object(p["a"])(S,C,j,!1,null,"7c110046",null)),D=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"contact-container"},[n("li",[n("a",{attrs:{target:"_blanck",href:"https://github.com/xb-fight"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"github"}})],1),n("span",[t._v("小北")])])]),n("li",[n("a",{attrs:{target:"_blanck",href:"mailto:2495349774@qq.com"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"mail"}})],1),n("span",[t._v("2495349774@qq.com")])])]),n("li",[n("a",{attrs:{target:"_blanck",href:"tencent://message/?Menu=yes&uin=2495349774&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"}},[n("div",{staticClass:"icon"},[n("Icon",{attrs:{type:"qq"}})],1),n("span",[t._v("2495349774")])])]),n("li",[n("a",{attrs:{target:"_blanck"}},[n("div",{staticClass:"icon weixin"},[n("Icon",{attrs:{type:"weixin"}})],1),n("span",[t._v("a2495349774")])])])])},M=[],q={components:{Icon:T}},R=q,I=(n("0bc2"),Object(p["a"])(R,E,M,!1,null,"7f4c03b2",null)),H=I.exports,N=n("cd9c"),z=n.n(N),J={components:{Avatar:_,Menu:D,Contact:H},data:function(){return{url:z.a}}},W=J,G=(n("2c79"),Object(p["a"])(W,d,h,!1,null,"67ec6c1d",null)),U=G.exports,B={name:"App",components:{Layout:m,SideAside:U}},F=B,K=(n("102a"),Object(p["a"])(F,s,i,!1,null,"534c1ff3",null)),Y=K.exports,X=(n("4b51"),n("8c4f")),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home-container",on:{wheel:t.handleWheel}},[n("div",{ref:"imgContainer",staticClass:"item",style:{transform:"translateY("+-t.index*t.imgHeight+"px)"},on:{transitionend:t.handleTransitionEnd}},t._l(t.imgs,(function(t,e){return n("img",{key:e,staticClass:"img",attrs:{src:t}})})),0),n("div",{staticClass:"text"},[n("text-eraser",{attrs:{text:t.text,duration:5}})],1),n("div",{staticClass:"dot-container"},t._l(t.imgs,(function(e,a){return n("div",{key:a,staticClass:"dot",class:{selected:a===t.index},on:{click:function(e){return t.imgGo(a)}}})})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.index,expression:"index !== 0"}],staticClass:"arrow-up arrow",on:{click:function(e){return t.imgGo(t.index-1)}}},[n("Icon",{attrs:{type:"arrowUp"}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.index!==t.imgs.length-1,expression:"index !== imgs.length - 1"}],staticClass:"arrow-down arrow",on:{click:function(e){return t.imgGo(t.index+1)}}},[n("Icon",{attrs:{type:"arrowDown"}})],1)])},V=[],Z=n("86b6"),tt=n.n(Z),et=n("82e5"),nt=n.n(et),at=n("5e12"),st=n.n(at),it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextEraser-container"},[n("div",[t._v(" "+t._s(t.text)+" ")]),n("div",{staticClass:"eraser",style:{animationDuration:t.duration+"s"}},[n("span",[t._v(" "+t._s(t.text)+" ")])])])},rt=[],ct={props:{text:{type:String,required:!0},duration:{type:Number,required:!0}}},ot=ct,lt=(n("d4b3"),Object(p["a"])(ot,it,rt,!1,null,"6cbcd8b6",null)),pt=lt.exports,ut={components:{Icon:T,TextEraser:pt},data:function(){return{index:0,imgs:[tt.a,nt.a,st.a],imgHeight:0,text:"talk is cheap, show me the code",isWheeling:!1}},methods:{imgGo:function(t){this.index=t},handleResize:function(){this.imgHeight=this.$refs.imgContainer.clientHeight},handleWheel:function(t){this.isWheeling||(t.deltaY<-5&&this.index>0?(this.isWheeling=!0,this.index-=1):t.deltaY>5&&this.index<this.imgs.length-1&&(this.isWheeling=!0,this.index+=1))},handleTransitionEnd:function(){this.isWheeling=!1}},mounted:function(){this.imgHeight=this.$refs.imgContainer.clientHeight,window.addEventListener("resize",this.handleResize)}},mt=ut,dt=(n("38d9"),Object(p["a"])(mt,Q,V,!1,null,"1cc80250",null)),ht=dt.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Home-container"},[n("iframe",{attrs:{src:"https://xb-fight.github.io/person-info/",frameborder:"0"}})])}],vt={},bt=vt,yt=(n("3db0"),Object(p["a"])(bt,gt,ft,!1,null,"9016674a",null)),_t=yt.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Article-container"},[n("h2",{staticClass:"title"},[t._v("以下数据均为Mockjs模拟制成")]),n("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[n("div",{staticClass:"list-container"},[n("ListLayout",{attrs:{listData:t.list},on:{select:t.listClick}})],1)]},proxy:!0}])},[n("div",{staticClass:"article-list-container"},[n("ul",t._l(t.articleList.rows,(function(e){return n("li",{key:e.id},[e.thumb?n("div",{staticClass:"thumb"},[n("router-link",{attrs:{to:{name:"ArticleDetail",params:{articleId:e.id}}}},[n("img",{attrs:{src:e.thumb,alt:e.title,title:e.title}})])],1):t._e(),n("div",{staticClass:"main"},[n("router-link",{attrs:{to:{name:"ArticleDetail",params:{articleId:e.id}}}},[n("h2",[t._v(t._s(e.title))])]),n("div",{staticClass:"aside"},[n("span",[t._v("日期："+t._s(e.createDate))]),n("span",[t._v("浏览："+t._s(e.scanNumber))]),n("span",[t._v("评论："+t._s(e.commentNumber))]),n("router-link",{attrs:{to:{name:"ArticleCate",params:{categoryId:e.category.id}}}},[t._v(t._s(e.category.name))])],1),n("div",{staticClass:"desc"},[t._v(" "+t._s(e.description)+" ")])],1)])})),0),n("div",{staticClass:"pager"},[t.articleList.total?n("Pager",{attrs:{totle:t.articleList.total,current:t.page,limit:t.limit},on:{pageChange:t.handlePageChange}}):t._e()],1)])])],1)},jt=[],xt=(n("99af"),n("d81d"),n("96cf"),n("1da1")),wt=n("5530"),kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ListLayout-container"},[n("ul",{},t._l(t.listData,(function(e){return n("li",{key:e.id,class:{active:e.selected},on:{click:function(n){return n.stopPropagation(),t.handleClick(e)}}},[n("span",{staticClass:"name"},[t._v(t._s(e.name)+" ")]),e.children?n("ListLayout",{attrs:{listData:e.children},on:{select:t.handleClick}}):t._e()],1)})),0)])},Ot=[],At={name:"ListLayout",props:{listData:{type:Array,required:!0}},computed:{categoryId:function(){return+this.$route.params.categoryId||-1}},methods:{handleClick:function(t){t.selected||this.$emit("select",t)}}},Pt=At,Tt=(n("6129"),Object(p["a"])(Pt,kt,Ot,!1,null,"cdc1114a",null)),Lt=Tt.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Pager-container"},[n("a",{class:{disable:1===t.current},on:{click:function(e){return t.pagerChange(1)}}},[t._v("|<")]),n("a",{class:{disable:1===t.current},on:{click:function(e){return t.pagerChange(t.current-1)}}},[t._v("<")]),t._l(t.pagerDate,(function(e){return n("a",{class:{actived:t.current===e},on:{click:function(n){return t.pagerChange(e)}}},[t._v(t._s(e))])})),n("a",{class:{disable:t.current===t.totlePager},on:{click:function(e){return t.pagerChange(t.current+1)}}},[t._v(">")]),n("a",{class:{disable:t.current===t.totlePager},on:{click:function(e){return t.pagerChange(t.totlePager)}}},[t._v(" >|")])],2)},$t=[],Dt={props:{current:{type:Number,default:1},totle:{type:Number,required:!0},limitPager:{type:Number,default:10},visiblePager:{type:Number,default:10}},computed:{totlePager:function(){return Math.ceil(this.totle/this.limitPager)},minPager:function(){return this.current-Math.floor(this.visiblePager/2)<1?1:this.current-Math.floor(this.visiblePager/2)},maxPager:function(){return this.minPager+this.visiblePager-1>this.totlePager?this.totlePager:this.minPager+this.visiblePager-1},pagerDate:function(){for(var t=[],e=this.minPager;e<=this.maxPager;e++)t.push(e);return t}},methods:{pagerChange:function(t){t<1&&(t=1),t>this.totlePager&&(t=this.totlePager),this.$emit("pageChange",t)}}},Et=Dt,Mt=(n("8eb6"),Object(p["a"])(Et,St,$t,!1,null,"9932525e",null)),qt=Mt.exports,Rt=n("cee4"),It=function(t,e){var n=new a["a"]({render:function(n){return n(t,{props:e})}}).$mount();return n.$el},Ht=n("fa66"),Nt=n.n(Ht),zt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.message||"无消息",n=t.type||"info",a=t.duration||2e3,s=t.container||document.body,i=document.createElement("div"),r=It(T,{type:n});i.innerHTML="<span class=".concat(Nt.a.icon,">").concat(r.outerHTML,"</span>  <span class=").concat(Nt.a.message,">").concat(e,"</span>"),i.className="".concat(Nt.a["message-container"],"  ").concat(Nt.a["message-container-"+n]," "),"static"===getComputedStyle(s).position&&(s.style.position="relative"),s.append(i),i.style.transform="translate(-50%,-50%) translate(5px,20px)",i.style.opacity="0",i.offsetWidth,i.style.transform="translate(-50%,-50%) ",i.style.opacity="1",setTimeout((function(){i.style.transform="translate(-50%,-50%) translate(-5px,-10px)",i.style.opacity="0",i.addEventListener("transitionend",(function(){i.remove(),t.callBack&&t.callBack()}),{once:!0})}),a)},Jt=Rt["a"].create();function Wt(){return Gt.apply(this,arguments)}function Gt(){return Gt=Object(xt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Jt.get("/api/articleType");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),Gt.apply(this,arguments)}function Ut(){return Bt.apply(this,arguments)}function Bt(){return Bt=Object(xt["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:10,a=s.length>2&&void 0!==s[2]?s[2]:-1,t.next=5,Jt.get("/api/article",{params:{page:e,limit:n,categoryId:a}});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),Bt.apply(this,arguments)}function Ft(t){return Kt.apply(this,arguments)}function Kt(){return Kt=Object(xt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Jt.get("/api/article/"+e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),Kt.apply(this,arguments)}function Yt(t){return Xt.apply(this,arguments)}function Xt(){return Xt=Object(xt["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Jt.post("/api/comment",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),Xt.apply(this,arguments)}function Qt(){return Vt.apply(this,arguments)}function Vt(){return Vt=Object(xt["a"])(regeneratorRuntime.mark((function t(){var e,n,a,s=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,n=s.length>1&&void 0!==s[1]?s[1]:10,a=s.length>2&&void 0!==s[2]?s[2]:-1,t.next=5,Jt.get("/api/comment",{params:{page:e,limit:n,articleId:a}});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),Vt.apply(this,arguments)}Jt.interceptors.response.use((function(t){return 0!==t.data.code&&zt({type:"error",message:t.data.msg,duration:2e3}),t.data.data}));var Zt={components:{ListLayout:Lt,Layout:m,Pager:qt},data:function(){return{articleTypeList:[],articleList:[]}},computed:{page:function(){return+this.$route.query.page||1},limit:function(){return+this.$route.query.limit||10},categoryId:function(){return+this.$route.params.categoryId||-1},list:function(){var t=this;return this.articleTypeList.map((function(e){return Object(wt["a"])(Object(wt["a"])({},e),{},{selected:e.id===t.categoryId})}))}},methods:{listClick:function(t){this.$router.push("/article/cate/".concat(t.id))},handlePageChange:function(t){-1===this.categoryId?this.$router.push("/article?page=".concat(t,"&limit=").concat(this.limit)):this.$router.push("/article/cate/".concat(this.categoryId,"?page=").concat(t,"&limit=").concat(this.limit))}},created:function(){var t=this;return Object(xt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Wt();case 2:return t.articleTypeList=e.sent,e.next=5,Ut(t.page,t.limit,t.categoryId);case 5:t.articleList=e.sent;case 6:case"end":return e.stop()}}),e)})))()},watch:{$route:function(){var t=Object(xt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Ut(this.page,this.limit,this.categoryId);case 2:e=t.sent,this.articleList=e;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},te=Zt,ee=(n("7584"),Object(p["a"])(te,Ct,jt,!1,null,"dda5ab36",null)),ne=ee.exports,ae=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},se=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Project-container"},[n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/taobao/",target:"_blank"}},[t._v(" 项目名：淘宝静态页面 ")])]),n("p",[t._v(" 项目描述： 构建静态的淘宝商城项目 主要是对HTML CSS一些应用，包括一些二级菜单，轮播图和布局的应用 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/douban/",target:"_blank"}},[t._v(" 项目名：豆瓣静态页面 ")])]),n("p",[t._v(" 项目描述： 依照豆瓣官网构建的部分页面， 主要是应用雪碧图，以及在透明度上的应用 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/formElement/",target:"_blank"}},[t._v(" 项目名：表单元素 ")])]),n("p",[t._v(" 项目描述： 一个简单的表单元页面 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/billi/",target:"_blank"}},[t._v(" 项目名：b站登录页面 ")])]),n("p",[t._v(" 项目描述： 构建b站的的登陆页面，主要是对表单元素和遮盖层和雪碧图的应用 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/notice/",target:"_blank"}},[t._v(" 项目名：公告组件 ")])]),n("p",[t._v(" 项目描述： 配合js实现的公告组价，每个一秒切换一次内容。 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/twoMenu/",target:"_blank"}},[t._v(" 项目名：动态二级菜单 ")])]),n("p",[t._v(" 项目描述： 配合js实现的动态二级菜单，当一级菜单激活时，这类的二级菜单才会显示 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/dTable/",target:"_blank"}},[t._v(" 项目名：动态表格 ")])]),n("p",[t._v(" 项目描述：动态表格，可同时选中全部数据也可选中单行数据，可以根据每一列的属性对数据进行排序 ")])])]),n("div",{staticClass:"project-item"},[n("div",{staticClass:"info"},[n("h2",[n("a",{attrs:{href:"https://xb-fight.github.io/threeMenu/",target:"_blank"}},[t._v(" 项目名：三级联动菜单 ")])]),n("p",[t._v(" 项目描述：三级联动，每一级的可选内容根据上一级的选择而改变 ")])])])])}],ie={components:{}},re=ie,ce=(n("5e37"),Object(p["a"])(re,ae,se,!1,null,"585cce1b",null)),oe=ce.exports,le=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.detail?n("div",{staticClass:"ArticleDetail-container"},[n("Layout",{scopedSlots:t._u([{key:"right",fn:function(){return[n("div",{staticClass:"toc"},[n("ListLayout",{attrs:{listData:t.list},on:{select:t.handleClick}})],1)]},proxy:!0}],null,!1,2391196900)},[n("div",{staticClass:"main"},[n("h1",{staticClass:"title"},[t._v(t._s(t.detail.title))]),n("div",{staticClass:"aside"},[n("span",[t._v("日期"+t._s(t.detail.createDate))]),n("span",[t._v("浏览:"+t._s(t.detail.scanNumber))]),n("span",[n("a",{attrs:{href:"#comment"}},[t._v("评论:"+t._s(t.detail.commentNumber))])]),n("span",[t.detail.category?n("router-link",{attrs:{to:{name:"ArticleCate",params:{categoryId:t.detail.category.id}}}},[t._v(" "+t._s(t.detail.category.name))]):t._e()],1)]),n("div",{staticClass:"html markdown-body",domProps:{innerHTML:t._s(t.detail.htmlContent)}}),n("div",{staticClass:"conment-container",attrs:{id:"comment"}},[n("form",{staticClass:"postComment-container",on:{submit:t.handleSubmit}},[n("div",{staticClass:"nick-name"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDate.nickname,expression:"formDate.nickname",modifiers:{trim:!0}}],attrs:{type:"text",maxlength:"10",placeholder:"昵称"},domProps:{value:t.formDate.nickname},on:{input:function(e){e.target.composing||t.$set(t.formDate,"nickname",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("span",{staticClass:"info"},[t._v(t._s(t.formDate.nickname.length)+"/10")]),n("div",{staticClass:"error-info",style:{opacity:t.isNicenameError?1:0}},[t._v(" 昵称不能为空 ")])]),n("div",{staticClass:"content"},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.formDate.content,expression:"formDate.content",modifiers:{trim:!0}}],attrs:{placeholder:"评论信息"},domProps:{value:t.formDate.content},on:{input:function(e){e.target.composing||t.$set(t.formDate,"content",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("span",{staticClass:"info"},[t._v(t._s(t.formDate.content.length)+"/300")]),n("div",{staticClass:"error-info",style:{opacity:t.isCommentError?1:0}},[t._v(" 评论不能为空 ")])]),n("button",{attrs:{disabled:t.isSubmmiting}},[t._v(" "+t._s(t.isSubmmiting?"提交中":"提交")+" ")])]),t.commentList.rows?n("div",{staticClass:"comment-list"},[n("h2",{staticClass:"title"},[t._v(" 评论列表："),n("span",{staticClass:"totle"},[t._v("("+t._s(t.commentList.total)+")")])]),n("ul",t._l(t.commentList.rows,(function(e){return n("li",{key:e.id,staticClass:"comment-item"},[n("avatar",{attrs:{url:e.avatar,size:50}}),n("div",{staticClass:"item-main"},[n("p",{staticClass:"name"},[t._v(t._s(e.nickname))]),n("p",{staticClass:"contend"},[t._v(t._s(e.content))]),n("div",{staticClass:"time"},[t._v(t._s(e.createDate))])])],1)})),0)]):t._e()])])])],1):t._e()},pe=[],ue=(n("18a5"),n("2c43"),{components:{Layout:m,ListLayout:Lt,Avatar:_},data:function(){return{detail:{},toc:[],commentList:[],formDate:{nickname:"",content:""},isNicenameError:!1,isCommentError:!1,isSubmmiting:!1}},methods:{handleClick:function(t){location.hash="#"+t.anchor},handleSubmit:function(){var t=this;return Object(xt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Object(wt["a"])(Object(wt["a"])({},t.formDate),{},{articleId:t.$route.params.articleId}),t.isNicenameError=!n.nickname,t.isCommentError=!n.content,!t.isCommentError&&!t.isNicenameError){e.next=5;break}return e.abrupt("return");case 5:return t.isSubmmiting=!0,e.next=8,Yt(n);case 8:a=e.sent,t.$Message({message:"评论成功",type:"success"}),t.isSubmmiting=!1,t.isNicenameError=!1,t.isCommentError=!1,t.formDate={nickname:"",content:""},t.commentList.rows.unshift(a),t.commentList.total++;case 16:case"end":return e.stop()}}),e)})))()},updateToc:function(t){var e=this;return t.map((function(t){return t.children&&(t.children=e.updateToc(t.children)),Object(wt["a"])(Object(wt["a"])({},t),{},{selected:e.$route.hash==="#"+t.anchor})}))}},computed:{list:function(){return this.updateToc(this.toc)}},created:function(){var t=this;return Object(xt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ft(t.$route.params.articleId);case 2:return t.detail=e.sent,t.toc=t.detail.toc,e.next=6,Qt();case 6:t.commentList=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}),me=ue,de=(n("0094"),Object(p["a"])(me,le,pe,!1,null,"85f8f4fc",null)),he=de.exports,ge=[{name:"Home",path:"/",component:ht},{name:"About",path:"/about",component:_t},{name:"Article",path:"/article",component:ne},{name:"Project",path:"/project",component:oe},{name:"ArticleCate",path:"/article/cate/:categoryId",component:ne},{name:"ArticleDetail",path:"/article/:articleId",component:he}];a["a"].use(X["a"]);var fe=new X["a"]({routes:ge,mode:"history"}),ve=fe,be=n("ade3"),ye=n("96eb"),_e=n.n(ye),Ce=n("b383"),je=n.n(Ce);_e.a.mock("/api/articleType",{code:0,msg:"","data|10":[{"id|+1":1,name:"分类@id","articleCount|0-300":0,"order|+1":1}]}),_e.a.mock(/^\/api\/article(\?.+)*$/,(function(t){var e=je.a.parse(t.url),n=(e.limit,e.categoryId||-1);return _e.a.mock({code:0,msg:"",data:{total:"@integer(500, 10000)","rows|10":[{"id|+1":0,title:"@ctitle()",description:"@cparagraph(2, 5)",category:{id:n,name:"分类@id"},"scanNumber|1-3000":10,"commentNumber|1-300":30,thumb:"@image('200x100', '#50B347', '#FFF', 'Mock.js')",createDate:'@datetime("yyyy-MM-dd HH:mm:ss")'}]}})})),_e.a.mock(/^\/api\/article\/[^/]+$/,{code:0,msg:"",data:{id:"@guid",title:"CORS跨域方案详解",category:{"id|1-10":1,name:"分类@id"},description:"@cparagraph(1, 10)","scanNumber|0-10000":0,"commentNumber|0-100":0,createDate:'@datetime("yyyy-MM-dd")',toc:[{name:"概述",anchor:"article-md-title-1"},{name:"简单请求",anchor:"article-md-title-2",children:[{name:"简单请求的判定",anchor:"article-md-title-3"},{name:"简单请求的交互规范",anchor:"article-md-title-4"}]},{name:"需要预检的请求",anchor:"article-md-title-5"},{name:"附带身份凭证的请求",anchor:"article-md-title-6"},{name:"一个额外的补充",anchor:"article-md-title-7"}],"thumb|1":[_e.a.Random.image("300x250","#000","#fff","Random Image"),null],htmlContent:'<blockquote>\n    <p>阅读本文，你需要首先知道：</p><ol>\n    <li>浏览器的同源策略</li>\n    <li>跨域问题</li>\n    <li>JSONP原理</li>\n    <li>cookie原理</li>\n    </ol>\n    </blockquote>\n    <p>JSONP并不是一个好的跨域解决方案，它至少有着下面两个严重问题：</p><ol>\n    <li><strong>会打乱服务器的消息格式</strong>：JSONP要求服务器响应一段JS代码，但在非跨域的情况下，服务器又需要响应一个正常的JSON格式</li>\n    <li><strong>只能完成GET请求</strong>：JSONP的原理会要求浏览器端生成一个<code>script</code>元素，而<code>script</code>元素发出的请求只能是<code>get</code>请求</li>\n    </ol>\n    <p>所以，CORS是一种更好的跨域解决方案。</p><h1 id="article-md-title-1">概述</h1><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><figure class="markdown-image">\n          \n          <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" title="image-20200421152122793" alt="image-20200421152122793">\n          <figcaption>image-20200421152122793</figcaption>\n      \n        </figure><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS规定了三种不同的交互模式，分别是：</p><ul>\n    <li><strong>简单请求</strong></li>\n    <li><strong>需要预检的请求</strong></li>\n    <li><strong>附带身份凭证的请求</strong></li>\n    </ul>\n    <p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h1 id="article-md-title-2">简单请求</h1><p>当浏览器端运行了一段ajax代码（无论是使用XMLHttpRequest还是fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="article-md-title-3">简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol>\n    <li><p><strong>请求方法属于下面的一种：</strong></p><ul>\n    <li>get</li>\n    <li>post</li>\n    <li>head</li>\n    </ul>\n    </li>\n    <li><p><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong></p><ul>\n    <li><code>Accept</code></li>\n    <li><code>Accept-Language</code></li>\n    <li><code>Content-Language</code></li>\n    <li><code>Content-Type</code></li>\n    <li><code>DPR</code></li>\n    <li><code>Downlink</code></li>\n    <li><code>Save-Data</code></li>\n    <li><code>Viewport-Width</code></li>\n    <li><code>Width</code></li>\n    </ul>\n    </li>\n    <li><p><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong></p><ul>\n    <li><code>text/plain</code></li>\n    <li><code>multipart/form-data</code></li>\n    <li><code>application/x-www-form-urlencoded</code></li>\n    </ul>\n    </li>\n    </ol>\n    <p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);\n    \n    <span class="hljs-comment">// 请求方法不满足要求，不是简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">method</span>:<span class="hljs-string">"PUT"</span>\n    })\n    \n    <span class="hljs-comment">// 加入了额外的请求头，不是简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">headers</span>:{\n        <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>\n      }\n    })\n    \n    <span class="hljs-comment">// 简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>\n    })\n    \n    <span class="hljs-comment">// content-type不满足要求，不是简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>, {\n      <span class="hljs-attr">method</span>: <span class="hljs-string">"post"</span>,\n      <span class="hljs-attr">headers</span>: {\n        <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n      }\n    })</code></pre>\n    <h2 id="article-md-title-4">简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol>\n    <li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li>\n    </ol>\n    <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 简单请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/news"</span>);</code></pre>\n    <p>请求发出后，请求头会是下面的格式：</p><pre><code>GET /api/news/ HTTP/1.1\n    Host: crossdomain.com\n    Connection: keep-alive\n    ...\n    Referer: http://my.com/index.html\n    Origin: http://my.com</code></pre><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2">\n    <li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li>\n    </ol>\n    <p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul>\n    <li>*：表示我很开放，什么人我都允许访问</li>\n    <li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li>\n    </ul>\n    <blockquote>\n    <p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote>\n    <p>假设服务器做出了以下的响应：</p><pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    ...\n    \n    消息体中的数据</code></pre><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给js，以完成后续的操作</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n          \n          <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" title="image-20200421162846480" alt="image-20200421162846480">\n          <figcaption>image-20200421162846480</figcaption>\n      \n        </figure><h1 id="article-md-title-5">需要预检的请求</h1><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol>\n    <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n    <li><strong>服务器允许</strong></li>\n    <li><strong>浏览器发送真实请求</strong></li>\n    <li><strong>服务器完成真实的响应</strong></li>\n    </ol>\n    <p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><pre><code class="language-js"><span class="hljs-comment">// 需要预检的请求</span>\n    fetch(<span class="hljs-string">"http://crossdomain.com/api/user"</span>, {\n      <span class="hljs-attr">method</span>:<span class="hljs-string">"POST"</span>, <span class="hljs-comment">// post 请求</span>\n      <span class="hljs-attr">headers</span>:{  <span class="hljs-comment">// 设置请求头</span>\n        <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>,\n        <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>,\n        <span class="hljs-string">"content-type"</span>: <span class="hljs-string">"application/json"</span>\n      },\n      <span class="hljs-attr">body</span>: <span class="hljs-built_in">JSON</span>.stringify({ <span class="hljs-attr">name</span>: <span class="hljs-string">"袁小进"</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">18</span> }) <span class="hljs-comment">// 设置请求体</span>\n    });</code></pre>\n    <p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol>\n    <li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li>\n    </ol>\n    <pre><code>OPTIONS /api/user HTTP/1.1\n    Host: crossdomain.com\n    ...\n    Origin: http://my.com\n    Access-Control-Request-Method: POST\n    Access-Control-Request-Headers: a, b, content-type</code></pre><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的响应头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul>\n    <li>请求方法为<code>OPTIONS</code></li>\n    <li>没有请求体</li>\n    <li>请求头中包含<ul>\n    <li><code>Origin</code>：请求的源，和简单请求的含义一致</li>\n    <li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li>\n    <li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li>\n    </ul>\n    </li>\n    </ul>\n    <ol start="2">\n    <li><strong>服务器允许</strong></li>\n    </ol>\n    <p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    Access-Control-Allow-Methods: POST\n    Access-Control-Allow-Headers: a, b, content-type\n    Access-Control-Max-Age: 86400\n    ...</code></pre><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul>\n    <li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li>\n    <li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li>\n    <li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li>\n    <li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li>\n    </ul>\n    <ol start="3">\n    <li><strong>浏览器发送真实请求</strong></li>\n    </ol>\n    <p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><pre><code>POST /api/user HTTP/1.1\n    Host: crossdomain.com\n    Connection: keep-alive\n    ...\n    Referer: http://my.com/index.html\n    Origin: http://my.com\n    \n    {"name": "袁小进", "age": 18 }</code></pre><ol start="4">\n    <li><strong>服务器响应真实请求</strong></li>\n    </ol>\n    <pre><code>HTTP/1.1 200 OK\n    Date: Tue, 21 Apr 2020 08:03:35 GMT\n    ...\n    Access-Control-Allow-Origin: http://my.com\n    ...\n    \n    添加用户成功</code></pre><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><figure class="markdown-image">\n          \n          <img style="width:auto" src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" title="image-20200421165913320" alt="image-20200421165913320">\n          <figcaption>image-20200421165913320</figcaption>\n      \n        </figure><h1 id="article-md-title-6">附带身份凭证的请求</h1><p>默认情况下，ajax的跨域请求并不会附带cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带cookie</p><pre><code class="language-js"><span class="hljs-comment">// xhr</span>\n    <span class="hljs-keyword">var</span> xhr = <span class="hljs-keyword">new</span> XMLHttpRequest();\n    xhr.withCredentials = <span class="hljs-literal">true</span>;\n    \n    <span class="hljs-comment">// fetch api</span>\n    fetch(url, {\n      <span class="hljs-attr">credentials</span>: <span class="hljs-string">"include"</span>\n    })</code></pre>\n    <p>这样一来，该跨域的ajax请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带cookie时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h1 id="article-md-title-7">一个额外的补充</h1><p>在跨域访问时，JS只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><pre><code>Access-Control-Expose-Headers: authorization, a, b</code></pre><p>这样JS就能够访问指定的响应头了。</p>'}}),_e.a.mock("/api/comment","post",{code:0,msg:"",data:{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:'@datetime("yyyy-MM-dd hh-mm-ss")',"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}}),_e.a.mock(/^\/api\/comment(\?.+)?/,"get",(function(t){var e=je.a.parse(t.url);return _e.a.mock({code:0,msg:"",data:Object(be["a"])({"total|50-200":0},"rows|".concat(e.limit||10),[{id:"@guid",nickname:"@cname",content:"@cparagraph(1, 10)",createDate:'@datetime("yyyy-MM-dd hh-mm-ss")',"avatar|1":["https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg","https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg"]}])})})),_e.a.setup({timeout:1e3}),a["a"].prototype.$Message=zt,new a["a"]({router:ve,render:function(t){return t(Y)}}).$mount("#app")},"58c0":function(t,e,n){},"5e12":function(t,e,n){t.exports=n.p+"static/img/home-bg3.88d964ca.jpg"},"5e37":function(t,e,n){"use strict";n("942d")},"5e72":function(t,e,n){},6129:function(t,e,n){"use strict";n("0429")},"6d8d":function(t,e,n){},7584:function(t,e,n){"use strict";n("5e72")},"7bbf":function(t,e,n){},"82e5":function(t,e,n){t.exports=n.p+"static/img/home-bg2.74849e6c.jpg"},"86b6":function(t,e,n){t.exports=n.p+"static/img/home-bg1.9d03fe36.jpg"},"8eb6":function(t,e,n){"use strict";n("b880")},"942d":function(t,e,n){},"9b62":function(t,e,n){},a37e:function(t,e,n){},b880:function(t,e,n){},cd9c:function(t,e,n){t.exports=n.p+"static/img/picture.4ed35412.jpg"},d4b3:function(t,e,n){"use strict";n("2ced")},efee:function(t,e,n){},f293:function(t,e,n){"use strict";n("58c0")},f298:function(t,e,n){"use strict";n("a37e")},fa66:function(t,e,n){t.exports={"message-container":"style-module_message-container_1fM1v","message-container-info":"style-module_message-container-info_3aAb_","message-container-error":"style-module_message-container-error_2Ee2Z","message-container-warn":"style-module_message-container-warn_3Jsfw","message-container-success":"style-module_message-container-success_2PQyn",icon:"style-module_icon_1hiDh"}},fd0c:function(t,e,n){}});
//# sourceMappingURL=app.f00a9e62.js.map