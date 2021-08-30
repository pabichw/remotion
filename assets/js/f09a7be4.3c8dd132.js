(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1383],{3905:function(e,n,a){"use strict";a.r(n),a.d(n,{MDXContext:function(){return m},MDXProvider:function(){return p},mdx:function(){return x},useMDXComponents:function(){return c},withMDXComponents:function(){return l}});var r=a(2784);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m=r.createContext({}),l=function(e){return function(n){var a=c(n.components);return r.createElement(e,o({},n,{components:a}))}},c=function(e){var n=r.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},p=function(e){var n=c(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},N=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=c(a),p=t,N=l["".concat(i,".").concat(p)]||l[p]||u[p]||o;return a?r.createElement(N,d(d({ref:n},m),{},{components:a})):r.createElement(N,d({ref:n},m))}));function x(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=N;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:t,i[1]=d;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},47491:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return l},default:function(){return p}});var r=a(22122),t=a(19756),o=(a(2784),a(3905)),i=["components"],d={id:"2-0-migration",sidebar_title:"v2.0 Migration",title:"v2.0 Breaking changes"},s=void 0,m={unversionedId:"2-0-migration",id:"2-0-migration",isDocsHomePage:!1,title:"v2.0 Breaking changes",description:"The following is a list of breaking changes in Remotion 2.0, as a reference for projects wanting to upgrade.",source:"@site/docs/2-0-migration.md",sourceDirName:".",slug:"/2-0-migration",permalink:"/docs/2-0-migration",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/2-0-migration.md",tags:[],version:"current",frontMatter:{id:"2-0-migration",sidebar_title:"v2.0 Migration",title:"v2.0 Breaking changes"},sidebar:"someSidebar",previous:{title:"Flickering",permalink:"/docs/flickering"},next:{title:"License & Pricing",permalink:"/docs/license"}},l=[{value:"Sequences are 1 frame shorter",id:"sequences-are-1-frame-shorter",children:[]},{value:"Node.JS API changes",id:"nodejs-api-changes",children:[]},{value:"<code>--overwrite</code> is now default",id:"--overwrite-is-now-default",children:[]},{value:"Webpack now uses ESBuild instead of Babel",id:"webpack-now-uses-esbuild-instead-of-babel",children:[]},{value:"<code>react-dom</code> is a peer dependency",id:"react-dom-is-a-peer-dependency",children:[]},{value:"Upgrade to version 2.0",id:"upgrade-to-version-20",children:[]}],c={toc:l};function p(e){var n=e.components,a=(0,t.default)(e,i);return(0,o.mdx)("wrapper",(0,r.default)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The following is a list of breaking changes in Remotion 2.0, as a reference for projects wanting to upgrade."),(0,o.mdx)("h2",{id:"sequences-are-1-frame-shorter"},"Sequences are 1 frame shorter"),(0,o.mdx)("p",null,"Because of a mistake in v1, sequences were 1 frame too long. The new behavior sees each composition be 1 frame shorter, but be consistent with the duration of compositions."),(0,o.mdx)("p",null,"The behavior of sequences is now the following, as explained by an example: If ",(0,o.mdx)("inlineCode",{parentName:"p"},"durationInFrames")," is 60 and ",(0,o.mdx)("inlineCode",{parentName:"p"},"from")," is 0, the sequence goes from frame 0 to 59 (60 frames in total), same as a composition with the same duration. In versions 1.x of Remotion, a sequence with the same attributes would go from frame 0 to 60 (61 frames in total)."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Upgrade path"),": Check your sequence lengths and if necessary, increase the duration by 1 frame."),(0,o.mdx)("h2",{id:"nodejs-api-changes"},"Node.JS API changes"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"userProps")," option of ",(0,o.mdx)("inlineCode",{parentName:"li"},"renderFrames")," has been renamed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"inputProps"),"."),(0,o.mdx)("li",{parentName:"ul"},"You now need to pass ",(0,o.mdx)("inlineCode",{parentName:"li"},"assetsInfo")," to ",(0,o.mdx)("inlineCode",{parentName:"li"},"stitchFramesToVideo")," if you want your video to have sound. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"assetsInfo")," object will be returned by ",(0,o.mdx)("inlineCode",{parentName:"li"},"renderFrames()"),".")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Upgrade path"),": See the updated examples on the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/ssr"},"SSR page")," and update your program accordingly."),(0,o.mdx)("h2",{id:"--overwrite-is-now-default"},(0,o.mdx)("inlineCode",{parentName:"h2"},"--overwrite")," is now default"),(0,o.mdx)("p",null,"If an output already exists, Remotion will overwrite it without asking now, ",(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setoverwriteoutput"},"unless you disable this behavior"),"."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Upgrade path"),": Do nothing or adjust the setting in the config file if you like."),(0,o.mdx)("h2",{id:"webpack-now-uses-esbuild-instead-of-babel"},"Webpack now uses ESBuild instead of Babel"),(0,o.mdx)("p",null,"Hopefully you will not notice a difference besides it being much faster. There is a way ",(0,o.mdx)("a",{parentName:"p",href:"/docs/legacy-babel"},"to go back to Babel, you can read about it here")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Upgrade path"),": Do nothing - should something break, use the legacy Babel plugin and file an issue."),(0,o.mdx)("h2",{id:"react-dom-is-a-peer-dependency"},(0,o.mdx)("inlineCode",{parentName:"h2"},"react-dom")," is a peer dependency"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"react-dom")," is not anymore pre-installed, so you need to install manually if you upgrade."),(0,o.mdx)("h2",{id:"upgrade-to-version-20"},"Upgrade to version 2.0"),(0,o.mdx)("p",null,"Upgrade ",(0,o.mdx)("strong",{parentName:"p"},"all"),' dependencies containing "remotion" in your package.json to version ',(0,o.mdx)("inlineCode",{parentName:"p"},"^2.0.0"),"."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"diff"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'-"@remotion/bundler": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'-"@remotion/cli": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'-"@remotion/eslint-config": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'-"@remotion/renderer": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+"@remotion/bundler": "^2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+"@remotion/cli": "^2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+"@remotion/eslint-config": "2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+"@remotion/renderer": "^2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"@types/express": "^4.17.9",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"@types/react": "^17.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"eslint": "^7.15.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"express": "^4.17.1",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"prettier": "^2.2.1",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"prettier-plugin-organize-imports": "^1.1.1",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'"react": "^17.0.2",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+"react-dom": "^17.0.2",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'-"remotion": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},'+"remotion": "^2.0.0",'))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"diff"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'-"@remotion/bundler": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'-"@remotion/cli": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'-"@remotion/eslint-config": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'-"@remotion/renderer": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+"@remotion/bundler": "^2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+"@remotion/cli": "^2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+"@remotion/eslint-config": "2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+"@remotion/renderer": "^2.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"@types/express": "^4.17.9",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"@types/react": "^17.0.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"eslint": "^7.15.0",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"express": "^4.17.1",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"prettier": "^2.2.1",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"prettier-plugin-organize-imports": "^1.1.1",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'"react": "^17.0.2",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+"react-dom": "^17.0.2",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'-"remotion": "^1.5.4",')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},'+"remotion": "^2.0.0",')))))),(0,o.mdx)("p",null,"Run ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm install")," afterwards."))}p.isMDXComponent=!0}}]);