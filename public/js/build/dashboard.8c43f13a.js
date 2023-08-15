import{m as l,a as c,n as d}from"./app.62942df0.js";import{T as _}from"./TaskMenu.8df6d0b9.js";var u=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"page-dashboard"},[t("PageTitle",{attrs:{title:s.$L("\u4EEA\u8868\u76D8")}}),s.warningMsg?t("Alert",{staticClass:"dashboard-warning",attrs:{type:"warning","show-icon":""}},[t("span",{on:{click:function(o){return s.goForward({name:"manage-setting-license"})}}},[s._v(s._s(s.warningMsg))])]):s._e(),t("div",{staticClass:"dashboard-wrapper",style:s.wrapperStyle},[t("div",{staticClass:"dashboard-hello"},[s._v(s._s(s.$L("\u6B22\u8FCE\u60A8\uFF0C"+s.userInfo.nickname)))]),t("div",{staticClass:"dashboard-desc"},[s._v(" "+s._s(s.$L("\u4EE5\u4E0B\u662F\u4F60\u5F53\u524D\u7684\u4EFB\u52A1\u7EDF\u8BA1\u6570\u636E"))+" "),t("transition",{attrs:{name:"dashboard-load"}},[s.loadDashboardTasks?t("div",{staticClass:"dashboard-load"},[t("Loading")],1):s._e()])],1),t("ul",{staticClass:"dashboard-block"},[t("li",{on:{click:function(o){return s.scrollTo("today")}}},[t("div",{staticClass:"block-title"},[s._v(s._s(s.getTitle("today")))]),t("div",{staticClass:"block-data"},[t("div",{staticClass:"block-num"},[s._v(s._s(s.dashboardTask.today_count))]),t("i",{staticClass:"taskfont"},[s._v("\uE6F4")])])]),t("li",{on:{click:function(o){return s.scrollTo("overdue")}}},[t("div",{staticClass:"block-title"},[s._v(s._s(s.getTitle("overdue")))]),t("div",{staticClass:"block-data"},[t("div",{staticClass:"block-num"},[s._v(s._s(s.dashboardTask.overdue_count))]),t("i",{staticClass:"taskfont"},[s._v("\uE603")])])]),t("li",{on:{click:function(o){return s.scrollTo("all")}}},[t("div",{staticClass:"block-title"},[s._v(s._s(s.getTitle("all")))]),t("div",{staticClass:"block-data"},[t("div",{staticClass:"block-num"},[s._v(s._s(s.dashboardTask.all_count))]),t("i",{staticClass:"taskfont"},[s._v("\uE6F9")])])])]),t("Scrollbar",{staticClass:"dashboard-list"},[s._l(s.columns,function(o){return o.list.length>0?[t("div",{ref:`type_${o.type}`,refInFor:!0,staticClass:"dashboard-ref"}),t("div",{staticClass:"dashboard-title"},[s._v(s._s(o.title))]),t("ul",{staticClass:"dashboard-ul"},s._l(o.list,function(a,r){return t("li",{key:r,class:{complete:a.complete_at},style:a.color?{backgroundColor:a.color}:{},on:{click:function(n){return s.openTask(a)}}},[a.p_name?t("em",{staticClass:"priority-color",style:{backgroundColor:a.p_color}}):s._e(),t("div",{staticClass:"item-select",on:{click:function(n){return n.stopPropagation(),s.openMenu(n,a)}}},[t("i",{staticClass:"taskfont",domProps:{innerHTML:s._s(a.complete_at?"&#xe627;":"&#xe625;")}})]),t("div",{staticClass:"item-title"},[a.flow_item_name?t("span",{class:a.flow_item_status,on:{click:function(n){return n.stopPropagation(),s.openMenu(n,a)}}},[s._v(s._s(a.flow_item_name))]):s._e(),a.sub_top===!0?t("span",[s._v(s._s(s.$L("\u5B50\u4EFB\u52A1")))]):s._e(),a.sub_my&&a.sub_my.length>0?t("span",[s._v("+"+s._s(a.sub_my.length))]):s._e(),s._v(" "+s._s(a.name)+" ")]),a.desc?t("div",{staticClass:"item-icon"},[t("i",{staticClass:"taskfont"},[s._v("\uE71A")])]):s._e(),a.sub_num>0?t("div",{staticClass:"item-icon"},[t("i",{staticClass:"taskfont"},[s._v("\uE71F")]),t("em",[s._v(s._s(a.sub_complete)+"/"+s._s(a.sub_num))])]):s._e(),a.end_at?t("ETooltip",{attrs:{disabled:s.$isEEUiApp||s.windowTouch,content:a.end_at,placement:"right"}},[t("div",{class:["item-icon",a.today?"today":"",a.overdue?"overdue":""]},[t("i",{staticClass:"taskfont"},[s._v("\uE71D")]),t("em",[s._v(s._s(s.expiresFormat(a.end_at)))])])]):s._e()],1)}),0)]:s._e()})],2)],1)],1)},h=[];const v={components:{TaskMenu:_},data(){return{nowTime:$A.Time(),nowInter:null,licenseTimer:null,loadIng:0,dashboard:"today",warningMsg:""}},activated(){this.$store.dispatch("getTaskForDashboard",600),this.loadInterval(!0),this.loadLicense(!0)},deactivated(){this.$store.dispatch("forgetTaskCompleteTemp",!0),this.loadInterval(!1),this.loadLicense(!1)},computed:{...l(["userInfo","userIsAdmin","cacheTasks","taskCompleteTemps","loadDashboardTasks"]),...c(["dashboardTask","assistTask","transforTasks"]),columns(){const s=[];return["today","overdue","all"].some(e=>{let t=this.transforTasks(this.dashboardTask[e]);s.push({type:e,title:this.getTitle(e),list:t.sort((o,a)=>$A.Date(o.end_at||"2099-12-31 23:59:59")-$A.Date(a.end_at||"2099-12-31 23:59:59"))})}),s.push({type:"assist",title:this.getTitle("assist"),list:this.assistTask.sort((e,t)=>$A.Date(e.end_at||"2099-12-31 23:59:59")-$A.Date(t.end_at||"2099-12-31 23:59:59"))}),s},total(){const{dashboardTask:s}=this;return s.today_count+s.overdue_count+s.all_count},wrapperStyle({warningMsg:s}){return s?{"max-height":"calc(100% - 50px)"}:null}},watch:{windowActive(s){this.loadInterval(s),this.loadLicense(s)}},methods:{getTitle(s){switch(s){case"today":return this.$L("\u4ECA\u65E5\u5230\u671F");case"overdue":return this.$L("\u8D85\u671F\u4EFB\u52A1");case"all":return this.$L("\u5F85\u5B8C\u6210\u4EFB\u52A1");case"assist":return this.$L("\u534F\u52A9\u7684\u4EFB\u52A1");default:return""}},scrollTo(s){let e=this.$refs[`type_${s}`];e&&$A.scrollToView(e[0],{behavior:"smooth",inline:"end"})},openTask(s){this.$store.dispatch("openTask",s)},openMenu(s,e){this.$store.state.taskOperation={event:s,task:e}},expiresFormat(s){return $A.countDownFormat(s,this.nowTime)},loadInterval(s){this.nowInter&&(clearInterval(this.nowInter),this.nowInter=null),s!==!1&&(this.nowInter=setInterval(e=>{this.nowTime=$A.Time()},1e3))},loadLicense(s){this.licenseTimer&&(clearTimeout(this.licenseTimer),this.licenseTimer=null),!(s===!1||!this.userIsAdmin)&&(this.licenseTimer=setTimeout(e=>{this.$store.dispatch("call",{url:"system/license",data:{type:"get"}}).then(({data:t})=>{this.warningMsg=t.error.length>0?t.error[0]:""}).catch(t=>{this.warningMsg=""})},1500))}}},i={};var p=d(v,u,h,!1,k,null,null,null);function k(s){for(let e in i)this[e]=i[e]}var m=function(){return p.exports}();export{m as default};
