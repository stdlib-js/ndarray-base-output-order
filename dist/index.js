"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=a(function(g,o){
var i=require('@stdlib/ndarray-base-order/dist'),f=require('@stdlib/ndarray-defaults/dist'),n=f.get("order");function s(e){var r,u,t;if(r=e.length,r===0)return n;for(u=i(e[0]),t=1;t<r;t++)if(i(e[t])!==u)return n;return u}o.exports=s
});var d=v();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
