(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6364],{15047:(e,t,r)=>{"use strict";r.d(t,{b:()=>b});var n=r(27418),a=r.n(n);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){return null===e?[]:e.map((function(e){return{properties:s({},e),id:e.osm_id,type:"Feature",bbox:e.boundingbox.map((function(e){return parseFloat(e)})).reduce((function(e,t,r){return e[function(e){switch(e){case 0:return 1;case 1:return 3;case 2:return 0;case 3:return 2;default:return-1}}(r)]=t,e}),[]),geometry:e.geojson||{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}}))},l=r(59286),c=r(32420),p=["url","typeName","queriableAttributes","outputFormat","predicate","staticFilter","blacklist","item","fromTextToFilter","returnFullData"];var w=function(e){var t,r=e.searchText,n=e.staticFilter,a=e.blacklist,o=e.item,s=e.queriableAttributes,i=e.predicate,u=(0,l.generateTemplateString)(n||"")(o),c=r.split(" ").filter((function(e){return e})).filter((function(e){return a.indexOf(e.toLowerCase())<0}));return 0===c.length&&(c=r?[r]:[]),c.length>0&&(t="(".concat(c.map((function(e){return s.map((function(t){return"".concat(t," ").concat(i," '%").concat(e.replace("'","''"),"%'")})).join(" OR ")})).join(") AND (")).concat(")")),t?t.concat(u):u||null},f={nominatim:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{returnFullData:!1};return r(47310).Z.geocode(e,t).then((function(e){return t.returnFullData?e:u(e.data)}))},wfs:function(e,t){var r=t.url,n=t.typeName,o=t.queriableAttributes,s=void 0===o?[]:o,i=t.outputFormat,u=void 0===i?"application/json":i,l=t.predicate,f=void 0===l?"ILIKE":l,m=t.staticFilter,b=void 0===m?"":m,d=t.blacklist,g=void 0===d?[]:d,h=t.item,y=t.fromTextToFilter,v=void 0===y?w:y,P=t.returnFullData,O=void 0!==P&&P,x=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(t,p),F=v({searchText:e,staticFilter:b,blacklist:g,item:h,queriableAttributes:s,predicate:f});return c.DH(r,a()({maxFeatures:10,typeName:n,outputFormat:u,cql_filter:F},x)).then((function(e){return O?e:e.features}))}},m={setService:function(e,t){f[e]=t},getService:function(e){return f[e]?f[e]:null}},b={Services:f,Utils:m}},76364:(e,t,r)=>{"use strict";r.d(t,{Vd:()=>O,Vj:()=>x});var n=r(72500),a=r.n(n),o=r(66654),s=r.n(o),i=r(91175),u=r.n(i),l=r(14293),c=r.n(l),p=r(27418),w=r.n(p),f=r(49977),m=r.n(f),b=r(15047),d=r(75875),g=r.n(d),h=r(32785);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){var t=e.searchText,r=void 0===t?"":t,n=e.queriableAttributes,a=void 0===n?[]:n,o=e.predicate,s=void 0===o?"ILIKE":o,i=u()(a),l=r.toLowerCase(),p="strToLowerCase(".concat(i,") ").concat(s," '%").concat(l,"%'");return c()(i)?"":"("+p+")"},O=function(e){return e.distinctUntilChanged((function(e){var t=e.value,r=e.currentPage,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!(n.value!==t||n.currentPage!==r)})).throttle((function(e){return m().Observable.timer(e.delayDebounce||0)})).merge(e.debounce((function(e){return m().Observable.timer(e.delayDebounce||0)}))).distinctUntilChanged().switchMap((function(e){if(e.performFetch){var t=(0,h.getWpsPayload)({attribute:e.attribute,layerName:e.typeName,maxFeatures:e.maxFeatures,startIndex:(e.currentPage-1)*e.maxFeatures,value:e.value});return m().Observable.fromPromise(g().post(e.url,t,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"}}).then((function(e){return{fetchedData:e.data,busy:!1}}))).catch((function(){return m().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({busy:!0})}return m().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({})},x=function(e){return m().Observable.merge(e.distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.value,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.value;return t===n})).debounce((function(e){return m().Observable.timer(e.delayDebounce||0)})),e.distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.filterProps,r=e.currentPage,n=arguments.length>1?arguments[1]:void 0,a=n.filterProps,o=n.currentPage;return t===a&&r===o}))).switchMap((function(e){if(e.performFetch){var t=a().parse(e.url,!0),r="";(s()(t.pathname,"wfs")||s()(t.pathname,"wms")||s()(t.pathname,"ows")||s()(t.pathname,"wps"))&&(r=t.pathname.replace(/(wms|ows|wps|wfs)$/,"wfs")),t.query&&t.query.service&&delete t.query.service;var n=a().format(w()({},t,{search:null,pathname:r})),o=w()({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:n,typeName:e.filterProps&&e.filterProps.typeName||"",predicate:e.filterProps&&e.filterProps.predicate||"ILIKE",blacklist:e.filterProps&&e.filterProps.blacklist||[],maxFeatures:e.filterProps&&e.filterProps.maxFeatures||3,queriableAttributes:e.filterProps&&e.filterProps.queriableAttributes||[],returnFullData:!0,startIndex:((e.currentPage||1)-1)*(e.filterProps&&e.filterProps.maxFeatures||3),outputFormat:"application/json",staticFilter:"",fromTextToFilter:P,item:{},timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"},srsName:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},t.query));return m().Observable.fromPromise(b.b.Utils.getService("wfs")(e.value,o).then((function(t){return{fetchedData:{values:t.features.map((function(e){return e.properties})),size:t.totalFeatures,features:t.features,crs:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},busy:!1}}))).catch((function(){return m().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({busy:!0})}return m().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({})}},32785:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=r(47805),o=a.isFilterValid,s=a.toOGCFilterParts,i=r(2245)({}).and;e.exports={getWpsPayload:function(e){var t,r=e.layerName,a=e.layerFilter,u=e.attribute,l=e.maxFeatures,c=e.startIndex,p=e.value,w=p?'<ogc:PropertyIsLike matchCase="false" wildCard="*" singleChar="." escapeChar="!">   <ogc:PropertyName>'+u+"</ogc:PropertyName>   <ogc:Literal>*"+p+"*</ogc:Literal></ogc:PropertyIsLike>":"",f=a&&!a.disabled&&o(a)?s(a,"1.1.0","ogc"):[];return'<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">  <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">gs:PagedUnique</ows:Identifier>  <wps:DataInputs>    <wps:Input>      <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Identifier>      <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Title>      <wps:Data />      <wps:Reference xmlns:xlink="http://www.w3.org/1999/xlink" mimeType="text/xml" xlink:href="http://geoserver/wfs" method="POST">        <wps:Body>         <wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0">           <wfs:Query typeName="'+r+'">'+(w.length>0||f.length>0?'<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">'+i.apply(void 0,(t=f,function(e){if(Array.isArray(e))return n(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([w]))+"</ogc:Filter>":"")+'             <ogc:SortBy xmlns:ogc="http://www.opengis.net/ogc">               <ogc:SortProperty>                 <ogc:PropertyName>'+u+'</ogc:PropertyName>               </ogc:SortProperty>             </ogc:SortBy>           </wfs:Query>         </wfs:GetFeature>       </wps:Body>     </wps:Reference>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Title>     <wps:Data>       <wps:LiteralData>'+u+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Title>     <wps:Data>       <wps:LiteralData>'+l+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Title>     <wps:Data>       <wps:LiteralData>'+c+'</wps:LiteralData>     </wps:Data>   </wps:Input> </wps:DataInputs> <wps:ResponseForm>   <wps:RawDataOutput mimeType="application/json">     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">result</ows:Identifier>   </wps:RawDataOutput> </wps:ResponseForm></wps:Execute>'}}}}]);