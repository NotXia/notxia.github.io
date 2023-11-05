import{_ as L}from"./Navbar.vue.bb3a1537.js";import{d as m,c as i,e as p,f as e,t as n,i as h,F as k,x as M,s as U,_ as g,y as c,n as _,r as $,o as V,h as l,p as y,u as T,j as B,m as r}from"./entry.a8e28430.js";const A={class:"border border-gray-500 dark:border-gray-300 rounded-md p-3 mx-auto w-full lg:w-2/3 xl:w-1/2"},G={class:"text-2xl font-semibold text-center text-gray-900 dark:text-white"},W={key:0,class:"text font-semibold text-center text-gray-700 dark:text-gray-300"},H={class:"text-center mb-2"},I=["href"],K={class:"text-lg whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400"},q=["src"],u=m({__name:"ProjectCard",props:{title:String,subtitle:{type:String,required:!1},links:Object,image:String},setup(a){const t=a;return(s,o)=>(i(),p("div",A,[e("h3",G,n(t.title),1),t.subtitle?(i(),p("h4",W,n(t.subtitle),1)):h("",!0),e("div",H,[(i(!0),p(k,null,M(t.links,d=>(i(),p("a",{href:d.url,class:"font-mono inline-block hover:underline mx-2"},n(d.label),9,I))),256))]),e("p",K,[U(s.$slots,"default")]),e("img",{src:t.image,alt:"",class:"max-w-full max-h-96 mx-auto"},null,8,q)]))}}),D={},F={class:"text-center"};function O(a,t){const s=u;return i(),c(s,{title:"Tablut",links:[]},{default:_(()=>[e("p",F,n(a.$t("unibo_23-24")),1),e("p",null,n(a.$t("tablut.description")),1)]),_:1})}const Z=g(D,[["render",O]]),E={key:0},J={class:"w-full h-72 relative"},Q={key:0,role:"status",class:"absolute top-0 left-0 w-full h-full flex justify-center items-center"},Y=e("svg",{"aria-hidden":"true",class:"w-8 h-8 animate-spin text-gray-200 fill-gray-600 dark:text-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),tt=[Y],et={key:1,class:"flex justify-center items-center w-full h-full"},nt=m({__name:"NotXiaGithubio",setup(a){const t=$(!1),s=$(!1);return V(()=>{try{window.frameElement&&(s.value=!0)}catch{s.value=!1}}),(o,d)=>{const f=u;return i(),c(f,{title:"notxia.github.io",links:[{label:"Repository",url:"https://github.com/NotXia/notxia.github.io"}]},{default:_(()=>[l(s)?h("",!0):(i(),p("p",E,n(o.$t("notxia.github.io.description")),1)),e("div",J,[!l(t)&&!l(s)?(i(),p("div",Q,tt)):h("",!0),l(s)?(i(),p("div",et,[e("p",null,n(o.$t("no recursion")),1)])):h("",!0),l(s)?h("",!0):(i(),p("iframe",{key:2,src:"/",frameborder:"0",width:"100%",height:"100%",onLoad:d[0]||(d[0]=b=>t.value=!0)},null,32))])]),_:1},8,["links"])}}}),st=""+new URL("bsc-thesis.b9b22342.png",import.meta.url).href,ot={class:"text-center"},it=m({__name:"BScThesis",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:t.$t("bsc_thesis.title"),subtitle:t.$t("bsc_thesis.thesis_title"),image:l(st),links:[{label:"Repository1",url:"https://github.com/NotXia/biomed-ext-summ"},{label:"Repository2",url:"https://github.com/NotXia/pubmed-summ"}]},{default:_(()=>[e("p",ot,n(t.$t("unibo_22-23")),1),e("p",null,n(t.$t("bsc_thesis.description")),1)]),_:1},8,["title","subtitle","image","links"])}}}),at=""+new URL("wavemap.aad0017b.jpg",import.meta.url).href,rt={class:"text-center"},lt=m({__name:"WaveMap",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"WaveMap",image:l(at),links:[{label:"Repository",url:"https://github.com/NotXia/wave-map"}]},{default:_(()=>[e("p",rt,n(t.$t("unibo_22-23")),1),e("p",null,n(t.$t("wavemap.description")),1)]),_:1},8,["image","links"])}}}),ct={},_t={class:"text-center"};function ut(a,t){const s=u;return i(),c(s,{title:"Wirefilter",links:[{label:"Repository",url:"https://github.com/NotXia/vdeplug_wirefilter"},{label:"VirtualSquare",url:"http://wiki.virtualsquare.org/#!index.md"}]},{default:_(()=>[e("p",_t,n(a.$t("unibo_22-23")),1),e("p",null,n(a.$t("wirefilter.description")),1)]),_:1},8,["links"])}const mt=g(ct,[["render",ut]]),pt=""+new URL("tweet-analysis.0dffd059.png",import.meta.url).href,dt={class:"text-center"},ht=m({__name:"TweetAnalysis",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"Tweet Analysis",image:l(pt),links:[{label:"Repository",url:"https://github.com/NotXia/tweet-analysis"}]},{default:_(()=>[e("p",dt,n(t.$t("unibo_22-23")),1),e("p",null,n(t.$t("tweet_analysis.description")),1)]),_:1},8,["image","links"])}}}),ft=""+new URL("animal-house.c9987528.png",import.meta.url).href,gt={class:"text-center"},bt={class:"list-inside list-['-_']"},$t=m({__name:"AnimalHouse",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"Animal House",image:l(ft),links:[{label:"Repository",url:"https://github.com/NotXia/animal-house"}]},{default:_(()=>[e("p",gt,n(t.$t("unibo_21-22")),1),e("p",null,n(t.$t("animalhouse.description")),1),e("ul",bt,[e("li",null,n(t.$t("animalhouse.description.game")),1),e("li",null,n(t.$t("animalhouse.description.frontoffice")),1),e("li",null,n(t.$t("animalhouse.description.backoffice")),1)])]),_:1},8,["image","links"])}}}),kt={},yt={class:"text-center"};function wt(a,t){const s=u;return i(),c(s,{title:"PandOS+",links:[{label:"Repository",url:"https://github.com/NotXia/pandos-plus"}]},{default:_(()=>[e("p",yt,n(a.$t("unibo_21-22")),1),e("p",null,n(a.$t("pandos+.description")),1)]),_:1},8,["links"])}const xt=g(kt,[["render",wt]]),Ct=""+new URL("imaging.29f5091c.png",import.meta.url).href,vt={class:"text-center"},Nt=m({__name:"Imaging",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"Image deblur",image:l(Ct),links:[{label:"Repository",url:"https://github.com/NotXia/imaging"}]},{default:_(()=>[e("p",vt,n(t.$t("unibo_21-22")),1),e("p",null,n(t.$t("imaging.description")),1)]),_:1},8,["image","links"])}}}),Pt=""+new URL("mnkgame.9468ace0.png",import.meta.url).href,jt={class:"text-center"},Rt=m({__name:"MNKGame",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"MNK Game",image:l(Pt),links:[{label:"Repository",url:"https://github.com/NotXia/MNKGame"}]},{default:_(()=>[e("p",jt,n(t.$t("unibo_20-21")),1),e("p",null,n(t.$t("mnk.description")),1)]),_:1},8,["image","links"])}}}),Xt=""+new URL("platform.70851a6c.png",import.meta.url).href,zt={class:"text-center"},St=m({__name:"Platform",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"Platform game",image:l(Xt),links:[{label:"Repository",url:"https://github.com/NotXia/platform-game"}]},{default:_(()=>[e("p",zt,n(t.$t("unibo_20-21")),1),e("p",null,n(t.$t("platform.description")),1)]),_:1},8,["image","links"])}}}),Lt=""+new URL("pathfinding-visualizer.4308823e.png",import.meta.url).href,Mt=m({__name:"PathfindingVisualizer",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"Pathfinding visualizer",image:l(Lt),links:[{label:"Repository",url:"https://github.com/NotXia/pathfinding-visualizer"},{label:"Demo",url:"https://notxia.github.io/pathfinding-visualizer/"}]},{default:_(()=>[y(n(t.$t("pathfinding_visualizer.description")),1)]),_:1},8,["image","links"])}}}),Ut=""+new URL("sorting-visualizer.7ca3c484.png",import.meta.url).href,Vt=m({__name:"SortingVisualizer",setup(a){return(t,s)=>{const o=u;return i(),c(o,{title:"Sorting visualizer",image:l(Ut),links:[{label:"Repository",url:"https://github.com/NotXia/sorting-visualizer"},{label:"Demo",url:"https://notxia.github.io/sorting-visualizer/"}]},{default:_(()=>[y(n(t.$t("sort_visualizer.description")),1)]),_:1},8,["image","links"])}}}),Tt={class:"text-5xl font-bold text-center mb-5"},Bt={class:"text-3xl text-center mt-10 mb-3"},At={class:"[&>*]:my-14 first:[&>*]:mt-8"},Gt={class:"text-3xl text-center mt-10 mb-3"},Wt={class:"[&>*]:my-14 first:[&>*]:mt-8"},Kt=m({__name:"projects",setup(a){const{t}=T();return B({title:t("title_projects")}),(s,o)=>{const d=L,f=Z,b=nt,w=it,x=lt,C=mt,v=ht,N=$t,P=xt,j=Nt,R=Rt,X=St,z=Mt,S=Vt;return i(),p(k,null,[r(d),e("main",null,[e("h1",Tt,n(s.$t("projects")),1),e("h2",Bt,n(s.$t("wip")),1),e("div",At,[r(f),r(b)]),e("h2",Gt,n(s.$t("completed")),1),e("div",Wt,[r(w),r(x),r(C),r(v),r(N),r(P),r(j),r(R),r(X),r(z),r(S)])])],64)}}});export{Kt as default};