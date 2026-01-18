(function(A,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],h):(A=typeof globalThis<"u"?globalThis:A||self,h(A.SwaraksaraUI={},A.jsxRuntime,A.React))})(this,(function(A,h,N){"use strict";const Ga=".swaraksara.id",Xa=()=>{const e=window.location.hostname;return e==="localhost"||e==="127.0.0.1"||e.match(/^\d{1,3}\./)?"":e.endsWith("swaraksara.id")?`; domain=${Ga}`:""},we=(e,t,a=365)=>{let n="";if(a){const s=new Date;s.setTime(s.getTime()+a*24*60*60*1e3),n=`; expires=${s.toUTCString()}`}const r=Xa(),i="; path=/",o="; SameSite=Lax";document.cookie=`${e}=${t||""}${n}${r}${i}${o}`},Se=e=>{const t=e+"=",a=document.cookie.split(";");for(let n=0;n<a.length;n++){let r=a[n];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(t)===0)return r.substring(t.length,r.length)}return null},rt=N.createContext(void 0),Ka=({children:e,defaultMode:t="light"})=>{const[a,n]=N.useState(()=>{const s=Se("sa_theme");return s==="light"||s==="dark"?s:t}),r=a;N.useEffect(()=>{const s=window.document.documentElement;s.classList.remove("light","dark"),s.classList.add(r),we("sa_theme",a)},[a,r]);const i=s=>{n(s)},o=N.useMemo(()=>({mode:r,resolvedTheme:r,setMode:i}),[r]);return h.jsx(rt.Provider,{value:o,children:e})},it=()=>{const e=N.useContext(rt);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e},ot=N.createContext(void 0),Ja=({children:e})=>{const[t,a]=N.useState(()=>{const o=Se("sa_locale");return o==="id"||o==="en"?o:navigator.language.startsWith("en")?"en":"id"});N.useEffect(()=>{we("sa_locale",t),document.documentElement.lang=t},[t]);const n=o=>{a(o)},r=o=>o,i=N.useMemo(()=>({locale:t,setLocale:n,t:r}),[t]);return h.jsx(ot.Provider,{value:i,children:e})},qa=()=>{const e=N.useContext(ot);if(!e)throw new Error("useLocale must be used within a LocaleProvider");return e};function ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function Qa(e){if(Array.isArray(e))return e}function Za(e){if(Array.isArray(e))return ke(e)}function en(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function tn(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lt(n.key),n)}}function an(e,t,a){return t&&tn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Ae(e))||t){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||a.return==null||a.return()}finally{if(s)throw i}}}}function g(e,t,a){return(t=lt(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function nn(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function rn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var n,r,i,o,s=[],l=!0,u=!1;try{if(i=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=i.call(a)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&a.return!=null&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return s}}function on(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?st(Object(a),!0).forEach(function(n){g(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):st(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function le(e,t){return Qa(e)||rn(e,t)||Ae(e,t)||on()}function C(e){return Za(e)||nn(e)||Ae(e)||sn()}function ln(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lt(e){var t=ln(e,"string");return typeof t=="symbol"?t:t+""}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(e)}function Ae(e,t){if(e){if(typeof e=="string")return ke(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ke(e,t):void 0}}var ft=function(){},Ie={},ut={},ct=null,dt={mark:ft,measure:ft};try{typeof window<"u"&&(Ie=window),typeof document<"u"&&(ut=document),typeof MutationObserver<"u"&&(ct=MutationObserver),typeof performance<"u"&&(dt=performance)}catch{}var fn=Ie.navigator||{},mt=fn.userAgent,ht=mt===void 0?"":mt,z=Ie,x=ut,vt=ct,ue=dt;z.document;var _=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",gt=~ht.indexOf("MSIE")||~ht.indexOf("Trident/"),Pe,un=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,cn=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,pt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},dn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},bt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],P="classic",q="duotone",yt="sharp",xt="sharp-duotone",wt="chisel",St="etch",kt="jelly",At="jelly-duo",It="jelly-fill",Pt="notdog",Et="notdog-duo",Nt="slab",Ft="slab-press",Ct="thumbprint",Ot="utility",Tt="utility-duo",_t="utility-fill",jt="whiteboard",mn="Classic",hn="Duotone",vn="Sharp",gn="Sharp Duotone",pn="Chisel",bn="Etch",yn="Jelly",xn="Jelly Duo",wn="Jelly Fill",Sn="Notdog",kn="Notdog Duo",An="Slab",In="Slab Press",Pn="Thumbprint",En="Utility",Nn="Utility Duo",Fn="Utility Fill",Cn="Whiteboard",Lt=[P,q,yt,xt,wt,St,kt,At,It,Pt,Et,Nt,Ft,Ct,Ot,Tt,_t,jt];Pe={},g(g(g(g(g(g(g(g(g(g(Pe,P,mn),q,hn),yt,vn),xt,gn),wt,pn),St,bn),kt,yn),At,xn),It,wn),Pt,Sn),g(g(g(g(g(g(g(g(Pe,Et,kn),Nt,An),Ft,In),Ct,Pn),Ot,En),Tt,Nn),_t,Fn),jt,Cn);var On={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Tn={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},_n=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),jn={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},Mt=["fak","fa-kit","fakd","fa-kit-duotone"],$t={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ln=["kit"],Mn="kit",$n="kit-duotone",Dn="Kit",zn="Kit Duotone";g(g({},Mn,Dn),$n,zn);var Wn={kit:{"fa-kit":"fak"}},Un={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yn={kit:{fak:"fa-kit"}},Dt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ee,ce={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Hn="classic",Bn="duotone",Vn="sharp",Gn="sharp-duotone",Xn="chisel",Kn="etch",Jn="jelly",qn="jelly-duo",Qn="jelly-fill",Zn="notdog",er="notdog-duo",tr="slab",ar="slab-press",nr="thumbprint",rr="utility",ir="utility-duo",or="utility-fill",sr="whiteboard",lr="Classic",fr="Duotone",ur="Sharp",cr="Sharp Duotone",dr="Chisel",mr="Etch",hr="Jelly",vr="Jelly Duo",gr="Jelly Fill",pr="Notdog",br="Notdog Duo",yr="Slab",xr="Slab Press",wr="Thumbprint",Sr="Utility",kr="Utility Duo",Ar="Utility Fill",Ir="Whiteboard";Ee={},g(g(g(g(g(g(g(g(g(g(Ee,Hn,lr),Bn,fr),Vn,ur),Gn,cr),Xn,dr),Kn,mr),Jn,hr),qn,vr),Qn,gr),Zn,pr),g(g(g(g(g(g(g(g(Ee,er,br),tr,yr),ar,xr),nr,wr),rr,Sr),ir,kr),or,Ar),sr,Ir);var Pr="kit",Er="kit-duotone",Nr="Kit",Fr="Kit Duotone";g(g({},Pr,Nr),Er,Fr);var Cr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Or={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Ne={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Tr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],zt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Rn,Tr),_r=["solid","regular","light","thin","duotone","brands","semibold"],Wt=[1,2,3,4,5,6,7,8,9,10],jr=Wt.concat([11,12,13,14,15,16,17,18,19,20]),Lr=["aw","fw","pull-left","pull-right"],Mr=[].concat(C(Object.keys(Or)),_r,Lr,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ce.GROUP,ce.SWAP_OPACITY,ce.PRIMARY,ce.SECONDARY]).concat(Wt.map(function(e){return"".concat(e,"x")})).concat(jr.map(function(e){return"w-".concat(e)})),$r={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},j="___FONT_AWESOME___",Fe=16,Ut="fa",Yt="svg-inline--fa",Y="data-fa-i2svg",Ce="data-fa-pseudo-element",Dr="data-fa-pseudo-element-pending",Oe="data-prefix",Te="data-icon",Rt="fontawesome-i2svg",zr="async",Wr=["HTML","HEAD","STYLE","SCRIPT"],Ht=["::before","::after",":before",":after"],Bt=(function(){try{return process.env.NODE_ENV==="production"}catch{return!1}})();function Q(e){return new Proxy(e,{get:function(a,n){return n in a?a[n]:a[P]}})}var Vt=f({},pt);Vt[P]=f(f(f(f({},{"fa-duotone":"duotone"}),pt[P]),$t.kit),$t["kit-duotone"]);var Ur=Q(Vt),_e=f({},jn);_e[P]=f(f(f(f({},{duotone:"fad"}),_e[P]),Dt.kit),Dt["kit-duotone"]);var Gt=Q(_e),je=f({},Ne);je[P]=f(f({},je[P]),Yn.kit);var Le=Q(je),Me=f({},Cr);Me[P]=f(f({},Me[P]),Wn.kit),Q(Me);var Yr=un,Xt="fa-layers-text",Rr=cn,Hr=f({},On);Q(Hr);var Br=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$e=dn,Vr=[].concat(C(Ln),C(Mr)),Z=z.FontAwesomeConfig||{};function Gr(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Xr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(x&&typeof x.querySelector=="function"){var Kr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kr.forEach(function(e){var t=le(e,2),a=t[0],n=t[1],r=Xr(Gr(a));r!=null&&(Z[n]=r)})}var Kt={styleDefault:"solid",familyDefault:P,cssPrefix:Ut,replacementClass:Yt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);var B=f(f({},Kt),Z);B.autoReplaceSvg||(B.observeMutations=!1);var m={};Object.keys(Kt).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){B[e]=a,ee.forEach(function(n){return n(m)})},get:function(){return B[e]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,ee.forEach(function(a){return a(m)})},get:function(){return B.cssPrefix}}),z.FontAwesomeConfig=m;var ee=[];function Jr(e){return ee.push(e),function(){ee.splice(ee.indexOf(e),1)}}var V=Fe,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qr(e){if(!(!e||!_)){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=x.head.childNodes,n=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return x.head.insertBefore(t,n),e}}var Qr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Jt(){for(var e=12,t="";e-- >0;)t+=Qr[Math.random()*62|0];return t}function G(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function De(e){return e.classList?G(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function qt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zr(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(qt(e[a]),'" ')},"").trim()}function de(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function ze(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function ei(e){var t=e.transform,a=e.containerWidth,n=e.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:r,inner:l,path:u}}function ti(e){var t=e.transform,a=e.width,n=a===void 0?Fe:a,r=e.height,i=r===void 0?Fe:r,o="";return gt?o+="translate(".concat(t.x/V-n/2,"em, ").concat(t.y/V-i/2,"em) "):o+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "),o+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var ai=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function Qt(){var e=Ut,t=Yt,a=m.cssPrefix,n=m.replacementClass,r=ai;if(a!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(n))}return r}var Zt=!1;function We(){m.autoAddCss&&!Zt&&(qr(Qt()),Zt=!0)}var ni={mixout:function(){return{dom:{css:Qt,insertCss:We}}},hooks:function(){return{beforeDOMElementCreation:function(){We()},beforeI2svg:function(){We()}}}},L=z||{};L[j]||(L[j]={}),L[j].styles||(L[j].styles={}),L[j].hooks||(L[j].hooks={}),L[j].shims||(L[j].shims=[]);var O=L[j],ea=[],ta=function(){x.removeEventListener("DOMContentLoaded",ta),me=1,ea.map(function(t){return t()})},me=!1;_&&(me=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),me||x.addEventListener("DOMContentLoaded",ta));function ri(e){_&&(me?setTimeout(e,0):ea.push(e))}function te(e){var t=e.tag,a=e.attributes,n=a===void 0?{}:a,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?qt(e):"<".concat(t," ").concat(Zr(n),">").concat(i.map(te).join(""),"</").concat(t,">")}function aa(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ue=function(t,a,n,r){var i=Object.keys(t),o=i.length,s=a,l,u,c;for(n===void 0?(l=1,c=t[i[0]]):(l=0,c=n);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function na(e){return C(e).length!==1?null:e.codePointAt(0).toString(16)}function ra(e){return Object.keys(e).reduce(function(t,a){var n=e[a],r=!!n.icon;return r?t[n.iconName]=n.icon:t[a]=n,t},{})}function Ye(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=a.skipHooks,r=n===void 0?!1:n,i=ra(t);typeof O.hooks.addPack=="function"&&!r?O.hooks.addPack(e,ra(t)):O.styles[e]=f(f({},O.styles[e]||{}),i),e==="fas"&&Ye("fa",t)}var ae=O.styles,ii=O.shims,ia=Object.keys(Le),oi=ia.reduce(function(e,t){return e[t]=Object.keys(Le[t]),e},{}),Re=null,oa={},sa={},la={},fa={},ua={};function si(e){return~Vr.indexOf(e)}function li(e,t){var a=t.split("-"),n=a[0],r=a.slice(1).join("-");return n===e&&r!==""&&!si(r)?r:null}var ca=function(){var t=function(i){return Ue(ae,function(o,s,l){return o[l]=Ue(s,i,{}),o},{})};oa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),sa=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ua=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var a="far"in ae||m.autoFetchSvg,n=Ue(ii,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});la=n.names,fa=n.unicodes,Re=he(m.styleDefault,{family:m.familyDefault})};Jr(function(e){Re=he(e.styleDefault,{family:m.familyDefault})}),ca();function He(e,t){return(oa[e]||{})[t]}function fi(e,t){return(sa[e]||{})[t]}function R(e,t){return(ua[e]||{})[t]}function da(e){return la[e]||{prefix:null,iconName:null}}function ui(e){var t=fa[e],a=He("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function W(){return Re}var ma=function(){return{prefix:null,iconName:null,rest:[]}};function ci(e){var t=P,a=ia.reduce(function(n,r){return n[r]="".concat(m.cssPrefix,"-").concat(r),n},{});return Lt.forEach(function(n){(e.includes(a[n])||e.some(function(r){return oi[n].includes(r)}))&&(t=n)}),t}function he(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,n=a===void 0?P:a,r=Ur[n][e];if(n===q&&!e)return"fad";var i=Gt[n][e]||Gt[n][r],o=e in O.styles?e:null,s=i||o||null;return s}function di(e){var t=[],a=null;return e.forEach(function(n){var r=li(m.cssPrefix,n);r?a=r:n&&t.push(n)}),{iconName:a,rest:t}}function ha(e){return e.sort().filter(function(t,a,n){return n.indexOf(t)===a})}var va=zt.concat(Mt);function ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,n=a===void 0?!1:a,r=null,i=ha(e.filter(function(v){return va.includes(v)})),o=ha(e.filter(function(v){return!va.includes(v)})),s=i.filter(function(v){return r=v,!bt.includes(v)}),l=le(s,1),u=l[0],c=u===void 0?null:u,d=ci(i),p=f(f({},di(o)),{},{prefix:he(c,{family:d})});return f(f(f({},p),gi({values:e,family:d,styles:ae,config:m,canonical:p,givenPrefix:r})),mi(n,r,p))}function mi(e,t,a){var n=a.prefix,r=a.iconName;if(e||!n||!r)return{prefix:n,iconName:r};var i=t==="fa"?da(r):{},o=R(n,r);return r=i.iconName||o||r,n=i.prefix||n,n==="far"&&!ae.far&&ae.fas&&!m.autoFetchSvg&&(n="fas"),{prefix:n,iconName:r}}var hi=Lt.filter(function(e){return e!==P||e!==q}),vi=Object.keys(Ne).filter(function(e){return e!==P}).map(function(e){return Object.keys(Ne[e])}).flat();function gi(e){var t=e.values,a=e.family,n=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,u=l===void 0?{}:l,c=a===q,d=t.includes("fa-duotone")||t.includes("fad"),p=u.familyDefault==="duotone",v=n.prefix==="fad"||n.prefix==="fa-duotone";if(!c&&(d||p||v)&&(n.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(n.prefix="fab"),!n.prefix&&hi.includes(a)){var w=Object.keys(s).find(function(S){return vi.includes(S)});if(w||u.autoFetchSvg){var y=_n.get(a).defaultShortPrefixId;n.prefix=y,n.iconName=R(n.prefix,n.iconName)||n.iconName}}return(n.prefix==="fa"||i==="fa")&&(n.prefix=W()||"fas"),n}var pi=(function(){function e(){en(this,e),this.definitions={}}return an(e,[{key:"add",value:function(){for(var a=this,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),o[s]),Ye(s,o[s]);var l=Le[P][s];l&&Ye(l,o[s]),ca()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];a[s]||(a[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(a[s][d]=u)}),a[s][l]=u}),a}}])})(),ga=[],X={},K={},bi=Object.keys(K);function yi(e,t){var a=t.mixoutsTo;return ga=e,X={},Object.keys(K).forEach(function(n){bi.indexOf(n)===-1&&delete K[n]}),ga.forEach(function(n){var r=n.mixout?n.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),fe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(o){X[o]||(X[o]=[]),X[o].push(i[o])})}n.provides&&n.provides(K)}),a}function Be(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];var i=X[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(n))}),t}function H(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=X[e]||[];r.forEach(function(i){i.apply(null,a)})}function U(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return K[e]?K[e].apply(null,t):void 0}function Ve(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||W();if(t)return t=R(a,t)||t,aa(pa.definitions,a,t)||aa(O.styles,a,t)}var pa=new pi,xi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,H("noAuto")},wi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(H("beforeI2svg",t),U("pseudoElements2svg",t),U("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ri(function(){ki({autoReplaceSvgRoot:a}),H("watch",t)})}},Si={icon:function(t){if(t===null)return null;if(fe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:R(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=he(t[0]);return{prefix:n,iconName:R(n,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Yr))){var r=ve(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||W(),iconName:R(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=W();return{prefix:i,iconName:R(i,t)||t}}}},F={noAuto:xi,config:m,dom:wi,parse:Si,library:pa,findIconDefinition:Ve,toHtml:te},ki=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,n=a===void 0?x:a;(Object.keys(O.styles).length>0||m.autoFetchSvg)&&_&&m.autoReplaceSvg&&F.dom.i2svg({node:n})};function ge(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return te(n)})}}),Object.defineProperty(e,"node",{get:function(){if(_){var n=x.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Ai(e){var t=e.children,a=e.main,n=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(ze(o)&&a.found&&!n.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};r.style=de(f(f({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Ii(e){var t=e.prefix,a=e.iconName,n=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:n}]}]}function Pi(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function Ge(e){var t=e.icons,a=t.main,n=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,u=e.extra,c=e.watchable,d=c===void 0?!1:c,p=n.found?n:a,v=p.width,w=p.height,y=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),S={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(w)})};!Pi(u.attributes)&&!u.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),d&&(S.attributes[Y]="");var k=f(f({},S),{},{prefix:r,iconName:i,main:a,mask:n,maskId:l,transform:o,symbol:s,styles:f({},u.styles)}),I=n.found&&a.found?U("generateAbstractMask",k)||{children:[],attributes:{}}:U("generateAbstractIcon",k)||{children:[],attributes:{}},E=I.children,D=I.attributes;return k.children=E,k.attributes=D,s?Ii(k):Ai(k)}function ba(e){var t=e.content,a=e.width,n=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[Y]="");var u=f({},i.styles);ze(r)&&(u.transform=ti({transform:r,width:a,height:n}),u["-webkit-transform"]=u.transform);var c=de(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),d}function Ei(e){var t=e.content,a=e.extra,n=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=de(a.styles);r.length>0&&(n.style=r);var i=[];return i.push({tag:"span",attributes:n,children:[t]}),i}var Xe=O.styles;function Ke(e){var t=e[0],a=e[1],n=e.slice(4),r=le(n,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat($e.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat($e.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat($e.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var Ni={found:!1,width:512,height:512};function Fi(e,t){!Bt&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Je(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=W()),new Promise(function(n,r){if(a==="fa"){var i=da(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Xe[t]&&Xe[t][e]){var o=Xe[t][e];return n(Ke(o))}Fi(e,t),n(f(f({},Ni),{},{icon:m.showMissingIcons&&e?U("missingIconAbstract")||{}:{}}))})}var ya=function(){},qe=m.measurePerformance&&ue&&ue.mark&&ue.measure?ue:{mark:ya,measure:ya},ne='FA "7.1.0"',Ci=function(t){return qe.mark("".concat(ne," ").concat(t," begins")),function(){return xa(t)}},xa=function(t){qe.mark("".concat(ne," ").concat(t," ends")),qe.measure("".concat(ne," ").concat(t),"".concat(ne," ").concat(t," begins"),"".concat(ne," ").concat(t," ends"))},Qe={begin:Ci,end:xa},pe=function(){};function wa(e){var t=e.getAttribute?e.getAttribute(Y):null;return typeof t=="string"}function Oi(e){var t=e.getAttribute?e.getAttribute(Oe):null,a=e.getAttribute?e.getAttribute(Te):null;return t&&a}function Ti(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function _i(){if(m.autoReplaceSvg===!0)return be.replace;var e=be[m.autoReplaceSvg];return e||be.replace}function ji(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function Li(e){return x.createElement(e)}function Sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,n=a===void 0?e.tag==="svg"?ji:Li:a;if(typeof e=="string")return x.createTextNode(e);var r=n(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Sa(o,{ceFn:n}))}),r}function Mi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var be={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(Sa(r),a)}),a.getAttribute(Y)===null&&m.keepOriginalSource){var n=x.createComment(Mi(a));a.parentNode.replaceChild(n,a)}else a.remove()},nest:function(t){var a=t[0],n=t[1];if(~De(a).indexOf(m.replacementClass))return be.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=n.map(function(s){return te(s)}).join(`
`);a.setAttribute(Y,""),a.innerHTML=o}};function ka(e){e()}function Aa(e,t){var a=typeof t=="function"?t:pe;if(e.length===0)a();else{var n=ka;m.mutateApproach===zr&&(n=z.requestAnimationFrame||ka),n(function(){var r=_i(),i=Qe.begin("mutate");e.map(r),i(),a()})}}var Ze=!1;function Ia(){Ze=!0}function et(){Ze=!1}var ye=null;function Pa(e){if(vt&&m.observeMutations){var t=e.treeCallback,a=t===void 0?pe:t,n=e.nodeCallback,r=n===void 0?pe:n,i=e.pseudoElementsCallback,o=i===void 0?pe:i,s=e.observeMutationsRoot,l=s===void 0?x:s;ye=new vt(function(u){if(!Ze){var c=W();G(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!wa(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&wa(d.target)&&~Br.indexOf(d.attributeName))if(d.attributeName==="class"&&Oi(d.target)){var p=ve(De(d.target)),v=p.prefix,w=p.iconName;d.target.setAttribute(Oe,v||c),w&&d.target.setAttribute(Te,w)}else Ti(d.target)&&r(d.target)})}}),_&&ye.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $i(){ye&&ye.disconnect()}function Di(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(n,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),a}function zi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",r=ve(De(e));return r.prefix||(r.prefix=W()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&n.length>0&&(r.iconName=fi(r.prefix,e.innerText)||He(r.prefix,na(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Wi(e){var t=G(e.attributes).reduce(function(a,n){return a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a},{});return t}function Ui(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=zi(e),n=a.iconName,r=a.prefix,i=a.rest,o=Wi(e),s=Be("parseNodeAttributes",{},e),l=t.styleParser?Di(e):[];return f({iconName:n,prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Yi=O.styles;function Na(e){var t=m.autoReplaceSvg==="nest"?Ea(e,{styleParser:!1}):Ea(e);return~t.extra.classes.indexOf(Xt)?U("generateLayersText",e,t):U("generateSvgReplacementMutation",e,t)}function Ri(){return[].concat(C(Mt),C(zt))}function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var a=x.documentElement.classList,n=function(d){return a.add("".concat(Rt,"-").concat(d))},r=function(d){return a.remove("".concat(Rt,"-").concat(d))},i=m.autoFetchSvg?Ri():bt.concat(Object.keys(Yi));i.includes("fa")||i.push("fa");var o=[".".concat(Xt,":not([").concat(Y,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Y,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=G(e.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),r("complete");else return Promise.resolve();var l=Qe.begin("onTree"),u=s.reduce(function(c,d){try{var p=Na(d);p&&c.push(p)}catch(v){Bt||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(p){Aa(p,function(){n("active"),n("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Na(e).then(function(a){a&&Aa([a],t)})}function Bi(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Ve(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ve(r||{})),e(n,f(f({},a),{},{mask:r}))}}var Vi=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.transform,r=n===void 0?T:n,i=a.symbol,o=i===void 0?!1:i,s=a.mask,l=s===void 0?null:s,u=a.maskId,c=u===void 0?null:u,d=a.classes,p=d===void 0?[]:d,v=a.attributes,w=v===void 0?{}:v,y=a.styles,S=y===void 0?{}:y;if(t){var k=t.prefix,I=t.iconName,E=t.icon;return ge(f({type:"icon"},t),function(){return H("beforeDOMElementCreation",{iconDefinition:t,params:a}),Ge({icons:{main:Ke(E),mask:l?Ke(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:I,transform:f(f({},T),r),symbol:o,maskId:c,extra:{attributes:w,styles:S,classes:p}})})}},Gi={mixout:function(){return{icon:Bi(Vi)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Fa,a.nodeCallback=Hi,a}}},provides:function(t){t.i2svg=function(a){var n=a.node,r=n===void 0?x:n,i=a.callback,o=i===void 0?function(){}:i;return Fa(r,o)},t.generateSvgReplacementMutation=function(a,n){var r=n.iconName,i=n.prefix,o=n.transform,s=n.symbol,l=n.mask,u=n.maskId,c=n.extra;return new Promise(function(d,p){Promise.all([Je(r,i),l.iconName?Je(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=le(v,2),y=w[0],S=w[1];d([a,Ge({icons:{main:y,mask:S},prefix:i,iconName:r,transform:o,symbol:s,maskId:u,extra:c,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,l=de(s);l.length>0&&(r.style=l);var u;return ze(o)&&(u=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(u||i.icon),{children:n,attributes:r}}}},Xi={mixout:function(){return{layer:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.classes,i=r===void 0?[]:r;return ge({type:"layer"},function(){H("beforeDOMElementCreation",{assembler:a,params:n});var o=[];return a(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(C(i)).join(" ")},children:o}]})}}}},Ki={mixout:function(){return{counter:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};n.title;var r=n.classes,i=r===void 0?[]:r,o=n.attributes,s=o===void 0?{}:o,l=n.styles,u=l===void 0?{}:l;return ge({type:"counter",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:n}),Ei({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(C(i))}})})}}}},Ji={mixout:function(){return{text:function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?T:r,o=n.classes,s=o===void 0?[]:o,l=n.attributes,u=l===void 0?{}:l,c=n.styles,d=c===void 0?{}:c;return ge({type:"text",content:a},function(){return H("beforeDOMElementCreation",{content:a,params:n}),ba({content:a,transform:f(f({},T),i),extra:{attributes:u,styles:d,classes:["".concat(m.cssPrefix,"-layers-text")].concat(C(s))}})})}}},provides:function(t){t.generateLayersText=function(a,n){var r=n.transform,i=n.extra,o=null,s=null;if(gt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();o=u.width/l,s=u.height/l}return Promise.resolve([a,ba({content:a.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Ca=new RegExp('"',"ug"),Oa=[1105920,1112319],Ta=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Tn),$r),Un),tt=Object.keys(Ta).reduce(function(e,t){return e[t.toLowerCase()]=Ta[t],e},{}),qi=Object.keys(tt).reduce(function(e,t){var a=tt[t];return e[t]=a[900]||C(Object.entries(a))[0][1],e},{});function Qi(e){var t=e.replace(Ca,"");return na(C(t)[0]||"")}function Zi(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),n=a.replace(Ca,""),r=n.codePointAt(0),i=r>=Oa[0]&&r<=Oa[1],o=n.length===2?n[0]===n[1]:!1;return i||o||t}function eo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(t),r=isNaN(n)?"normal":n;return(tt[a]||{})[r]||qi[a]}function _a(e,t){var a="".concat(Dr).concat(t.replace(":","-"));return new Promise(function(n,r){if(e.getAttribute(a)!==null)return n();var i=G(e.children),o=i.filter(function(xe){return xe.getAttribute(Ce)===t})[0],s=z.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(Rr),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),n();if(u&&d!=="none"&&d!==""){var p=s.getPropertyValue("content"),v=eo(l,c),w=Qi(p),y=u[0].startsWith("FontAwesome"),S=Zi(s),k=He(v,w),I=k;if(y){var E=ui(w);E.iconName&&E.prefix&&(k=E.iconName,v=E.prefix)}if(k&&!S&&(!o||o.getAttribute(Oe)!==v||o.getAttribute(Te)!==I)){e.setAttribute(a,I),o&&e.removeChild(o);var D=Ui(),b=D.extra;b.attributes[Ce]=t,Je(k,v).then(function(xe){var zo=Ge(f(f({},D),{},{icons:{main:xe,mask:ma()},prefix:v,iconName:I,extra:b,watchable:!0})),nt=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(nt,e.firstChild):e.appendChild(nt),nt.outerHTML=zo.map(function(Wo){return te(Wo)}).join(`
`),e.removeAttribute(a),n()}).catch(r)}else n()}else n()})}function to(e){return Promise.all([_a(e,"::before"),_a(e,"::after")])}function ao(e){return e.parentNode!==document.head&&!~Wr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ce)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var no=function(t){return!!t&&Ht.some(function(a){return t.includes(a)})},ro=function(t){if(!t)return[];var a=new Set,n=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});n=n.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var r=se(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(no(o)){var s=Ht.reduce(function(l,u){return l.replace(u,"")},o);s!==""&&s!=="*"&&a.add(s)}}}catch(l){r.e(l)}finally{r.f()}return a};function ja(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var n=new Set,r=se(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=se(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,c=ro(u.selectorText),d=se(c),p;try{for(d.s();!(p=d.n()).done;){var v=p.value;n.add(v)}}catch(y){d.e(y)}finally{d.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){r.e(y)}finally{r.f()}if(!n.size)return;var w=Array.from(n).join(", ");try{a=e.querySelectorAll(w)}catch{}}return new Promise(function(y,S){var k=G(a).filter(ao).map(to),I=Qe.begin("searchPseudoElements");Ia(),Promise.all(k).then(function(){I(),et(),y()}).catch(function(){I(),et(),S()})})}}var io={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=ja,a}}},provides:function(t){t.pseudoElements2svg=function(a){var n=a.node,r=n===void 0?x:n;m.searchPseudoElements&&ja(r)}}},La=!1,oo={mixout:function(){return{dom:{unwatch:function(){Ia(),La=!0}}}},hooks:function(){return{bootstrap:function(){Pa(Be("mutationObserverCallbacks",{}))},noAuto:function(){$i()},watch:function(a){var n=a.observeMutationsRoot;La?et():Pa(Be("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Ma=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},a)},so={mixout:function(){return{parse:{transform:function(a){return Ma(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-transform");return r&&(a.transform=Ma(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var n=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),v.path)}]}]}}}},at={x:0,y:0,width:"100%",height:"100%"};function $a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function lo(e){return e.tag==="g"?e.children:[e]}var fo={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-mask"),i=r?ve(r.split(" ").map(function(o){return o.trim()})):ma();return i.prefix||(i.prefix=W()),a.mask=i,a.maskId=n.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var n=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,l=a.transform,u=i.width,c=i.icon,d=o.width,p=o.icon,v=ei({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:f(f({},at),{},{fill:"white"})},y=c.children?{children:c.children.map($a)}:{},S={tag:"g",attributes:f({},v.inner),children:[$a(f({tag:c.tag,attributes:f(f({},c.attributes),v.path)},y))]},k={tag:"g",attributes:f({},v.outer),children:[S]},I="mask-".concat(s||Jt()),E="clip-".concat(s||Jt()),D={tag:"mask",attributes:f(f({},at),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,k]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:lo(p)},D]};return n.push(b,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(I,")")},at)}),{children:n,attributes:r}}}},uo={provides:function(t){var a=!1;z.matchMedia&&(a=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||n.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},co={hooks:function(){return{parseNodeAttributes:function(a,n){var r=n.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},mo=[ni,Gi,Xi,Ki,Ji,io,oo,so,fo,uo,co];yi(mo,{mixoutsTo:F}),F.noAuto;var re=F.config;F.library,F.dom;var Da=F.parse;F.findIconDefinition,F.toHtml;var ho=F.icon;F.layer,F.text,F.counter;function vo(e){return e=e-0,e===e}function za(e){return vo(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function go(e){return e.charAt(0).toUpperCase()+e.slice(1)}var J=new Map,po=1e3;function bo(e){if(J.has(e))return J.get(e);const t={};let a=0;const n=e.length;for(;a<n;){const r=e.indexOf(";",a),i=r===-1?n:r,o=e.slice(a,i).trim();if(o){const s=o.indexOf(":");if(s>0){const l=o.slice(0,s).trim(),u=o.slice(s+1).trim();if(l&&u){const c=za(l);t[c.startsWith("webkit")?go(c):c]=u}}}a=i+1}if(J.size===po){const r=J.keys().next().value;r&&J.delete(r)}return J.set(e,t),t}function Wa(e,t,a={}){if(typeof t=="string")return t;const n=(t.children||[]).map(c=>Wa(e,c)),r=t.attributes||{},i={};for(const[c,d]of Object.entries(r))switch(!0){case c==="class":{i.className=d;break}case c==="style":{i.style=bo(String(d));break}case c.startsWith("aria-"):case c.startsWith("data-"):{i[c.toLowerCase()]=d;break}default:i[za(c)]=d}const{style:o,role:s,"aria-label":l,...u}=a;return o&&(i.style=i.style?{...i.style,...o}:o),s&&(i.role=s),l&&(i["aria-label"]=l,i["aria-hidden"]="false"),e(t.tag,{...u,...i},...n)}var yo=Wa.bind(null,N.createElement),Ua=(e,t)=>{const a=N.useId();return e||(t?a:void 0)},xo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&process.env.NODE_ENV==="development"}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<"u"&&process.env.FA_VERSION;var wo="searchPseudoElementsFullScan"in re?"7.0.0":"6.0.0",So=Number.parseInt(wo)>=7,ie="fa",M={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},ko={left:"fa-pull-left",right:"fa-pull-right"},Ao={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Io={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},$={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Po(e){const t=re.cssPrefix||re.familyPrefix||ie;return t===ie?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ie}-`,"g"),`${t}-`)}function Eo(e){const{beat:t,fade:a,beatFade:n,bounce:r,shake:i,spin:o,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:c,inverse:d,border:p,flip:v,size:w,rotation:y,pull:S,swapOpacity:k,rotateBy:I,widthAuto:E,className:D}=e,b=[];return D&&b.push(...D.split(" ")),t&&b.push(M.beat),a&&b.push(M.fade),n&&b.push(M.beatFade),r&&b.push(M.bounce),i&&b.push(M.shake),o&&b.push(M.spin),l&&b.push(M.spinReverse),s&&b.push(M.spinPulse),u&&b.push(M.pulse),c&&b.push($.fixedWidth),d&&b.push($.inverse),p&&b.push($.border),v===!0&&b.push($.flip),(v==="horizontal"||v==="both")&&b.push($.flipHorizontal),(v==="vertical"||v==="both")&&b.push($.flipVertical),w!=null&&b.push(Io[w]),y!=null&&y!==0&&b.push(Ao[y]),S!=null&&b.push(ko[S]),k&&b.push($.swapOpacity),So?(I&&b.push($.rotateBy),E&&b.push($.widthAuto),(re.cssPrefix||re.familyPrefix||ie)===ie?b:b.map(Po)):b}var No=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function Ya(e){if(e)return No(e)?e:Da.icon(e)}function Fo(e){return Object.keys(e)}var Ra=new xo("FontAwesomeIcon"),Ha={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Co=new Set(Object.keys(Ha)),oe=N.forwardRef((e,t)=>{const a={...Ha,...e},{icon:n,mask:r,symbol:i,title:o,titleId:s,maskId:l,transform:u}=a,c=Ua(l,!!r),d=Ua(s,!!o),p=Ya(n);if(!p)return Ra.error("Icon lookup is undefined",n),null;const v=Eo(a),w=typeof u=="string"?Da.transform(u):u,y=Ya(r),S=ho(p,{...v.length>0&&{classes:v},...w&&{transform:w},...y&&{mask:y},symbol:i,title:o,titleId:d,maskId:c});if(!S)return Ra.error("Could not find icon",p),null;const{abstract:k}=S,I={ref:t};for(const E of Fo(a))Co.has(E)||(I[E]=a[E]);return yo(k[0],I)});oe.displayName="FontAwesomeIcon";const Oo={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Ba={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Va=({isOpen:e,onClose:t,position:a})=>h.jsxs(h.Fragment,{children:[h.jsx("div",{className:`sidebar-backdrop ${e?"open":""}`,onClick:t}),h.jsxs("nav",{className:`sidebar-menu ${e?"open":""} position-${a}`,children:[h.jsx("button",{className:"sidebar-close-btn",onClick:t,"aria-label":"Tutup menu navigasi",children:h.jsx(oe,{icon:Ba})}),h.jsxs("div",{className:"sidebar-links",children:[h.jsx("a",{href:"#",className:"nav-link active",children:"Produk"}),h.jsx("a",{href:"#",className:"nav-link",children:"Penulis"}),h.jsx("a",{href:"#",className:"nav-link",children:"Tentang"}),h.jsx("a",{href:"#",className:"nav-link",children:"Blog"}),h.jsx("a",{href:"#",className:"nav-link",children:"Kontak"}),h.jsx("a",{href:"#",className:"nav-link",children:"Masuk"})]})]})]}),To=({hamburgerPosition:e})=>{const[t,a]=N.useState(!1),[n,r]=N.useState(!1);return N.useEffect(()=>{const i=()=>{r(window.scrollY>10)};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("scroll",i)}},[]),h.jsxs(h.Fragment,{children:[h.jsxs("header",{className:`navbar ${n?"scrolled":""} hamburger-${e}`,children:[h.jsx("div",{className:"navbar-overlay"}),h.jsx("a",{href:"#",className:"navbar-logo",children:"SwarAksara"}),h.jsxs("div",{className:"navbar-links",children:[h.jsx("a",{href:"#",className:"nav-link active",children:"Produk"}),h.jsx("a",{href:"#",className:"nav-link",children:"Penulis"}),h.jsx("a",{href:"#",className:"nav-link",children:"Tentang"}),h.jsx("a",{href:"#",className:"nav-link",children:"Blog"}),h.jsx("a",{href:"#",className:"nav-link",children:"Kontak"}),h.jsx("a",{href:"#",className:"nav-link",children:"Masuk"}),h.jsx("a",{href:"#",className:"nav-link register-btn",children:"Register"})]}),h.jsx("button",{className:"hamburger-menu",onClick:()=>a(!0),"aria-label":"Buka menu navigasi",children:h.jsx(oe,{icon:Oo})})]}),h.jsx(Va,{isOpen:t,onClose:()=>a(!1),position:e})]})};const _o={prefix:"far",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"]},jo=()=>{const e=new Date().getFullYear();return h.jsxs("footer",{className:"footer",children:[h.jsxs("div",{className:"footer-copyright",children:[h.jsx(oe,{icon:_o}),h.jsx("span",{children:`2023-${e} - SwarAksara`})]}),h.jsxs("div",{className:"footer-links",children:[h.jsx("a",{href:"#",children:"Kebijakan Privasi"}),h.jsx("a",{href:"#",children:"Syarat & Ketentuan"}),h.jsx("a",{href:"#",children:"Hubungi Kami"})]})]})},Lo=()=>{const{mode:e,setMode:t}=it(),a=()=>{t(e==="light"?"dark":"light")};return h.jsx("button",{type:"button",className:"trigger-button",onClick:a,"aria-label":`Switch to ${e==="light"?"dark":"light"} mode`,style:{padding:"0.5rem 1rem",fontSize:"0.9rem"},children:e==="light"?"🌙 Dark Mode":"☀️ Light Mode"})},Mo=({isOpen:e,onClose:t,title:a,children:n})=>e?h.jsx("div",{className:"modal-backdrop",onClick:t,children:h.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[h.jsxs("header",{className:"modal-header",children:[h.jsx("h2",{children:a}),h.jsx("button",{type:"button","aria-label":"Close modal",onClick:t,className:"modal-close-btn",children:h.jsx(oe,{icon:Ba})})]}),h.jsx("div",{className:"modal-body",children:n})]})}):null,$o={xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem","2xl":"2rem"},Do=({as:e,size:t="md",color:a,className:n="",style:r})=>{const i={fontSize:$o[t],width:"1em",height:"1em",color:a||"currentColor",display:"inline-block",verticalAlign:"middle",...r};return h.jsx(e,{className:`sw-icon ${n}`,style:i,"aria-hidden":"true"})};A.Footer=jo,A.Icon=Do,A.LocaleProvider=Ja,A.Modal=Mo,A.Navbar=To,A.Sidebar=Va,A.ThemeProvider=Ka,A.ThemeSwitcher=Lo,A.getSwaraksaraCookie=Se,A.setSwaraksaraCookie=we,A.useLocale=qa,A.useTheme=it,Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})}));
