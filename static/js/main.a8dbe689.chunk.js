(this["webpackJsonppicking-assignments"]=this["webpackJsonppicking-assignments"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),a=n.n(c),s=n(9),o=n.n(s),r=(n(15),n(3)),u=n(4),l=n(6),d=n(5),p=(n(16),n(2)),k=(n(17),[{invoice:3556085,company:"H Mart",status:"Waiting",picker:"",duration:0,cases:510},{invoice:3502263,company:"Blue Sky",status:"Waiting",picker:"",duration:0,cases:310},{invoice:3541557,company:"Selbie",status:"Waiting",picker:"",duration:0,cases:1020},{invoice:3662548,company:"Ace wholesale",status:"Waiting",picker:"",duration:0,cases:130},{invoice:3601337,company:"Sanrimo",status:"Waiting",picker:"",duration:0,cases:1020}]),h=(n(18),n(19),function(e){e.employeeID;var t=e.name,n=e.status;return Object(i.jsxs)("div",{className:"searchResults",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("h6",{children:n})]})}),g=(n(20),function(e){var t=e.workers;return Object(i.jsx)(c.Fragment,{children:t.map((function(e){return Object(i.jsx)(h,{employeeID:e.id,name:e.name,status:e.status},e.id)}))})}),v=(n(21),n(22),function(e){return Object(i.jsx)("div",{className:"abs",style:{overflowY:"scroll",border:"3px solid black",height:"70px"},children:e.children})}),j=function(e){var t=e.searchWorker,n=e.filteredWorkers;return n.length>0?Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("input",{className:"pa3 ma3 ba b--green bg-lightest-blue",type:"search",placeholder:"search workers",onChange:t}),Object(i.jsx)(v,{children:Object(i.jsx)(g,{workers:n})})]}):Object(i.jsx)("input",{className:"pa3 ma3 ba b--green bg-lightest-blue",type:"search",placeholder:"search workers",onChange:t})},m=n(8),b=[{id:1,name:"Tsering Wangchuk",picking:[],picked:[],status:""},{id:2,name:"Danny Pazmino",picking:[],picked:[],status:""},{id:3,name:"Dustin Sardinha",picking:[],picked:[],status:""},{id:4,name:"Kevin Seguna",picking:[],picked:[],status:""},{id:5,name:"Sonam Gyalpo",picking:[],picked:[],status:""},{id:6,name:"Sonam Tsering",picking:[],picked:[],status:""},{id:7,name:"Dorjee Wangdu",picking:[],picked:[],status:""},{id:8,name:"Nelson Assuncao",picking:[],picked:[],status:""},{id:9,name:"Shawn Allan",picking:[],picked:[],status:""},{id:10,name:"Rick Pazmino",picking:[],picked:[],status:""},{id:11,name:"Raphael Angeles",picking:[],picked:[],status:""},{id:12,name:"Ngodup Lodoe",picking:[],picked:[],status:""},{id:13,name:"Ngodup Namgyal",picking:[],picked:[],status:""},{id:14,name:"Yigit Yillic",picking:[],picked:[],status:""},{id:15,name:"Tenzin Regol",picking:[],picked:[],status:""},{id:16,name:"Karma Dorjee",picking:[],picked:[],status:""},{id:17,name:"Gyaltsen Tharpa",picking:[],picked:[],status:""},{id:18,name:"Fabrice Witte",picking:[],picked:[],status:""},{id:19,name:"Lobsang Khedup",picking:[],picked:[],status:""},{id:20,name:"Lobsang Chomphel",picking:[],picked:[],status:""},{id:21,name:"Dhondup Choephel",picking:[],picked:[],status:""}],f=(n(23),function(e){e.clickedSearch;var t=e.selectedSearch,n=e.id,c=a.a.useState(""),s=Object(m.a)(c,2),o=s[0],r=s[1],u=a.a.useState(!1),l=Object(m.a)(u,2),d=(l[0],l[1],[]);return o.length>0&&(d=b.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}))),t===n?Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"box",onClick:console.log(n),children:"Details"}),Object(i.jsx)(j,{className:"box",filteredWorkers:d,searchWorker:function(e){return r(e.target.value)}})]}):null}),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={selectedSearch:i.props.id},i.toggleInvoiceButtons=i.toggleInvoiceButtons.bind(Object(p.a)(i)),i}return Object(u.a)(n,[{key:"toggleInvoiceButtons",value:function(){this.setState({invoiceButtons:!this.state.invoiceButtons})}},{key:"loadDetails",value:function(e){console.log("Load details for invoice #",e)}},{key:"onClickedSearch",value:function(e){this.setState({selectedSearch:e})}},{key:"renderInvoice",value:function(){var e=this.props,t=e.selected,n=e.passSelectedInvoice,a=e.id,s=e.company,o=e.quantity;e.filteredWorkers,e.searchField,e.searchWorker,e.value;return t===a?Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)("div",{className:"invoiceBox",children:Object(i.jsxs)("h1",{onClick:function(){return n(a)},children:["Invoice: ",a,". Company: ",s,". Cases: ",o]})}),Object(i.jsx)("div",{className:"invoiceBox1",children:Object(i.jsx)(f,{clickedSearch:this.onClickedSearch,id:a,selectedSearch:this.state.selectedSearch})})]}):Object(i.jsx)("div",{className:"invoiceBox",children:Object(i.jsxs)("h1",{onClick:function(){return n(a)},children:["Invoice: ",a,". Company: ",s,". Cases: ",o]})})}},{key:"render",value:function(){return this.renderInvoice()}}]),n}(c.Component),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={selected:null,searchField:"",worker:[]},i.selectedInvoice=i.selectedInvoice.bind(Object(p.a)(i)),i.onSearchWorker=i.onSearchWorker.bind(Object(p.a)(i)),i}return Object(u.a)(n,[{key:"selectedInvoice",value:function(e){this.setState({selected:e})}},{key:"onSearchWorker",value:function(e){this.setState({searchField:e.target.value}),console.log(this.state.searchField)}},{key:"renderInvoiceList",value:function(){var e=this;return Object(i.jsx)("div",{className:"",children:k.map((function(t){return Object(i.jsx)(O,{id:t.invoice,company:t.company,quantity:t.cases,selected:e.state.selected,passSelectedInvoice:e.selectedInvoice},t.invoice)}))})}},{key:"render",value:function(){return this.renderInvoiceList()}}]),n}(c.Component),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={page:"Picking"},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"testFunction",value:function(e){console.log("Can run function call back with Test class.",e)}},{key:"render",value:function(){var e=this.state.page;return"Picking"===e?Object(i.jsx)("div",{className:"invoiceContainer",children:Object(i.jsx)(y,{})}):"Workers"===e?"Workers Page.":"Settings"===e?"Settings Page.":"InvoiceDetails"===e?"Invoice Details Page.":"Page value is not Picking, Workers, Settings"}}]),n}(c.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};n(24);o.a.render(Object(i.jsx)(x,{}),document.getElementById("root")),S()}],[[25,1,2]]]);
//# sourceMappingURL=main.a8dbe689.chunk.js.map