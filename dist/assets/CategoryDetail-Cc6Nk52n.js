import{d as b,s as f,r,g as v,G as h,_ as w,o as l,c as n,x as y,a as m,F as C,h as k,p as I,e as B}from"./index-DQRCGBA1.js";import{c as _,P as x}from"./ProductItem-B1aUK8Ea.js";import"./utils-C8PGO6fV.js";import"./ScoreSet-DRd2uhD5.js";const E=b({__name:"CategoryDetail",setup(t,{expose:u}){u();const c=f(),e=r(""),a=r(""),o=r(""),s=r([]),p=()=>{const i=c.params.category;i==="category1"&&(e.value="잘못된 7가지 식습관",a.value="당뇨를 부르는",o.value=_),i==="category2"&&(e.value="저당 빵",a.value="당뇨 환자분들이 가장 찾는",o.value=_),i==="category3"&&(e.value="저당 차",a.value="당뇨 환자분들이 가장 찾는",o.value=_)},g=()=>{s.value=[{id:1,title:"[CJ제일제당] 식후 혈당조절도움 햇반 210g 6개입",original_price:18e3,sale:40,price:10800,score:4.5,review_cnt:10,is_like:!0,img_src:"https://bob-prod-bucket.s3.ap-northeast-2.amazonaws.com/img_item_dummy_4.png"},{id:2,title:"[조이키토] 수제 버터바 4개입",original_price:22500,sale:16,price:18900,score:0,review_cnt:0,is_like:!1,img_src:"https://bob-prod-bucket.s3.ap-northeast-2.amazonaws.com/img_item_dummy_1.png"},{id:3,title:"[글루어트] 무설탕 애플사이다비 니거, 애사비 식초 2종 (1B...",original_price:22500,sale:16,price:18900,score:0,review_cnt:0,is_like:!1,img_src:"https://bob-prod-bucket.s3.ap-northeast-2.amazonaws.com/img_item_dummy_2.png"},{id:4,title:"저당도시락 9종 당뇨도시락 환자 식단 단백질 탄단지...",original_price:22500,sale:16,price:18900,score:0,review_cnt:0,is_like:!1,img_src:"https://bob-prod-bucket.s3.ap-northeast-2.amazonaws.com/img_item_dummy_3.png"}]};v(()=>{p(),g()});const d={route:c,categoryTitle:e,categoryDesc:a,categoryImg:o,list:s,loadCategory:p,loadProductList:g,CategoryItem:h,ProductItem:x};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),A=t=>(I("data-v-c21faa61"),t=t(),B(),t),D={class:"category-detail-page-container"},P=A(()=>m("div",{class:"text-align-right"},[m("button",{class:"btn-transparent btn-more-blog"},"글 더보기")],-1)),S={class:"product-list"},z={class:"item"};function F(t,u,c,e,a,o){return l(),n("div",D,[P,y(e.CategoryItem,{title:e.categoryTitle,"sub-title":e.categoryDesc,"img-src":e.categoryImg,"is-clickable":!1,arrow:"글 보러가기"},null,8,["title","sub-title","img-src"]),m("ul",S,[(l(!0),n(C,null,k(e.list,s=>(l(),n("li",z,[y(e.ProductItem,{item:s},null,8,["item"])]))),256))])])}const V=w(E,[["render",F],["__scopeId","data-v-c21faa61"],["__file","/Users/hyewonchoi/project/bob-dr/src/views/CategoryDetail.vue"]]);export{V as default};
