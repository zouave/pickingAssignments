(this["webpackJsonppicking-assignments"]=this["webpackJsonppicking-assignments"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n(9),a=n.n(s),r=(n(15),n(3)),o=n(4),d=n(6),l=n(5),u=(n(16),n(2)),h=(n(17),[{invoice:3556085,company:"H Mart",status:"Waiting",picker:"",duration:0,cases:510},{invoice:3502263,company:"Blue Sky",status:"Waiting",picker:"",duration:0,cases:310},{invoice:3541557,company:"Selbie",status:"Waiting",picker:"",duration:0,cases:1020},{invoice:3662548,company:"Ace wholesale",status:"Waiting",picker:"",duration:0,cases:130},{invoice:3601337,company:"Sanrimo",status:"Waiting",picker:"",duration:0,cases:1020}]),j=(n(18),n(7)),b=(n(19),n(20),function(e){var t=Object(i.useState)(!0),n=Object(j.a)(t,2),s=n[0],a=n[1],r=Object(i.useRef)(),o=function(e){r.current.contains(e.target)||(a(!1),console.log("Clicked outside the node"))};return Object(i.useEffect)((function(){return document.addEventListener("mousedown",o),function(){document.removeEventListener("mousedown",o)}}),[]),Object(c.jsx)("div",{ref:r,children:s&&Object(c.jsx)("div",{className:"abs",style:{overflowY:"scroll",border:"1px solid black"},children:e.children})})}),m=(n(21),function(e){e.employeeID;var t=e.name,n=e.status;return Object(c.jsxs)("div",{className:"searchResults",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsx)("h6",{children:n})]})}),k=(n(22),function(e){var t=e.workers;return Object(c.jsx)(i.Fragment,{children:t.map((function(e){return Object(c.jsx)(m,{employeeID:e.id,name:e.name,status:e.status},e.id)}))})}),p=function(e){var t=e.searchWorker,n=e.filteredWorkers;return n.length>0?Object(c.jsxs)(i.Fragment,{children:[Object(c.jsx)("input",{className:"searchBar pa3  ba b--green bg-lightest-blue",type:"search",placeholder:"search workers",onChange:t}),Object(c.jsx)(b,{children:Object(c.jsx)(k,{workers:n})})]}):Object(c.jsx)("input",{className:"searchBar pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search workers",onChange:t})},g=function(e){var t=e.filteredWorkers,n=e.searchWorker;return Object(c.jsx)(p,{filteredWorkers:t,searchWorker:n})},v=[{id:1,name:"Tsering Wangchuk",picking:[],picked:[],status:""},{id:2,name:"Danny Pazmino",picking:[],picked:[],status:""},{id:3,name:"Dustin Sardinha",picking:[],picked:[],status:""},{id:4,name:"Kevin Seguna",picking:[],picked:[],status:""},{id:5,name:"Sonam Gyalpo",picking:[],picked:[],status:""},{id:6,name:"Sonam Tsering",picking:[],picked:[],status:""},{id:7,name:"Dorjee Wangdu",picking:[],picked:[],status:""},{id:8,name:"Nelson Assuncao",picking:[],picked:[],status:""},{id:9,name:"Shawn Allan",picking:[],picked:[],status:""},{id:10,name:"Rick Pazmino",picking:[],picked:[],status:""},{id:11,name:"Raphael Angeles",picking:[],picked:[],status:""},{id:12,name:"Ngodup Lodoe",picking:[],picked:[],status:""},{id:13,name:"Ngodup Namgyal",picking:[],picked:[],status:""},{id:14,name:"Yigit Yillic",picking:[],picked:[],status:""},{id:15,name:"Tenzin Regol",picking:[],picked:[],status:""},{id:16,name:"Karma Dorjee",picking:[],picked:[],status:""},{id:17,name:"Gyaltsen Tharpa",picking:[],picked:[],status:""},{id:18,name:"Fabrice Witte",picking:[],picked:[],status:""},{id:19,name:"Lobsang Khedup",picking:[],picked:[],status:""},{id:20,name:"Lobsang Chomphel",picking:[],picked:[],status:""},{id:21,name:"Dhondup Choephel",picking:[],picked:[],status:""}],O=(n(23),function(e){e.clickedSearch;var t=e.selectedSearch,n=e.id,s=Object(i.useState)(""),a=Object(j.a)(s,2),r=a[0],o=a[1],d=[];return r.length>0&&(d=v.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))),t===n?Object(c.jsxs)(i.Fragment,{children:[Object(c.jsx)("td",{className:"flexit border",children:Object(c.jsx)("button",{className:"box border",onClick:console.log(n),children:"Details"})}),Object(c.jsx)("td",{className:"father",children:Object(c.jsx)(g,{className:"son",filteredWorkers:d,searchWorker:function(e){return o(e.target.value)}})}),Object(c.jsx)("td",{className:"border",children:"a"}),Object(c.jsx)("td",{className:"border",children:"v"}),Object(c.jsx)("td",{className:"border",children:"c"})]}):null}),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={selectedSearch:c.props.id},c.toggleInvoiceButtons=c.toggleInvoiceButtons.bind(Object(u.a)(c)),c}return Object(o.a)(n,[{key:"toggleInvoiceButtons",value:function(){this.setState({invoiceButtons:!this.state.invoiceButtons})}},{key:"loadDetails",value:function(e){console.log("Load details for invoice #",e)}},{key:"onClickedSearch",value:function(e){this.setState({selectedSearch:e})}},{key:"renderInvoice",value:function(){var e=this.props,t=e.selected,n=e.passSelectedInvoice,s=e.id,a=e.company,r=e.quantity;return t===s?Object(c.jsxs)(i.Fragment,{children:[Object(c.jsxs)("tr",{className:"invoiceBox",onClick:function(){return n(s)},children:[Object(c.jsx)("td",{className:"invoiceNumber border",children:s}),Object(c.jsx)("td",{className:"border",children:a}),Object(c.jsx)("td",{className:"border",children:"Selector Name"}),Object(c.jsx)("td",{className:"border",children:"Order Status"}),Object(c.jsx)("td",{className:"border",children:r})]}),Object(c.jsx)("tr",{className:"invoiceBox",children:Object(c.jsx)(O,{clickedSearch:this.onClickedSearch,id:s,selectedSearch:this.state.selectedSearch})})]}):Object(c.jsxs)("tr",{className:"invoiceBox",onClick:function(){return n(s)},children:[Object(c.jsx)("td",{className:"invoiceNumber border",children:s}),Object(c.jsx)("td",{className:"border",children:a}),Object(c.jsx)("td",{className:"border",children:"Selector Name"}),Object(c.jsx)("td",{className:"border",children:"Order Status"}),Object(c.jsx)("td",{className:"border",children:r})]})}},{key:"render",value:function(){return this.renderInvoice()}}]),n}(i.Component),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={selected:null,searchField:""},c.selectedInvoice=c.selectedInvoice.bind(Object(u.a)(c)),c.onSearchWorker=c.onSearchWorker.bind(Object(u.a)(c)),c}return Object(o.a)(n,[{key:"selectedInvoice",value:function(e){this.setState({selected:e})}},{key:"onSearchWorker",value:function(e){this.setState({searchField:e.target.value}),console.log(this.state.searchField)}},{key:"renderInvoiceList",value:function(){var e=this;return Object(c.jsx)("div",{className:"",children:Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"invoiceNumber border",children:"Invoice #"}),Object(c.jsx)("th",{className:"comapny border",children:"Company"}),Object(c.jsx)("th",{className:"worker border",children:"Worker"}),Object(c.jsx)("th",{className:"status border",children:"Status"}),Object(c.jsx)("th",{className:"quantity border",children:"Quantity"})]}),h.map((function(t){return Object(c.jsx)(f,{id:t.invoice,company:t.company,quantity:t.cases,selected:e.state.selected,passSelectedInvoice:e.selectedInvoice},t.invoice)}))]})})}},{key:"render",value:function(){return this.renderInvoiceList()}}]),n}(i.Component),N=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={page:"Picking"},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"testFunction",value:function(e){console.log("Can run function call back with Test class.",e)}},{key:"render",value:function(){var e=this.state.page;return"Picking"===e?Object(c.jsx)("div",{className:"invoiceContainer",children:Object(c.jsx)(x,{})}):"Workers"===e?"Workers Page.":"Settings"===e?"Settings Page.":"InvoiceDetails"===e?"Invoice Details Page.":"Page value is not Picking, Workers, Settings"}}]),n}(i.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(24);a.a.render(Object(c.jsx)(N,{}),document.getElementById("root")),y()}],[[25,1,2]]]);
//# sourceMappingURL=main.cecedf46.chunk.js.map