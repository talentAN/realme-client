(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Pb4V:function(e,n,t){"use strict";var r=t("wx14"),i=/\s*,\s*/g,o=/&/g,a=/\$([\w-]+)/g;n.a=function(){function e(e,n){return function(t,r){var i=e.getRule(r)||n&&n.getRule(r);return i?(i=i).selector:r}}function n(e,n){for(var t=n.split(i),r=e.split(i),a="",l=0;l<t.length;l++)for(var s=t[l],u=0;u<r.length;u++){var c=r[u];a&&(a+=", "),a+=-1!==c.indexOf("&")?c.replace(o,s):s+" "+c}return a}function t(e,n,t){if(t)return Object(r.a)({},t,{index:t.index+1});var i=e.options.nestingLevel;i=void 0===i?1:i+1;var o=Object(r.a)({},e.options,{nestingLevel:i,index:n.indexOf(e)+1});return delete o.name,o}return{onProcessStyle:function(i,o,l){if("style"!==o.type)return i;var s,u,c=o,d=c.options.parent;for(var f in i){var p=-1!==f.indexOf("&"),v="@"===f[0];if(p||v){if(s=t(c,d,s),p){var g=n(f,c.selector);u||(u=e(d,l)),g=g.replace(a,u),d.addRule(g,i[f],Object(r.a)({},s,{selector:g}))}else v&&d.addRule(f,{},s).addRule(c.key,i[f],{selector:c.selector});delete i[f]}}return i}}}}}]);
//# sourceMappingURL=npm.jss-plugin-nested.ef1dac6973bfc9dacd7f.js.map