(this["webpackJsonptest-front_merge-dev"]=this["webpackJsonptest-front_merge-dev"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"App_container__QfD5L",wrapper:"App_wrapper__3azx5",logotype:"App_logotype__jGVie"}},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},4:function(e,t,a){e.exports={sliderWrapper:"PresentationSlider_sliderWrapper__2tXe6",slider:"PresentationSlider_slider__4dplQ",slide:"PresentationSlider_slide__2y6m6",imageWrapper:"PresentationSlider_imageWrapper__1VEuR",image:"PresentationSlider_image__1IZ9-",title:"PresentationSlider_title__lqE9i",description:"PresentationSlider_description__2VWbY",sliderDots:"PresentationSlider_sliderDots__1syes"}},43:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),r=a.n(s),n=a(14),c=a.n(n),o=(a(21),a(5)),l=a.p+"static/media/logotype.c2ccbf3c.svg",d=a(2),p=a.n(d),u=(a(22),function(e){var t=e.className,a=(Object(o.a)(e,["className"]),p()("logotype",t));return Object(i.jsx)("img",{className:a,src:l,alt:""})});u.defaultProps={className:""};var j=u,m=a(8),b=a(3),_=(a(23),function(e){var t=e.id,a=e.className,s=e.label,r=e.complete,n=e.error,c=Object(o.a)(e,["id","className","label","complete","error"]),l=p()("input",n?"error":null,r?"complete":null,a);return Object(i.jsxs)("div",{className:"inputWrapper",children:[s&&Object(i.jsx)("label",{className:"inputLabel",htmlFor:t,children:s}),n&&Object(i.jsx)("span",{className:"inputError",children:n}),Object(i.jsx)("input",Object(b.a)({name:t,id:t,className:l},c))]})});_.defaultProps={className:"",label:"",error:""};var h=_,O=(a(24),function(e){var t=e.children,a=e.className,s=e.onClick,r=e.disabled,n=e.active,c=Object(o.a)(e,["children","className","onClick","disabled","active"]),l=p()("btn",a,{active:n});return Object(i.jsx)("button",Object(b.a)(Object(b.a)({className:l,onClick:s,disabled:r},c),{},{children:t}))});O.defaultProps={children:"",className:"",disabled:!1,active:!1,onClick:function(){}};var f=O,g=a(6),x=a.n(g),N=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(""),c=Object(m.a)(n,2),o=c[0],l=c[1],d=Object(s.useState)(!1),p=Object(m.a)(d,2),u=p[0],j=p[1],b=Object(s.useState)(!1),_=Object(m.a)(b,2),O=_[0],g=_[1],N=Object(s.useState)("Invalid email"),v=Object(m.a)(N,2),w=v[0],S=v[1],P=Object(s.useState)("Invalid format too short"),z=Object(m.a)(P,2),F=z[0],A=z[1],k=function(e){switch(e.target.name){case"email":j(!0);break;case"password":g(!0)}};return Object(i.jsxs)("form",{className:x.a.authorizationForm,children:[Object(i.jsx)("div",{className:x.a.email,children:Object(i.jsx)(h,{onChange:function(e){return function(e){var t=e.target.value;r(t),/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?S(""):S("Invalid email")}(e)},onBlur:function(e){return k(e)},error:u&&w?w:null,complete:!w||null,value:a,type:"email",id:"email",label:"Email",className:x.a.field})}),Object(i.jsxs)("div",{className:x.a.password,children:[Object(i.jsx)(h,{onChange:function(e){return function(e){var t=e.target.value;l(t),t.length<3?A("Invalid format too short"):A("")}(e)},onBlur:function(e){return k(e)},error:O&&F?F:null,complete:!F||null,value:o,type:"password",id:"password",label:"Password",className:x.a.passwordField}),Object(i.jsx)("span",{className:x.a.forgotPassword,children:"Forgot your password?"})]}),Object(i.jsx)(f,{disabled:w||F,className:x.a.btnSignIn,children:"Sign in"})]})},v=(a(25),function(e){var t=e.className,a=Object(o.a)(e,["className"]),s=p()("footer",t);return Object(i.jsxs)("ul",Object(b.a)(Object(b.a)({className:s},a),{},{children:[Object(i.jsx)("li",{children:"Contact"}),Object(i.jsx)("li",{children:"Privacy"}),Object(i.jsx)("li",{children:"Terms"})]}))});v.defaultProps={className:""};var w=v,S=a(7),P=a.n(S),z=function(){return Object(i.jsxs)("div",{className:P.a.authorizationWrapper,children:[Object(i.jsx)(j,{className:P.a.logo}),Object(i.jsx)("h1",{className:P.a.title,children:"Sing in"}),Object(i.jsxs)("div",{className:P.a.description,children:[Object(i.jsx)("span",{children:"Don\u2019t have an Xcellerate account?"}),Object(i.jsx)("span",{className:P.a.singUpNow,children:"Sign up now"})]}),Object(i.jsx)(N,{}),Object(i.jsx)(w,{className:P.a.footerWrapper})]})},F=a(15),A=a.n(F),k=a(4),W=a.n(k),y=(a(41),a(42),a.p+"static/media/slider01.8525a6b5.png"),C=a.p+"static/media/slider02.c5ef646c.png",B=a.p+"static/media/slider03.a4c2f0bb.png",I=function(){var e=[{photo:y,title:"Tokenplace",description:"Multi-exchange Trading Terminal"},{photo:C,title:"Fund Platform",description:"Hedge funds wealth management"},{photo:B,title:"Noviscient",description:"Management Platform"}],t={dots:!0,infinite:!0,arrows:!1,speed:500,autoplay:!0,slickPlay:!0,appendDots:function(e){return Object(i.jsx)("ul",{children:e})},dotsClass:"".concat(W.a.sliderDots)};return Object(i.jsx)("div",{className:W.a.sliderWrapper,children:Object(i.jsx)(A.a,Object(b.a)(Object(b.a)({},t),{},{className:W.a.slider,children:e.map((function(e,t){return Object(i.jsxs)("div",{className:W.a.slide,children:[Object(i.jsx)("div",{className:W.a.imageWrapper,children:Object(i.jsx)("img",{src:e.photo,className:W.a.image,alt:""})}),Object(i.jsx)("h2",{className:W.a.title,children:e.title}),Object(i.jsx)("div",{className:W.a.description,children:e.description})]},t)}))}))})},D=a(10),E=a.n(D),L=function(){return Object(i.jsx)("div",{className:E.a.container,children:Object(i.jsxs)("div",{className:E.a.wrapper,children:[Object(i.jsx)(j,{className:E.a.logotype}),Object(i.jsx)(I,{}),Object(i.jsx)(z,{})]})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),r(e),n(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),T()},6:function(e,t,a){e.exports={authorizationForm:"AuthorizationForm_authorizationForm__3jstF",email:"AuthorizationForm_email__1L12I",password:"AuthorizationForm_password__245QB",passwordField:"AuthorizationForm_passwordField__2PQWu",forgotPassword:"AuthorizationForm_forgotPassword__2Mp1w",field:"AuthorizationForm_field__3c03s",btnSignIn:"AuthorizationForm_btnSignIn__2GmGV"}},7:function(e,t,a){e.exports={authorizationWrapper:"AuthorizationBlock_authorizationWrapper__38S4-",logo:"AuthorizationBlock_logo__3ugeE",title:"AuthorizationBlock_title__2K1nR",description:"AuthorizationBlock_description__21bOi",singUpNow:"AuthorizationBlock_singUpNow__1JZdD",footerWrapper:"AuthorizationBlock_footerWrapper__2Ywqx"}}},[[43,1,2]]]);
//# sourceMappingURL=main.0e0f14b1.chunk.js.map