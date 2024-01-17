(this["webpackJsonpgeolonia-pwa"]=this["webpackJsonpgeolonia-pwa"]||[]).push([[0],{108:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},135:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(31),r=c.n(s),i=c(11),l=c(29),o=c(7),j=c(38),d=c(30),b=c.n(d),h=c(6),u=(c(78),c(61)),p=c.n(u),x=function(e){var t={type:"FeatureCollection",features:[]};for(var c in e){var n=e[c];if(!n["\u7d4c\u5ea6"]||!n["\u7def\u5ea6"]||!n["\u30b9\u30dd\u30c3\u30c8\u540d"])return;for(var a={type:"Feature",geometry:{type:"Point",coordinates:[Number(n["\u7d4c\u5ea6"]),Number(n["\u7def\u5ea6"])]},properties:{_id:c}},s=0;s<Object.keys(n).length;s++){var r=Object.keys(n)[s];a.properties[r]=n[r]}t.features.push(a)}return t},O=function(e){e.addLayer({id:"clusters",type:"circle",source:"shops",filter:["has","point_count"],paint:{"circle-radius":20,"circle-color":"#FF0000","circle-opacity":1}}),e.addLayer({id:"cluster-count",type:"symbol",source:"shops",filter:["has","point_count"],paint:{"text-color":"#FFFFFF"},layout:{"text-field":"{point_count_abbreviated} \u4ef6","text-size":12,"text-font":["Noto Sans Regular"]}}),e.on("click","clusters",(function(t){var c=e.queryRenderedFeatures(t.point,{layers:["clusters"]}),n=c[0].properties.cluster_id;e.getSource("shops").getClusterExpansionZoom(n,(function(t,n){t||e.easeTo({center:c[0].geometry.coordinates,zoom:n})}))})),e.on("mouseenter","clusters",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","clusters",(function(){e.getCanvas().style.cursor=""}))},m=c(18),f=(c(85),c(1)),g=function(e){e.stopPropagation()},v=function(e){return Object(f.jsxs)("div",{className:"links",children:[e.data.Instagram?Object(f.jsx)("div",{className:"link",children:Object(f.jsx)("a",{href:"https://instagram.com/".concat(e.data.Instagram),children:Object(f.jsx)(m.d,{onClick:g,size:"20px"})})}):"",e.data.Twitter?Object(f.jsx)("div",{className:"link",children:Object(f.jsx)("a",{href:"https://twitter.com/".concat(e.data.Twitter),children:Object(f.jsx)(m.h,{onClick:g,size:"20px"})})}):"",e.data.Facebook?Object(f.jsx)("div",{className:"link",children:Object(f.jsx)("a",{href:"https://www.facebook.com/".concat(e.data.Facebook),children:Object(f.jsx)(m.b,{onClick:g,size:"20px"})})}):"",e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"]?Object(f.jsx)("div",{className:"link",children:Object(f.jsx)("a",{href:e.data["\u516c\u5f0f\u30b5\u30a4\u30c8"],children:Object(f.jsx)(m.c,{onClick:g,size:"20px"})})}):""]})},N=(c(87),c(39)),k=function(e){var t="";return"number"!==typeof e||Number.isNaN(e)||(t=e>1e3?Math.round(e/1e3)+" km":Math.round(e)+" m"),t},w=function(e){var t=a.a.useRef(null),c=a.a.useState(null),n=Object(o.a)(c,2),s=n[0],r=n[1],l=e.shop,j=function(){e.close(),t.current&&(t.current.remove(),s.remove())};a.a.useEffect((function(){if(t.current){var e=new window.geolonia.Map({container:t.current,interactive:!1,zoom:14,style:"geolonia/gsi"});r(e)}}),[l,t]);var d,b=k(l.distance),h=l["\u30ab\u30c6\u30b4\u30ea"],u=l["\u7d39\u4ecb\u6587"];return Object(f.jsxs)("div",{className:"shop-single",children:[Object(f.jsx)("div",{className:"head",children:Object(f.jsxs)("button",{onClick:j,children:[Object(f.jsx)(N.b,{size:"16px",color:"#FFFFFF"})," \u9589\u3058\u308b"]})}),Object(f.jsx)("div",{className:"container",children:l?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:l["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"nowrap",children:Object(f.jsx)(i.b,{to:"/list?category=".concat(h),children:Object(f.jsx)("span",{onClick:j,className:"category",children:h})})}),Object(f.jsx)("span",{className:"nowrap",children:b&&Object(f.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",b]})})]}),Object(f.jsx)("div",{style:{margin:"24px 0"},children:Object(f.jsx)(v,{data:l})}),l["\u753b\u50cf"]&&Object(f.jsx)("img",{src:l["\u753b\u50cf"],alt:l["\u30b9\u30dd\u30c3\u30c8\u540d"],style:{width:"100%"}}),Object(f.jsx)("p",{style:{margin:"24px 0",wordBreak:"break-all"},children:(d=u,d.split(/(\r\n)|(\n)|(\r)/g).map((function(e,t){var c="";return"\r\n"===e||"\n"===e||"\r"===e?c=Object(f.jsx)("br",{},t):void 0!==e&&(c=e),c})))}),Object(f.jsx)("div",{ref:t,style:{width:"100%",height:"200px",marginTop:"24px"},"data-lat":l["\u7def\u5ea6"],"data-lng":l["\u7d4c\u5ea6"],"data-navigation-control":"off"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"small",href:"http://maps.apple.com/?q=".concat(l["\u7def\u5ea6"],",").concat(l["\u7d4c\u5ea6"]),children:"\u30b9\u30dd\u30c3\u30c8\u307e\u3067\u306e\u9053\u9806"})})]}):Object(f.jsx)(f.Fragment,{})})]})},y={width:"100%",height:"100%",position:"relative"},F=function(e){for(var t=["poi","poi-primary","poi-r0-r9","poi-r10-r24","poi-r25","poi-bus","poi-entrance"],c=0;c<t.length;c++){var n=t[c];e.setLayoutProperty(n,"visibility","none")}},C=function(e){var t=(e||window.location).hash.substring(2);return new URLSearchParams(t)},S=function(e){var t=a.a.useRef(null),c=a.a.useState(),n=Object(o.a)(c,2),s=n[0],r=n[1],i=a.a.useState(void 0),l=Object(o.a)(i,2),j=l[0],d=l[1],b=a.a.useState(""),h=Object(o.a)(b,2),u=h[0],m=h[1];a.a.useEffect((function(){!function(e,t){e&&t&&e.on("render",(function(){if(!e.getSource("shops")){F(e);var c=x(t);e.addSource("shops",{type:"geojson",data:c,cluster:!0,clusterMaxZoom:14,clusterRadius:25}),e.addLayer({id:"shop-points",type:"circle",source:"shops",filter:["all",["==","$type","Point"]],paint:{"circle-radius":13,"circle-color":"#FF0000","circle-opacity":.4,"circle-stroke-width":2,"circle-stroke-color":"#FFFFFF","circle-stroke-opacity":1}}),e.addLayer({id:"shop-symbol",type:"symbol",source:"shops",filter:["all",["==","$type","Point"]],paint:{"text-color":"#000000","text-halo-color":"#FFFFFF","text-halo-width":2},layout:{"text-field":"{\u30b9\u30dd\u30c3\u30c8\u540d}","text-font":["Noto Sans Regular"],"text-variable-anchor":["top","bottom","left","right"],"text-radial-offset":.5,"text-justify":"auto","text-size":12,"text-anchor":"top","text-max-width":12,"text-allow-overlap":!1}}),e.on("mouseenter","shop-points",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-points",(function(){e.getCanvas().style.cursor=""})),e.on("mouseenter","shop-symbol",(function(){e.getCanvas().style.cursor="pointer"})),e.on("mouseleave","shop-symbol",(function(){e.getCanvas().style.cursor=""})),e.on("click","shop-points",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),e.on("click","shop-symbol",(function(e){e.features[0].properties.cluster||d(e.features[0].properties)})),O(e)}}))}(s,e.data)}),[s,e.data]),a.a.useEffect((function(){var e,t=C();u&&t.set("map",u),(e=t).toString()&&(window.location.hash="#/?".concat(e.toString().replace(/%2F/g,"/")))}),[u]),a.a.useEffect((function(){if(t.current&&!s){var c=window.geolonia,n=x(e.data),a=p()(n),i=new c.Map({container:t.current,style:"geolonia/gsi",bounds:a,fitBoundsOptions:{padding:50}}),l=C();if(l&&l.get("map")){var o=(l.get("map")||"").split("/"),j=o[0],d=o[1],b=o[2];i.flyTo({center:[b,d],zoom:j})}else a&&i.fitBounds(a,{padding:50});var h=function(){F(i),r(i),i.on("moveend",(function(){var e=i.getCenter(),t=i.getZoom(),c=Math.round(100*t)/100,n=Math.ceil((c*Math.LN2+Math.log(512/360/.5))/Math.LN10),a=Math.pow(10,n),s=Math.round(e.lng*a)/a,r=Math.round(e.lat*a)/a,l=Math.ceil(c);m("".concat(l,"/").concat(r,"/").concat(s))}))},u=function(){i.resize()};return i.on("load",h),window.addEventListener("orientationchange",u),function(){window.removeEventListener("orientationchange",u),i.off("load",h)}}}),[t,s,e.data]);return Object(f.jsxs)("div",{style:y,children:[Object(f.jsx)("div",{ref:t,style:y,"data-geolocate-control":"on","data-marker":"off","data-gesture-handling":"off"}),j?Object(f.jsx)(w,{shop:j,close:function(){d(void 0)}}):Object(f.jsx)(f.Fragment,{})]})},M=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(S,{data:e.data})})},P=c(16),_=c(63),A=(c(88),function(e){var t=function(){e.popupHandler(e.data)},c=k(e.data.distance),n=e.data["\u30ab\u30c6\u30b4\u30ea"],a=e.data["\u753b\u50cf"],s=!!e.queryCategory;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"shop-link",children:[Object(f.jsx)("h2",{className:"shop-title",style:{wordBreak:"break-all"},onClick:t,children:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"]}),Object(f.jsxs)("div",{className:"tag-box",children:[!s&&Object(f.jsx)("span",{className:"nowrap",children:Object(f.jsx)(i.b,{to:"/list?category=".concat(n),children:Object(f.jsx)("span",{className:"category",children:n})})}),Object(f.jsx)("span",{className:"nowrap",children:c&&Object(f.jsxs)("span",{className:"distance",children:["\u73fe\u5728\u4f4d\u7f6e\u304b\u3089 ",c]})})]}),Object(f.jsx)("div",{style:{margin:"10px 10px 10px 0"},children:a&&Object(f.jsx)("img",{src:a,alt:e.data["\u30b9\u30dd\u30c3\u30c8\u540d"],onClick:t})}),Object(f.jsx)("div",{className:"right",onClick:t,children:Object(f.jsx)(_.a,{size:"40px",color:"#CCCCCC"})})]})})}),z=(c(89),c(64)),E=c(44),L=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition||e(null),window.navigator.geolocation.getCurrentPosition((function(t){var c=t.coords.latitude,n=t.coords.longitude;e([n,c])}),(function(t){e(null)}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}));case 2:if(!(c=e.sent)){e.next=10;break}return n=E.point(c),(a=t.map((function(e){var t=parseFloat(e["\u7d4c\u5ea6"]),c=parseFloat(e["\u7def\u5ea6"]);if(Number.isNaN(t)||Number.isNaN(c))return e;var a=E.point([t,c]),s=E.distance(n,a,{units:"meters"});return Object(l.a)(Object(l.a)({},e),{},{distance:s})}))).sort((function(e,t){return"number"!==typeof e.distance||Number.isNaN(e.distance)?1:"number"!==typeof t.distance||Number.isNaN(t.distance)?-1:e.distance-t.distance})),e.abrupt("return",a);case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){var t=a.a.useState(),c=Object(o.a)(t,2),n=c[0],s=c[1],r=a.a.useState(e.data),l=Object(o.a)(r,2),j=l[0],d=l[1],b=a.a.useState([]),h=Object(o.a)(b,2),u=h[0],p=h[1],x=a.a.useState(10),O=Object(o.a)(x,2),m=O[0],g=O[1],v=a.a.useState(!0),N=Object(o.a)(v,2),k=N[0],y=N[1],F=Object(i.c)(),C=Object(o.a)(F,1)[0].get("category");a.a.useEffect((function(){var t=e.data;C&&(t=e.data.filter((function(e){return e["\u30ab\u30c6\u30b4\u30ea"]===C})));var c=!0;if(c){L(t).then((function(e){c&&(p(e.slice(0,m)),d(e))}))}return function(){c=!1}}),[e.data,C,m]);var S=function(e){e&&s(e)},M=Object(f.jsx)("div",{className:"loader",style:{width:"100%",height:"200px",textAlign:"center",position:"relative",top:"100px"},children:"\u5834\u6240\u4e00\u89a7\u3092\u8aad\u307f\u8fbc\u307f\u4e2d\u3067\u3059..."},0);return Object(f.jsxs)("div",{id:"shop-list",className:"shop-list",children:[C&&Object(f.jsx)("div",{className:"shop-list-category",children:"\u30ab\u30c6\u30b4\u30ea\uff1a\u300c".concat(C,"\u300d")}),Object(f.jsx)(z.a,{dataLength:u.length,next:function(){u.length>=j.length?y(!1):(p([].concat(Object(P.a)(u),Object(P.a)(j.slice(m,m+10)))),g(m+10))},hasMore:k,loader:M,scrollableTarget:"shop-list",children:u.map((function(e,t){return Object(f.jsx)("div",{className:"shop",children:Object(f.jsx)(A,{data:e,popupHandler:S,queryCategory:C})},t)}))}),n?Object(f.jsx)(w,{shop:n,close:function(){s(void 0)}}):Object(f.jsx)(f.Fragment,{})]})},T=(c(91),c(19)),R=function(){return Object(f.jsx)("div",{className:"about-us",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"branding",children:[Object(f.jsx)("div",{className:"image",children:Object(f.jsx)("img",{src:"".concat(".","/icon-pwamap.svg"),alt:""})}),Object(f.jsx)("div",{className:"logo",children:"\u4f50\u548c\u7530\u6599\u98f2\u5e97\u7d44\u5408MAP2024"})]}),Object(f.jsx)("div",{className:"map2024",children:"\u4f50\u548c\u7530\u6599\u98f2\u5e97\u7d44\u5408MAP2024"}),Object(f.jsxs)("div",{className:"map-container",children:[Object(f.jsx)("p",{className:"map",children:Object(f.jsx)("b",{children:"\u304a\u3067\u308f\u3093MAP\u3068\u306f"})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("b",{children:"\xa0"})}),Object(f.jsx)("p",{className:"blank-line",children:"\ud83d\udc3e \u611b\u72ac\u3068\u4e00\u7dd2\u306b\u5165\u308c\u308b\u98f2\u98df\u5e97"}),Object(f.jsx)("p",{className:"blank-line",children:"\ud83d\udc3e \u611b\u72ac\u3068\u6cca\u307e\u308c\u308b\u30db\u30c6\u30eb\u30fb\u5bbf"}),Object(f.jsx)("p",{className:"blank-line",children:"\ud83d\udc3e \u30c9\u30c3\u30b0\u30e9\u30f3"}),Object(f.jsx)("p",{className:"blank-line",children:"\u30ab\u30c6\u30b4\u30ea\u306e\u65bd\u8a2d\u60c5\u5831\u3092\u5730\u56f3\u4e0a\u306b\u8868\u793a\u3057\u3066\u3044\u307e\u3059\uff08\u5168\u56fd\u7248\uff09"}),Object(f.jsx)("p",{className:"blank-line",children:"\xa0"}),Object(f.jsx)("p",{className:"blank-line",children:"\u6700\u5927\u306e\u7279\u5fb4\u306f\u5b9f\u969b\u306b\u304a\u3067\u304b\u3051\u3057\u3066\u304d\u305f\u98fc\u3044\u4e3b\u69d8\u304b\u3089\u306e\u611f\u60f3\u3084\u5199\u771f\u3067\u69cb\u6210\u3057\u3066\u3044\u308b\u3068\u3053\u308d\uff01"}),Object(f.jsx)("p",{className:"blank-line",children:"\xa0"}),Object(f.jsx)("p",{className:"blank-line",children:"\u63b2\u8f09\u3057\u3066\u3044\u308b\u65bd\u8a2d\u6570\u306f1400\u4ef6\u8d85\uff01"}),Object(f.jsx)("p",{className:"blank-line",children:"\uff082023\u5e741\u6708\u73fe\u5728\uff09"}),Object(f.jsx)("p",{className:"blank-line",children:"2019\u5e74\u306e\u304a\u3067\u304b\u3051\u308f\u3093\u3053\u90e8\u904b\u55b6\u958b\u59cb\u304b\u3089\u6bce\u65e5\u305f\u304f\u3055\u3093\u306e\u304a\u3067\u304b\u3051\u60c5\u5831\u3084\u5199\u771f\u3092\u63d0\u4f9b\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u3002"}),Object(f.jsx)("p",{className:"blank-line",children:"\xa0"}),Object(f.jsx)("p",{className:"blank-line",children:"\u304a\u3067\u308f\u3093MAP\u306f\u5168\u56fd\u306e\u308f\u3093\u3061\u3083\u3093\u306e\u304a\u3067\u304b\u3051\u306e\u601d\u3044\u51fa\u304c\u305f\u3063\u3077\u308a\u8a70\u307e\u3063\u305f\u611b\u60c5\u305f\u3063\u3077\u308a\u306eMAP\u3067\u3059\u3002"}),Object(f.jsx)("p",{className:"blank-line",children:"\xa0"}),Object(f.jsx)("p",{className:"map",children:Object(f.jsx)("b",{children:"\u304a\u3067\u308f\u3093MAP\u3067\u3067\u304d\u308b\u3053\u3068"})})]}),Object(f.jsxs)("div",{className:"div",children:[Object(f.jsx)("p",{className:"blank-line",children:"01. \u5168\u56fd\u306e\u611b\u72ac\u3068\u4e00\u7dd2\u306b\u884c\u3051\u308b\u30b9\u30dd\u30c3\u30c8\u3092\u5730\u56f3\u3067\u63a2\u305b\u308b"}),Object(f.jsx)("p",{className:"blank-line",children:"02. \u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3059\u308b\u3068\u3055\u3089\u306b\u8a73\u7d30\u30da\u30fc\u30b8\u3078"}),Object(f.jsx)("p",{className:"blank-line",children:"03. \u63a2\u3057\u65b9\u8272\u3005\uff01\u30ab\u30c6\u30b4\u30ea\u3067\u7d5e\u308a\u8fbc\u307f\u691c\u7d22\u3084\u73fe\u5728\u4f4d\u7f6e\u304b\u3089\u8fd1\u3044\u9806\u3067\u63a2\u305b\u308b"})]}),Object(f.jsxs)("div",{className:"map-map",children:[Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("b",{className:"map4",children:"\u304a\u3067\u308f\u3093MAP\u3092\u4f7f\u3046\u65b9\u6cd5\u306f\uff1f"})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("b",{className:"map4",children:"\xa0"})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u300c\u304a\u3067\u308f\u3093MAP\u300d\u306f\u304a\u3067\u304b\u3051\u308f\u3093\u3053\u90e8\u30e1\u30fc\u30eb\u30de\u30ac\u30b8\u30f3\uff08\u7121\u6599\u90e8\u54e1\uff09\u3078\u306e\u767b\u9332\u3067\u7121\u6599\u3067\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002"})}),Object(f.jsxs)("p",{className:"blank-line",children:[Object(f.jsx)("span",{children:"\u30e1\u30fc\u30eb\u30de\u30ac\u30b8\u30f3\u767b\u9332\u30d5\u30a9\u30fc\u30e0\u306f "}),Object(f.jsx)("a",{className:"a",href:"https://form.run/@odewan-member",target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("span",{children:Object(f.jsx)("span",{className:"span",children:"\u3053\u3061\u3089"})})}),Object(f.jsx)("span",{children:"\xa0 "})]}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u304a\u3067\u304b\u3051\u308f\u3093\u3053\u90e8\u3068\u306f "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u611b\u72ac\u3068\u306e\u304a\u3067\u304b\u3051\u60c5\u5831\u3092\u767a\u4fe1\u3057\u3066\u3044\u308b\u30e1\u30c7\u30a3\u30a2\u3067\u3059\u3002 "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\xa0 "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u300c\u9031\u672b\u3053\u306e\u30ab\u30d5\u30a7\u306b\u884c\u3063\u3066\u307f\u3088\u3046\u304b?\u300d "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u300c\u3053\u306e\u666f\u8272\u3092\u4e00\u7dd2\u306b\u898b\u306b\u3044\u3053\u3046!!\u300d "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\xa0 "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u611b\u72ac\u3068\u306e\u697d\u3057\u3044\u304a\u3067\u304b\u3051\u306e\u304d\u3063\u304b\u3051\u4f5c\u308a\u30b5\u30dd\u30fc\u30c8\u3057\u300c\u98fc\u3044\u4e3b\u3055\u3093\u3068\u308f\u3093\u3053\u3092HAPPY\u306b\u3059\u308b\u300d\u3053\u3068\u304c\u76ee\u7684\u3067\u3059\u3002"})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\xa0 "})}),Object(f.jsxs)("p",{className:"blank-line",children:[Object(f.jsx)("span",{children:"web\u30b5\u30a4\u30c8: "}),Object(f.jsx)("a",{className:"a",href:"https://odekake-wanko-bu.com/",target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("span",{children:Object(f.jsx)("span",{className:"span",children:"https://odekake-wanko-bu.com"})})})]}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("a",{className:"a",href:"https://odekake-wanko-bu.com/",target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("span",{children:Object(f.jsx)("span",{className:"span",children:"\xa0"})})})}),Object(f.jsxs)("p",{className:"blank-line",children:[Object(f.jsx)("span",{children:"Instagram: "}),Object(f.jsx)("a",{className:"a",href:"https://www.instagram.com/odewanbu/",target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("span",{children:Object(f.jsx)("span",{className:"span",children:"@odewanbu"})})})]}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\xa0 "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u304a\u3067\u304b\u3051\u30ec\u30dd\u30fc\u30c8\u52df\u96c6\u4e2d "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\xa0 "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\u3042\u306a\u305f\u306e\u5927\u5207\u306a\u611b\u72ac\u3068\u306e\u304a\u3067\u304b\u3051\u306e\u601d\u3044\u51fa\u3092\u5168\u56fd\u306e\u98fc\u3044\u4e3b\u3055\u307e\u306b\u3082\u30b7\u30a7\u30a2\u3057\u307e\u305b\u3093\u304b\uff1f"})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\xa0 "})}),Object(f.jsx)("p",{className:"blank-line",children:Object(f.jsx)("span",{children:"\uff3c\u3053\u3093\u306a\u60c5\u5831\u3092\u52df\u96c6\u3057\u3066\u304a\u308a\u307e\u3059\uff0f\u300c\u611b\u72ac\u3068\u5165\u308c\u308b\u30ab\u30d5\u30a7\u300d\u300c\u611b\u72ac\u3068\u6cca\u307e\u308c\u308b\u5bbf\u300d\u300c\u30c9\u30c3\u30b0\u30e9\u30f3\u300d"})})]}),Object(f.jsxs)("div",{className:"parent",children:[Object(f.jsx)("img",{className:"icon",alt:"",src:"./public/@2x.png"}),Object(f.jsx)("img",{className:"icon1",alt:"",src:"./public/1@2x.png"}),Object(f.jsx)("img",{className:"icon2",alt:"",src:"./public/2@2x.png"}),Object(f.jsx)("img",{className:"icon3",alt:"",src:"./public/3@2x.png"}),Object(f.jsx)("img",{className:"icon4",alt:"",src:"./public/4@2x.png"}),Object(f.jsx)("img",{className:"icon5",alt:"",src:"./public/5@2x.png"})]}),Object(f.jsx)("p",{children:"\u3053\u308c\u306f\u4f50\u548c\u7530\u98f2\u98df\u5e97\u30de\u30c3\u30d7\u3067\u3059\u3002\u305f\u3060\u3044\u307e\u958b\u767a\u4e2d\u3067\u3059\u3002\u4e88\u3081\u3054\u4e86\u627f\u4e0b\u3055\u3044\u3002"}),Object(f.jsx)("p",{children:"\u30d7\u30ed\u30b0\u30e9\u30e0\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3067\u516c\u958b\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u81ea\u7531\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u3066\u3054\u5229\u7528\u3044\u305f\u3060\u3051\u307e\u3059\u3002"}),Object(f.jsx)("h2",{children:" Geolonia PWA\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://blog.geolonia.com/2022/05/17/pwamap-beta.html",target:"_blank",rel:"noreferrer",children:"https://blog.geolonia.com/2022/05/17/pwamap-beta.html"})}),Object(f.jsx)("p",{children:"\u307e\u305f\u3001\u72ec\u81ea\u30c9\u30e1\u30a4\u30f3\u3067\u306e\u5229\u7528\u3084\u30c7\u30b6\u30a4\u30f3\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3084\u5229\u7528\u306b\u5fc5\u8981\u306a\u7def\u5ea6\u30fb\u7d4c\u5ea6\u60c5\u5831\u306e\u63d0\u4f9b\u3082\u6709\u511f\u3067\u5225\u9014\u627f\u308a\u307e\u3059\u3002\u3054\u5e0c\u671b\u306e\u65b9\u306f\u4e0b\u8a18\u307e\u3067\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002"}),Object(f.jsx)("h2",{children:"\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0"}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{href:"https://geolonia.com/contact/",target:"_blank",rel:"noreferrer",children:"https://geolonia.com/contact/"})}),Object(f.jsx)("p",{children:"\u203b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u304a\u3088\u3073\u30a2\u30d7\u30ea\u306e\u4f5c\u6210\u30fb\u5229\u7528\u306b\u3064\u3044\u3066\u306f\u30b5\u30dd\u30fc\u30c8\u5bfe\u8c61\u5916\u3068\u306a\u308a\u307e\u3059\u3002\u3042\u3089\u304b\u3058\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002"}),T.form_url?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"\u30c7\u30fc\u30bf\u306e\u66f4\u65b0\u306b\u3064\u3044\u3066"}),Object(f.jsx)("p",{children:"\u3053\u306e\u30a2\u30d7\u30ea\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u4e0b\u306e\u300c + \u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u60c5\u5831\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(f.jsx)("div",{className:"goto-form",children:Object(f.jsx)("button",{children:Object(f.jsx)(m.f,{color:"#FFFFFF",onClick:function(){T.form_url&&(window.location.href=T.form_url)}})})})]}):Object(f.jsx)(f.Fragment,{})]})})},$=c(69),B=(c(92),function(e){var t=Object(h.f)(),c=a.a.useState([]),n=Object(o.a)(c,2),s=n[0],r=n[1];return a.a.useEffect((function(){for(var t=[],c=0;c<e.data.length;c++){var n=e.data[c];-1===t.indexOf(n["\u30ab\u30c6\u30b4\u30ea"])&&t.push(n["\u30ab\u30c6\u30b4\u30ea"])}r(t)}),[e.data]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"head"}),Object(f.jsx)("div",{className:"category",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"category-item",children:[Object(f.jsx)("label",{htmlFor:"category-select",children:"\u30ab\u30c6\u30b4\u30ea\u304b\u3089\u9078\u3076"}),Object(f.jsx)($.a,{onChange:function(e){e&&t("/list?category=".concat(e.value))},options:s.map((function(e){return{value:e,label:e}}))})]})})})]})}),q=c(155),H=c(157),D=(c(108),function(e){var t=e.data,c=Object(n.useState)([]),a=Object(o.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(),l=Object(o.a)(i,2),j=l[0],d=l[1];return Object(n.useEffect)((function(){for(var e=[],c=function(c){var n=t[c];n["\u753b\u50cf"]&&e.push(Object(f.jsx)(q.a,{className:"mui-image-list-item",children:Object(f.jsx)("img",{src:n["\u753b\u50cf"],alt:n["\u30b9\u30dd\u30c3\u30c8\u540d"],loading:"lazy",onClick:function(){return function(e){e&&d(e)}(n)},onError:function(e){e.target.parentNode.remove()}})},c))},n=0;n<t.length;n++)c(n);r(e)}),[t]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"head"}),Object(f.jsx)("div",{className:"images",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(H.a,{id:"mui-image-list",sx:{width:"100%",height:"100%"},cols:2,rowHeight:164,children:s}),j?Object(f.jsx)(w,{shop:j,close:function(){d(void 0)}}):Object(f.jsx)(f.Fragment,{})]})})]})}),I=(c(111),function(){return Object(f.jsx)("div",{className:"tabbar",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)(m.c,{})}),Object(f.jsx)("div",{className:"text",children:"\u30db\u30fc\u30e0"})]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/list",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)(m.e,{})}),Object(f.jsx)("div",{className:"text",children:"\u4e00\u89a7"})]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/category",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)(m.g,{})}),Object(f.jsx)("div",{className:"text",children:"\u30ab\u30c6\u30b4\u30ea"})]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/images",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)(m.a,{})}),Object(f.jsx)("div",{className:"text",children:"\u5199\u771f\u304b\u3089\u63a2\u3059"})]})}),Object(f.jsx)("li",{children:Object(f.jsxs)(i.b,{to:"/about",children:[Object(f.jsx)("div",{className:"icon",children:Object(f.jsx)(N.a,{})}),Object(f.jsx)("div",{className:"text",children:"\u30de\u30c3\u30d7\u306b\u3064\u3044\u3066"})]})})]})})}),J=function(e){return e.replace(/[\uff01-\uff5e]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)-65248)})).replace(/\u3000/g," ")},U=function(e){var t=e[0];return e.slice(1).map((function(e){return t.reduce((function(c,n){var a=e[t.indexOf(n)];return c[n]=J(a||""),c}),{})}))},Z=function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.sort((function(e,t){return Date.parse(t["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])-Date.parse(e["\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7"])})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return a.a.useEffect((function(){fetch("".concat(".","/data.json?timestamp=").concat((new Date).getTime())).then((function(e){return e.ok?e.text():Promise.reject(e.status)})).then((function(e){var t=JSON.parse(e);if("values"in t===!1)return console.log("No Data Found at Spreadsheet"),void n([]);for(var c=U(t.values),a=[],s=0;s<c.length;s++){var r=c[s];if(r["\u7def\u5ea6"]&&r["\u7d4c\u5ea6"]&&r["\u30b9\u30dd\u30c3\u30c8\u540d"]&&(r["\u7def\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/)&&r["\u7d4c\u5ea6"].match(/^-?[0-9]+(\.[0-9]+)?$/))){var i=Object(l.a)(Object(l.a)({},r),{},{index:s});a.push(i)}}Z(a).then((function(e){n(e)}))}))}),[]),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("div",{className:"app-body",children:Object(f.jsxs)(h.c,{children:[Object(f.jsx)(h.a,{path:"/",element:Object(f.jsx)(M,{data:c})}),Object(f.jsx)(h.a,{path:"/list",element:Object(f.jsx)(W,{data:c})}),Object(f.jsx)(h.a,{path:"/category",element:Object(f.jsx)(B,{data:c})}),Object(f.jsx)(h.a,{path:"/images",element:Object(f.jsx)(D,{data:c})}),Object(f.jsx)(h.a,{path:"/about",element:Object(f.jsx)(R,{})})]})}),Object(f.jsx)("div",{className:"app-footer",children:Object(f.jsx)(I,{})})]})},Y=(c(112),c(67));var K=function(e){var t=e.url,c=Object(Y.a)().Canvas;return Object(f.jsx)(c,{text:t,options:{type:"image/png",margin:0,width:128}})},Q=c(149),V=c(151),X=c(153),ee=c(150),te=c(152),ce=c(154),ne=(c(135),function(){var e=window.location.href.replace(/\?.+$/,"").replace(/#.+$/,"");return Object(f.jsx)("div",{className:"share",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)(Q.a,{url:e,hashtags:["".concat(T.title)],title:"".concat(T.title),children:Object(f.jsx)(ee.a,{size:32,round:!0})})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)(V.a,{url:e,hashtag:"#".concat(T.title),children:Object(f.jsx)(te.a,{size:32,round:!0})})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)(X.a,{url:e,title:"".concat(T.title),children:Object(f.jsx)(ce.a,{size:32,round:!0})})})})]})})}),ae=function(){var e=T.logo_image_url||"".concat(".","/logo.svg");return Object(f.jsxs)("div",{className:"about",children:[Object(f.jsx)("div",{className:"branding",children:Object(f.jsx)("img",{className:"image",src:e,alt:""})}),Object(f.jsx)("div",{className:"description",children:T.description}),Object(f.jsx)("div",{className:"qrcode",children:Object(f.jsx)(K,{url:window.location.href})}),Object(f.jsx)(ne,{})]})};c(136);var se=function(){return Object(f.jsx)("div",{className:"outer-container",children:Object(f.jsxs)("div",{className:"inner-container",children:[Object(f.jsx)(ae,{}),Object(f.jsx)(G,{})]})})},re=(c(137),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ie(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(se,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ie(t,e)}))}}()},19:function(e){e.exports=JSON.parse('{"title":"\u4f50\u548c\u7530\u6599\u98f2\u5e97\u7d44\u5408\u30de\u30c3\u30d7","description":"\u4f50\u548c\u7530\u6599\u98f2\u5e97\u7d44\u5408MAP2024 \\n\u300cGeolonia PWA\u30de\u30c3\u30d7\u300d","form_url":"","logo_image_url":"https://chorisonobeer.github.io/sawadastoremap/sawada.png","background_image_url":"https://chorisonobeer.github.io/sawadastoremap/ameyasambashi.webp","primary_color":"#d2691e","orderby":"distance"}')},78:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){}},[[138,1,2]]]);
//# sourceMappingURL=main.005a4ca6.chunk.js.map