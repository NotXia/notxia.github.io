import{a as z,_ as M}from"./Navbar.vue.76e30b51.js";import{d as L,b as d,c as u,e,t as r,x as P,_ as S,f as o,w as h,g as k,A as E,u as s,r as $,o as I,l as y,F as R,y as D,B as C,j as N,h as H,n as O}from"./entry.97037029.js";import"./composables.e908fea4.js";const V={class:"md:ml-2 mt-4"},B={class:"flex justify-between"},F={class:"text-xl font-semibold tracking-wide"},J={class:"text-right text-gray-500 dark:text-gray-400"},G={class:"leading-5 text-gray-500 dark:text-gray-400"},K={class:"mt-1 whitespace-pre-wrap"},U=L({__name:"ActivityParagraph",props:{title:String,subtitle:String,right_text:String},setup(l){const t=l;return(i,n)=>(d(),u("div",V,[e("div",B,[e("h3",F,r(t.title),1),e("div",J,r(t.right_text),1)]),e("div",G,r(t.subtitle),1),e("div",K,[P(i.$slots,"default")])]))}}),X={},Y={class:"text-4xl font-bold tracking-wide"};function q(l,t){const i=U;return d(),u("div",null,[e("h2",Y,r(l.$t("education")),1),o(i,{title:l.$t("bs in cs"),subtitle:l.$t("unibo"),right_text:`2020 - ${l.$t("present")}`},null,8,["title","subtitle","right_text"]),o(i,{title:l.$t("diploma"),subtitle:l.$t("aldini"),right_text:"2015 - 2020"},{default:h(()=>[e("div",null,r(l.$t("diploma desc")),1),e("div",null,r(l.$t("final grade"))+": 100/100 "+r(l.$t("with honors")),1)]),_:1},8,["title","subtitle"])])}const Q=S(X,[["render",q]]),W={},Z={class:"text-4xl font-bold tracking-wide"},ee={class:"font-mono hover:underline",href:"https://certificates.cs50.io/bb09e788-f9da-4055-8645-aba7ef163683.pdf?size=a4"};function te(l,t){const i=U;return d(),u("div",null,[e("h2",Z,r(l.$t("certificates")),1),o(i,{title:"CS50’s Introduction to AI with Python",subtitle:"HarvardX",right_text:"2022"},{default:h(()=>[e("a",ee,r(l.$t("link to certificate")),1),e("p",null,r(l.$t("cs50 ai description")),1)]),_:1}),o(i,{title:"CISCO: IT Essentials",subtitle:"CISCO Networking Academy",right_text:"2018"},{default:h(()=>[k(r(l.$t("cisco it essentials description")),1)]),_:1})])}const le=S(W,[["render",te]]),oe={},ne={class:"text-4xl font-bold tracking-wide"};function se(l,t){const i=U;return d(),u("div",null,[e("h2",ne,r(l.$t("working experience")),1),o(i,{title:l.$t("pcto toyota"),subtitle:"Toyota Material Handling Manufacturing Italy",right_text:`${l.$t("december")} 2019 | ${l.$t("july")} 2019 | ${l.$t("february")} 2019`},{default:h(()=>[k(r(l.$t("pcto toyota description")),1)]),_:1},8,["title","right_text"])])}const ie=S(oe,[["render",se]]),ae={class:"inline-block"},re={class:"flex items-center"},ce=["src"],de=L({__name:"ProgrammingLogo",props:{language:String,logo:String,needInvert:Boolean},setup(l){const t=l;return(i,n)=>(d(),u("div",ae,[e("div",re,[e("img",{src:t.logo,alt:"",class:E(`h-5 mr-1 ${t.needInvert?"dark:invert":""}`)},null,10,ce),k(" "+r(t.language),1)])]))}}),ue=""+new URL("nodejs.e3af091e.svg",import.meta.url).href,ge=""+new URL("php.2132ce69.svg",import.meta.url).href,_e=""+new URL("react.8351f38f.svg",import.meta.url).href,me=""+new URL("vue.17ff892a.svg",import.meta.url).href,fe=""+new URL("nuxt.9d4219a8.svg",import.meta.url).href,he=""+new URL("docker.05d03b2d.svg",import.meta.url).href,pe=""+new URL("ansible.10b27c72.svg",import.meta.url).href,be=""+new URL("jenkins.2e6acb68.svg",import.meta.url).href,we=""+new URL("gitlab.56217928.svg",import.meta.url).href,$e=""+new URL("github-actions.eb6c6db8.svg",import.meta.url).href,xe=""+new URL("numpy.7b069cbe.svg",import.meta.url).href,ve=""+new URL("pandas.ea6d5355.svg",import.meta.url).href,ye=""+new URL("matplotlib.595bf301.svg",import.meta.url).href,ke=""+new URL("seaborn.67f563f0.svg",import.meta.url).href,Le=""+new URL("scikitlearn.1f8cdf07.svg",import.meta.url).href,Re=""+new URL("tensorflow.8bd4566a.svg",import.meta.url).href,Se=""+new URL("keras.93d0631e.svg",import.meta.url).href,Ue=""+new URL("database.4cb7148f.svg",import.meta.url).href,Ae=""+new URL("mongo.97bcdd7b.svg",import.meta.url).href,Ce=""+new URL("c.6dca6d06.svg",import.meta.url).href,De=""+new URL("cpp.ebd2d699.svg",import.meta.url).href,Te=""+new URL("java.e124cc96.svg",import.meta.url).href,Ie=""+new URL("python.99a19b1d.svg",import.meta.url).href,je=""+new URL("cpu.ea75fcd8.svg",import.meta.url).href,ze=""+new URL("kotlin.4a391c3c.svg",import.meta.url).href,Me={class:"[&_li]:mr-4"},Pe={class:"text-4xl font-bold tracking-wide"},Ee={class:"flex flex-wrap items-center"},Ne={class:"flex flex-wrap items-center"},He={class:"flex flex-wrap items-center"},Oe={class:"flex flex-wrap items-center"},Ve={class:"flex flex-wrap items-center"},Be={class:"flex flex-wrap items-center"},Fe={class:"flex flex-wrap items-center"},Je={class:"flex flex-wrap items-center"},Ge={class:"flex flex-wrap items-center"},Ke={class:"flex flex-wrap items-center"},Xe=L({__name:"Skills",setup(l){return(t,i)=>{const n=de,c=U;return d(),u("div",Me,[e("h2",Pe,r(t.$t("skills")),1),o(c,{title:t.$t("data analysis")},{default:h(()=>[e("ul",Ee,[e("li",null,[o(n,{logo:s(Ie),language:"Python"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(Ue),language:"SQL",needInvert:""},null,8,["logo"])]),e("li",null,[o(n,{logo:s(Ae),language:"MongoDB"},null,8,["logo"])])]),e("ul",Ne,[e("li",null,[o(n,{logo:s(xe),language:"Numpy"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(ve),language:"Pandas"},null,8,["logo"])])]),e("ul",He,[e("li",null,[o(n,{logo:s(ye),language:"Matplotlib"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(ke),language:"Seaborn"},null,8,["logo"])])]),e("ul",Oe,[e("li",null,[o(n,{logo:s(Le),language:"Scikit-learn"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(Re),language:"Tensorflow"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(Se),language:"Keras"},null,8,["logo"])])])]),_:1},8,["title"]),o(c,{title:t.$t("devops")},{default:h(()=>[e("ul",Ve,[e("li",null,[o(n,{logo:s(he),language:"Docker"},null,8,["logo"])])]),e("ul",Be,[e("li",null,[o(n,{logo:s(pe),language:"Ansible"},null,8,["logo"])])]),e("ul",Fe,[e("li",null,[o(n,{logo:s(be),language:"Jenkins"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(we),language:"Gitlab Runner"},null,8,["logo"])]),e("li",null,[o(n,{logo:s($e),language:"Github Actions"},null,8,["logo"])])])]),_:1},8,["title"]),o(c,{title:t.$t("web development")},{default:h(()=>[e("ul",Je,[e("li",null,[o(n,{logo:s(ue),language:"NodeJS"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(ge),language:"PHP"},null,8,["logo"])])]),e("ul",Ge,[e("li",null,[o(n,{logo:s(_e),language:"React"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(me),language:"Vue"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(fe),language:"Nuxt"},null,8,["logo"])])])]),_:1},8,["title"]),o(c,{title:t.$t("other programming languages")},{default:h(()=>[e("ul",Ke,[e("li",null,[o(n,{logo:s(Ce),language:"C"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(De),language:"C++"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(Te),language:"Java"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(ze),language:"Kotlin"},null,8,["logo"])]),e("li",null,[o(n,{logo:s(je),language:"Assembly x86",needInvert:""},null,8,["logo"])])])]),_:1},8,["title"])])}}}),Ye={},qe={class:"text-4xl font-bold tracking-wide"};function Qe(l,t){const i=U;return d(),u("div",null,[e("h2",qe,r(l.$t("other")),1),o(i,{title:l.$t("ois"),subtitle:l.$t("aldini"),right_text:"2017-18 | 2018-19 | 2019-20"},{default:h(()=>[k(r(l.$t("ois description")),1)]),_:1},8,["title","subtitle"]),o(i,{title:"MAST Academy: Expeditions",subtitle:l.$t("MAST foundation"),right_text:"2018"},{default:h(()=>[k(r(l.$t("MAST expeditions description")),1)]),_:1},8,["subtitle"])])}const We=S(Ye,[["render",Qe]]);function Ze(l,t){return l??t()}function T(l){let t,i=l[0],n=1;for(;n<l.length;){const c=l[n],m=l[n+1];if(n+=2,(c==="optionalAccess"||c==="optionalCall")&&i==null)return;c==="access"||c==="optionalAccess"?(t=i,i=m(i)):(c==="call"||c==="optionalCall")&&(i=m((...b)=>i.call(t,...b)),t=void 0)}return i}const et={key:0,class:"flex w-full justify-center"},tt=e("span",{class:"animate-ping absolute inline-flex h-5 w-5 rounded-full bg-slate-800 dark:bg-slate-200 opacity-75"},null,-1),lt=[tt],ot={key:0,class:"flex justify-center w-full h-full"},nt={class:"relative border-r text-right w-1/2 border-zinc-300 dark:border-zinc-700"},st={class:"relative"},it=e("div",{class:"absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500",style:{right:"-1.43rem"}},null,-1),at={key:0},rt={key:0,class:"absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500",style:{right:"-1.43rem",bottom:"0"}},ct=e("div",{class:"absolute rounded-full border-l-2 border-gray-400 dark:border-gray-500",style:{height:"100%",top:"0",right:"-1.12rem"}},null,-1),dt={class:"text-xs mb-0 font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400"},ut={class:"text-base mb-0 font-semibold leading-5 whitespace-pre-wrap text-gray-900 dark:text-white"},gt={class:"text-sm mb-0 font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400"},_t=e("div",{class:"w-4"},null,-1),mt={class:"relative w-1/2 border-l border-zinc-300 dark:border-zinc-700"},ft={class:"relative"},ht=e("div",{class:"absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500",style:{left:"-1.43rem",bottom:"0"}},null,-1),pt={key:0},bt={key:0,class:"absolute w-3 h-3 z-10 bg-gray-400 rounded-full border border-white dark:border-gray-900 dark:bg-gray-500",style:{left:"-1.43rem"}},wt=e("div",{class:"absolute rounded-full border-l-2 border-we border-gray-400 dark:border-gray-500",style:{height:"100%",top:"0",left:"-1.12rem"}},null,-1),$t={class:"mb-0 text-xs font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400"},xt={class:"mb-0 text-base font-semibold leading-5 whitespace-pre-wrap text-gray-900 dark:text-white"},vt={class:"mb-0 text-sm font-normal leading-5 whitespace-pre-wrap text-gray-500 dark:text-gray-400"},yt=L({__name:"Timeline",props:{right:{type:Object,default:[]},left:{type:Object,default:[]}},setup(l){const t=l,i=$(!0),n=$(),c=$(-1),m=$([]),b=$([]),x=$(new Date),g=$(new Date);function f(p,_){return _.getMonth()-p.getMonth()+12*(_.getFullYear()-p.getFullYear())}function v(){const p=Ze(T([n,"access",w=>w.value,"optionalAccess",w=>w.clientHeight]),()=>0);let _=new Date,a=new Date(0);T([[...t.right,...t.left],"optionalAccess",w=>w.forEach,"call",w=>w(A=>{(!_||A.start<_)&&(_=A.start),(!a||A.end>a)&&(a=A.end)})]),x.value=_,g.value=a,c.value=Math.floor(p/f(_,a))}return I(()=>{i.value=!1,v(),m.value=t.right.map((p,_)=>({offset:f(p.end,g.value),index:_})),b.value=t.left.map((p,_)=>({offset:f(p.end,g.value),index:_})),new ResizeObserver(v).observe(document.querySelector("html"))}),(p,_)=>(d(),u(R,null,[s(i)?(d(),u("div",et,lt)):y("",!0),e("div",{class:"w-full h-full",ref_key:"container_timeline",ref:n},[s(c)>0&&s(x)&&s(g)?(d(),u("div",ot,[e("ol",nt,[(d(!0),u(R,null,D(s(b),a=>(d(),u("li",{class:"mr-4 absolute right-0",key:t.left[a.index].title,style:C(`top: ${a.offset*s(c)}px`)},[e("div",st,[it,f(t.left[a.index].start,t.left[a.index].end)>0?(d(),u("div",at,[t.left[a.index].current?y("",!0):(d(),u("div",rt)),ct])):y("",!0),e("div",{class:"flex items-center",style:C(`height: ${f(t.left[a.index].start,t.left[a.index].end)*s(c)}px`)},[e("div",null,[e("span",dt,r(t.left[a.index].time_label),1),e("h3",ut,r(t.left[a.index].title),1),e("p",gt,r(t.left[a.index].description),1)])],4)])],4))),128))]),_t,e("ol",mt,[(d(!0),u(R,null,D(s(m),a=>(d(),u("li",{class:"ml-4 absolute left-0",key:t.right[a.index].title,style:C(`top: ${a.offset*s(c)}px`)},[e("div",ft,[ht,f(t.right[a.index].start,t.right[a.index].end)>0?(d(),u("div",pt,[t.right[a.index].current?y("",!0):(d(),u("div",bt)),wt])):y("",!0),e("div",{class:"flex items-center",style:C(`height: ${f(t.right[a.index].start,t.right[a.index].end)*s(c)}px`)},[e("div",null,[e("span",$t,r(t.right[a.index].time_label),1),e("h3",xt,r(t.right[a.index].title),1),e("p",vt,r(t.right[a.index].description),1)])],4)])],4))),128))])])):y("",!0)],512)],64))}}),kt={class:"flex h-full justify-center relative"},Lt={class:"absolute top-0 left-0 w-full"},Rt={id:"tooltip-future",role:"tooltip",class:"absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium transition-opacity duration-1000 rounded-lg opacity-0 tooltip"},St={class:"w-full timeline-height"},Ut={class:"text-center text-xs text-gray-400 dark:text-slate-600"},At=L({__name:"ExperienceTimeline",setup(l){I(()=>{z()});let m=null;function b(){m=setTimeout(()=>{N("future"),m=null},500)}function x(){m&&clearTimeout(m)}return(g,f)=>{const v=yt;return d(),u(R,null,[e("div",kt,[e("div",Lt,[e("div",{"data-tooltip-target":"tooltip-future",class:"relative w-6 h-2 mx-auto z-50",onMouseover:b,onMouseleave:x},null,32),e("div",Rt,r(g.$t("future")),1)]),e("div",St,[o(v,{right:[{title:g.$t("diploma"),time_label:"2015 - 2020",description:g.$t("aldini"),start:new Date(2015,8,1),end:new Date(2020,5,1)},{title:g.$t("bs in cs"),time_label:"2020 - 2023",description:g.$t("unibo"),start:new Date(2020,8,1),end:new Date,current:!0}],left:[{title:g.$t("pcto toyota"),time_label:`${g.$t("m_12")} 2019 | ${g.$t("m_7")} 2019 | ${g.$t("m_2")} 2019`,description:"Toyota Material Handling Manufacturing Italy",start:new Date(2019,1,1),end:new Date(2019,11,1)},{title:"CS50’s Introduction to AI with Python",time_label:"2022",description:"HarvardX",start:new Date(2022,8,1),end:new Date(2022,8,1)},{title:"CISCO: IT Essentials",time_label:"2018",description:"CISCO Networking Academy",start:new Date(2018,8,1),end:new Date(2018,8,1)}]},null,8,["right","left"])])]),e("p",Ut,r(g.$t("like timelines")),1)],64)}}});const Ct=S(At,[["__scopeId","data-v-3744c67a"]]),j=""+new URL("pdf.9d170c0d.svg",import.meta.url).href,Dt={class:"flex justify-center items-start mt-2 mb-6"},Tt={class:"w-20 mx-5"},It=["href"],jt=e("img",{src:j,alt:"Download",class:"h-10 mx-auto dark:invert"},null,-1),zt=e("p",{class:"text-sm text-center mt-1"},"CV",-1),Mt=[jt,zt],Pt={class:"w-20 mx-5"},Et=["href"],Nt=e("img",{src:j,alt:"Download",class:"h-10 mx-auto dark:invert"},null,-1),Ht={class:"text-sm text-center mt-1"},Ot={class:"text-xs"},Vt={class:"flex flex-col md:flex-row"},Bt={class:"w-full md:w-2/3 order-1 md:order-2 md:pl-4 [&>*]:mt-8 first:[&>*]:mt-0"},Ft={class:"w-full md:w-1/3 mt-5 md:mt-0 order-2 md:order-1"},Xt=L({__name:"resume",setup(l){const{t}=H();return O({title:t("title_resume")}),(i,n)=>{const c=M,m=Q,b=le,x=ie,g=Xe,f=We,v=Ct;return d(),u(R,null,[o(c),e("main",null,[e("div",Dt,[e("div",Tt,[e("a",{href:i.$t("cv_link"),target:"_blank"},Mt,8,It)]),e("div",Pt,[e("a",{href:i.$t("cv_link_color"),target:"_blank"},[Nt,e("p",Ht,[k("CV"),e("span",Ot,", "+r(i.$t("with_colors")),1)])],8,Et)])]),e("div",Vt,[e("div",Bt,[o(m),o(b),o(x),o(g),o(f)]),e("div",Ft,[o(v)])])])],64)}}});export{Xt as default};