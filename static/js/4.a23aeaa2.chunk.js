(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{100:function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},101:function(e,t,n){"use strict";n.r(t),n.d(t,"Auth",(function(){return m}));var a=n(25),i=n(6),r=n(7),u=n(9),l=n(8),s=n(0),c=n(1),o=n(17),d=n(5),h=n(95),p=n(34),b=n(43),g=n(100),j=n.n(g),v=n(18),f=n(4),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(e=t.call.apply(t,[this].concat(u))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Your Password"},value:"",validation:{required:!0,minLength:7},valid:!1,touched:!1}},isSignUp:!0},e.inputChangedHandler=function(t,n){var i=Object(f.b)(e.state.controls,Object(a.a)({},n,Object(f.b)(e.state.controls[n],{value:t.target.value,valid:Object(f.a)(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:i})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignUp)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignUp:!e.isSignUp}}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return Object(s.jsx)(h.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:t.config.touched&&!t.config.valid,shouldValidate:t.config.validation,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)}));this.props.loading&&(a=Object(s.jsx)(b.a,{}));var i=null;this.props.error&&(i=Object(s.jsx)("p",{children:this.props.error.message}));var r=null;return this.props.isAuthenticated&&(r=Object(s.jsx)(d.a,{to:this.props.authRedirectPath})),Object(s.jsxs)("div",{className:j.a.Auth,children:[r,i,Object(s.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(s.jsx)(p.a,{btnType:"Success",children:"Submit"})]}),Object(s.jsxs)(p.a,{clicked:this.switchAuthModeHandler,btnType:"Danger",children:["Switch to ",this.state.isSignUp?"Sign In":"Sign Up"]})]})}}]),n}(c.Component);t.default=Object(o.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(v.b(t,n,a))},onSetAuthRedirectPath:function(){return e(v.j("/"))}}}))(m)},95:function(e,t,n){"use strict";var a=n(14),i=n(0),r=(n(1),n(96)),u=n.n(r);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&n.push(u.a.Invalid),e.elementType){case"input":t=Object(i.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(i.jsx)("textarea",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(i.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(i.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(i.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(i.jsxs)("div",{className:u.a.Input,children:[Object(i.jsx)("label",{className:u.a.Label,children:e.label}),t]})}},96:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}}}]);
//# sourceMappingURL=4.a23aeaa2.chunk.js.map