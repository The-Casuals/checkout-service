(self.webpackChunk=self.webpackChunk||[]).push([[116],{116:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Se});var r=n(294),a=n(163),i=n(697),o=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=a.ZP.td.withConfig({displayName:"calendarCell__Td",componentId:"bg95yk-0"})(["text-decoration:",";font-size:14px;color:",";font-weight:",";height:40px;width:40px;"],(function(e){return e.crossOut?"line-through":"none"}),(function(e){return e.crossOut?"rgb(176, 176, 176)":"rgb(34, 34, 34)"}),(function(e){return e.crossOut?"300":"500"})),m=a.ZP.div.withConfig({displayName:"calendarCell__Cell",componentId:"bg95yk-1"})([";background:rgb(255,255,255);:hover{border:1.5px solid rgb(34,34,34);border-radius:100px;}height:40px;width:40px;text-align:center;vertical-align:middle;box-sizing:border-box;margin-left:1px !important;margin-right:1px !important;display:flex !important;align-items:center !important;justify-content:center !important;flex-direction:column !important;border-radius:100% !important;position:relative !important;"]),h=a.ZP.div.withConfig({displayName:"calendarCell__Hover",componentId:"bg95yk-2"})(["background:rgb(247,247,247);background:#f1efef;height:40px;width:40px;text-align:center;vertical-align:middle;box-sizing:border-box;margin-left:1px !important;margin-right:1px !important;display:flex !important;align-items:center !important;justify-content:center !important;flex-direction:column !important;position:relative !important;"]),b=a.ZP.div.withConfig({displayName:"calendarCell__UnavailableCell",componentId:"bg95yk-3"})(["background:rgb(255,255,255);height:40px;width:40px;text-align:center;vertical-align:middle;box-sizing:border-box;margin-left:1px !important;margin-right:1px !important;display:flex !important;align-items:center !important;justify-content:center !important;flex-direction:column !important;border-radius:100% !important;position:relative !important;"]),y=a.ZP.div.withConfig({displayName:"calendarCell__ClickedCell",componentId:"bg95yk-4"})(["height:40px;width:40px;text-align:center;vertical-align:middle;box-sizing:border-box;margin-left:1px !important;margin-right:1px !important;display:flex !important;align-items:center !important;justify-content:center !important;flex-direction:column !important;border-radius:100% !important;position:relative !important;background:rgb(34,34,34) !important;border:1.5px solid rgb(34,34,34) !important;color:rgb(255,255,255) !important;"]),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(c,e);var t,n,a,i,o=(a=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(i){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).handleClick=t.handleClick.bind(p(t)),t}return t=c,(n=[{key:"handleClick",value:function(){var e=this.props.handleDateClick,t=this.props.cellInfo;e(t.month,t.day)}},{key:"whichCellStyle",value:function(){var e=this.props.cellInfo;if(e){var t=this.props.cellHover,n=this.props,a=n.checkinDate,i=n.checkoutDate,o=n.availableAfterCheckin,c=n.hoverDate,l=n.today,u=a.month,s=a.day,p=i.month,d=i.day,g=c.month,x=c.day,v=e.month,k=e.day,C=e.available,w=v===u&&k===s,_=v===p&&k===d;return k<=l.day+1&&v<=l.month?r.createElement(f,{crossOut:!0},r.createElement(b,null,k)):w||_?r.createElement(f,{crossOut:1===C},r.createElement(y,{onClick:this.handleClick},k)):s?v===u&&k>s&&k<=o?v>=u&&v<=g&&k>s&&k<=x?r.createElement(f,{crossOut:1===C},r.createElement(h,{onClick:this.handleClick,onMouseEnter:function(){return t(v,k)},onMouseLeave:function(){return t()}},k)):r.createElement(f,{crossOut:1===C},r.createElement(m,{onClick:this.handleClick,onMouseEnter:function(){return t(v,k)},onMouseLeave:function(){return t()}},k)):r.createElement(f,{crossOut:!0},r.createElement(b,null,k)):0===C?r.createElement(f,{crossOut:1===C},r.createElement(m,{onClick:this.handleClick,onMouseEnter:function(){return t(v,k)},onMouseLeave:function(){return t()}},k)):r.createElement(f,{crossOut:1===C},r.createElement(b,null,k))}return r.createElement(f,{crossOut:!1})}},{key:"render",value:function(){return this.whichCellStyle()}}])&&l(t.prototype,n),c}(r.Component);const x=g;g.propTypes={availableAfterCheckin:o().number,cellInfo:o().shape({_id:o().string.isRequired,available:o().number.isRequired,dayOfWeek:o().number.isRequired,day:o().number.isRequired,month:o().number.isRequired}),handleDateClick:o().func,checkinDate:o().shape({month:o().number,day:o().number}),checkoutDate:o().shape({month:o().number,day:o().number}),cellHover:o().func,hoverDate:o().shape({month:o().number,day:o().number})},g.defaultProps={checkinDate:{},checkoutDate:{},hoverDate:{},availableAfterCheckin:0,cellInfo:void 0,cellHover:function(){},handleDateClick:function(){}};var v=function(e){for(var t=e.row,n=e.handleDateClick,a=e.cellHover,i=e.checkinDate,o=e.hoverDate,c=e.checkoutDate,l=e.availableAfterCheckin,u=e.today,s=[],p=0;p<7;p+=1)t[p]?s.push(r.createElement(x,{handleDateClick:n,cellInfo:t[p],cellHover:a,checkinDate:i,hoverDate:o,checkoutDate:c,key:JSON.stringify(t[p]),availableAfterCheckin:l,today:u})):s.push(r.createElement(x,{key:p}));return r.createElement("tr",null,s)};const k=v;v.propTypes={availableAfterCheckin:o().number.isRequired,row:o().arrayOf(o().shape({_id:o().string.isRequired,available:o().number.isRequired,dayOfWeek:o().number.isRequired,day:o().number.isRequired,month:o().number.isRequired})).isRequired,handleDateClick:o().func.isRequired,checkinDate:o().shape({month:o().number,day:o().number}),checkoutDate:o().shape({month:o().number,day:o().number}),cellHover:o().func.isRequired,hoverDate:o().shape({month:o().number,day:o().number})},v.defaultProps={checkinDate:{},checkoutDate:{},hoverDate:{}};var C=a.ZP.table.withConfig({displayName:"calendarTable__Table",componentId:"sc-1fgz3cb-0"})(['color:rgb(34,34,34);margin:0px 5px;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-weight:400;font-size:16px;line-height:20px;width:294px;']),w=a.ZP.tbody.withConfig({displayName:"calendarTable__TableBody",componentId:"sc-1fgz3cb-1"})(["display:table-row-group;vertical-align:middle;border-color:inherit;border-spacing:0px 2px;border-collapse:separate;"]),_=a.ZP.div.withConfig({displayName:"calendarTable__HeaderFlex",componentId:"sc-1fgz3cb-2"})(["flex:1;display:flex;vertical-align:center;"]),D=a.ZP.div.withConfig({displayName:"calendarTable__MonthContainer",componentId:"sc-1fgz3cb-3"})(["margin:0 auto;font-size:16px;line-height:20px;text-align:center;font-weight:500;padding-top:22px;padding-bottom:22px;"]),R=a.ZP.h3.withConfig({displayName:"calendarTable__CalendarHeading",componentId:"sc-1fgz3cb-4"})(['color:rgb(176,176,176) font-size:1em;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;']),E=a.ZP.div.withConfig({displayName:"calendarTable__FlexDiv1",componentId:"sc-1fgz3cb-5"})(["flex:1;width:320px;"]),I=a.ZP.th.withConfig({displayName:"calendarTable__Th",componentId:"sc-1fgz3cb-6"})(['font-size:12px;text-align:center;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-weight:600;color:rgb(144,144,144);']),P=function(e){var t=e.month,n=e.handleDateClick,a=e.cellHover,i=e.title,o=e.availableAfterCheckin,c=e.checkinDate,l=e.hoverDate,u=e.checkoutDate,s=e.focus,p=e.today,d=[[],[],[],[],[],[]],f=0;t.forEach((function(e){d[f][e.dayOfWeek]=e,6===e.dayOfWeek&&(f+=1)}));var m=[];return d.forEach((function(e){if(e.filter((function(e){return void 0!==e})).length>0){var t=r.createElement(k,{handleDateClick:n,row:e,cellHover:a,checkinDate:c,hoverDate:l,checkoutDate:u,focus:s,key:JSON.stringify(e),availableAfterCheckin:o,today:p});m.push(t)}})),r.createElement(E,null,r.createElement(_,null,r.createElement(D,null,r.createElement(R,null,i))),r.createElement(C,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement(I,null,"Su"),r.createElement(I,null,"Mo"),r.createElement(I,null,"Tu"),r.createElement(I,null,"We"),r.createElement(I,null,"Th"),r.createElement(I,null,"Fr"),r.createElement(I,null,"Sa"))),r.createElement(w,null,m)))};const O=P;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}P.propTypes={focus:o().string.isRequired,availableAfterCheckin:o().number.isRequired,month:o().arrayOf(o().shape({_id:o().string.isRequired,available:o().number.isRequired,dayOfWeek:o().number.isRequired,day:o().number.isRequired,month:o().number.isRequired})).isRequired,handleDateClick:o().func.isRequired,checkinDate:o().shape({month:o().number,day:o().number}),checkoutDate:o().shape({month:o().number,day:o().number}),cellHover:o().func.isRequired,hoverDate:o().shape({month:o().number,day:o().number}),title:o().string.isRequired},P.defaultProps={checkinDate:{},checkoutDate:{},hoverDate:{}};var H=a.ZP.div.withConfig({displayName:"calendarCarousel__CalendarCarouselTransform",componentId:"sc-1rtmcl6-0"})(["display:flex;left:0px;position:relative;transform:translateX(","px);transition:transform .2s ease-in-out;justify-content:center;"],(function(e){return e.translate})),j=a.ZP.div.withConfig({displayName:"calendarCarousel__CalendarCarouselContainer",componentId:"sc-1rtmcl6-1"})(["overflow:hidden;width:100%;height:100%;"]),z=(a.ZP.i.withConfig({displayName:"calendarCarousel__I",componentId:"sc-1rtmcl6-2"})(["height:12px;width:12px;"]),a.ZP.button.withConfig({displayName:"calendarCarousel__Button",componentId:"sc-1rtmcl6-3"})(["appearance:none !important;display:inline-block !important;border-radius:50% !important;border:none !important;outline:none !important;margin:0px !important;padding:0px !important;color:rgb(34,34,34) !important;cursor:pointer !important;touch-action:manipulation !important;position:relative !important;background:transparent !important;transition:-ms-transform 0.25s ease 0s,-webkit-transform 0.25s ease 0s,transform 0.25s ease 0s !important;z-index:999;"])),M=a.ZP.div.withConfig({displayName:"calendarCarousel__ButtonDivLeft",componentId:"sc-1rtmcl6-4"})(["position:absolute !important;top:154px !important;left:37px !important;"]),T=a.ZP.div.withConfig({displayName:"calendarCarousel__ButtonDivRight",componentId:"sc-1rtmcl6-5"})(["position:absolute !important;top:154px !important;right:37px !important;"]),F=a.ZP.svg.withConfig({displayName:"calendarCarousel__SVG",componentId:"sc-1rtmcl6-6"})(["height:12px;width:12px;display:block;fill:currentcolor;"]),A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(c,e);var t,n,a,i,o=(a=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(a);if(i){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).months={0:"January 2021",1:"February 2021",2:"March 2021",3:"April 2021",4:"May 2021",5:"June 2021",6:"July 2021",7:"August 2021",8:"September 2021",9:"October 2021",10:"November 2021",11:"December 2021"},t}return t=c,(n=[{key:"render",value:function(){var e=this,t=this.props,n=t.availability,a=t.handleDateClick,i=t.cellHover,o=t.availableAfterCheckin,c=t.translateRight,l=t.checkinDate,u=t.hoverDate,s=t.checkoutDate,p=t.focus,d=t.translate,f=t.translateLeft,m=t.today;return r.createElement(j,null,r.createElement(M,null,r.createElement(z,{disabled:1600===d,onClick:f},r.createElement(F,{viewBox:"0 0 18 18"},r.createElement("path",{d:"m 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z"})))),r.createElement(T,null,r.createElement(z,{disabled:-1600===d,onClick:c},r.createElement(F,{viewBox:"0 0 18 18"},r.createElement("path",{d:"m 4.29 1.71 a 1 1 0 1 1 1.42 -1.41 l 8 8 a 1 1 0 0 1 0 1.41 l -8 8 a 1 1 0 1 1 -1.42 -1.41 l 7.29 -7.29 Z"})))),r.createElement(H,{translate:d},n.map((function(t,n){return r.createElement(O,{handleDateClick:a,month:t,title:e.months[n],key:e.months[n],cellHover:i,checkinDate:l,hoverDate:u,checkoutDate:s,focus:p,availableAfterCheckin:o,today:m})}))))}}])&&N(t.prototype,n),c}(r.Component);const L=A;function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){return!t||"object"!==Y(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}A.propTypes={focus:o().string.isRequired,availableAfterCheckin:o().number.isRequired,availability:o().arrayOf(o().arrayOf(o().shape({_id:o().string.isRequired,available:o().number.isRequired,dayOfWeek:o().number.isRequired,day:o().number.isRequired,month:o().number.isRequired}))).isRequired,handleDateClick:o().func.isRequired,checkinDate:o().shape({month:o().number,day:o().number}),checkoutDate:o().shape({month:o().number,day:o().number}),translate:o().number.isRequired,translateLeft:o().func.isRequired,translateRight:o().func.isRequired,cellHover:o().func.isRequired,hoverDate:o().shape({month:o().number,day:o().number})},A.defaultProps={checkinDate:{},checkoutDate:{},hoverDate:{}};var V=a.ZP.div.withConfig({displayName:"calendarBoxInput__MainContainer",componentId:"sc-1vnacsc-0"})(["order:2;flex:0 0 calc(((100vw - 256px) / 12) * 5 + 16px);margin-left:24px;max-width:350px;display:block;margin-top:24px;margin-right:32px;z-indez:999;"]),X=a.ZP.div.withConfig({displayName:"calendarBoxInput__InnerFlex",componentId:"sc-1vnacsc-1"})(["display:flex;border-radius:8px;box-shadow:rgb(176,176,176) 0px 0px 0px 1px inset;"]),Q=a.ZP.div.withConfig({displayName:"calendarBoxInput__CheckinInput",componentId:"sc-1vnacsc-2"})(['position:relative;cursor:text;display:flex;height:56px;width:100%;margin:0px;border:none transparent;color:rgb(34,34,34);border-radius:8px;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:16px;line-height:20px;font-weight:400;flex:1 1 0%;outline:none;box-shadow:',";background-color:",";"],(function(e){return"checkin"===e.focus?"rgb(34, 34, 34) 0px 0px 0px 2px inset":"none"}),(function(e){return"checkin"===e.focus?"rgb(255, 255, 255)":"transparent"})),$=a.ZP.div.withConfig({displayName:"calendarBoxInput__CheckoutInput",componentId:"sc-1vnacsc-3"})(['position:relative;cursor:text;display:flex;height:56px;width:100%;margin:0px;border:none transparent;color:rgb(34,34,34);border-radius:8px;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:16px;line-height:20px;font-weight:400;flex:1 1 0%;outline:none;box-shadow:',";background-color:",";"],(function(e){return"checkout"===e.focus?"rgb(34, 34, 34) 0px 0px 0px 2px inset":"none"}),(function(e){return"checkout"===e.focus?"rgb(255, 255, 255)":"transparent"})),ee=a.ZP.div.withConfig({displayName:"calendarBoxInput__Disabled",componentId:"sc-1vnacsc-4"})(['position:relative !important;display:flex !important;height:56px !important;width:100% !important;margin:0px !important;border:none transparent !important;border-radius:8px !important;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif !important;font-size:16px !important;line-height:20px !important;font-weight:400 !important;flex:1 1 0% !important;opacity:1 !important;cursor:not-allowed !important;background-color:transparent !important;box-shadow:none !important;color:rgb(221,221,221) !important;-webkit-text-fill-color:rgb(221,221,221) !important;']),te=a.ZP.div.withConfig({displayName:"calendarBoxInput__InputLabel",componentId:"sc-1vnacsc-5"})(["position:absolute;top:12px;left:12px;right:12px;margin:0px;padding:0px;pointer-events:none;font-size:10px;line-height:12px;color:rgb(34,34,34);text-transform:uppercase;font-weight:800;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"]),ne=a.ZP.input.withConfig({displayName:"calendarBoxInput__Input",componentId:"sc-1vnacsc-6"})(["width:100%;border:none;outline:none;padding:0px;margin:26px 12px 10px;min-height:1px;color:inherit;background-color:transparent;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;appearance:none;"]),re=a.ZP.div.withConfig({displayName:"calendarBoxInput__InputContainer",componentId:"sc-1vnacsc-7"})(["display:flex;font-size:14px;line-height:18px;color:rgb(34,34,34);opacity:1;"]),ae=a.ZP.div.withConfig({displayName:"calendarBoxInput__ButtonContainer",componentId:"sc-1vnacsc-8"})(["display:flex !important;align-items:center !important;justify-content:center !important;max-width:50% !important;min-width:36px !important;overflow:visible !important;white-space:nowrap !important;padding-left:0px !important;padding-right:12px !important;"]),ie=a.ZP.button.withConfig({displayName:"calendarBoxInput__Button",componentId:"sc-1vnacsc-9"})(["appearance:none !important;display:inline-block !important;border-radius:50% !important;border:0px !important;outline:0px !important;margin:-2px !important;padding:2px !important;color:buttontext !important;background-color:transparent !important;cursor:pointer !important;touch-action:manipulation !important;"]),oe=a.ZP.label.withConfig({displayName:"calendarBoxInput__Label",componentId:"sc-1vnacsc-10"})(["position:relative !important;flex:1 1 0% !important;padding:0px !important;"]),ce=a.ZP.svg.withConfig({displayName:"calendarBoxInput__SVG",componentId:"sc-1vnacsc-11"})(["height:24px;width:24px;display:block;overflow:visible;fill:currentcolor;fill-opacity:0;stroke:rgb(34,34,34);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;"]),le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(c,e);var t,n,a,i,o=(a=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(a);if(i){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).checkinRef=r.createRef(),t.checkoutRef=r.createRef(),t.focusInputCheckin=t.focusInputCheckin.bind(G(t)),t.focusInputCheckout=t.focusInputCheckout.bind(G(t)),t.handleChange=t.handleChange.bind(G(t)),t}return t=c,(n=[{key:"handleChange",value:function(e){var t,n,r;this.setState((t={},n=e.target.name,r=e.target.value,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}},{key:"focusInputCheckin",value:function(){this.checkinRef.current.focus(),(0,this.props.setFocus)("checkin")}},{key:"focusInputCheckout",value:function(){this.checkoutRef.current.focus(),(0,this.props.setFocus)("checkout")}},{key:"render",value:function(){var e=this.props,t=e.checkinDate,n=e.checkoutDate,a=e.focus,i=e.eraseStateDate,o=t.day?"".concat(t.month+1,"/").concat(t.day,"/2021"):"Add date",c=n.day?"".concat(n.month+1,"/").concat(n.day,"/2021"):"Add date",l=r.createElement(ce,{viewBox:"0 0 52 52"},r.createElement("path",{d:"m19.1 19.1 l14 14 m 0 -14 l -14 14"})),u=r.createElement($,{focus:a,onClick:this.focusInputCheckout},r.createElement(oe,null,r.createElement(te,null,"CHECKOUT"),r.createElement(re,null,r.createElement(ne,{name:"checkout",placeholder:"MM/DD/YYYY",onChange:this.handleChange,ref:this.checkoutRef,type:"text",value:c,disabled:!n.day}))),r.createElement(ae,null,r.createElement(ie,{onClick:function(e){e.stopPropagation(),i("checkoutDate")}},l))),s=r.createElement(ee,{name:"checkout",focus:a},r.createElement(oe,null,r.createElement(te,null,"CHECKOUT"),r.createElement(re,null,r.createElement(ne,{ref:this.checkoutRef,type:"text",value:c,disabled:!n.day,placeholder:"MM/DD/YYYY"})))),p=t.day?u:s;return r.createElement(V,null,r.createElement(X,null,r.createElement(Q,{focus:a,onClick:this.focusInputCheckin},r.createElement(oe,null,r.createElement(te,null,"CHECK-IN"),r.createElement(re,null,r.createElement(ne,{name:"checkin",onChange:this.handleChange,ref:this.checkinRef,type:"text",value:o,placeholder:"MM/DD/YYYY"}))),r.createElement(ae,null,r.createElement(ie,{onClick:function(e){e.stopPropagation(),i("checkinDate")}},l))),p))}}])&&W(t.prototype,n),c}(r.Component);const ue=le;function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?me(e):t}function me(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}le.propTypes={focus:o().string.isRequired,setFocus:o().func.isRequired,checkinDate:o().shape({month:o().number,day:o().number}),checkoutDate:o().shape({month:o().number,day:o().number}),eraseStateDate:o().func.isRequired},le.defaultProps={checkinDate:{},checkoutDate:{}};var be=a.ZP.div.withConfig({displayName:"calendarBox__Box",componentId:"nradeu-0"})(["background:rgb(255,255,255);border-radius:16px;box-shadow:rgba(0,0,0,0.2) 0px 6px 20px;display:flex;flex-direction:column;position:absolute;top:-24px;right:-120%;width:660px;z-index:1;min-height:464px;"]),ye=a.ZP.div.withConfig({displayName:"calendarBox__HeaderDiv",componentId:"nradeu-1"})(["height:130px;width:100%;display:flex;"]),ge=a.ZP.div.withConfig({displayName:"calendarBox__DivFlex1",componentId:"nradeu-2"})(["flex:1;"]),xe=a.ZP.div.withConfig({displayName:"calendarBox__FlexDiv5",componentId:"nradeu-3"})(["flex:4.54;display:flex;overflow:hidden;"]),ve=a.ZP.button.withConfig({displayName:"calendarBox__Button",componentId:"nradeu-4"})(['cursor:pointer;display:inline-block;margin:0px;position:relative;text-align:center;text-decoration:none;width:auto;touch-action:manipulation;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:14px;line-height:18px;font-weight:600;border-radius:8px;outline:none;padding:8px 16px;transition:box-shadow 0.2s ease 0s,-ms-transform 0.1s ease 0s,-webkit-transform 0.1s ease 0s,transform 0.1s ease 0s;border:none;background:rgb(34,34,34);color:rgb(255,255,255);']),ke=a.ZP.button.withConfig({displayName:"calendarBox__ClearButton",componentId:"nradeu-5"})(['cursor:pointer;display:inline-block;margin:0px -8px;position:relative;text-align:center;width:auto;touch-action:manipulation;font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-size:14px;line-height:18px;font-weight:600;border-radius:8px;outline:none;padding:8px;transition:box-shadow 0.2s ease 0s,-ms-transform 0.1s ease 0s,-webkit-transform 0.1s ease 0s,transform 0.1s ease 0s;border:none;background:transparent;color:rgb(34,34,34);text-decoration:underline;']),Ce=a.ZP.span.withConfig({displayName:"calendarBox__Span",componentId:"nradeu-6"})(["margin-left:16px;"]),we=a.ZP.div.withConfig({displayName:"calendarBox__ButtonContainer",componentId:"nradeu-7"})(["padding-left:8px;display:flex;align-items:center;flex:0 0 auto;z-index:1;"]),_e=a.ZP.div.withConfig({displayName:"calendarBox__ButtonRowContainer",componentId:"nradeu-8"})(["padding-left:72px;display:flex;justify-content:space-between;align-items:center;padding-left:12px;padding-right:34px;margin-bottom:16px;"]),De=a.ZP.div.withConfig({displayName:"calendarBox__LeftDateHeading",componentId:"nradeu-9"})(['color:rgb(34,34,34);font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-weight:600;font-size:22px;line-height:26px;margin-top:24px;margin-left:32px;']),Re=a.ZP.div.withConfig({displayName:"calendarBox__H2Container",componentId:"nradeu-10"})(['color:rgb(34,34,34);font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-weight:500;font-size:22px;line-height:26px;']),Ee=a.ZP.h2.withConfig({displayName:"calendarBox__H2",componentId:"nradeu-11"})(["color:inherit;font-size:1em;font-weight:inherit;line-height:inherit;margin:0px;padding:0px;"]),Ie=a.ZP.div.withConfig({displayName:"calendarBox__LowerContainer",componentId:"nradeu-12"})(['color:rgb(113,113,113);font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif;font-weight:300;font-size:14px;line-height:18px;padding-top:8px;']),Pe=a.ZP.div.withConfig({displayName:"calendarBox__LowerDateHeading",componentId:"nradeu-13"})(["line-height:18px;max-height:36px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;height:36px;"]),Oe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(c,e);var t,n,a,i,o=(a=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=he(a);if(i){var n=he(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return fe(this,e)});function c(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).wrapperRef=r.createRef(),t.handleClickOutside=t.handleClickOutside.bind(me(t)),t.cellHover=t.cellHover.bind(me(t));var n=t.props.availability;return t.state={availability:n,hover:{}},t.clearDates=t.clearDates.bind(me(t)),t}return t=c,(n=[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){var t=this.props.inputClick;this.wrapperRef&&!this.wrapperRef.current.contains(e.target)&&t(!1,"calendar")}},{key:"cellHover",value:function(e,t){t||this.setState({hover:{}});var n=this.state.availability,r=this.props,a=r.pricing,i=r.checkinDate,o=a.minStay;if(i.day){var c=i.month,l=i.day,u=t-l;u===n[c].slice(l,t).filter((function(e){return 0===e.available})).length&&u>o&&this.setState({hover:{month:e,day:t}})}}},{key:"makeNewAvailability",value:function(){var e=[];return this.state.availability.forEach((function(t){e.push(t)})),e}},{key:"clearDates",value:function(){var e=this.props.eraseStateDate;e("checkinDate"),e("checkoutDate")}},{key:"render",value:function(){var e,t=this.props,n=t.handleDateClick,a=t.checkinDate,i=t.checkoutDate,o=t.focus,c=t.pricing,l=t.translate,u=t.translateLeft,s=t.setFocus,p=t.availableAfterCheckin,d=t.eraseStateDate,f=t.inputClick,m=t.translateRight,h=t.today,b=this.state,y=b.availability,g=b.hover,x={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"};return a.day&&i.day&&(e="".concat(x[a.month]," ").concat(a.day+1,", 2021 - ").concat(x[i.month]," ").concat(i.day+1,", 2021")),a.day||i.day||(e="Add your travel dates for exact pricing"),a.day&&!i.day&&(e="Minimum stay: ".concat(c.minStay," nights")),r.createElement(be,{ref:this.wrapperRef},r.createElement(ye,null,r.createElement(ge,null,r.createElement(De,null,r.createElement(Re,null,r.createElement(Ee,null,"Select dates")),r.createElement(Ie,null,r.createElement(Pe,null,e)))),r.createElement(ue,{setFocus:s,focus:o,checkinDate:a,checkoutDate:i,eraseStateDate:d,inputClick:f,handleDateClick:n})),r.createElement(xe,null,r.createElement(L,{handleDateClick:n,availability:y,cellHover:this.cellHover,checkinDate:a,hoverDate:g,checkoutDate:i,focus:o,availableAfterCheckin:p,translate:l,translateLeft:u,translateRight:m,today:h})),r.createElement(_e,null,r.createElement(ge,null),r.createElement(we,null,r.createElement(ke,{onClick:this.clearDates},"Clear dates"),r.createElement(Ce,null,r.createElement(ve,{onClick:function(){return f(!1,"calendar")}},"Close")))))}}])&&pe(t.prototype,n),c}(r.Component);const Se=Oe;Oe.propTypes={inputClick:o().func.isRequired,focus:o().string.isRequired,setFocus:o().func.isRequired,availableAfterCheckin:o().number.isRequired,availability:o().arrayOf(o().arrayOf(o().shape({_id:o().string.isRequired,available:o().number.isRequired,dayOfWeek:o().number.isRequired,day:o().number.isRequired,month:o().number.isRequired}))).isRequired,pricing:o().shape({maxGuests:o().number,price:o().number,serviceFee:o().number,cleaningFee:o().number,minStay:o().number}).isRequired,handleDateClick:o().func.isRequired,checkinDate:o().shape({month:o().number,day:o().number}),checkoutDate:o().shape({month:o().number,day:o().number}),eraseStateDate:o().func.isRequired,translate:o().number.isRequired,translateLeft:o().func.isRequired,translateRight:o().func.isRequired},Oe.defaultProps={checkinDate:{},checkoutDate:{}}}}]);