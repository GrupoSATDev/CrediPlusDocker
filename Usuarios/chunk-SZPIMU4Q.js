import{k as m}from"./chunk-E54QLSYT.js";import{p as w}from"./chunk-7HDWK74Y.js";import{Cb as l,Db as s,Qb as h,Rb as g,Sb as n,Za as d,ba as f,bc as x,f as c,ka as u,pb as p,rb as C,ta as _,vb as b,yb as r}from"./chunk-T2GNEYCX.js";var E=(()=>{let t=class t{constructor(){this.stateGrid=new c,this.stateGridSolicitudes=new c}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var T=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],S=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];function M(e,t){e&1&&(l(0,"div",0),n(1),s(),l(2,"div",1),n(3,1),s())}function D(e,t){e&1&&(l(0,"div",2),n(1,3),s()),e&2&&C("@expandCollapse",void 0)}function k(e,t){if(e&1&&(n(0,2),p(1,D,2,1,"div",2)),e&2){let v=h();d(),r(v.expanded?1:-1)}}var H=(()=>{let t=class t{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&this.face==="back","fuse-card-face-front":this.flippable&&this.face==="front","fuse-card-flippable":this.flippable}}ngOnChanges(a){"expanded"in a&&(this.expanded=m(a.expanded.currentValue)),"flippable"in a&&(this.flippable=m(a.flippable.currentValue))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=u({type:t,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(i,o){i&2&&b(o.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[_,x],ngContentSelectors:S,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],[1,"fuse-card-expansion"]],template:function(i,o){i&1&&(g(T),p(0,M,4,0)(1,k,2,1)),i&2&&(r(o.flippable?0:-1),d(),r(o.flippable?-1:1))},styles:[`fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}
`],encapsulation:2,data:{animation:w}});let e=t;return e})();export{E as a,H as b};