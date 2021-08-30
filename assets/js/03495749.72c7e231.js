(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6504],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return N},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var n=t(2784);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),s=function(e){return function(a){var t=p(a.components);return n.createElement(e,r({},a,{components:t}))}},p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},v={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),c=o,x=s["".concat(d,".").concat(c)]||s[c]||v[c]||r;return t?n.createElement(x,i(i({ref:a},m),{},{components:t})):n.createElement(x,i({ref:a},m))}));function N(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=x;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var m=2;m<r;m++)d[m]=t[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},94149:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var n=t(22122),o=t(19756),r=(t(2784),t(3905)),d=["components"],i={title:"<Video />",id:"video"},l=void 0,m={unversionedId:"video",id:"video",isDocsHomePage:!1,title:"<Video />",description:"This component allows you to include a video file in your Remotion project. While in the preview, the video will just play in a HTML5 `` tag, during render, the exact frame needed will be extracted.",source:"@site/docs/video.md",sourceDirName:".",slug:"/video",permalink:"/docs/video",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/video.md",tags:[],version:"current",frontMatter:{title:"<Video />",id:"video"},sidebar:"someSidebar",previous:{title:"<Sequence />",permalink:"/docs/sequence"},next:{title:"<AbsoluteFill />",permalink:"/docs/absolute-fill"}},s=[{value:"API / Example",id:"api--example",children:[]},{value:"Codec support",id:"codec-support",children:[]},{value:"Controlling volume",id:"controlling-volume",children:[]},{value:"Controlling playback speed",id:"controlling-playback-speed",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:s};function c(e){var a=e.components,t=(0,o.default)(e,d);return(0,r.mdx)("wrapper",(0,n.default)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This component allows you to include a video file in your Remotion project. While in the preview, the video will just play in a HTML5 ",(0,r.mdx)("inlineCode",{parentName:"p"},"<video>")," tag, during render, the exact frame needed will be extracted."),(0,r.mdx)("h2",{id:"api--example"},"API / Example"),(0,r.mdx)("p",null,"Use an import or require to load an video file and pass it as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"src")," prop. All the props that the native ",(0,r.mdx)("inlineCode",{parentName:"p"},"<video>")," element accepts (except ",(0,r.mdx)("inlineCode",{parentName:"p"},"autoplay")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"controls"),") will be forwarded (but of course not all are useful for Remotion). This means you can use all CSS to style the video."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<Video>")," also accepts a ",(0,r.mdx)("inlineCode",{parentName:"p"},"volume")," prop which allows you to control the volume for the whole track or change it on a per-frame basis. Refer to the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/using-audio#controlling-volume"},"using audio")," guide to learn how to use it."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<Video>")," has two more helper props: ",(0,r.mdx)("inlineCode",{parentName:"p"},"startFrom")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"endAt")," to define when the video should start and end. Both are optional and do not get forwarded to the native ",(0,r.mdx)("inlineCode",{parentName:"p"},"<video>")," element but tell Remotion which portion of the video to use."),(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"),"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'remotion'")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.webm"\nimport video'},"video")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'./video.webm'")),(0,r.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"export"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">Hello World!</"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.webm"\nimport video'},"video"),"}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) startFrom?: number | undefined"},"startFrom")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"59"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// if video is 30fps, then it will start at 2s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) endAt?: number | undefined"},"endAt")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"120"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// if video is 30fps, then it will end at 4s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: React.CSSProperties | undefined"},"style")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.height?: Property.Height<string | number> | undefined"},"height")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1080"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"/"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"2"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.width?: Property.Width<string | number> | undefined"},"width")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1920"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"/"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"2"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  )")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"),"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'remotion'")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.webm"\nimport video'},"video")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'./video.webm'")),(0,r.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"export"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">Hello World!</"),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Video: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainVideoProps, "key" | ... 268 more ... | keyof RemotionMainVideoProps> & React.RefAttributes<...>>\nimport Video'},"Video"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) module "*.webm"\nimport video'},"video"),"}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) startFrom?: number | undefined"},"startFrom")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"59"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// if video is 30fps, then it will start at 2s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) endAt?: number | undefined"},"endAt")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"120"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// if video is 30fps, then it will end at 4s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"        ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) style?: React.CSSProperties | undefined"},"style")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.height?: Property.Height<string | number> | undefined"},"height")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1080"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"/"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"2"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) StandardLonghandProperties<string | number, string & {}>.width?: Property.Width<string | number> | undefined"},"width")),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1920"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"/"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"2"),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  )")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")))))),(0,r.mdx)("h2",{id:"codec-support"},"Codec support"),(0,r.mdx)("p",null,"Pay attention to the codec of the video that you are importing. During the render process, Chrome needs to support playing the video that you are embedding. If Remotion cannot find a preinstalled version of Chrome, it will download a Chromium executable which does not support the playback of H264 (common codec for MP4 videos). To work around this problem, you have multiple options:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Tell Remotion which path for Chrome to use by using the command line flag ",(0,r.mdx)("inlineCode",{parentName:"li"},"--browser-executable")," or ",(0,r.mdx)("a",{parentName:"li",href:"/docs/config#setbrowserexecutable"},"configure")," ",(0,r.mdx)("inlineCode",{parentName:"li"},"Config.Puppeteer.setBrowserExecutable()")," in a config file."),(0,r.mdx)("li",{parentName:"ul"},"Convert your videos to WebM before embedding them.")),(0,r.mdx)("p",null,"Prior to Remotion 1.5, Remotion will always use an internal Puppeteer binary and MP4 videos are therefore not supported."),(0,r.mdx)("p",null,"If you would like Remotion to warn you when you import an MP4 video, you can turn on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@remotion/no-mp4-import")," ESLint rule."),(0,r.mdx)("h2",{id:"controlling-volume"},"Controlling volume"),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"volume")," prop to control the loudness of the audio coming from the video. See ",(0,r.mdx)("a",{parentName:"p",href:"/docs/using-audio#controlling-volume"},"Controlling audio")," for more information."),(0,r.mdx)("h2",{id:"controlling-playback-speed"},"Controlling playback speed"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Available from v2.2")),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"playbackRate")," prop to control the speed of the video. ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," is the default and means regular speed, ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.5")," slows down the video so it's twice as long and ",(0,r.mdx)("inlineCode",{parentName:"p"},"2")," speeds up the video so it's twice as fast."),(0,r.mdx)("p",null,"While Remotion doesn't limit the range of possible playback speeds, in development mode the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate"},(0,r.mdx)("inlineCode",{parentName:"a"},"HTMLMediaElement.playbackRate"))," API is used which throws errors on extreme values. At the time of writing, Google Chrome throws an exception if the playback rate is below ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.0625")," or above ",(0,r.mdx)("inlineCode",{parentName:"p"},"16"),"."),(0,r.mdx)("h2",{id:"see-also"},"See also"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/audio"},(0,r.mdx)("inlineCode",{parentName:"a"},"<Audio />")))))}c.isMDXComponent=!0}}]);