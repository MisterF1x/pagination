!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequire940f;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequire940f=a),a.register("iyMnQ",(function(e,n){var r,a;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return a}),(function(t){return a=t}));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},a=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a.register("hnqI9",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var a={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=a[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),a[t]=e),e}})),a("iyMnQ").register(JSON.parse('{"7Ghkd":"index.38859658.js","l7Bfc":"sprite.34e24702.svg","5NJCH":"index.f53300ee.css"}'));var o;o=a("hnqI9").getBundleURL("7Ghkd")+a("iyMnQ").resolve("l7Bfc");var c={currentPage:1,totalPages:1e3,sprite:new URL(o)},i={pagination:document.querySelector(".pagination")},s=function(t,e){var n=Math.ceil(t/5),r=Math.ceil(e/5),a=5*(r-1)+1,o=Math.min(a+5-1,t);return{pages:Array.from({length:o-a+1},(function(t,e){return a+e})),hasPrevGroup:r>1,hasNextGroup:r<n}},u=i.pagination,g=function(){var t=s(c.totalPages,c.currentPage),e=t.pages,n=t.hasPrevGroup,r=t.hasNextGroup,a='<button type="button" class="end-btn page-btn">'.concat(c.totalPages,"</button>"),o='<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">\n    <use xlink:href="'.concat(c.sprite,'#icon-arrow-left"></use>\n  </svg></button>'),i='<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">\n    <use xlink:href="'.concat(c.sprite,'#icon-arrow-right"></use>\n  </svg></button>');return(n?o+'<button type="button" class="start-btn page-btn">1</button><button class="page-btn prev-dots">...</button>':"")+e.map((function(t){return'<button type="button" class="page-btn '.concat(t===c.currentPage?"active-page":"",'\n        ">').concat(t,"</button>")})).join("")+(r?'<button class="page-btn next-dots">...</button>'+a+i:"")},l=function(t){u.insertAdjacentHTML("beforeend",t)},f=i.pagination,p=function(t){c.currentPage=t,f.innerHTML="",l(g())},b=function(){var t=s(c.totalPages,c.currentPage).pages[0],e=Math.max(t-1,1);p(e)},d=function(t){var e=document.querySelector(".active-page"),n=Number(t.target.textContent)||c.currentPage;n!==c.currentPage&&(p(n),e.classList.remove("active-page"),t.target.classList.add("active-page"))};i.pagination.addEventListener("click",(function(t){var e,n,r;"BUTTON"===t.target.nodeName&&(Number(t.target.textContent)!==c.currentPage&&(t.target.classList.contains("next-btn")&&p(c.currentPage+1),t.target.classList.contains("prev-btn")&&p(c.currentPage-1),t.target.classList.contains("next-dots")&&(e=s(c.totalPages,c.currentPage).pages,n=e[e.length-1],r=Math.min(n+1,c.totalPages),currentPage=e[e.length-1]+1,p(r)),t.target.classList.contains("prev-dots")&&b(),d(t),console.log("current-page: ".concat(c.currentPage))))})),l(g()),console.log(c.currentPage)}();
//# sourceMappingURL=index.38859658.js.map
