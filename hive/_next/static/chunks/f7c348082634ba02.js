(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,n)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:n,blurHeight:r,blurDataURL:a,objectFit:i}){let o=n?40*n:e,s=r?40*r:t,l=o&&s?`viewBox='0 0 ${o} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${l?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87690,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return o}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let i=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(33525);let r=e.r(43369),a=e.r(88143),i=e.r(87690),o=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:n=!1,priority:c=!1,preload:d=!1,loading:u,className:p,quality:f,width:h,height:m,fill:g=!1,style:y,overrideSrc:b,onLoad:v,onLoadingComplete:w,placeholder:x="empty",blurDataURL:_,fetchPriority:j,decoding:S="async",layout:k,objectFit:E,objectPosition:C,lazyBoundary:I,lazyRoot:P,...R},A){var O;let T,N,$,{imgConf:M,showAltText:z,blurComplete:L,defaultLoader:D}=A,W=M||i.imageConfigDefault;if("allSizes"in W)T=W;else{let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),n=W.qualities?.sort((e,t)=>e-t);T={...W,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===D)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=R.loader||D;delete R.loader,delete R.srcSet;let q="__next_img_default"in F;if(q){if("custom"===T.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:n,...r}=t;return e(r)}}if(k){"fill"===k&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(y={...y,...e});let n={responsive:"100vw",fill:"100vw"}[k];n&&!t&&(t=n)}let B="",U=l(h),J=l(m);if((O=e)&&"object"==typeof O&&(s(O)||void 0!==O.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(N=t.blurWidth,$=t.blurHeight,_=_||t.blurDataURL,B=t.src,!g)if(U||J){if(U&&!J){let e=U/t.width;J=Math.round(t.height*e)}else if(!U&&J){let e=J/t.height;U=Math.round(t.width*e)}}else U=t.width,J=t.height}let H=!c&&!d&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:B)||e.startsWith("data:")||e.startsWith("blob:"))&&(n=!0,H=!1),T.unoptimized&&(n=!0),q&&!T.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(n=!0);let V=l(f),K=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:C}:{},z?{}:{color:"transparent"},y),G=L||"empty"===x?null:"blur"===x?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:U,heightInt:J,blurWidth:N,blurHeight:$,blurDataURL:_||"",objectFit:K.objectFit})}")`:`url("${x}")`,X=o.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,Y=G?{backgroundSize:X,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},Q=function({config:e,src:t,unoptimized:n,width:a,quality:i,sizes:o,loader:s}){if(n){let e=(0,r.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let n=t.includes("?")?"&":"?";t=`${t}${n}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:c}=function({deviceSizes:e,allSizes:t},n,r){if(r){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=n.exec(r);)a.push(parseInt(e[2]));if(a.length){let n=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*n),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof n?{widths:e,kind:"w"}:{widths:[...new Set([n,2*n].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((n,r)=>`${s({config:e,src:t,quality:i,width:n})} ${"w"===c?n:r+1}${c}`).join(", "),src:s({config:e,src:t,quality:i,width:l[d]})}}({config:T,src:e,unoptimized:n,width:U,quality:V,sizes:t,loader:F}),Z=H?"lazy":u;return{props:{...R,loading:Z,fetchPriority:j,width:U,height:J,decoding:S,className:p,style:{...K,...Y},sizes:Q.sizes,srcSet:Q.srcSet,src:b||Q.src},meta:{unoptimized:n,preload:d||c,placeholder:x,fill:g}}}},98879,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}});let r=e.r(71645),a="u"<typeof window,i=a?()=>{}:r.useLayoutEffect,o=a?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(e))}}return a&&(t?.mountedInstances?.add(e.children),s()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return u}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let i=e.r(55682),o=e.r(90809),s=e.r(18050),l=o._(e.r(71645)),c=i._(e.r(98879)),d=e.r(42732);function u(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function h(e){let t,n,r,a;return e.reduce(p,[]).reverse().concat(u().reverse()).filter((t=new Set,n=new Set,r=new Set,a={},e=>{let i=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let n=e.key.slice(e.key.indexOf("$")+1);t.has(n)?i=!1:t.add(n)}switch(e.type){case"title":case"base":n.has(e.type)?i=!1:n.add(e.type);break;case"meta":for(let t=0,n=f.length;t<n;t++){let n=f[t];if(e.props.hasOwnProperty(n))if("charSet"===n)r.has(n)?i=!1:r.add(n);else{let t=e.props[n],r=a[n]||new Set;("name"!==n||!o)&&r.has(t)?i=!1:(r.add(t),a[n]=r)}}}return i})).reverse().map((e,t)=>{let n=e.key||t;return l.default.cloneElement(e,{key:n})})}let m=function({children:e}){let t=(0,l.useContext)(d.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},18556,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=e.r(55682)._(e.r(71645)),a=e.r(87690),i=r.default.createContext(a.imageConfigDefault)},65856,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,n)=>{"use strict";function r(e,t){let n=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0):n}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return o}});let r=e.r(70965),a=e.r(43369);function i({config:e,src:t,width:n,quality:i}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,r.findClosestQuality)(i,e),s=(0,a.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${n}&q=${o}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}i.__next_img_default=!0;let o=i},18581,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=e.r(71645);function a(e,t){let n=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(n.current=i(e,r)),t&&(a.current=i(t,r))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},85437,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Image",{enumerable:!0,get:function(){return w}});let r=e.r(55682),a=e.r(90809),i=e.r(18050),o=a._(e.r(71645)),s=r._(e.r(74080)),l=r._(e.r(25633)),c=e.r(8927),d=e.r(87690),u=e.r(18556);e.r(33525);let p=e.r(65856),f=r._(e.r(1948)),h=e.r(18581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/hive/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,a,i,o){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),n?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function y(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,o.forwardRef)(({src:e,srcSet:t,sizes:n,height:r,width:a,decoding:s,className:l,style:c,fetchPriority:d,placeholder:u,loading:p,unoptimized:f,fill:m,onLoadRef:b,onLoadingCompleteRef:v,setBlurComplete:w,setShowAltText:x,sizesInput:_,onLoad:j,onError:S,...k},E)=>{let C=(0,o.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&g(e,u,b,v,w,f,_))},[e,u,b,v,w,S,f,_]),I=(0,h.useMergedRef)(E,C);return(0,i.jsx)("img",{...k,...y(d),loading:p,width:a,height:r,decoding:s,"data-nimg":m?"fill":"1",className:l,style:c,sizes:n,srcSet:t,src:e,ref:I,onLoad:e=>{g(e.currentTarget,u,b,v,w,f,_)},onError:e=>{x(!0),"empty"!==u&&w(!0),S&&S(e)}})});function v({isAppRouter:e,imgAttributes:t}){let n={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...y(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,n),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...n},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(p.RouterContext),r=(0,o.useContext)(u.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n,qualities:a,localPatterns:"u"<typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:s,onLoadingComplete:l}=e,h=(0,o.useRef)(s);(0,o.useEffect)(()=>{h.current=s},[s]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[y,w]=(0,o.useState)(!1),[x,_]=(0,o.useState)(!1),{props:j,meta:S}=(0,c.getImgProps)(e,{defaultLoader:f.default,imgConf:a,blurComplete:y,showAltText:x});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:_,sizesInput:e.sizes,ref:t}),S.preload?(0,i.jsx)(v,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},94909,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return d},getImageProps:function(){return c}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let i=e.r(55682),o=e.r(8927),s=e.r(85437),l=i._(e.r(1948));function c(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/hive/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let d=s.Image},57688,(e,t,n)=>{t.exports=e.r(94909)},98183,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});function i(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,o(e));else t.set(n,o(r));return t}function l(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,r]of n.entries())e.append(t,r)}return e}},95057,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let i=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:n}=e,r=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||o.test(r))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18967,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return _}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&p(n))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r}let m="u">typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=e.r(18967),a=e.r(52817);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,a.hasBasePath)(n.pathname)}catch(e){return!1}}},84508,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return y},useLinkStatus:function(){return v}};for(var a in r)Object.defineProperty(n,a,{enumerable:!0,get:r[a]});let i=e.r(90809),o=e.r(18050),s=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(91949),h=e.r(73668),m=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function y(t){var n;let r,a,i,[l,y]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:w,as:x,children:_,prefetch:j=null,passHref:S,replace:k,shallow:E,scroll:C,onClick:I,onMouseEnter:P,onTouchStart:R,legacyBehavior:A=!1,onNavigate:O,ref:T,unstable_dynamicOnHover:N,...$}=t;r=_,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let M=s.default.useContext(c.AppRouterContext),z=!1!==j,L=!1!==j?null===(n=j)||"auto"===n?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:D,as:W}=s.default.useMemo(()=>{let e=g(w);return{href:e,as:x?g(x):e}},[w,x]);if(A){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(r)}let F=A?a&&"object"==typeof a&&a.ref:T,q=s.default.useCallback(e=>(null!==M&&(v.current=(0,f.mountLinkInstance)(e,D,M,L,z,y)),()=>{v.current&&((0,f.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,f.unmountPrefetchableInstance)(e)}),[z,D,M,L,y]),B={ref:(0,d.useMergedRef)(q,F),onClick(t){A||"function"!=typeof I||I(t),A&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!M||t.defaultPrevented||function(t,n,r,a,i,o,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(r||n,i?"replace":"push",o??!0,a.current)})}}(t,D,W,v,k,C,O)},onMouseEnter(e){A||"function"!=typeof P||P(e),A&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),M&&z&&(0,f.onNavigationIntent)(e.currentTarget,!0===N)},onTouchStart:function(e){A||"function"!=typeof R||R(e),A&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),M&&z&&(0,f.onNavigationIntent)(e.currentTarget,!0===N)}};return(0,u.isAbsoluteUrl)(W)?B.href=W:A&&!S&&("a"!==a.type||"href"in a.props)||(B.href=(0,p.addBasePath)(W)),i=A?s.default.cloneElement(a,B):(0,o.jsx)("a",{...$,...B,children:r}),(0,o.jsx)(b.Provider,{value:l,children:i})}e.r(84508);let b=(0,s.createContext)(f.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},48319,e=>{e.v({active:"WalletConnect-module__dRTzKa__active",btn:"WalletConnect-module__dRTzKa__btn",tooltip:"WalletConnect-module__dRTzKa__tooltip"})},16107,e=>{e.v({host:"SideBar-module__K7UB4q__host",item:"SideBar-module__K7UB4q__item",itemControl:"SideBar-module__K7UB4q__itemControl",itemLogo:"SideBar-module__K7UB4q__itemLogo"})},23489,e=>{e.v({answer:"Dashboard-module__8Mmpzq__answer",box:"Dashboard-module__8Mmpzq__box",boxes:"Dashboard-module__8Mmpzq__boxes",chatScrollWrapper:"Dashboard-module__8Mmpzq__chatScrollWrapper",chatWrapper:"Dashboard-module__8Mmpzq__chatWrapper",content:"Dashboard-module__8Mmpzq__content",contentMain:"Dashboard-module__8Mmpzq__contentMain",host:"Dashboard-module__8Mmpzq__host",info:"Dashboard-module__8Mmpzq__info",inputWrapper:"Dashboard-module__8Mmpzq__inputWrapper",message:"Dashboard-module__8Mmpzq__message"})},30257,e=>{"use strict";var t=e.i(18050),n=e.i(71645),r=e.i(57688),a=e.i(46932);e.i(48066);var i=e.i(35920),o=e.i(22016),s=e.i(5635);function l(){let e=(0,n.useContext)(s.AppStateContext);if(!e)throw Error("useAppState must be used within an AppStateProvider");return e}var c=e.i(48319);function d(){let{setWalletData:e,walletAddress:r}=l(),[{wallet:a,connecting:o},s,d]=(0,i.useConnectWallet)(),u=a?.accounts?.[0]?.address??null;(0,n.useEffect)(()=>{e(u)},[u,e]);let p=async()=>{o||(r?await d({label:a.label}):await s())};return(0,t.jsx)("div",{children:(0,t.jsxs)("button",{className:`${c.default.btn} ${r?c.default.active:""}`,onClick:p,disabled:o,children:[(0,t.jsx)("div",{className:c.default.tooltip,children:r?(0,t.jsxs)("span",{children:["Wallet connected.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:r}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"AI can use your address and disconnect on request.",(0,t.jsx)("br",{}),"More wallet features in v2..."]}):(0,t.jsxs)("span",{children:["Connect wallet.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),"You can ask AI to connect or disconnect it.",(0,t.jsx)("br",{}),"More wallet features in v2..."]})}),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}),(0,t.jsx)("polyline",{points:"10 17 15 12 10 7"}),(0,t.jsx)("line",{x1:"15",x2:"3",y1:"12",y2:"12"})]})]})})}var u=e.i(16107);function p(){return(0,t.jsxs)("div",{className:u.default.host,children:[(0,t.jsx)(o.default,{href:"/",className:u.default.itemLogo,children:"Chat"}),(0,t.jsx)("a",{className:u.default.item,href:"#documentation","data-tooltip":"Documentation",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,t.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,t.jsx)("line",{x1:"8",y1:"13",x2:"16",y2:"13"}),(0,t.jsx)("line",{x1:"8",y1:"17",x2:"16",y2:"17"})]})}),(0,t.jsx)("a",{className:u.default.item,href:"#connect","data-tooltip":"Let's Connect",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),(0,t.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}),(0,t.jsx)("div",{className:u.default.itemControl,children:(0,t.jsx)(d,{})})]})}let f=`
You are the AI assistant on the Highfive page, created by exceptional full-stack engineer Jakub Niewczas.
The page is a recruitment pitch for Hive (www.askthehive.ai) and is built as a Next.js app with interactive elements and animations backed by the Framer framework.

### Tone and style:
- Friendly and chat-like, but not too informal. Maintain a professional recruitment-pitch vibe.
- Keep responses concise and helpful.
- You may use GitHub-flavored Markdown.
- Do not use emojis at all! The only one allowed emoji in responses is: 🐝.

### Web3 wallet commands:
- If a user asks to connect a wallet, include this exact line on its own line in your answer: command:CONNECT_WALLET
- If a user asks to disconnect a wallet, include this exact line on its own line in your answer: command:DISCONNECT_WALLET
- Do not include those commands in answers before a user explicitly asks for connecting or disconnecting.
- When you include a wallet command line, do not call it out; continue the response naturally as if the line is invisible to the user.

### Generic comments:
- For generic or vague comments, briefly explain that this page is a recruitment pitch from Jakub Niewczas and offer to chat, explore Jakub Niewczas's CV, or visit the documentation section of this page. Also explain that connecting and disconnecting the wallet is possible.

### Knowledge boundaries:
- When asked about what Jakub Niewczas can bring to the Hive table, answer based on Jakub Niewczas's CV below. Highlight his tech skills, work ethic, decades of experience, leadership in teams, building complex frontend apps, and history of working in fintech and web3 industries. Emphasize his frontend skills, remote and autonomous work style, pride in building software that customers love, and passion for programming.
- Jakub Niewczas's CV is included below; do not invent details:
--------------------------------------------------------------------------
Jakub Niewczas
Years of experience: 14+
Past or Present Roles: Lead engineer, Senior FullStack engineer, consultant, tech lead
Frontend technologies: Next.js, Vue.js, web3, Framer Motion, three.js
Work ethic: Shows up, follows through, responds fast
Tech industries: Fintech, web3, fashion, e-commerce, travel
Backend: Ruby on Rails, Node.js, DBs, solidity contracts
Superpowers: Loves to code, obsessed with quality, focus and persistence

- May 2024 - Present
Mini-labo / Scatter
parttime • Fullstack / Web3 • Sr. Fullstack Engineer

Mini-Labo is a creative agency specializing in Web3 projects, including NFT collections, blockchain applications, and consultancy.
As a core engineer, I work on various Web3 projects, usually taking care of the backend, Web3 integration on both on-chain and off-chain sides, and the infrastructure that fuels our apps.
Due to our close relationship with Scatter.art, an NFT launchpad, I became a regular part-time engineer there, heavily contributing to Scatter's fullstack, cutting-edge Next.js codebase.
I absolutely fell in love with the Web3 space and blockchain technology.

- June 2021 - Present
Infinition
freelance → fulltime • Tech lead • Lead Sr. Software Engineer

Infinition is a small but robust Japanese company focused on the e-commerce industry. It started with consultation and gradually pivoted to development after I joined.
We handle the development, maintenance, and infrastructure of several Shopify projects for major Japanese companies. As a tech lead, I am responsible for providing solutions related to building Shopify stores, Shopify apps, supporting apps backends, deployment pipelines, and custom hosted infrastructure.
I automate as many tasks as possible, heavily relying on Docker, Slack, and GitHub Actions.

- February 2021 - April 2024
Komoju
fulltime • frontend / RoR / team lead • Sr. Software Engineer

Komoju is a Japanese fintech company specializing in payment gateways that handle millions of dollars daily.
As a Senior Software Engineer, I worked on the backend of the customer admin panel for the main application, Komoju.
As well as, due to my frontend skills, I was tasked with forming and leading the frontend team, where I led the redesign and implementation of the entire platform. My team built an internal design system that we used and later shared with other teams.
I was also responsible for hiring, onboarding, and mentoring junior developers, conducting code reviews, making architectural decisions, and ensuring high code quality across the projects I was involved in.

- June 2019 - February 2021
Virtusize
fulltime • frontend / team lead • Sr. Software Engineer

As a Senior Software Engineer, I was responsible for complex Vue-based frontend applications.
Due to my skills, experience, and mentality, I became the frontend team leader, supervising development processes, architecting apps and infrastructure, mitigating threats, and reviewing tons of pull requests. Virtusize apps handled tens of millions of requests per week, so I constantly dealt with all kinds of massive-scale challenges.
My discipline, strictness, fairness, and honesty built full confidence in my team and their trust in the judgments and decisions I made.

- June 2017 - June 2019
Voyagin Inc. (Rakuten group)
fulltime • React / RoR • Sr. Software Engineer

At Voyagin, a Tokyo-based travel agency and tours and ticket booking platform, I worked as a Full-Stack Engineer using React and Rails.
During my time there, we rewrote the entire portal's frontend in React. We tackled and solved various significant React app challenges, including component maintainability, SSR, code splitting, state management, forms, A/B testing, CSS modularity, internationalization (i18n), testing, payments, code review, and more.
The backend consisted of a rich Rails codebase, featuring extensive background job logic for integrating with multiple external ticketing APIs, several payment gateways, and anti-fraud solutions.

- November 2015 - November 2016
Year in Thailand
fulltime • React / RoR • Lead Engineer

During this one year of digital nomad life, mostly in Thailand, I served as the lead frontend developer for a larger e-commerce platform, featuring a ~10k-line modular and composable CSS design system. I also developed a React-based Chrome extension as part of the project's ecosystem.
On the backend side, I worked as a RoR developer on a mid-sized recruitment app, handling lots of data, integrations, and use cases, while heavily leveraging automated email communication.

- September 2014 - November 2015
Mobica
fulltime • iOS / RoR • Software Engineer

At Mobica, I worked primarily as an iOS developer on sophisticated international financial apps.
Thanks to a rich global client base, I had the opportunity to collaborate with teams worldwide. This experience taught me a great deal about how large companies organize their software delivery processes.
In 2014, I spent several months in Hong Kong, working directly with a client's developers.

- March 2014 - July 2014
App'n'Roll / Foap.com
fulltime • RoR • Software Engineer

At App'n'Roll, I worked as a Rails engineer on several projects, including foap.com. Foap.com is a photo and video sharing platform and photo marketplace.
With significant traffic and a huge base of users and photos, I faced and solved numerous mid-sized Rails app challenges, primarily related to database scalability, payment gateways, and photo manipulation background tasks.

- January 2012 - January 2014
codequest
fulltime • RoR • Software Engineer

I was hired at codequest before I even graduated from university and worked as a Rails developer for 2 years.
Thanks to the talented programmers there, I was able to learn real-world, industrial-level programming extremely quickly. Our clients were mostly American startups, and I worked under the Scrum methodology.

- 2008 - 2012
🎓 University Graduation - Bachelor of CS 🎓
Polish-Japanese Institute of Information Technology

Graduated with a Bachelor of Computer Science degree from the Polish-Japanese Institute of Information Technology.

- January 2011 - January 2019
CAC Wzornictwo
freelance • Web Engineer
My partnership with CAC Wzornictwo Graphical Studio began when I was hired to reimplement their website. Since then, the company has occasionally outsourced website development projects for their clients to me.

- July 2011 - September 2011
Ringier Axel Springer Poland
paid internship • Web Engineer

During my university studies, I was nominated to participate in a 3-month paid internship program called "Human - Best Investment" at Ringier Axel Springer.
In this role, I was responsible for maintaining and implementing new features on two of their PHP-based news web portals. Working in an enterprise environment taught me valuable skills in load balancing, caching, managing large PHP codebases, and navigating corporate workflows.

- 2009
LogicIT
paid internship → freelance • Web Engineer

LogicIT offered me a paid internship as a web developer while I was still at university. I was responsible for building an app that notifies users how soon a bus will arrive at the nearest bus stop.
After completing the internship, we continued our collaboration, and I was hired as a web developer for several projects.

- Summer 2004
Baltona S.A.
My First Official Programming Internship

I was 16 years old when I landed my first official programming internship at Baltona S.A., a large duty-free company based in Poland.
During this internship, I was responsible for maintaining their PHP-based intranet website. It was my first experience in a professional IT environment, and it fully convinced me that programming is what I want to do in my life.

--------------------------------------------------------------------------

### Source code questions:
- When asked about source code or implementation details, refer the user to the technical documentation and encourage arranging a call with Jakub Niewczas to discuss the code.
- Below is the technical documentation for the HighFive app. Use it to answer any code-related questions:
--------------------------------------------------------------------------
HighFive is a fun yet fully functional AI-powered chat app. I built it as an interview pitch for Hive Labs' Senior Frontend Engineer position.

Web App

HighFive is a TypeScript web app built with Next.js. Although it is frontend-only, Next.js let me quickly set up a React-based web dev environment without worrying about low-level configuration and optimization. With Next.js and my fluency in web technologies, I was able to build the app over a weekend.

Three core aspects of the app are:
- A cool, animation-rich, hexagonal welcome page
- An AI-based chat page
- Web3 wallet integration

Hexagons

The hexagon layout reflects the main app theme of hive and bees. Compared to the original implementation on askthehive.ai, I built it using a grid of divs with every even row shifted to fit the hexagonal pattern.
Initially, I built hexagons using three rectangles: the main div, a ::before and ::after elements rotated by a precise angle.
Unfortunately, pixel-perfect precision was lost after CSS rotation transforms introduced strange UI glitches (a browser issue), so I switched to SVG. Each div now renders a hexagonal shape using SVG.

Coloring hexes is done by capturing the ID of the hex the mouse is hovering over and calculating first- and second-level neighbor hexes using this formula:

const [x, y] = activeTile.split('_').map(Number);
const evenShift = 1 - (y % 2);

excitedTiles = {
  [\`\${x}_\${y}\`]: 3,
  [\`\${x - 1}_\${y}\`]: 2,
  [\`\${x + 1}_\${y}\`]: 2,
  [\`\${x - evenShift}_\${y - 1}\`]: 2,
  [\`\${x + 1 - evenShift}_\${y - 1}\`]: 2,
  [\`\${x - evenShift}_\${y + 1}\`]: 2,
  [\`\${x + 1 - evenShift}_\${y + 1}\`]: 2,
  [\`\${x - 2}_\${y}\`]: 1,
  [\`\${x + 2}_\${y}\`]: 1,
  [\`\${x - 1 - evenShift}_\${y + 1}\`]: 1,
  [\`\${x + 2 - evenShift}_\${y + 1}\`]: 1,
  [\`\${x - 1 - evenShift}_\${y - 1}\`]: 1,
  [\`\${x + 2 - evenShift}_\${y - 1}\`]: 1,
  [\`\${x - 1}_\${y + 2}\`]: 1,
  [\`\${x}_\${y + 2}\`]: 1,
  [\`\${x + 1}_\${y + 2}\`]: 1,
  [\`\${x - 1}_\${y - 2}\`]: 1,
  [\`\${x}_\${y - 2}\`]: 1,
  [\`\${x + 1}_\${y - 2}\`]: 1,
};

(Algorithm determining which hexes should be activated. 3, 2, 1 represent different excitement levels.)

Split and reset animation is implemented using Framer Motion. Each hex is guided by those animation variants:

const topRowVariants: Variants = {
  rest: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  split: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 0.6,
    },
  },
};

(Hex animation definitions)

Adding staggerChildren: 0.2 to the parent div results in sequential animation.

AI-based chat

AI chat, the core and most fun component, is powered by OpenRouter.ai. I call the OpenRouter API directly from the frontend and append the response to the message list.

Each API call includes:
- Carefully crafted system prompt
- Web3 wallet connection status and address
- Available commands
- My CV
- This documentation
- Actual user prompt

AI is instructed to include command:CONNECT_WALLET and command:DISCONNECT_WALLET in its reply when a user asks to connect or disconnect their wallet. I capture those commands and invoke the Web3 wallet API, creating an immersive user/AI collaboration experience.

App State

The app leverages the useReducer hook and stores all app state in a single place. Changes are done by dispatching predefined events. State and actions are exposed via React context, mimicking a popular Redux architecture.

export type AppState = {
  walletAddress: string | null;
  chatStatus: 'idle' | 'processing';
  messages: {
    type: 'question' | 'answer';
    content: string;
  }[];
};

export type Action =
  | { type: 'SET_WALLET_DATA'; payload: { address: string | null } }
  | { type: 'ADD_MESSAGE'; payload: { content: string } }
  | { type: 'ADD_ANSWER'; payload: { content: string } }
  | { type: 'SET_CHAT_STATUS'; payload: { status: 'idle' | 'processing' } };

(App state and action definitions)

The Code

The code is uploaded to my GitHub in a private repo, but I am more than happy to go over it during an interview if that is something you would like to do.
--------------------------------------------------------------------------
`;async function h(e,t){try{let n=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer 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","Content-Type":"application/json"},body:JSON.stringify({model:"nvidia/nemotron-3-nano-30b-a3b:free",messages:[{role:"system",content:f},...t.map(e=>({role:"question"===e.type?"user":"assistant",content:e.content})),{role:"user",content:e}]})});if(!n.ok)throw Error("OpenRouter request failed");let r=(await n.json())?.choices?.[0]?.message?.content;return{status:"success",content:r}}catch(e){return console.error("Error fetching AI response:",e),{status:"error",error:e}}}var m=e.i(71528),g=e.i(23489);let y=(0,n.lazy)(()=>e.A(87331));function b(){let{walletAddress:e,messages:o,chatStatus:s,setChatStatus:c,addMessage:d,addAnswer:u}=l(),[{wallet:f},b,v]=(0,i.useConnectWallet)(),[w,x]=(0,n.useState)(""),_=(0,n.useRef)(null);(0,n.useEffect)(()=>{if(!_.current)return;let e=_.current,t=requestAnimationFrame(()=>{e.scrollTo({top:e.scrollHeight,behavior:"smooth"})});return()=>cancelAnimationFrame(t)},[o.length,s]);let j=async t=>{if(t.preventDefault(),""===w.trim())return;d(w),x(""),c("processing");let n=`current wallet connection status: ${f?`connected: ${e}`:"not connected"}

user prompt:${w}`,r=await h(n,o);(c("idle"),"error"===r.status)?u("Sorry, something went wrong. Please try again."):(u(r.content.replace(/command:CONNECT_WALLET/g,"").replace(/command:DISCONNECT_WALLET/g,"").trim()),r.content.includes("command:CONNECT_WALLET")&&await b(),r.content.includes("command:DISCONNECT_WALLET")&&await v({label:f.label}))};return(0,t.jsxs)("div",{className:g.default.host,children:[(0,t.jsx)(p,{}),(0,t.jsx)("div",{className:g.default.content,children:(0,t.jsxs)(a.motion.div,{className:g.default.contentMain,initial:{opacity:0,y:-16},animate:o.length>0?"expanded":"collapsed",variants:{collapsed:{height:"auto",opacity:1,y:0},expanded:{height:"100%",opacity:1,y:0,top:0}},transition:{duration:1,ease:"anticipate"},children:[(0,t.jsx)(r.default,{src:m.default,alt:"Logo",width:60,height:60}),(0,t.jsxs)("h2",{children:["Unlock the ",(0,t.jsx)("em",{children:"Potential"})]}),(0,t.jsx)("div",{className:g.default.chatWrapper,children:(0,t.jsxs)(a.motion.div,{className:g.default.chatScrollWrapper,ref:_,animate:o.length>0?"expanded":"collapsed",variants:{collapsed:{height:0},expanded:{height:"100%"}},transition:{delay:.5},children:[o.map((e,r)=>(0,t.jsx)(a.motion.div,{className:`${g.default.message} ${"answer"===e.type?g.default.answer:""}`,initial:{opacity:+("answer"===e.type)},animate:{opacity:1},transition:{duration:.3},children:(0,t.jsx)(n.Suspense,{fallback:e.content,children:(0,t.jsx)(y,{children:e.content})})},r)),"processing"===s&&(0,t.jsx)(a.motion.div,{className:`${g.default.message} ${g.default.answer}`,initial:{opacity:0},animate:{opacity:1},transition:{duration:.3,delay:1},children:"Answering..."})]})}),(0,t.jsxs)("p",{children:["Ask AI about this page, Jakub Niewczas's skills and professional history, and what he brings to"," ",(0,t.jsx)("a",{href:"https://askthehive.ai",target:"_blank",rel:"noreferrer",children:"the Hive"})," ","table!"]}),(0,t.jsxs)("form",{className:g.default.inputWrapper,onSubmit:j,children:[(0,t.jsx)("input",{type:"text",placeholder:"Prompt",value:w,onFocus:()=>setTimeout(()=>window.scrollTo(0,0),10),onChange:e=>{x(e.target.value),e.target.focus()}}),(0,t.jsx)("button",{disabled:"processing"===s,children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"m5 12 7-7 7 7"}),(0,t.jsx)("path",{d:"M12 19V5"})]})})]}),(0,t.jsxs)("div",{className:g.default.boxes,children:[(0,t.jsxs)("div",{className:g.default.box,children:[(0,t.jsx)("h3",{children:"Jakub Niewczas"}),(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Years of experience:"}),(0,t.jsx)("span",{children:"14+"})]}),(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Past or Present Roles:"}),(0,t.jsx)("span",{children:"Lead engineer, Senior FullStack engineer, consultant, tech lead"})]}),(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Frontend technologies:"}),(0,t.jsx)("span",{children:"Next.js, Vue.js, web3, Framer Motion, three.js"})]})]}),(0,t.jsxs)("div",{className:g.default.box,children:[(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Work ethic:"}),(0,t.jsx)("span",{children:"Shows up, follows through, responds fast"})]}),(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Tech industries:"}),(0,t.jsx)("span",{children:"Fintech, web3, fashion, e-commerce, travel"})]}),(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Backend:"}),(0,t.jsx)("span",{children:"Ruby on Rails, Node.js, DBs, solidity contracts"})]}),(0,t.jsxs)("div",{className:g.default.info,children:[(0,t.jsx)("strong",{children:"Superpowers:"}),(0,t.jsx)("span",{children:"Loves to code, obsessed with quality, focus and persistence"})]})]})]})]})})]})}e.s(["default",()=>b],30257)}]);