webpackJsonp([14],{276:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,s,u,c=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),f=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n      <x-layout title="name()">\n        <x-marked src="','"></x-marked>\n      </x-layout>\n    '],['\n      <x-layout title="name()">\n        <x-marked src="','"></x-marked>\n      </x-layout>\n    ']);t(26),t(30);var l=t(7),m=t(22),p=(0,l.define)((u=s=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),c(n,[{key:"render",value:function(){return this.$(f,"\n          The `name()` function generates a unique custom element name that you can use when you define your component.\n\n          ```js\n          import { name } from 'skatejs';\n\n          // x-element\n          name();\n\n          // x-element-1\n          name();\n          ```\n\n          You can also specify a \"hint\" that `name()` will use instead of `element`.\n\n          ```js\n          // x-tabs\n          name('tabs');\n\n          // my-tabs\n          name('my-tabs');\n\n          // my-tabs-1\n          name('my-tabs');\n          ```\n\n          Name doesn't manage an internal cache of names, it uses `customElements.get()` to check to see if a name already exists. If it does, it increments the counter and repeats that until it finds a unique name. This means it will work with any number of custom elemetns from other sources that may have conflicting names.\n        ")}}]),n}(m.Component),s.is="x-pages-utils-name",i=u))||i;n.default=p}});