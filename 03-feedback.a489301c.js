!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function x(e){return c=e,f=setTimeout(h,t),s?y(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function h(){var e=g();if(S(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?y(e):(r=o=void 0,a)}function T(){var e=g(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return x(l);if(d)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(j(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:O(g())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var x="feedback-form-state",S={email:"",message:""},h=JSON.parse(localStorage.getItem(x)),O={form:document.querySelector(".feedback-form"),input:document.querySelector("input[name=email]"),textarea:document.querySelector("textarea[name=message]")};!function e(){if(h)return O.input.value=h.email||"",O.textarea.value=h.message||"",e}(),O.form.addEventListener("input",e(t)((function(e){return S.email=O.input.value.trim(),S.message=O.textarea.value.trim(),localStorage.setItem(x,JSON.stringify(S))}),500)),O.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.input.value||""===O.textarea.value)return alert("Please fill in all the fields!");console.log(h),e.currentTarget.reset(),localStorage.removeItem(x)}))}();
//# sourceMappingURL=03-feedback.a489301c.js.map
