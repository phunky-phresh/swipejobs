(this.webpackJsonpswipejobs=this.webpackJsonpswipejobs||[]).push([[0],{29:function(e,t,a){e.exports=a(58)},34:function(e,t,a){},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(26),l=a.n(o),r=(a(34),a(8)),s=a(5),i=a(9),m=a(7),u=a.n(m);a(52);var b=function(e){var t=e.firstName+" "+e.lastName;return c.a.createElement("div",{className:"nav"},c.a.createElement("img",{alt:"logo",className:"logo",src:"https://www.swipejobs.com/images/logo-name.png"}),c.a.createElement("div",{className:"part2"},c.a.createElement(s.b,{to:"/"},c.a.createElement("h2",{className:"user"},t))))};var d=function(e){return c.a.createElement("div",{value:e.value,onClick:e.jobSet,className:"title"},c.a.createElement("h2",{value:e.value},e.title),c.a.createElement("h4",{value:e.value},e.body))};var E=function(e){var t=Object(n.useState)(e.user),a=Object(r.a)(t,2),o=a[0],l=(a[1],Object(n.useState)(null)),i=Object(r.a)(l,2),m=i[0],b=i[1],E=o?o.workerId:"";if(Object(n.useEffect)((function(){u.a.get("https://test.swipejobs.com/api/worker/".concat(E,"/matches")).then((function(e){b(e.data)}))}),[]),!m)return"";var p=m.map((function(t){return c.a.createElement(s.b,{key:t.jobId,value:t.jobId,to:"/job"},c.a.createElement(d,{title:t.jobTitle.name,body:t.company.name,value:t.jobId,jobSet:e.setJob,class:"link"}),c.a.createElement("hr",null))}));return c.a.createElement("div",{className:"job"},c.a.createElement(d,{title:"Matched Jobs"}),p)};var p=function(e){return e?c.a.createElement("div",{value:e.value,onClick:e.jobSet,className:"block"},c.a.createElement("i",{className:e.icon}),c.a.createElement("span",{value:e.value,className:"flex"},c.a.createElement("h4",{value:e.value},e.title),c.a.createElement("p",{value:e.value},e.body),c.a.createElement("p",null,e.body2),c.a.createElement("ul",null,e.list)),c.a.createElement("i",{className:e.icon2})):""},h=a(15),v=a.n(h);var j=function(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),o=a[0],l=a[1],i=e.workerId;if(Object(n.useEffect)((function(){u.a.get("https://test.swipejobs.com/api/worker/".concat(i,"/matches")).then((function(e){l(e.data)}))}),[]),o)var m=o.map((function(t){if(t.jobId===e.jobId){var a="N/A";t.requirements&&(a=t.requirements.map((function(e){return c.a.createElement("li",{key:e},e)})));var n=new Date(t.shifts[0].startDate),o=new Date(t.shifts[0].endDate),l=v()(n,"UTC:mmm d, ddd h:MM TT").toUpperCase(),r=v()(o,"UTC:h:MM TT").toUpperCase();return c.a.createElement("div",{key:t.jobId},c.a.createElement("div",{className:"hero"},c.a.createElement("img",{className:"hero ui fluid image",src:t.jobTitle.imageUrl})),c.a.createElement(d,{title:t.jobTitle.name,body:t.company.name}),c.a.createElement("div",{className:"  highlight"},c.a.createElement("div",{className:"part"},c.a.createElement("h4",null,"Distance"),c.a.createElement("p",null,Number.parseFloat(t.milesToTravel).toFixed(2)," miles")),c.a.createElement("div",{className:"part2"},c.a.createElement("h4",null,"Hourly Rate"),c.a.createElement("p",null,"$",Number.parseFloat(t.wagePerHourInCents/100).toFixed(2)))),c.a.createElement(p,{icon:"calendar alternate icon",title:"Shift Dates",body:l+" - "+r,body2:l+" - "+r}),c.a.createElement("hr",null),c.a.createElement(p,{icon:"map marker icon alternate",title:"Location",body:t.company.address.formattedAddress,body2:"".concat(Number.parseFloat(t.milesToTravel).toFixed(2)," miles from your job search location"),icon2:"chevron right icon"}),c.a.createElement("hr",null),c.a.createElement(p,{icon:"wrench icon",title:"Requirements",list:a}),c.a.createElement("hr",null),c.a.createElement(p,{icon:"user circle icon",title:"Report to",body:"".concat(t.company.reportTo.name," ").concat(t.company.reportTo.phone)}))}}));return c.a.createElement("div",{className:"job "},m,c.a.createElement("div",{className:" actions"},c.a.createElement(s.b,{to:"/joblist",onClick:function(){u.a.post("https://test.swipejobs.com/api/worker/".concat(i,"/job/").concat(e.jobId,"/reject")).then((function(e){console.log("reject")}))},className:"big ui grey basic button"},"No Thanks"),c.a.createElement(s.b,{to:"/joblist",onClick:function(){u.a.post("https://test.swipejobs.com/api/worker/".concat(i,"/job/").concat(e.jobId,"/accept")).then((function(e){console.log("accept")}))},className:"big ui secondary button"},"I'll Take It")))};var f=function(e){return c.a.createElement("div",{className:"job"},c.a.createElement(d,{title:e.firstName+" "+e.lastName}),c.a.createElement(p,{icon:"map marker icon alternate",title:"Address",body:e.address.formattedAddress,body2:e.address.zoneId}),c.a.createElement("hr",null),c.a.createElement(p,{icon:"phone icon",title:"Mobile Number",body:e.phoneNumber}),c.a.createElement("hr",null),c.a.createElement(p,{icon:"search icon",title:"Max Job Distance",body:"".concat(e.maxJobDistance," miles")}),c.a.createElement("div",{className:" actions"},c.a.createElement(s.b,{to:"/joblist",className:"link big ui secondary button"},"Find Jobs")))};var N=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(null),m=Object(r.a)(l,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){u.a.get("https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile").then((function(e){o(e.data)}))}),[]),a?c.a.createElement(s.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(b,a),c.a.createElement("div",{className:"body"},c.a.createElement(i.a,{path:"/joblist"},c.a.createElement(E,{setJob:function(e){p(e.target.getAttribute("value"))},user:a})),c.a.createElement(i.a,{path:"/job"},c.a.createElement(j,Object.assign({jobId:d},a))),c.a.createElement(i.a,{exact:!0,path:"/"},c.a.createElement(f,a))))):""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.bc443403.chunk.js.map