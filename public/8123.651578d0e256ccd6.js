"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8123],{8123:(A,c,s)=>{s.r(c),s.d(c,{HourPageModule:()=>P});var d=s(4755),u=s(5030),r=s(942),l=s(7957),p=s(5861),n=s(2223),h=s(7735);function f(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",7),n._uU(2,"Apertura"),n.qZA(),n.TgZ(3,"ion-input",11),n.NdJ("ngModelChange",function(g){n.CHM(o);const t=n.oxw();return n.KtG(t.openingTime=g)}),n.qZA()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("ngModel",o.openingTime)}}function _(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",7),n._uU(2,"Cierre"),n.qZA(),n.TgZ(3,"ion-input",12),n.NdJ("ngModelChange",function(g){n.CHM(o);const t=n.oxw();return n.KtG(t.closingTime=g)}),n.qZA()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("ngModel",o.closingTime)}}function T(e,a){1&e&&(n.TgZ(0,"ion-item")(1,"ion-label"),n._uU(2,"Horario continuo"),n.qZA()())}function C(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",7),n._uU(2,"Apertura turno ma\xf1ana"),n.qZA(),n.TgZ(3,"ion-input",13),n.NdJ("ngModelChange",function(g){n.CHM(o);const t=n.oxw();return n.KtG(t.morningOpeningTime=g)}),n.qZA()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("ngModel",o.morningOpeningTime)}}function M(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",7),n._uU(2,"Cierre turno ma\xf1ana"),n.qZA(),n.TgZ(3,"ion-input",14),n.NdJ("ngModelChange",function(g){n.CHM(o);const t=n.oxw();return n.KtG(t.morningClosingTime=g)}),n.qZA()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("ngModel",o.morningClosingTime)}}function Z(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",7),n._uU(2,"Apertura turno tarde"),n.qZA(),n.TgZ(3,"ion-input",15),n.NdJ("ngModelChange",function(g){n.CHM(o);const t=n.oxw();return n.KtG(t.afternoonOpeningTime=g)}),n.qZA()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("ngModel",o.afternoonOpeningTime)}}function H(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label",7),n._uU(2,"Cierre turno tarde"),n.qZA(),n.TgZ(3,"ion-input",16),n.NdJ("ngModelChange",function(g){n.CHM(o);const t=n.oxw();return n.KtG(t.afternoonClosingTime=g)}),n.qZA()()}if(2&e){const o=n.oxw();n.xp6(3),n.Q6J("ngModel",o.afternoonClosingTime)}}const x=[{path:"",component:(()=>{class e{constructor(o,i,g,t){this.cargaRuteroService=o,this.route=i,this.toastController=g,this.router=t,this.codigo="",this.openingTime="",this.closingTime="",this.isContinuous=!1,this.morningOpeningTime="",this.morningClosingTime="",this.afternoonOpeningTime="",this.afternoonClosingTime="",this.telefono="",this.telefono2=""}ngOnInit(){this.route.paramMap.subscribe(o=>{const i=o.get("codigo");null!==i&&(this.codigo=i,console.log("C\xf3digo:",this.codigo))})}showErrorToast(o){var i=this;return(0,p.Z)(function*(){(yield i.toastController.create({message:o,duration:4e3,color:"danger",position:"top"})).present()})()}onSubmit(){if(this.isContinuous){if(!this.openingTime||!this.closingTime||""===this.telefono||void 0===this.telefono||""===this.telefono2||void 0===this.telefono2)return void this.showErrorToast("Por favor complete todos los campos");{const o={codigo:this.codigo,openingTime:this.openingTime,closingTime:this.closingTime,isContinuous:this.isContinuous,update:"si",Telefono:this.telefono,Telefono2:this.telefono2};this.updateItemInLocalStorage(this.codigo),this.cargaRuteroService.update(o).then(()=>{this.router.navigate(["rutero"])}).catch(i=>{this.showErrorToast(i)})}}else{if(!(this.morningOpeningTime&&this.morningClosingTime&&this.afternoonOpeningTime&&this.afternoonClosingTime&&""!==this.telefono&&void 0!==this.telefono&&""!==this.telefono2&&void 0!==this.telefono2))return void this.showErrorToast("Por favor complete todos los campos");{const o={codigo:this.codigo,isContinuous:this.isContinuous,morningOpeningTime:this.morningOpeningTime,morningClosingTime:this.morningClosingTime,afternoonOpeningTime:this.afternoonOpeningTime,afternoonClosingTime:this.afternoonClosingTime,update:"si",Telefono:this.telefono,Telefono2:this.telefono2};this.updateItemInLocalStorage(this.codigo),this.cargaRuteroService.update(o).then(()=>{this.router.navigate(["rutero-dia"])}).catch(i=>{this.showErrorToast(i)})}}}updateItemInLocalStorage(o){const i=localStorage.getItem("ruteroCache");if(console.log(this.codigo),i){const t=JSON.parse(i).map(m=>m.Codigo===o?{...m,update:"si"}:m);localStorage.setItem("ruteroCache",JSON.stringify(t)),console.log(t)}}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(h.q),n.Y36(l.gz),n.Y36(r.yF),n.Y36(l.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-hour"]],decls:32,vars:10,consts:[["color","primary"],["slot","start"],["defaultHref","rutero-dia"],[3,"ngSubmit"],["hourForm","ngForm"],["name","isContinuous",3,"ngModel","ngModelChange"],[4,"ngIf"],["position","floating"],["type","number","name","telefono",3,"ngModel","ngModelChange"],["type","number","name","telefono2",3,"ngModel","ngModelChange"],["type","submit","expand","full"],["type","time","name","openingTime",3,"ngModel","ngModelChange"],["type","time","name","closingTime",3,"ngModel","ngModelChange"],["type","time","name","morningOpeningTime",3,"ngModel","ngModelChange"],["type","time","name","morningClosingTime",3,"ngModel","ngModelChange"],["type","time","name","afternoonOpeningTime",3,"ngModel","ngModelChange"],["type","time","name","afternoonClosingTime",3,"ngModel","ngModelChange"]],template:function(o,i){1&o&&(n.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5," Ingreso de Horario del cliente "),n.qZA()()(),n.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-content")(9,"form",3,4),n.NdJ("ngSubmit",function(){return i.onSubmit()}),n.TgZ(11,"ion-item")(12,"ion-label"),n._uU(13,"\xbfJornada continua?"),n.qZA(),n.TgZ(14,"ion-checkbox",5),n.NdJ("ngModelChange",function(t){return i.isContinuous=t}),n.qZA()(),n.YNc(15,f,4,1,"ion-item",6),n.YNc(16,_,4,1,"ion-item",6),n.YNc(17,T,3,0,"ion-item",6),n.YNc(18,C,4,1,"ion-item",6),n.YNc(19,M,4,1,"ion-item",6),n.YNc(20,Z,4,1,"ion-item",6),n.YNc(21,H,4,1,"ion-item",6),n.TgZ(22,"ion-item")(23,"ion-label",7),n._uU(24,"Telefono"),n.qZA(),n.TgZ(25,"ion-input",8),n.NdJ("ngModelChange",function(t){return i.telefono=t}),n.qZA()(),n.TgZ(26,"ion-item")(27,"ion-label",7),n._uU(28,"Telefono2"),n.qZA(),n.TgZ(29,"ion-input",9),n.NdJ("ngModelChange",function(t){return i.telefono2=t}),n.qZA()(),n.TgZ(30,"ion-button",10),n._uU(31,"Guardar"),n.qZA()()()()()),2&o&&(n.xp6(14),n.Q6J("ngModel",i.isContinuous),n.xp6(1),n.Q6J("ngIf",i.isContinuous),n.xp6(1),n.Q6J("ngIf",i.isContinuous),n.xp6(1),n.Q6J("ngIf",i.isContinuous),n.xp6(1),n.Q6J("ngIf",!i.isContinuous),n.xp6(1),n.Q6J("ngIf",!i.isContinuous),n.xp6(1),n.Q6J("ngIf",!i.isContinuous),n.xp6(1),n.Q6J("ngIf",!i.isContinuous),n.xp6(4),n.Q6J("ngModel",i.telefono),n.xp6(4),n.Q6J("ngModel",i.telefono2))},dependencies:[d.O5,u._Y,u.JJ,u.JL,u.On,u.F,r.oU,r.YG,r.Sm,r.PM,r.FN,r.nz,r.W2,r.Gu,r.pK,r.Ie,r.Q$,r.wd,r.sr,r.w,r.as,r.j9,r.cs]}),e})()}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(x),l.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,u.u5,r.Pc,J]}),e})()}}]);