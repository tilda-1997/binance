(this.webpackJsonpbinance=this.webpackJsonpbinance||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var i,c,a,r,s,o=n(0),l=n.n(o),b=n(29),d=n.n(b),p=n(4),u=n(5),j=n(3),x=n(12),h=n(1),O=u.a.p(i||(i=Object(p.a)(["\n    color      : #DFDEE3;\n    font-family: Optima;\n    font-size  : 16px;\n    font-weight: 700;\n    display    : inline-block\n"]))),f=u.a.div(c||(c=Object(p.a)(["\n    padding   : 0px 8px 0px 16px;\n    text-align: center"]))),m=u.a.p(a||(a=Object(p.a)(["\n    color      : #B9CDE3;\n    font-family: Optima;\n    text-align : center\n"]))),g=function(){var e=Object(j.b)((function(e){return e.webReducer.status})),t=Object(j.b)((function(e){return e.webReducer.eventTime}));Object(j.b)((function(e){return e.webReducer.errorMsg}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{children:e?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{children:" Connected! Websocket is working. \xa0 "}),Object(h.jsx)(x.e,{style:{color:"#0fd850",width:"28px",height:"28px",display:"inline-block"}})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{children:" Disconnected! Please refresh the page \xa0 "}),Object(h.jsx)(x.b,{style:{color:"#ff9569",width:"28px",height:"28px",display:"inline-block"}})]})}),t[60]?Object(h.jsxs)(m,{children:[" ",Object(h.jsx)(x.c,{})," The data shows the real-time transactions of BinanceCoin BTC (BNB-BTC). Time event ",Object(h.jsx)(x.d,{}),"  From  ",t[0]," to ",t[60],". "]}):Object(h.jsxs)(m,{children:["  ",Object(h.jsx)(x.c,{})," The data shows the real-time transactions of BinanceCoin BTC (BNB-BTC).  "]})]})},v=n(2),w=n(11),k=u.a.div(r||(r=Object(p.a)(["\n  width  : 700px;\n  padding: 30px 80px 60px 60px;\n"])));function y(){var e,t,n=Object(j.b)((function(e){return e.webReducer.askPrice_max})),i=Object(j.b)((function(e){return e.webReducer.askPrice_min})),c={labels:Object(j.b)((function(e){return e.webReducer.eventTime})),datasets:[(e={label:"# Highest Ask Price",data:n,fill:!1,borderColor:"#FEAB72",pointRadius:0},Object(v.a)(e,"fill",!1),Object(v.a)(e,"lineTension",0),Object(v.a)(e,"borderWidth",2),e),(t={label:"# Lowest Ask Price",data:i,fill:!1,borderColor:"#B0EBE7",pointRadius:0},Object(v.a)(t,"fill",!1),Object(v.a)(t,"lineTension",0),Object(v.a)(t,"borderWidth",2),t)]};return Object(h.jsx)(k,{children:Object(h.jsx)(w.a,{data:c,options:{title:{display:!0,text:"High & low price of ask"},scales:{tooltips:{enabled:!1,mode:"index",position:"average"},hover:{mode:"index",intersect:!0},xAxes:[{ticks:{callback:function(e,t){return t%10===0?e:""}}}],yAxes:[{scaleLabel:{display:!0,labelString:"price (x0.001)",color:"#F7F8F6"},ticks:{beginAtZero:!1}}]}}})})}var P,B=u.a.div(s||(s=Object(p.a)(["\n  width  : 700px;\n  padding: 30px 30px 60px 10px;\n"])));function F(){var e,t,n=Object(j.b)((function(e){return e.webReducer.bidPrice_max})),i=Object(j.b)((function(e){return e.webReducer.bidPrice_min})),c={labels:Object(j.b)((function(e){return e.webReducer.eventTime})),datasets:[(e={label:"# Highest Bid Price",data:n,fill:!1,borderColor:"#FA8079",pointRadius:0},Object(v.a)(e,"fill",!1),Object(v.a)(e,"lineTension",0),Object(v.a)(e,"borderWidth",2),e),(t={label:"# Lowest Bid Price",data:i,fill:!1,borderColor:"#B1D1A6",pointRadius:0},Object(v.a)(t,"fill",!1),Object(v.a)(t,"lineTension",0),Object(v.a)(t,"borderWidth",2),t)]};return Object(h.jsx)(B,{children:Object(h.jsx)(w.a,{data:c,options:{title:{display:!0,text:"High & low price of bids"},scales:{tooltips:{enabled:!1,mode:"index",position:"average"},hover:{mode:"index",intersect:!0},xAxes:[{ticks:{callback:function(e,t){return t%10===0?e:""}}}],yAxes:[{scaleLabel:{display:!0,labelString:"price (x0.001)",color:"#F7F8F6"},ticks:{beginAtZero:!1}}]}}})})}var C,R=u.a.div(P||(P=Object(p.a)(["\n  width  : 700px;\n  padding: 30px 30px 30px 60px;\n"])));function A(){var e,t=Object(j.b)((function(e){return e.webReducer.bidPrice_max})),n=Object(j.b)((function(e){return e.webReducer.askPrice_max})),i={labels:Object(j.b)((function(e){return e.webReducer.eventTime})),datasets:[{label:"# Best Ask Price",data:n,fill:!1,borderColor:"#CFAFE2",backgroundColor:"#CFAFE2",pointRadius:5,pointHoverRadius:15,showLine:!1},(e={label:"# Best Bid Price",data:t,fill:!1,borderColor:"#FDE0A2",pointRadius:0,backgroundColor:"#FDE0A2"},Object(v.a)(e,"pointRadius",5),Object(v.a)(e,"pointHoverRadius",15),Object(v.a)(e,"showLine",!1),e)]};return Object(h.jsx)(R,{children:Object(h.jsx)(w.a,{data:i,options:{title:{display:!0,text:"See the best prices here"},elements:{point:{pointStyle:"rectRot"}},scales:{tooltips:{enabled:!1,mode:"index",position:"average"},hover:{mode:"index",intersect:!0},xAxes:[{ticks:{callback:function(e,t){return t%10===0?e:""}}}],yAxes:[{scaleLabel:{display:!0,labelString:"price (x0.001)",color:"#F7F8F6"},ticks:{beginAtZero:!1}}]}}})})}var T=u.a.div(C||(C=Object(p.a)(["\n  width  : 700px;\n  padding: 30px 30px 30px 10px;\n"])));function _(){var e,t=Object(j.b)((function(e){return e.webReducer.bidPrice_min})),n=Object(j.b)((function(e){return e.webReducer.askPrice_min})),i={labels:Object(j.b)((function(e){return e.webReducer.eventTime})),datasets:[{label:"# Lowest Ask Price",data:n,fill:!1,borderColor:"#96C4D8",backgroundColor:"#B2D0EB",pointRadius:5,pointHoverRadius:15,showLine:!1},(e={label:"# Lowest Bid Price",data:t,fill:!1,borderColor:"#DF6C7E",pointRadius:0,backgroundColor:"#FBB1B5"},Object(v.a)(e,"pointRadius",5),Object(v.a)(e,"pointHoverRadius",15),Object(v.a)(e,"showLine",!1),e)]};return Object(h.jsx)(T,{children:Object(h.jsx)(w.a,{data:i,options:{title:{display:!0,text:"See the lowest price here"},elements:{point:{pointStyle:"triangle"}},scales:{tooltips:{enabled:!1,mode:"index",position:"average"},hover:{mode:"index",intersect:!0},xAxes:[{ticks:{callback:function(e,t){return t%10===0?e:""}}}],yAxes:[{scaleLabel:{display:!0,labelString:"price (x0.001)",color:"#F7F8F6"},ticks:{beginAtZero:!1}}]}}})})}n(196);var E,S,L,D=u.a.div(E||(E=Object(p.a)(["\n  margin          : 0;\n  padding         : 0;\n  height          : 100%;\n  width           : 100%;\n  min-height      : 1100px;\n  background-color: rgb(20, 21, 26)\n"]))),M=u.a.h1(S||(S=Object(p.a)(["\n    padding    : 12px 8px 0px 16px;\n    color      : #DCE3EF;\n    font-family: Optima;\n    text-align : center;\n    margin-top    : 0\n"]))),H=u.a.div(L||(L=Object(p.a)(["\n  display              : grid;\n  grid-template-columns: [c-start] auto [c-line] auto [c-end];\n"])));var W,N=function(){return Object(h.jsxs)(D,{children:[Object(h.jsxs)(M,{children:[" ",Object(h.jsx)(x.a,{style:{width:"28px",height:"28px"}})," Binance Case - Depth of BNB-BTC "]}),Object(h.jsx)(g,{}),Object(h.jsxs)(H,{children:[Object(h.jsx)(y,{}),Object(h.jsx)(F,{}),Object(h.jsx)(A,{}),Object(h.jsx)(_,{})]})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))},J=n(10),I=Object(J.b)("buildConnection"),z=Object(J.b)("connectSuccess"),U=Object(J.b)("connectAction"),q=n(6),G=Object(J.c)({status:!1,list:[],asks:[],askPrice_max:[],askPrice_min:[],bids:[],bidPrice_max:[],bidPrice_min:[],eventTime:[],errorMsg:""},(W={},Object(v.a)(W,I.type,(function(e){return console.log("start connection"),e})),Object(v.a)(W,z.type,(function(e,t){e.status=!0;for(var n=t.payload,i=new Date(n.E).toLocaleTimeString("en-US"),c=n.a.filter((function(e){return e[1]>0})),a=[],r=0;r<c.length;r++)a.push(c[r][0]);for(var s=Math.max.apply(Math,a),o=Math.min.apply(Math,a),l=n.b.filter((function(e){return e[1]>0})),b=[],d=0;d<l.length;d++)b.push(l[d][0]);var p=Math.max.apply(Math,b),u=Math.min.apply(Math,b);return e.list.length<=60?(e.list.push(t.payload),e.asks.push(c[0]),e.bids.push(l[0]),e.eventTime.push(i),e.askPrice_max.push(1e3*s),e.askPrice_min.push(1e3*o),e.bidPrice_max.push(1e3*p),e.bidPrice_min.push(1e3*u)):e.list.length>60&&(e.list.splice(0,1),e.list.push(t.payload),e.asks.splice(0,1),e.asks.push(c[0]),e.bids.splice(0,1),e.bids.push(l[0]),e.eventTime.splice(0,1),e.eventTime.push(i),e.askPrice_max.splice(0,1),e.askPrice_max.push(1e3*s),e.askPrice_min.splice(0,1),e.askPrice_min.push(1e3*o),e.bidPrice_max.splice(0,1),e.bidPrice_max.push(1e3*p),e.bidPrice_min.splice(0,1),e.bidPrice_min.push(1e3*u)),e})),Object(v.a)(W,U.type,(function(e,t){return e.errorMsg=t.payload,e.status=!1,e})),W)),K=Object(q.c)({webReducer:G}),Q=Object(J.a)({reducer:K,middleware:[function(e){return function(t){return function(n){var i=n.type;if(t(n),i===I.toString())try{var c=new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth");console.log("ws",c),c.onopen=function(){console.log("connected")},c.onmessage=function(t){var n=JSON.parse(t.data);e.dispatch(z(n))},c.onerror=function(t){console.log("error",t),e.dispatch(U(t))}}catch(a){console.log("error",a)}}}}]});Q.dispatch(I());var V=Q;d.a.render(Object(h.jsx)(l.a.StrictMode,{children:Object(h.jsx)(j.a,{store:V,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),Z()}},[[197,1,2]]]);
//# sourceMappingURL=main.0ac878ef.chunk.js.map