!function(){var t={934:function(t,e,n){n(55),t.exports=function(t){return""+'<div class="logo"><a class="logo-link" href="/mock-address/change-me"><h1 class="logo-link__text">TOXIN</h1></a></div>'}},525:function(t,e,n){var r=n(55);t.exports=function(t){var e="";return e+'<nav> <ul class="nav"> <li class="nav-item"><a class="nav-link active" href="/mock-address/change-me">О нас</a></li><li class="nav-item"><a class="nav-link" href="/mock-address/change-me">Услуги<img class="more__img"'+r.attr("src",n(381),!0,!0)+' alt=""></a></li><li class="nav-item"><a class="nav-link" href="/mock-address/change-me">Вакансии</a></li><li class="nav-item"><a class="nav-link" href="/mock-address/change-me">Новости</a></li><li class="nav-item"><a class="nav-link" href="/mock-address/change-me">Соглашения<img class="more__img"'+r.attr("src",n(381),!0,!0)+' alt=""></a></li></ul></nav>'}},138:function(t,e,n){var r=n(55);t.exports=function(t){var e,a="",i={};return a+='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title> Document</title><style> @import \'global\';\n@import \'./mixins/mixins.scss\';\n@import \'../components/logo/logo.scss\';\n@import \'../components/nav/nav.scss\';\n@import \'../components/header/header.scss\';\n',i.button=e=function(t,n,i){this&&this.block,this&&this.attributes,a=i?a+'<a class="btn-enter"'+r.attr("href",t,!0,!0)+">"+r.escape(null==(e=n)?"":e)+"</a>":a+'<a class="btn-registr"'+r.attr("href",t,!0,!0)+">"+r.escape(null==(e=n)?"":e)+"</a>"},a=a+'</style></head><body><!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body></body><header class="header">    <div class="container"><div class="header__inner"><div class="logo-wrap">'+(null==(e=n(934).call(this,t))?"":e)+'</div><div class="wrap"><div class="nav-wrap">'+(null==(e=n(525).call(this,t))?"":e)+'</div><div class="button-wrap">',i.button.call({block:function(){a+="                         "}},"/mock-address/change-me","войти","condition"),i.button("/mock-address/change-me","зарегистрироваться"),a=a+'</div><div class="burger"> <a class="burger-link" href="/mock-address/change-me"> <img class="burger_img"'+r.attr("src",n(182),!0,!0)+' alt=""></a></div></div></div></div></header></html></body></html>'}},55:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;function a(t,e){return Array.isArray(t)?function(t,e){for(var n,r="",i="",s=Array.isArray(e),c=0;c<t.length;c++)(n=a(t[c]))&&(s&&e[c]&&(n=o(n)),r=r+i+n,i=" ");return r}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var a in t)a&&t[a]&&r.call(t,a)&&(e=e+n+a,n=" ");return e}(t):t||""}function i(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)r.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function s(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var a=typeof e;return"object"!==a&&"function"!==a||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=o(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,n){if(1===arguments.length){for(var r=e[0],a=1;a<e.length;a++)r=t(r,e[a]);return r}for(var s in n)if("class"===s){var c=e[s]||[];e[s]=(Array.isArray(c)?c:[c]).concat(n[s]||[])}else if("style"===s){c=(c=i(e[s]))&&";"!==c[c.length-1]?c+";":c;var o=i(n[s]);o=o&&";"!==o[o.length-1]?o+";":o,e[s]=c+o}else e[s]=n[s];return e},e.classes=a,e.style=i,e.attr=s,e.attrs=function(t,e){var n="";for(var c in t)if(r.call(t,c)){var o=t[c];if("class"===c){n=s(c,o=a(o),!1,e)+n;continue}"style"===c&&(o=i(o)),n+=s(c,o,!1,e)}return n};var c=/["&<>]/;function o(t){var e=""+t,n=c.exec(e);if(!n)return t;var r,a,i,s="";for(r=n.index,a=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}a!==r&&(s+=e.substring(a,r)),a=r+1,s+=i}return a!==r?s+e.substring(a,r):s}e.escape=o,e.rethrow=function t(e,r,a,i){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||i))throw e.message+=" on line "+a,e;try{i=i||n(835).readFileSync(r,"utf8")}catch(n){t(e,null,a)}var s=3,c=i.split("\n"),o=Math.max(a-s,0),l=Math.min(c.length,a+s);throw s=c.slice(o,l).map((function(t,e){var n=e+o+1;return(n==a?"  > ":"    ")+n+"| "+t})).join("\n"),e.path=r,e.message=(r||"Pug")+":"+a+"\n"+s+"\n\n"+e.message,e}},182:function(t,e,n){"use strict";t.exports=n.p+"assets/8eedaa2794ef0c53653c.png"},381:function(t,e,n){"use strict";t.exports=n.p+"assets/e85954bc6e43e8dff6e0.svg"},835:function(){}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";n(138)}()}();
//# sourceMappingURL=scripts.js.map