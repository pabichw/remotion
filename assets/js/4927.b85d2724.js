(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4927],{3905:function(e,t,a){"use strict";a.r(t),a.d(t,{MDXContext:function(){return c},MDXProvider:function(){return f},mdx:function(){return p},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=a(2784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),d=function(e){return function(t){var a=s(t.components);return r.createElement(e,n({},t,{components:a}))}},s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),f=l,v=d["".concat(u,".").concat(f)]||d[f]||m[f]||n;return a?r.createElement(v,i(i({ref:t},c),{},{components:a})):r.createElement(v,i({ref:t},c))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,u=new Array(n);u[0]=v;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var c=2;c<n;c++)u[c]=a[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},2193:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(19756)),n=r(a(2784)),u=r(a(86010)),i=r(a(98532)),o=r(a(61238)),c=r(a(5176)),d=["sidebar","toc","children"];var s=function(e){var t=e.sidebar,a=e.toc,r=e.children,s=(0,l.default)(e,d),f=t&&t.items.length>0;return n.default.createElement(i.default,s,n.default.createElement("div",{className:"container margin-vert--lg"},n.default.createElement("div",{className:"row"},f&&n.default.createElement("aside",{className:"col col--3"},n.default.createElement(o.default,{sidebar:t})),n.default.createElement("main",{className:(0,u.default)("col",{"col--7":f,"col--9 col--offset-1":!f}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&n.default.createElement("div",{className:"col col--2"},n.default.createElement(c.default,{toc:a})))))};t.default=s},21746:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(2784)),n=r(a(33692)),u=r(a(11272));var i=function(e){var t=e.author,a=t.name,r=t.title,i=t.url,o=t.imageURL;return l.default.createElement("div",{className:"avatar margin-bottom--sm"},o&&l.default.createElement(n.default,{className:"avatar__photo-link avatar__photo",href:i},l.default.createElement("img",{className:u.default.image,src:o,alt:a})),a&&l.default.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.default.createElement("div",{className:"avatar__name"},l.default.createElement(n.default,{href:i,itemProp:"url"},l.default.createElement("span",{itemProp:"name"},a))),r&&l.default.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))};t.default=i},47070:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.authors,a=e.assets;if(0===t.length)return l.default.createElement(l.default.Fragment,null);return l.default.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return l.default.createElement("div",{className:(0,n.default)("col col--6",i.default.authorCol),key:t},l.default.createElement(u.default,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))};var l=r(a(2784)),n=r(a(86010)),u=r(a(21746)),i=r(a(29364))},45125:function(e,t,a){"use strict";var r=a(20862).default,l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),u=l(a(86010)),i=a(3905),o=r(a(29052)),c=l(a(33692)),d=a(44996),s=a(86700),f=l(a(47637)),m=l(a(14992)),v=l(a(46327)),p=l(a(79834)),h=l(a(47070));var g=function(e){var t,a,r,l,g=(r=(0,s.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,o.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,d.useBaseUrlUtils)().withBaseUrl,E=e.children,y=e.frontMatter,_=e.assets,O=e.metadata,P=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,T=O.date,C=O.formattedDate,j=O.permalink,M=O.tags,w=O.readingTime,x=O.title,L=O.editUrl,I=O.authors,S=null!=(t=_.image)?t:y.image;return n.default.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=k?"h1":"h2",n.default.createElement("header",null,n.default.createElement(l,{className:v.default.blogPostTitle,itemProp:"headline"},k?x:n.default.createElement(c.default,{itemProp:"url",to:j},x)),n.default.createElement("div",{className:(0,u.default)(v.default.blogPostData,"margin-vert--md")},n.default.createElement("time",{dateTime:T,itemProp:"datePublished"},C),void 0!==w&&n.default.createElement(n.default.Fragment,null," \xb7 ",g(w))),n.default.createElement(h.default,{authors:I,assets:_}))),S&&n.default.createElement("meta",{itemProp:"image",content:b(S,{absolute:!0})}),n.default.createElement("div",{className:"markdown",itemProp:"articleBody"},n.default.createElement(i.MDXProvider,{components:f.default},E)),(M.length>0||P)&&n.default.createElement("footer",{className:(0,u.default)("row docusaurus-mt-lg",(a={},a[v.default.blogPostDetailsFull]=k,a))},M.length>0&&n.default.createElement("div",{className:(0,u.default)("col",{"col--9":!k})},n.default.createElement(p.default,{tags:M})),k&&L&&n.default.createElement("div",{className:"col margin-top--sm"},n.default.createElement(m.default,{editUrl:L})),!k&&P&&n.default.createElement("div",{className:"col col--3 text--right"},n.default.createElement(c.default,{to:O.permalink,"aria-label":"Read more about "+x},n.default.createElement("b",null,n.default.createElement(o.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))};t.default=g},61238:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return l.default.createElement("nav",{className:(0,n.default)(i.default.sidebar,"thin-scrollbar"),"aria-label":(0,o.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.default.createElement("div",{className:(0,n.default)(i.default.sidebarItemTitle,"margin-bottom--md")},t.title),l.default.createElement("ul",{className:i.default.sidebarItemList},t.items.map((function(e){return l.default.createElement("li",{key:e.permalink,className:i.default.sidebarItem},l.default.createElement(u.default,{isNavLink:!0,to:e.permalink,className:i.default.sidebarItemLink,activeClassName:i.default.sidebarItemLinkActive},e.title))}))))};var l=r(a(2784)),n=r(a(86010)),u=r(a(33692)),i=r(a(60766)),o=a(29052)},28022:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=Object.assign({},e);return n.default.createElement(i.Details,(0,l.default)({},t,{className:(0,u.default)("alert alert--info",o.default.details,t.className)}))};var l=r(a(22122)),n=r(a(2784)),u=r(a(86010)),i=a(86700),o=r(a(31378))},14992:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return l.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.default.createElement(u.default,null),l.default.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var l=r(a(2784)),n=r(a(29052)),u=r(a(18558))},96638:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MainHeading=void 0;var l=r(a(19756)),n=r(a(22122)),u=r(a(2784)),i=r(a(86010)),o=a(29052),c=a(86700);a(38133);var d=r(a(38867)),s=["id"],f=function(e){var t=Object.assign({},e);return u.default.createElement("header",null,u.default.createElement("h1",(0,n.default)({},t,{id:void 0}),t.children))};t.MainHeading=f;var m=function(e){return"h1"===e?f:(t=e,function(e){var a,r=e.id,n=(0,l.default)(e,s),f=(0,c.useThemeConfig)().navbar.hideOnScroll;return r?u.default.createElement(t,n,u.default.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.default)("anchor","anchor__"+t,(a={},a[d.default.anchorWithHideOnScrollNavbar]=f,a[d.default.anchorWithStickyNavbar]=!f,a)),id:r}),n.children,u.default.createElement("a",{className:"hash-link",href:"#"+r,title:(0,o.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):u.default.createElement(t,n)});var t};t.default=m},18558:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(22122)),n=r(a(19756)),u=r(a(2784)),i=r(a(86010)),o=r(a(21321)),c=["className"],d=function(e){var t=e.className,a=(0,n.default)(e,c);return u.default.createElement("svg",(0,l.default)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(o.default.iconEdit,t),"aria-hidden":"true"},a),u.default.createElement("g",null,u.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=d},73491:function(e,t,a){"use strict";var r=a(95318).default,l=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(22122)),u=r(a(19756)),i=l(a(2784)),o=r(a(35742)),c=r(a(33692)),d=r(a(48995)),s=r(a(96638)),f=r(a(28022)),m=["mdxType","originalType"];var v={head:function(e){var t=i.default.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,u.default)(r,m));return i.default.createElement(e.props.originalType,l)}return e}(e)}));return i.default.createElement(o.default,e,t)},code:function(e){var t=e.children;return(0,i.isValidElement)(t)?t:t.includes("\n")?i.default.createElement(d.default,e):i.default.createElement("code",e)},a:function(e){return i.default.createElement(c.default,e)},pre:function(e){var t,a=e.children;return(0,i.isValidElement)(a)&&(0,i.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:i.default.createElement(d.default,(0,i.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=i.default.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=i.default.createElement(i.default.Fragment,null,t.filter((function(e){return e!==a})));return i.default.createElement(f.default,(0,n.default)({},e,{summary:a}),r)},h1:(0,s.default)("h1"),h2:(0,s.default)("h2"),h3:(0,s.default)("h3"),h4:(0,s.default)("h4"),h5:(0,s.default)("h5"),h6:(0,s.default)("h6")};t.default=v},5176:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.TOCHeadings=d,t.default=void 0;var l=r(a(2784)),n=r(a(86010)),u=r(a(45035)),i=r(a(38018)),o="table-of-contents__link",c={linkClassName:o,linkActiveClassName:"table-of-contents__link--active"};function d(e){var t=e.toc,a=e.isChild;return t.length?l.default.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.default.createElement("li",{key:e.id},l.default.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),l.default.createElement(d,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return(0,u.default)(c),l.default.createElement("div",{className:(0,n.default)(i.default.tableOfContents,"thin-scrollbar")},l.default.createElement(d,{toc:t}))};t.default=s},74801:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(2784)),n=r(a(86010)),u=r(a(33692)),i=r(a(89302));var o=function(e){var t,a=e.permalink,r=e.name,o=e.count;return l.default.createElement(u.default,{href:a,className:(0,n.default)(i.default.tag,(t={},t[i.default.tagRegular]=!o,t[i.default.tagWithCount]=o,t))},r,o&&l.default.createElement("span",null,o))};t.default=o},79834:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.tags;return l.default.createElement(l.default.Fragment,null,l.default.createElement("b",null,l.default.createElement(u.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.default.createElement("ul",{className:(0,n.default)(o.default.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.default.createElement("li",{key:a,className:o.default.tag},l.default.createElement(i.default,{name:t,permalink:a}))}))))};var l=r(a(2784)),n=r(a(86010)),u=r(a(29052)),i=r(a(74801)),o=r(a(95704))},45035:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(2784),l=a(86700);function n(e){var t=e.getBoundingClientRect();return t.top===t.bottom?n(e.parentNode):t}function u(e){var t,a=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),l=r.find((function(e){return n(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(n(l))?l:null!=(t=r[r.indexOf(l)-1])?t:null:r[r.length-1]}function i(){var e=(0,r.useRef)(0),t=(0,l.useThemeConfig)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var o=function(e){var t=(0,r.useRef)(void 0),a=i();(0,r.useEffect)((function(){var r=e.linkClassName,l=e.linkActiveClassName;function n(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),n=u({anchorTopOffset:a.current}),i=e.find((function(e){return n&&n.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===i)}))}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}),[e,a])};t.default=o},48995:function(e,t,a){"use strict";var r=a(95318).default,l=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(22122)),u=r(a(19756));a(83283);var i=l(a(2784)),o=l(a(29052)),c=["children"];var d=function(e){var t=e.children,a=(0,u.default)(e,c),r=(0,i.useRef)(null),l=(0,i.useState)(!1),d=l[0],s=l[1];return i.default.createElement("pre",(0,n.default)({},a,{ref:r}),t,i.default.createElement("button",{type:"button","aria-label":(0,o.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:"copy-button",onClick:function(){r.current&&function(e,t){var a=(void 0===t?{}:t).target,r=void 0===a?document.body:a,l=document.createElement("textarea"),n=document.activeElement;l.value=e,l.setAttribute("readonly",""),l.style.contain="strict",l.style.position="absolute",l.style.left="-9999px",l.style.fontSize="12pt";var u=document.getSelection(),i=!1;u.rangeCount>0&&(i=u.getRangeAt(0)),r.append(l),l.select(),l.selectionStart=0,l.selectionEnd=e.length;var o=!1;try{o=document.execCommand("copy")}catch(c){}l.remove(),i&&(u.removeAllRanges(),u.addRange(i)),n&&n.focus()}(Array.from(r.current.querySelectorAll("code div.line")).map((function(e){return e.textContent})).join("\n")),s(!0),setTimeout((function(){return s(!1)}),2e3)}},d?i.default.createElement(o.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):i.default.createElement(o.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy")))};t.default=d},47637:function(e,t,a){"use strict";var r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(2784)),n=r(a(48995)),u=r(a(73491)),i=Object.assign({},u.default,{div:function(e){return"shiki-twoslash-fragment"===e.className?l.default.createElement(l.default.Fragment,null,e.children):l.default.createElement("div",e)},pre:function(e){return l.default.createElement(n.default,e)},code:function(e){return l.default.createElement("code",e)}});t.default=i},38133:function(e,t,a){"use strict";a.r(t)},83283:function(e,t,a){"use strict";a.r(t)},11272:function(e,t,a){"use strict";a.r(t),t.default={image:"image_1yU8"}},29364:function(e,t,a){"use strict";a.r(t),t.default={authorCol:"authorCol_1R69"}},46327:function(e,t,a){"use strict";a.r(t),t.default={blogPostTitle:"blogPostTitle_GeHD",blogPostData:"blogPostData_291c",blogPostDetailsFull:"blogPostDetailsFull_3kfx"}},60766:function(e,t,a){"use strict";a.r(t),t.default={sidebar:"sidebar_2ahu",sidebarItemTitle:"sidebarItemTitle_2hhb",sidebarItemList:"sidebarItemList_2xAf",sidebarItem:"sidebarItem_2UVv",sidebarItemLink:"sidebarItemLink_1RT6",sidebarItemLinkActive:"sidebarItemLinkActive_12pM"}},31378:function(e,t,a){"use strict";a.r(t),t.default={details:"details_1VDD"}},38867:function(e,t,a){"use strict";a.r(t),t.default={anchorWithStickyNavbar:"anchorWithStickyNavbar_31ik",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_3R7-"}},21321:function(e,t,a){"use strict";a.r(t),t.default={iconEdit:"iconEdit_2_ui"}},38018:function(e,t,a){"use strict";a.r(t),t.default={tableOfContents:"tableOfContents_35-E",docItemContainer:"docItemContainer_gpai"}},89302:function(e,t,a){"use strict";a.r(t),t.default={tag:"tag_1Okp",tagRegular:"tagRegular_3MiF",tagWithCount:"tagWithCount_1HU1"}},95704:function(e,t,a){"use strict";a.r(t),t.default={tags:"tags_2ga9",tag:"tag_11ep"}}}]);