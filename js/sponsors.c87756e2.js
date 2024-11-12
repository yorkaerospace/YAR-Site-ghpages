(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={sponsors:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([1,"chunk-vendors"]),n()})({"08d6":function(e,t,n){},1:function(e,t,n){e.exports=n("d068")},"216c":function(e,t,n){"use strict";var o=n("7a23");const a=e=>(Object(o["l"])("data-v-90a69052"),e=e(),Object(o["k"])(),e),r=a(()=>Object(o["e"])("div",{class:"navspacer"},null,-1)),i={class:"navbar fixed"},s={class:"d-flex flex-wrap justify-content-around px-3"},c=a(()=>Object(o["e"])("a",{href:"/",class:"d-flex align-items-end text-decoration-none"},[Object(o["e"])("img",{src:"/YAR Logo Light.png",alt:"YAR Logo",class:"me-2",style:{height:"4rem",width:"4rem"}}),Object(o["e"])("span",{class:"fs-1 orbitron"},"York Aerospace and Rocketry")],-1)),l={class:"nav align-items-end",id:"navbar"},u=["href"];function p(e,t,n,a,p,d){return Object(o["j"])(),Object(o["d"])(o["a"],null,[r,Object(o["e"])("div",i,[Object(o["e"])("header",s,[c,Object(o["e"])("ul",l,[(Object(o["j"])(!0),Object(o["d"])(o["a"],null,Object(o["m"])(p.sections,(e,t)=>(Object(o["j"])(),Object(o["d"])("li",{class:"nav-item fs-3",key:t},[Object(o["e"])("a",{href:e.link,class:"nav-link active nunito","aria-current":"page"},Object(o["p"])(e.title),9,u)]))),128))])])])],64)}var d={name:"Nav",props:["content"],mounted(){window.addEventListener("resize",this.resizeSpacer),window.addEventListener("load",this.resizeSpacer),this.resizeSpacer()},updated(){this.resizeSpacer()},methods:{resizeSpacer(){let e=document.getElementsByClassName("navbar")[0].clientHeight;document.getElementsByClassName("navspacer")[0].style.height=e+"px"}},data(){return{sections:[{title:"About Us",link:"/#About"},{title:"Meet the Team",link:"/#Meet"},{title:"Sponsors",link:"/#Sponsors"},{title:"Contact us",link:"/#Contact"}]}}},b=(n("80d8"),n("6b0d")),m=n.n(b);const f=m()(d,[["render",p],["__scopeId","data-v-90a69052"]]);t["a"]=f},"371a":function(e,t,n){"use strict";var o=n("7a23");const a=e=>(Object(o["l"])("data-v-b5b0e106"),e=e(),Object(o["k"])(),e),r=a(()=>Object(o["e"])("h1",{class:"orbitron"},"Contact Us",-1)),i={class:"d-flex flex-wrap justify-content-evenly",style:{"max-width":"1000px",margin:"auto"}},s=["href"];function c(e,t,n,a,c,l){return Object(o["j"])(),Object(o["d"])(o["a"],null,[r,Object(o["e"])("div",i,[(Object(o["j"])(!0),Object(o["d"])(o["a"],null,Object(o["m"])(n.links,e=>(Object(o["j"])(),Object(o["d"])("a",{key:e.name,href:e.link,target:"_blank"},[Object(o["e"])("i",{class:Object(o["h"])(["icon","bi-"+e.icon])},null,2)],8,s))),128))])],64)}var l={name:"Contact",props:["links"]},u=(n("afb7"),n("6b0d")),p=n.n(u);const d=p()(l,[["render",c],["__scopeId","data-v-b5b0e106"]]);t["a"]=d},"48d2":function(e,t,n){"use strict";n("81c9")},"65fc":function(e,t,n){"use strict";n("db48")},"80d8":function(e,t,n){"use strict";n("08d6")},"81c9":function(e,t,n){},8277:function(e){e.exports=JSON.parse('{"About Us":["We are a team of aerospace enthusiasts who founded YAR in October of 2019. Our main goals are to provide a stepping stone into the aerospace industry for our members; and to continue competing in national, and eventually international competitions, following our debut at Mach-22 in June. Right now our sights are set on gathering funding and support to compete again in 2023.","As a student-led group, we place emphasis on growing our members\' skills in all areas of aerospace engineering. We do this by running workshops and taking part in industry events. We have also partnered with several engineering firms with whom we are promoting graduate placements in the engineering and aerospace fields. The ultimate aim of all of our ongoing outreach programmes is to open students eyes to the possibility of a future career in STEM, and to equip them with the skills they need to stand out in a competitive and already talented industry."],"Meet the Team":[{"name":"Rebecca Wardle","image":"member_images/becca.jpg","title":"Chair"},{"name":"Laura Demkowicz-Duffy","image":"member_images/laura.png","title":"Secretary"},{"name":"Danny Roberts","image":"member_images/danny.jpg","title":"Treasurer"},{"name":"Claire Hinton","title":"Risk Management Officer"},{"name":"Tom Fielden","title":"Social Sec","image":"member_images/tom.jpg"},{"name":"Abir Rizwanullah","title":"Press & Publicity Officer"},{"name":"Jimbo Leyland","image":"member_images/jimbo.jpeg","title":"Avionics"},{"name":"Archie Milan","image":"member_images/archie.jpg"}],"Sponsors":[{"name":"JLCPCB","logo":"jlcpcb.webp","link":"https://jlcpcb.com/","tier":1},{"name":"Rapita Systems","logo":"rapita.png","link":"https://www.rapitasystems.com/","tier":2},{"name":"RS Components","logo":"RS.png","link":"https://uk.rs-online.com/","tier":2,"text":"y\'all are big fuckin nerds"},{"name":"University of York Electronic Engineering Department","logo":"uoyee.webp","tier":1},{"name":"University of York Computer Science Department","logo":"uoycs.webp","tier":1}],"Contact Us":[{"link":"mailto:yar@yusu.org","icon":"envelope"},{"link":"https://www.facebook.com/YorkAerospace/","icon":"facebook"},{"link":"https://twitter.com/YorkAerospace","icon":"twitter"},{"link":"https://www.instagram.com/yorkaerospace/","icon":"instagram"}],"default_profile":"YAR Logo Light.png"}')},a5c8:function(e,t,n){},afb7:function(e,t,n){"use strict";n("a5c8")},d068:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const a={class:"container",style:{"min-height":"100vh"}},r=Object(o["e"])("pre",null,"# Considering Sponsoring Us?\nGreat! Thanks for taking the time to check us out!\n",-1),i=Object(o["e"])("p",null,[Object(o["e"])("a",{href:"/Sponsorship_Brochure.pdf",download:"YAR Sponsorship Brochure.pdf"},[Object(o["e"])("button",{class:"download btn btn-light orbitron"},[Object(o["f"])("Download Our Sponsor Brochure "),Object(o["e"])("i",{class:"icon bi bi-file-earmark-pdf-fill"})])])],-1),s=Object(o["e"])("pre",null,"We have four tiers of sponsorship benefits you may be intrested in, from logos on our merch to socials posts.\n\n## Tier 1 (>£100)\n- Your logo featured on our website, and on our merch (T-Shirts, hoodies, etc.)\n\n## Tier 2 (>£500)\n- Your logo on our main competition rocket for the year\n- We'll shout you out in our socials updates\n\n## Tier 3 (>£1000)\n- Large logo on our main competition rocket\n- Large logos on our merch\n- We'll make socials posts or write blog posts specifically for your company or platform\n\n## Tier 4 (>£2500)\n- Our team available for giving presenations\n- We're happy to discuss bespoke benefits too!\n\n## Sponsor in-kind\nSponsors that provide services or discounts can also be really helpful! We'll discuss on a case-by-case basis what benefits any offer of free or reduced services or products may be equivalent to.\n\n### If you're intrested in sponsoring us in any way, please contact us by email: [yar@yusu.org]\n\n[yar@yusu.org]:mailto:yar@yusu.org\n",-1),c=Object(o["e"])("div",{id:"Contact",class:"spacer"},null,-1),l=Object(o["e"])("div",{class:"spacer"},null,-1),u=Object(o["e"])("div",{class:"",id:"footer"}," Site Design / Logo © 2022 York Aerospace and Rocketry ",-1);function p(e,t,n,p,d,b){const m=Object(o["o"])("Nav"),f=Object(o["o"])("Markdown"),g=Object(o["o"])("Contact");return Object(o["j"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(m,{content:d.content},null,8,["content"]),Object(o["e"])("div",a,[Object(o["g"])(f,{class:"md"},{default:Object(o["q"])(()=>[r]),_:1}),i,Object(o["g"])(f,{class:"md"},{default:Object(o["q"])(()=>[s]),_:1}),c,Object(o["g"])(g,{links:d.content["Contact Us"]},null,8,["links"]),l]),u],64)}var d=n("216c");const b={class:"hidden"},m=["innerHTML"];function f(e,t,n,a,r,i){return Object(o["j"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("div",b,[Object(o["n"])(e.$slots,"default",{},void 0,!0)]),Object(o["e"])("div",{innerHTML:i.ssg},null,8,m)],64)}var g=n("7c5c"),h={name:"Markdown",props:{},computed:{ssg(){let e=this.$slots.default()[0].children;return g["marked"].parse(e)}}},j=(n("65fc"),n("6b0d")),y=n.n(j);const O=y()(h,[["render",f],["__scopeId","data-v-3ad111ed"]]);var v=O,k=n("371a"),w=n("8277"),S={name:"SponsorInfo",components:{Nav:d["a"],Markdown:v,Contact:k["a"]},data(){return{content:w}}};n("48d2");const _=y()(S,[["render",p]]);var x=_;Object(o["b"])(x).mount("#app")},db48:function(e,t,n){}});
//# sourceMappingURL=sponsors.c87756e2.js.map