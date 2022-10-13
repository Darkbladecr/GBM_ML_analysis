(this.webpackJsonpgbm_ml_analysis=this.webpackJsonpgbm_ml_analysis||[]).push([[0],{151:function(e,t,a){e.exports=a(294)},156:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),i=a.n(r),o=(a(156),a(89)),c=a(306),m=a(307),s=a(303),u=a(142),g=a(308),d=a(295),E=a(30),h=a(43),p=a(309),v=a(304),y=a(141),_=a(134),b=a.n(_),f={h1:{},flex:{flex:1,flexDirection:"row"},h2:{margin:"4em 0em 2em"},h3:{marginTop:"2em",padding:"2em 0em"},last:{marginBottom:"300px"},filled:{width:"100%"}},C=function(e){var t=e.message,a=e.positive;return l.a.createElement(c.a,{size:"huge",positive:a,negative:!a},l.a.createElement(c.a.Header,null,t))},x=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),c=Object(o.a)(i,2),_=c[0],x=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement(u.a,{src:"/cam_neuro.png",size:"small",floated:"left",href:"https://www.neurosurg.cam.ac.uk/research-groups/brain-tumour-imaging-lab/",target:"_blank"}),l.a.createElement(g.a,{as:"h1",content:"GBM Patient Survival Predictor",style:f.h1}),l.a.createElement(d.a,{as:"div",labelPosition:"right"},l.a.createElement(d.a,{icon:!0,href:"https://github.com/AliLawrence/ML_GBMSurvival"},l.a.createElement(E.a,{name:"github"})),l.a.createElement(h.a,{as:"a",basic:!0,href:"https://github.com/AliLawrence/ML_GBMSurvival"},"Source Code")))),l.a.createElement(y.a,{initialValues:{diagnosis_age:"",sex:"male",treatment:"gross_total_resection",idh_status:"0",mgmt_status:"0",chemo:"0",tumor_side:"left",tumor_location:"corpus_callosum",radiotherapy:"0",sx_main:"deficit"},validate:function(e){var t={};return e.diagnosis_age?/^[0-9]+$/i.test(e.diagnosis_age)||(t.diagnosis_age="Age not a number"):t.diagnosis_age="Required",t},onSubmit:function(e,t){var a=t.setSubmitting,n={Sex:"female"===e.sex?1:0,Age:parseInt(e.diagnosis_age),Biopsy:"biopsy"===e.treatment?1:0,IcRET:"subtotal_resection"===e.treatment?1:0,CRET:"gross_total_resection"===e.treatment?1:0,Tside:"left"===e.tumor_side?0:1,IDHStatus:"1"===e.idh_status?1:0,MGMT:"1"===e.mgmt_status?1:0,SxDeficit:"deficit"===e.sx_main?1:0,SxHeadache:"headache"===e.sx_main?1:0,SxSeizure:"seizure"===e.sx_main?1:0,ZeroGy:"0"===e.radiotherapy?1:0,ThirtyGy:"30"===e.radiotherapy?1:0,FortyGy:"40"===e.radiotherapy?1:0,SixtyGy:"60"===e.radiotherapy?1:0,TMZ:"1"===e.chemo?1:0};b.a.post("/predict",n).then((function(e){var t=e.data;r(t)})).catch((function(e){return alert(JSON.stringify(e))})).finally((function(){a(!1),x(!0)}))}},(function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange,i=e.handleBlur,o=e.handleSubmit,c=e.isSubmitting;return l.a.createElement("form",{onSubmit:o},l.a.createElement(p.a,{container:!0,columns:2,stackable:!0},l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"sex",value:"male",active:"male"===t.sex},"Male"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"sex",value:"female",active:"female"===t.sex},"Female")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(v.a,{style:f.filled,name:"diagnosis_age",value:t.diagnosis_age,onChange:r,onBlur:i,error:a.diagnosis_age&&n.diagnosis_age,label:{basic:!0,content:"years old"},labelPosition:"right",placeholder:"Enter age at diagnosis..."}),l.a.createElement("br",null),a.diagnosis_age&&n.diagnosis_age&&a.diagnosis_age)),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"Main symptom on presentation",textAlign:"center"}),l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"sx_main",value:"deficit",active:"deficit"===t.sx_main},"Neurological deficit"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"sx_main",value:"headache",active:"headache"===t.sx_main},"Headache"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"sx_main",value:"seizure",active:"seizure"===t.sx_main},"Seizure")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"Tumor hemisphere",textAlign:"center"}),l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"tumor_side",value:"left",active:"left"===t.tumor_side},"Left"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"tumor_side",value:"right",active:"right"===t.tumor_side},"Right"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"tumor_side",value:"both",active:"both"===t.tumor_side},"Both")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"Surgical management",textAlign:"center"}),l.a.createElement(d.a.Group,{vertical:!0,style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"treatment",value:"gross_total_resection",active:"gross_total_resection"===t.treatment},"Gross Total Resection"),l.a.createElement(d.a,{type:"button",onClick:r,name:"treatment",value:"subtotal_resection",active:"subtotal_resection"===t.treatment},"Subtotal Resection"),l.a.createElement(d.a,{type:"button",onClick:r,name:"treatment",value:"biopsy",active:"biopsy"===t.treatment},"Biopsy")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"MGMT status",textAlign:"center"}),l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"mgmt_status",value:"0",active:"0"===t.mgmt_status},"Negative"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"mgmt_status",value:"1",active:"1"===t.mgmt_status},"Positive")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"Radiotherapy treatment",textAlign:"center"}),l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"radiotherapy",value:"0",active:"0"===t.radiotherapy},"None given"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"radiotherapy",value:"30",active:"30"===t.radiotherapy},"30gy"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"radiotherapy",value:"40",active:"40"===t.radiotherapy},"40gy"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"radiotherapy",value:"60",active:"60"===t.radiotherapy},"60gy")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"IDH status",textAlign:"center"}),l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"idh_status",value:"0",active:"0"===t.idh_status},"Negative"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"idh_status",value:"1",active:"1"===t.idh_status},"Positive")))),l.a.createElement(p.a.Column,null,l.a.createElement(m.a,null,l.a.createElement(g.a,{as:"h3",content:"TMZ Chemotherapy",textAlign:"center"}),l.a.createElement(d.a.Group,{style:f.filled},l.a.createElement(d.a,{type:"button",onClick:r,name:"chemo",value:"0",active:"0"===t.chemo},"Not given"),l.a.createElement(d.a.Or,null),l.a.createElement(d.a,{type:"button",onClick:r,name:"chemo",value:"1",active:"1"===t.chemo},"Given"))))),l.a.createElement(m.a,null,l.a.createElement(d.a,{fluid:!0,primary:!0,disabled:Object.keys(a).length>0||""===t.diagnosis_age,loading:c,type:"submit"},"Submit")),l.a.createElement("br",null))})),_&&l.a.createElement(C,{message:a.message,positive:a.positive}),l.a.createElement("br",null),l.a.createElement("br",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[151,1,2]]]);
//# sourceMappingURL=main.ad9ee4db.chunk.js.map