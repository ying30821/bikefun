(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6174b6"],{1134:function(t,e,i){var s;
/** @license
 *
 *  Copyright (C) 2012 K. Arthur Endsley (kaendsle@mtu.edu)
 *  Michigan Tech Research Institute (MTRI)
 *  3600 Green Court, Suite 100, Ann Arbor, MI, 48105
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */(function(n,r){s=function(){return r()}.call(e,i,e,t),void 0===s||(t.exports=s)})(0,(function(){var t,e,i;return this,i=function(t){return t instanceof i?t:this instanceof i?void(this._wrapped=t):new i(t)},t=function(t,e){return t.substring(0,e.length)===e},e=function(t,e){return t.substring(t.length-e.length)===e},i.delimiter=" ",i.isArray=function(t){return!(!t||t.constructor!==Array)},i.trim=function(i,s){s=s||" ";while(t(i,s))i=i.substring(1);while(e(i,s))i=i.substring(0,i.length-1);return i},i.Wkt=function(t){this.delimiter=i.delimiter||" ",this.wrapVertices=!0,this.regExes={typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,spaces:/\s+|\+/,numeric:/-*\d+(\.*\d+)?/,comma:/\s*,\s*/,parenComma:/\)\s*,\s*\(/,coord:/-*\d+\.*\d+ -*\d+\.*\d+/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,ogcTypes:/^(multi)?(point|line|polygon|box)?(string)?$/i,crudeJson:/^{.*"(type|coordinates|geometries|features)":.*}$/},this._stripWhitespaceAndParens=function(t){var e=t.trim(),i=e.replace(/^\(?(.*?)\)?$/,"$1");return i},this.components=void 0,t&&"string"===typeof t?this.read(t):t&&void 0!==typeof t&&this.fromObject(t)},i.Wkt.prototype.isCollection=function(){switch(this.type.slice(0,5)){case"multi":return!0;case"polyg":return!0;default:return!1}},i.Wkt.prototype.sameCoords=function(t,e){return t.x===e.x&&t.y===e.y},i.Wkt.prototype.fromObject=function(t){var e;return e=t.hasOwnProperty("type")&&t.hasOwnProperty("coordinates")?this.fromJson(t):this.deconstruct.call(this,t),this.components=e.components,this.isRectangle=e.isRectangle||!1,this.type=e.type,this},i.Wkt.prototype.toObject=function(t){var e=this.construct[this.type].call(this,t);return"object"!==typeof e||i.isArray(e)||(e.properties=this.properties),e},i.Wkt.prototype.toString=function(t){return this.write()},i.Wkt.prototype.fromJson=function(t){var e,s,n,r,o,a;if(this.type=t.type.toLowerCase(),this.components=[],t.hasOwnProperty("geometry"))return this.fromJson(t.geometry),this.properties=t.properties,this;if(r=t.coordinates,i.isArray(r[0])){for(e in r)if(r.hasOwnProperty(e))if(i.isArray(r[e][0])){for(s in a=[],r[e])if(r[e].hasOwnProperty(s))if(i.isArray(r[e][s][0])){for(n in o=[],r[e][s])r[e][s].hasOwnProperty(n)&&o.push({x:r[e][s][n][0],y:r[e][s][n][1]});a.push(o)}else a.push({x:r[e][s][0],y:r[e][s][1]});this.components.push(a)}else"multipoint"===this.type?this.components.push([{x:r[e][0],y:r[e][1]}]):this.components.push({x:r[e][0],y:r[e][1]})}else this.components.push({x:r[0],y:r[1]});return this},i.Wkt.prototype.toJson=function(){var t,e,s,n,r,o,a;if(t=this.components,e={coordinates:[],type:function(){var t,e,i;for(t in e=this.regExes.ogcTypes.exec(this.type).slice(1),i=[],e)e.hasOwnProperty(t)&&void 0!==e[t]&&i.push(e[t].toLowerCase().slice(0,1).toUpperCase()+e[t].toLowerCase().slice(1));return i}.call(this).join("")},"box"===this.type.toLowerCase()){for(s in e.type="Polygon",e.bbox=[],t)t.hasOwnProperty(s)&&(e.bbox=e.bbox.concat([t[s].x,t[s].y]));return e.coordinates=[[[t[0].x,t[0].y],[t[0].x,t[1].y],[t[1].x,t[1].y],[t[1].x,t[0].y],[t[0].x,t[0].y]]],e}for(s in t)if(t.hasOwnProperty(s))if(i.isArray(t[s])){for(n in a=[],t[s])if(t[s].hasOwnProperty(n))if(i.isArray(t[s][n])){for(r in o=[],t[s][n])t[s][n].hasOwnProperty(r)&&o.push([t[s][n][r].x,t[s][n][r].y]);a.push(o)}else t[s].length>1?a.push([t[s][n].x,t[s][n].y]):a=a.concat([t[s][n].x,t[s][n].y]);e.coordinates.push(a)}else t.length>1?e.coordinates.push([t[s].x,t[s].y]):e.coordinates=e.coordinates.concat([t[s].x,t[s].y]);return e},i.Wkt.prototype.merge=function(t){var e=this.type.slice(0,5);if(this.type!==t.type&&this.type.slice(5,this.type.length)!==t.type)throw TypeError("The input geometry types must agree or the calling this.Wkt.Wkt instance must be a multigeometry of the other");switch(e){case"point":this.components=[this.components.concat(t.components)];break;case"multi":this.components=this.components.concat("multi"===t.type.slice(0,5)?t.components:[t.components]);break;default:this.components=[this.components,t.components];break}return"multi"!==e&&(this.type="multi"+this.type),this},i.Wkt.prototype.read=function(t){var e;if(e=this.regExes.typeStr.exec(t),e)this.type=e[1].toLowerCase(),this.base=e[2],this.ingest[this.type]&&(this.components=this.ingest[this.type].apply(this,[this.base]));else{if(!this.regExes.crudeJson.test(t))throw console.log("Invalid WKT string provided to read()"),{name:"WKTError",message:"Invalid WKT string provided to read()"};if("object"!==typeof JSON||"function"!==typeof JSON.parse)throw console.log("JSON.parse() is not available; cannot parse GeoJSON strings"),{name:"JSONError",message:"JSON.parse() is not available; cannot parse GeoJSON strings"};this.fromJson(JSON.parse(t))}return this},i.Wkt.prototype.write=function(t){var e,i,s;for(t=t||this.components,i=[],i.push(this.type.toUpperCase()+"("),e=0;e<t.length;e+=1){if(this.isCollection()&&e>0&&i.push(","),!this.extract[this.type])return null;s=this.extract[this.type].apply(this,[t[e]]),this.isCollection()&&"multipoint"!==this.type?i.push("("+s+")"):(i.push(s),e!==t.length-1&&"multipoint"!==this.type&&i.push(","))}return i.push(")"),i.join("")},i.Wkt.prototype.extract={point:function(t){return String(t.x)+this.delimiter+String(t.y)},multipoint:function(t){var e,i,s=[];for(e=0;e<t.length;e+=1)i=this.extract.point.apply(this,[t[e]]),this.wrapVertices&&(i="("+i+")"),s.push(i);return s.join(",")},linestring:function(t){return this.extract.point.apply(this,[t])},multilinestring:function(t){var e,i=[];if(t.length)for(e=0;e<t.length;e+=1)i.push(this.extract.linestring.apply(this,[t[e]]));else i.push(this.extract.point.apply(this,[t]));return i.join(",")},polygon:function(t){return this.extract.multilinestring.apply(this,[t])},multipolygon:function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push("("+this.extract.polygon.apply(this,[t[e]])+")");return i.join(",")},box:function(t){return this.extract.linestring.apply(this,[t])},geometrycollection:function(t){console.log("The geometrycollection WKT type is not yet supported.")}},i.Wkt.prototype.ingest={point:function(t){var e=i.trim(t).split(this.regExes.spaces);return[{x:parseFloat(this.regExes.numeric.exec(e[0])[0]),y:parseFloat(this.regExes.numeric.exec(e[1])[0])}]},multipoint:function(t){var e,s,n;for(s=[],n=i.trim(t).split(this.regExes.comma),e=0;e<n.length;e+=1)s.push(this.ingest.point.apply(this,[n[e]]));return s},linestring:function(t){var e,i,s;for(i=this.ingest.multipoint.apply(this,[t]),s=[],e=0;e<i.length;e+=1)s=s.concat(i[e]);return s},multilinestring:function(t){var e,s,n,r;for(s=[],r=i.trim(t).split(this.regExes.doubleParenComma),1===r.length&&(r=i.trim(t).split(this.regExes.parenComma)),e=0;e<r.length;e+=1)n=this._stripWhitespaceAndParens(r[e]),s.push(this.ingest.linestring.apply(this,[n]));return s},polygon:function(t){var e,s,n,r,o,a;for(a=i.trim(t).split(this.regExes.parenComma),n=[],e=0;e<a.length;e+=1){for(o=this._stripWhitespaceAndParens(a[e]).split(this.regExes.comma),r=[],s=0;s<o.length;s+=1){var c=o[s].split(this.regExes.spaces);if(c.length>2&&(c=c.filter((function(t){return""!=t}))),2===c.length){var p=c[0],h=c[1];r.push({x:parseFloat(p),y:parseFloat(h)})}}n.push(r)}return n},box:function(t){var e,i,s;for(i=this.ingest.multipoint.apply(this,[t]),s=[],e=0;e<i.length;e+=1)s=s.concat(i[e]);return s},multipolygon:function(t){var e,s,n,r;for(s=[],r=i.trim(t).split(this.regExes.doubleParenComma),e=0;e<r.length;e+=1)n=this._stripWhitespaceAndParens(r[e]),s.push(this.ingest.polygon.apply(this,[n]));return s},geometrycollection:function(t){console.log("The geometrycollection WKT type is not yet supported.")}},i}))},eb44:function(t,e,i){"use strict";i.r(e);var s=i("7a23"),n={class:"container-fluid px-0"},r={class:"row gx-0"},o={class:"d-md-block col-md-6 col-lg-4 bg-white",ref:"searchList"},a={class:"border-bottom p-1"},c=Object(s["j"])("尋找車道"),p={class:"scrollbar px-1 py-0.75"},h={key:1,class:"fs-5 text-center py-1 mb-0"},l=Object(s["h"])("i",{class:"material-icons-outlined fs-2 align-middle"},"search_off",-1),u=Object(s["j"])(" 目前查無資料 請重新搜尋 "),d=[l,u],y={class:"d-md-block col-md-6 col-lg-8",ref:"map"},m=Object(s["h"])("div",{id:"map"},null,-1),g=[m],f={class:"d-flex d-md-none justify-content-end px-1 py-0.5"};function b(t,e,i,l,u,m){var b=Object(s["C"])("Loading"),O=Object(s["C"])("SearchCard"),x=Object(s["C"])("RouteCard"),j=Object(s["C"])("Pagination");return Object(s["v"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(b,{active:u.isLoading,class:"z-index-500"},null,8,["active"]),Object(s["h"])("div",n,[Object(s["h"])("div",r,[Object(s["h"])("div",o,[Object(s["h"])("div",a,[Object(s["k"])(O,{onEmitSearch:m.searchRoute,city:t.$filters.allRouteCity},{default:Object(s["L"])((function(){return[c]})),_:1},8,["onEmitSearch","city"])]),Object(s["h"])("div",p,[t.pagination.current_page_data.length>0?(Object(s["v"])(!0),Object(s["g"])(s["a"],{key:0},Object(s["A"])(t.pagination.current_page_data,(function(t){return Object(s["v"])(),Object(s["e"])(x,{key:t.StationUID,cardData:t,onEmitSetroute:m.polyLine},null,8,["cardData","onEmitSetroute"])})),128)):(Object(s["v"])(),Object(s["g"])("p",h,d))]),Object(s["k"])(j,{pages:t.pagination,onEmitUpdate:t.updatePage},null,8,["pages","onEmitUpdate"])],512),Object(s["h"])("div",y,g,512)]),Object(s["h"])("div",f,[Object(s["h"])("button",{onClick:e[0]||(e[0]=function(){return m.toggleMapAndList&&m.toggleMapAndList.apply(m,arguments)}),class:"hvr_showMap btn btn-outline-primary bg-secondary px-0.5 py-0.25"},Object(s["F"])(u.showMap?"顯示地圖":"顯示列表"),1)])])],64)}i("99af"),i("d81d");var O=i("e11e"),x=i.n(O),j=i("1134"),v=i.n(j),w=i("d0f4"),k=i("b1cb"),L=i("1799"),C=i("6452"),S={class:"card-body bg-light px-1"},W={class:"h5 mb-0.75"},D={class:"d-flex align-items-center mb-0.75"},E=Object(s["h"])("i",{class:"bi bi-geo-alt-fill text-primary fs-4 me-0.5"},null,-1),P={class:"ms-0.5"},J={class:"d-flex alingn-items-center mb-0.75"},T={class:"me-3"},R=Object(s["h"])("i",{class:"material-icons-outlined text-primary fs-4 align-middle me-0.5"},"swap_vert",-1),A=Object(s["h"])("i",{class:"material-icons-outlined text-primary fs-4 align-middle me-0.5"},"route",-1),N={class:"d-flex align-items-center mb-0.75"},_=Object(s["h"])("span",{class:"text-primary fs-6 me-0.5"},"開始",-1),F={class:"d-flex align-items-center"},$=Object(s["h"])("span",{class:"text-primary fs-6 me-0.5"},"結束",-1);function M(t,e,i,n,r,o){return Object(s["v"])(),Object(s["g"])("a",{class:"card d-block fs-7 text-dark border-0 rounded-3 w-100 mb-1.5",href:"#",onClick:e[0]||(e[0]=Object(s["N"])((function(t){return o.setRoute(i.cardData.Geometry)}),["prevent"]))},[Object(s["h"])("div",S,[Object(s["h"])("h2",W,Object(s["F"])(i.cardData.RouteName),1),Object(s["h"])("p",D,[E,Object(s["h"])("span",null,Object(s["F"])(i.cardData.City?i.cardData.City:""),1),Object(s["h"])("span",P,Object(s["F"])(i.cardData.Town?i.cardData.Town:""),1)]),Object(s["h"])("div",J,[Object(s["h"])("p",T,[R,Object(s["h"])("span",null,Object(s["F"])(i.cardData.Direction?i.cardData.Direction:"單向"),1)]),Object(s["h"])("p",null,[A,Object(s["h"])("span",null,Object(s["F"])(i.cardData.CyclingLength)+"公尺 ",1)])]),Object(s["h"])("p",N,[_,Object(s["j"])(Object(s["F"])(i.cardData.RoadSectionStart),1)]),Object(s["h"])("p",F,[$,Object(s["j"])(Object(s["F"])(i.cardData.RoadSectionEnd),1)])])])}var G={props:{cardData:{type:Object}},emits:["emitSetroute"],data:function(){return{}},methods:{setRoute:function(t){this.$emit("emitSetroute",t)}}},K=i("6b0d"),U=i.n(K);const I=U()(G,[["render",M]]);var B=I,V={mixins:[k["a"]],components:{SearchCard:C["a"],RouteCard:B,Pagination:L["a"]},data:function(){return{map:"",markerLayer:"",geoLayer:"",apiData:[],isLoading:!1,showMap:!0}},methods:{getRouteData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Taipei",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.isLoading=!0;var s="".concat("https://ptx.transportdata.tw/MOTC/v2","/Cycling/Shape/City/").concat(e,"?%24filter=contains(RouteName%2C'").concat(i,"')&%24format=JSON");this.axios.get(s).then((function(e){t.apiData=e.data,t.renderRouteCard()})).catch((function(t){console.error(t)})).then((function(){t.isLoading=!1}))},renderRouteCard:function(){this.getPage(),this.polyLine(this.apiData[0].Geometry)},searchRoute:function(t){var e=t;e.city||(e.city="Taipei"),this.getRouteData(e.city,e.keyword)},polyLine:function(t){this.geoLayer&&this.geoLayer.clearLayers(),this.markerLayer&&this.markerLayer.clearLayers();var e=new v.a.Wkt,i=e.read(t).toJson(),s={color:"#C50047",weight:5,opacity:.65};this.geoLayer=x.a.geoJSON(i,{style:s}).addTo(this.map),this.geoLayer.addData(i),this.map.fitBounds(this.geoLayer.getBounds());var n=i.coordinates[0],r=n[0],o=n[n.length-1];x.a.marker([r[1],r[0]],{icon:w["d"]}).addTo(this.markerLayer),x.a.marker([o[1],o[0]],{icon:w["d"]}).addTo(this.markerLayer),window.screenWidth=document.body.clientWidth,window.screenWidth<768&&this.toggleMapAndList()},toggleMapAndList:function(){this.showMap?(this.$refs.searchList.classList.add("d-none"),this.$refs.map.classList.remove("d-none")):(this.$refs.map.classList.add("d-none"),this.$refs.searchList.classList.remove("d-none")),this.showMap=!this.showMap}},mounted:function(){var t=this;this.map=Object(w["b"])(),this.markerLayer=x.a.layerGroup().addTo(this.map),this.map.whenReady((function(){t.$refs.map.classList.add("d-none")})),this.getRouteData()}};const z=U()(V,[["render",b]]);e["default"]=z}}]);
//# sourceMappingURL=chunk-6d6174b6.f5afb19f.js.map