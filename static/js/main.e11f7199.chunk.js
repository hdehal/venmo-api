(this["webpackJsonpvenmo-api"]=this["webpackJsonpvenmo-api"]||[]).push([[0],{32:function(e,a,t){e.exports=t(50)},37:function(e,a,t){},38:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(24),c=t.n(i),s=(t(37),t(52)),l=t(21),o=t(6),u=t(31);l.a.use(o.e).use(u.a).init({resources:{en:{translations:{heading:"Latest Venmo Transactions",intro:"This simple React demo app uses Venmo API data as a test playground for currency conversion, internationalization (i18n), and accessibility (a11y).",paid:"paid"}},de:{translations:{heading:"Neueste Venmo Transaktionen",intro:"Diese einfache React-App verwendet Venmo-API-Daten als Testspielplatz f\xfcr W\xe4hrungsumrechnung, Internationalisierung (i18n) und Barrierefreiheit (a11y).",paid:"bezahlt"}},fr:{translations:{heading:"Derni\xe8res Transactions Venmo",intro:"Cette application React utilise les donn\xe9es de l'API Venmo comme terrain de jeu pour la conversion de devises, l'internationalisation (i18n) et l'accessibilit\xe9 (a11y).",paid:"pay\xe9"}},jp:{translations:{heading:"\u6700\u65b0\u306eVenmo\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3",intro:"\u3053\u306e\u30b7\u30f3\u30d7\u30eb\u306aReact\u30a2\u30d7\u30ea\u306f\u3001\u901a\u8ca8\u5909\u63db\u3001\u56fd\u969b\u5316\uff08i18n\uff09\u3001\u304a\u3088\u3073\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\uff08a11y\uff09\u306e\u30c6\u30b9\u30c8\u306e\u904a\u3073\u5834\u3068\u3057\u3066Venmo API\u30c7\u30fc\u30bf\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",paid:"\u652f\u6255\u3063\u305f"}}},fallbackLng:"en",load:"languageOnly",debug:!1,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});var m=l.a,p=t(12),d=t(13),h=t(16),f=t(17),v=(t(38),t(14)),g=t(18),E=t(9),y=t(5),b=t(53),j=[140,84.99,10,140,500,2400,16.76,34],N={USD:1,EUR:.87,JPY:106.98,GBP:.8},k={USD:"$",EUR:"\u20ac",JPY:"\xa5",GBP:"\xa3"},C=["\ud83d\udc8c","\ud83e\udd55","\u2615","\ud83d\udcb8","\ud83d\ude4f","\ud83c\udfe0","\ud83c\udf55","\ud83d\udc83"];function I(e){var a=document.getElementsByClassName("price");j.forEach((function(t,n){a[n].innerHTML=(t*e).toFixed(2)}))}function P(e){var a=document.getElementsByClassName("price");j.forEach((function(t,n){"\u20ac"!==e?a[n].insertAdjacentHTML("afterbegin",e):a[n].insertAdjacentHTML("beforeend",e)}))}var A=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).state={rates:"$"},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){I(N.USD),P(k.USD),/Android|webOS|Mac|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)&&function(e){var a=document.getElementsByClassName("message");C.forEach((function(e,t){a[t].insertAdjacentHTML("beforeend"," "+e)}))}()}},{key:"handleChange",value:function(e){I(N[e.target.value]),P(k[e.target.value]),this.setState({rates:k[e.target.value]})}},{key:"render",value:function(){var e=this.props.t;return r.a.createElement("div",{id:"receiptsContainer",className:"justify-content-center"},r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement(y.a,{horizontal:!0,id:"selector",onClick:this.handleChange},r.a.createElement(y.a.Item,{value:"USD",className:"$"===this.state.rates?"active":null,action:!0},"$"),r.a.createElement(y.a.Item,{value:"GBP",className:"\xa3"===this.state.rates?"active":null,action:!0},"\xa3"),r.a.createElement(y.a.Item,{value:"EUR",className:"\u20ac"===this.state.rates?"active":null,action:!0},"\u20ac"),r.a.createElement(y.a.Item,{value:"JPY",className:"\xa5"===this.state.rates?"active":null,action:!0},"\xa5"))),this.props.receipts.map((function(a,t){return r.a.createElement(g.a,{style:{"--animation-order":t},className:"toast",key:t},r.a.createElement(g.a.Subtitle,null,r.a.createElement("strong",null,a.actor.firstname)," ",e("paid"),r.a.createElement("strong",null," ",a.transactions[0].target.firstname," "),r.a.createElement("span",{className:"alert-success price"})),r.a.createElement(g.a.Body,{className:"message"},a.message))})))}}]),t}(n.Component),O=Object(b.a)()(A),S=(t(45),t(27)),D=t(28),T=t(30),V=t(51),B=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).state={receipts:[],loading:!0},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://hdehal-cors.herokuapp.com/https://venmo.com/api/v5/public").then((function(e){return e.json()})).then((function(a){e.setState({receipts:a.data.slice(0,8),loading:!1})})).catch((function(e){console.log("Fetch Error :-S",e)}))}},{key:"render",value:function(){var e=this.props.i18n,a=Array.isArray(e.languages)?e.languages[0]:e.languages,t=function(a){e.changeLanguage(a)};return r.a.createElement("div",{className:"App"},r.a.createElement(S.a,{fluid:!0},r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement(D.a,null,r.a.createElement("h5",null,r.a.createElement(V.a,{i18nKey:"heading"})),r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement("p",null,r.a.createElement(V.a,{i18nKey:"intro"},"This simple React app uses Venmo API data as a test playground for currency conversion, internationalization (i18n), and accessibility (a11y)."),r.a.createElement("br",null),r.a.createElement("a",{href:"https://venmo.com/api/v5/public",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"https://venmo.com/api/v5/public")))),r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement(y.a,{horizontal:!0},r.a.createElement(y.a.Item,{onClick:function(){return t("en")},action:!0,className:"en"===a?"active":null},"EN"),r.a.createElement(y.a.Item,{onClick:function(){return t("de")},action:!0,className:"de"===a?"active":null},"DE"),r.a.createElement(y.a.Item,{onClick:function(){return t("fr")},action:!0,className:"fr"===a?"active":null},"FR"),r.a.createElement(y.a.Item,{onClick:function(){return t("jp")},action:!0,className:"jp"===a?"active":null},"JP"))),this.state.loading?r.a.createElement(T.a,{animation:"border",role:"status",variant:"primary"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(O,{receipts:this.state.receipts,i18n:e})))))}}]),t}(r.a.Component),R=Object(b.a)()(B);c.a.render(r.a.createElement(s.a,{i18n:m},r.a.createElement(R,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e11f7199.chunk.js.map