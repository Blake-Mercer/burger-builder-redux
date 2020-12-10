(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"Checkout",(function(){return T}));var a=n(6),r=n(7),i=n(9),c=n(8),o=n(0),l=n(1),u=n(5),s=n(17),d=n(54),p=n(34),h=n(97),v=n.n(h),j=function(e){return Object(o.jsxs)("div",{className:v.a.CheckoutSummary,children:[Object(o.jsx)("h1",{children:"We hope you enjoy!"}),Object(o.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(o.jsx)(d.a,{ingredients:e.ingredients})}),Object(o.jsx)(p.a,{btnType:"Danger",clicked:e.checkoutCanceled,children:"Cancel"}),Object(o.jsx)(p.a,{btnType:"Success",clicked:e.checkoutContinued,children:"Continue"})]})},b=n(25),m=n(98),g=n.n(m),f=n(20),O=n(43),C=n(95),y=n(44),x=n(18),k=n(4),I=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zip:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP CODE"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"Fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,n){var a=Object(k.b)(e.state.orderForm[n],{value:t.target.value,valid:Object(k.a)(t.target.value,e.state.orderForm[n].validation),touched:!0}),r=Object(k.b)(e.state.orderForm,Object(b.a)({},n,a)),i=!0;for(var c in r)i=r[c].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(o.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(o.jsx)(C.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:t.config.touched&&!t.config.valid,shouldValidate:t.config.validation,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(o.jsx)(p.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"Order!"})]});return this.props.loading&&(a=Object(o.jsx)(O.a,{})),Object(o.jsxs)("div",{className:g.a.ContactData,children:[Object(o.jsx)("h4",{children:"Enter your Contact Data"}),a]})}}]),n}(l.Component),_=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(x.g(t,n))}}}))(Object(y.a)(I,f.a)),T=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).checkoutCanceledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(o.jsx)(u.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(o.jsx)(u.a,{to:"/"}):null;e=Object(o.jsxs)("div",{children:[t,Object(o.jsx)(j,{ingredients:this.props.ings,checkoutCanceled:this.checkoutCanceledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(o.jsx)(u.b,{path:this.props.match.path+"/contact-data",component:_})]})}return e}}]),n}(l.Component);t.default=Object(s.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(T)},95:function(e,t,n){"use strict";var a=n(14),r=n(0),i=(n(1),n(96)),c=n.n(i);t.a=function(e){var t=null,n=[c.a.InputElement];switch(e.invalid&&e.shouldValidate&&n.push(c.a.Invalid),e.elementType){case"input":t=Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(r.jsxs)("div",{className:c.a.Input,children:[Object(r.jsx)("label",{className:c.a.Label,children:e.label}),t]})}},96:function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},97:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},98:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}}}]);
//# sourceMappingURL=3.b92aa908.chunk.js.map