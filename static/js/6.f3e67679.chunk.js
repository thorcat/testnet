(this["webpackJsonpcrosschain.quest"]=this["webpackJsonpcrosschain.quest"]||[]).push([[6],{1734:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a={average:.67,fast:1,fastest:1.5},i=function(e){var t,n=e.inboundData,a=e.chain,i=n.find((function(e){return e.chain===a}));return Number(null!==(t=null===i||void 0===i?void 0:i.gas_rate)&&void 0!==t?t:0)},c=function(e){var t=e.inboundData,n=e.chain,c=e.feeOptionType;return i({inboundData:t,chain:n})*a[c]}},1735:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n(114),c=n(21),r=n(126),o=n(1734),s=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.app})).feeOptionType,n=Object(i.c)((function(e){return e.wallet})).wallet,s=Object(i.c)((function(e){return e.midgard})).inboundData,l=Object(a.useCallback)((function(t){e(r.getWalletByChain(t))}),[e]),d=Object(a.useCallback)((function(){e(r.loadAllWallets())}),[e]);return{getMaxBalance:Object(a.useCallback)((function(e){if(!(null===n||void 0===n?void 0:n[e.L1Chain]))return c.Amount.fromAssetAmount(10,8);var a=Object(o.b)({inboundData:s,chain:e.L1Chain,feeOptionType:t}),i=c.NetworkFee.getNetworkFeeByAsset({asset:e,gasRate:a,direction:"inbound"}),r=Object(c.getAssetBalance)(e,n).amount,l=e.isGasAsset()?r.sub(i.mul(1.5).amount):r;return l.gt(0)?l:c.Amount.fromAssetAmount(0,e.decimal)}),[n,t,s]),reloadAllBalance:d,reloadBalanceByChain:l,wallet:n}}},1746:function(e,t,n){"use strict";n.r(t);var a,i,c,r,o,s,l=n(23),d=n(0),u=n(949),b=n(297),j=n(319),f=n.n(j),O=n(609),h=n(21),p=n(208),m=n(289),g=n(1735),x=n(75),v=n(245),w=n(8),k=n(52),A=n(5),y=n(6),C=A.d.div(a||(a=Object(w.a)(["\n  /* background-image: linear-gradient(\n    120deg,\n    ",",\n    ","\n  ); */\n  background: ",";\n  border-radius: 10px;\n  border: 1px solid ",";\n  box-shadow: 0px 0px 20px 0.1px rgba(69, 161, 255, 0.2);\n  margin: 3px;\n  width: 90%;\n  display: flex;\n  padding: 5px;\n  flex-direction: column;\n  align-items: center;\n"])),Object(y.palette)("background",6),Object(y.palette)("background",7),Object(y.palette)("background",3),Object(y.palette)("primary",0)),T=Object(A.d)(b.Panel)(i||(i=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background: ",";\n  width: 100%;\n  max-width: 500px;\n  margin: 1.61vh auto auto auto;\n  /* margin-left: auto;\n  margin-right: auto; */\n\n  padding: 0 -20px 0 -20px;\n  border-radius: 10px;\n  border: none;\n"])),(function(e){var t=e.theme;return"".concat(Object(k.c)(1,t.palette.background[5]))})),B=Object(A.d)(b.ContentTitle)(c||(c=Object(w.a)(["\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  text-align: center;\n"]))),S=Object(A.d)(b.ContentTitle)(r||(r=Object(w.a)(["\n  margin-top: 1rem;\n  margin-bottom: 0.5rem;\n  font-size: 10px;\n  text-align: center;\n"]))),R=A.d.div(o||(o=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  width: 100%;\n"]))),N=Object(A.d)(b.FancyButton)(s||(s=Object(w.a)(["\n  margin: 1.75rem;\n  width: 80%;\n"]))),M=n(1),D=function(){var e=Object(d.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(d.useState)(""),c=Object(l.a)(i,2),r=c[0],o=c[1],s=Object(d.useState)(""),j=Object(l.a)(s,2),w=j[0],k=j[1],A=Object(g.a)().wallet,y=Object(d.useState)(!1),D=Object(l.a)(y,2),H=D[0],F=D[1],I=Object(d.useCallback)((function(){f()(w),Object(b.Notification)({type:"info",message:"Address Copied",duration:3,placement:"bottomRight"})}),[w]),J=Object(d.useMemo)((function(){return Object(M.jsxs)(R,{children:[Object(M.jsx)(B,{children:"Become An Affiliate"}),Object(M.jsx)(b.Input,{disabled:!0,value:w}),Object(M.jsx)(b.Tooltip,{placement:"top",tooltip:"Copy",children:Object(M.jsx)(b.CoreButton,{onClick:I,children:Object(M.jsx)(u.a,{style:{color:"#08c"}})})})]})}),[I,w]);Object(d.useEffect)((function(){if(A){var e=Object(h.getWalletAddressByChain)(A,"THOR");a(e||""),o(e||"")}}),[A]);var P=Object(d.useMemo)((function(){var e=Object(v.a)(),t=null!==e&&void 0!==e?e:[];return new h.Percent(Math.pow(.8,t.length+1)).toFixed(2)}),[]),q=Object(d.useCallback)((function(){F(!1)}),[]);return Object(M.jsxs)(T,{children:[Object(M.jsx)(b.Helmet,{title:"Affiliate",content:"Affiliate"}),Object(M.jsxs)(C,{children:[Object(M.jsxs)(B,{children:["Join the Crosschain.Quest",Object(M.jsx)("br",{}),"Affiliate Program"]}),Object(M.jsx)(S,{children:"earn ".concat(P," of swap fees when you share this with a friend and if your friend becomes an affiliate you earn too!")}),Object(M.jsx)(m.a,{href:"http://crosschain.quest",target:"_blank",rel:"noopener noreferrer",children:"Read More"}),Object(M.jsx)(S,{children:"Step 1: Enter your thorchain address"}),Object(M.jsx)(b.AffiliateInput,{title:"address",address:n,chain:"THOR",chainAddr:r,onAddressChange:a}),Object(M.jsx)(S,{children:"Step 2: Generate an affilate link"}),Object(M.jsx)(N,{onClick:function(){var e=Object(v.a)(),t=null!==e&&void 0!==e?e:[];t.push(n);var a=t.filter((function(e){return x.a.validateAddress({chain:"THOR",address:e})}));if(x.a.validateAddress({chain:"THOR",address:n})){var i=Object(O.encode)(JSON.stringify(a),p.a);k("".concat(window.location.origin.toString(),"/#/?refs=").concat(i)),F(!0)}else Object(b.Notification)({type:"error",message:"Invalide Thorchain address",description:"Affiliate links must be valid thorchain addresses",duration:20})},error:!1,children:"Generate Link"}),Object(M.jsx)(S,{children:"Step 3: Share!"}),Object(M.jsx)(S,{children:w?Object(M.jsx)("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?text=Permissionless%20swaps%20across%20blockchains%20at%20&url=".concat(encodeURIComponent(w)),children:"Tweet"}):"generate a link to share first!"})]}),Object(M.jsx)(b.ConfirmModal,{visible:H,onOk:q,inputAssets:[],onCancel:q,children:H&&J})]})};t.default=D}}]);
//# sourceMappingURL=6.f3e67679.chunk.js.map