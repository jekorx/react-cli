webpackJsonp([4],{273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(331);t.default=r.a},331:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return k});var c,u,s,l,f=n(103),p=(n.n(f),n(104)),h=n.n(p),y=n(106),d=(n.n(y),n(107)),b=n.n(d),g=n(0),m=n.n(g),w=n(9),_=n(1),v=n.n(_),S=n(63),E=n(109),O=n(108),j=n(332),T=n(333),R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=(c=Object(w.inject)("_GV_","user"))(u=Object(w.observer)((l=s=function(e){function t(){var e,n,i,c;o(this,t);for(var u=arguments.length,s=Array(u),l=0;l<u;l++)s[l]=arguments[l];return n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={dataSource:new b.a.DataSource({rowHasChanged:function(e,t){return e.id!==t.id}}),pageSize:14,height:0,showBackTop:!1,refreshing:!1},i.queryData=function(){var e=i.props.user.accessToken;S.a.get("/messages?accesstoken="+e).then(function(e){var t=e.success,n=e.data;if(t){var o=i.state.dataSource,a=[{type:"MESSAGES",title:"\u65b0\u6d88\u606f",icon:"list"}].concat(r(n.hasnot_read_messages),[{type:"MESSAGES",title:"\u8fc7\u5f80\u4fe1\u606f",icon:"collections"}],r(n.has_read_messages));i.setState({dataSource:o.cloneWithRows(a),refreshing:!1})}})},i.handleRefresh=function(){i.setState({refreshing:!0},i.queryData)},i.handleScroll=function(e){i.setState({showBackTop:e.target.scrollTop>200})},i.handleBackTop=function(){i.setState({showBackTop:!1},function(){i.listViewRef.scrollTo(0)})},c=n,a(i,c)}return i(t,e),R(t,[{key:"componentDidMount",value:function(){var e=this.props._GV_,t=e.headerHeight;(0,e.setTitle)({path:"/message"}),this.setState({height:(document.documentElement.clientHeight||document.body.clientHeight)-t},this.queryData)}},{key:"render",value:function(){var e=this,t=this.state,n=t.dataSource,r=t.height,o=t.showBackTop,a=t.refreshing,i=t.pageSize;return m.a.createElement(g.Fragment,null,m.a.createElement(b.a,{ref:function(t){e.listViewRef=t},dataSource:n,pageSize:i,style:{height:r,overflow:"auto"},onScroll:this.handleScroll,scrollEventThrottle:800,scrollRenderAheadDistance:400,pullToRefresh:m.a.createElement(h.a,{refreshing:a,onRefresh:this.handleRefresh,indicator:E.a}),renderRow:function(e,t,n){return"MESSAGES"===e.type?m.a.createElement(T.a,{data:e}):m.a.createElement(j.a,{data:e})}}),m.a.createElement(O.a,{show:o,handleClick:this.handleBackTop}))}}]),t}(g.Component),s.propTypes={_GV_:v.a.shape({setTitle:v.a.func.isRequired,headerHeight:v.a.number.isRequired}).isRequired,user:v.a.shape({accessToken:v.a.string.isRequired}).isRequired},u=l))||u)||u},332:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return h});var i,c,u=n(0),s=n.n(u),l=n(1),f=n.n(l),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=(c=i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props.data;return s.a.createElement("div",null,e)}}]),t}(u.PureComponent),i.propTypes={data:f.a.object.isRequired},c)},333:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return b});var i,c,u=n(0),s=n.n(u),l=n(1),f=n.n(l),p=n(27),h=n(118),y=n.n(h),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=(c=i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),d(t,[{key:"render",value:function(){var e=this.props.data,t=e.title,n=e.icon;return s.a.createElement("h3",{className:y.a.type},s.a.createElement(p.a,{type:n,className:y.a["type-icon"]}),s.a.createElement("span",{className:y.a["type-text"]},t))}}]),t}(u.PureComponent),i.propTypes={data:f.a.object.isRequired},c)}});