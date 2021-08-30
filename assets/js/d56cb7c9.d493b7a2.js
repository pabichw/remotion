(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6813],{3905:function(e,r,n){"use strict";n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var t=n(2784);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){return function(r){var n=m(r.components);return t.createElement(e,o({},r,{components:n}))}},m=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},u=function(e){var r=m(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,f=c["".concat(i,".").concat(u)]||c[u]||p[u]||o;return n?t.createElement(f,d(d({ref:r},l),{},{components:n})):t.createElement(f,d({ref:r},l))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var d={};for(var s in r)hasOwnProperty.call(r,s)&&(d[s]=r[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49662:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var t=n(22122),a=n(19756),o=(n(2784),n(3905)),i=["components"],d={id:"render",title:"Render your video"},s=void 0,l={unversionedId:"render",id:"render",isDocsHomePage:!1,title:"Render your video",description:"Now here comes the magic! Turn your creation into an MP4.",source:"@site/docs/render.md",sourceDirName:".",slug:"/render",permalink:"/docs/render",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/render.md",tags:[],version:"current",frontMatter:{id:"render",title:"Render your video"},sidebar:"someSidebar",previous:{title:"Use the timeline",permalink:"/docs/timeline"},next:{title:"Importing assets",permalink:"/docs/assets"}},c=[{value:"More ways to render",id:"more-ways-to-render",children:[{value:"SSR",id:"ssr",children:[]},{value:"Github Actions",id:"github-actions",children:[]},{value:"Serverless",id:"serverless",children:[]},{value:"Only audio",id:"only-audio",children:[]},{value:"Image Sequence",id:"image-sequence",children:[]},{value:"Still images",id:"still-images",children:[]}]},{value:"See also",id:"see-also",children:[]}],m={toc:c};function u(e){var r=e.components,n=(0,a.default)(e,i);return(0,o.mdx)("wrapper",(0,t.default)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Now here comes the magic! Turn your creation into an MP4."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"npm run build"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"npm run build")))))),(0,o.mdx)("p",null,"The underlying command in package.json is defined as follows:"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"npx remotion render src/index.tsx HelloWorld out.mp4"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"npx remotion render src/index.tsx HelloWorld out.mp4")))))),(0,o.mdx)("p",null,"Modify it to select a different video to render, or change its output location.\nLearn about all the options on the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli"},"CLI reference page"),"."),(0,o.mdx)("h2",{id:"more-ways-to-render"},"More ways to render"),(0,o.mdx)("h3",{id:"ssr"},"SSR"),(0,o.mdx)("p",null,"Remotion has a full-featured server-side rendering API. Read more about it on the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ssr"},"server-side rendering API"),"."),(0,o.mdx)("h3",{id:"github-actions"},"Github Actions"),(0,o.mdx)("p",null,"You can also render a ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ssr#render-using-github-actions"},"video using a Github Action.")),(0,o.mdx)("h3",{id:"serverless"},"Serverless"),(0,o.mdx)("p",null,"We are also working on a Serverless solution for rendering videos, ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ssr#rendering-a-video-using-serverless"},"which is in private beta"),"."),(0,o.mdx)("h3",{id:"only-audio"},"Only audio"),(0,o.mdx)("p",null,"Instead of rendering a video, ",(0,o.mdx)("a",{parentName:"p",href:"/docs/encoding#audio-only-export"},"you can also just export the audio.")),(0,o.mdx)("h3",{id:"image-sequence"},"Image Sequence"),(0,o.mdx)("p",null,"Instead of encoding as a video, you can use the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/cli#--sequence"},(0,o.mdx)("inlineCode",{parentName:"a"},"--sequence"))," command to output a series of image."),(0,o.mdx)("h3",{id:"still-images"},"Still images"),(0,o.mdx)("p",null,"If you want a single image, you can do so using ",(0,o.mdx)("a",{parentName:"p",href:"/docs/stills"},"the CLI or Node.JS API"),"."),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/cli"},"CLI options"))))}u.isMDXComponent=!0}}]);