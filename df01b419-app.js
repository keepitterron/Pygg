!function(e){e.f[90]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),o=e.r(26),i=e.r(91);e.r(109);var a=document.getElementById("app");o.render(r.createElement(i.default,null),a)},e.f[91]=function(t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),i=e.r(92),a=e.r(96),c=e.r(105),l=e.r(98),s=e.r(101),u=new l.default;function d(){var e,t=s.default.get("portfolio"),n=t.map(function(e){return e.name}),r=(e=n,u.list().then(function(t){return t.filter(function(t){return e.indexOf(t.Name)>-1})})),o=u.prices(n),i=c.portfolioMapper(t);return Promise.all([r,o,i]).then(c.coinDataAggregate)}var f=function(e){r(t,e);function t(){var t=e.call(this)||this;return t.state={coins:[],loading:!0},t.loadPortfolio=t.loadPortfolio.bind(t),t}return t.prototype.showCoins=function(e){this.setState({coins:e,loading:!1})},t.prototype.loadPortfolio=function(){d().then(this.showCoins.bind(this))},t.prototype.componentDidMount=function(){this.loadPortfolio()},t.prototype.render=function(){return this.loading||!this.state.coins?o.createElement(a.default,null):o.createElement(i.default,{coins:this.state.coins,onUpdate:this.loadPortfolio})},t}(o.Component);n.default=f},e.f[92]=function(t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),i=e.r(93),a=e.r(106),c=e.r(107),l=e.r(108),s=e.r(105),u=new(e.r(98).default),d=function(e){return e.map(f)},f=function(e){var t=e.Name;return{label:e.FullName,value:t}},p=function(e){r(t,e);function t(){var t=e.call(this)||this;return t.state={modalOpen:!1,coinList:[],selectedOption:null},t.onModalOpen=t.modalOpen.bind(t,!0),t.onModalClose=t.modalOpen.bind(t,!1),t}return t.prototype.componentDidMount=function(){var e=this;u.list().then(d).then(function(t){return e.setState({coinList:t})})},t.prototype.modalOpen=function(e){this.setState({modalOpen:e})},t.prototype.modalClasses=function(){return this.state.modalOpen?"modal modal--open":"modal"},t.prototype.render=function(){var e=this.props,t=e.coins,n=e.onUpdate,r=s.coinsValue(t);return o.createElement("div",{className:"coins"},o.createElement(l.default,{value:r},o.createElement("button",{className:"btn",onClick:this.onModalOpen},"+coin")),o.createElement(i.default,{coins:t}),o.createElement(a.default,{isOpen:this.state.modalOpen,onClose:this.onModalClose},this.state.coinList&&o.createElement(c.default,{coinList:this.state.coinList,onUpdate:n})))},t}(o.Component);n.default=p},e.f[93]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),o=e.r(94);n.default=function(e){return e.coins.map(function(e,t){return r.createElement(o.default,{key:"coin-"+t,coinData:e})})}},e.f[94]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),o=e.r(95),i=e.r(104),a=e.r(105);n.default=function(e){var t=e.coinData,n=t.coin,c=t.price,l=a.coinModel(n,c);return r.createElement("div",{className:"coin"},r.createElement("div",{className:"coin__icon"},r.createElement(i.default,{icon:l.icon,fallback:"/icons/nope.svg"})),r.createElement("div",{className:"coin__info"},r.createElement("h2",null,l.label),r.createElement("p",null,"(",l.value,"€)")),r.createElement("div",{className:"coin__data"},r.createElement("h2",null,l.total,"€"),r.createElement("div",{className:"coin__qty"},"(",l.qty," coins)")),r.createElement("div",{className:"coin__chart"},r.createElement(o.default,{coin:l.label})))}},e.f[95]=function(t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),i=e.r(96),a=e.r(97),c=e.r(29),l=e.r(98),s=e.r(102),u=e.r(103),d=new l.default,f=function(e){r(t,e);function t(){var t=e.call(this)||this;return t.state={chart:{},tooltip:null,loading:!0},t.showChart=t.showChart.bind(t),t.handlePointHover=t.handlePointHover.bind(t),t}return t.prototype.componentDidMount=function(){var e=this,t=this.props.coin,n=u.requestDelay();setTimeout(function(){return d.charts(t).then(s.dataToChart).then(e.showChart)},n)},t.prototype.handlePointHover=function(e){this.setState({tooltip:e})},t.prototype.showChart=function(e){this.setState({chart:e,loading:!1})},t.prototype.render=function(){return this.loading||!this.state.chart.data?o.createElement(i.default,null):o.createElement("div",null,o.createElement(c,Object.assign({data:this.state.chart.data,pointsOnHover:this.handlePointHover},this.state.chart.props)),o.createElement(a.default,{tooltip:this.state.tooltip}))},t}(o.Component);n.default=f},e.f[96]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0);n.default=function(){return r.createElement("svg",{width:"100",height:"200",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},r.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},r.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},r.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},r.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),r.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),r.createElement("circle",{cx:"22",cy:"22",r:"8"},r.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}},e.f[97]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),o=function(e){return new Date(1e3*e).toLocaleString().split(",")[0]};n.default=function(e){var t=e.tooltip;if(!t)return r.createElement("div",null);var n=t.x,i=t.y;return r.createElement("div",{className:"coin__tooltip"},r.createElement("span",null,o(n))," — ",r.createElement("span",null,i))}},e.f[98]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(99),o=e.r(101),i=function(){function e(e,t){var n=this;this.api=e||r.default,this.storage=t||o.default,this.mapper=this.api.mapper,this.list=function(){return n.fetchDataFor("list")},this.prices=function(e){return n.fetchDataFor("prices",e)},this.charts=function(e){return n.fetchDataFor("charts."+e,e)}}return e.prototype.fetchDataFor=function(e,t){var n=this.promiseFromStorage(e);if(n)return n;var r=this.mapper.apiFn(e);return this.api[r](t).then(this.withStorage(e))},e.prototype.promiseFromStorage=function(e){var t=this.storage.get(e);if(t&&!this.isStale(t.ts,this.mapper.expire(e)))return t.data?Promise.resolve(t.data):void 0},e.prototype.withStorage=function(e){var t=this;return function(n){return t.storage.save(e,{data:n,ts:Date.now()}),n}},e.prototype.isStale=function(e,t){if(0===t)return!0;var n=Date.now()-e;return Math.floor(n%864e5/36e5)>=t},e}();n.default=i},e.f[99]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(100),o=e.r(71),i=new r.default,a=function(e){var t=e.Data;return Object.keys(t).map(function(e){return t[e]})};n.default={mapper:i,coinList:function(){return o.coinList().then(a)},coinPrice:function(e){return o.priceMulti(e,["EUR"])},coinDailyHisto:function(e){return o.histoDay(e,"EUR",{limit:15})},coinsIterable:a}},e.f[100]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={list:"coinList",prices:"coinPrice",charts:"coinDailyHisto"},r={list:48,prices:0,charts:2},o=function(){function e(e,t){this.mapFn=e||n,this.mapExpire=t||r}return e.prototype.expire=function(e){return this._mapperFn(e,this.mapExpire)},e.prototype.apiFn=function(e){return this._mapperFn(e,this.mapFn)},e.prototype._mapperFn=function(e,t){return t[this._mapperKey(e)]},e.prototype._mapperKey=function(e){return e.split(".")[0]},e}();t.default=o},e.f[101]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="nl.blockfolio.keepitterron",r=function(e,t){var r=n+"."+e;return localStorage.setItem(r,t)},o=function(e){return JSON.parse(function(e){var t=n+"."+e;return localStorage.getItem(t)}(e))};t.default={key:n,save:function(e,t){return r(e,JSON.stringify(t))},add:function(e,t){var n=o("portfolio");n.push(t),r(e,JSON.stringify(n))},get:o}},e.f[102]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(e){return{x:e.time,y:e.close,active:!1}}t.dataToChart=function(e){return function(e,t,o){void 0===o&&(o=r);var i,a=(i=t,i?"95,245,87":"246,143,159");return{data:e.map(n),props:Object.assign({},o,{areaColor:"rgba("+a+", .4)",pathColor:"rgba("+a+", 1)",pointsStrokeColor:"rgba("+a+", 1)"})}}(e,function(e){var t=e.slice(-1)[0],n=e.slice(-2)[0];return t.close>=n.close}(e))};var r={areaVisible:!0,axisVisible:!1,gridVisible:!1,labelsVisible:!1,pathVisible:!0,pointsColor:"#fff",pointsRadius:1,labelsCountY:.01,pointsStrokeWidth:2,viewBoxHeight:100,viewBoxWidth:200}},e.f[103]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=0;t.counter=n;t.requestDelay=function(){return t.counter=n+=1,200+50*n}},e.f[104]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0);n.default=function(e){var t,n=e.icon,o=e.fallback,i="./icons/"+n;return r.createElement("img",{src:i,ref:function(e){return t=e},onError:function(){return t.src=o}})}},e.f[105]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(72);function o(e){return e>999?r(e).format("0.[0]a"):e>9?r(e).format("0"):e>.01?r(e).format("0.[00]"):r(e).format("0.[0000]")}n.coinsValue=function(e){return o(e.reduce(function(e,t){return e+t.value},0))};n.portfolioMapper=function(e){return e.reduce(function(e,t){return e[t.name]?e[t.name].qty+=t.qty:e[t.name]=t,e},{})};n.coinDataAggregate=function(e){var t=e[0],n=e[1],r=e[2];return t?t.map(function(e){e.qty=(r[e.Name]||{}).qty||0;var t=n[e.Name].EUR||0;return{coin:e,price:t,value:t*e.qty}}).sort(function(e,t){return parseInt(t.value)-parseInt(e.value)}):[]};n.coinModel=function(e,t){return{qty:e.qty,name:e.CoinName,label:e.Name,icon:e.Name+".svg",value:o(t),total:o(t*e.qty)}}},e.f[106]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0);n.default=function(e){var t=e.isOpen,n=e.onClose,o=e.children;return r.createElement("div",{className:t?"modal modal--open":"modal"},r.createElement("button",{className:"btn modal__close",onClick:n},"×"),o)}},e.f[107]=function(t,n){var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),i=e.r(73);e.r(86);var a=e.r(101),c=function(e){r(t,e);function t(){var t=e.call(this)||this;return t.state={coinList:[],selectedCoin:null,coinsAmount:0,buyPrice:0},t.coinSelect=t.coinSelect.bind(t),t.handleInput=t.handleInput.bind(t),t.addCoin=t.addCoin.bind(t),t}return t.prototype.coinSelect=function(e){this.setState({selectedCoin:e})},t.prototype.handleInput=function(e){var t=e.target,n=t.name,r=t.value;this.setState(((o={})[n]=parseFloat(r),o));var o},t.prototype.addCoin=function(){var e=this.state,t=e.selectedCoin,n=e.coinsAmount,r=e.buyPrice;t&&(this.setState({selectedCoin:null,coinsAmount:0,buyPrice:0}),a.default.add("portfolio",{name:t.value,qty:n,price:r,ts:Date.now}),this.props.onUpdate(!0))},t.prototype.render=function(){var e=this.props.coinList;return o.createElement("div",{className:"edit"},o.createElement("h2",null,"Add Coin"),e&&o.createElement(i.default,{name:"coin",value:this.state.selectedCoin,onChange:this.coinSelect,options:e}),this.state.selectedCoin&&o.createElement("div",{className:"edit__coin"},o.createElement("div",{className:"edit__field"},o.createElement("label",null,"How many?"),o.createElement("input",{type:"number",step:"any",placeholder:"Amount",name:"coinsAmount",onChange:this.handleInput})),o.createElement("div",{className:"edit__field"},o.createElement("label",null,"Unitary price"),o.createElement("input",{type:"number",step:"any",placeholder:"Price",name:"buyPrice",onChange:this.handleInput})),o.createElement("button",{className:"btn",onClick:this.addCoin},"save")))},t}(o.Component);n.default=c},e.f[108]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0);n.default=function(e){var t=e.value,n=e.children;return r.createElement("div",{className:"coin coin--wallet"},r.createElement("h2",null,"Wallet: ",t,"€"),n)}},e.f[109]=function(){e.r(89)("index.scss",'* {\n  box-sizing: border-box; }\n\nhtml, body {\n  height: 100%; }\n\nh1, h2, h3, p, div, body, button {\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  font-size: 100%; }\n\nbody {\n  font-family: "Share Tech Mono";\n  margin: 0;\n  padding: 0;\n  background: #252f48;\n  background: linear-gradient(#3b466a, #252f48) fixed;\n  color: #f0f2f5; }\n\n.btn {\n  font-family: "Share Tech Mono";\n  padding: .5rem 1rem;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-size: 1rem;\n  background: linear-gradient(45deg, #3b466a, #252f48);\n  border: 0;\n  cursor: pointer;\n  color: white;\n  transition: all .25s ease-in; }\n  .btn:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); }\n\n@media only screen and (max-width: 750px) {\n  html {\n    font-size: 90%; } }\n\n@media only screen and (max-width: 500px) {\n  html {\n    font-size: 80%; } }\n\n.coins {\n  padding: 1rem; }\n\n.coin {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n  padding: 0 0 0 1rem;\n  border-radius: 8px;\n  background: linear-gradient(45deg, #4f5b7e, #252f48);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n  margin: 0 0 1rem;\n  font-size: 1.5rem;\n  overflow: hidden; }\n  .coin--wallet {\n    min-width: 100%;\n    padding: 1rem;\n    background: linear-gradient(45deg, #957fed, #fc74b0); }\n    .coin--wallet h2 {\n      text-transform: uppercase; }\n  .coin__chart, .coin__info, .coin__data {\n    flex: 1; }\n  .coin__chart {\n    position: relative;\n    padding: 0.5rem 0 0;\n    align-self: flex-end; }\n    .coin__chart svg {\n      width: 100%; }\n    .coin__chart circle {\n      opacity: 0; }\n    .coin__chart path {\n      stroke-linecap: round;\n      stroke-linejoin: round; }\n    .coin__chart canvas {\n      max-width: 100%;\n      max-height: 100%; }\n  .coin__icon img {\n    filter: invert(0.9);\n    width: 60px; }\n  .coin__tooltip {\n    position: absolute;\n    bottom: .2rem;\n    width: 100%;\n    text-align: center;\n    font-size: .8rem; }\n  .coin__info p {\n    color: #aba8a8;\n    font-size: 1rem; }\n  .coin__qty {\n    text-transform: uppercase;\n    font-size: 1rem;\n    color: #aba8a8; }\n\n@media only screen and (min-width: 900px) {\n  .coins {\n    padding: 4rem;\n    display: grid;\n    grid-column-gap: 2rem;\n    grid-row-gap: 2rem;\n    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n  .coin {\n    flex: 1;\n    flex-direction: column;\n    padding: 1rem 0 0; }\n    .coin .btn {\n      background: #252f48; }\n    .coin__chart circle {\n      opacity: 1; }\n    .coin--wallet {\n      flex-direction: row;\n      padding: 1rem;\n      grid-column: 1 / -1;\n      background: transparent;\n      box-shadow: 0 0 0 transparent; }\n    .coin__info {\n      margin: 1rem 0; } }\n\n.modal {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  transform: translateY(-100%);\n  opacity: 0;\n  transition: all 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  background: linear-gradient(45deg, #957fed, #fc74b0);\n  color: #f0f2f5;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .modal--open {\n    opacity: 1;\n    transform: translateY(0); }\n  .modal__close {\n    position: absolute;\n    top: 1rem;\n    right: 1rem; }\n\n.edit {\n  padding: 1rem;\n  min-width: 25rem;\n  border-radius: 8px;\n  background: linear-gradient(45deg, #4f5b7e, #252f48);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); }\n  .edit h2 {\n    margin: 0 0 1rem; }\n  .edit__field {\n    margin: 2rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    .edit__field label {\n      flex: 2; }\n    .edit__field input {\n      flex: 1;\n      padding: 0.6rem;\n      font-size: .8rem;\n      border-radius: 5px;\n      border: 1px solid #aba8a8; }\n\n/*# sourceMappingURL=index.scss.map */')},e.r(90)}($fsx);