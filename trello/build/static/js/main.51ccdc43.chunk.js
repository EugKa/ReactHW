(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{17:function(t,e,n){t.exports={header:"app_header__2OBdT",link:"app_link__2n1PQ",main:"app_main__7a6I2",login:"app_login__20Xd6",login_link:"app_login_link__297kD"}},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var r,a=n(0),c=n.n(a),o=n(26),i=n(2),u=n(12),s=n(13),d=n(15),l=n(14),p=n(18),O=n(17),f=n.n(O),_=n(1),b=function(t){var e=t.title,n=t.path;return Object(_.jsx)(p.a,{to:n,className:f.a.link,children:e})},E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APP_NAME:"MyTrelloApp",REACT_APP_APY_KEY:"63e14cc212fae521ee2c6f0dcf5d8cc1",REACT_APP_REDIRECT_URL:"http://my-trello-app.com",REACT_APP_SCOPE:"read,write,account",REACT_APP_URL:"https://api.trello.com"}),h=E.REACT_APP_APY_KEY,j=E.REACT_APP_APP_NAME,S=E.REACT_APP_REDIRECT_URL,A=E.REACT_APP_SCOPE,T=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t="https://trello.com/1/authorize?return_url=".concat(S,"&expiration=1day&name=").concat(j,"&scope=").concat(A,"&response_type=token&key=").concat(h);return Object(_.jsx)("div",{className:f.a.login,children:Object(_.jsx)("a",{className:f.a.login_link,href:t,children:"Login with trello"})})}}]),n}(a.Component),D=n(8);!function(t){t.DATA_BOARD="@@BOARDS/DATA_BOARDS",t.SET_BOARDS="@@BOARDS/SET_BOARDS"}(r||(r={}));var R,v={boardsList:[]},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case r.SET_BOARDS:return Object(i.a)(Object(i.a)({},t),{},{boardsList:a});default:return t}},m=function(t){return t.boards.boardsList},y=function(t,e){return function(n,r,a){return function(c){("string"!==typeof t?-1!==t.indexOf(c.type):t===c.type)?e({action:c,next:n,dispatch:r,getState:a}):n(c)}}},P=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_APP_NAME:"MyTrelloApp",REACT_APP_APY_KEY:"63e14cc212fae521ee2c6f0dcf5d8cc1",REACT_APP_REDIRECT_URL:"http://my-trello-app.com",REACT_APP_SCOPE:"read,write,account",REACT_APP_URL:"https://api.trello.com"}),x=P.REACT_APP_URL,g=P.REACT_APP_APY_KEY,N=function(t,e,n){var r=x+t+"key=".concat(g);return e&&n&&(r+="&token=".concat(n)),r},L={},U=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return t};!function(t){t.REQUEST="@@SERVICE/REQUEST",t.SUCCESS="@@SERVICE/SUCCESS",t.ERROR="@@SERVICE/ERROR"}(R||(R={}));var I,k=function(t){return Object(i.a)({type:R.REQUEST},t)},B=n(22),w=n.n(B),H=n(28);!function(t){t.SET_TOKEN="@@AUTH/SET_TOKEN",t.READ_TOKEN="@@AUTH/READ_TOKEN",t.LOGOUT="@@AUTH/LOGOUT"}(I||(I={}));var F,K={token:""},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case I.SET_TOKEN:return Object(i.a)(Object(i.a)({},t),{},{token:r});default:return t}},G=function(t){return{type:I.SET_TOKEN,payload:t}},W=function(t){return t.auth.token},q=function(t){return!!t.auth.token},Y=n(24),V=n(9),X=function(t){return{type:V.a,payload:{location:{pathname:t},action:"POP"}}},Q=function(t){return Object(Y.b)(t)},z="CUSTOM_APP_TOKEN",J=function(t){var e,n,r=t.action,a=t.next,c=t.dispatch;e=z,n=r.payload,window.localStorage.setItem(e,n),c(X(Nt.DASHBOARD)),a(r)},Z=function(t){var e,n=t.action,r=t.next,a=t.dispatch,c=(e=z,window.localStorage.getItem(e));c&&a(G(c)),r(n)},$=function(t){var e=t.action,n=t.next,r=t.dispatch;r(G("")),r(X(Nt.HOME)),n(e)},tt=[function(t){var e=t.dispatch;return function(t){return y(I.SET_TOKEN,J)(t,e)}},function(t){var e=t.dispatch;return function(t){return y(I.READ_TOKEN,Z)(t,e)}},function(t){var e=t.dispatch;return function(t){return y(I.LOGOUT,$)(t,e)}}],et=function(){var t=Object(H.a)(w.a.mark((function t(e){var n,r,a,c,o,i,u,s,d,l,p;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.action,e.next,r=e.getState,a=n.path,c=n.method,o=n.onSuccess,i=n.authRequired,u=r(),s=W(u),d={method:c,headers:{Accept:"application/json","Content-Type":"application/json"}},t.next=7,fetch(N(a,i,s),d);case 7:return(l=t.sent).status>=400&&console.log("errror"),t.next=11,l.json();case 11:p=t.sent,o(p);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),nt=[function(t){var e=t.dispatch,n=t.getState;return function(t){return y(R.REQUEST,et)(t,e,n)}}],rt=function(t){var e=t.dispatch;e(k({path:"/1/members/me/boards?",authRequired:!0,onSuccess:function(t){console.log(t),e(function(t){return{type:r.SET_BOARDS,payload:t}}(t))},onError:function(t){console.log(t)}}))},at=[function(t){var e=t.dispatch;return function(t){return y(r.DATA_BOARD,rt)(t,e)}}],ct=n(6),ot=n.n(ct),it=function(t){var e=t.name,n=t.id,r=t.prefs;console.log(n);var a={backgroundColor:r.backgroundColor};return Object(_.jsx)(p.a,{id:n,className:ot.a.link,to:"".concat(Nt.BOARD_DETAILS,"/").concat(n),children:Object(_.jsx)("div",{className:ot.a.board,style:a,children:e})})},ut=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getBoards()}},{key:"render",value:function(){return console.log(this.props.boards),Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:ot.a.boardWrapp,children:this.props.boards.map((function(t){return Object(_.jsx)(it,Object(i.a)({},t),t.id)}))})})}}]),n}(a.Component),st=Object(D.c)((function(t){return{boards:m(t)}}),(function(t){return{getBoards:function(){return t({type:r.DATA_BOARD})}}}))(ut),dt=function(t){return Object(_.jsx)("h1",{children:"Not Found"})},lt=n(4);!function(t){t.GET_USER_PROFILE="@@USER/GET_USER",t.SET_USER_PROFILE="@@USER/SET_USER"}(F||(F={}));var pt,Ot={userParam:[]},ft=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case F.SET_USER_PROFILE:return Object(i.a)(Object(i.a)({},t),{},{userParam:r});default:return t}},_t=function(t){return{type:F.SET_USER_PROFILE,payload:t}},bt=function(t){return t.user.userParam},Et=function(t){return"https://api.trello.com/1/members/me?key=".concat("63e14cc212fae521ee2c6f0dcf5d8cc1","&token=").concat(t)},ht=function(){var t=Object(H.a)(w.a.mark((function t(e){var n,r,a,c,o;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.state,a=W(r),t.next=4,fetch(Et(a));case 4:if(!0!==(c=t.sent).ok||200!==c.status){t.next=13;break}return t.next=8,c.json();case 8:o=t.sent,console.log("user",o),n(_t(o)),t.next=14;break;case 13:throw Error("errror");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),jt=[function(t){var e=t.dispatch,n=t.getState;return function(t){return function(r){var a=n();r.type===F.GET_USER_PROFILE?ht({dispatch:e,state:a}):t(r)}}}],St=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser()}},{key:"render",value:function(){var t=this.props.UserParam,e=t.fullName,n=t.initials,r=t.username;return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{children:e}),Object(_.jsx)("div",{children:n}),Object(_.jsx)("div",{children:r})]})}}]),n}(a.Component),At=Object(D.c)((function(t){return{UserParam:bt(t)}}),(function(t){return{getUser:function(){return t({type:F.GET_USER_PROFILE})}}}))(St),Tt=n(16);!function(t){t.DATA_CARDS="@@CARDS/DATA_CARDS",t.SET_CARDS="@@CARDS/SET_CARDS",t.ADD_CARD="@@CARD/ADD_CARD",t.SUCCESS_ADDED_CARD="@@CARD/SUCCESS_ADDED_CARD",t.DELETE_CARD="@@CARD/DELETE_CARD",t.SUCCESS_DELETE_CARD="@@CARD/SUCCESS_DELETE_CARD"}(pt||(pt={}));var Dt,Rt=n(54),vt={cards:[]},Ct=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case pt.SET_CARDS:return Object(i.a)(Object(i.a)({},t),{},{cards:r});case pt.SUCCESS_ADDED_CARD:var a={name:r.name,idList:r.idList,id:Object(Rt.a)()};return Object(i.a)(Object(i.a)({},t),{},{cards:[].concat(Object(Tt.a)(t.cards),[a])});case pt.SUCCESS_DELETE_CARD:return Object(i.a)(Object(i.a)({},t),{},{cards:t.cards.filter((function(t){return t.id!==r.id}))});default:return t}},mt=function(t){return t.cards.cards},yt=function(t){var e=t.dispatch,n=t.action.payload;return e(k({path:"/1/boards/".concat(n,"/cards?"),authRequired:!0,onSuccess:function(t){console.log("cards",t),e(function(t){return{type:pt.SET_CARDS,payload:t}}(t))},onError:function(t){console.log(t)}}))},Pt=function(t){var e=t.dispatch,n=t.action;console.log("deleteCardAction",n);var r=n.payload;return e(k({path:"/1/cards/".concat(r,"?"),method:"DELETE",authRequired:!0,onSuccess:function(t){console.log("delete",r),e(function(t){return{type:pt.SUCCESS_DELETE_CARD,payload:t}}({id:r}))},onError:function(t){console.log(t)}}))},xt=function(t){var e=t.dispatch,n=t.action,r=t.getState;console.log("addCardAction",n);var a=r(),c=W(a),o=n.payload.idList,i=n.payload.name,u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,idList:o})};fetch("https://api.trello.com/1/cards?key=".concat("63e14cc212fae521ee2c6f0dcf5d8cc1","&token=").concat(c,"&idList=").concat(o),u).then((function(t){return t.json()})).then((function(t){return e(function(t){return{type:pt.SUCCESS_ADDED_CARD,payload:t}}(t))}))},gt=[function(t){var e=t.dispatch,n=t.getState;return function(t){return y(pt.DATA_CARDS,yt)(t,e,n)}},function(t){var e=t.dispatch,n=t.getState;return function(t){return y(pt.ADD_CARD,xt)(t,e,n)}},function(t){var e=t.dispatch,n=t.getState;return function(t){return y(pt.DELETE_CARD,Pt)(t,e,n)}}];!function(t){t.DATALISTS="@@LISTS/DATA_LISTS",t.SET_LISTS="@@LISTS/SET_LISTS"}(Dt||(Dt={}));var Nt,Lt={lists:[]},Ut=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(n){case Dt.SET_LISTS:return Object(i.a)(Object(i.a)({},t),{},{lists:r});default:return t}},It=function(t){return t.lists.lists},kt=function(t){var e=t.dispatch,n=t.action.payload;return e(k({path:"/1/boards/".concat(n,"/lists?"),authRequired:!0,onSuccess:function(t){console.log("lists",t),e(function(t){return{type:Dt.SET_LISTS,payload:t}}(t))},onError:function(t){console.log(t)}}))},Bt=[function(t){var e=t.dispatch;return function(t){return y(Dt.DATALISTS,kt)(t,e)}}],wt=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={activeForm:!1,name:""},t.onFormChange=function(){t.setState((function(t){return{activeForm:!t.activeForm}}))},t.onChange=function(e){t.setState({name:e.target.value}),console.log(t.state.name)},t.onSubmitForm=function(e,n){e.preventDefault(),t.props.handleSubmit(t.state.name,n),t.setState({name:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props.id;return Object(_.jsx)("div",{className:"add-card",children:this.state.activeForm?Object(_.jsxs)("form",{className:ot.a.form,onSubmit:function(n){return t.onSubmitForm(n,e)},children:[Object(_.jsx)("textarea",{className:ot.a.textarea,name:"text",placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",onChange:this.onChange,value:this.state.name}),Object(_.jsxs)("div",{className:ot.a.btnWrapper,children:[Object(_.jsx)("button",{type:"submit",className:ot.a.submitBtn,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}),Object(_.jsx)("button",{onClick:this.onFormChange,className:ot.a.closeBtn,children:"X"})]})]}):Object(_.jsx)("button",{onClick:this.onFormChange,className:ot.a.addCardBtn,children:"+ \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})})}}]),n}(c.a.Component),Ht=function(t){var e=t.dataCard,n=t.onDelete,r=e.name,a=e.id;return Object(_.jsxs)("div",{className:ot.a.card,children:[r,Object(_.jsx)("button",{onClick:function(){return n(a)},className:ot.a.deleteBtn,children:"X"})]})},Ft=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onDelete=function(e){t.props.deleteCard(e)},t.handleSubmit=function(e,n){t.props.addCard({name:e,idList:n})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t,e;this.props.getLists(null===(t=this.props.match)||void 0===t?void 0:t.params.id),this.props.getCards(null===(e=this.props.match)||void 0===e?void 0:e.params.id)}},{key:"render",value:function(){var t=this,e=this.props,n=e.cards,r=e.lists;return Object(_.jsx)("div",{className:ot.a.boardDetails,children:Object(_.jsx)("div",{className:ot.a.wrapper,children:r.map((function(e){return Object(_.jsxs)("div",{className:ot.a.list,children:[Object(_.jsx)("h3",{children:e.name}),Object(_.jsx)("div",{className:"card-wrapper",children:n.map((function(n){if(e.id===n.idList)return Object(_.jsx)(Ht,{dataCard:n,onDelete:function(e){return t.onDelete(e)}},n.id)}))}),Object(_.jsx)(wt,Object(i.a)(Object(i.a)({},e),{},{handleSubmit:function(e,n){return t.handleSubmit(e,n)}}))]},e.id)}))})})}}]),n}(a.Component),Kt=Object(D.c)((function(t){return{lists:It(t),cards:mt(t)}}),(function(t){return{getLists:function(e){return t(function(t){return{type:Dt.DATALISTS,payload:t}}(e))},getCards:function(e){return t(function(t){return{type:pt.DATA_CARDS,payload:t}}(e))},deleteCard:function(e){return t(function(t){return{type:pt.DELETE_CARD,payload:t}}(e))},addCard:function(e){return t(function(t){return{type:pt.ADD_CARD,payload:t}}(e))}}}))(Ft);!function(t){t.LOGIN="/login",t.DASHBOARD="/dashboard",t.OAUTH="/oauth",t.NOT_FOUND="/404",t.HOME="/",t.USER_PAGE="/user",t.BOARD_DETAILS="/board"}(Nt||(Nt={}));var Mt,Gt=[{path:Nt.LOGIN,render:function(t){return Object(_.jsx)(T,Object(i.a)({},t))},title:"Login",isHidden:!0},{path:Nt.DASHBOARD,render:function(t){return Object(_.jsx)(st,Object(i.a)({},t))},title:"Dashboard",isProtected:!0},{path:Nt.USER_PAGE,render:function(t){return Object(_.jsx)(At,Object(i.a)({},t))},title:"UserPage",isProtected:!0,isHidden:!0},{path:"".concat(Nt.BOARD_DETAILS,"/:id"),render:function(t){return Object(_.jsx)(Kt,Object(i.a)({},t))},title:"BoardDetails",isProtected:!0,isHidden:!0},{path:Nt.HOME,render:function(){return Object(_.jsx)(lt.a,{to:Nt.LOGIN})},isHidden:!0,exact:!0},{path:Nt.NOT_FOUND,render:function(t){return Object(_.jsx)(dt,Object(i.a)({},t))},isHidden:!0}],Wt=Object(D.c)(void 0,(function(t){return{onLogOut:function(){return t({type:I.LOGOUT})}}}))((function(t){var e=t.onLogOut;return Object(_.jsx)("header",{className:f.a.header,children:Object(_.jsxs)("div",{children:[Gt.map((function(t,e){var n=t.title,r=t.path;return t.isHidden?null:Object(_.jsx)(b,{title:n,path:r},e)})),Object(_.jsx)("button",{onClick:e,children:"Log out"})]})})})),qt=Object(D.c)(void 0,(function(t){return{onSetToken:function(e){return t(G(e))}}}))((function(t){var e=t.location.hash,n=t.onSetToken,r=e.split("=")[1];return n&&n(r),Object(_.jsx)(lt.a,{to:Nt.DASHBOARD})})),Yt=n(37),Vt=Object(D.c)((function(t){return{isAuthenticated:q(t)}}))((function(t){var e=t.render,n=t.isAuthenticated,r=Object(Yt.a)(t,["render","isAuthenticated"]);return Object(_.jsx)(lt.b,Object(i.a)(Object(i.a)({},r),{},{render:function(t){return n?e(t):Object(_.jsx)(lt.a,{to:{pathname:"/login",state:{from:t.location}}})}}))})),Xt=(n(52),{token:"",boards:[],userProfile:void 0}),Qt=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state=Xt,t.renderRoute=function(t,e){return t.isProtected?Object(_.jsx)(Vt,{exact:t.exact,path:t.path,render:t.render},e):Object(_.jsx)(lt.b,{exact:t.exact,path:t.path,render:function(e){return t.render(Object(i.a)({},e))}},e)},t}return Object(s.a)(n,[{key:"renderContent",value:function(){return Object(_.jsx)("main",{className:f.a.main,children:Object(_.jsxs)(lt.d,{children:[Gt.map(this.renderRoute),Object(_.jsx)(lt.b,{path:Nt.OAUTH,render:function(t){return Object(_.jsx)(qt,Object(i.a)({},t))}}),Object(_.jsx)(lt.a,{to:Nt.NOT_FOUND})]})})}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"page",children:[Object(_.jsx)(Wt,{}),this.renderContent()]})}}]),n}(a.Component),zt=n(19);!function(t){t.INCREASE_COUNT="@@COUNTER/INCREASE_COUNT",t.DECREASE_COUNT="@@COUNTER/DECREASE_COUNT"}(Mt||(Mt={}));var Jt,Zt={count:0},$t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Zt,e=arguments.length>1?arguments[1]:void 0,n=e.type;switch(n){case Mt.INCREASE_COUNT:return Object(i.a)(Object(i.a)({},t),{},{count:t.count+1});case Mt.DECREASE_COUNT:return Object(i.a)(Object(i.a)({},t),{},{count:t.count-1});default:return t}};!function(t){t.INIT="@@INIT/APP",t.START="@@INIT/START",t.END="@@INIT/END",t.RESET="@@INIT/RESET"}(Jt||(Jt={}));var te=function(t){var e=t.action,n=t.dispatch,r=t.next;n({type:Jt.START}),n({type:I.READ_TOKEN}),n({type:Jt.END}),r(e)},ee=[function(t){var e=t.dispatch;return function(t){return y(Jt.INIT,te)(t,e)}}],ne=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,zt.d);var re=n(36),ae=Object(re.a)(),ce=function(t){var e=Object(zt.c)({router:Q(t),counter:$t,auth:M,boards:C,user:ft,service:U,lists:Ut,cards:Ct});return Object(zt.e)(e,void 0,ne(zt.a.apply(void 0,Object(Tt.a)(tt).concat(Object(Tt.a)(at),Object(Tt.a)(jt),Object(Tt.a)(nt),Object(Tt.a)(ee),Object(Tt.a)(Bt),Object(Tt.a)(gt)))))}(ae);ce.dispatch({type:Jt.INIT}),o.render(Object(_.jsx)(D.a,{store:ce,children:Object(_.jsx)(Y.a,{history:ae,children:Object(_.jsx)(Qt,{})})}),document.querySelector("#root"))},6:function(t,e,n){t.exports={boardDetails:"boardDetails_boardDetails__133Ck",wrapper:"boardDetails_wrapper__1V-8P",link:"boardDetails_link__2PRzq",boardWrapp:"boardDetails_boardWrapp__2bRk5",board:"boardDetails_board__1LBK3",list:"boardDetails_list__2KwPB",card:"boardDetails_card__bMezW",addCardBtn:"boardDetails_addCardBtn__3qjhN",textarea:"boardDetails_textarea__y3wco",btnWrapper:"boardDetails_btnWrapper__NedwO",submitBtn:"boardDetails_submitBtn__qS05y",deleteBtn:"boardDetails_deleteBtn__2oPXa"}}},[[53,1,2]]]);
//# sourceMappingURL=main.51ccdc43.chunk.js.map