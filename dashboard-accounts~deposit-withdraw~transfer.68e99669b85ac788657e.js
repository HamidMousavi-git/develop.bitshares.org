(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1780:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(1807),o=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={animateEnter:!1},e.timer=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),s(t,[{key:"componentDidMount",value:function(){this.enableAnimation()}},{key:"resetAnimation",value:function(){this.setState({animateEnter:!1}),this.enableAnimation()}},{key:"enableAnimation",value:function(){var e=this;this.timer=setTimeout(function(){e.timer&&e.setState({animateEnter:!0})},2e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.timer=null}},{key:"render",value:function(){return this.props.children?a.a.createElement(o.a,{className:this.props.className,component:this.props.component,transitionName:this.props.transitionName,transitionEnterTimeout:this.props.enterTimeout,transitionEnter:this.state.animateEnter,transitionLeave:!1,id:this.props.id},this.props.children):a.a.createElement(this.props.component)}}]),t}();c.defaultProps={component:"span",enterTimeout:2e3},t.a=c},1786:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(265),o=n(16),s=n.n(o),c=n(1780),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={page:1,pageSize:e.pageSize},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),l(t,[{key:"onChange",value:function(e,t){this.setState({page:e,pageSize:t})}},{key:"render",value:function(){var e=this,t=this.state,n=t.page,r=t.pageSize,o=this.props,l=o.header,u=o.rows,p=o.extraRow,h=u.length,f=m(n,r);function m(e,t){for(var n=[],r=(e-1)*t;r<Math.min(h,e*t);r++)n.push(u[r]);return n}return!f.length&&h&&(f=m(1,r)),a.a.createElement("div",{className:"grid-content",style:this.props.style},a.a.createElement("table",{className:this.props.className},l?a.a.createElement("thead",null,l):null,this.props.withTransition&&1===n?a.a.createElement(c.a,{component:"tbody",transitionName:"newrow"},f,p):a.a.createElement("tbody",null,f,p)),h>r?a.a.createElement(i.a,{style:{paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:this.props.leftPadding||null},total:h,showTotal:function(t){return s.a.translate(e.props.label,{count:t})},pageSize:r,current:n,onChange:this.onChange.bind(this)}):null,this.props.children)}}]),t}();u.defaultProps={rows:[],pageSize:15,label:"utility.total_x_items",className:"table",extraRow:null,style:{paddingBottom:"1rem"}},t.a=u},1793:function(e,t,n){"use strict";n.d(t,"a",function(){return F}),n.d(t,"b",function(){return L});var r=n(0),a=n.n(r),i=n(3),o=n.n(i),s=n(335),c=n(524),l=n(35),u=n(45),p=n(15),h=n(10),f=n(1785),m=n.n(f),d=n(16),y=n.n(d),b=n(19),v=n(5),g=n.n(v),_=n(1),w=n.n(_),E=n(1786),k=n(1808),x=n.n(k),H=n(39),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function S(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var C=h.ChainTypes.operations,A={textAlign:"left"},T=Object.keys(C);function P(e,t){return t.block_num===e.block_num?t.virtual_op-e.virtual_op:t.block_num-e.block_num}var F=function(e){function t(e){N(this,t);var n=j(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={limit:e.limit,fetchingAccountHistory:!1,headerHeight:85,filter:"all",accountHistoryError:!1},n}return S(t,a.a.Component),O(t,[{key:"componentDidMount",value:function(){if(!this.props.fullHeight){var e=this.refs.transactions;m.a.initialize(e),this._setHeaderHeight()}}},{key:"_setHeaderHeight",value:function(){var e=this.refs.header.offsetHeight;e!==this.state.headerHeight&&this.setState({headerHeight:e})}},{key:"shouldComponentUpdate",value:function(e,t){if(!p.a.are_equal_shallow(this.props.accountsList,e.accountsList))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(this.state.headerHeight!==t.headerHeight)return!0;if(this.state.filter!==t.filter)return!0;if(this.props.customFilter&&(!p.a.are_equal_shallow(this.props.customFilter.fields,e.customFilter.fields)||!p.a.are_equal_shallow(this.props.customFilter.values,e.customFilter.values)))return!0;if(this.props.maxHeight!==e.maxHeight)return!0;if(t.limit!==this.state.limit||t.fetchingAccountHistory!==this.state.fetchingAccountHistory)return!0;for(var n=0;n<e.accountsList.length;++n){var r=e.accountsList[n],a=this.props.accountsList[n];if(r&&a&&r.get("history")!==a.get("history"))return!0}return!1}},{key:"_onIncreaseLimit",value:function(){this.setState({limit:this.state.limit+30})}},{key:"_getHistory",value:function(e,t,n){var r=[],a=new Set,i=!0,o=!1,s=void 0;try{for(var c,l=e[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var u=c.value;if(u){var p=u.get("history");p&&(r=r.concat(p.toJS().filter(function(e){return!a.has(e.id)&&a.add(e.id)})))}}}catch(e){o=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw s}}return t&&(r=r.filter(function(e){return e.op[0]===C[t]})),n&&(r=r.filter(function(e){return n.fields.reduce(function(t,r){switch(r){case"asset_id":return t&&e.op[1].amount[r]===n.values[r];default:return t&&e.op[1][r]===n.values[r]}},!0)})),r}},{key:"_generateCSV",value:function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function e(){var t,n,r,a,i,o,c,l,u,p,f,m,d,y,b,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({fetchingAccountHistory:!0}),t=0,n=150,r=this.props.accountsList[0].get("id"),e.next=5,Object(h.FetchChain)("getAccount",r);case 5:a=e.sent.get("name"),i={};case 7:return e.next=10,x.a.getAccountHistoryES(r,n,t);case 10:if((o=e.sent).length){e.next=13;break}return e.abrupt("break",21);case 13:return e.next=15,x.a.resolveBlockTimes(o);case 15:return e.next=17,x.a.resolveAssets(o);case 17:o.map(function(e){var t=e.id,n=T[e.op[0]],r=e.op[1];i[t]={timestamp:new Date(e.block_time),type:n,data:r}}),t+=o.length,e.next=7;break;case 21:if(Object.keys(i).length){e.next=23;break}return e.abrupt("return",this.setState({fetchingAccountHistory:!1,accountHistoryError:!0}));case 23:for(i=x.a.groupEntries(i),c=x.a.parseData(i,r,a),l="",u=!0,p=!1,f=void 0,e.prev=29,m=c[Symbol.iterator]();!(u=(d=m.next()).done);u=!0)y=d.value,l+=y.join(",")+"\n";e.next=37;break;case 33:e.prev=33,e.t0=e.catch(29),p=!0,f=e.t0;case 37:e.prev=37,e.prev=38,!u&&m.return&&m.return();case 40:if(e.prev=40,!p){e.next=43;break}throw f;case 43:return e.finish(40);case 44:return e.finish(37);case 45:b=new Blob([l],{type:"text/csv;charset=utf-8"}),v=new Date,Object(s.saveAs)(b,"btshist-"+v.getFullYear()+"-"+("0"+(v.getMonth()+1)).slice(-2)+"-"+("0"+v.getDate()).slice(-2)+"-"+("0"+v.getHours()).slice(-2)+("0"+v.getMinutes()).slice(-2)+".csv"),this.setState({fetchingAccountHistory:!1,accountHistoryError:null});case 49:case"end":return e.stop()}},e,this,[[29,33,37,45],[38,,40,44]])}));return function(){return e.apply(this,arguments)}}()},{key:"_onChangeFilter",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.props,t=e.accountsList,n=e.compactView,r=e.filter,i=e.customFilter,s=e.style,l=e.maxHeight,u=this.state,p=u.limit,h=u.headerHeight,f=1===t.length&&t[0]?t[0].get("id"):null,m=this._getHistory(t,this.props.showFilters&&"all"!==this.state.filter?this.state.filter:r,i).sort(P),d=m.length;s=s||{width:"100%",height:"100%"};var v=null;v=["all","transfer","limit_order_create","limit_order_cancel","fill_order","account_create","account_update","asset_create","witness_withdraw_pay","vesting_balance_withdraw"].map(function(e){return a.a.createElement("option",{value:e,key:e},y.a.translate("transaction.trxTypes."+e))});var _=m.length?m.slice(0,p).map(function(e){return a.a.createElement(c.a,{includeOperationId:!0,operationId:e.id,style:A,key:e.id,op:e.op,result:e.result,txIndex:e.trx_in_block,block:e.block_num,current:f,hideFee:!0,inverted:!1,hideOpLabel:n,fullDate:!0})}):[a.a.createElement("tr",{key:"no_recent"},a.a.createElement("td",{colSpan:n?"2":"3"},a.a.createElement(o.a,{content:"operation.no_recent"})))],w=a.a.createElement("tr",{className:"total-value",key:"total_value"},a.a.createElement("td",{style:{textAlign:"center"}},d>0?a.a.createElement("span",null,a.a.createElement("a",{className:"inline-block",onClick:this._generateCSV.bind(this),"data-tip":y.a.translate("transaction.csv_tip"),"data-place":"bottom"},a.a.createElement(b.a,{name:"excel",title:"icons.excel",className:"icon-14px"}))):null),a.a.createElement("td",{className:"column-hide-tiny"}),a.a.createElement("td",{style:{textAlign:"center"}}," ",this.props.showMore&&d>this.props.limit||p<d?a.a.createElement("a",{onClick:this._onIncreaseLimit.bind(this)},a.a.createElement(b.a,{name:"chevron-down",title:"icons.chevron_down.transactions",className:"icon-14px"})):null),a.a.createElement("td",null));return a.a.createElement("div",{className:"recent-transactions no-overflow",style:s},a.a.createElement("div",{className:"generic-bordered-box"},this.props.dashboard?null:a.a.createElement("div",{ref:"header"},a.a.createElement("div",{className:"block-content-header"},a.a.createElement("span",null,this.props.title?this.props.title:a.a.createElement(o.a,{content:"account.recent"})))),a.a.createElement("div",{className:"header-selector"},a.a.createElement("div",{className:"selector"},a.a.createElement("div",{className:g()("inline-block")},this.props.showFilters?a.a.createElement("select",{"data-place":"left","data-tip":y.a.translate("tooltip.filter_ops"),style:{paddingTop:5,width:"auto"},className:"bts-select no-margin",value:this.state.filter,onChange:this._onChangeFilter.bind(this)},v):null)),this.state.accountHistoryError&&a.a.createElement("div",{className:"has-error",style:{paddingLeft:"0.75rem"}},a.a.createElement(o.a,{content:"account.history_error"}))),a.a.createElement("div",{className:"box-content grid-block no-margin",style:this.props.fullHeight?null:{maxHeight:l-h},ref:"transactions"},a.a.createElement(E.a,{withTransition:!0,className:"table table-striped "+(n?"compact":"")+(this.props.dashboard?" dashboard-table table-hover":""),header:a.a.createElement("tr",null,a.a.createElement("th",{className:"column-hide-tiny",style:A},a.a.createElement(o.a,{content:"account.transactions.id"})),a.a.createElement("th",{className:"column-hide-tiny",style:A},a.a.createElement(o.a,{content:"account.transactions.type"})),a.a.createElement("th",{style:A},a.a.createElement(o.a,{content:"account.transactions.info"})),a.a.createElement("th",null,a.a.createElement(o.a,{content:"account.transactions.time"}))),rows:_,label:"utility.total_x_operations",extraRow:w})),this.state.fetchingAccountHistory&&a.a.createElement(H.a,null)))}}]),t}();F.propTypes={accountsList:l.a.ChainAccountsList.isRequired,compactView:w.a.bool,limit:w.a.number,maxHeight:w.a.number,fullHeight:w.a.bool,showFilters:w.a.bool},F.defaultProps={limit:25,maxHeight:500,fullHeight:!1,showFilters:!1},F=Object(u.a)(F);var L=function(e){function t(){return N(this,t),j(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return S(t,a.a.Component),O(t,[{key:"render",value:function(){return a.a.createElement("span",{className:"wrapper"},this.props.children(this.props))}}]),t}();L.propTypes={asset:l.a.ChainAsset.isRequired,to:l.a.ChainAccount.isRequired,fromAccount:l.a.ChainAccount.isRequired},L.defaultProps={asset:"1.3.0"},L=Object(u.a)(L)}}]);
//# sourceMappingURL=dashboard-accounts~deposit-withdraw~transfer.js.map