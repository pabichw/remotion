(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[334],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return v},useMDXComponents:function(){return i},withMDXComponents:function(){return d}});var n=t(2784);function m(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){m(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,m=function(e,a){if(null==e)return{};var t,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(m[t]=e[t]);return m}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(m[t]=e[t])}return m}var l=n.createContext({}),d=function(e){return function(a){var t=i(a.components);return n.createElement(e,o({},a,{components:t}))}},i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,m=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(t),c=m,x=d["".concat(r,".").concat(c)]||d[c]||N[c]||o;return t?n.createElement(x,s(s({ref:a},l),{},{components:t})):n.createElement(x,s({ref:a},l))}));function v(e,a){var t=arguments,m=a&&a.mdxType;if("string"==typeof e||m){var o=t.length,r=new Array(o);r[0]=x;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:m,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},84304:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var n=t(22122),m=t(19756),o=(t(2784),t(3905)),r=["components"],s={id:"still",title:"<Still />"},p=void 0,l={unversionedId:"still",id:"still",isDocsHomePage:!1,title:"<Still />",description:"A ` is a ` that is only 1 frame long. It is a convienience component for defining a composition that is meant to be rendered an image rather than a video.",source:"@site/docs/still.md",sourceDirName:".",slug:"/still",permalink:"/docs/still",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/still.md",tags:[],version:"current",frontMatter:{id:"still",title:"<Still />"},sidebar:"someSidebar",previous:{title:"<Freeze />",permalink:"/docs/freeze"},next:{title:"<Series />",permalink:"/docs/series"}},d=[{value:"Example",id:"example",children:[]},{value:"See also",id:"see-also",children:[]}],i={toc:d};function c(e){var a=e.components,t=(0,m.default)(e,r);return(0,o.mdx)("wrapper",(0,n.default)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Still />")," is a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/composition"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Composition />"))," that is only 1 frame long. It is a convienience component for defining a composition that is meant to be rendered an image rather than a video."),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Still />")," component has the same API as a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/composition"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Composition />"))," except it's not necessary to pass ",(0,o.mdx)("inlineCode",{parentName:"p"},"durationInFrames")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"fps"),"."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: CompositionProps<T>) => null\nimport Composition"},"Composition"),", ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Still: <T>(props: StillProps<T>) => JSX.Element\nimport Still"},"Still"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./MyComp'")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: CompositionProps<T>) => null\nimport Composition"},"Composition"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},'"my-video"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) fps: number"},"fps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"3"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"*"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Still: <T>(props: StillProps<T>) => JSX.Element\nimport Still"},"Still"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},'"my-image"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: CompositionProps<T>) => null\nimport Composition"},"Composition"),", ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Still: <T>(props: StillProps<T>) => JSX.Element\nimport Still"},"Still"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"} "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./MyComp'")),(0,o.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Composition: <T>({ width, height, fps, durationInFrames, id, defaultProps: props, ...compProps }: CompositionProps<T>) => null\nimport Composition"},"Composition"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},'"my-video"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) fps: number"},"fps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) durationInFrames: number"},"durationInFrames")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"3"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"*"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"30"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Still: <T>(props: StillProps<T>) => JSX.Element\nimport Still"},"Still"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},'"my-image"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<unknown>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const MyComp: () => JSX.Element\nimport MyComp"},"MyComp"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    </>")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/composition"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Composition />")))))}c.isMDXComponent=!0}}]);