"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[483],{75091:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(1519),s=r.n(a)()((function(t){return t[1]}));s.push([t.id,".electron-report[data-v-7231af33]{display:flex;flex-direction:column;height:100%;overflow:auto}",""]);const i=s},73701:(t,e,r)=>{r.d(e,{Z:()=>i});var a=r(80641);const s={name:"UserInput",props:{value:{type:[String,Number,Array],default:""},uncancelable:{type:Array,default:function(){return[]}},disabledChoice:{type:Array,default:function(){return[]}},placeholder:{default:""},size:{default:"default"},transfer:{type:Boolean,default:!0},multipleMax:{type:Number},maxHiddenInput:{type:Boolean,default:!0},projectId:{type:Number,default:0},noProjectId:{type:Number,default:0}},data:function(){return{loadIng:0,selects:[],list:[],searchKey:null,searchHistory:[],subscribe:null}},mounted:function(){var t=this;this.subscribe=a.Store.subscribe("cacheUserActive",(function(e){var r=t.list.findIndex((function(t){return t.userid==e.userid}));r>-1&&(t.$set(t.list,r,Object.assign({},t.list[r],e)),t.handleSelectData())}))},beforeDestroy:function(){this.subscribe&&(this.subscribe.unsubscribe(),this.subscribe=null)},computed:{maxHiddenClass:function(){var t=this.multipleMax,e=this.maxHiddenInput,r=this.selects;return t&&e&&r.length>=t?"hidden-input":""}},watch:{value:{handler:function(){this.valueChange()},immediate:!0},selects:function(t){this.$emit("input",t)}},methods:{searchUser:function(t){var e=this;"string"!=typeof t&&(t=""),this.searchKey=t;var r=this.searchHistory.find((function(e){return e.key==t}));r&&(this.list=r.data),r||this.loadIng++,setTimeout((function(){e.searchKey==t?e.$store.dispatch("call",{url:"users/search",data:{keys:{key:t,project_id:e.projectId,no_project_id:e.noProjectId},take:30}}).then((function(a){var s=a.data;r||e.loadIng--,e.list=s;var i=e.searchHistory.findIndex((function(e){return e.key==t})),n={key:t,data:s,time:$A.Time()};i>-1?e.searchHistory.splice(i,1,n):e.searchHistory.push(n)})).catch((function(t){var a=t.msg;r||e.loadIng--,e.list=[],$A.messageWarning(a)})):r||e.loadIng--}),this.searchHistory.length>0?300:0)},isDisabled:function(t){return 0!==this.disabledChoice.length&&this.disabledChoice.includes(t)},openChange:function(t){t&&this.$nextTick(this.searchUser)},remoteMethod:function(){},valueChange:function(){var t=this;this.selects!=this.value&&($A.isArray(this.value)?this.selects=$A.cloneJSON(this.value):this.value?this.selects=[this.value]:this.selects=[],this.selects.some((function(e){t.list.find((function(t){return t.userid==e}))||(t.list.push({userid:e,nickname:e}),t.$store.dispatch("getUserBasic",{userid:e}))})))},handleSelectData:function(){var t=this;this.__handleSelectTimeout&&clearTimeout(this.__handleSelectTimeout),this.__handleSelectTimeout=setTimeout((function(){if(t.$refs.select){var e=t.$refs.select.getValue();e&&e.some((function(e){var r=t.list.find((function(t){return t.userid==e.value}));r&&(t.$set(e,"label",r.nickname),t.$set(e,"avatar",r.userimg))}))}}),100)}}};const i=(0,r(51900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["common-user",t.maxHiddenClass]},[r("Select",{ref:"select",attrs:{transfer:t.transfer,placeholder:t.placeholder,size:t.size,loading:t.loadIng>0,"loading-text":t.$L("加载中..."),"default-label":t.value,"default-event-object":!0,"multiple-max":t.multipleMax,"multiple-uncancelable":t.uncancelable,"remote-method":t.remoteMethod,multiple:"",filterable:"","transfer-class-name":"common-user-transfer"},on:{"on-query-change":t.searchUser,"on-open-change":t.openChange},model:{value:t.selects,callback:function(e){t.selects=e},expression:"selects"}},[t.multipleMax?r("div",{staticClass:"user-drop-prepend",attrs:{slot:"drop-prepend"},slot:"drop-prepend"},[t._v(t._s(t.$L("最多只能选择"+t.multipleMax+"个")))]):t._e(),t._v(" "),t._t("option-prepend"),t._v(" "),t._l(t.list,(function(e,a){return r("Option",{key:a,attrs:{value:e.userid,"key-value":e.email,label:e.nickname,avatar:e.userimg,disabled:t.isDisabled(e.userid)}},[r("div",{staticClass:"user-input-option"},[r("div",{staticClass:"user-input-avatar"},[r("EAvatar",{staticClass:"avatar",attrs:{src:e.userimg}})],1),t._v(" "),r("div",{staticClass:"user-input-nickname"},[t._v(t._s(e.nickname))]),t._v(" "),r("div",{staticClass:"user-input-userid"},[t._v("ID: "+t._s(e.userid))])])])}))],2),t._v(" "),t.loadIng>0?r("div",{staticClass:"common-user-loading"},[r("Loading")],1):t._e()],1)}),[],!1,null,null,null).exports},22371:(t,e,r)=>{r.d(e,{Z:()=>l});var a=r(73701),s=r(20629);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const o={name:"ReportEdit",components:{TEditor:function(){return r.e(500).then(r.bind(r,89500))},UserInput:a.Z},props:{id:{default:0}},data:function(){return{reportData:{title:"",content:"",type:"weekly",receive:[],id:0,offset:0},prevCycleText:"",nextCycleText:""}},watch:{id:function(t){this.id>0?this.getDetail(t):(this.reportData.offset=0,this.reportData.type="weekly",this.reportData.receive=[],this.getTemplate())}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,s.rn)(["userId"])),mounted:function(){this.getTemplate()},methods:{initLanguage:function(){this.prevCycleText=this.$L("上一周"),this.nextCycleText=this.$L("下一周")},handleSubmit:function(){var t=this;if(0===this.reportData.receive.length)return $A.messageError(this.$L("请选择接收人")),!1;0===this.id&&this.reportData.id>0?$A.modalConfirm({title:"覆盖提交",content:"你已提交过此日期的报告，是否覆盖提交？",loading:!0,onOk:function(){t.doSubmit(!0)}}):this.doSubmit()},doSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$store.dispatch("call",{url:"report/store",data:this.reportData,method:"post"}).then((function(r){var a=r.data,s=r.msg;e&&t.$Modal.remove(),t.reportData.offset=0,t.reportData.type="weekly",t.reportData.receive=[],t.getTemplate(),$A.messageSuccess(s),t.$emit("saveSuccess",a)})).catch((function(r){var a=r.msg;e&&t.$Modal.remove(),$A.messageError(a)}))},getTemplate:function(){var t=this;this.$store.dispatch("call",{url:"report/template",data:{type:this.reportData.type,offset:this.reportData.offset,id:this.id}}).then((function(e){var r=e.data;r.id?(t.reportData.id=r.id,t.id>0?t.getDetail(r.id):(t.reportData.title=r.title,t.reportData.content=r.content)):(t.reportData.id=0,t.reportData.title=r.title,t.reportData.content=r.content)})).catch((function(t){var e=t.msg;$A.messageError(e)}))},typeChange:function(t){this.reportData.offset=0,"weekly"===t?(this.prevCycleText=this.$L("上一周"),this.nextCycleText=this.$L("下一周")):(this.prevCycleText=this.$L("上一天"),this.nextCycleText=this.$L("下一天")),this.getTemplate()},getDetail:function(t){var e=this;this.$store.dispatch("call",{url:"report/detail",data:{id:t}}).then((function(r){var a=r.data;e.reportData.title=a.title,e.reportData.content=a.content,e.reportData.receive=a.receives_user.map((function(t){return t.userid})),e.reportData.type=a.type_val,e.reportData.id=t})).catch((function(t){var e=t.msg;$A.messageError(e)}))},prevCycle:function(){this.reportData.offset-=1,this.reReportData(),this.getTemplate()},nextCycle:function(){this.reportData.offset<0&&(this.reportData.offset+=1),this.reReportData(),this.getTemplate()},getLastSubmitter:function(){var t=this;this.$store.dispatch("call",{url:"report/last_submitter"}).then((function(e){var r=e.data;t.reportData.receive=r})).catch((function(t){var e=t.msg;$A.messageError(e)}))},reReportData:function(){this.reportData.title="",this.reportData.content="",this.reportData.receive=[],this.reportData.id=0}}};const l=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Form",{staticClass:"report-edit",attrs:{"label-width":"auto"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("FormItem",{attrs:{label:t.$L("汇报类型")}},[r("RadioGroup",{staticClass:"report-radiogroup",attrs:{type:"button","button-style":"solid",readonly:t.id>0},on:{"on-change":t.typeChange},model:{value:t.reportData.type,callback:function(e){t.$set(t.reportData,"type",e)},expression:"reportData.type"}},[r("Radio",{attrs:{label:"weekly",disabled:t.id>0&&"daily"==t.reportData.type}},[t._v(t._s(t.$L("周报")))]),t._v(" "),r("Radio",{attrs:{label:"daily",disabled:t.id>0&&"weekly"==t.reportData.type}},[t._v(t._s(t.$L("日报")))])],1),t._v(" "),0===t.id?r("ButtonGroup",{staticClass:"report-buttongroup"},[r("ETooltip",{attrs:{content:t.prevCycleText,placement:"bottom"}},[r("Button",{attrs:{type:"primary"},on:{click:t.prevCycle}},[r("Icon",{attrs:{type:"ios-arrow-back"}})],1)],1),t._v(" "),r("div",{staticClass:"report-buttongroup-vertical"}),t._v(" "),r("ETooltip",{attrs:{disabled:t.reportData.offset>=0,content:t.nextCycleText,placement:"bottom"}},[r("Button",{attrs:{type:"primary",disabled:t.reportData.offset>=0},on:{click:t.nextCycle}},[r("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1):t._e()],1),t._v(" "),r("FormItem",{attrs:{label:t.$L("汇报名称")}},[r("Input",{attrs:{disabled:""},model:{value:t.reportData.title,callback:function(e){t.$set(t.reportData,"title",e)},expression:"reportData.title"}})],1),t._v(" "),r("FormItem",{attrs:{label:t.$L("汇报对象")}},[r("div",{staticClass:"report-users"},[r("UserInput",{attrs:{disabledChoice:[t.userId],placeholder:t.$L("选择接收人"),transfer:!1},model:{value:t.reportData.receive,callback:function(e){t.$set(t.reportData,"receive",e)},expression:"reportData.receive"}}),t._v(" "),r("a",{staticClass:"report-user-link",attrs:{href:"javascript:void(0);"},on:{click:t.getLastSubmitter}},[r("Icon",{attrs:{type:"ios-share-outline"}}),t._v(t._s(t.$L("使用我上次的汇报对象"))+"\n            ")],1)],1)]),t._v(" "),r("FormItem",{staticClass:"report-content-editor",attrs:{label:t.$L("汇报内容")}},[r("TEditor",{attrs:{height:"100%"},model:{value:t.reportData.content,callback:function(e){t.$set(t.reportData,"content",e)},expression:"reportData.content"}})],1),t._v(" "),r("FormItem",{staticClass:"report-foot"},[r("Button",{staticClass:"report-bottom",attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(t.$L(t.id>0?"修改":"提交")))])],1)],1)}),[],!1,null,null,null).exports},94483:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});const a={components:{ReportEdit:r(22371).Z},data:function(){return{detail:{}}},computed:{id:function(){return $A.runNum(this.detail.id||this.$route.params.id)},title:function(){return this.$L(this.id>0?"修改报告":"新增报告")}},methods:{saveSuccess:function(t){this.detail=t,this.$isSubElectron&&$A.Electron.sendMessage("sendForwardMain",{channel:"reportSaveSuccess",data:t})}}};var s=r(93379),i=r.n(s),n=r(75091),o={insert:"head",singleton:!1};i()(n.Z,o);n.Z.locals;const l=(0,r(51900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"electron-report"},[r("PageTitle",{attrs:{title:t.title}}),t._v(" "),r("ReportEdit",{attrs:{id:t.id},on:{saveSuccess:t.saveSuccess}})],1)}),[],!1,null,"7231af33",null).exports}}]);