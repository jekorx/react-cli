webpackJsonp([3],{270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(298);t.default=r.a},298:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c,u,l,s,f=n(105),p=(n.n(f),n(106)),h=n.n(p),m=n(107),y=(n.n(m),n(108)),b=n.n(y),d=n(0),g=n.n(d),v=n(9),_=n(8),w=n(1),E=n.n(w),O=n(98),j=n(109),T=n(110),R=n(104),S=n.n(R),k=n(299),P=n(300),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),N=(c=Object(v.inject)("_GV_"))(u=Object(v.observer)((s=l=function(e){function t(){var e,n,i,c;a(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.state={dataSource:new b.a.DataSource({rowHasChanged:function(e,t){return e.id!==t.id}}),name:"",pageSize:14,height:0,showBackTop:!1,refreshing:!1},i.queryData=function(){var e=i.state.name;O.a.get("user/"+e).then(function(e){var t=e.success,n=e.data;if(t){var a=i.state.dataSource,o=[{avatarUrl:n.avatar_url,createAt:n.create_at,githubUsername:n.githubUsername,loginname:n.loginname,score:n.score},{type:"recent_title",title:"\u6700\u8fd1\u521b\u5efa\u7684\u8bdd\u9898"}].concat(r(n.recent_topics),[{type:"recent_title",title:"\u6700\u8fd1\u53c2\u4e0e\u7684\u8bdd\u9898"}],r(n.recent_replies));i.setState({dataSource:a.cloneWithRows(o),refreshing:!1})}})},i.handleRefresh=function(){i.setState({refreshing:!0},i.queryData)},i.handleScroll=function(e){i.setState({showBackTop:e.target.scrollTop>200})},i.handleBackTop=function(){i.setState({showBackTop:!1},function(){i.listViewRef.scrollTo(0)})},c=n,o(i,c)}return i(t,e),q(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match.params,n=e._GV_,r=n.headerHeight,a=n.setTitle,o=t.name;a({title:"@"+o+" \u7684\u4e2a\u4eba\u4e3b\u9875"}),this.setState({name:o,height:(document.documentElement.clientHeight||document.body.clientHeight)-r},this.queryData)}},{key:"render",value:function(){var e=this,t=this.state,n=t.dataSource,r=t.height,a=t.showBackTop,o=t.refreshing,i=t.pageSize;return g.a.createElement(d.Fragment,null,g.a.createElement(b.a,{ref:function(t){e.listViewRef=t},dataSource:n,pageSize:i,style:{height:r,overflow:"auto"},onScroll:this.handleScroll,scrollEventThrottle:800,scrollRenderAheadDistance:400,pullToRefresh:g.a.createElement(h.a,{refreshing:o,onRefresh:this.handleRefresh,indicator:T.a}),renderRow:function(e,t,n){return 0===+n?g.a.createElement(k.a,{info:e}):"recent_title"===e.type?g.a.createElement("h3",{className:S.a.type},e.title):g.a.createElement(P.a,{data:e})}}),g.a.createElement(j.a,{show:a,handleClick:this.handleBackTop}))}}]),t}(d.Component),l.propTypes={_GV_:E.a.shape({setTitle:E.a.func.isRequired,headerHeight:E.a.number.isRequired}).isRequired,match:E.a.shape({params:E.a.object.isRequired}).isRequired},u=s))||u)||u;t.a=Object(_.withRouter)(N)},299:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return g});var i,c,u=n(0),l=n.n(u),s=n(1),f=n.n(s),p=n(116),h=n(27),m=n(62),y=n(104),b=n.n(y),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=(c=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),d(t,[{key:"render",value:function(){var e=this.props.info,t=e.avatarUrl,n=e.loginname,r=e.createAt,a=e.githubUsername,o=e.score;return l.a.createElement(u.Fragment,null,l.a.createElement(p.a,{name:n,avatar:t}),l.a.createElement("p",{className:b.a.text},o," \u79ef\u5206",l.a.createElement("a",{className:b.a.github,href:"https://github.com/"+a},l.a.createElement(h.a,{type:"github",className:b.a.icon}),a)),l.a.createElement("p",{className:b.a.text},"\u6ce8\u518c\u65f6\u95f4 ",Object(m.c)(r)))}}]),t}(u.PureComponent),i.propTypes={info:f.a.object.isRequired},c)},300:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return d});var i,c,u=n(0),l=n.n(u),s=n(1),f=n.n(s),p=n(8),h=n(104),m=n.n(h),y=n(62),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=(c=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),b(t,[{key:"render",value:function(){var e=this.props.data,t="/topic/"+e.id;return l.a.createElement(p.Link,{to:t,className:m.a.link},l.a.createElement("h3",{className:m.a.title},e.title),l.a.createElement("div",{className:m.a.bottom},l.a.createElement("span",{className:m.a.avatar,style:{backgroundImage:"url("+e.author.avatar_url+")"}}),l.a.createElement("div",{className:m.a.right},l.a.createElement("span",null,e.author.loginname),l.a.createElement("span",null,"\u6700\u540e\u56de\u590d ",Object(y.c)(e.last_reply_at)))))}}]),t}(u.PureComponent),i.propTypes={data:f.a.object.isRequired},c)}});