(this["webpackJsonppicking-assignments"]=this["webpackJsonppicking-assignments"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),r=n(9),s=n.n(r),a=(n(15),n(3)),o=n(4),l=n(6),d=n(5),u=(n(16),n(2)),h=(n(17),[{invoice:3556085,company:"H Mart",status:"Waiting",picker:"",duration:0,cases:510},{invoice:3502263,company:"Blue Sky",status:"Waiting",picker:"",duration:0,cases:310},{invoice:3541557,company:"Selbie",status:"Waiting",picker:"",duration:0,cases:1020},{invoice:3662548,company:"Ace wholesale",status:"Waiting",picker:"",duration:0,cases:130},{invoice:3601337,company:"Sanrimo",status:"Waiting",picker:"",duration:0,cases:1020}]),k=(n(18),n(7)),b=(n(19),n(20),function(e){var t=e.children,n=e.open,r=e.numberOfWorkers>3?{overflowY:"scroll",height:"180px",overflowX:"hidden"}:{overflowY:"auto",overflowX:"hidden"};return Object(i.jsx)(c.Fragment,{children:n&&Object(i.jsx)("div",{className:"workersList",style:r,children:t})})}),j=(n(21),function(e){e.employeeID;var t=e.name,n=e.status,c=e.assignWorker,r=e.workerSelected,s=e.resetSearchBar;return Object(i.jsx)("div",{onClick:s,children:Object(i.jsx)("div",{onClick:r,children:Object(i.jsxs)("div",{className:"searchResults",onClick:function(){return c(t)},children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("h6",{children:n})]})})})}),g=(n(22),function(e){var t=e.workers,n=e.assignWorker,r=e.workerSelected,s=e.resetSearchBar;return Object(i.jsx)(c.Fragment,{children:t.map((function(e){return Object(i.jsx)(j,{resetSearchBar:s,workerSelected:r,assignWorker:n,employeeID:e.id,name:e.name,status:e.status},e.id)}))})}),p=function(e){var t=e.searchWorker,n=e.filteredWorkers,r=e.assignWorker,s=(e.selectedWorker,Object(c.useState)(!0)),a=Object(k.a)(s,2),o=a[0],l=a[1],d=Object(c.useRef)(),u=function(e){d.current.contains(e.target)||l(!1)},h=function(){if(!o)return j(),void l(!o);j()};Object(c.useEffect)((function(){return document.addEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[]);var j=function(){document.getElementById("inputBox").value=""};function p(){return Object(i.jsx)("input",{id:"inputBox",className:" searchBar pa3  ba b--green bg-lightest-blue",type:"search",placeholder:"Selector's name",autoComplete:"off",onChange:t,onClick:h})}return n.length>0?Object(i.jsxs)("div",{ref:d,className:"father",children:[p(),Object(i.jsx)(b,{open:o,numberOfWorkers:n.length,className:"son",children:Object(i.jsx)(g,{workerSelected:function(){l(!o)},assignWorker:r,workers:n})})]}):Object(i.jsx)("div",{ref:d,className:"father",children:p()})},m=[{id:1,name:"Tsering Wangchuk",picking:[],picked:[],status:""},{id:2,name:"Danny Pazmino",picking:[],picked:[],status:""},{id:3,name:"Dustin Sardinha",picking:[],picked:[],status:""},{id:4,name:"Kevin Seguna",picking:[],picked:[],status:""},{id:5,name:"Sonam Gyalpo",picking:[],picked:[],status:""},{id:6,name:"Sonam Tsering",picking:[],picked:[],status:""},{id:7,name:"Dorjee Wangdu",picking:[],picked:[],status:""},{id:8,name:"Nelson Assuncao",picking:[],picked:[],status:""},{id:9,name:"Shawn Allan",picking:[],picked:[],status:""},{id:10,name:"Rick Pazmino",picking:[],picked:[],status:""},{id:11,name:"Raphael Angeles",picking:[],picked:[],status:""},{id:12,name:"Ngodup Lodoe",picking:[],picked:[],status:""},{id:13,name:"Ngodup Namgyal",picking:[],picked:[],status:""},{id:14,name:"Yigit Yillic",picking:[],picked:[],status:""},{id:15,name:"Tenzin Regol",picking:[],picked:[],status:""},{id:16,name:"Karma Dorjee",picking:[],picked:[],status:""},{id:17,name:"Gyaltsen Tharpa",picking:[],picked:[],status:""},{id:18,name:"Fabrice Witte",picking:[],picked:[],status:""},{id:19,name:"Lobsang Khedup",picking:[],picked:[],status:""},{id:20,name:"Lobsang Chomphel",picking:[],picked:[],status:""},{id:21,name:"Dhondup Choephel",picking:[],picked:[],status:""}],v=(n(23),function(e){e.clickedSearch,e.id;var t=e.assignWorker,n=e.selectedWorker,r=e.resetSearchBar,s=Object(c.useState)(""),a=Object(k.a)(s,2),o=a[0],l=a[1],d=Object(c.useState)(!1),u=Object(k.a)(d,2),h=u[0],b=u[1],j=[];return console.log(n),o.length>0&&(j=m.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}))),Object(i.jsx)(c.Fragment,{children:Object(i.jsx)("td",{colSpan:"5",children:Object(i.jsxs)("div",{className:"flexit",children:[Object(i.jsx)("button",{className:"box border pointer",onClick:function(){return console.log("This is for Details button. For future referrence.")},children:"Details"}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("button",{className:"showSearchBar pointer",onClick:function(){return b(!h)},children:h?"Hide SearchBar":"Show SearchBar"}),h&&Object(i.jsx)(p,{filteredWorkers:j,searchWorker:function(e){return l(e.target.value)},assignWorker:t,selectedWorker:n,resetSearchBar:r})]}),n.length>0?Object(i.jsx)("button",{className:"box border pointer picking",children:"Start Picking"}):Object(i.jsx)("button",{disabled:!0,className:"box border picking not-allowed",children:"Start Picking"})]})})})}),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={worker:[]},i.toggleInvoiceButtons=i.toggleInvoiceButtons.bind(Object(u.a)(i)),i.assignWorker=i.assignWorker.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"toggleInvoiceButtons",value:function(){this.setState({invoiceButtons:!this.state.invoiceButtons})}},{key:"loadDetails",value:function(e){console.log("Load details for invoice #",e)}},{key:"assignWorker",value:function(e){this.setState({worker:e})}},{key:"invoiceDetails",value:function(e,t,n,c,r,s){var a=s===t?{backgroundColor:"#faebc0"}:{backgroundColor:""};return Object(i.jsxs)("tr",{style:a,className:"invoiceBox",onClick:function(){return e(t)},children:[Object(i.jsx)("td",{className:"invoiceNumber border",children:t}),Object(i.jsx)("td",{className:"border",children:n}),Object(i.jsx)("td",{className:"border",children:r}),Object(i.jsx)("td",{className:"border",children:"Order Status"}),Object(i.jsx)("td",{className:"border",children:c})]})}},{key:"renderInvoice",value:function(){var e=this.props,t=e.selected,n=e.passSelectedInvoice,r=e.id,s=e.company,a=e.quantity,o=e.resetSearchBar,l=this.state.worker;return t===r?Object(i.jsxs)(c.Fragment,{children:[this.invoiceDetails(n,r,s,a,l,t),Object(i.jsx)("tr",{className:"invoiceBox highlight",children:Object(i.jsx)(v,{selectedWorker:l,assignWorker:this.assignWorker,clickedSearch:this.onClickedSearch,id:r,resetSearchBar:o})})]}):this.invoiceDetails(n,r,s,a,l,t)}},{key:"render",value:function(){return this.renderInvoice()}}]),n}(c.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={selected:null,searchField:""},i.selectedInvoice=i.selectedInvoice.bind(Object(u.a)(i)),i.onSearchWorker=i.onSearchWorker.bind(Object(u.a)(i)),i.resetSearchBar=i.resetSearchBar.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"selectedInvoice",value:function(e){this.setState({selected:e})}},{key:"onSearchWorker",value:function(e){this.setState({searchField:e.target.value})}},{key:"resetSearchBar",value:function(){this.setState({searchField:""})}},{key:"render",value:function(){var e=this;return Object(i.jsx)(c.Fragment,{children:Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{className:"invoiceNumber border",children:"Invoice #"}),Object(i.jsx)("th",{className:"comapny border",children:"Company"}),Object(i.jsx)("th",{className:"worker border",children:"Selector"}),Object(i.jsx)("th",{className:"status border",children:"Status"}),Object(i.jsx)("th",{className:"quantity border",children:"Quantity"})]})}),Object(i.jsx)("tbody",{children:h.map((function(t){return Object(i.jsx)(f,{id:t.invoice,company:t.company,quantity:t.cases,selected:e.state.selected,passSelectedInvoice:e.selectedInvoice},t.invoice)}))})]})})}}]),n}(c.Component),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={page:"Picking"},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"testFunction",value:function(e){console.log("Can run function call back with Test class.",e)}},{key:"render",value:function(){var e=this.state.page;return"Picking"===e?Object(i.jsx)("div",{className:"invoiceContainer",children:Object(i.jsx)(O,{})}):"Workers"===e?"Workers Page.":"Settings"===e?"Settings Page.":"InvoiceDetails"===e?"Invoice Details Page.":"Page value is not Picking, Workers, Settings"}}]),n}(c.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),r(e),s(e)}))};n(24);s.a.render(Object(i.jsx)(x,{}),document.getElementById("root")),S()}],[[25,1,2]]]);
//# sourceMappingURL=main.d84643e7.chunk.js.map