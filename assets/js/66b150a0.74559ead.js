/*! For license information please see 66b150a0.74559ead.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[2331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},514:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7378),r(3905));const o={sidebar_position:1,id:"Wizard",title:"Wizard",sidebar_label:"Wizard"},a=void 0,c={unversionedId:"components/navigation/Wizard/Wizard",id:"components/navigation/Wizard/Wizard",isDocsHomePage:!1,title:"Wizard",description:"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",source:"@site/../docs/components/navigation/Wizard/Wizard.md",sourceDirName:"components/navigation/Wizard",slug:"/components/navigation/Wizard/Wizard",permalink:"/react-native-ui-lib/docs/components/navigation/Wizard/Wizard",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/navigation/Wizard/Wizard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"Wizard",title:"Wizard",sidebar_label:"Wizard"},sidebar:"tutorialSidebar",previous:{title:"TabPage",permalink:"/react-native-ui-lib/docs/components/navigation/TabController/TabController.TabPage"},next:{title:"Step",permalink:"/react-native-ui-lib/docs/components/navigation/Wizard/Wizard.Step"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"activeConfig",id:"activeconfig",children:[]},{value:"activeIndex",id:"activeindex",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"onActiveIndexChanged",id:"onactiveindexchanged",children:[]},{value:"testID",id:"testid",children:[]}]}],s={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A wizard presents a series of steps in  prescribed order. That the user needs to complete in order to accomplish a goal (e.g. purchase a product)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/WizardScreen.tsx"},"(code example)")),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/Wizard.gif?raw=true"}),(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://github.com/wix/react-native-ui-lib/blob/master/demo/showcase/Wizard/WizardPresets.png?raw=true"})),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Wizard activeIndex={0} onActiveIndexChanged={() => console.log('changed')}>\n {_.map(items, item => (\n  return this.renderItem(item, index);\n ))}\n</Wizard>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"activeconfig"},"activeConfig"),(0,i.kt)("p",null,"The configuration of the active step (see Wizard.Step.propTypes)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"WizardStepProps ")," "),(0,i.kt)("h3",{id:"activeindex"},"activeIndex"),(0,i.kt)("p",null,"The active step's index",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"Add or override style of the container",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"onactiveindexchanged"},"onActiveIndexChanged"),(0,i.kt)("p",null,"Callback that is called when the active step is changed (i.e. a step was clicked on). The new activeIndex will be the input of the callback",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(index: number) => void ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The component test id",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")))}p.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(i){return!1}}()?Object.assign:function(e,o){for(var a,c,l=i(e),s=1;s<arguments.length;s++){for(var p in a=Object(arguments[s]))r.call(a,p)&&(l[p]=a[p]);if(t){c=t(a);for(var u=0;u<c.length;u++)n.call(a,c[u])&&(l[c[u]]=a[c[u]])}}return l}},1535:(e,t,r)=>{var n=r(2525),i=60103,o=60106;var a=60109,c=60110,l=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;i=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),c=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function y(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var g=v.prototype=new y;g.constructor=v,n(g,b.prototype),g.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},a=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var s=Array(l),p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var z=/\/+/g;function W(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case o:l=!0}}if(l)return a=a(l=e),e=""===n?"."+W(l,0):n,Array.isArray(a)?(r="",null!=e&&(r=e.replace(z,"$&/")+"/"),P(a,t,r,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(z,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var p=n+W(c=e[s],s);l+=P(c,t,r,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),s=0;!(c=e.next()).done;)l+=P(c=c.value,t,r,p=n+W(c,s++),a);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function S(e,t,r){if(null==e)return e;var n=[],i=0;return P(e,n,"","",(function(e){return t.call(r,e,i++)})),n}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function T(){var e=C.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,r)=>{r(1535)}}]);