(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/OdC":function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"7eEN":function(e,a,t){e.exports=t("OfKG")()},"9eSz":function(e,a,t){"use strict";t("rzGZ"),t("Dq+y"),t("8npG"),t("YbXK"),t("eMsz"),t("3nLz");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var s,c=l(t("PJYZ")),r=l(t("VbXa")),i=l(t("8OQS")),o=l(t("pVnL")),n=l(t("q1tI")),d=l(t("7eEN")),p=function(e){var a=(0,o.default)({},e),t=a.resolutions,l=a.sizes,s=a.critical;return t&&(a.fixed=t,delete a.resolutions),l&&(a.fluid=l,delete a.sizes),s&&(a.loading="eager"),a.fluid&&(a.fluid=w([].concat(a.fluid))),a.fixed&&(a.fixed=w([].concat(a.fixed))),a},u=function(e){var a=e.fluid,t=e.fixed;return(a&&a[0]||t&&t[0]).src},f=Object.create({}),m=function(e){var a=p(e),t=u(a);return f[t]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,b=g&&window.IntersectionObserver,y=new WeakMap;function x(e){return e.map((function(e){var a=e.src,t=e.srcSet,l=e.srcSetWebp,s=e.media,c=e.sizes;return n.default.createElement(n.default.Fragment,{key:a},l&&n.default.createElement("source",{type:"image/webp",media:s,srcSet:l,sizes:c}),n.default.createElement("source",{media:s,srcSet:t,sizes:c}))}))}function w(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function _(e){return e.map((function(e){var a=e.src,t=e.media,l=e.tracedSVG;return n.default.createElement("source",{key:a,media:t,srcSet:l})}))}function k(e){return e.map((function(e){var a=e.src,t=e.media,l=e.base64;return n.default.createElement("source",{key:a,media:t,srcSet:l})}))}function z(e,a){var t=e.srcSet,l=e.srcSetWebp,s=e.media,c=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(s?'media="'+s+'" ':"")+'srcset="'+(a?l:t)+'" '+(c?'sizes="'+c+'" ':"")+"/>"}var v=function(e,a){var t=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var a=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),y.delete(e.target),a())}}))}),{rootMargin:"200px"})),s);return t&&(t.observe(e),y.set(e,a)),function(){t.unobserve(e),y.delete(e)}},j=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",c=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",n=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+n+r+i+t+l+a+c+s+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=function(e){var a=e.src,t=e.imageVariants,l=e.generateSources,s=e.spreadProps,c=n.default.createElement(S,(0,o.default)({src:a},s));return t.length>1?n.default.createElement("picture",null,l(t),c):c},S=n.default.forwardRef((function(e,a){var t=e.sizes,l=e.srcSet,s=e.src,c=e.style,r=e.onLoad,d=e.onError,p=e.loading,u=e.draggable,f=(0,i.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return n.default.createElement("img",(0,o.default)({sizes:t,srcSet:l,src:s},f,{onLoad:r,onError:d,ref:a,loading:p,draggable:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},c)}))}));S.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var I=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=g&&m(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!h&&b&&!t.isCritical&&!t.seenBefore;var l=t.isCritical||g&&(h||!t.useIOSupport);return t.state={isVisible:l,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=n.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,c.default)(t)),t.handleRef=t.handleRef.bind((0,c.default)(t)),t}(0,r.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=v(e,(function(){var e=m(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=p(e),t=u(a),f[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=p(this.props),a=e.title,t=e.alt,l=e.className,s=e.style,c=void 0===s?{}:s,r=e.imgStyle,i=void 0===r?{}:r,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,m=e.fluid,h=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,z=e.loading,v=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:I?1:0,transition:C?"opacity "+b+"ms":"none"},i),O="boolean"==typeof g?"lightgray":g,Y={transitionDelay:b+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&Y,{},i,{},u),R={title:a,alt:this.state.isVisible?"":t,style:T,className:f,itemProp:w};if(m){var N=m,V=N[0];return n.default.createElement(y,{className:(l||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},n.default.createElement(y,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),O&&n.default.createElement(y,{title:a,style:(0,o.default)({backgroundColor:O,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&Y)}),V.base64&&n.default.createElement(E,{src:V.base64,spreadProps:R,imageVariants:N,generateSources:k}),V.tracedSVG&&n.default.createElement(E,{src:V.tracedSVG,spreadProps:R,imageVariants:N,generateSources:_}),this.state.isVisible&&n.default.createElement("picture",null,x(N),n.default.createElement(S,{alt:t,title:a,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:z,draggable:v})),this.addNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:t,title:a,loading:z},V,{imageVariants:N}))}}))}if(h){var W=h,M=W[0],P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},c);return"inherit"===c.display&&delete P.display,n.default.createElement(y,{className:(l||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},O&&n.default.createElement(y,{title:a,style:(0,o.default)({backgroundColor:O,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},C&&Y)}),M.base64&&n.default.createElement(E,{src:M.base64,spreadProps:R,imageVariants:W,generateSources:k}),M.tracedSVG&&n.default.createElement(E,{src:M.tracedSVG,spreadProps:R,imageVariants:W,generateSources:_}),this.state.isVisible&&n.default.createElement("picture",null,x(W),n.default.createElement(S,{alt:t,title:a,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:z,draggable:v})),this.addNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,o.default)({alt:t,title:a,loading:z},M,{imageVariants:W}))}}))}return null},a}(n.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});I.propTypes={resolutions:C,sizes:L,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var O=I;a.default=O},OfKG:function(e,a,t){"use strict";t("pJf4");var l=t("/OdC");function s(){}function c(){}c.resetWarningCache=s,e.exports=function(){function e(e,a,t,s,c,r){if(r!==l){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:c,resetWarningCache:s};return t.PropTypes=t,t}},RXBc:function(e,a,t){"use strict";t.r(a);var l=t("MX0m"),s=t.n(l),c=t("q1tI"),r=t.n(c),i=t("aArQ"),o=t("ma3e"),n=(t("9eSz"),t("Wbzz")),d=function(e){var a=e.theme,t=e.post,l=t.excerpt,c=t.fields,i=c.slug,d=c.prefix,p=t.frontmatter,u=p.title,f=p.category;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:s.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},r.a.createElement(n.Link,{to:i,key:i,className:"link"},r.a.createElement("h1",{className:s.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},u," ",r.a.createElement(o.d,{className:"arrow"})),r.a.createElement("p",{className:s.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])+" meta"},r.a.createElement("span",{className:s.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},r.a.createElement(o.e,{size:18})," ",d),f&&r.a.createElement("span",{className:s.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},r.a.createElement(o.i,{size:18})," ",f)),r.a.createElement("p",{className:s.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},l))),r.a.createElement(s.a,{styleId:"3223700290",css:[".link{width:100%;color:"+a.text.color.primary+";}","li.__jsx-style-dynamic-selector{border:1px solid transparent;border-radius:"+a.size.radius.default+";margin:calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3);padding:"+a.space.inset.s+";position:relative;-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";background:transparent;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper{border-radius:"+a.size.radius.default+";border:1px solid "+a.line.color+";overflow:hidden;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper img{z-index:-1;}","li.__jsx-style-dynamic-selector:after{border-top:1px solid "+a.line.color+';content:"";height:0;position:absolute;bottom:calc('+a.space.default+" * -1.5);left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";width:50%;}","li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{border-top:1px solid "+a.line.color+';content:"";height:0;position:absolute;top:calc('+a.space.default+" * -1.5);left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";width:50%;}","h1.__jsx-style-dynamic-selector{padding:"+a.space.m+" "+a.space.s+" 0;line-height:"+a.blog.h1.lineHeight+";font-size:"+a.blog.h1.size+";}","h1.__jsx-style-dynamic-selector .arrow{display:none;position:relative;top:7px;}",'h1.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.17em;}','h1.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.11em;}',".meta.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;font-size:0.8em;padding:"+a.space.m+" "+a.space.s+";background:transparent;}",".meta.__jsx-style-dynamic-selector svg{fill:"+a.icon.color+";margin:"+a.space.inline.xs+";}",".meta.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;margin:"+a.space.xs+" "+a.space.s+" "+a.space.xs+" 0;}","p.__jsx-style-dynamic-selector{line-height:1.5;padding:0 "+a.space.s+";}",'p.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.42em;}','p.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.36em;}',"@media screen and (min-width:600px){li.__jsx-style-dynamic-selector{margin:calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4);padding:"+a.space.default+";}li.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -2);}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{top:calc("+a.space.default+" * -1.75);}h1.__jsx-style-dynamic-selector{font-size:calc("+a.blog.h1.size+" * 1.2);padding:calc("+a.space.default+" * 1.5) "+a.space.default+" 0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.meta.__jsx-style-dynamic-selector{padding:calc("+a.space.m+" * 1.5) "+a.space.m+";}p.__jsx-style-dynamic-selector{padding:0 "+a.space.default+";}}","@media screen and (min-width:1024px){li.__jsx-style-dynamic-selector{margin:calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5);padding:0 0 calc("+a.space.default+" * 2);}li.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -1.5);}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:before{top:calc("+a.space.default+" * -2.75);}.blogItemLink:first-child>li.__jsx-style-dynamic-selector:before{top:calc("+a.space.default+" * -2.75);}h1.__jsx-style-dynamic-selector{font-size:2.5em;padding:calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0;}.meta.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5);}p.__jsx-style-dynamic-selector{padding:0 calc("+a.space.default+" * 2);}li.__jsx-style-dynamic-selector:hover{border:1px solid "+a.line.color+";-webkit-box-shadow:0px 3px 2px rgba(0,0,0,.03);box-shadow:0px 3px 2px rgba(0,0,0,.03);}li.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -2.5);}li.__jsx-style-dynamic-selector:hover .gatsby-image-wrapper{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}li.__jsx-style-dynamic-selector:hover h1.__jsx-style-dynamic-selector{color:"+a.blog.h1.hoverColor+";}li.__jsx-style-dynamic-selector:hover .arrow{opacity:1;stroke:"+a.color.special.attention+";-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}li.__jsx-style-dynamic-selector .gatsby-image-wrapper{-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";}li.__jsx-style-dynamic-selector .arrow{display:inline-block;fill:"+a.color.special.attention+";stroke:"+a.color.special.attention+";stroke-width:40;stroke-linecap:round;opacity:0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}}"],dynamic:[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]}))},p=function(e){var a=e.posts,t=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:s.a.dynamic([["3489809510",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])+" main"},r.a.createElement("ul",{className:s.a.dynamic([["3489809510",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])},a.map((function(e){var a=e.node,l=e.node.fields.slug;return r.a.createElement(d,{key:l,post:a,theme:t})})))),r.a.createElement(s.a,{styleId:"3489809510",css:[".main.__jsx-style-dynamic-selector{padding:0 "+t.space.inset.default+";}","ul.__jsx-style-dynamic-selector{list-style:none;margin:0 auto;padding:calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5);}","@media screen and (min-width:601px){.main.__jsx-style-dynamic-selector{padding:0 0 calc("+t.space.default+" * 1.5);}ul.__jsx-style-dynamic-selector{max-width:"+t.text.maxWidth.tablet+";}}","@media screen and (min-width:1025px){ul.__jsx-style-dynamic-selector{max-width:"+t.text.maxWidth.desktop+";}}"],dynamic:[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]}))},u=function(e){var a=e.scrollToContent,t=e.backgrounds,l=e.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:s.a.dynamic([["1256511481",[l.hero.background,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])+" hero"},r.a.createElement("h1",{className:s.a.dynamic([["1256511481",[l.hero.background,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])},"Matheus Gonçalves da Silva > Posts & ideas"),r.a.createElement("button",{onClick:a,"aria-label":"scroll",className:s.a.dynamic([["1256511481",[l.hero.background,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])},r.a.createElement(o.b,null))),r.a.createElement(s.a,{styleId:"1256511481",css:[".hero.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:"+l.hero.background+";background-image:url("+t.mobile+");background-size:cover;color:"+l.text.color.primary.inverse+";display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100vh;height:100px;padding:"+l.space.inset.l+";padding-top:"+l.header.height.homepage+";}","h1.__jsx-style-dynamic-selector{text-align:center;font-size:"+l.hero.h1.size+";margin:"+l.space.stack.l+";color:"+l.hero.h1.color+";line-height:"+l.hero.h1.lineHeight+";}","h1.__jsx-style-dynamic-selector strong{position:relative;}",'h1.__jsx-style-dynamic-selector strong:after,h1.__jsx-style-dynamic-selector strong:before{content:"›";color:'+l.text.color.attention+";margin:0 "+l.space.xs+" 0 0;text-shadow:0 0 "+l.space.s+" "+l.color.neutral.gray.k+";}",'h1.__jsx-style-dynamic-selector strong:after{content:"‹";margin:0 0 0 '+l.space.xs+";}",'h1.__jsx-style-dynamic-selector:before{display:table;content:"";margin-bottom:-0.17em;}','h1.__jsx-style-dynamic-selector:after{display:table;content:"";margin-top:-0.11em;}',"button.__jsx-style-dynamic-selector{background:"+l.background.color.brand+";border:0;border-radius:50%;font-size:"+l.font.size.m+";padding:"+l.space.s+" "+l.space.m+";cursor:pointer;width:"+l.space.xl+";height:"+l.space.xl+";}","button.__jsx-style-dynamic-selector:focus{outline-style:none;background:"+l.color.brand.primary.active+";}","button.__jsx-style-dynamic-selector svg{position:relative;top:5px;fill:"+l.color.neutral.white+";stroke-width:40;stroke:"+l.color.neutral.white+";-webkit-animation-duration:"+l.time.duration.long+";-webkit-animation-duration:"+l.time.duration.long+";animation-duration:"+l.time.duration.long+";-webkit-animation-name:buttonIconMove;-webkit-animation-name:buttonIconMove-__jsx-style-dynamic-selector;animation-name:buttonIconMove-__jsx-style-dynamic-selector;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}","@-webkit-keyframes buttonIconMove{0%.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%.__jsx-style-dynamic-selector{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@-webkit-keyframes buttonIconMove-__jsx-style-dynamic-selector{0%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@keyframes buttonIconMove-__jsx-style-dynamic-selector{0%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@media screen and (min-width:600px){.hero.__jsx-style-dynamic-selector{background-image:url("+t.tablet+");}h1.__jsx-style-dynamic-selector{max-width:90%;font-size:calc("+l.hero.h1.size+" * 1.3);}button.__jsx-style-dynamic-selector{font-size:"+l.font.size.l+";}}","@media screen and (min-width:1024px){.hero.__jsx-style-dynamic-selector{background-image:url("+t.desktop+");}h1.__jsx-style-dynamic-selector{max-width:80%;font-size:calc("+l.hero.h1.size+" * 1.5);}button.__jsx-style-dynamic-selector{font-size:"+l.font.size.xl+";}}"],dynamic:[l.hero.background,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]}))},f=t("hkyM");t.d(a,"query",(function(){return h}));var m=function(e){var a,t;function l(){for(var a,t=arguments.length,l=new Array(t),s=0;s<t;s++)l[s]=arguments[s];return(a=e.call.apply(e,[this].concat(l))||this).separator=r.a.createRef(),a.scrollToContent=function(e){a.separator.current.scrollIntoView({block:"start",behavior:"smooth"})},a}return t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,l.prototype.render=function(){var e=this,a=this.props.data,t=a.posts.edges,l=void 0===t?[]:t,c=a.bgDesktop.resize.src,o=a.bgTablet.resize.src,n=a.bgMobile.resize.src,d=a.site.siteMetadata.facebook,m={desktop:c,tablet:o,mobile:n};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.ThemeContext.Consumer,null,(function(a){return r.a.createElement(u,{scrollToContent:e.scrollToContent,backgrounds:m,theme:a})})),r.a.createElement("hr",{ref:this.separator,className:"jsx-311820556"}),r.a.createElement(i.ThemeContext.Consumer,null,(function(e){return r.a.createElement(p,{posts:l,theme:e})})),r.a.createElement(f.a,{facebook:d}),r.a.createElement(s.a,{styleId:"311820556",css:["hr.jsx-311820556{margin:0;border:0;}"]}))},l}(r.a.Component),h=(a.default=m,"3029885746")}}]);
//# sourceMappingURL=component---src-pages-index-js-5697116b0c2a068f58ee.js.map