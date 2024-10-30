import{j as e,r as N}from"./react62461.js";import{u as K,L as A,O as z,c as G,a as R,b as U,R as T}from"./@tanstack62461.js";import{c as D}from"./react-dom62461.js";import{c as u,a as C}from"./class-variance-authority62461.js";import{H as M,a as V}from"./@heroicons62461.js";import{g as O}from"./graphql-tag62461.js";import{c as L}from"./zustand62461.js";import{u as S,c as X,A as Y,I as H,s as W,a as Z}from"./@apollo62461.js";import{d as E}from"./dayjs62461.js";import{n as _}from"./nanoid62461.js";import{u as $}from"./react-use62461.js";import{i as v}from"./ramda62461.js";import{E as ee}from"./react-error-boundary62461.js";import"./copy-to-clipboard62461.js";import"./tiny-invariant62461.js";import"./tiny-warning62461.js";import"./use-sync-external-store62461.js";import"./scheduler62461.js";import"./clsx62461.js";import"./tslib62461.js";import"./graphql62461.js";import"./optimism62461.js";import"./@wry62461.js";import"./zen-observable-ts62461.js";import"./ts-invariant62461.js";import"./rehackt62461.js";import"./symbol-observable62461.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const P=C("transition-colors",{variants:{size:{xxxs:"min-h-[0.5rem] min-w-[0.5rem] max-w-[0.5rem]",xxs:"min-h-[0.75rem] min-w-[0.75rem] max-w-[0.75rem]",xs:"min-h-[1rem] min-w-[1rem] max-w-[1rem]",sm:"min-h-[1.5rem] min-w-[1.5rem] max-w-[1.5rem]",md:"min-h-[2rem] min-w-[2rem] max-w-[2rem]",lg:"min-h-[2.5rem] min-w-[2.5rem] max-w-[2.5rem]"},iconWidth:{auto:"",fixed:"justify-center"},withScale:{true:"hover:scale-110",false:""}},defaultVariants:{iconWidth:"auto"}}),h=o=>{const{icon:t,className:r,dataTestId:n,withScale:s=!1,size:a,iconWidth:i="auto",...m}=o,p=n||"icon",[l,d]=t==null?void 0:t.split("/");if(l&&d){if(l==="solid"){const c=M[d];return e.jsx(c,{className:u(P({size:a,iconWidth:i,withScale:s}),r),"data-testid":p,...m})}if(l==="outline"){const c=V[d];return e.jsx(c,{className:u(P({size:a,iconWidth:i,withScale:s}),r),"data-testid":p,...m})}}},w=C("flex-center relative shrink-0 overflow-hidden rounded-full bg-gray-300 text-red-400",{variants:{size:{lg:"h-32 w-32",md:"h-16 w-16",sm:"h-8 w-8"}},defaultVariants:{size:"lg"}}),re=o=>{const{src:t,className:r,size:n="lg",...s}=o;return t?e.jsx("div",{className:u(w({size:n}),r),"data-testid":"avatar",...s,children:e.jsx("img",{className:"h-full w-full object-cover",loading:"lazy",src:t})}):e.jsx("div",{className:u(w({size:n}),r),"data-testid":"avatar-placeholder",...s,children:e.jsx(h,{className:"pointer-events-none absolute -bottom-2 h-full w-full text-neutral-400",icon:"solid/UserIcon"})})},b=o=>{const{className:t,...r}=o;return e.jsxs("div",{className:u("flex-center flex-col gap-y-4",t),...r,children:[e.jsx(h,{className:"animate-spin",icon:"outline/FaceSmileIcon",size:"md"}),e.jsx("h1",{children:"Loading..."})]})},te=(o,t)=>new Array(o).fill(0).map((r,n)=>t(n)),se=o=>{const{className:t,current:r,limit:n,totalPages:s,onChange:a}=o;if(!r||s<=1)return null;const i=r===1,m=r===s,p=Math.floor(n/2);let l=Math.max(1,r-p),d=Math.min(s,r+p);d-l+1<n&&(l===1?d=Math.min(s,l+n-1):d===s&&(l=Math.max(1,d-n+1)));const c=te(d-l+1,g=>l+g),j=()=>{i||a(r-1)},B=()=>{m||a(r+1)};return e.jsx("nav",{className:u("w-fit",t),"data-testid":"pagination",role:"pagination",children:e.jsxs("ul",{className:u("flex items-center gap-x-2"),children:[e.jsx("div",{className:u("flex-center h-8 w-8 rounded-lg",{"hover:bg-gray-100":!i}),children:e.jsx(h,{"data-testid":"prev",icon:"outline/ChevronLeftIcon",className:u("h-6 w-6",{"cursor-pointer hover:scale-110":!i,"cursor-not-allowed text-gray-300":i}),onClick:j})}),c.map(g=>{const q=_(),J=()=>a(g);return e.jsx("li",{className:u("flex-center h-8 w-8 cursor-pointer rounded-lg bg-white font-bold",{"bg-yellow-400 text-white":g===r,"hover:bg-gray-100":g!==r}),onClick:J,children:g},q)}),e.jsx("div",{className:u("flex-center h-8 w-8 rounded-lg",{"hover:bg-gray-100":!m}),children:e.jsx(h,{"data-testid":"next",icon:"outline/ChevronRightIcon",className:u("h-6 w-6",{"cursor-pointer hover:scale-110":!m,"cursor-not-allowed text-gray-300":m}),onClick:B})})]})})},f=o=>{const{className:t,type:r,message:n,...s}=o,a=r==="empty"?"outline/WrenchIcon":"outline/FaceFrownIcon";return e.jsxs("section",{className:u("page-wrapper flex-center flex-col gap-4",t),"data-testid":"result",...s,children:[e.jsx(h,{className:u({"":r==="empty","text-red-500":r==="error"}),icon:a,size:"lg"}),n]})},oe=()=>e.jsx("section",{className:"page-wrapper",children:e.jsx(f,{message:e.jsx("h1",{children:"Ooops...Page not found"}),type:"empty"})}),ae=O`
  query SearchRepositories($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            stargazerCount
            updatedAt
            url
            owner {
              login
              avatarUrl
              url
            }
            primaryLanguage {
              name
            }
            languages(first: 10) {
              edges {
                node {
                  id
                  name
                }
              }
            }
            description
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`,ne=O`
  query GetRepository($id: ID!) {
    node(id: $id) {
      ... on Repository {
        name
        stargazerCount
        updatedAt
        owner {
          login
          avatarUrl
          url
        }
        languages(first: 10) {
          edges {
            node {
              id
              name
            }
          }
        }
        primaryLanguage {
          name
        }
        description
      }
    }
  }
`,ie={REPOSITORIES_LIST:ae,REPOSITORY_BY_ID:ne},F={query:ie},x=L(o=>({repositoryList:[],totalRepositories:0,currentPage:Number(localStorage.getItem("currentPage"))||1,searchQuery:localStorage.getItem("searchQuery")||"",setRepositoryList:t=>o({repositoryList:t}),setTotalRepositories:t=>o({totalRepositories:t}),setCurrentPage:t=>o({currentPage:t}),setSearchQuery:t=>o({searchQuery:t})})),ce=()=>{const o=x(i=>i.setRepositoryList),t=x(i=>i.setTotalRepositories),r=x(i=>i.currentPage),n=localStorage.getItem("searchQuery")||"",s=localStorage.getItem("cursors"),a=s?JSON.parse(s):{};return S(F.query.REPOSITORIES_LIST,{variables:{query:n||"user:current",first:10,after:r>1?a[r-1]:null},onCompleted:i=>{const{search:m}=i,{edges:p,repositoryCount:l,pageInfo:d}=m;o(p.map(c=>c.node)),t(l),r>1&&(a[r]=d.endCursor,localStorage.setItem("cursors",JSON.stringify(a)))},fetchPolicy:"network-only"})},Q=L(o=>({repository:null,setRepository:t=>o({repository:t})})),le=()=>{const{repoId:o}=K({from:"/repository-id/$repoId"}),t=Q(r=>r.setRepository);return S(F.query.REPOSITORY_BY_ID,{variables:{id:o},onCompleted:r=>{const{node:n}=r;t(n)}})},k="D MMMM YYYY, HH:mm",I=10,de=o=>{const{containerClassName:t,repository:r,...n}=o,{id:s,name:a,stargazerCount:i,updatedAt:m,url:p,primaryLanguage:l}=r,d=E(m).format(k);return e.jsxs("div",{className:u("flex w-full flex-col items-start gap-y-3 rounded-xl border-[1px] border-gray-500 bg-gray-100 p-3",t),...n,children:[e.jsxs("div",{className:"flex-center gap-x-2",children:[e.jsx("p",{children:"Stars:"}),e.jsx("p",{children:i}),e.jsx(h,{className:"text-yellow-400",icon:"solid/StarIcon",size:"sm"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Repository name:"}),e.jsx(A,{className:"cursor-pointer text-blue-500 hover:underline hover:underline-offset-2",params:{repoId:s},to:"/repository-id/$repoId",children:a})]}),l&&e.jsxs("div",{children:[e.jsx("p",{children:"Primary language:"}),e.jsx("p",{children:(l==null?void 0:l.name)||""})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Last commit:"}),e.jsx("p",{children:d})]}),e.jsx("a",{className:"cursor-pointer text-blue-500 hover:underline hover:underline-offset-2",href:p,rel:"noreferrer",target:"_blank",children:"GitHub Link"})]})},ue=()=>{const{loading:o,error:t}=ce(),{repositoryList:r,totalRepositories:n,currentPage:s,searchQuery:a,setSearchQuery:i,setCurrentPage:m}=x(c=>({repositoryList:c.repositoryList,totalRepositories:c.totalRepositories,currentPage:c.currentPage,searchQuery:c.searchQuery,setSearchQuery:c.setSearchQuery,setCurrentPage:c.setCurrentPage})),p=!o&&!t,l=c=>{const j=c.currentTarget.value;i(j),m(1)},d=c=>{m(c),localStorage.setItem("currentPage",c.toString())};return $(()=>{localStorage.setItem("searchQuery",a||""),localStorage.setItem("currentPage","1"),localStorage.setItem("cursors","{}")},300,[a]),N.useEffect(()=>{localStorage.setItem("currentPage",s.toString())},[s]),e.jsxs("section",{className:"page-wrapper flex-center flex-col gap-y-3",children:[e.jsx("input",{value:a,onChange:l}),o&&e.jsx(b,{}),t&&e.jsx(f,{message:e.jsx("h1",{className:"text-red-500",children:"Something went wrong..."}),type:"error"}),v(r)&&p&&e.jsx(f,{message:e.jsx("h1",{children:"Repositories not found..."}),type:"empty"}),!v(r)&&p&&e.jsx(N.Fragment,{children:e.jsx("ul",{className:"grid grid-cols-1 gap-3 lg:grid-cols-5 lg:grid-rows-2",children:r.map(c=>e.jsx(de,{repository:c},c.id))})}),!t&&n>10&&e.jsx(se,{current:s,limit:I,totalPages:Math.ceil(n/I),onChange:d})]})},me=()=>{var a;const{loading:o,error:t}=le(),r=Q(i=>i.repository),n=!o&&!t,s=()=>{r&&(window.location.href=r.owner.url)};return e.jsxs("section",{className:"page-wrapper flex flex-col gap-y-3",children:[o&&e.jsx(b,{}),t&&e.jsx(f,{message:e.jsx("h1",{className:"text-red-500",children:"Something went wrong..."}),type:"error"}),n&&e.jsx(A,{className:"cursor-pointer text-blue-500 hover:underline hover:underline-offset-2",to:"/repository-list",children:"Get back"}),r&&n&&e.jsxs("div",{className:"flex w-full flex-col items-start gap-y-3 rounded-xl border-[1px] border-gray-500 bg-gray-100 p-3",children:[e.jsxs("div",{className:"flex-center gap-x-2",onClick:s,children:[e.jsx(re,{className:"h-8 w-8 cursor-pointer",src:r.owner.avatarUrl}),e.jsx("p",{className:"cursor-pointer hover:underline hover:underline-offset-2",children:r.owner.login})]}),e.jsxs("div",{className:"flex-center gap-x-2",children:[e.jsx("p",{children:"Stars:"}),e.jsx("p",{children:r.stargazerCount}),e.jsx(h,{className:"text-yellow-400",icon:"solid/StarIcon",size:"sm"})]}),e.jsxs("div",{className:"flex-center gap-x-2",children:[e.jsx("p",{children:"Repository name:"}),e.jsx("p",{children:r.name})]}),e.jsxs("div",{children:[e.jsx("p",{children:"Last commit:"}),e.jsx("p",{children:E(r.updatedAt).format(k)})]}),e.jsx("a",{className:"cursor-pointer text-blue-500 hover:underline hover:underline-offset-2",href:r.url,rel:"noreferrer",target:"_blank",children:"GitHub Link"}),r.primaryLanguage&&e.jsxs("div",{className:"flex-center gap-x-2",children:[e.jsx("p",{children:"Primary language:"}),e.jsx("p",{children:((a=r.primaryLanguage)==null?void 0:a.name)||""})]}),!v(r.languages.edges)&&e.jsxs("div",{className:"flex-center gap-x-2",children:[e.jsx("p",{children:"Languages:"}),e.jsx("p",{children:r.languages.edges.map(i=>i.node.name).join(", ")})]}),r.description&&e.jsxs("div",{children:[e.jsx("p",{children:"Description:"}),e.jsx("p",{children:r.description})]})]})]})},pe="data:image/png;base64,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",he=()=>e.jsxs("header",{className:"wrapper flex items-start gap-x-3 py-2",children:[e.jsx("img",{alt:"logo",className:"h-5 w-5",loading:"lazy",src:pe}),e.jsx("p",{children:"Github Repos"})]}),ge=X({uri:"https://api.github.com/graphql"}),xe=W((o,{headers:t})=>({headers:{...t,Authorization:"Bearer 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"}})),fe=new Y({link:xe.concat(ge),cache:new H}),ye=o=>{const{children:t}=o;return e.jsx(Z,{client:fe,children:t})},je=()=>e.jsx(ye,{children:e.jsxs("main",{className:"flex flex-1 flex-col",children:[e.jsx(he,{}),e.jsx(ee,{fallback:"error",children:e.jsx(z,{})})]})}),y=G({component:je}),ve=R({getParentRoute:()=>y,path:"/repository-list",component:ue}),Re=R({getParentRoute:()=>y,path:"/repository-id/$repoId",component:me}),Ne=R({getParentRoute:()=>y,component:oe,path:"*"}),Pe=y.addChildren([ve,Re,Ne]),we=U({routeTree:Pe});D.createRoot(document.getElementById("root")).render(e.jsx(T,{router:we}));
