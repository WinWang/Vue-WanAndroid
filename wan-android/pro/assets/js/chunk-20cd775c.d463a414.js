(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20cd775c"],{"2b28":function(t,e,i){"use strict";i("68ef"),i("7c7f")},"4d48":function(t,e,i){"use strict";i("68ef"),i("bf60")},"7b0a":function(t,e,i){},"7c7f":function(t,e,i){},"81e6":function(t,e,i){"use strict";i("68ef"),i("7b0a")},"8abe":function(t,e,i){},"9ed2":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),s=i("d282"),r=i("ba31"),c=Object(s["a"])("divider"),o=c[0],u=c[1];function d(t,e,i,n){var s;return t("div",a()([{attrs:{role:"separator"},style:{borderColor:e.borderColor},class:u((s={dashed:e.dashed,hairline:e.hairline},s["content-"+e.contentPosition]=i.default,s))},Object(r["b"])(n,!0)]),[i.default&&i.default()])}d.props={dashed:Boolean,hairline:{type:Boolean,default:!0},contentPosition:{type:String,default:"center"}},e["a"]=o(d)},"9ffb":function(t,e,i){"use strict";var n=i("d282"),a=Object(n["a"])("col"),s=a[0],r=a[1];e["a"]=s({props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{gutter:function(){return this.$parent&&Number(this.$parent.gutter)||0},style:function(){var t=this.gutter/2+"px";return this.gutter?{paddingLeft:t,paddingRight:t}:{}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],i=this.span,n=this.offset;return e(this.tag,{style:this.style,class:r((t={},t[i]=i,t["offset-"+n]=n,t)),on:{click:this.onClick}},[this.slots()])}})},bf60:function(t,e,i){},d147:function(t,e,i){t.exports=i.p+"assets/img/iocn-arrow.0c08265f.png"},d1e1:function(t,e,i){"use strict";var n=i("d282"),a=Object(n["a"])("row"),s=a[0],r=a[1];e["a"]=s({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],i=this.align,n=this.justify,a="flex"===this.type,s="-"+Number(this.gutter)/2+"px",c=this.gutter?{marginLeft:s,marginRight:s}:{};return e(this.tag,{style:c,class:r((t={flex:a},t["align-"+i]=a&&i,t["justify-"+n]=a&&n,t)),on:{click:this.onClick}},[this.slots()])}})},d2e8:function(t,e,i){"use strict";var n=i("8abe"),a=i.n(n);a.a},dbd6:function(t,e,i){"use strict";i.r(e);var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vertiacl-layout"},[t._l(t.dataList,(function(e,a){return[n("div",[0==a?n("div",{staticStyle:{height:"15px"}}):t._e(),n("van-row",{attrs:{type:"flex",justify:"space-between",align:"center"}},[n("van-col",{attrs:{span:"22"}},[n("div",{staticClass:"tree-title"},[t._v(t._s(e.name))]),n("div",{staticClass:"tree-child-wrap"},[t._l(e.children,(function(e,i){return[n("div",{staticClass:"txt-child"},[t._v(t._s(e.name))])]}))],2)]),n("img",{staticClass:"img-arrow",attrs:{src:i("d147")}})],1),n("van-divider")],1)]}))],2)},s=[],r=(i("b0c0"),i("ade3")),c=(i("2b28"),i("9ed2")),o=(i("81e6"),i("9ffb")),u=(i("4d48"),i("d1e1")),d={name:"SystemComp",components:(n={},Object(r["a"])(n,u["a"].name,u["a"]),Object(r["a"])(n,o["a"].name,o["a"]),Object(r["a"])(n,c["a"].name,c["a"]),n),data:function(){return{dataList:[]}},mounted:function(){this.getTreeList()},methods:{getTreeList:function(){var t=this;this.$api.getSystem().then((function(e){t.dataList=e.data}))}}},f=d,l=(i("d2e8"),i("2877")),h=Object(l["a"])(f,a,s,!1,null,"c515b84e",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-20cd775c.d463a414.js.map