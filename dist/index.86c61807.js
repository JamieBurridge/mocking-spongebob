var e,t,n,r,o=globalThis,i={},a=i={};function l(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(e){n=c}}();var u=[],d=!1,f=-1;function h(){d&&r&&(d=!1,r.length?u=r.concat(u):f=-1,u.length&&m())}function m(){if(!d){var e=s(h);d=!0;for(var t=u.length;t;){for(r=u,u=[];++f<t;)r&&r[f].run();f=-1,t=u.length}r=null,d=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new g(e,t)),1!==u.length||d||s(m)},g.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0};const w=(()=>{let e=0,t=()=>`0000${(1679616*Math.random()<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function y(e){let t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}function v(e,t){let n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function b(e,t={}){return{width:t.width||function(e){let t=v(e,"border-left-width"),n=v(e,"border-right-width");return e.clientWidth+t+n}(e),height:t.height||function(e){let t=v(e,"border-top-width"),n=v(e,"border-bottom-width");return e.clientHeight+t+n}(e)}}function E(e){return new Promise((t,n)=>{let r=new Image;r.decode=()=>t(r),r.onload=()=>t(r),r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function T(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function S(e,t,n){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${n}`),o.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),T(o)}const x=(e,t)=>{if(e instanceof t)return!0;let n=Object.getPrototypeOf(e);return null!==n&&(n.constructor.name===t.name||x(n,t))};function R(e,t,n){let r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""===o||"none"===o)return;let i=w();try{t.className=`${t.className} ${i}`}catch(e){return}let a=document.createElement("style");a.appendChild(function(e,t,n){let r=`.${e}:${t}`,o=n.cssText?function(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}(n):y(n).map(e=>{let t=n.getPropertyValue(e),r=n.getPropertyPriority(e);return`${e}: ${t}${r?" !important":""};`}).join(" ");return document.createTextNode(`${r}{${o}}`)}(i,n,r)),t.appendChild(a)}const L="application/font-woff",$="image/jpeg",C={woff:L,woff2:L,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:$,jpeg:$,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function A(e){return C[(function(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""})(e).toLowerCase()]||""}function P(e){return -1!==e.search(/^(data:)/)}function k(e,t){return`data:${t};base64,${e}`}async function N(e,t,n){let r=await fetch(e,t);if(404===r.status)throw Error(`Resource "${r.url}" not found`);let o=await r.blob();return new Promise((e,t)=>{let i=new FileReader;i.onerror=t,i.onloadend=()=>{try{e(n({res:r,result:i.result}))}catch(e){t(e)}},i.readAsDataURL(o)})}const M={};async function O(e,t,n){var r,o,i;let a,l;let c=(r=e,o=t,i=n.includeQueryParams,l=r.replace(/\?.*/,""),i&&(l=r),/ttf|otf|eot|woff2?/i.test(l)&&(l=l.replace(/.*\//,"")),o?`[${o}]${l}`:l);if(null!=M[c])return M[c];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());try{let r=await N(e,n.fetchRequestInit,({res:e,result:n})=>(t||(t=e.headers.get("Content-Type")||""),n.split(/,/)[1]));a=k(r,t)}catch(r){a=n.imagePlaceholder||"";let t=`Failed to fetch resource: ${e}`;r&&(t="string"==typeof r?r:r.message),t&&console.warn(t)}return M[c]=a,a}async function j(e){let t=e.toDataURL();return"data:,"===t?e.cloneNode(!1):E(t)}async function H(e,t){if(e.currentSrc){let t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.clientWidth,t.height=e.clientHeight,null==n||n.drawImage(e,0,0,t.width,t.height),E(t.toDataURL())}let n=e.poster,r=A(n);return E(await O(n,r,t))}async function I(e){var t;try{if(null===(t=null==e?void 0:e.contentDocument)||void 0===t?void 0:t.body)return await B(e.contentDocument.body,{},!0)}catch(e){}return e.cloneNode(!1)}async function U(e,t){return x(e,HTMLCanvasElement)?j(e):x(e,HTMLVideoElement)?H(e,t):x(e,HTMLIFrameElement)?I(e):e.cloneNode(!1)}const D=e=>null!=e.tagName&&"SLOT"===e.tagName.toUpperCase();async function F(e,t,n){var r,o;let i=[];return 0===(i=D(e)&&e.assignedNodes?y(e.assignedNodes()):x(e,HTMLIFrameElement)&&(null===(r=e.contentDocument)||void 0===r?void 0:r.body)?y(e.contentDocument.body.childNodes):y((null!==(o=e.shadowRoot)&&void 0!==o?o:e).childNodes)).length||x(e,HTMLVideoElement)||await i.reduce((e,r)=>e.then(()=>B(r,n)).then(e=>{e&&t.appendChild(e)}),Promise.resolve()),t}async function V(e,t){let n=e.querySelectorAll?e.querySelectorAll("use"):[];if(0===n.length)return e;let r={};for(let o=0;o<n.length;o++){let i=n[o].getAttribute("xlink:href");if(i){let n=e.querySelector(i),o=document.querySelector(i);n||!o||r[i]||(r[i]=await B(o,t,!0))}}let o=Object.values(r);if(o.length){let t="http://www.w3.org/1999/xhtml",n=document.createElementNS(t,"svg");n.setAttribute("xmlns",t),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let r=document.createElementNS(t,"defs");n.appendChild(r);for(let e=0;e<o.length;e++)r.appendChild(o[e]);e.appendChild(n)}return e}async function B(e,t,n){return n||!t.filter||t.filter(e)?Promise.resolve(e).then(e=>U(e,t)).then(n=>F(e,n,t)).then(t=>{var n,r;return n=e,x(r=t,Element)&&(!function(e,t){let n=t.style;if(!n)return;let r=window.getComputedStyle(e);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):y(r).forEach(o=>{let i=r.getPropertyValue(o);if("font-size"===o&&i.endsWith("px")){let e=Math.floor(parseFloat(i.substring(0,i.length-2)))-.1;i=`${e}px`}x(e,HTMLIFrameElement)&&"display"===o&&"inline"===i&&(i="block"),"d"===o&&t.getAttribute("d")&&(i=`path(${t.getAttribute("d")})`),n.setProperty(o,i,r.getPropertyPriority(o))})}(n,r),R(n,r,":before"),R(n,r,":after"),x(n,HTMLTextAreaElement)&&(r.innerHTML=n.value),x(n,HTMLInputElement)&&r.setAttribute("value",n.value),function(e,t){if(x(e,HTMLSelectElement)){let n=Array.from(t.children).find(t=>e.value===t.getAttribute("value"));n&&n.setAttribute("selected","")}}(n,r)),r}).then(e=>V(e,t)):null}const q=/url\((['"]?)([^'"]+?)\1\)/g,_=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,W=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;async function z(e,t,n,r,o){try{let i;let a=n?function(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let n=document.implementation.createHTMLDocument(),r=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}(t,n):t,l=A(t);if(o){let e=await o(a);i=k(e,l)}else i=await O(a,l,r);return e.replace(function(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}(t),`$1${i}$3`)}catch(e){}return e}function X(e){return -1!==e.search(q)}async function G(e,t,n){if(!X(e))return e;let r=function(e,{preferredFontFormat:t}){return t?e.replace(W,e=>{for(;;){let[n,,r]=_.exec(e)||[];if(!r)return"";if(r===t)return`src: ${n};`}}):e}(e,n);return(function(e){let t=[];return e.replace(q,(e,n,r)=>(t.push(r),e)),t.filter(e=>!P(e))})(r).reduce((e,r)=>e.then(e=>z(e,r,t,n)),Promise.resolve(r))}async function K(e,t,n){var r;let o=null===(r=t.style)||void 0===r?void 0:r.getPropertyValue(e);if(o){let r=await G(o,null,n);return t.style.setProperty(e,r,t.style.getPropertyPriority(e)),!0}return!1}async function Q(e,t){await K("background",e,t)||await K("background-image",e,t),await K("mask",e,t)||await K("mask-image",e,t)}async function J(e,t){let n=x(e,HTMLImageElement);if(!(n&&!P(e.src))&&!(x(e,SVGImageElement)&&!P(e.href.baseVal)))return;let r=n?e.src:e.href.baseVal,o=await O(r,A(r),t);await new Promise((t,r)=>{e.onload=t,e.onerror=r,e.decode&&(e.decode=t),"lazy"===e.loading&&(e.loading="eager"),n?(e.srcset="",e.src=o):e.href.baseVal=o})}async function Y(e,t){let n=y(e.childNodes).map(e=>Z(e,t));await Promise.all(n).then(()=>e)}async function Z(e,t){x(e,Element)&&(await Q(e,t),await J(e,t),await Y(e,t))}const ee={};async function et(e){let t=ee[e];if(null!=t)return t;let n=await fetch(e);return t={url:e,cssText:await n.text()},ee[e]=t,t}async function en(e,t){let n=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g;return Promise.all((n.match(/url\([^)]+\)/g)||[]).map(async o=>{let i=o.replace(r,"$1");return i.startsWith("https://")||(i=new URL(i,e.url).href),N(i,t.fetchRequestInit,({result:e})=>(n=n.replace(o,`url(${e})`),[o,e]))})).then(()=>n)}function er(e){if(null==e)return[];let t=[],n=e.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let e=r.exec(n);if(null===e)break;t.push(e[0])}n=n.replace(r,"");let o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let e=o.exec(n);if(null===e){if(null===(e=i.exec(n)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;t.push(e[0])}return t}async function eo(e,t){let n=[],r=[];return e.forEach(n=>{if("cssRules"in n)try{y(n.cssRules||[]).forEach((e,o)=>{if(e.type===CSSRule.IMPORT_RULE){let i=o+1,a=e.href,l=et(a).then(e=>en(e,t)).then(e=>er(e).forEach(e=>{try{n.insertRule(e,e.startsWith("@import")?i+=1:n.cssRules.length)}catch(t){console.error("Error inserting rule from remote css",{rule:e,error:t})}})).catch(e=>{console.error("Error loading remote css",e.toString())});r.push(l)}})}catch(i){let o=e.find(e=>null==e.href)||document.styleSheets[0];null!=n.href&&r.push(et(n.href).then(e=>en(e,t)).then(e=>er(e).forEach(e=>{o.insertRule(e,n.cssRules.length)})).catch(e=>{console.error("Error loading remote stylesheet",e)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(e.forEach(e=>{if("cssRules"in e)try{y(e.cssRules||[]).forEach(e=>{n.push(e)})}catch(t){console.error(`Error while reading CSS rules from ${e.href}`,t)}}),n))}async function ei(e,t){if(null==e.ownerDocument)throw Error("Provided element is not within a Document");let n=y(e.ownerDocument.styleSheets);return(await eo(n,t)).filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>X(e.style.getPropertyValue("src")))}async function ea(e,t){let n=await ei(e,t);return(await Promise.all(n.map(e=>{let n=e.parentStyleSheet?e.parentStyleSheet.href:null;return G(e.cssText,n,t)}))).join("\n")}async function el(e,t){let n=null!=t.fontEmbedCSS?t.fontEmbedCSS:t.skipFonts?null:await ea(e,t);if(n){let t=document.createElement("style"),r=document.createTextNode(n);t.appendChild(r),e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}async function ec(e,t={}){let{width:n,height:r}=b(e,t),o=await B(e,t,!0);return await el(o,t),await Z(o,t),!function(e,t){let{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);let r=t.style;null!=r&&Object.keys(r).forEach(e=>{n[e]=r[e]})}(o,t),await S(o,n,r)}async function es(e,t={}){let{width:n,height:r}=b(e,t),o=await ec(e,t),a=await E(o),l=document.createElement("canvas"),c=l.getContext("2d"),s=t.pixelRatio||function(){let e,t;try{t=i}catch(e){}let n=t&&t.env?t.env.devicePixelRatio:null;return n&&Number.isNaN(e=parseInt(n,10))&&(e=1),e||window.devicePixelRatio||1}(),u=t.canvasWidth||n,d=t.canvasHeight||r;return l.width=u*s,l.height=d*s,!t.skipAutoScale&&(l.width>16384||l.height>16384)&&(l.width>16384&&l.height>16384?l.width>l.height?(l.height*=16384/l.width,l.width=16384):(l.width*=16384/l.height,l.height=16384):l.width>16384?(l.height*=16384/l.width,l.width=16384):(l.width*=16384/l.height,l.height=16384)),l.style.width=`${u}`,l.style.height=`${d}`,t.backgroundColor&&(c.fillStyle=t.backgroundColor,c.fillRect(0,0,l.width,l.height)),c.drawImage(a,0,0,l.width,l.height),l}async function eu(e,t={}){return(await es(e,t)).toDataURL()}var ed={};e=function(){function e(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){a(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function t(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function n(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o&&o.global===o?o:void 0,i=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(o,i,a){var l=r.URL||r.webkitURL,c=document.createElement("a");i=i||o.name||"download",c.download=i,c.rel="noopener","string"==typeof o?(c.href=o,c.origin===location.origin?n(c):t(c.href)?e(o,i,a):n(c,c.target="_blank")):(c.href=l.createObjectURL(o),setTimeout(function(){l.revokeObjectURL(c.href)},4e4),setTimeout(function(){n(c)},0))}:"msSaveOrOpenBlob"in navigator?function(r,o,i){if(o=o||r.name||"download","string"!=typeof r){var a;navigator.msSaveOrOpenBlob((void 0===(a=i)?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\uFEFF",r],{type:r.type}):r),o)}else if(t(r))e(r,o,i);else{var l=document.createElement("a");l.href=r,l.target="_blank",setTimeout(function(){n(l)})}}:function(t,n,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var l="application/octet-stream"===t.type,c=/constructor/i.test(r.HTMLElement)||r.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||l&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},u.readAsDataURL(t)}else{var d=r.URL||r.webkitURL,f=d.createObjectURL(t);a?a.location=f:location.href=f,a=null,setTimeout(function(){d.revokeObjectURL(f)},4e4)}});r.saveAs=a.saveAs=a,ed=a},"function"==typeof define&&define.amd?define([],e):e(),window.onload=()=>{let e=document.getElementsByTagName("button")[0],t=document.getElementsByTagName("textarea")[0],n=document.getElementsByTagName("section")[0],r=document.getElementById("output_meme_text");async function o(e){return await eu(e).then(function(e){})}e.addEventListener("click",()=>{let e=function(e){let t="";for(let n=0;n<e.length;n++)n%2==0?t+=e[n].toLowerCase():t+=e[n].toUpperCase();return t}(t.value);n.style.display="block",r.textContent=e,console.log(o(n)),(0,ed.saveAs)(o(n),"mocking-spongebob-meme.png")})};
//# sourceMappingURL=index.86c61807.js.map
