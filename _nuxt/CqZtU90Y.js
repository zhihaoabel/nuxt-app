function r(f,t){return Object.entries(f).reduce((e,[s,n])=>(e[s]=typeof n=="function"?n({class:t==null?void 0:t[s]}):n,e),t||{})}export{r as t};
