"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3902],{3902:(v,g,a)=>{a.r(g),a.d(g,{RuteroOrdenDiaPageModule:()=>T});var m=a(4755),p=a(5030),o=a(942),c=a(7957),d=a(5861),e=a(2223),f=a(1409);function O(r,s){1&r&&(e.TgZ(0,"label")(1,"h5",3),e._uU(2,"Sin Resultados"),e.qZA()())}function y(r,s){1&r&&e._UZ(0,"img",12)}function D(r,s){if(1&r&&(e.TgZ(0,"ion-item",13),e._UZ(1,"ion-reorder",4),e.TgZ(2,"ion-card",13)(3,"ion-card-content")(4,"strong")(5,"h5",14),e._uU(6),e.qZA()()()()()),2&r){const t=s.$implicit;e.xp6(6),e.HOy("",t.Cliente," - ",t.RZ," - ",t.Direccion," - ",t.Barrio,"")}}const I=[{path:"",component:(()=>{class r{constructor(t,i,n,l){this.ruteroService=t,this.route=i,this.loadingController=n,this.router=l,this.sinresult=!1,this.lastCallTimestamp=0,this.cacheDuration=864e5}ngOnInit(){const t=this.route.snapshot.paramMap.get("dia"),i=localStorage.getItem("number"),n=localStorage.getItem("ruteroCacheOrden");console.log(n);const l=localStorage.getItem("ruteroCacheOrdenTimestamp");if(n&&l){const u=parseInt(l);if((new Date).getTime()-u<this.cacheDuration)return this.items=JSON.parse(n),this.filterItemsByDay(t),this.filterItemsByUpdate(),void(this.sinresult=0===this.items.length)}this.presentLoading(),this.ruteroSubscription=this.ruteroService.getRutero(i).subscribe(u=>{console.log(u),this.items=u,this.filterItemsByDay(t),this.filterItemsByUpdate(),this.sinresult=0===this.items.length,localStorage.setItem("ruteroCacheOrden",JSON.stringify(u)),localStorage.setItem("ruteroCacheOrdenTimestamp",(new Date).getTime().toString()),this.dismissLoading()})}presentLoading(){var t=this;return(0,d.Z)(function*(){yield(yield t.loadingController.create({message:"Cargando...",translucent:!0,spinner:"crescent"})).present()})()}dismissLoading(){var t=this;return(0,d.Z)(function*(){yield t.loadingController.dismiss()})()}filterItemsByDay(t){this.items=this.items.filter(i=>i.Dias===t).sort((i,n)=>parseInt(i.OrdenDia)-parseInt(n.OrdenDia))}filterItemsByUpdate(){this.items=this.items.filter(t=>!t.update)}reorderItems(t){const i=this.items[t.detail.from];this.items.splice(t.detail.from,1),this.items.splice(t.detail.to,0,i),console.log(this.items),t.detail.complete()}saveChanges(){var t=this;return(0,d.Z)(function*(){yield t.presentLoading();const i=[];try{let n=3;yield t.items.forEach(function(){var l=(0,d.Z)(function*(u,h){const Z={...u,OrdenDia:n,update:"si"};n+=3,i.push(Z)});return function(u,h){return l.apply(this,arguments)}}()),localStorage.setItem("ruteroCacheOrden",JSON.stringify(i)),t.ruteroService.update(i),console.log("Datos actualizados en Firebase")}catch(n){console.error("Error al actualizar datos en Firebase",n)}finally{t.router.navigate(["/rutero"]),yield t.dismissLoading()}})()}ngOnDestroy(){this.ruteroSubscription&&this.ruteroSubscription.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.a),e.Y36(c.gz),e.Y36(o.HT),e.Y36(c.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["SO-rutero-orden-dia"]],decls:16,vars:5,consts:[["color","primary"],["slot","start"],["defaultHref","rutero"],["text-center",""],["slot","end"],[3,"click"],[3,"scrollY"],[1,"ion-content-scroll-host"],[4,"ngIf"],["src","./assets/shapes.svg",4,"ngIf"],[3,"disabled","ionItemReorder"],["style","width: 100%",4,"ngFor","ngForOf"],["src","./assets/shapes.svg"],[2,"width","100%"],[2,"font-size","smaller"]],template:function(t,i){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title",3),e._uU(5," Orden Rutero "),e.qZA(),e.TgZ(6,"ion-buttons",4)(7,"ion-button",5),e.NdJ("click",function(){return i.saveChanges()}),e._uU(8,"Guardar Cambios"),e.qZA()()()(),e.TgZ(9,"ion-content",6)(10,"div",7),e.YNc(11,O,3,0,"label",8),e.YNc(12,y,1,0,"img",9),e.TgZ(13,"ion-list")(14,"ion-reorder-group",10),e.NdJ("ionItemReorder",function(l){return i.reorderItems(l)}),e.YNc(15,D,7,4,"ion-item",11),e.qZA()()()()),2&t&&(e.xp6(9),e.Q6J("scrollY",!1),e.xp6(2),e.Q6J("ngIf",i.sinresult),e.xp6(1),e.Q6J("ngIf",i.sinresult),e.xp6(2),e.Q6J("disabled",!1),e.xp6(1),e.Q6J("ngForOf",i.items))},dependencies:[m.sg,m.O5,o.oU,o.YG,o.Sm,o.PM,o.FN,o.W2,o.Gu,o.Ie,o.q_,o.Nh,o.oz,o.wd,o.sr,o.cs],styles:[".ion-content-scroll-host[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:100%;overflow-y:auto}"]}),r})()}];let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[c.Bz.forChild(I),c.Bz]}),r})(),T=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[m.ez,p.u5,o.Pc,R]}),r})()}}]);