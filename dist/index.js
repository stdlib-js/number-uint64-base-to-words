"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=n(function(l,u){
var q=require('@stdlib/number-uint64-base-get-high-word/dist'),v=require('@stdlib/number-uint64-base-get-low-word/dist');function c(e,r,s,t){return r[t]=q(e),r[t+s]=v(e),r}u.exports=c
});var o=n(function(m,a){
var d=i();function W(e){return d(e,[0,0],1,0)}a.exports=W
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=o(),x=i();p(g,"assign",x);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
