(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{5377:function(t,e,r){"use strict";r("DQNa"),r("qePV");var a=r("Kw5r"),i=r("zgRs"),s=r.n(i);a.a.use(s.a);var n={props:{id:{type:Number,required:!0},subject:{type:String,required:!0},cover:{type:String,required:!0},permalink:{type:String,required:!0},created:{type:Date,required:!0}}},l=r("KHd+"),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border rounded shadow-md-alt"},[r("div",{staticClass:"w-full pb-5/4 relative overflow-hidden"},[r("img",{staticClass:"absolute bg-cover inset-0",attrs:{src:t.cover,alt:t.subject}})]),r("div",{staticClass:"px-6 py-5 border-t sm:h-24"},[r("h3",[r("g-link",{staticClass:"text-md font-bold hover:text-brand-bluelight leading-3 tracking-tight",attrs:{to:t.permalink,target:"_blank"}},[t._v(t._s(t._f("truncate")(t.subject,50,"...")))])],1),r("p",{staticClass:"text-xs text-brand-graylight tracking-wide"},[t._v(t._s(t.created))])])])}),[],!1,null,null,null);e.a=c.exports},"970x":function(t,e,r){"use strict";r.r(e);r("5377");var a={components:{}},i=r("KHd+"),s=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"bg-brand-bluelightest border-b border-gray-200"},[e("div",{staticClass:"container base-container text-center"},[e("div",{staticClass:"py-12"},[e("h1",{staticClass:"text-3xl text-brand-graydark font-bold tracking-tighter"},[this._v("\n          Laporan Tahunan\n        ")]),e("p",[this._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])])]),e("div",{staticClass:"container base-container"},[e("div",{staticClass:"py-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"})])])}),[],!1,null,null,null);e.default=s.exports},DQNa:function(t,e,r){var a=r("busE"),i=Date.prototype,s=i.toString,n=i.getTime;new Date(NaN)+""!="Invalid Date"&&a(i,"toString",(function(){var t=n.call(this);return t==t?s.call(this):"Invalid Date"}))},zgRs:function(t,e,r){var a;a={install:function(t){t.filter("truncate",(function(t,e,r){if(r=r||"...",e=e||30,t.length<=e)return t;for(var a=t.slice(0,e-r.length),i=a.length-1;i>0&&" "!==a[i]&&a[i]!==r[0];)i-=1;return i=i||e-r.length,(a=a.slice(0,i))+r}))}},t.exports=a}}]);