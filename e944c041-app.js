!function(e){e.f[92]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),r=e.r(26),i=e.r(93);e.r(115);var a=document.getElementById("app");r.render(o.createElement(i.default,null),a)},e.f[93]=function(t,n){var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function o(){this.constructor=t}t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),i=e.r(94),a=e.r(98),c=e.r(108),l=e.r(100),s=e.r(103),u=new l.default,d=new s.default;function p(){var e=d.fetch("portfolio");if(!e)return Promise.resolve([]);var t,n=e.map(function(e){return e.name}),o=(t=n,u.list().then(function(e){return e.filter(function(e){return t.indexOf(e.Name)>-1})})),r=u.prices(n),i=c.portfolioMapper(e);return Promise.all([o,r,i]).then(c.coinDataAggregate)}var f=function(e){o(t,e);function t(){var t=e.call(this)||this;return t.state={coins:[],loading:!0},t.loadPortfolio=t.loadPortfolio.bind(t),t}return t.prototype.showCoins=function(e){this.setState({coins:e,loading:!1})},t.prototype.loadPortfolio=function(){p().then(this.showCoins.bind(this))},t.prototype.componentDidMount=function(){this.loadPortfolio()},t.prototype.render=function(){return this.loading||!this.state.coins?r.createElement(a.default,null):r.createElement(i.default,{coins:this.state.coins,onUpdate:this.loadPortfolio})},t}(r.Component);n.default=f},e.f[94]=function(t,n){var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function o(){this.constructor=t}t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),i=e.r(95),a=e.r(109),c=e.r(110),l=e.r(111),s=e.r(112),u=e.r(108),d=e.r(100),p=e.r(113),f=e.r(114),m=new d.default,h=new p.default,_=function(e){return e.map(v)},v=function(e){var t=e.Name;return{label:e.FullName,value:t}},g=function(e){o(t,e);function t(){var t=e.call(this)||this;return t.state={editOpen:!1,aboutOpen:!1,coinList:[],selectedOption:null},t.onEditOpen=t.modalStatus.bind(t,"edit",!0),t.onEditClose=t.modalStatus.bind(t,"edit",!1),t.onAboutOpen=t.modalStatus.bind(t,"about",!0),t.onAboutClose=t.modalStatus.bind(t,"about",!1),t.onEscape=t.onEscape.bind(t),t.onCoinRemove=t.onCoinRemove.bind(t),t.onCoinAdd=t.onCoinAdd.bind(t),t}return t.prototype.componentDidMount=function(){var e=this;m.list().then(_).then(function(t){return e.setState({coinList:t})}),window.addEventListener("keyup",this.onEscape)},t.prototype.componentWillReceiveProps=function(e){e.coins.length||this.setState({editOpen:!0})},t.prototype.onEscape=function(e){"Escape"===e.key&&this.setState({editOpen:!1,aboutOpen:!1})},t.prototype.onCoinRemove=function(e){confirm("Remove coin?")&&(h.remove(e),this.props.onUpdate())},t.prototype.onCoinAdd=function(e){h.add(e),this.props.onUpdate()},t.prototype.componentWillUnmount=function(){window.removeEventListener("keyup",this.onEscape)},t.prototype.modalStatus=function(e,t){this.setState(((n={})[{edit:"editOpen",about:"aboutOpen"}[e]]=t,n));var n},t.prototype.render=function(){var e=this.props.coins,t=u.coinsValue(e);return r.createElement("div",{className:"coins"},r.createElement(l.default,{value:t},r.createElement("button",{className:"btn",onClick:this.onEditOpen},"+coin")),!e.length&&r.createElement(s.default,null),r.createElement(i.default,{coins:e,onRemove:this.onCoinRemove}),r.createElement(a.default,{isOpen:this.state.editOpen,onClose:this.onEditClose},this.state.coinList&&r.createElement(c.default,{coinList:this.state.coinList,onAdd:this.onCoinAdd})),r.createElement(a.default,{isOpen:this.state.aboutOpen,onClose:this.onAboutClose},r.createElement("div",{className:"pygg__about"},r.createElement("h2",null,"About Pygg"),r.createElement("p",null,"Add coins to your portfolio, track their growth over time."),r.createElement("p",null,r.createElement("em",null,"Pygg uses local storage to save your data, you can only access it from this device. A fix is in the workings.")),r.createElement(f.default,null))),r.createElement(f.default,{className:"pygg__logo",alt:"pygg icon by @nonhotempo",onAbout:this.onAboutOpen}))},t}(r.Component);n.default=g},e.f[95]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),r=e.r(96);n.default=function(e){var t=e.coins,n=e.onRemove;return t.map(function(e,t){return o.createElement(r.default,{key:"coin-"+t,coin:e,onRemove:n})})}},e.f[96]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),r=e.r(97),i=e.r(106),a=e.r(107),c=e.r(108);n.default=function(e){var t=e.coin,n=e.onRemove;return o.createElement("div",{className:"coin"},o.createElement("a",{className:"coin__remove",title:"delete coin",onClick:function(){return n(t.id)}},"×"),o.createElement("div",{className:"coin__icon"},o.createElement(i.default,{icon:t.icon,fallback:"/icons/pygg.svg"})),o.createElement("div",{className:"coin__info"},o.createElement("h2",null,t.label),o.createElement("p",null,"(",c.formatPrice(t.value),"€)")),o.createElement("div",{className:"coin__data"},o.createElement("h2",null,c.formatPrice(t.total),"€"),o.createElement("div",{className:"coin__qty"},"(",c.formatPrice(t.qty)," coins)"),o.createElement(a.default,{current:t.value,buy:t.buyPrice,qty:t.qty})),o.createElement("div",{className:"coin__chart"},o.createElement(r.default,{coin:t.label})))}},e.f[97]=function(t,n){var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function o(){this.constructor=t}t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),i=e.r(98),a=e.r(99),c=e.r(29),l=e.r(100),s=e.r(104),u=e.r(105),d=new l.default,p=function(e){o(t,e);function t(){var t=e.call(this)||this;return t.state={chart:{},tooltip:null,loading:!0},t.showChart=t.showChart.bind(t),t.handlePointHover=t.handlePointHover.bind(t),t}return t.prototype.componentDidMount=function(){var e=this,t=this.props.coin,n=u.requestDelay();setTimeout(function(){return d.charts(t).then(s.dataToChart).then(e.showChart)},n)},t.prototype.handlePointHover=function(e){this.setState({tooltip:e})},t.prototype.showChart=function(e){this.setState({chart:e,loading:!1})},t.prototype.render=function(){return this.loading||!this.state.chart.data?r.createElement(i.default,null):r.createElement("div",null,r.createElement(c,Object.assign({data:this.state.chart.data,pointsOnHover:this.handlePointHover},this.state.chart.props)),r.createElement(a.default,{tooltip:this.state.tooltip}))},t}(r.Component);n.default=p},e.f[98]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0);n.default=function(){return o.createElement("svg",{width:"100",height:"200",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},o.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},o.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},o.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},o.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),o.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),o.createElement("circle",{cx:"22",cy:"22",r:"8"},o.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))}},e.f[99]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),r=function(e){return new Date(1e3*e).toLocaleString().split(",")[0]};n.default=function(e){var t=e.tooltip;if(!t)return o.createElement("div",null);var n=t.x,i=t.y;return o.createElement("div",{className:"coin__tooltip"},o.createElement("span",null,r(n))," — ",o.createElement("span",null,i))}},e.f[100]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(101),r=new(e.r(103).default),i=function(){function e(e,t){var n=this;this.api=e||o.default,this.storage=t||r,this.mapper=this.api.mapper,this.list=function(){return n.fetchDataFor("list")},this.prices=function(e){return n.fetchDataFor("prices",e)},this.charts=function(e){return n.fetchDataFor("charts."+e,e)}}return e.prototype.fetchDataFor=function(e,t){var n=this.promiseFromStorage(e);if(n)return n;var o=this.mapper.apiFn(e);return this.api[o](t).then(this.withStorage(e))},e.prototype.promiseFromStorage=function(e){var t=this.storage.fetch(e);if(t&&t.data&&!this.isStale(t.ts,this.mapper.expire(e)))return Promise.resolve(t.data)},e.prototype.withStorage=function(e){var t=this;return function(n){return t.storage.save(e,{data:n,ts:Date.now()}),n}},e.prototype.isStale=function(e,t){if(0===t)return!0;var n=Date.now()-e;return Math.floor(n%864e5/36e5)>=t},e}();n.default=i},e.f[101]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(102),r=e.r(71),i=new o.default,a="EUR",c=15,l=function(e){var t=e.Data;return Object.keys(t).map(function(e){return t[e]})};function s(e){void 0===e&&(e=r);return{mapper:i,coinList:function(){return e.coinList().then(l)},coinPrice:function(t){return e.priceMulti(t,[a])},coinDailyHisto:function(t){return e.histoDay(t,a,{limit:c})}}}s.CURRENCY=a,s.LIMIT=c,n.default=s()},e.f[102]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={list:"coinList",prices:"coinPrice",charts:"coinDailyHisto"},o={list:48,prices:0,charts:2},r=function(){function e(e,t){this.mapFn=e||n,this.mapExpire=t||o}return e.prototype.expire=function(e){return this._mapperFn(e,this.mapExpire)},e.prototype.apiFn=function(e){return this._mapperFn(e,this.mapFn)},e.prototype._mapperFn=function(e,t){return t[this._mapperKey(e)]},e.prototype._mapperKey=function(e){return e.split(".")[0]},e}();t.default=r},e.f[103]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="nl.blockfolio.keepitterron",o=function(){function e(e){void 0===e&&(e=localStorage),this.storage=e}return e.prototype.save=function(e,t){return this._set(e,JSON.stringify(t))},e.prototype.fetch=function(e){return JSON.parse(this._get(e))},e.prototype.push=function(e,t){var n=this.fetch(e)||[];return n.push(t),this.save(e,n)},e.prototype._get=function(e){var t=n+"."+e;return this.storage.getItem(t)},e.prototype._set=function(e,t){var o=n+"."+e;return this.storage.setItem(o,t)},e}();t.default=o,o.STORAGE_KEY=n},e.f[104]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(e){return{x:e.time,y:e.close,active:!1}}t.dataToChart=function(e){return function(e,t,r){void 0===r&&(r=o);var i,a=(i=t,i?"95,245,87":"246,143,159");return{data:e.map(n),props:Object.assign({},r,{areaColor:"rgba("+a+", .4)",pathColor:"rgba("+a+", 1)",pointsStrokeColor:"rgba("+a+", 1)"})}}(e,function(e){var t=e.slice(-1)[0],n=e.slice(-2)[0];return t.close>=n.close}(e))};var o={areaVisible:!0,axisVisible:!1,gridVisible:!1,labelsVisible:!1,pathVisible:!0,pointsColor:"#fff",pointsRadius:1,labelsCountY:.01,pointsStrokeWidth:2,viewBoxHeight:100,viewBoxWidth:200}},e.f[105]=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=0;t.counter=n;t.requestDelay=function(){return t.counter=n+=1,200+50*n}},e.f[106]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0);n.default=function(e){var t,n=e.icon,r=e.fallback,i="./icons/"+n;return o.createElement("img",{src:i,ref:function(e){return t=e},onError:function(){return t.src=r}})}},e.f[107]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0),r=e.r(108);n.default=function(e){var t=e.current,n=e.buy,i=e.qty,a=r.calculateGain(t,n,i),c=a.upTrend?"-up":"-down",l="-price";return o.createElement("div",{className:["coin__gain",l,c].join(" "),onClick:function(){return"-price"===l?"-percent":"-price"}},o.createElement("span",{className:"coin__gain--price"},a.changePrice,"€"),o.createElement("span",{className:"coin__gain--percent"},a.changePercent,"%"))}},e.f[108]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(72);function r(e){return e>999?o(e).format("0.[0]a"):e>9?o(e).format("0"):e>.01?o(e).format("0.[00]"):o(e).format("0.[0000]")}n.formatPrice=r;n.coinsValue=function(e){return r(e.reduce(function(e,t){return e+t.total},0))};n.portfolioMapper=function(e){return e.reduce(function(e,t){return e[t.name]?e[t.name].qty+=t.qty:e[t.name]=t,e},{})};n.coinDataAggregate=function(e){var t=e[0],n=e[1],o=e[2];return t?t.map(function(e){var t=o[e.Name]||{},r=t.id,i=t.qty,a=t.price;e.id=r,e.qty=i||0,e.buyPrice=a||0;var c=n[e.Name].EUR||0;return s=c,{id:(l=e).id,qty:l.qty,name:l.CoinName,label:l.Name,icon:l.Name+".svg",value:s,buyPrice:l.buyPrice,total:s*l.qty};var l,s}).sort(function(e,t){return parseInt(t.total)-parseInt(e.total)}):[]};n.calculateGain=function(e,t,n){var o=t*n,i=e*n,a=i>=o,c=r(i-o);return{upTrend:a,changePrice:c,changePercent:c/o*100}}},e.f[109]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0);n.default=function(e){var t=e.isOpen,n=e.onClose,r=e.children;return o.createElement("div",{className:t?"modal modal--open":"modal"},o.createElement("button",{className:"btn modal__close",onClick:n},"×"),r)}},e.f[110]=function(t,n){var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){e(t,n);function o(){this.constructor=t}t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=e.r(0),i=e.r(73);e.r(86);var a=function(e){o(t,e);function t(){var t=e.call(this)||this;return t.state={coinList:[],selectedCoin:null,coinsAmount:0,buyPrice:0},t.coinSelect=t.coinSelect.bind(t),t.handleInput=t.handleInput.bind(t),t.addCoin=t.addCoin.bind(t),t}return t.prototype.coinSelect=function(e){this.setState({selectedCoin:e})},t.prototype.handleInput=function(e){var t=e.target,n=t.name,o=t.value;this.setState(((r={})[n]=parseFloat(o),r));var r},t.prototype.addCoin=function(){var e=this.state,t=e.selectedCoin,n=e.coinsAmount,o=e.buyPrice;t&&(this.setState({selectedCoin:null,coinsAmount:0,buyPrice:0}),this.props.onAdd({name:t.value,qty:n,price:o}))},t.prototype.isValid=function(){var e=this.state,t=e.selectedCoin,n=e.coinsAmount,o=e.buyPrice;return t&&n>0&&o>0},t.prototype.render=function(){var e=this.props.coinList;return r.createElement("div",{className:"edit"},r.createElement("h2",null,"Add Coin"),e&&r.createElement(i.default,{name:"coin",value:this.state.selectedCoin,onChange:this.coinSelect,options:e}),this.state.selectedCoin&&r.createElement("div",{className:"edit__coin"},r.createElement("div",{className:"edit__field"},r.createElement("label",null,"How many?"),r.createElement("input",{type:"number",step:"any",placeholder:"Amount",name:"coinsAmount",onChange:this.handleInput})),r.createElement("div",{className:"edit__field"},r.createElement("label",null,"Unitary price (EUR)"),r.createElement("input",{type:"number",step:"any",placeholder:"Price",name:"buyPrice",onChange:this.handleInput})),r.createElement("button",{className:"btn btn--pink",onClick:this.addCoin,disabled:!this.isValid()},"save")))},t}(r.Component);n.default=a},e.f[111]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0);n.default=function(e){var t=e.value,n=e.children;return o.createElement("div",{className:"coin coin--wallet"},o.createElement("h2",null,"Wallet: ",t,"€"),n)}},e.f[112]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0);n.default=function(){return o.createElement("div",{className:"coins__empty"},o.createElement("h2",null,"Your portfolio is empty"),o.createElement("p",null,"Let's add some coins."))}},e.f[113]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=new(e.r(103).default),r=e.r(90),i=function(){function e(){}return e.prototype.add=function(e,t){return void 0===t&&(t=null),e.ts=Date.now(),e.id=t||r(10),o.push("portfolio",e),e},e.prototype.get=function(e){return(o.fetch("portfolio")||[]).find(function(t){return t.id===e})},e.prototype.remove=function(e){var t=(o.fetch("portfolio")||[]).filter(function(t){return t.id!==e});o.save("portfolio",t)},e.prototype.edit=function(e,t){return this.remove(e),this.add(t,e)},e.prototype.clear=function(){o.save("portfolio",[])},e}();n.default=i},e.f[114]=function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=e.r(0);n.default=function(e){var t=e.className,n=e.onAbout;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 596.16 613.44",className:t,onClick:n},o.createElement("path",{className:"pygg__logo-trace",d:"M448.08 210.6l82.3 114 1.94 2.69h47.5l9.26 55.11-151.93 97.06-3.86 2.47 1 4.46 10.85 46.48-63.06-50.84-1.78-1.43h-168l-1.42.75-108.5 57.21 5.67-81.27.11-1.56-.62-1.44-38.88-90.72-1.39-3.24-3.47-.6-47.32-8.14 39.1-27.7.45-.32.39-.39L169 210.6h279.08m3.31-6.48H166.32L51.84 318.6 0 355.32l62.64 10.8 38.88 90.72-6.44 92.88 118.8-62.64H378l77.76 62.64-15.12-64.8 155.52-99.36-10.8-64.8h-49.68l-84.24-116.64z"}),o.createElement("path",{className:"pygg__logo-triangles",d:"M486.99 258.49l-70.11 73.07-110.16 45.36 30.24-168.48M560.2 403.36L532.44 324m-144.41 19.44l47.21 140.4m-56.16-2.16l49.68-17.28m-327.24-9.72l112.32 28.08-45.36-276.48M68.04 367.2l-11.88-46.44",strokeWidth:"2.16",fill:"none"}),o.createElement("g",{className:"pygg__logo-antennas"},o.createElement("path",{fill:"none",strokeWidth:"6.5",d:"M286.2 207.36V95.04h42.43"}),o.createElement("path",{fill:"none",strokeWidth:"6.5",d:"M264.24 206.28V56.16h-49.32V11.57"}),o.createElement("path",{fill:"none",strokeWidth:"6.5",d:"M115.56 259.2H37.8v-57.55"}),o.createElement("path",{fill:"none",strokeWidth:"6.5",d:"M298.08 487.08v70.2h33.48v44.59"}),o.createElement("path",{fill:"none",strokeWidth:"6.5",d:"M264.6 481.68v51.84h-34.56v25.15"}),o.createElement("path",{fill:"none",strokeWidth:"6.5",d:"M91.54 423.47H22.68v40.16"})),o.createElement("g",{className:"pygg__logo-circle"},o.createElement("circle",{cx:"328.02",cy:"95.04",r:"12.18"}),o.createElement("circle",{cx:"214.92",cy:"12.18",r:"12.18"}),o.createElement("circle",{cx:"37.8",cy:"202.26",r:"12.18"}),o.createElement("circle",{cx:"331.56",cy:"601.26",r:"12.18"}),o.createElement("circle",{cx:"230.04",cy:"558.06",r:"12.18"}),o.createElement("circle",{cx:"22.68",cy:"463.02",r:"12.18"})))}},e.f[115]=function(){e.r(89)("index.scss",'* {\n  box-sizing: border-box; }\n\nhtml, body {\n  height: 100%; }\n\nh1, h2, h3, p, div, body, button {\n  margin: 0;\n  padding: 0; }\n\nhtml {\n  font-size: 100%; }\n\nbody {\n  font-family: "Share Tech Mono";\n  margin: 0;\n  padding: 0;\n  background: #252f48;\n  background: linear-gradient(#4f5b7e, #252f48) fixed;\n  color: #f0f2f5; }\n\n.btn {\n  font-family: "Share Tech Mono";\n  padding: .5rem 1rem;\n  border-radius: 2px;\n  text-transform: uppercase;\n  font-size: 1rem;\n  background: linear-gradient(45deg, #4f5b7e, #252f48);\n  border: 0;\n  cursor: pointer;\n  color: #f0f2f5;\n  transition: all .25s ease-in; }\n  .btn--pink {\n    background: linear-gradient(45deg, #957fed, #fc74b0); }\n  .btn:hover:enabled {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); }\n  .btn:disabled {\n    cursor: not-allowed;\n    background: #aba8a8; }\n\n.pygg__logo {\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  width: 100px;\n  opacity: .3;\n  cursor: pointer; }\n  .pygg__logo-antennas {\n    stroke: #f0f2f5; }\n  .pygg__logo-circle {\n    fill: #f0f2f5; }\n  .pygg__logo-trace {\n    fill: #f0f2f5; }\n  .pygg__logo-triangles {\n    stroke: #f0f2f5; }\n\n.pygg__about {\n  text-align: center; }\n  .pygg__about h2 {\n    margin: 0 0 1rem; }\n  .pygg__about svg {\n    margin: 2rem 0 0;\n    max-width: 200px; }\n\n@media only screen and (max-width: 750px) {\n  html {\n    font-size: 90%; } }\n\n@media only screen and (max-width: 500px) {\n  html {\n    font-size: 80%; } }\n\n.coins {\n  padding: 1rem; }\n  .coins__empty {\n    padding: 1rem; }\n\n.coin {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: center;\n  padding: 0 0 0 1rem;\n  border-radius: 8px;\n  background: linear-gradient(45deg, #4f5b7e, #252f48);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);\n  margin: 0 0 1rem;\n  font-size: 1.5rem;\n  overflow: hidden;\n  position: relative; }\n  .coin:hover .coin__remove {\n    display: block; }\n  .coin--wallet {\n    min-width: 100%;\n    padding: 1rem;\n    background: linear-gradient(45deg, #957fed, #fc74b0); }\n    .coin--wallet h2 {\n      text-transform: uppercase; }\n  .coin__remove {\n    cursor: pointer;\n    display: none;\n    position: absolute;\n    top: .5rem;\n    right: 1rem; }\n  .coin__chart, .coin__info, .coin__data {\n    flex: 1; }\n  .coin__chart {\n    position: relative;\n    padding: 0.5rem 0 0;\n    align-self: flex-end; }\n    .coin__chart svg {\n      width: 100%; }\n    .coin__chart circle {\n      opacity: 0; }\n    .coin__chart path {\n      stroke-linecap: round;\n      stroke-linejoin: round; }\n    .coin__chart canvas {\n      max-width: 100%;\n      max-height: 100%; }\n  .coin__icon img {\n    filter: invert(0.9);\n    width: 60px; }\n  .coin__tooltip {\n    position: absolute;\n    bottom: .2rem;\n    width: 100%;\n    text-align: center;\n    font-size: .8rem; }\n  .coin__info p {\n    color: #aba8a8;\n    font-size: 1rem; }\n  .coin__qty {\n    text-transform: uppercase;\n    font-size: 1rem;\n    color: #aba8a8; }\n  .coin__gain {\n    text-transform: uppercase;\n    font-size: .9rem;\n    color: #aba8a8;\n    display: none; }\n    .coin__gain.-up {\n      color: #5ff557; }\n      .coin__gain.-up span:before {\n        content: \'+\'; }\n    .coin__gain.-down {\n      color: #f68f9f; }\n    .coin__gain.-price .coin__gain--percent {\n      display: none; }\n    .coin__gain.-percent .coin__gain--price {\n      display: none; }\n\n@media only screen and (min-width: 750px) {\n  .coin__gain {\n    display: block; } }\n\n@media only screen and (min-width: 900px) {\n  .coins {\n    padding: 4rem;\n    display: grid;\n    grid-column-gap: 2rem;\n    grid-row-gap: 2rem;\n    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }\n    .coins__empty {\n      grid-column: 1 / -1; }\n  .coin {\n    flex: 1;\n    flex-direction: column;\n    padding: 1rem 0 0; }\n    .coin .btn {\n      background: #252f48; }\n    .coin__chart circle {\n      opacity: 1; }\n    .coin--wallet {\n      flex-direction: row;\n      padding: 1rem;\n      grid-column: 1 / -1;\n      background: transparent;\n      box-shadow: 0 0 0 transparent; }\n    .coin__info {\n      margin: 1rem 0; } }\n\n.modal {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  margin: 0;\n  transform: translateY(-100%);\n  opacity: 0;\n  transition: all 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n  background: linear-gradient(45deg, #957fed, #fc74b0);\n  color: #f0f2f5;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .modal--open {\n    opacity: 1;\n    transform: translateY(0); }\n  .modal__close {\n    position: absolute;\n    top: 1rem;\n    right: 1rem; }\n\n.edit {\n  padding: 1rem;\n  min-width: 25rem;\n  border-radius: 8px;\n  background: linear-gradient(45deg, #4f5b7e, #252f48);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); }\n  .edit h2 {\n    margin: 0 0 1rem; }\n  .edit__field {\n    margin: 2rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    .edit__field label {\n      flex: 2; }\n    .edit__field input {\n      flex: 1;\n      padding: 0.6rem;\n      font-size: .8rem;\n      border-radius: 5px;\n      border: 1px solid #aba8a8; }\n\n/*# sourceMappingURL=index.scss.map */')},e.r(92)}($fsx);