"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=a(function(g,o){
var i=require('@stdlib/ndarray-base-order/dist'),f=require('@stdlib/ndarray-defaults/dist'),n=f.get("order");function s(e){var r,t,u;if(r=e.length,r===0)return n;for(t=i(e[0]),u=1;u<r;u++)if(i(e[u])!==t)return n;return t}o.exports=s
});var d=v();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
