"use strict";(self.webpackChunkBonsai=self.webpackChunkBonsai||[]).push([[526],{7050:(K,L,t)=>{t.d(L,{e:()=>en});var A=t(5861),x=t(127),n=t(5e3),P=t(7579),M=t(9646),S=t(8306),U=t(8996),y=t(6451),b=t(5363),f=t(3900),O=t(4004),G=t(6063);class W extends P.x{constructor(s=1/0,r=1/0,a=G.l){super(),this._bufferSize=s,this._windowTime=r,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=r===1/0,this._bufferSize=Math.max(1,s),this._windowTime=Math.max(1,r)}next(s){const{isStopped:r,_buffer:a,_infiniteTimeWindow:d,_timestampProvider:l,_windowTime:u}=this;r||(a.push(s),!d&&a.push(l.now()+u)),this._trimBuffer(),super.next(s)}_subscribe(s){this._throwIfClosed(),this._trimBuffer();const r=this._innerSubscribe(s),{_infiniteTimeWindow:a,_buffer:d}=this,l=d.slice();for(let u=0;u<l.length&&!s.closed;u+=a?1:2)s.next(l[u]);return this._checkFinalizedStatuses(s),r}_trimBuffer(){const{_bufferSize:s,_timestampProvider:r,_buffer:a,_infiniteTimeWindow:d}=this,l=(d?1:2)*s;if(s<1/0&&l<a.length&&a.splice(0,a.length-l),!d){const u=r.now();let m=0;for(let g=1;g<a.length&&a[g]<=u;g+=2)m=g;m&&a.splice(0,m+1)}}}var D=t(3099);function k(o,s,r){var a,d;let l,u=!1;return o&&"object"==typeof o?(l=null!==(a=o.bufferSize)&&void 0!==a?a:1/0,s=null!==(d=o.windowTime)&&void 0!==d?d:1/0,u=!!o.refCount,r=o.scheduler):l=null!=o?o:1/0,(0,D.B)({connector:()=>new W(l,s,r),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:u})}var N=t(590),j=t(576);function H(o,s){return(0,j.m)(s)?(0,f.w)(()=>o,s):(0,f.w)(()=>o)}var w=t(9468),Q=t(9300),E=t(5813),v=t(2011),J=t(9808),e=t(7128);const i=new n.OlP("angularfire2.auth.use-emulator"),C=new n.OlP("angularfire2.auth.settings"),T=new n.OlP("angularfire2.auth.tenant-id"),$=new n.OlP("angularfire2.auth.langugage-code"),_=new n.OlP("angularfire2.auth.use-device-language"),nn=new n.OlP("angularfire.auth.persistence");let V=(()=>{class o{constructor(r,a,d,l,u,m,g,z,B,on,rn,sn){const X=new P.x,I=(0,M.of)(void 0).pipe((0,b.Q)(u.outsideAngular),(0,f.w)(()=>l.runOutsideAngular(()=>t.e(881).then(t.bind(t,5881)))),(0,O.U)(()=>(0,v.on)(r,l,a)),(0,O.U)(F=>((o,s,r,a,d,l,u,m)=>(0,v.cc)(`${o.name}.auth`,"AngularFireAuth",o.name,()=>{const g=s.runOutsideAngular(()=>o.auth());if(r&&g.useEmulator(...r),a&&(g.tenantId=a),g.languageCode=d,l&&g.useDeviceLanguage(),u)for(const[z,B]of Object.entries(u))g.settings[z]=B;return m&&g.setPersistence(m),g},[r,a,d,l,u,m]))(F,l,m,z,B,on,g,rn)),k({bufferSize:1,refCount:!1}));if((0,J.PM)(d))this.authState=this.user=this.idToken=this.idTokenResult=this.credential=(0,M.of)(null);else{I.pipe((0,N.P)()).subscribe();const R=I.pipe((0,f.w)(c=>c.getRedirectResult().then(p=>p,()=>null)),E.iC,k({bufferSize:1,refCount:!1})),Y=I.pipe((0,f.w)(c=>new S.y(p=>({unsubscribe:l.runOutsideAngular(()=>c.onAuthStateChanged(Z=>p.next(Z),Z=>p.error(Z),()=>p.complete()))})))),q=I.pipe((0,f.w)(c=>new S.y(p=>({unsubscribe:l.runOutsideAngular(()=>c.onIdTokenChanged(Z=>p.next(Z),Z=>p.error(Z),()=>p.complete()))}))));this.authState=R.pipe(H(Y),(0,w.R)(u.outsideAngular),(0,b.Q)(u.insideAngular)),this.user=R.pipe(H(q),(0,w.R)(u.outsideAngular),(0,b.Q)(u.insideAngular)),this.idToken=this.user.pipe((0,f.w)(c=>c?(0,U.D)(c.getIdToken()):(0,M.of)(null))),this.idTokenResult=this.user.pipe((0,f.w)(c=>c?(0,U.D)(c.getIdTokenResult()):(0,M.of)(null))),this.credential=(0,y.T)(R,X,this.authState.pipe((0,Q.h)(c=>!c))).pipe((0,O.U)(c=>(null==c?void 0:c.user)?c:null),(0,w.R)(u.outsideAngular),(0,b.Q)(u.insideAngular))}return(0,v.pX)(this,I,l,{spy:{apply:(F,R,Y)=>{(F.startsWith("signIn")||F.startsWith("createUser"))&&Y.then(q=>X.next(q))}}})}}return o.\u0275fac=function(r){return new(r||o)(n.LFG(v.Dh),n.LFG(v.xv,8),n.LFG(n.Lbi),n.LFG(n.R0b),n.LFG(E.HU),n.LFG(i,8),n.LFG(C,8),n.LFG(T,8),n.LFG($,8),n.LFG(_,8),n.LFG(nn,8),n.LFG(e.nm,8))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"any"}),o})(),en=(()=>{class o{constructor(r){this.afauth=r}register(r,a){var d=this;return(0,A.Z)(function*(){try{return yield d.afauth.createUserWithEmailAndPassword(r,a)}catch(l){return console.log("error en login: ",l),null}})()}login(r,a){var d=this;return(0,A.Z)(function*(){try{return yield d.afauth.signInWithEmailAndPassword(r,a)}catch(l){return console.log("error en login: ",l),null}})()}loginWithGoogle(r,a){var d=this;return(0,A.Z)(function*(){try{return yield d.afauth.signInWithPopup(new x.Z.auth.GoogleAuthProvider)}catch(l){return console.log("error en login con google: ",l),null}})()}getUserLogged(){return this.afauth.authState}logout(){this.afauth.signOut()}}return o.\u0275fac=function(r){return new(r||o)(n.LFG(V))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},7526:(K,L,t)=>{t.r(L),t.d(L,{HomeModule:()=>J});var A=t(9808),x=t(2074),n=t(5e3),P=t(7050),M=t(5861),S=t(2115),U=t(7423),y=t(2181);const b=function(){return["/home"]};function f(e,h){if(1&e){const i=n.EpF();n.ynx(0),n.TgZ(1,"nav",2),n.TgZ(2,"div",3),n.TgZ(3,"a",4),n._UZ(4,"img",5),n.TgZ(5,"strong",6),n._uU(6," BONSAI"),n.qZA(),n.qZA(),n.TgZ(7,"button",7),n.TgZ(8,"a",8),n.NdJ("click",function(){return n.CHM(i),n.oxw().onLogout()}),n._uU(9,"Salir de la sesion"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.BQk()}2&e&&(n.xp6(3),n.Q6J("routerLink",n.DdM(2,b)),n.xp6(5),n.Q6J("routerLink",n.DdM(3,b)))}const O=function(){return["/sign-in"]},G=function(){return["/sign-up"]};function W(e,h){if(1&e&&(n.TgZ(0,"nav",2),n.TgZ(1,"div",3),n.TgZ(2,"a",9),n._UZ(3,"img",5),n.TgZ(4,"strong",6),n._uU(5," BONSAI"),n.qZA(),n.qZA(),n.TgZ(6,"button",10),n._uU(7,"Inicio de Sesion"),n.qZA(),n.TgZ(8,"mat-menu",11,12),n.TgZ(10,"button",13),n.TgZ(11,"a",14),n._uU(12,"Ingresa"),n.qZA(),n.qZA(),n.TgZ(13,"button",13),n.TgZ(14,"a",14),n._uU(15,"Registrate"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e){const i=n.MAs(9);n.xp6(6),n.Q6J("matMenuTriggerFor",i),n.xp6(5),n.Q6J("routerLink",n.DdM(3,O)),n.xp6(3),n.Q6J("routerLink",n.DdM(4,G))}}let D=(()=>{class e{constructor(i,C,T){this.authSvc=i,this.router=C,this.StudentService=T,this.userLogged=this.authSvc.getUserLogged()}onLogout(){var i=this;return(0,M.Z)(function*(){i.authSvc.logout()})()}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)(n.Y36(P.e),n.Y36(x.F0),n.Y36(S.q))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-navbar"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["navTemplate",""],[1,"navbar","lg"],[1,"container-fluid"],["id","nav_bonsai",3,"routerLink"],["src","../../../assets/images/Bonsailogblack.png",1,"col","align-self-center",2,"width","35px"],[1,"col","align-self-center",2,"color","#263238"],[1,"align-self-center","btn"],[2,"text-decoration","none","color","#263238",3,"routerLink","click"],["id","nav_bonsai","href","https://revista-bonsai.web.app/"],["mat-button","",3,"matMenuTriggerFor"],["yPosition","above"],["aboveMenu","matMenu"],["mat-menu-item","",1,"align-self-center"],[1,"nav-link",2,"text-decoration","none","color","black",3,"routerLink"]],template:function(i,C){if(1&i&&(n.YNc(0,f,10,4,"ng-container",0),n.ALo(1,"async"),n.YNc(2,W,16,5,"ng-template",null,1,n.W1O)),2&i){const T=n.MAs(3);n.Q6J("ngIf",n.lcZ(1,2,C.userLogged))("ngIfElse",T)}},directives:[A.O5,x.yS,U.lW,y.p6,y.VK,y.OP],pipes:[A.Ov],styles:["body[_ngcontent-%COMP%]{font-size:.875rem}.feather[_ngcontent-%COMP%]{width:16px;height:16px;vertical-align:text-bottom}#nav_bonsai[_ngcontent-%COMP%]{text-decoration:none;color:azure;display:flex}.navbar-brand[_ngcontent-%COMP%]{padding-top:.75rem;padding-bottom:.75rem;font-size:1rem;background-color:#00000040;box-shadow:inset -1px 0 #00000040}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{top:.25rem;right:1rem}.navbar[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{padding:.75rem 1rem;border-width:0;border-radius:0}.form-control-dark[_ngcontent-%COMP%]{color:#fff;background-color:#ffffff1a;border-color:#ffffff1a}.form-control-dark[_ngcontent-%COMP%]:focus{border-color:transparent;box-shadow:0 0 0 3px #ffffff40}"]}),e})();const k=function(){return["/dashboard"]},N=function(){return["/calendar"]},j=function(){return["/enrolment"]},w=[{path:"",component:(()=>{class e{constructor(i){this.authSvc=i,this.userLogged=this.authSvc.getUserLogged()}ngOnInit(){this.authSvc.getUserLogged().subscribe(i=>{console.log(null==i?void 0:i.email)})}}return e.\u0275fac=function(i){return new(i||e)(n.Y36(P.e))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home"]],decls:28,vars:6,consts:[[1,"b-example-divider","w-100","divider_2"],["id","custom-cards",1,"px-4","py-5","w-100","divider_1","cards"],[1,"pb-2","border-bottom"],[1,"row","row-cols-1-sucess","row-cols-lg-3","align-items-stretch","g-4","py-5"],[1,"link-ref",3,"routerLink"],[1,"col","card","card__one"],[1,"card","card-cover","h-100","overflow-hidden","text-white","bg-dark","rounded-5","shadow-lg","borde_caja",2,"background-image","url('../../../assets/images/academy.webp')"],[1,"d-flex","flex-column","h-100","p-5","pb-3","text-white","text-shadow-1"],[1,"pt-5","mt-5","mb-4","display-6","lh-1","fw-bold","card__text"],[1,"col","card","card__two"],[1,"card","card-cover","h-100","overflow-hidden","text-white","bg-dark","rounded-5","shadow-lg","borde_caja",2,"background-image","url('../../../assets/images/unsplash-photo-1.webp')"],[1,"col","card","card__three"],[1,"card","card-cover","h-100","overflow-hidden","text-white","bg-dark","rounded-5","shadow-lg","borde_caja",2,"background-image","url('../../../assets/images/register.webp')"],[1,"d-flex","flex-column","h-100","p-5","pb-3","text-shadow-1"],[1,"bg-light","text-center","text-white","fixed-bottom"],[1,"text-center","p-3",2,"background-color","#161747b1"]],template:function(i,C){1&i&&(n._UZ(0,"app-navbar"),n.TgZ(1,"div",0),n.TgZ(2,"div",1),n.TgZ(3,"h1",2),n.TgZ(4,"strong"),n._uU(5,"Sistema de gestion de datos escolares."),n.qZA(),n.qZA(),n.TgZ(6,"div",3),n.TgZ(7,"a",4),n.TgZ(8,"div",5),n.TgZ(9,"div",6),n.TgZ(10,"div",7),n.TgZ(11,"h2",8),n._uU(12,"Seguimiento Academico."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"a",4),n.TgZ(14,"div",9),n.TgZ(15,"div",10),n.TgZ(16,"div",7),n.TgZ(17,"h2",8),n._uU(18,"Calendario y Agenda."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"a",4),n.TgZ(20,"div",11),n.TgZ(21,"div",12),n.TgZ(22,"div",13),n.TgZ(23,"h2",8),n._uU(24,"Registro Estudantil."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(25,"footer",14),n.TgZ(26,"div",15),n._uU(27," Copyright \xa9 2022 Bonsai "),n.qZA(),n.qZA()),2&i&&(n.xp6(7),n.Q6J("routerLink",n.DdM(3,k)),n.xp6(6),n.Q6J("routerLink",n.DdM(4,N)),n.xp6(6),n.Q6J("routerLink",n.DdM(5,j)))},directives:[D,x.yS],styles:[".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.b-example-divider[_ngcontent-%COMP%]{height:3rem;background-color:#0000001a;border:solid rgba(0,0,0,.15);border-width:1px 0;box-shadow:inset 0 .5em 1.5em #0000001a,inset 0 .125em .5em #00000026}.divider_1[_ngcontent-%COMP%]{background:#DED3DC;border-radius:30px;position:relative;top:5%}.divider_2[_ngcontent-%COMP%]{background:#82AA94;height:90%}.borde_caja[_ngcontent-%COMP%]{border:5px solid #fff}.bi[_ngcontent-%COMP%]{vertical-align:-.125em;fill:currentColor}.feature-icon[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:4rem;height:4rem;margin-bottom:1rem;font-size:2rem;color:#fff;border-radius:.75rem}.icon-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.icon-link[_ngcontent-%COMP%] > .bi[_ngcontent-%COMP%]{margin-top:.125rem;margin-left:.125rem;transition:transform .25s ease-in-out;fill:currentColor}.icon-link[_ngcontent-%COMP%]:hover > .bi[_ngcontent-%COMP%]{transform:translate(.25rem)}.icon-square[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:3rem;height:3rem;font-size:1.5rem;border-radius:.75rem}.rounded-4[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-5[_ngcontent-%COMP%]{border-radius:1rem}.text-shadow-1[_ngcontent-%COMP%]{text-shadow:0 .125rem .25rem rgba(0,0,0,.25)}.text-shadow-2[_ngcontent-%COMP%]{text-shadow:0 .25rem .5rem rgba(0,0,0,.25)}.text-shadow-3[_ngcontent-%COMP%]{text-shadow:0 .5rem 1.5rem rgba(0,0,0,.25)}.card-cover[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center center;background-size:cover}.link-ref[_ngcontent-%COMP%]{text-decoration:none}.cards[_ngcontent-%COMP%]{background:#fff;border-radius:15px;box-shadow:0 10px 20px 20px #0000002b;padding:30px 35px;text-align:left}.card[_ngcontent-%COMP%]{border-radius:15px;box-shadow:5px 5px 20px -5px #0009;height:250px;overflow:hidden;transform-style:preserve-3d;text-align:center}.card[_ngcontent-%COMP%]:not(:last-child){margin-right:30px}.card__text[_ngcontent-%COMP%]{align-items:center;bottom:0;justify-content:center;position:absolute;width:100%;z-index:1}.card__title[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:700;padding:0 10px;margin-bottom:3px}"]}),e})()}];let Q=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[x.Bz.forChild(w)],x.Bz]}),e})();var E=t(3954),v=t(9582);let J=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[A.ez,Q,E.N6,v.g]]}),e})()}}]);