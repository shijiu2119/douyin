webpackJsonp([1],{335:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(9),o=r(352);e.default={namespace:"huoshan",state:{_huoshanAnalyze:""},reducers:{changeHuoshanAnalyze:function(t,e){var r=e.payload.data;return n.a({},t,{_huoshanAnalyze:r.video.replace(/\s/g,"")})}},effects:{queryHuoshan:function(t,e){var r,s,i,a=t.payload,u=e.call,c=e.put;return n.d(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,u(o.a,a)];case 1:return r=t.sent(),s=r.data,[4,c({type:"changeHuoshanAnalyze",payload:{data:s}})];case 2:return t.sent(),[3,4];case 3:throw i=t.sent(),new Error(i);case 4:return[2]}})}}}},337:function(t,e,r){"use strict";r.d(e,"e",function(){return n}),r.d(e,"a",function(){return o}),r.d(e,"d",function(){return s}),r.d(e,"c",function(){return i}),r.d(e,"b",function(){return a});var n="/api/settoken",o="/api/douyin",s="/api/kuaishou",i="/api/huoshan",a="/api/download"},338:function(t,e,r){t.exports=r(340)},339:function(t,e,r){"use strict";var n=r(9),o=r(338),s=(r.n(o),r(342)),i=r(343),a=this,u="",c={};function f(t){if(t.status>=200&&t.status<300)return t.json();var e=new Error(t.statusText);throw e.response=t,e}function h(t){return n.b(this,void 0,void 0,function(){return n.d(this,function(e){return 401===t.code?(document.cookie="token=",[2,d(u,c)]):200!==t.code?[2,new Promise(function(e,r){return r(t.msg)})]:[2,t]})})}var d=function(t,e){return void 0===e&&(e={}),n.b(a,void 0,void 0,function(){var r,a,d,l,y,p;return n.d(this,function(n){switch(n.label){case 0:if(r="",u=t,c=e,(a=document.getElementsByClassName("loading")[0]).style.display="flex",Object(s.a)("token"))return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Object(i.a)()];case 2:return n.sent(),r=Object(s.a)("token"),[3,4];case 3:throw d=n.sent(),new Error(d);case 4:return l=e.getKey,y=e.link,p=t+"?"+l+"="+y+"&token="+r,[2,Promise.race([o(p,{method:"GET"}),new Promise(function(t,e){setTimeout(function(){return e(new Error("\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u91cd\u8bd5"))},2e4)})]).then(f).then(h).then(function(t){return a.style.display="none",t}).catch(function(t){throw a.style.display="none",new Error(t)})]}})})};e.a=d},340:function(t,e,r){r(341),t.exports=self.fetch.bind(self)},341:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Headers=c,e.Request=b,e.Response=w,r.d(e,"DOMException",function(){return E}),e.fetch=g;var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function i(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!==typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function d(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||s(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=h(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=i(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},c.prototype.delete=function(t){delete this.map[i(t)]},c.prototype.get=function(t){return t=i(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(i(t))},c.prototype.set=function(t,e){this.map[i(t)]=a(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),u(t)},c.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),u(t)},c.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),u(t)},n.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var p=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var r=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=function(t){var e=t.toUpperCase();return p.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function w(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(w.prototype),w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},w.error=function(){var t=new w(null,{status:0,statusText:""});return t.type="error",t};var v=[301,302,303,307,308];w.redirect=function(t,e){if(-1===v.indexOf(e))throw new RangeError("Invalid status code");return new w(null,{status:e,headers:{location:t}})};var E=self.DOMException;try{new E}catch(t){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function g(t,e){return new Promise(function(r,o){var s=new b(t,e);if(s.signal&&s.signal.aborted)return o(new E("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:function(t){var e=new c;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new w(e,t))},i.onerror=function(){o(new TypeError("Network request failed"))},i.ontimeout=function(){o(new TypeError("Network request failed"))},i.onabort=function(){o(new E("Aborted","AbortError"))},i.open(s.method,s.url,!0),"include"===s.credentials?i.withCredentials=!0:"omit"===s.credentials&&(i.withCredentials=!1),"responseType"in i&&n.blob&&(i.responseType="blob"),s.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),s.signal&&(s.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&s.signal.removeEventListener("abort",a)}),i.send("undefined"===typeof s._bodyInit?null:s._bodyInit)})}g.polyfill=!0,self.fetch||(self.fetch=g,self.Headers=c,self.Request=b,self.Response=w)},342:function(t,e,r){"use strict";e.a=function(t){var e,r=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(r))?unescape(e[2]):null}},343:function(t,e,r){"use strict";e.a=function(){return n(o.e,{method:"GET"}).then(function(t){return t.json()}).then(function(t){var e=t.data.token;return document.cookie="token="+e,t}).catch(function(t){throw new Error(t)})};var n=r(338),o=(r.n(n),r(337))},352:function(t,e,r){"use strict";e.a=function(t){return Object(n.a)(o.c,t)};var n=r(339),o=r(337)}});
//# sourceMappingURL=1.450b4051.chunk.js.map