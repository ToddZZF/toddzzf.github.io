function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(n){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?e(Object(a),!0).forEach((function(e){t(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}export default function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"math3",init:function(e){var r=e.getConfig().math3||{},a=n(n({},t),r);a.tex=n(n({},t.tex),r.tex),a.options=n(n({},a.options),t.options),a.startup=n(n({},t.startup),r.startup);var o=a.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";a.mathjax=null,window.MathJax=a,function(t,e){var n=document.createElement("script");n.type="text/javascript",n.id="MathJax-script",n.src=t,n.async=!0,n.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(n)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}
