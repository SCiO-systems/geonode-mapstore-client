(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3384],{98772:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(93379),o=r.n(n),i=r(72704);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var l=r(45697),a=r.n(l),c=r(24852),s=r.n(c),u=r(57588);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function l(){var e;p(this,l);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(b(e=i.call.apply(i,[this].concat(r))),"onFilter",(function(t){e.props.onFilter(t.target.value)})),h(b(e),"onClear",(function(){e.props.onFilter("")})),e}return t=l,(r=[{key:"render",value:function(){var e=this.props.filterText?s().createElement(u.OverlayTrigger,{placement:"bottom",overlay:s().createElement(u.Tooltip,{id:"mapstore-toc-filter"},this.props.tooltipClear)},s().createElement(u.Glyphicon,{glyph:"1-close",className:"text-primary close-filter",onClick:this.onClear})):s().createElement(u.Glyphicon,{className:"text-primary",glyph:"filter"});return s().createElement(u.FormGroup,{className:"mapstore-filter"},s().createElement(u.InputGroup,null,s().createElement(u.FormControl,{value:this.props.filterText,placeholder:this.props.filterPlaceholder,onChange:this.onFilter,onFocus:this.props.onFocus,type:"text"}),s().createElement(u.InputGroup.Addon,{className:"square-button-md"},this.props.loading?s().createElement("div",{className:"toc-inline-loader"}):e)))}}])&&d(t.prototype,r),l}(s().Component);h(g,"propTypes",{loading:a().bool,filterText:a().string,filterPlaceholder:a().oneOfType([a().object,a().string]),onFilter:a().func,onFocus:a().func,tooltipClear:a().oneOfType([a().object,a().string])}),h(g,"defaultProps",{loading:!1,filterText:"",filterPlaceholder:"",onFilter:function(){},onFocus:function(){},tooltipClear:"Clear"});const O=g},1036:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(18446),o=r.n(n);const i=(0,r(67076).shouldUpdate)((function(e,t){return!o()(e.start,t.start)||e.disabled!==t.disabled}))(r(85552))},76424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(24852),o=r.n(n),i=r(13218),l=r.n(i),a=r(32425),c=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,r=e.caption,n=e.infoExtra,i=e.className,s=void 0===i?"":i,f=e.description,d=e.fullText,y=e.onClick,m=void 0===y?function(){}:y,b=e.onMouseEnter,v=void 0===b?function(){}:b,h=e.onMouseLeave,g=void 0===h?function(){}:h,O=e.preview,w=e.selected,E=e.size,P=e.style,j=void 0===P?{}:P,C=e.stylePreview,k=void 0===C?{}:C,S=e.styleTools,N=void 0===S?{}:S,x=e.title,R=e.loading,T=e.dragSymbol,_=void 0===T?"+":T,A=e.tools,Z=p(e,c);return o().createElement("div",{className:"mapstore-side-card".concat(w?" selected":"").concat(E?" ms-"+E:"").concat(s?" ".concat(s):"").concat(d?" full-text":""),onClick:function(e){return m(u({title:x,preview:O,description:f,caption:r,tools:A},Z),e)},onMouseEnter:v,onMouseLeave:g,style:j},o().createElement("div",{className:"ms-head"},Z.isDraggable&&Z.connectDragSource&&Z.connectDragSource(o().createElement("div",{className:"mapstore-side-card-tool text-center"},o().createElement("div",{style:{width:10,overflow:"hidden"}},_))),O&&o().createElement("div",{className:"mapstore-side-preview",style:k},O),o().createElement("div",{className:"mapstore-side-card-container"},o().createElement("div",{className:"mapstore-side-card-inner"},o().createElement("div",{className:"mapstore-side-card-left-container"},o().createElement("div",{className:"mapstore-side-card-info"},x&&o().createElement("div",{className:"mapstore-side-card-title"},o().createElement("span",null,x)),f&&o().createElement("div",{className:"mapstore-side-card-desc"},l()(f)?f:o().createElement("span",null,f)),r&&o().createElement("div",{className:"mapstore-side-card-caption"},o().createElement("span",null,r))),n),o().createElement("div",{className:"mapstore-side-card-right-container"},o().createElement("div",{className:"mapstore-side-card-tool text-center",style:N},A),"sm"!==E&&o().createElement("div",{className:"mapstore-side-card-loading"},o().createElement(a.Z,{className:"mapstore-side-card-loader",size:12,hidden:!R})))))),t&&o().createElement("div",{className:"ms-body"},t))}},38064:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(45697),o=r.n(n),i=r(24852),l=r.n(i),a=r(57588),c=r(76424);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,r,n,o,i=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(n);if(o){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function s(){return f(this,s),i.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this.props,t=e.cardComponent,r=e.items,n=e.colProps,o=e.onItemClick,i=e.size,s=t||c.Z;return l().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},l().createElement(a.Row,{className:"items-list"},r.map((function(e,t){return l().createElement(a.Col,u({key:e.id||t},n),l().createElement(s,u({onClick:function(){return o(e)},size:i},e)))}))))}}])&&p(t.prototype,r),s}(l().Component);b(v,"propTypes",{size:o().string,onItemClick:o().func,colProps:o().object,items:o().array,cardComponent:o().oneOfType([o().string,o().func]),className:o().string}),b(v,"defaultProps",{size:"",onItemClick:function(){},colProps:{xs:12},className:"",items:[]});const h=v},57037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),a=r(23560),c=r.n(a),s=r(24198),u=r(17621),f=r.n(u),p=r(80307),d=r(63202);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){var t=e.value,r=e.format,i=e.onChangeColor,l=e.text,a=e.line,u=e.disabled,d=e.pickerProps,m=e.containerNode,v=e.onOpen,g=e.placement,O=10,w={picker:{opacity:0},arrow:{opacity:0},overlay:{}},E=h((0,n.useState)(),2),P=E[0],j=E[1],C=h((0,n.useState)(w),2),k=C[0],S=C[1],N=h((0,n.useState)(),2),x=N[0],R=N[1],T=f()(t).toString(),_=c()(m)?m():m;(0,n.useEffect)((function(){var e=P&&f()(P).toString();e&&T&&T!==e&&j(t)}),[T]),(0,n.useEffect)((function(){v(x),x||S(w)}),[x]);var A=(0,n.useRef)(),Z=(0,n.useRef)();function I(){var e,t,r,n,o,i,l;if("center"===g)return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};var a=null==A||null===(e=A.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),c=null==Z||null===(r=Z.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),s=null==Z||null===(o=Z.current)||void 0===o||null===(i=o.querySelector)||void 0===i?void 0:i.call(o,".ms-sketch-picker"),u=null==s||null===(l=s.getBoundingClientRect)||void 0===l?void 0:l.call(s);if(a&&c&&u){var f,p,d,y,m=u.width,b=u.height,v=c.top,h=c.left,w=c.width,E=c.height,P=a.top,j=a.left,C=a.width,k=a.height,S=[j+C/2,P+k/2],N=S[0]-h>m/2+O&&h+w-S[0]>m/2+O,x=S[1]-v>b/2+O&&v+E-S[1]>b/2+O,R={top:{filter:function(){return N&&P-v>b+O},styles:function(){return{picker:{position:"absolute",top:P-b-O-v,left:j+C/2-m/2-h},overlay:{},arrow:{top:P+2,left:j+C/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return x&&h+w-(j+C)>m+O},styles:function(){return{picker:{position:"absolute",top:P-b/2-v,left:j+C+O-h},overlay:{},arrow:{top:P+k/2,left:j+C-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return N&&v+E-(P+k)>b+O},styles:function(){return{picker:{position:"absolute",top:P+k+O-v,left:j+C/2-m/2-h},overlay:{},arrow:{top:P+k-2,left:j+C/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return x&&j-h>m+O},styles:function(){return{picker:{position:"absolute",top:P-b/2-v,left:j-m-O-h},overlay:{},arrow:{top:P+k/2,left:j+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=R&&null!==(f=R[g])&&void 0!==f&&null!==(p=f.filter)&&void 0!==p&&p.call(f))return null==R||null===(d=R[g])||void 0===d||null===(y=d.styles)||void 0===y?void 0:y.call(d);if("top"!==g&&R.top.filter())return R.top.styles();if("right"!==g&&R.right.filter())return R.right.styles();if("bottom"!==g&&R.bottom.filter())return R.bottom.styles();if("left"!==g&&R.left.filter())return R.left.styles()}return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}}}(0,n.useEffect)((function(){var e=function(){return S(I())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){x&&S(I())}),[x]);var D,F,z=u?" ms-disabled":"",B=o().createElement("div",{ref:Z,className:"ms-color-picker-overlay",style:b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},null==k?void 0:k.overlay)},o().createElement("div",{className:"ms-color-picker-cover",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},onClick:function(){R(!1),P&&i(r?f()(P).toString(r):P)}}),o().createElement(s.xS,y({},d,{className:"ms-sketch-picker",styles:{picker:b({width:200,padding:"10px 10px 0",boxSizing:"initial"},null==k?void 0:k.picker)},color:f()(P||t).toRgb(),onChange:function(e){return j(e.rgb)}})),o().createElement("div",{className:"ms-sketch-picker-arrow",style:b({position:"absolute",borderWidth:12},null==k?void 0:k.arrow)})),M=_?(0,p.createPortal)(B,_):B;return o().createElement("div",{className:"ms-color-picker".concat(z)},o().createElement("div",{className:"ms-color-picker-swatch",ref:A,style:(D=P||t||"transparent",F=f()(D).toRgbString(),a?{boxSizing:"border-box",border:"4px solid ".concat(F),backgroundColor:"transparent"}:{color:"transparent"===D?"#000000":f().mostReadable(F,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:F}),onClick:function(){u||(R(!x),P&&i(r?f()(P).toString(r):P))}},l),x?M:null)}O.propTypes={value:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,onChangeColor:l().func,text:l().string,line:l().bool,disabled:l().bool,pickerProps:l().object,containerNode:l().oneOfType([l().node,l().func]),onOpen:l().function,placement:l().string},O.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){},containerNode:function(){return document.querySelector("."+((0,d.u8)("themePrefix")||"ms2")+" > div")||document.body}};const w=O},12961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),a=r(57588),c=r(57037);function s(e){var t=e.color,r=e.format,n=e.line,i=e.onChangeColor,l=e.disableAlpha,s=e.containerNode,u=e.onOpen,f=e.disabled,p=e.presetColors,d=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(c.Z,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:i,pickerProps:{disableAlpha:l,presetColors:p},containerNode:s,disabled:f,onOpen:u,placement:d}))}s.propTypes={color:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,line:l().bool,onChangeColor:l().func,disableAlpha:l().bool,containerNode:l().node,disabled:l().bool,onOpen:l().func,presetColors:l().array,placement:l().string},s.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const u=s},86056:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(45697),o=r.n(n),i=r(24852),l=r.n(i),a=r(43129),c=r(98611),s=r.n(c);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,r,n,o,i=(n=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(o){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function c(){var e;p(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(b(e=i.call.apply(i,[this].concat(r))),"styleRenderer",(function(t,r,n){var o=e.props.styleRendererPattern||l().createElement("svg",{style:{height:33,width:"100%"},viewBox:"0 0 300 25"},l().createElement("path",{className:"ms-dash-array",strokeWidth:e.props.defaultStrokeWidth,strokeDasharray:n||t.value,d:"M0 12.5, 300 12.5"}));return l().createElement("div",{style:{display:"flex",alignItems:"center",width:"100%",paddingRight:25}},o)})),e}return t=c,(r=[{key:"render",value:function(){var e,t=this,r=s()(this.props.dashArray||"1 0"," "),n=this.props.options.find((function(e){return e.value===r}))?this.props.options:[{value:r}].concat(function(e){if(Array.isArray(e))return f(e)}(e=this.props.options)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=this.props.creatable?a.ZP.Creatable:a.ZP;return l().createElement(o,{options:n,disabled:this.props.disabled,menuPlacement:this.props.menuPlacement,clearable:this.props.clearable,optionRenderer:this.props.optionRenderer||this.styleRenderer,valueRenderer:this.props.valueRenderer||this.styleRenderer,value:r,isValidNewOption:this.props.isValidNewOption,onChange:function(e){if(e){var r=e.value.split(" ");t.props.onChange(r)}}})}}])&&d(t.prototype,r),c}(l().Component);h(g,"propTypes",{dashArray:o().array,menuPlacement:o().string,clearable:o().bool,value:o().string,optionRenderer:o().func,styleRendererPattern:o().node,valueRenderer:o().func,disabled:o().bool,onChange:o().func,options:o().array,creatable:o().bool,isValidNewOption:o().func,defaultStrokeWidth:o().number}),h(g,"defaultProps",{dashArray:["1","0"],menuPlacement:"top",clearable:!1,onChange:function(){},options:[{value:"1 0"},{value:"10 50 30"},{value:"6 6"},{value:"20 20"},{value:"30 30"}],defaultStrokeWidth:4});const O=g},74621:(e,t,r)=>{"use strict";r.d(t,{np:()=>n,L3:()=>o,jl:()=>i,y8:()=>l,qg:()=>a}),r(27418),r(27361);var n=function(e){return e&&e.security&&e.security.user},o=function(e){return n(e)&&n(e).role},i=function(e){return e&&e.security&&e.security.user},l=function(e){return e.security&&e.security.token},a=function(e){return"ADMIN"===o(e)}},72704:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(23645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".msgapi .mapstore-filter input::-ms-clear,\n.msgapi .mapstore-filter input::-ms-reveal {\n  display: none;\n}\n",""]);const i=o}}]);