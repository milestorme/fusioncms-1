(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{EACl:function(e,a,l){"use strict";a.a={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},Hr8T:function(e,a,l){"use strict";l.r(a);var t={name:"code-fieldtype-settings",data:function(){return{syntax:this.value.type||"text"}},mixins:[l("EACl").a]},n=l("KHd+"),s=Object(n.a)(t,(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("p-select",{attrs:{name:"settings.syntax",label:"Syntax",help:"What language should the syntax highlighter use?",autocomplete:"off",options:[{value:"css",label:"CSS"},{value:"html",label:"HTML"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"markdown",label:"Markdown"},{value:"python",label:"Python"},{value:"text",label:"Text"},{value:"xml",label:"XML"}]},model:{value:e.value.syntax,callback:function(a){e.$set(e.value,"syntax",a)},expression:"value.syntax"}})],1)}),[],!1,null,null,null);a.default=s.exports}}]);