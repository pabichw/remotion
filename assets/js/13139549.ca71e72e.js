(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3177],{3905:function(e,t,a){"use strict";a.r(t),a.d(t,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){return function(t){var a=p(t.components);return n.createElement(e,i({},t,{components:a}))}},p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(r,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,d(d({ref:t},s),{},{components:a})):n.createElement(h,d({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},81534:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return m},toc:function(){return p},default:function(){return c}});var n=a(22122),o=a(19756),i=(a(2784),a(3905)),r=["components"],d={slug:"2-0",title:"Remotion 2.0",author:"Jonny Burger",author_title:"Indie Hacker",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"},l=void 0,s={permalink:"/blog/2-0",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-04-15-remotion-2-0.md",source:"@site/blog/2021-04-15-remotion-2-0.md",title:"Remotion 2.0",description:"This is our biggest and best release so far - today we are unloading a lot of awesome, highly requested features!",date:"2021-04-15T00:00:00.000Z",formattedDate:"April 15, 2021",tags:[],readingTime:6.89,truncated:!1,authors:[{name:"Jonny Burger",title:"Indie Hacker",url:"https://github.com/JonnyBurger",imageURL:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4"}],prevItem:{title:"Remotion 2.1",permalink:"/blog/2-1"},nextItem:{title:"Announcing pricing for company licenses",permalink:"/blog/company-licenses"}},m={authorsImageUrls:[void 0]},p=[{value:"Audio support",id:"audio-support",children:[]},{value:"Audio visualization",id:"audio-visualization",children:[]},{value:"Export as MP3, AAC, WAV",id:"export-as-mp3-aac-wav",children:[]},{value:"<code>@remotion/media-utils</code> package",id:"remotionmedia-utils-package",children:[]},{value:"Rich Timeline (experimental)",id:"rich-timeline-experimental",children:[]},{value:"ESBuild loader",id:"esbuild-loader",children:[]},{value:"Webpack caching",id:"webpack-caching",children:[]},{value:"Partial video rendering + Stills",id:"partial-video-rendering--stills",children:[]},{value:"<code>@remotion/gif</code> component",id:"remotiongif-component",children:[]},{value:"Resizable editor panels",id:"resizable-editor-panels",children:[]},{value:"interpolate()",id:"interpolate",children:[]},{value:"170+ tests added",id:"170-tests-added",children:[]},{value:"<code>&lt;Video/&gt;</code> and <code>&lt;Audio/&gt;</code> have <code>startFrom</code> and <code>endAt</code> props",id:"video-and-audio-have-startfrom-and-endat-props",children:[]},{value:"Fixed: Frame seeking",id:"fixed-frame-seeking",children:[]},{value:"Fixed: Timeouts while importing large videos",id:"fixed-timeouts-while-importing-large-videos",children:[]},{value:"Breaking changes and upgrade",id:"breaking-changes-and-upgrade",children:[]},{value:"The future",id:"the-future",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,o.default)(e,r);return(0,i.mdx)("wrapper",(0,n.default)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This is our biggest and best release so far - today we are unloading a lot of awesome, highly requested features!"),(0,i.mdx)("h2",{id:"audio-support"},"Audio support"),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/audio.mp4",type:"video/mp4"}))),(0,i.mdx)("p",null,"We are happy to ship audio support with a flexible API!"),(0,i.mdx)("p",null,"You can ",(0,i.mdx)("a",{parentName:"p",href:"/docs/using-audio"},"import one or multiple audio tracks into your project, cut, trim and align them in your composition"),". The volume can be controlled for the entirety of a track, or you can control it frame by frame to create fade effects and much more. Apply your React mindset - Remotion doesn't care how you render the audio tag, just that it's there. The mechanic of how we tell FFMPEG to mix the audio just like you hear it in the browser preview is really complex and was challenging to build - we are very proud of the outcome!"),(0,i.mdx)("h2",{id:"audio-visualization"},"Audio visualization"),(0,i.mdx)("p",null,"With newly introduced audio visualization APIs, you can make your visuals react to the frequency of the audio."),(0,i.mdx)("p",null,"What you need are the new ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,i.mdx)("inlineCode",{parentName:"a"},"getAudioData()"))," and ",(0,i.mdx)("a",{parentName:"p",href:"/docs/visualize-audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))," APIs that have been published ",(0,i.mdx)("a",{parentName:"p",href:"/blog/#remotionmedia-utils-package"},"in it's own package"),"."),(0,i.mdx)("p",null,"Read more about ",(0,i.mdx)("a",{parentName:"p",href:"/docs/audio-visualization"},"audio visualization")," in the docs or ",(0,i.mdx)("a",{parentName:"p",href:"https://twitter.com/JNYBGR/status/1378444074634592262"},"watch a sample video")," (the source can be found ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/yuta0801/remotion/blob/1103092f4902fb11f41877a05398dab6ce7203e7/packages/example/src/AudioVisualization/index.tsx"},"here"),")."),(0,i.mdx)("h2",{id:"export-as-mp3-aac-wav"},"Export as MP3, AAC, WAV"),(0,i.mdx)("p",null,"You can now also completely omit the video from the output and only emit an audio file. Yes, Remotion can also be used as an audio editing program! Pass ",(0,i.mdx)("inlineCode",{parentName:"p"},"mp3"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"aac")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"wav")," as a codec ",(0,i.mdx)("a",{parentName:"p",href:"/docs/cli#flags"},"using the ",(0,i.mdx)("inlineCode",{parentName:"a"},"--codec")," flag")," or ",(0,i.mdx)("a",{parentName:"p",href:"/docs/config#setcodec"},"in your config file"),"."),(0,i.mdx)("h2",{id:"remotionmedia-utils-package"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@remotion/media-utils")," package"),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/mediautils.mp4",type:"video/mp4"}))),(0,i.mdx)("p",null,"This is a new helper package which includes functions useful for dealing with audio. Besides audio visualization, you can also for example measure the duration of an audio or video source, which is really useful for making a composition duration dynamic. The functions included are ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-audio-data"},(0,i.mdx)("inlineCode",{parentName:"a"},"getAudioData()")),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-audio-duration"},(0,i.mdx)("inlineCode",{parentName:"a"},"getAudioDuration()")),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-video-metadata"},(0,i.mdx)("inlineCode",{parentName:"a"},"getVideoMetadata()")),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/get-waveform-portion"},(0,i.mdx)("inlineCode",{parentName:"a"},"getWaveformPortion()")),", ",(0,i.mdx)("a",{parentName:"p",href:"/docs/visualize-audio"},(0,i.mdx)("inlineCode",{parentName:"a"},"visualizeAudio()"))," and ",(0,i.mdx)("a",{parentName:"p",href:"/docs/use-audio-data"},(0,i.mdx)("inlineCode",{parentName:"a"},"useAudioData()")),"."),(0,i.mdx)("p",null,"All of them except the last one are completely independent from the ideas of Remotion, so they might be a great fit for your other non-Remotion projects as well! This package is MIT-licensed, so you everybody can use it without obtaining a company license."),(0,i.mdx)("h2",{id:"rich-timeline-experimental"},"Rich Timeline (experimental)"),(0,i.mdx)("p",null,"With the normal timeline, you don't see the full picture of all the media that you have placed in your composition. The reason is that the visualization you see is based on what's currently rendered at the position of your playhead."),(0,i.mdx)("p",null,"Introducing a new timeline mode: The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/timeline"},(0,i.mdx)("strong",{parentName:"a"},"rich timeline"))," will render additional frames other than the current one to gather enough information to visualize a full timeline.\nSequences which are normally not rendered because the playback head is not within the time range of the sequence, will appear because Remotion is doing an additional render at a time where the sequence is visible."),(0,i.mdx)("img",{src:"/img/timeline.png"}),(0,i.mdx)("p",null,"By default the ",(0,i.mdx)("strong",{parentName:"p"},"rich timeline")," feature is disabled, but will be enabled by default if the feedback is good. You may switch between the rich timeline and simple timeline by clicking the icon with the three lines. Try it out and let us know what you think!"),(0,i.mdx)("img",{src:"/img/timeline-toggle.png"}),(0,i.mdx)("h2",{id:"esbuild-loader"},"ESBuild loader"),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/esbuild.mp4",type:"video/mp4"}))),(0,i.mdx)("p",null,"The traditional transpilation of Javascript and Typescript using ",(0,i.mdx)("inlineCode",{parentName:"p"},"babel-loader")," has been replaced by the faster ",(0,i.mdx)("inlineCode",{parentName:"p"},"esbuild-loader")," by default."),(0,i.mdx)("p",null,"This will speed up bundling by a lot - hopefully you won't notice any other differences! If you for some reason need to go back to the previous behavior, you may override the Webpack config - ",(0,i.mdx)("a",{parentName:"p",href:"/docs/legacy-babel"},"we are releasing a helper that makes it easy"),"."),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/esbuild-loader.webm",type:"video/webm"}))),(0,i.mdx)("h2",{id:"webpack-caching"},"Webpack caching"),(0,i.mdx)("p",null,"Even though transpilation is done using ESBuild now, Webpack is still being used for bundling. We rely on Webpack features such as Hot Module Replacement, asset importing, it's strong loader ecosystem and now it's caching features."),(0,i.mdx)("p",null,"When you run ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm run build")," for the first time, you will get a message that a cache is building. From the second time on, bundling will be much faster, even if you change your code. You shouldn't have to ever do it, but you can ",(0,i.mdx)("a",{parentName:"p",href:"/docs/config#setcachingenabled"},"opt out of caching"),"."),(0,i.mdx)("h2",{id:"partial-video-rendering--stills"},"Partial video rendering + Stills"),(0,i.mdx)("p",null,"Want to render partial video or a still for thumbnail? You can do that with Remotion 2.0. We introduced a new CLI flag ",(0,i.mdx)("inlineCode",{parentName:"p"},"--frames")," to render a subset or a still of a video."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"--frames=0-9")," (To select the first 10 frames) or ",(0,i.mdx)("inlineCode",{parentName:"p"},"--frames=50")," (To render a still of the 51st frame)."),(0,i.mdx)("p",null,"Learn more about the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/config#setframerange"},(0,i.mdx)("inlineCode",{parentName:"a"},"--frames"))," CLI option."),(0,i.mdx)("h2",{id:"remotiongif-component"},(0,i.mdx)("inlineCode",{parentName:"h2"},"@remotion/gif")," component"),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/gif.mp4",type:"video/mp4"}))),(0,i.mdx)("p",null,"A new GIF component released in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@remotion/gif")," package is now available. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Gif />")," component allows to load a local or remote GIF and synchronizes it with Remotions ",(0,i.mdx)("inlineCode",{parentName:"p"},"useCurrentFrame()"),". For that it parses the GIF using WebAssembly - basically it's really cool tech! Thanks a lot to ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/jeetiss"},"@jeetiss")," for contributing this new component."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/gif"},"Learn more about the GIF component here"),"."),(0,i.mdx)("h2",{id:"resizable-editor-panels"},"Resizable editor panels"),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/resizeable.mp4",type:"video/mp4"}))),(0,i.mdx)("p",null,"In the editor, you can now resize the timeline as well as the left sidebar. Thanks a lot to ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/arthurdenner"},"Arthur Denner")," for this awesome contribution!"),(0,i.mdx)("h2",{id:"interpolate"},"interpolate()"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"interpolate()")," now supports arrays with lengths bigger than 2. Really useful for a lot of scenarios - for example you can create a combined fade in/fade out transition with one line."),(0,i.mdx)("div",{className:"shiki-twoslash-fragment"},(0,i.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"opacity"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},"interpolate"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"(frame, ["),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", durationInFrames "),(0,i.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", durationInFrames], ["),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"0"),(0,i.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"])"))))),(0,i.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,i.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,i.mdx)("div",{parentName:"pre",className:"code-container"},(0,i.mdx)("code",{parentName:"div"},(0,i.mdx)("div",{parentName:"code",className:"line"},(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"const"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},"opacity"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," interpolate(frame, ["),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"0"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"10"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", durationInFrames "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"-"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"10"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", durationInFrames], ["),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"0"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},", "),(0,i.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"0"),(0,i.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"])")))))),(0,i.mdx)("h2",{id:"170-tests-added"},"170+ tests added"),(0,i.mdx)("div",null,(0,i.mdx)("video",{width:"100%",height:"100%",controls:!0,playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,i.mdx)("source",{src:"/img/tests.mp4",type:"video/mp4"}))),(0,i.mdx)("p",null,"While not strictly a new feature, this is definitely worth mentioning."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/calvin-f"},"Calvin Falter"),", ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/j0nezz"},"Jonas Brunner")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/dydent"},"Tobias Boner")," took Remotion as their project for their university seminar and contributed over 100 tests, strengthening the code and ironing out edge cases."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cnnrhill"},"@cnnr")," contributed a really cool end-to-end test that tests the video seeking of Remotion and makes sure it is frame-accurate by matching the colors in each frame."),(0,i.mdx)("p",null,"The remaining added tests are testing the tricky parts of audio rendering. Thanks to test-driven development, we've been able to catch regressions and ship really solid audio support."),(0,i.mdx)("p",null,"The bottom line: In Remotion 1.5.4 we had total 43 tests, in Remotion 2.0 we added a total of 174 tests to come out at a total of 217."),(0,i.mdx)("h2",{id:"video-and-audio-have-startfrom-and-endat-props"},(0,i.mdx)("inlineCode",{parentName:"h2"},"<Video/>")," and ",(0,i.mdx)("inlineCode",{parentName:"h2"},"<Audio/>")," have ",(0,i.mdx)("inlineCode",{parentName:"h2"},"startFrom")," and ",(0,i.mdx)("inlineCode",{parentName:"h2"},"endAt")," props"),(0,i.mdx)("p",null,"These new props make it easier to cut the start or the end of the video. This is implemented using sequences, which was also possible before, but this is a convienient shorthand."),(0,i.mdx)("h2",{id:"fixed-frame-seeking"},"Fixed: Frame seeking"),(0,i.mdx)("p",null,"In Remotion 1.x, a ",(0,i.mdx)("inlineCode",{parentName:"p"},"<Video/>")," would not always perfectly synchronize with Remotions time during render. This is now fixed and validated by tests that scan the color of the output frames - ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/remotion/issues/200"},"however not in the most efficient way"),". Help on improving it further is still welcome."),(0,i.mdx)("h2",{id:"fixed-timeouts-while-importing-large-videos"},"Fixed: Timeouts while importing large videos"),(0,i.mdx)("p",null,"Importing files into your webpack bundle that were of significant size (the problems started at around 40MB) led to slow renders and timeouts. This is now fixed by swapping out dependencies and making sure the whole stack supports the HTTP range header well. Now if you seek a video, only the necessary parts will be loaded from the filesystem rather than the whole file being read."),(0,i.mdx)("h2",{id:"breaking-changes-and-upgrade"},"Breaking changes and upgrade"),(0,i.mdx)("p",null,"We've taken this opportunity of a major release to introduce some breaking changes that we think are beneficial for an awesome future of Remotion. Please take a moment to read through the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/2-0-migration"},"2.0 Migration guide")," and see if you are affected."),(0,i.mdx)("h2",{id:"the-future"},"The future"),(0,i.mdx)("p",null,"Most of the core functionality for making videos in React is now implemented.\nThis gives us time to focus on improving all the areas around it - we are talking better documentation, developer experience, examples, abstractions on top or Remotion, improving speed and reliability of Remotion."),(0,i.mdx)("p",null,"Furthermore, we want to provide a way to embed Remotion compositions in traditional web apps and to make server-side rendering easier - stay tuned!"))}c.isMDXComponent=!0}}]);