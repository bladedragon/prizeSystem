(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Undo:function(e,n,t){"use strict";var a=t("pVnL"),o=t.n(a),r=t("lwsE"),l=t.n(r),c=t("W8MJ"),i=t.n(c),s=t("a1gu"),u=t.n(s),m=t("Nsbk"),d=t.n(m),f=t("PJYZ"),p=t.n(f),h=t("7W2i"),v=t.n(h),g=t("lSNA"),w=t.n(g),E=t("q1tI"),b=t.n(E),k=t("wOnQ"),y=t.n(k),N=function(e){function n(){var e,t;l()(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return t=u()(this,(e=d()(n)).call.apply(e,[this].concat(o))),w()(p()(t),"state",{generating:!1}),t}return v()(n,e),i()(n,[{key:"downloadImage",value:function(e,n){var t=e.getAttribute("filename"),a={logging:!1,width:e.offsetWidth,height:e.offsetHeight,dpi:window.devicePixelRatio};y()(e,a).then(function(e){var a=e.toDataURL(),o=document.createElement("a");o.href=a,o.download=t,o.style.display="none",document.body.append(o),o.click(),setTimeout(function(){return n()},1500)})}},{key:"compose",value:function(e){var n=this,t=-1;!function a(){++t<e.length?e[t](a):n.setState({generating:!1},function(){return n.props.handleClick("bingo")})}()}},{key:"download",value:function(){var e=this,n=document.querySelectorAll(".photo-box .photo"),t=[];n.forEach(function(n){return t.push(function(t){return e.downloadImage(n,t)})}),this.compose(t)}},{key:"render",value:function(){var e=this;return b.a.createElement("div",{ref:this.props.myRef,className:"shadow-box mask",style:{backgroundColor:"#f4f5f5"},onClick:function(n){n.target.matches(".save-btn, .save-btn *")||e.state.generating||e.props.handleClick(n)}},b.a.createElement("div",{className:"center"},b.a.createElement("div",{className:"save-box flex-end"},b.a.createElement("div",{className:"save-btn flex-center",onClick:function(){e.setState({generating:!0},function(){return e.download()})}},b.a.createElement("span",null,"\u4e00\u952e\u4fdd\u5b58"))),b.a.createElement("div",{className:"photo-box"},b.a.createElement("ul",{className:"photo-list"},this.props.qrcodeList.length?this.props.qrcodeList.map(function(e,n){return b.a.createElement("li",{key:n,filename:e.prize,className:"photo flex-col-start"},b.a.createElement("div",{className:"prize-name flex-center"},b.a.createElement("span",null,e.prize)),b.a.createElement("div",{className:"qrcode-box flex-center"},b.a.createElement("div",{className:"qrcode bg-cover-all",style:{backgroundImage:"url(".concat(e.url,")")}})),b.a.createElement("div",{className:"acname flex-center"},b.a.createElement("span",null,e.acname)))}):null))))}}]),n}(E.Component);n.a=b.a.forwardRef(function(e,n){return b.a.createElement(N,o()({},e,{myRef:n}))})}}]);