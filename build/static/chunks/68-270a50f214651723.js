(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68],{6961:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(7052);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5529:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3043:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(6277);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(6927),o=n._(r(6006)),u=r(2888),a=r(6822),i=r(1448),l=r(2287),c=r(6961),s=r(409),f=r(6406),d=r(922),p=r(5529),h=r(2035),g=r(2003),m=new Set;function y(e,t,r,n,o,u){if(!u&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(m.has(u))return;m.add(u)}let i=u?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(i).catch(e=>{})}function b(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let P=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:m,children:P,prefetch:v=null,passHref:j,replace:_,shallow:O,scroll:x,locale:R,onClick:E,onMouseEnter:M,onTouchStart:C,legacyBehavior:k=!1,...w}=e;r=P,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=!1!==v,S=null===v?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,L=o.default.useContext(s.RouterContext),N=o.default.useContext(f.AppRouterContext),U=null!=L?L:N,A=!L,{href:T,as:W}=o.default.useMemo(()=>{if(!L){let e=b(i);return{href:e,as:m?b(m):e}}let[e,t]=(0,u.resolveHref)(L,i,!0);return{href:e,as:m?(0,u.resolveHref)(L,m):t||e}},[L,i,m]),z=o.default.useRef(T),D=o.default.useRef(W);k&&(n=o.default.Children.only(r));let F=k?n&&"object"==typeof n&&n.ref:t,[K,q,B]=(0,d.useIntersection)({rootMargin:"200px"}),$=o.default.useCallback(e=>{(D.current!==W||z.current!==T)&&(B(),D.current=W,z.current=T),K(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[W,F,T,B,K]);o.default.useEffect(()=>{U&&q&&I&&y(U,T,W,{locale:R},{kind:S},A)},[W,T,q,R,I,null==L?void 0:L.locale,U,A,S]);let G={ref:$,onClick(e){k||"function"!=typeof E||E(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,u,i,l,c,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:i,locale:c,scroll:l}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?o.default.startTransition(h):h()}(e,U,T,W,_,O,x,R,A,I)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&(I||!A)&&y(U,T,W,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:S},A)},onTouchStart(e){k||"function"!=typeof C||C(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&(I||!A)&&y(U,T,W,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:S},A)}};if((0,l.isAbsoluteUrl)(W))G.href=W;else if(!k||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==R?R:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(W,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);G.href=t||(0,h.addBasePath)((0,c.addLocale)(W,e,null==L?void 0:L.defaultLocale))}return k?o.default.cloneElement(n,G):o.default.createElement("a",{...w,...G},r)}),v=P;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},922:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(6006),o=r(1722),u="function"==typeof IntersectionObserver,a=new Map,i=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!u,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(c||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},i.push(r),a.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,s,d.current]);let h=(0,n.useCallback)(()=>{f(!1)},[]);return[p,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1371:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},409:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return u}});let n=r(6927),o=n._(r(6006)),u=o.default.createContext(null)},1448:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return a},urlObjectKeys:function(){return i},formatWithValidation:function(){return l}});let n=r(5909),o=n._(r(2786)),u=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let s=e.search||l&&"?"+l||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||u.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),s&&"?"!==s[0]&&(s="?"+s),""+n+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+i}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},781:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});let n=r(3694),o=r(3980);function u(e,t,r){let u="",a=(0,o.getRouteRegex)(e),i=a.groups,l=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;u=e;let c=Object.keys(i);return c.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=i[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(u=u.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(u=""),{params:c,result:u}}},1218:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},6822:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(2287),o=r(3043);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},736:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},6277:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(9854);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},2786:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return u}})},2888:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let n=r(2786),o=r(1448),u=r(736),a=r(2287),i=r(7052),l=r(6822),c=r(1218),s=r(781);function f(e,t,r){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,g=h.split("?");if((g[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return r?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,i.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:i}=(0,s.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,u.omit)(r,i)}))}let a=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[d]:d}}},3694:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(2287);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let u=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>u(e)):t.repeat?[u(n)]:u(n))}),a}}},3980:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return s},getNamedMiddlewareRegex:function(){return f}});let n=r(1371),o=r(694),u="nxtP";function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function i(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},u=1;return{parameterizedRoute:t.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,n.escapeStringRegexp)(e);{let{key:t,optional:n,repeat:o}=a(e.slice(1,-1));return r[t]={pos:u++,repeat:o,optional:n},o?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=i(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e,t){let r,i;let l=(0,o.removeTrailingSlash)(e).slice(1).split("/"),c=(r=97,i=1,()=>{let e="";for(let t=0;t<i;t++)e+=String.fromCharCode(r),++r>122&&(i++,r=97);return e}),s={};return{namedParameterizedRoute:l.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,n.escapeStringRegexp)(e);{let{key:r,optional:n,repeat:o}=a(e.slice(1,-1)),i=r.replace(/\W/g,"");t&&(i=""+u+i);let l=!1;return(0===i.length||i.length>30)&&(l=!0),isNaN(parseInt(i.slice(0,1)))||(l=!0),l&&(i=c()),t?s[i]=""+u+r:s[i]=""+r,o?n?"(?:/(?<"+i+">.+?))?":"/(?<"+i+">.+?)":"/(?<"+i+">[^/]+?)"}}).join(""),routeKeys:s}}function s(e,t){let r=c(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function f(e,t){let{parameterizedRoute:r}=i(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},2287:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return i},getDisplayName:function(){return l},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return s},loadGetInitialProps:function(){return f},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return g},PageNotFoundError:function(){return m},MissingStaticPage:function(){return y},MiddlewareNotFoundError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function s(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n){let t='"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}},5846:function(e,t,r){e.exports=r(8920)},8214:function(e,t,r){"use strict";r.d(t,{E:function(){return s}});var n=r(2607),o=r(9268),u=(0,n.G)(function(e,t){let{htmlWidth:r,htmlHeight:n,alt:u,...a}=e;return(0,o.jsx)("img",{width:r,height:n,ref:t,alt:u,...a})});u.displayName="NativeImage";var a=r(6635),i=r(6006),l=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,c=r(3092),s=(0,n.G)(function(e,t){let{fallbackSrc:r,fallback:n,src:s,srcSet:f,align:d,fit:p,loading:h,ignoreFallback:g,crossOrigin:m,fallbackStrategy:y="beforeLoadOrError",referrerPolicy:b,...P}=e,v=null!=h||g||!(void 0!==r||void 0!==n),j=function(e){let{loading:t,src:r,srcSet:n,onLoad:o,onError:u,crossOrigin:l,sizes:c,ignoreFallback:s}=e,[f,d]=(0,i.useState)("pending");(0,i.useEffect)(()=>{d(r?"loading":"pending")},[r]);let p=(0,i.useRef)(),h=(0,i.useCallback)(()=>{if(!r)return;g();let e=new Image;e.src=r,l&&(e.crossOrigin=l),n&&(e.srcset=n),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{g(),d("loaded"),null==o||o(e)},e.onerror=e=>{g(),d("failed"),null==u||u(e)},p.current=e},[r,l,n,c,o,u,t]),g=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,a.G)(()=>{if(!s)return"loading"===f&&h(),()=>{g()}},[f,h,s]),s?"loaded":f}({...e,crossOrigin:m,ignoreFallback:v}),_=l(j,y),O={ref:t,objectFit:p,objectPosition:d,...v?P:function(e,t=[]){let r=Object.assign({},e);for(let e of t)e in r&&delete r[e];return r}(P,["onError","onLoad"])};return _?n||(0,o.jsx)(c.m.img,{as:u,className:"chakra-image__placeholder",src:r,...O}):(0,o.jsx)(c.m.img,{as:u,src:s,srcSet:f,crossOrigin:m,loading:h,referrerPolicy:b,className:"chakra-image",...O})});s.displayName="Image"},6470:function(e,t,r){"use strict";r.d(t,{xu:function(){return a}});var n=r(3092),o=r(2607),u=r(9268),a=(0,n.m)("div");a.displayName="Box";var i=(0,o.G)(function(e,t){let{size:r,centerContent:n=!0,...o}=e;return(0,u.jsx)(a,{ref:t,boxSize:r,__css:{...n?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...o})});i.displayName="Square",(0,o.G)(function(e,t){let{size:r,...n}=e;return(0,u.jsx)(i,{size:r,ref:t,borderRadius:"9999px",...n})}).displayName="Circle"}}]);