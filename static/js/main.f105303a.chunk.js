(this["webpackJsonpsapient-assignment"]=this["webpackJsonpsapient-assignment"]||[]).push([[0],{32:function(e,a,t){e.exports=t(61)},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),l=t.n(c),s=t(10),i=t(11),u=t(13),o=t(12),m=t(8),d=t(1),p=t(15),f=t.n(p),h=t(29),E=function(e){return r.a.createElement(m.b,{to:e.queryParam},r.a.createElement("div",{className:"filter-item",onClick:function(e){var a=document.querySelectorAll(".active");a[0]&&a[0].classList.remove("active"),e.target.className="".concat(e.target.className," active")}},e.value))},v=function(e){var a=[];if("yearsList"===e.type)for(var t=2006;t<2021;t++)a.push(r.a.createElement(E,{key:t,value:t,queryParam:"?launch_year=".concat(t)}));else"boolValues"===e.type&&(a.push(r.a.createElement(E,{key:"".concat(e.gridHeader,"_true"),value:"True",queryParam:"?success_".concat(e.identifier,"=true")})),a.push(r.a.createElement(E,{key:"".concat(e.gridHeader,"_false"),value:"False",queryParam:"?success_".concat(e.identifier,"=false")})));return r.a.createElement("div",{className:"filter-section"},r.a.createElement("p",null,e.gridHeader),r.a.createElement("div",{className:"filter-grid"},a))},y=function(e){return r.a.createElement("div",{className:"filter-outer"},r.a.createElement("h2",null,"Filters"),r.a.createElement(v,{gridHeader:"Launch Year",type:"yearsList",queryParam:e.searchParam}),r.a.createElement(v,{gridHeader:"Successfull Launch",type:"boolValues",identifier:"launch",queryParam:e.searchParam}),r.a.createElement(v,{gridHeader:"Successfull Landing",type:"boolValues",identifier:"land",queryParam:e.searchParam}))},g=t(31),b=t.n(g),k=function(e){return r.a.createElement("div",{className:"rocket-item"},r.a.createElement("img",{src:e.info.links.mission_patch_small,alt:e.info.mission_name}),r.a.createElement("div",{className:"details"},r.a.createElement("p",{className:"heading"},e.info.mission_name," #",e.info.flight_number),r.a.createElement("p",null,r.a.createElement("span",{className:"label"},"Mission Ids:")),r.a.createElement("ul",null,r.a.createElement("li",null,0===e.info.mission_id.length?"NA":e.info.mission_id[0])),r.a.createElement("p",null,r.a.createElement("span",{className:"label"},"Launch Year:")," ",e.info.launch_year),r.a.createElement("p",null,r.a.createElement("span",{className:"label"},"Successfull Launch:")," ",e.info.launch_success?"true":"false"),r.a.createElement("p",null,r.a.createElement("span",{className:"label"},"Successfull Landing:")," ",e.info.rocket.first_stage.cores[0].land_success?"true":"false")))},N=function(e){var a=[];return a=0===e.data.length?r.a.createElement("div",{style:{display:"grid",gridColumn:"1/8",textAlign:"center",background:"#fff",alignItems:"center"}},"No Records Found"):e.data.map((function(e){return r.a.createElement(k,{key:e.flight_number,info:e})})),r.a.createElement("div",{className:"rocket-grid"},a)},_=(t(60),function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={records:[],loaded:!1},e.makeApiCall=function(){var a=Object(h.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.get("https://api.spaceXdata.com/v3/launches?limit=100&".concat(t),{params:{}});case 2:n=a.sent,e.setState({records:n.data,loaded:!0});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.makeApiCall(this.props.history.location.search.replace("?",""))}},{key:"checkForUrlChange",value:function(){var e=this;this.props.history.listen((function(a){e.makeApiCall("&".concat(a.search.replace("?","")))}))}},{key:"render",value:function(){return this.checkForUrlChange(),this.state.loaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"SpaceX Launch Programs"),r.a.createElement("div",{className:"container"},r.a.createElement(y,{searchParam:this.props.history.location.search}),r.a.createElement("div",{className:"gap"}),r.a.createElement(N,{data:this.state.records})),r.a.createElement("footer",null,r.a.createElement("p",null,"Developed by:"),r.a.createElement("p",null,"Akash Goenka"))):null}}]),t}(r.a.Component)),P=Object(d.f)(_),j=function(e){Object(u.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:P}),r.a.createElement(d.a,{path:"/:queryParams",component:P})))}}]),t}(r.a.Component);l.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f105303a.chunk.js.map