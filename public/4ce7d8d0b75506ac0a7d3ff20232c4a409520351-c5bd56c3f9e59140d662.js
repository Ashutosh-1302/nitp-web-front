(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,i){"use strict";var a=i("TqRt");t.__esModule=!0,t.default=void 0;var n,s=a(i("PJYZ")),r=a(i("VbXa")),c=a(i("8OQS")),d=a(i("pVnL")),l=a(i("q1tI")),o=a(i("17x9")),u=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,n=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(j&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,i=e.fixed,a=f(t||i||[]);return a&&a.src},f=function(e){if(j&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),i=h(t);return p[i]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,j="undefined"!=typeof window,v=j&&window.IntersectionObserver,y=new WeakMap;function O(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,n=e.media,s=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:s}),i&&l.default.createElement("source",{media:n,srcSet:i,sizes:s}))}))}function x(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function S(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function k(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function N(e,t){var i=e.srcSet,a=e.srcSetWebp,n=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:i)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var w=function(e,t){var i=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return i&&(i.observe(e),y.set(e,t)),function(){i.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+l+r+c+i+a+t+s+n+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=l.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,n=e.generateSources,s=e.spreadProps,r=e.ariaHidden,c=l.default.createElement(q,(0,d.default)({ref:t,src:i},s,{ariaHidden:r}));return a.length>1?l.default.createElement("picture",null,n(a),c):c})),q=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,n=e.src,s=e.style,r=e.onLoad,o=e.onError,u=e.loading,m=e.draggable,h=e.ariaHidden,f=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":h,sizes:i,srcSet:a,src:n},f,{onLoad:r,onError:o,ref:t,loading:u,draggable:m,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));q.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var C=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=j&&g(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!b&&v&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||j&&(b||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,s.default)(i)),i.handleRef=i.handleRef.bind((0,s.default)(i)),i}(0,r.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:j}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=w(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),(i=h(t))&&(p[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,s=void 0===n?{}:n,r=e.imgStyle,c=void 0===r?{}:r,o=e.placeholderStyle,m=void 0===o?{}:o,h=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,j=e.durationFadeIn,v=e.Tag,y=e.itemProp,x=e.loading,N=e.draggable,w=p||g;if(!w)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,d.default)({opacity:C?1:0,transition:T?"opacity "+j+"ms":"none"},c),R="boolean"==typeof b?"lightgray":b,H={transitionDelay:j+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},T&&H,c,m),V={title:t,alt:this.state.isVisible?"":i,style:z,className:h,itemProp:y},P=this.state.isHydrated?f(w):w[0];if(p)return l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),R&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&H)}),P.base64&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:w,generateSources:k}),P.tracedSVG&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:w,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,O(w),l.default.createElement(q,{alt:i,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:x,draggable:N})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:i,title:t,loading:x},P,{imageVariants:w}))}}));if(g){var A=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},s);return"inherit"===s.display&&delete A.display,l.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},R&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:R,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},T&&H)}),P.base64&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:V,imageVariants:w,generateSources:k}),P.tracedSVG&&l.default.createElement(E,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:V,imageVariants:w,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,O(w),l.default.createElement(q,{alt:i,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:x,draggable:N})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:i,title:t,loading:x},P,{imageVariants:w}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),I=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string,maxWidth:o.default.number,maxHeight:o.default.number});function R(e){return function(t,i,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");o.default.checkPropTypes(((n={})[i]=e,n),t,"prop",a)}}C.propTypes={resolutions:T,sizes:I,fixed:R(o.default.oneOfType([T,o.default.arrayOf(T)])),fluid:R(o.default.oneOfType([I,o.default.arrayOf(I)])),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var H=C;t.default=H},Bl7J:function(e,t,i){"use strict";var a=i("dI71"),n=i("nKUr"),s=i("vOnD"),r=i("q1tI"),c=i.n(r),d=i("Wbzz"),l=(i("azF3"),i("ic0w"),i("TGQk")),o=i.n(l),u=i("pdtC"),m=i.n(u),h=i("19JU"),f=i("F3F1"),p=i.n(f),g=i("qoy9"),b=i.n(g),j=i("4v6j"),v=i.n(j),y=i("dVg7"),O=i.n(y),x=i("f3yp"),S=i.n(x),k=i("MprI"),N=i.n(k),w=i("3MN4"),L=i.n(w),E=i("6ZZ/"),q=i.n(E),C=function(){return h.a.onscroll=function(){},Object(r.useEffect)((function(){document.addEventListener("scroll",(function(e){document.scrollingElement.scrollTop>=80?(document.querySelector(".nav-col>h2").style.lineHeight="0.2rem",document.querySelector(".nav-col>h4").style.lineHeight="0.2rem",document.querySelector(".nav-link-row").style.backgroundColor="black",document.querySelector(".nav-link-row").style.marginTop="4vw",document.querySelector(".logobadge>h4").style.display="none",document.querySelector(".logobadge>div>img").style.maxHeight="5vw",document.querySelector(".logobadge>div>img").style.borderWidth="0px",document.querySelector(".logobadge").style.backgroundColor="transparent",document.querySelector(".logobadge>div>img").style.marginTop="1.5vw",document.querySelector(".logobadge").style.paddingLeft="0",document.querySelector(".mobilelogo>img").style.maxHeight="5vh",document.querySelector(".logobadge").style.transition="1s",document.querySelector(".logobadge>h4").style.transition="1s",document.querySelector(".logobadge>div>img").style.transition="1s",document.querySelector(".mobilelogo>img").style.transition="1s",document.querySelector(".nav-link-row").style.opacity="1",document.querySelector(".nav-col").style.paddingTop="0.2vw"):(document.querySelector(".nav-col>h2").style.lineHeight="0.3rem",document.querySelector(".nav-col>h4").style.lineHeight="0.3rem",document.querySelector(".nav-link-row").style.backgroundColor="black",document.querySelector(".nav-link-row").style.marginTop="4.7vw",document.querySelector(".logobadge>h4").style.display="flex",document.querySelector(".logobadge>div>img").style.maxHeight="8vw",document.querySelector(".logobadge>div>img").style.borderWidth="0.5vw",document.querySelector(".logobadge").style.backgroundColor="#E47F40",document.querySelector(".logobadge>div>img").style.marginTop="0px",document.querySelector(".logobadge").style.paddingLeft="0",document.querySelector(".mobilelogo>img").style.maxHeight="7vh",document.querySelector(".logobadge").style.transition="1s",document.querySelector(".logobadge>h4").style.transition="1s",document.querySelector(".logobadge>div>img").style.transition="1s",document.querySelector(".mobilelogo>img").style.transition="1s",document.querySelector(".nav-link-row").style.opacity="0.8",document.querySelector(".nav-col").style.paddingTop="0.5vw")}))}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"nav-row",children:[Object(n.jsx)(d.Link,{className:"mobilelogo","data-aos":"zoom-in",to:"/",children:Object(n.jsx)("img",{src:o.a,alt:"NIT PATNA"})}),Object(n.jsxs)("div",{className:"nav-col",children:[Object(n.jsx)("h2",{children:"NATIONAL INSTITUTE OF TECHNOLOGY PATNA"}),Object(n.jsx)("h4",{children:"राष्ट्रीय प्रौद्योगिकी संस्थान, पटना"})]}),Object(n.jsxs)("div",{className:"nav-link-row",children:[Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/",children:Object(n.jsx)("span",{children:"Home"})}),Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/about",children:Object(n.jsx)("span",{children:"About Us"})}),Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/administration",children:Object(n.jsx)("span",{children:"Administration"})}),Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/academics",children:Object(n.jsx)("span",{children:"Academics"})}),Object(n.jsx)("div",{id:"navblank"}),Object(n.jsxs)("div",{className:"dropdown nav-link-div",children:[Object(n.jsx)("button",{className:"dropbtn nav-link-div nav-link-item",children:"Departments"}),Object(n.jsxs)("div",{className:"dropdown-content",children:[Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/csehome",children:Object(n.jsx)("span",{children:"Computer Science and Engineering"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/ecehome",children:Object(n.jsx)("span",{children:"Electronics and Communication Engineering"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/eehome",children:Object(n.jsx)("span",{children:"Electrical Engineering"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/mehome",children:Object(n.jsx)("span",{children:"Mechanical Engineering"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/cehome",children:Object(n.jsx)("span",{children:"Civil Engineering"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/hsshome",children:Object(n.jsx)("span",{children:"Humanities & Social Sciences"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/archhome",children:Object(n.jsx)("span",{children:"Architecture"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/physicshome",children:Object(n.jsx)("span",{children:"Physics"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/chemhome",children:Object(n.jsx)("span",{children:"Chemistry"})}),Object(n.jsx)(d.Link,{className:"nav-link-item",to:"/mathhome",children:Object(n.jsx)("span",{children:"Mathematics"})})]})]}),Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/facilities",children:Object(n.jsx)("span",{children:"Facilities"})}),Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/student/",children:Object(n.jsx)("span",{children:"Students"})}),Object(n.jsx)(d.Link,{className:"nav-link-item nav-link-div",activeClassName:"nav-link-item-active",to:"/placements",children:Object(n.jsx)("span",{children:"Placements"})})]}),Object(n.jsx)(d.Link,{id:"logowr1",to:"/",children:Object(n.jsxs)("div",{className:"logobadge","data-aos":"fade-down",children:[Object(n.jsx)("h4",{children:"श्रमोऽनवरत चेष्टाय"}),Object(n.jsx)("div",{id:"logowr2",children:Object(n.jsx)("img",{src:o.a,alt:"NIT PATNA"})})]})}),Object(n.jsx)("span",{className:"nav-toggle",onClick:function(){var e=document.querySelector(".nav-sidebar");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:Object(n.jsx)("img",{src:m.a,"data-aos":"zoom-in",alt:"menu"})}),Object(n.jsxs)("div",{className:"nav-sidebar",children:[Object(n.jsx)("div",{className:"navsidetop",children:Object(n.jsxs)(d.Link,{className:"navsidetop",to:"/",children:[Object(n.jsx)("img",{src:o.a,alt:"logo"}),Object(n.jsx)("p",{children:"NIT PATNA"})]})}),Object(n.jsxs)(d.Link,{className:"nav-sidebar-div",to:"/",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:S.a,alt:""})}),Object(n.jsx)("p",{children:"Home"})]}),Object(n.jsxs)(d.Link,{className:"nav-sidebar-div",to:"/about",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:v.a,alt:""})}),Object(n.jsx)("p",{children:"About Us"})]}),Object(n.jsxs)(d.Link,{className:"nav-sidebar-div",to:"/administration",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:b.a,alt:""})}),Object(n.jsx)("p",{children:"Administration"})]}),Object(n.jsxs)(d.Link,{className:"nav-sidebar-div",to:"/academics",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:p.a,alt:""})}),Object(n.jsx)("p",{children:"Academics"})]}),Object(n.jsxs)("div",{className:"nav-sidebar-div",onClick:function(){var e=document.querySelector("#departdropicon"),t=document.querySelector(".departsidedrop"),i=document.querySelector("#departsidedropwrap");"none"===t.style.display?(t.style.display="block",i.style.display="flex",e.style.transform="rotate(180deg)"):(t.style.display="none",i.style.display="none",e.style.transform="rotate(0deg)")},children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:q.a,id:"departdropicon",alt:""})}),Object(n.jsx)("p",{className:"navsidedepart",children:Object(n.jsx)("span",{children:"Departments"})})]}),Object(n.jsx)("div",{id:"departsidedropwrap",children:Object(n.jsxs)("div",{className:"departsidedrop",children:[Object(n.jsx)(d.Link,{to:"/csehome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Computer Science and Engineering"})})}),Object(n.jsx)(d.Link,{to:"/ecehome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Electronics and Communication Engineering"})})}),Object(n.jsx)(d.Link,{to:"/eehome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Electrical Engineering"})})}),Object(n.jsx)(d.Link,{to:"/mehome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Mechanical Engineering"})})}),Object(n.jsx)(d.Link,{to:"/cehome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Civil Engineering"})})}),Object(n.jsx)(d.Link,{to:"/hsshome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Humanities & Social Sciences"})})}),Object(n.jsx)(d.Link,{to:"/archhome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Architecture"})})}),Object(n.jsx)(d.Link,{to:"/physicshome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Physics"})})}),Object(n.jsx)(d.Link,{to:"/chemhome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Chemistry"})})}),Object(n.jsx)(d.Link,{to:"/mathhome",className:"nav-sidebar-div",children:Object(n.jsx)("p",{children:Object(n.jsx)("span",{children:"Mathematics"})})})]})}),Object(n.jsxs)(d.Link,{to:"/facilities",className:"nav-sidebar-div",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:O.a,alt:""})}),Object(n.jsx)("p",{children:"Facilities"})]}),Object(n.jsxs)(d.Link,{to:"/student",className:"nav-sidebar-div",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:N.a,alt:""})}),Object(n.jsx)("p",{children:"Students"})]}),Object(n.jsxs)(d.Link,{to:"/placements",className:"nav-sidebar-div",children:[Object(n.jsx)("div",{className:"navsideicondiv",children:Object(n.jsx)("img",{src:L.a,alt:""})}),Object(n.jsx)("p",{children:"Placements"})]})]})]})})},T=i("W/9C"),I=(i("8ypT"),i("6Cl6"),Object(s.a)("div").withConfig({displayName:"layout___StyledDiv",componentId:"sc-1sskn4p-0"})(["padding-top:4.8vw;"])),R=function(e){function t(t){var a;(a=e.call(this)||this,"undefined"!=typeof window)&&i("9a8T").init();return a}Object(a.a)(t,e);var s=t.prototype;return s.ComponentDidMount=function(){"undefined"!=typeof window&&i("9a8T").init()},s.componentDidUpdate=function(){"undefined"!=typeof window&&i("9a8T").refresh()},s.render=function(){var e=this.props.children;return Object(n.jsx)(d.StaticQuery,{query:"3649515864",render:function(t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(C,{}),Object(n.jsxs)(I,{children:[Object(n.jsx)("main",{children:e}),Object(n.jsx)(T.a,{})]})]})}})},t}(c.a.Component);t.a=R}}]);
//# sourceMappingURL=4ce7d8d0b75506ac0a7d3ff20232c4a409520351-c5bd56c3f9e59140d662.js.map