(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/online-retailers-UI/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b73":function(e,t,n){"use strict";var r=n("5fad"),o=n.n(r);o.a},"0ce7":function(e,t,n){"use strict";var r=n("43a2"),o=n.n(r);o.a},"36ce":function(e,t,n){},"43a2":function(e,t,n){},4705:function(e,t,n){"use strict";var r=n("f489"),o=n.n(r);o.a},4942:function(e,t){(function(e,t){var n=t.documentElement,r=e.devicePixelRatio||1;function o(){t.body?t.body.style.fontSize=12*r+"px":t.addEventListener("DOMContentLoaded",o)}function a(){var e=n.clientWidth/10;n.style.fontSize=e+"px"}if(o(),a(),e.addEventListener("resize",a),e.addEventListener("pageshow",(function(e){e.persisted&&a()})),r>=2){var c=t.createElement("body"),i=t.createElement("div");i.style.border=".5px solid transparent",c.appendChild(i),n.appendChild(c),1===i.offsetHeight&&n.classList.add("hairlines"),n.removeChild(c)}})(window,document)},"50a2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),i={},s=Object(c["a"])(i,o,a,!1,null,null,null),l=s.exports,u=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h3",[e._v("星级组件")]),r("Level"),r("h3",[e._v("WhiteSpace组件")]),r("WhiteSpace",{attrs:{color:"#fff"}}),r("br"),r("WhiteSpace",{attrs:{size:"md",color:"#fff"}}),r("h3",[e._v("Block")]),r("Block",{attrs:{title:"权益卡",moreTitle:"查看更多"},on:{"click-more":e.clickMore}},[r("div",{staticClass:"member-card"},[r("img",{style:{width:"100%",verticalAlign:"middle"},attrs:{src:n("f83a"),alt:""}})])]),r("WhiteSpace",{attrs:{size:"md",color:"#eee"}}),r("Block",{attrs:{title:"优惠券",moreTitle:"更多优惠券"},on:{"click-more":e.clickMore}},[r("div",{staticClass:"scroll-area"},[r("div",{staticClass:"coupon-list"},e._l(e.coupons,(function(t,n){return r("Coupon",e._b({key:n,staticClass:"coupon"},"Coupon",t,!1))})),1)])])],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"whitespace whitespace-"+e.size,style:{backgroundColor:e.color}})},v=[],m=(n("c975"),{props:{size:{validate:function(e){return["xs","sm","md","lg","xl"].indexOf(e)>-1},default:"xs"},color:String}}),b=m,h=(n("f2e9"),Object(c["a"])(b,d,v,!1,null,"5d98bccd",null)),_=h.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"level"},e._l(e.level,(function(e){return n("span",{key:e,staticClass:"level-item"})})),0)},g=[],C=(n("a9e3"),{props:{level:{type:Number,default:5}}}),k=C,x=(n("4705"),Object(c["a"])(k,y,g,!1,null,null,null)),w=x.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"block"},[n("header",{staticClass:"block-head"},[e.moreTitle?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(t){return t.preventDefault(),e.$emit("click-more",t)}}},[e._v(e._s(e.moreTitle))]):e._e(),n("strong",[e._v(e._s(e.title))])]),n("div",{staticClass:"block-content"},[e._t("default",[e._v("Content!")])],2)])},S=[],j={props:{moreTitle:{type:String,default:"More"},title:{type:String,default:"块标题"}},mounted:function(){console.log(this.$slots.default[0])}},E=j,$=(n("bdd6"),Object(c["a"])(E,O,S,!1,null,"e94e1156",null)),M=$.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"coupon"},[n("div",{staticClass:"coupon-main"},[n("div",{staticClass:"coupon-main-price"},[n("span",{staticClass:"coupon-main__price"},[n("span",[e._v("￥"),n("strong",[e._v(e._s(e.faceValue))])])]),n("a",{on:{click:function(t){return t.preventDefault(),e.$emit("receive")}}},[e._v("立即领券")])]),n("div",{staticClass:"coupon-main-desc"},[e._v(" "+e._s(e.des||"此券无说明")+" ")])]),n("div",{staticClass:"coupon-name"},[e._v(e._s(e.type||"满减券"))])])},T=[],z={props:{faceValue:{type:Number,value:10},des:String,type:String}},L=z,W=(n("0b73"),Object(c["a"])(L,P,T,!1,null,"69f4e1d6",null)),V=W.exports,B={components:{WhiteSpace:_,Level:w,Block:M,Coupon:V},methods:{clickMore:function(e){console.log(e)}},data:function(){return{coupons:[{faceValue:10,des:"金枪鱼石锅拌饭立减8元",type:"折扣券"},{faceValue:10,des:"金枪鱼石锅拌饭立减8元",type:"满减券"},{faceValue:10,des:"金枪鱼石锅拌饭立减8元",type:"优惠券"}]}}},D=B,J=(n("0ce7"),Object(c["a"])(D,f,p,!1,null,"5ba0afde",null)),N=J.exports;r["a"].use(u["a"]);var A=new u["a"]({routes:[{path:"/",component:N}]}),H=A,I=n("2f62");r["a"].use(I["a"]);var R=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("4942");r["a"].config.productionTip=!1,new r["a"]({router:H,store:R,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5fad":function(e,t,n){},"9c0c":function(e,t,n){},bdd6:function(e,t,n){"use strict";var r=n("50a2"),o=n.n(r);o.a},f2e9:function(e,t,n){"use strict";var r=n("36ce"),o=n.n(r);o.a},f489:function(e,t,n){},f83a:function(e,t,n){e.exports=n.p+"img/yhk.3d45bad7.png"}});
//# sourceMappingURL=app.676296bb.js.map