// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-order@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.4.1-esm/index.mjs";var t=e.get("order");function s(e){var s,d,n;if(0===(s=e.length))return t;for(d=r(e[0]),n=1;n<s;n++)if(r(e[n])!==d)return t;return d}export{s as default};
//# sourceMappingURL=index.mjs.map
