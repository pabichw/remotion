(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3168],{3905:function(e,a,n){"use strict";n.r(a),n.d(a,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return N},useMDXComponents:function(){return s},withMDXComponents:function(){return i}});var r=n(2784);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var m=r.createContext({}),i=function(e){return function(a){var n=s(a.components);return r.createElement(e,o({},a,{components:n}))}},s=function(e){var a=r.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=s(e.components);return r.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},x=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),i=s(n),c=t,x=i["".concat(d,".").concat(c)]||i[c]||u[c]||o;return n?r.createElement(x,l(l({ref:a},m),{},{components:n})):r.createElement(x,l({ref:a},m))}));function N(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,d=new Array(o);d[0]=x;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,d[1]=l;for(var m=2;m<o;m++)d[m]=n[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}x.displayName="MDXCreateElement"},96009:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return i},default:function(){return c}});var r=n(22122),t=n(19756),o=(n(2784),n(3905)),d=["components"],l={id:"render-still",title:"renderStill()"},p=void 0,m={unversionedId:"render-still",id:"render-still",isDocsHomePage:!1,title:"renderStill()",description:"Part of the @remotion/renderer package. Available from v2.3.",source:"@site/docs/render-still.md",sourceDirName:".",slug:"/render-still",permalink:"/docs/render-still",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/render-still.md",tags:[],version:"current",frontMatter:{id:"render-still",title:"renderStill()"},sidebar:"someSidebar",previous:{title:"stitchFramesToVideo()",permalink:"/docs/stitch-frames-to-video"},next:{title:"Puppeteer timeout",permalink:"/docs/timeout"}},i=[{value:"Example usage",id:"example-usage",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>composition</code>",id:"composition",children:[]},{value:"<code>webpackBundle</code>",id:"webpackbundle",children:[]},{value:"<code>output</code>",id:"output",children:[]},{value:"<code>inputProps?</code>",id:"inputprops",children:[]},{value:"<code>frame?</code>",id:"frame",children:[]},{value:"<code>imageFormat?</code>",id:"imageformat",children:[]},{value:"<code>quality?</code>",id:"quality",children:[]},{value:"<code>puppeteerInstance?</code>",id:"puppeteerinstance",children:[]},{value:"<code>envVariables?</code>",id:"envvariables",children:[]},{value:"<code>dumpBrowserLogs?</code>",id:"dumpbrowserlogs",children:[]},{value:"<code>onError?</code>",id:"onerror",children:[]},{value:"<code>overwrite?</code>",id:"overwrite",children:[]},{value:"<code>browserExecutable?</code>",id:"browserexecutable",children:[]}]},{value:"Return value",id:"return-value",children:[]}],s={toc:i};function c(e){var a=e.components,n=(0,t.default)(e,d);return(0,o.mdx)("wrapper",(0,r.default)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Part of the ",(0,o.mdx)("inlineCode",{parentName:"em"},"@remotion/renderer")," package. Available from v2.3.")),(0,o.mdx)("p",null,"Renders a single frame to an image and writes it to the specified output location."),(0,o.mdx)("p",null,"If you want to render a full image sequence and possibly encode it to a video later, use ",(0,o.mdx)("a",{parentName:"p",href:"/docs/render-frames"},"renderFrames()")," instead."),(0,o.mdx)("h2",{id:"example-usage"},"Example usage"),(0,o.mdx)("p",null,"You first need to bundle the project and fetch the compositions. Read ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ssr/#render-a-video-programmatically"},"the code snippet on the site for server-side rendering")," for an example how to come up with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"bundleLocation")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"composition")," variables."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) renderStill({ composition, quality, imageFormat, webpackBundle, browser, puppeteerInstance, dumpBrowserLogs, onError, inputProps, envVariables, output, frame, overwrite, browserExecutable, }: {\n    composition: TCompMetadata;\n    output: string;\n    webpackBundle: string;\n    frame?: number | undefined;\n    inputProps?: unknown;\n    imageFormat?: "png" | "jpeg" | undefined;\n    quality?: number | undefined;\n    ... 6 more ...;\n    browserExecutable?: BrowserExecutable | undefined;\n}): Promise<...>\nimport renderStill'},"renderStill")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) composition: TCompMetadata"},"composition"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) webpackBundle: string"},"webpackBundle")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const bundleLocation: string"},"bundleLocation"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) output: string"},"output")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'/tmp/still.png'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) inputProps?: unknown"},"inputProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) custom: string"},"custom")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'data'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"})"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) renderStill({ composition, quality, imageFormat, webpackBundle, browser, puppeteerInstance, dumpBrowserLogs, onError, inputProps, envVariables, output, frame, overwrite, browserExecutable, }: {\n    composition: TCompMetadata;\n    output: string;\n    webpackBundle: string;\n    frame?: number | undefined;\n    inputProps?: unknown;\n    imageFormat?: "png" | "jpeg" | undefined;\n    quality?: number | undefined;\n    ... 6 more ...;\n    browserExecutable?: BrowserExecutable | undefined;\n}): Promise<...>\nimport renderStill'},"renderStill"),"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) composition: TCompMetadata"},"composition"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) webpackBundle: string"},"webpackBundle")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const bundleLocation: string"},"bundleLocation"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) output: string"},"output")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'/tmp/still.png'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) inputProps?: unknown"},"inputProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) custom: string"},"custom")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'data'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  }")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"})")))))),(0,o.mdx)("h2",{id:"arguments"},"Arguments"),(0,o.mdx)("p",null,"Takes an object with the following properties:"),(0,o.mdx)("h3",{id:"composition"},(0,o.mdx)("inlineCode",{parentName:"h3"},"composition")),(0,o.mdx)("p",null,"A video composition object, consisting of ",(0,o.mdx)("inlineCode",{parentName:"p"},"id"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"height"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"width"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"durationInFrames")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"fps"),". Use ",(0,o.mdx)("a",{parentName:"p",href:"/docs/get-compositions"},(0,o.mdx)("inlineCode",{parentName:"a"},"getCompositions()"))," to get a list of available video configs."),(0,o.mdx)("h3",{id:"webpackbundle"},(0,o.mdx)("inlineCode",{parentName:"h3"},"webpackBundle")),(0,o.mdx)("p",null,"The absolute location of your webpack bundle. Use ",(0,o.mdx)("a",{parentName:"p",href:"/docs/bundle"},(0,o.mdx)("inlineCode",{parentName:"a"},"bundle()"))," to bundle your project programmatically."),(0,o.mdx)("h3",{id:"output"},(0,o.mdx)("inlineCode",{parentName:"h3"},"output")),(0,o.mdx)("p",null,"An absolute path to where the frame should be rendered to."),(0,o.mdx)("h3",{id:"inputprops"},(0,o.mdx)("inlineCode",{parentName:"h3"},"inputProps?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/parametrized-rendering"},"Custom props which will be passed to the component.")," Useful for rendering videos with dynamic content. Can be an object of any shape."),(0,o.mdx)("h3",{id:"frame"},(0,o.mdx)("inlineCode",{parentName:"h3"},"frame?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional - default: 0")),(0,o.mdx)("p",null,"Which frame should be rendered based on its number."),(0,o.mdx)("h3",{id:"imageformat"},(0,o.mdx)("inlineCode",{parentName:"h3"},"imageFormat?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},'optional - default: "png"')),(0,o.mdx)("p",null,"Which output format the image should have, either ",(0,o.mdx)("inlineCode",{parentName:"p"},"png")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"jpeg"),"."),(0,o.mdx)("h3",{id:"quality"},(0,o.mdx)("inlineCode",{parentName:"h3"},"quality?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional - default: ",(0,o.mdx)("inlineCode",{parentName:"em"},"undefined"))),(0,o.mdx)("p",null,"Sets the JPEG quality - must be an integer between 0 and 100 and can only be passed if ",(0,o.mdx)("inlineCode",{parentName:"p"},"imageFormat")," is set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"jpeg"),"."),(0,o.mdx)("h3",{id:"puppeteerinstance"},(0,o.mdx)("inlineCode",{parentName:"h3"},"puppeteerInstance?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional - default ",(0,o.mdx)("inlineCode",{parentName:"em"},"null"))),(0,o.mdx)("p",null,"An already open Puppeteer ",(0,o.mdx)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=main&show=api-class-browser"},(0,o.mdx)("inlineCode",{parentName:"a"},"Browser"))," instance. Reusing a browser across multiple function calls can speed up the rendering process. You are responsible for opening and closing the browser yourself. If you don't specify this option, a new browser will be opened and closed at the end."),(0,o.mdx)("h3",{id:"envvariables"},(0,o.mdx)("inlineCode",{parentName:"h3"},"envVariables?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional - default ",(0,o.mdx)("inlineCode",{parentName:"em"},"{}"))),(0,o.mdx)("p",null,"An object containing key-value pairs of environment variables which will be injected into your Remotion project and which can be accessed by reading the global ",(0,o.mdx)("inlineCode",{parentName:"p"},"process.env")," object."),(0,o.mdx)("h3",{id:"dumpbrowserlogs"},(0,o.mdx)("inlineCode",{parentName:"h3"},"dumpBrowserLogs?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional - default ",(0,o.mdx)("inlineCode",{parentName:"em"},"false"))),(0,o.mdx)("p",null,"A boolean value deciding whether Puppeteer logs should be printed to the console, useful for debugging only."),(0,o.mdx)("h3",{id:"onerror"},(0,o.mdx)("inlineCode",{parentName:"h3"},"onError?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional")),(0,o.mdx)("p",null,"Allows you to react to an exception thrown in your React code. The callback has an argument which is the error."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const renderStill: (options: Partial<Parameters<typeof rs>[0]>) => void"},"renderStill")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// ... other arguments")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) onError?: ((err: Error) => void) | undefined"},"onError")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," (",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(parameter) err: Error"},"err")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"interface Error"},"Error")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,o.mdx)("span",{parentName:"div",style:{color:"#C2C3C5"}},"// Handle error here")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"})"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const renderStill: (options: Partial<Parameters<typeof rs>[0]>) => void"},"renderStill"),"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// ... other arguments")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) onError?: ((err: Error) => void) | undefined"},"onError")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," (",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(parameter) err: Error"},"err")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"interface Error"},"Error"),") "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"=>"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    "),(0,o.mdx)("span",{parentName:"div",style:{color:"#4E5761"}},"// Handle error here")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  }")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"})")))))),(0,o.mdx)("h3",{id:"overwrite"},(0,o.mdx)("inlineCode",{parentName:"h3"},"overwrite?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional - default ",(0,o.mdx)("inlineCode",{parentName:"em"},"true"))),(0,o.mdx)("p",null,"Whether the file should be overwritten if the output already exists."),(0,o.mdx)("h3",{id:"browserexecutable"},(0,o.mdx)("inlineCode",{parentName:"h3"},"browserExecutable?")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"optional, available from v2.3.1")),(0,o.mdx)("p",null,"A string defining the absolute path on disk of the browser executable that should be used. By default Remotion will try to detect it automatically and download one if none is available. If ",(0,o.mdx)("inlineCode",{parentName:"p"},"puppeteerInstance")," is defined, it will take precedence over ",(0,o.mdx)("inlineCode",{parentName:"p"},"browserExecutable"),"."),(0,o.mdx)("h2",{id:"return-value"},"Return value"),(0,o.mdx)("p",null,"A promise with no value. If the render succeeded, the still has been saved to ",(0,o.mdx)("inlineCode",{parentName:"p"},"output"),". If the render failed, the promise rejects."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/bundle"},"bundle()")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/ssr"},"Server-Side rendering")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/get-compositions"},"getCompositions()")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/render-frames"},"renderFrames()"))))}c.isMDXComponent=!0}}]);