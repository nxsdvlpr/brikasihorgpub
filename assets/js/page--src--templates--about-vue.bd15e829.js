(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{G6yW:function(t,e,a){"use strict";var i={props:{title:{type:String,required:!0},subtitle:{type:String},backgroundImage:{type:String}},mounted:function(){this.$nextTick((function(){}))},methods:{}},n=a("KHd+"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"hero",staticClass:"container relative mx-auto px-8 pt-8 pb-48 bg-right-bottom bg-no-repeat bg-contain",staticStyle:{"min-height":"528px"}},[a("div",{staticClass:"mt-6 relative inline-flex flex-col h-full md:w-3/5 lg:w-1/2 md:mt-16 z-10"},[t.subtitle?a("h2",{staticClass:"text-xs tracking-wider"},[t._v(t._s(t.subtitle))]):t._e(),a("h1",{staticClass:"text-4xl text-brand-graydark font-bold tracking-tighter lg:text-5xl"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("div",{staticClass:"html-content text-brand-gray lg:w-5/6"},[t._t("default")],2),a("div",{staticClass:"mt-12"},[t._t("more")],2)]),t.backgroundImage?a("div",{staticClass:"w-full absolute right-0 bottom-0 bg-contain z-0"},[a("img",{attrs:{src:t.backgroundImage,alt:t.title}})]):t._e()]),t._t("after")],2)}),[],!1,null,null,null);e.a=s.exports},GcEm:function(t,e,a){"use strict";a.r(e);a("sMBO");var i=a("nOak"),n=a.n(i),s=a("G6yW"),l={components:{VueMarkdown:n.a,SectionHero:s.a},data:function(){return{assetUrl:"https://backend.brikasih.org/files"}},metaInfo:function(){return{title:this.$page.about.name}}},r=a("KHd+"),o=null,u=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",[e("div",{staticClass:"bg-brand-bluelightest bg-opacity-25"},[e("SectionHero",{attrs:{title:this.$page.about.subject,subtitle:this.$page.about.subtitle,backgroundImage:this.assetUrl+"/page/"+this.$page.about.image}},[e("vue-markdown",[this._v(this._s(this.$page.about.body))])],1)],1)])])}),[],!1,null,null,null);"function"==typeof o&&o(u);e.default=u.exports}}]);