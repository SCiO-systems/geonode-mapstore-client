(window.webpackJsonp=window.webpackJsonp||[]).push([["plugins/notifications-plugin"],{"./MapStore2/web/client/components/misc/Portal.jsx":function(e,t,n){"use strict";var r=n("./MapStore2/web/client/components/misc/WithContainer.jsx"),o=n("./node_modules/react-overlays/es/index.js"),i=Object(r.a)(o.a);t.a=i},"./MapStore2/web/client/components/misc/WithContainer.jsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n.n(r),i=n("./MapStore2/web/client/utils/ConfigUtils.js");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){return function(t){return o.a.createElement(e,c({},t,{container:document.querySelector("."+(i.default.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},"./MapStore2/web/client/plugins/Notifications.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react-redux/es/index.js"),o=n("./MapStore2/web/client/actions/notifications.js"),i=n("./node_modules/react/index.js"),c=n.n(i),a=n("./node_modules/react-notification-system/dist/NotificationSystem.js"),u=n.n(a),s=n("./node_modules/prop-types/index.js"),f=n.n(s),l=n("./node_modules/react-intl/lib/index.es.js"),p=n("./MapStore2/web/client/utils/LocaleUtils.js"),b=n("./MapStore2/web/client/components/misc/Portal.jsx");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,n,r,o=g(i);function i(){var e;v(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(S(e=o.call.apply(o,[this].concat(n))),"system",(function(){return e.refs.notify})),_(S(e),"updateNotifications",(function(t){var n=t.map((function(e){return e.uid})),r=e.system().state.notifications||[];r.forEach((function(t){n.indexOf(t.uid)<0&&e.system().removeNotification(t.uid)})),t.forEach((function(t){if(r.indexOf(t.uid)<0){var n,o=t.message,i=Object(p.f)(e.context.messages,o);if(t.values)n=(0,e.props.intl.formatMessage)(n=Object(l.defineMessages)({id:o,defaultMessage:i}),t.values);else n=i||o;e.system().addNotification(j(j({},t),{},{title:Object(p.f)(e.context.messages,t.title)||t.title,message:n,action:t.action&&{label:Object(p.f)(e.context.messages,t.action.label)||t.action.label,callback:t.action.dispatch?function(){e.props.onDispatch(t.action.dispatch)}:t.action.callback},onRemove:function(){e.props.onRemove(t.uid),t.onRemove&&t.onRemove()}}))}}))})),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.updateNotifications(this.props.notifications)}},{key:"componentDidUpdate",value:function(){var e=(this.props||[]).notifications;this.updateNotifications(e)}},{key:"render",value:function(){var e=this.props,t=(e.notifications,e.onRemove,m(e,["notifications","onRemove"]));return c.a.createElement(b.a,null,c.a.createElement(u.a,d({ref:"notify"},t)))}}])&&h(t.prototype,n),r&&h(t,r),i}(c.a.Component);_(D,"propTypes",{notifications:f.a.array,intl:l.intlShape.isRequired,onRemove:f.a.func,onDispatch:f.a.func}),_(D,"contextTypes",{messages:f.a.object}),_(D,"defaultProps",{notifications:[],onRemove:function(){},onDispatch:function(){}});var M=Object(l.injectIntl)(D),R=n("./node_modules/rxjs/Rx.js"),E=n.n(R),k=n("./node_modules/connected-react-router/esm/actions.js"),A=function(e){return e.ofType(k.b).switchMap((function(){return E.a.Observable.of(Object(o.d)())}))};t.default={NotificationsPlugin:Object(r.connect)((function(e){return{notifications:e&&e.notifications}}),{onRemove:o.g,onDispatch:o.e})(M),reducers:{notifications:n("./MapStore2/web/client/reducers/notifications.js").default},epics:{clearNotificationOnLocationChange:A}}},"./MapStore2/web/client/reducers/notifications.js":function(e,t,n){"use strict";n.r(t);var r=n("./MapStore2/web/client/actions/notifications.js");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case r.c:t.type;var n=s(t,["type"]);return[].concat(a(e),[i({},n)]);case r.b:return e.filter((function(e){return e.uid!==t.uid}));case r.a:return[];default:return e}}},"./node_modules/dom-helpers/util/requestAnimationFrame.js":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");t.__esModule=!0,t.default=void 0;var o,i=r(n("./node_modules/dom-helpers/util/inDOM.js")),c="clearTimeout",a=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-s)),r=setTimeout(e,n);return s=t,r},u=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&["","webkit","moz","o","ms"].some((function(e){var t=u(e,"request");if(t in window)return c=u(e,"cancel"),a=function(e){return window[t](e)}}));var s=(new Date).getTime();(o=function(e){return a(e)}).cancel=function(e){window[c]&&"function"==typeof window[c]&&window[c](e)};var f=o;t.default=f,e.exports=t.default}}]);