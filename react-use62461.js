import{r}from"./react62461.js";function i(t,c){var u=r.useRef(!1),e=r.useRef(),n=r.useRef(t),f=r.useCallback(function(){return u.current},[]),a=r.useCallback(function(){u.current=!1,e.current&&clearTimeout(e.current),e.current=setTimeout(function(){u.current=!0,n.current()},c)},[c]),o=r.useCallback(function(){u.current=null,e.current&&clearTimeout(e.current)},[]);return r.useEffect(function(){n.current=t},[t]),r.useEffect(function(){return a(),o},[c]),[f,o,a]}function l(t,c,u){u===void 0&&(u=[]);var e=i(t,c),n=e[0],f=e[1],a=e[2];return r.useEffect(a,u),[n,f]}export{l as u};
