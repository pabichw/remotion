(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{27350:function(e,t,a){"use strict";var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(2784)),o=l(a(41217)),r=l(a(2193)),i=l(a(45125)),s=l(a(82581)),d=a(86700);var u=function(e){var t,a=e.content,l=e.sidebar,u=a.frontMatter,m=a.assets,c=a.metadata,p=c.title,f=c.description,g=c.nextItem,v=c.prevItem,b=c.date,_=c.tags,E=c.authors,h=u.hide_table_of_contents,N=u.keywords,P=null!=(t=m.image)?t:u.image;return n.default.createElement(r.default,{wrapperClassName:d.ThemeClassNames.wrapper.blogPages,pageClassName:d.ThemeClassNames.page.blogPostPage,sidebar:l,toc:!h&&a.toc?a.toc:void 0},n.default.createElement(o.default,{title:p,description:f,keywords:N,image:P},n.default.createElement("meta",{property:"og:type",content:"article"}),n.default.createElement("meta",{property:"article:published_time",content:b}),E.some((function(e){return e.url}))&&n.default.createElement("meta",{property:"article:author",content:E.map((function(e){return e.url})).filter(Boolean).join(",")}),_.length>0&&n.default.createElement("meta",{property:"article:tag",content:_.map((function(e){return e.label})).join(",")})),n.default.createElement(i.default,{frontMatter:u,assets:m,metadata:c,isBlogPostPage:!0},n.default.createElement(a,null)),(g||v)&&n.default.createElement(s.default,{nextItem:g,prevItem:v}))};t.default=u},82581:function(e,t,a){"use strict";var l=a(20862).default,n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(2784)),r=l(a(29052)),i=n(a(33692));var s=function(e){var t=e.nextItem,a=e.prevItem;return o.default.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},o.default.createElement("div",{className:"pagination-nav__item"},a&&o.default.createElement(i.default,{className:"pagination-nav__link",to:a.permalink},o.default.createElement("div",{className:"pagination-nav__sublabel"},o.default.createElement(r.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),o.default.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),o.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&o.default.createElement(i.default,{className:"pagination-nav__link",to:t.permalink},o.default.createElement("div",{className:"pagination-nav__sublabel"},o.default.createElement(r.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),o.default.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=s}}]);