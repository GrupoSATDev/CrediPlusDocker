import{l as tt,m as Tt,n as It,p as O,q as T,s as xt,t as q,u as y,w as g,z as W}from"./chunk-T4J43FBS.js";import{A as G,B as H,G as $,I as Ot,J as X,O as J,a as At,g as V,j as z,l as K}from"./chunk-SUQ5NR2B.js";import{b as N,d as Dt}from"./chunk-SQ7M4XTP.js";import{$a as c,A as lt,Ac as Ct,B as C,Ba as f,Da as D,Db as pt,Ea as ht,Eb as gt,H as E,Ka as Z,Kb as ft,Pb as _t,U as k,Vb as vt,Wb as yt,Xb as bt,aa as R,ba as F,bb as mt,da as p,f as u,fa as d,fc as B,ga as v,gb as j,l as rt,la as L,lb as P,ma as S,na as ct,qb as M,rb as A,ua as dt,ub as ut,v as w}from"./chunk-RICNMTJI.js";import{a as m,b as st}from"./chunk-NEB6MB4Y.js";function Nt(o,i){}var _=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var nt=(()=>{let i=class i extends It{constructor(t,e,n,a,l,r,h,b){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=a,this._interactivityChecker=l,this._ngZone=r,this._overlayRef=h,this._focusMonitor=b,this._platform=v(At),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=v(Ct),this.attachDomPortal=U=>{this._portalOutlet.hasAttached();let jt=this._portalOutlet.attachDomPortal(U);return this._contentAttached(),jt},this._document=n,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{t.removeEventListener("blur",n),t.removeEventListener("mousedown",n),t.removeAttribute("tabindex")};t.addEventListener("blur",n),t.addEventListener("mousedown",n)})),t.focus(e)}_focusByCssSelector(t,e){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,e)}_trapFocus(){let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElementWhenReady().then(e=>{e||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let n=V(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=V();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=V()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}};i.\u0275fac=function(e){return new(e||i)(c(D),c(H),c(N,8),c(_),c(G),c(j),c(y),c($))},i.\u0275cmp=L({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,n){if(e&1&&vt(O,7),e&2){let a;yt(a=bt())&&(n._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,n){e&2&&A("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},standalone:!0,features:[P,B],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,n){e&1&&M(0,Nt,0,0,"ng-template",0)},dependencies:[O],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2});let o=i;return o})(),I=class{constructor(i,s){this.overlayRef=i,this.config=s,this.closed=new u,this.disableClose=s.disableClose,this.backdropClick=i.backdropClick(),this.keydownEvents=i.keydownEvents(),this.outsidePointerEvents=i.outsidePointerEvents(),this.id=s.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!z(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=i.detachments().subscribe(()=>{s.closeOnOverlayDetachments!==!1&&this.close()})}close(i,s){if(this.containerInstance){let t=this.closed;this.containerInstance._closeInteractionType=s?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(i),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(i="",s=""){return this.overlayRef.updateSize({width:i,height:s}),this}addPanelClass(i){return this.overlayRef.addPanelClass(i),this}removePanelClass(i){return this.overlayRef.removePanelClass(i),this}},Vt=new p("DialogScrollStrategy",{providedIn:"root",factory:()=>{let o=v(g);return()=>o.scrollStrategies.block()}}),zt=new p("DialogData"),Gt=new p("DefaultDialogConfig");var Ht=0,ot=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,n,a,l,r){this._overlay=t,this._injector=e,this._defaultOptions=n,this._parentDialog=a,this._overlayContainer=l,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this._ariaHiddenElements=new Map,this.afterAllClosed=w(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(k(void 0))),this._scrollStrategy=r}open(t,e){let n=this._defaultOptions||new _;e=m(m({},n),e),e.id=e.id||`cdk-dialog-${Ht++}`,e.id&&this.getDialogById(e.id);let a=this._getOverlayConfig(e),l=this._overlay.create(a),r=new I(l,e),h=this._attachContainer(l,r,e);return r.containerInstance=h,this._attachDialogContent(t,r,h,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){et(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){et(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),et(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new xt({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,n){let a=n.injector||n.viewContainerRef?.injector,l=[{provide:_,useValue:n},{provide:I,useValue:e},{provide:y,useValue:t}],r;n.container?typeof n.container=="function"?r=n.container:(r=n.container.type,l.push(...n.container.providers(n))):r=nt;let h=new tt(r,n.viewContainerRef,f.create({parent:a||this._injector,providers:l}),n.componentFactoryResolver);return t.attach(h).instance}_attachDialogContent(t,e,n,a){if(t instanceof mt){let l=this._createInjector(a,e,n,void 0),r={$implicit:a.data,dialogRef:e};a.templateContext&&(r=m(m({},r),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),n.attachTemplatePortal(new Tt(t,null,r,l))}else{let l=this._createInjector(a,e,n,this._injector),r=n.attachComponentPortal(new tt(t,a.viewContainerRef,l,a.componentFactoryResolver));e.componentRef=r,e.componentInstance=r.instance}}_createInjector(t,e,n,a){let l=t.injector||t.viewContainerRef?.injector,r=[{provide:zt,useValue:t.data},{provide:I,useValue:e}];return t.providers&&(typeof t.providers=="function"?r.push(...t.providers(e,t,n)):r.push(...t.providers)),t.direction&&(!l||!l.get(X,null,{optional:!0}))&&r.push({provide:X,useValue:{value:t.direction,change:rt()}}),f.create({parent:l||a,providers:r})}_removeOpenDialog(t,e){let n=this.openDialogs.indexOf(t);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute("aria-hidden",a):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let n=e.length-1;n>-1;n--){let a=e[n];a!==t&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}};i.\u0275fac=function(e){return new(e||i)(d(g),d(f),d(Gt,8),d(i,12),d(q),d(Vt))},i.\u0275prov=R({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();function et(o,i){let s=o.length;for(;s--;)i(o[s])}var wt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=S({type:i}),i.\u0275inj=F({providers:[ot],imports:[W,T,Ot,T]});let o=i;return o})();function $t(o,i){}var x=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},at="mdc-dialog--open",Et="mdc-dialog--opening",kt="mdc-dialog--closing",qt=150,Wt=75,Yt=(()=>{let i=class i extends nt{constructor(t,e,n,a,l,r,h,b,U){super(t,e,n,a,l,r,h,U),this._animationMode=b,this._animationStateChanged=new ht,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?Ft(this._config.enterAnimationDuration)??qt:0,this._exitAnimationDuration=this._animationsEnabled?Ft(this._config.exitAnimationDuration)??Wt:0,this._animationTimer=null,this._isDestroyed=!1,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Rt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Et,at)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(at),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(at),this._animationsEnabled?(this._hostElement.style.setProperty(Rt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(kt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(Et,kt)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._isDestroyed||(this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t}))}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer),this._isDestroyed=!0}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}};i.\u0275fac=function(e){return new(e||i)(c(D),c(H),c(N,8),c(x),c(G),c(j),c(y),c(Z,8),c($))},i.\u0275cmp=L({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,n){e&2&&(ft("id",n._config.id),A("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),ut("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},standalone:!0,features:[P,B],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(pt(0,"div",0)(1,"div",1),M(2,$t,0,0,"ng-template",2),gt()())},dependencies:[O],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, 4px);background-color:var(--mdc-dialog-container-color, white)}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, rgba(0, 0, 0, 0.87));font-family:var(--mdc-dialog-subhead-font, Roboto, sans-serif);line-height:var(--mdc-dialog-subhead-line-height, 1.5rem);font-size:var(--mdc-dialog-subhead-size, 1rem);font-weight:var(--mdc-dialog-subhead-weight, 400);letter-spacing:var(--mdc-dialog-subhead-tracking, 0.03125em)}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, rgba(0, 0, 0, 0.6));font-family:var(--mdc-dialog-supporting-text-font, Roboto, sans-serif);line-height:var(--mdc-dialog-supporting-text-line-height, 1.5rem);font-size:var(--mdc-dialog-supporting-text-size, 1rem);font-weight:var(--mdc-dialog-supporting-text-weight, 400);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 0.03125em)}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2});let o=i;return o})(),Rt="--mat-dialog-transition-duration";function Ft(o){return o==null?null:typeof o=="number"?o:o.endsWith("ms")?K(o.substring(0,o.length-2)):o.endsWith("s")?K(o.substring(0,o.length-1))*1e3:o==="0"?0:null}var Y=function(o){return o[o.OPEN=0]="OPEN",o[o.CLOSING=1]="CLOSING",o[o.CLOSED=2]="CLOSED",o}(Y||{}),Q=class{constructor(i,s,t){this._ref=i,this._containerInstance=t,this._afterOpened=new u,this._beforeClosed=new u,this._state=Y.OPEN,this.disableClose=s.disableClose,this.id=i.id,i.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(C(e=>e.state==="opened"),E(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(C(e=>e.state==="closed"),E(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),i.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),lt(this.backdropClick(),this.keydownEvents().pipe(C(e=>e.keyCode===27&&!this.disableClose&&!z(e)))).subscribe(e=>{this.disableClose||(e.preventDefault(),Lt(this,e.type==="keydown"?"keyboard":"mouse"))})}close(i){this._result=i,this._containerInstance._animationStateChanged.pipe(C(s=>s.state==="closing"),E(1)).subscribe(s=>{this._beforeClosed.next(i),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),s.totalTime+100)}),this._state=Y.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(i){let s=this._ref.config.positionStrategy;return i&&(i.left||i.right)?i.left?s.left(i.left):s.right(i.right):s.centerHorizontally(),i&&(i.top||i.bottom)?i.top?s.top(i.top):s.bottom(i.bottom):s.centerVertically(),this._ref.updatePosition(),this}updateSize(i="",s=""){return this._ref.updateSize(i,s),this}addPanelClass(i){return this._ref.addPanelClass(i),this}removePanelClass(i){return this._ref.removePanelClass(i),this}getState(){return this._state}_finishDialogClose(){this._state=Y.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Lt(o,i,s){return o._closeInteractionType=i,o.close(s)}var Qt=new p("MatMdcDialogData"),Ut=new p("mat-mdc-dialog-default-options"),Zt=new p("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let o=v(g);return()=>o.scrollStrategies.block()}});var Kt=0,St=(()=>{let i=class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,n,a,l,r,h,b){this._overlay=t,this._defaultOptions=a,this._scrollStrategy=l,this._parentDialog=r,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new u,this._afterOpenedAtThisLevel=new u,this.dialogConfigClass=x,this.afterAllClosed=w(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(k(void 0))),this._dialog=e.get(ot),this._dialogRefConstructor=Q,this._dialogContainerType=Yt,this._dialogDataToken=Qt}open(t,e){let n;e=m(m({},this._defaultOptions||new x),e),e.id=e.id||`mat-mdc-dialog-${Kt++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(t,st(m({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:_,useValue:e}]},templateContext:()=>({dialogRef:n}),providers:(l,r,h)=>(n=new this._dialogRefConstructor(l,e,h),n.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}};i.\u0275fac=function(e){return new(e||i)(d(g),d(f),d(Dt,8),d(Ut,8),d(Zt),d(i,12),d(q),d(Z,8))},i.\u0275prov=R({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var He=(()=>{let i=class i{constructor(t,e,n){this.dialogRef=t,this._elementRef=e,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=Xt(this._elementRef,this._dialog.openDialogs))}ngOnChanges(t){let e=t._matDialogClose||t._matDialogCloseResult;e&&(this.dialogResult=e.currentValue)}_onButtonClick(t){Lt(this.dialogRef,t.screenX===0&&t.screenY===0?"keyboard":"mouse",this.dialogResult)}};i.\u0275fac=function(e){return new(e||i)(c(Q,8),c(D),c(St))},i.\u0275dir=ct({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,n){e&1&&_t("click",function(l){return n._onButtonClick(l)}),e&2&&A("aria-label",n.ariaLabel||null)("type",n.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],standalone:!0,features:[dt]});let o=i;return o})();function Xt(o,i){let s=o.nativeElement.parentElement;for(;s&&!s.classList.contains("mat-mdc-dialog-container");)s=s.parentElement;return s?i.find(t=>t.id===s.id):null}var $e=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=S({type:i}),i.\u0275inj=F({providers:[St],imports:[wt,W,T,J,J]});let o=i;return o})();export{Q as a,Qt as b,St as c,He as d,$e as e};
