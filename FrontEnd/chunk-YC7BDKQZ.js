import{b as g}from"./chunk-MCMQ357H.js";import"./chunk-FUOI65R5.js";import{b as x,c as b}from"./chunk-TV5SLHJW.js";import"./chunk-FBBBUL3D.js";import"./chunk-73F67TFK.js";import"./chunk-XTYNXB3F.js";import{Fb as i,Hb as o,Ka as d,Pb as f,Xb as l,Zb as r,ga as c,ka as u,mb as e,nb as t,xc as v}from"./chunk-ODJKW74N.js";import"./chunk-NEB6MB4Y.js";var P=g.now(),h=(()=>{let s=class s{constructor(){this.indicadoresService=c(b),this.chartOptions={chart:{type:"donut",height:350,width:1e3},labels:[],series:[],title:{text:"Distribuci\xF3n de Solicitudes y Cr\xE9ditos",align:"left",style:{fontSize:"18px",fontWeight:"bold"}},colors:["#28a745","#dc3545","#ffc107","#007bff","#6c757d","#17a2b8"],legend:{position:"right",horizontalAlign:"right",fontSize:"14px",markers:{width:12,height:12},itemMargin:{horizontal:5,vertical:5}},dataLabels:{style:{fontSize:"12px"}}}}ngOnInit(){this.getIndicadoresMontos()}getIndicadores(){this.indicadoresService.getIndicadores().subscribe(n=>{n.data&&(this.chartOptions.labels=["Solicitudes Aprobadas","Solicitudes Rechazadas","Solicitudes Pendientes","Cr\xE9ditos Aprobados","Cr\xE9ditos Rechazados","Cr\xE9ditos Pendientes"],this.chartOptions.series=[n.data.canSolicitudesAprobadas,n.data.canSolicitudesRechazadas,n.data.canSolicitudesPendientes,n.data.canCreditosAprobados,n.data.canCreditosRechazados,n.data.canCreditosPendientes])})}getIndicadoresMontos(){this.indicadoresService.getCardsMontos().subscribe(n=>{n.data&&(this.dataCards=n.data)})}};s.\u0275fac=function(m){return new(m||s)},s.\u0275cmp=u({type:s,selectors:[["app-dashboard-main"]],standalone:!0,features:[f],decls:72,vars:24,consts:[[1,"relative","min-w-0","flex","h-full","w-full","flex-col","dark:bg-transparent","sm:overflow-hidden","sm:inset-0"],[1,"relative","flex","flex-0","flex-col","px-6","py-6","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"flex","w-full","sm:items-center","lg:flex-row","gap-2.5","lg:gap-2","flex-col","p-5"],[1,"bg-white","w-full","sm:w-3/4","md:w-2/4","lg:w-1/2","flex","flex-col","overflow-hidden","rounded-2xl","shadow-lg","sm:col-span-2","lg:col-span-1","border","border-gray-200"],[1,"px-6","py-4","flex","items-start","justify-between","bg-gradient-to-r","from-blue-500","to-blue-900","rounded-t-2xl"],[1,"truncate","text-lg","font-semibold","leading-6","tracking-tight","text-white","mx-auto"],[1,"px-6","py-5","flex","sm:items-end","lg:gap-3","lg:flex-row","lg:items-center","mx-auto"],[1,"mt-3","lg:mt-0","lg:ml-4","flex","items-center","justify-center","w-8","h-8","bg-blue-100","rounded-full"],[1,"text-blue-600","text-5xl","font-bold"],[1,"text-4xl","font-semibold","text-gray-800","leading-tight","tracking-tight"],[1,"flex","w-full","lg:flex-row","sm:items-center","justify-center","gap-2.5","lg:gap-2","flex-col","p-5"]],template:function(m,a){m&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),i(3,"Dashboard de Resumen Ejecutivo"),t()(),e(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),i(8," Cartera por cobrar "),t()(),e(9,"div",7)(10,"div",8)(11,"span",9),i(12,"$"),t()(),e(13,"div",10),i(14),l(15,"number"),t()()(),e(16,"div",4)(17,"div",5)(18,"div",6),i(19," Cobros adicionales "),t()(),e(20,"div",7)(21,"div",8)(22,"span",9),i(23,"$"),t()(),e(24,"div",10),i(25),l(26,"number"),t()()(),e(27,"div",4)(28,"div",5)(29,"div",6),i(30," Intereses generados "),t()(),e(31,"div",7)(32,"div",8)(33,"span",9),i(34,"$"),t()(),e(35,"div",10),i(36),l(37,"number"),t()()()(),e(38,"div",11)(39,"div",4)(40,"div",5)(41,"div",6),i(42," Cr\xE9ditos aprobados "),t()(),e(43,"div",7)(44,"div",8)(45,"span",9),i(46,"$"),t()(),e(47,"div",10),i(48),l(49,"number"),t()()(),e(50,"div",4)(51,"div",5)(52,"div",6),i(53," Cr\xE9dito real consumido "),t()(),e(54,"div",7)(55,"div",8)(56,"span",9),i(57,"$"),t()(),e(58,"div",10),i(59),l(60,"number"),t()()(),e(61,"div",4)(62,"div",5)(63,"div",6),i(64," Cr\xE9ditos sin utilizar "),t()(),e(65,"div",7)(66,"div",8)(67,"span",9),i(68,"$"),t()(),e(69,"div",10),i(70),l(71,"number"),t()()()()()),m&2&&(d(14),o(" ",r(15,6,a.dataCards==null?null:a.dataCards.montoPagoTrabajadorLiquidados,"1.0-0")," "),d(11),o(" ",r(26,9,a.dataCards==null?null:a.dataCards.montoCobrosFijosPendientesPorPagar,"1.0-0")," "),d(11),o(" ",r(37,12,a.dataCards==null?null:a.dataCards.montoInteresesGanadosDeLiquidaciones,"1.0-0")," "),d(12),o(" ",r(49,15,a.dataCards==null?null:a.dataCards.montoCreditoAprobado,"1.0-0")," "),d(11),o(" ",r(60,18,a.dataCards==null?null:a.dataCards.montoDesembolsosRealizados,"1.0-0")," "),d(11),o(" ",r(71,21,(a.dataCards==null?null:a.dataCards.montoDesembolsosRealizados)-(a.dataCards==null?null:a.dataCards.montoDesembolsosAprobados),"1.0-0")," "))},dependencies:[v,x]});let p=s;return p})();var R=[{path:"",component:h}];export{R as default};
