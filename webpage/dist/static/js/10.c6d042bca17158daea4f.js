webpackJsonp([10],{164:function(e,t,n){t=e.exports=n(78)(!0),t.push([e.i,".tabletop{margin-top:1%}.model_input{width:100%}.model_input,.model_p{margin-top:2%;font-size:14px}.div,.div_center{margin-top:2%;margin-left:10%}.div_center{width:50%}.div_display{display:none}.ivu-table .demo-table-info-row td{background-color:#2db7f5;color:#000}.ivu-table .demo-table-error-row td{background-color:#f90;color:#000}.ivu-table .demo-table-row td{background-color:#bbbec4;color:#000}.ivu-table .demo-table-info-cell-name,.ivu-table td.demo-table-info-column{background-color:#2db7f5;color:#fff}.ivu-table .demo-table-info-cell-age{background-color:#f60;color:#fff}.ivu-table .demo-table-info-cell-address{background-color:#187;color:#fff}.model_title{font-size:13px;color:#1c2438}.model_context{font-size:15px;color:#80848f}","",{version:3,sources:["/Users/yeshaobin/Yearning/webpage/src/assets/tablesmargintop.css"],names:[],mappings:"AAAA,UACE,aAAc,CACf,AAED,aACE,UAAY,CAGb,AAED,sBAJE,cAAe,AACf,cAAe,CAMhB,AAMD,iBAHE,cAAe,AACf,eAAiB,CAMlB,AAJD,YACE,SAAW,CAGZ,AAED,aACE,YAAc,CACf,AAED,mCACE,yBAA0B,AAC1B,UAAY,CACb,AACD,oCACE,sBAA0B,AAC1B,UAAY,CACb,AAED,8BACE,yBAA0B,AAC1B,UAAY,CACb,AAKD,2EACE,yBAA0B,AAC1B,UAAY,CACb,AACD,qCACE,sBAA0B,AAC1B,UAAY,CACb,AACD,yCACE,sBAAuB,AACvB,UAAY,CACb,AAED,aACE,eAAgB,AAChB,aAAe,CAChB,AAED,eACE,eAAgB,AAChB,aAAe,CAChB",file:"tablesmargintop.css",sourcesContent:[".tabletop{\n  margin-top: 1%\n}\n\n.model_input{\n  width: 100%;\n  margin-top: 2%;\n  font-size: 14px\n}\n\n.model_p{\n  font-size: 14px;\n  margin-top: 2%;\n}\n\n.div{\n  margin-top: 2%;\n  margin-left: 10%;\n}\n.div_center{\n  width: 50%;\n  margin-left: 10%;\n  margin-top: 2%;\n}\n\n.div_display{\n  display: none;\n}\n\n.ivu-table .demo-table-info-row td{\n  background-color: #2db7f5;\n  color: #000;\n}\n.ivu-table .demo-table-error-row td{\n  background-color: #ff9900;\n  color: #000;\n}\n\n.ivu-table .demo-table-row td{\n  background-color: #bbbec4;\n  color: #000;\n}\n.ivu-table td.demo-table-info-column{\n  background-color: #2db7f5;\n  color: #fff;\n}\n.ivu-table .demo-table-info-cell-name {\n  background-color: #2db7f5;\n  color: #fff;\n}\n.ivu-table .demo-table-info-cell-age {\n  background-color: #ff6600;\n  color: #fff;\n}\n.ivu-table .demo-table-info-cell-address {\n  background-color: #187;\n  color: #fff;\n}\n\n.model_title {\n  font-size: 13px;\n  color: #1c2438;\n}\n\n.model_context {\n  font-size: 15px;\n  color: #80848f;\n}\n"],sourceRoot:""}])},172:function(e,t,n){var o=n(164);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(79)("1ef3297e",o,!0,{})},313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a=n.n(o),r=n(172),i=(n.n(r),n(2));t.default={data:function(){var e=this,t=function(t,n,o){n!==e.editPasswordForm.newPass?o(new Error("两次输入密码不一致")):o()},n=function(t,n,o){n!==e.userinfo.password?o(new Error("两次输入密码不一致")):o()};return{percent:0,permission:{ddl:"0",ddlcon:[],dml:"0",dmlcon:[],query:"0",dic:"0",diccon:[],dicedit:"0",dicexport:"0",index:"0",indexcon:[],user:"0",base:"0"},con:[],columns6:[{title:"用户名",key:"username",sortable:!0},{title:"角色",key:"group",sortable:!0},{title:"权限组",key:"auth_group",sortable:!0},{title:"部门",key:"department",sortable:!0},{title:"email",key:"email",sortable:!0},{title:"操作",key:"action",width:300,align:"center",render:function(t,n){return 1!==n.row.id?t("div",[t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.edituser(n.index)}}},"更改密码"),t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.editauth(n.index)}}},"权限组"),t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.editEmail(n.index)}}},"email更改"),t("Button",{props:{type:"warning",size:"small"},on:{click:function(){e.deleteUser(n.index)}}},"删除")]):t("div",[t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.editauth(n.index)}}},"权限组"),t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.editEmail(n.index)}}},"email更改")])}}],data5:[],pagenumber:1,userinfo:{username:"",password:"",confirmpassword:"",group:"",checkbox:"",department:"",email:"",authgroup:""},groupset:[],userinfoValidate:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,message:"请至少输入6个字符",trigger:"blur"},{max:32,message:"最多输入32个字符",trigger:"blur"}],confirmpassword:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:n,trigger:"blur"}],group:[{required:!0,message:"请输入权限",trigger:"blur"}],department:[{required:!0,message:"请输入部门名称",trigger:"blur"}],authgroup:[{required:!0,message:"请选择权限组",trigger:"blur"}]},editPasswordModal:!1,editPasswordForm:{newPass:"",rePass:""},savePassLoading:!1,passwordValidate:{newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,message:"请至少输入6个字符",trigger:"blur"},{max:32,message:"最多输入32个字符",trigger:"blur"}],rePass:[{required:!0,message:"请再次输入新密码",trigger:"blur"},{validator:t,trigger:"blur"}]},editAuthForm:{username:"",group:"",department:"",authgroup:[]},formItem:{ddl:"",ddlcon:"",dml:"",dmlcon:"",dic:"",diccon:"",query:"",querycon:"",user:"",base:"",person:""},editAuthModal:!1,editemail:!1,email:"",username:"",confirmuser:"",deluserModal:!1,userid:null,dicadd:[],checkAll:{ddl:!1,dml:!1,query:!1,dic:!1,person:!1},indeterminate:{ddl:!0,dml:!0,query:!0,dic:!0,person:!0},connectionList:{connection:[],dic:[],person:[],multi:Boolean},permission_list:{}}},methods:{getgrouplist:function(){var e=this;a.a.put(i.a.url+"/authgroup/group_list",{group_list:JSON.stringify(this.editAuthForm.authgroup)}).then(function(t){e.permission_list=t.data.permissions,e.formItem=i.a.mode(t.data.permissions)}).catch(function(e){i.a.err_notice(e)})},cancelAuthModal:function(){this.editAuthModal=!1,this.editAuthForm.authgroup=[]},getauthgroup:function(){var e=this;a.a.get(i.a.url+"/authgroup/group_name").then(function(t){e.groupset=t.data.authgroup}).catch(function(e){i.a.err_notice(e)})},edituser:function(e){this.editPasswordModal=!0,this.username=this.data5[e].username},editauth:function(e){this.editAuthModal=!0,this.userid=this.data5[e].id,this.editAuthForm.username=this.data5[e].username,this.editAuthForm.department=this.data5[e].department,this.editAuthForm.group=this.data5[e].group,null!==this.data5[e].auth_group?this.editAuthForm.authgroup=this.data5[e].auth_group.split(","):this.editAuthForm.authgroup=[]},deleteUser:function(e){this.deluserModal=!0,this.username=this.data5[e].username},editEmail:function(e){this.editemail=!0,this.username=this.data5[e].username,this.email=this.data5[e].email},putemail:function(){var e=this;a.a.put(i.a.url+"/userinfo/changemail",{username:this.username,mail:this.email}).then(function(t){i.a.notice(t.data),e.editemail=!1,e.$refs.total.currentPage=1,e.refreshuser()}).catch(function(e){i.a.err_notice(e)})},Registered:function(){var e=this;this.$refs.userinfova.validate(function(t){t&&a.a.post(i.a.url+"/userinfo/",{username:e.userinfo.username,password:e.userinfo.password,group:e.userinfo.group,department:e.userinfo.department,email:e.userinfo.email,auth_group:e.userinfo.authgroup}).then(function(t){i.a.notice(t.data),e.refreshuser(),e.userinfo={username:"",password:"",confirmpassword:"",group:"",checkbox:"",department:"",email:"",auth_group:""}}).catch(function(e){i.a.err_notice(e)})})},refreshuser:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;a.a.get(i.a.url+"/userinfo/all?page="+t).then(function(t){e.data5=t.data.data,e.pagenumber=parseInt(t.data.page)}).catch(function(e){i.a.err_notice(e)})},splicpage:function(e){this.refreshuser(e)},cancelEditPass:function(){this.editPasswordForm={},this.editPasswordModal=!1},cancelDelInfo:function(){this.deluserModal=!1,this.confirmuser=""},saveEditPass:function(){var e=this;this.$refs.editPasswordForm.validate(function(t){t&&(e.savePassLoading=!0,a.a.put(i.a.url+"/userinfo/changepwd",{username:e.username,new:e.editPasswordForm.newPass}).then(function(t){i.a.notice(t.data),e.editPasswordModal=!1}).catch(function(e){i.a.err_notice(e)}),e.savePassLoading=!1)})},saveAuthInfo:function(){var e=this;this.savePassLoading=!0,a.a.put(i.a.url+"/authgroup/save_info",{username:this.editAuthForm.username,group:this.editAuthForm.group,department:this.editAuthForm.department,auth_group:this.editAuthForm.authgroup,permission_list:JSON.stringify(this.permission_list)}).then(function(t){i.a.notice(t.data),e.editAuthModal=!1,e.editAuthForm.authgroup=[],e.refreshuser()}).catch(function(e){i.a.err_notice(e)}),this.savePassLoading=!1},delUser:function(){var e=this;this.username===this.confirmuser?a.a.delete(i.a.url+"/userinfo/"+this.username).then(function(t){i.a.notice(t.data),e.deluserModal=!1,e.$refs.total.currentPage=1,e.refreshuser()}).catch(function(e){i.a.err_notice(e)}):this.$Message.error("用户名不一致!请重新操作!")},ddlCheckAll:function(e,t,n){this.indeterminate[t]?this.checkAll[t]=!1:this.checkAll[t]=!this.checkAll[t],this.indeterminate[t]=!1,this.checkAll[t]?this.permission[e]="dic"===n?this.connectionList[n].map(function(e){return e.Name}):"person"===n?this.connectionList[n].map(function(e){return e.username}):this.connectionList[n].map(function(e){return e.connection_name}):this.permission[e]=[]}},mounted:function(){var e=this;this.getauthgroup(),a.a.put(i.a.url+"/workorder/connection",{permissions_type:"user"}).then(function(t){e.connectionList.connection=t.data.connection,e.connectionList.dic=t.data.dic,e.connectionList.person=t.data.person,e.connectionList.multi=t.data.multi}).catch(function(e){i.a.err_notice(e)}),this.refreshuser()}}},345:function(e,t,n){t=e.exports=n(78)(!0),t.push([e.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.dragging-tip-enter-active{opacity:1;transition:opacity .3s}.dragging-tip-enter,.dragging-tip-leave-to{opacity:0;transition:opacity .3s}.dragging-tip-con{display:block;text-align:center;width:100%;height:50px}.dragging-tip-con span{font-size:18px}.record-tip-con{display:block;width:100%;height:292px;overflow:auto}.record-item{box-sizing:content-box;display:block;overflow:hidden;height:24px;line-height:24px;padding:8px 10px;border-bottom:1px dashed #dcdcdc}.record-tip-con span{font-size:14px}.edittable-test-con{min-height:600px}.edittable-testauto-con{height:100%}.edittable-table-height-con{min-height:600px}.edittable-table-height1-con{height:200px}.edittable-con-1{box-sizing:content-box;padding:15px 0 0;height:550px}.exportable-table-download-con1{padding:16px 0 16px 20px;border-bottom:1px dashed #c3c3c3;margin-bottom:16px}.exportable-table-download-con2{padding-left:20px}.show-image{padding:20px 0}.show-image img{display:block;width:100%;height:auto}","",{version:3,sources:["/Users/yeshaobin/Yearning/webpage/src/components/Management/UserInfo.vue"],names:[],mappings:"AACA,cACE,cAAgB,CACjB,AACD,eACE,eAAiB,CAClB,AACD,eACE,eAAiB,CAClB,AACD,gBACE,gBAAkB,CACnB,AACD,kBACE,kBAAoB,CACrB,AACD,mBACE,mBAAqB,CACtB,AACD,iBACE,iBAAmB,CACpB,AACD,gBACE,gBAAkB,CACnB,AACD,gBACE,gBAAkB,CACnB,AACD,iBACE,iBAAmB,CACpB,AACD,iBACE,iBAAmB,CACpB,AACD,YACE,WAAa,CACd,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,cACE,YAAc,CACf,AACD,WACE,SAAU,AACV,+BAAiC,CAClC,AACD,SACE,oBAAqB,AACrB,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CACzB,AACD,gBACE,iBAAmB,CACpB,AACD,UACE,YAAc,CACf,AACD,2BACE,UAAW,AACX,sBAAyB,CAC1B,AACD,2CAEE,UAAW,AACX,sBAAyB,CAC1B,AACD,kBACE,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,WAAa,CACd,AACD,uBACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,aAAc,AACd,aAAe,CAChB,AACD,aACE,uBAAwB,AACxB,cAAe,AACf,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,iBAAkB,AAClB,gCAAoC,CACrC,AACD,qBACE,cAAgB,CACjB,AACD,oBACE,gBAAkB,CACnB,AACD,wBACE,WAAa,CACd,AACD,4BACE,gBAAkB,CACnB,AACD,6BACE,YAAc,CACf,AACD,iBACE,uBAAwB,AACxB,iBAAkB,AAClB,YAAc,CACf,AACD,gCACE,yBAA0B,AAC1B,iCAAkC,AAClC,kBAAoB,CACrB,AACD,gCACE,iBAAmB,CACpB,AACD,YACE,cAAgB,CACjB,AACD,gBACE,cAAe,AACf,WAAY,AACZ,WAAa,CACd",file:"UserInfo.vue",sourcesContent:["\n.margin-top-8 {\n  margin-top: 8px;\n}\n.margin-top-10 {\n  margin-top: 10px;\n}\n.margin-top-20 {\n  margin-top: 20px;\n}\n.margin-left-10 {\n  margin-left: 10px;\n}\n.margin-bottom-10 {\n  margin-bottom: 10px;\n}\n.margin-bottom-100 {\n  margin-bottom: 100px;\n}\n.margin-right-10 {\n  margin-right: 10px;\n}\n.padding-left-6 {\n  padding-left: 6px;\n}\n.padding-left-8 {\n  padding-left: 5px;\n}\n.padding-left-10 {\n  padding-left: 10px;\n}\n.padding-left-20 {\n  padding-left: 20px;\n}\n.height-100 {\n  height: 100%;\n}\n.height-120px {\n  height: 100px;\n}\n.height-200px {\n  height: 200px;\n}\n.height-492px {\n  height: 492px;\n}\n.height-460px {\n  height: 460px;\n}\n.line-gray {\n  height: 0;\n  border-bottom: 2px solid #dcdcdc;\n}\n.notwrap {\n  word-break: keep-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.padding-left-5 {\n  padding-left: 10px;\n}\n[v-cloak] {\n  display: none;\n}\n.dragging-tip-enter-active {\n  opacity: 1;\n  transition: opacity 0.3s;\n}\n.dragging-tip-enter,\n.dragging-tip-leave-to {\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.dragging-tip-con {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 50px;\n}\n.dragging-tip-con span {\n  font-size: 18px;\n}\n.record-tip-con {\n  display: block;\n  width: 100%;\n  height: 292px;\n  overflow: auto;\n}\n.record-item {\n  box-sizing: content-box;\n  display: block;\n  overflow: hidden;\n  height: 24px;\n  line-height: 24px;\n  padding: 8px 10px;\n  border-bottom: 1px dashed gainsboro;\n}\n.record-tip-con span {\n  font-size: 14px;\n}\n.edittable-test-con {\n  min-height: 600px;\n}\n.edittable-testauto-con {\n  height: 100%;\n}\n.edittable-table-height-con {\n  min-height: 600px;\n}\n.edittable-table-height1-con {\n  height: 200px;\n}\n.edittable-con-1 {\n  box-sizing: content-box;\n  padding: 15px 0 0;\n  height: 550px;\n}\n.exportable-table-download-con1 {\n  padding: 16px 0 16px 20px;\n  border-bottom: 1px dashed #c3c3c3;\n  margin-bottom: 16px;\n}\n.exportable-table-download-con2 {\n  padding-left: 20px;\n}\n.show-image {\n  padding: 20px 0;\n}\n.show-image img {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n"],sourceRoot:""}])},629:function(e,t,n){var o=n(345);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(79)("15840c25",o,!0,{})},668:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Col",{attrs:{span:"6"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"load-b"}}),e._v("\n        添加用户\n      ")],1),e._v(" "),n("div",{staticClass:"edittable-testauto-con"},[n("Form",{ref:"userinfova",attrs:{model:e.userinfo,"label-width":80,rules:e.userinfoValidate}},[n("FormItem",{attrs:{label:"用户名",prop:"username"}},[n("Input",{attrs:{placeholder:"请输入"},model:{value:e.userinfo.username,callback:function(t){e.$set(e.userinfo,"username",t)},expression:"userinfo.username"}})],1),e._v(" "),n("FormItem",{attrs:{label:"密码",prop:"password"}},[n("Input",{attrs:{placeholder:"请输入",type:"password"},model:{value:e.userinfo.password,callback:function(t){e.$set(e.userinfo,"password",t)},expression:"userinfo.password"}})],1),e._v(" "),n("FormItem",{attrs:{label:"确认密码",prop:"confirmpassword"}},[n("Input",{attrs:{placeholder:"请输入",type:"password"},model:{value:e.userinfo.confirmpassword,callback:function(t){e.$set(e.userinfo,"confirmpassword",t)},expression:"userinfo.confirmpassword"}})],1),e._v(" "),n("FormItem",{attrs:{label:"部门",prop:"department"}},[n("Input",{attrs:{placeholder:"请输入"},model:{value:e.userinfo.department,callback:function(t){e.$set(e.userinfo,"department",t)},expression:"userinfo.department"}})],1),e._v(" "),n("FormItem",{attrs:{label:"角色",prop:"group"}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:e.userinfo.group,callback:function(t){e.$set(e.userinfo,"group",t)},expression:"userinfo.group"}},[n("Option",{attrs:{value:"admin"}},[e._v("管理员")]),e._v(" "),e.connectionList.multi?n("Option",{attrs:{value:"perform"}},[e._v("执行人")]):e._e(),e._v(" "),n("Option",{attrs:{value:"guest"}},[e._v("使用人")])],1)],1),e._v(" "),n("FormItem",{attrs:{label:"权限组",prop:"authgroup"}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:e.userinfo.authgroup,callback:function(t){e.$set(e.userinfo,"authgroup",t)},expression:"userinfo.authgroup"}},e._l(e.groupset,function(t){return n("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])}))],1),e._v(" "),n("FormItem",{attrs:{label:"电子邮箱"}},[n("Input",{attrs:{placeholder:"请输入"},model:{value:e.userinfo.email,callback:function(t){e.$set(e.userinfo,"email",t)},expression:"userinfo.email"}})],1),e._v(" "),n("Button",{staticStyle:{"margin-left":"35%"},attrs:{type:"primary"},nativeOn:{click:function(t){e.Registered(t)}}},[e._v("注册")])],1)],1)])],1),e._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"18"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-crop-strong"}}),e._v("\n        系统用户表\n      ")],1),e._v(" "),n("div",{staticClass:"edittable-con-1"},[n("Table",{attrs:{border:"",columns:e.columns6,data:e.data5,stripe:"",height:"550"}})],1),e._v(" "),n("br"),e._v(" "),n("Page",{ref:"total",attrs:{total:e.pagenumber,"show-elevator":"","page-size":10},on:{"on-change":e.splicpage}})],1)],1),e._v(" "),n("Modal",{attrs:{closable:!1,"mask-closable":!1,width:500},model:{value:e.editPasswordModal,callback:function(t){e.editPasswordModal=t},expression:"editPasswordModal"}},[n("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("修改用户密码")]),e._v(" "),n("Form",{ref:"editPasswordForm",attrs:{model:e.editPasswordForm,"label-width":100,"label-position":"right",rules:e.passwordValidate}},[n("FormItem",{attrs:{label:"用户名"}},[n("Input",{attrs:{readonly:"readonly"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),n("FormItem",{attrs:{label:"新密码",prop:"newPass"}},[n("Input",{attrs:{placeholder:"请输入新密码，至少6位字符",type:"password"},model:{value:e.editPasswordForm.newPass,callback:function(t){e.$set(e.editPasswordForm,"newPass",t)},expression:"editPasswordForm.newPass"}})],1),e._v(" "),n("FormItem",{attrs:{label:"确认新密码",prop:"rePass"}},[n("Input",{attrs:{placeholder:"请再次输入新密码",type:"password"},model:{value:e.editPasswordForm.rePass,callback:function(t){e.$set(e.editPasswordForm,"rePass",t)},expression:"editPasswordForm.rePass"}})],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancelEditPass}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.savePassLoading},on:{click:e.saveEditPass}},[e._v("保存")])],1)],1),e._v(" "),n("Modal",{attrs:{width:900},model:{value:e.editAuthModal,callback:function(t){e.editAuthModal=t},expression:"editAuthModal"}},[n("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("权限组设置")]),e._v(" "),n("Form",{attrs:{model:e.editAuthForm,"label-width":100,"label-position":"right"}},[n("FormItem",{attrs:{label:"用户名"}},[n("Input",{attrs:{readonly:"readonly"},model:{value:e.editAuthForm.username,callback:function(t){e.$set(e.editAuthForm,"username",t)},expression:"editAuthForm.username"}})],1),e._v(" "),n("FormItem",{attrs:{label:"角色"}},[n("Select",{attrs:{placeholder:"请选择"},model:{value:e.editAuthForm.group,callback:function(t){e.$set(e.editAuthForm,"group",t)},expression:"editAuthForm.group"}},[n("Option",{attrs:{value:"admin"}},[e._v("管理员")]),e._v(" "),e.connectionList.multi&&1!==this.userid?n("Option",{attrs:{value:"perform"}},[e._v("执行人")]):e._e(),e._v(" "),1!==this.userid?n("Option",{attrs:{value:"guest"}},[e._v("使用者")]):e._e()],1)],1),e._v(" "),n("FormItem",{attrs:{label:"部门"}},[n("Input",{attrs:{placeholder:"请输入新部门"},model:{value:e.editAuthForm.department,callback:function(t){e.$set(e.editAuthForm,"department",t)},expression:"editAuthForm.department"}})],1),e._v(" "),n("FormItem",{attrs:{label:"权限组",prop:"authgroup"}},[n("Select",{attrs:{multiple:"",placeholder:"请选择"},on:{"on-change":e.getgrouplist},model:{value:e.editAuthForm.authgroup,callback:function(t){e.$set(e.editAuthForm,"authgroup",t)},expression:"editAuthForm.authgroup"}},e._l(e.groupset,function(t){return n("Option",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),e._v(" "),[n("FormItem",{attrs:{label:"所拥有的权限:"}},[n("br"),e._v(" "),n("FormItem",{attrs:{label:"DDL是否可见:"}},[n("p",[e._v(e._s(e.formItem.ddl))])]),e._v(" "),"是"===e.formItem.ddl?n("FormItem",{attrs:{label:"可访问的连接名:"}},[n("p",[e._v(e._s(e.formItem.ddlcon))])]):e._e(),e._v(" "),n("FormItem",{attrs:{label:"DML是否可见:"}},[n("p",[e._v(e._s(e.formItem.dml))])]),e._v(" "),"是"===e.formItem.dml?n("FormItem",{attrs:{label:"可访问的连接名:"}},[n("p",[e._v(e._s(e.formItem.dmlcon))])]):e._e(),e._v(" "),n("FormItem",{attrs:{label:"查询是否可见:"}},[n("p",[e._v(e._s(e.formItem.query))])]),e._v(" "),"是"===e.formItem.query?n("FormItem",{attrs:{label:"可访问的连接名:"}},[n("p",[e._v(e._s(e.formItem.querycon))])]):e._e(),e._v(" "),n("FormItem",{attrs:{label:"字典是否可见:"}},[n("p",[e._v(e._s(e.formItem.dic))])]),e._v(" "),n("FormItem",{attrs:{label:"上级审核人:"}},[n("p",[e._v(e._s(e.formItem.person))])]),e._v(" "),"是"===e.formItem.dic?n("FormItem",{attrs:{label:"可访问的连接名:"}},[n("p",[e._v(e._s(e.formItem.diccon))])]):e._e(),e._v(" "),n("FormItem",{attrs:{label:"用户管理权限:"}},[n("p",[e._v(e._s(e.formItem.user))])]),e._v(" "),n("FormItem",{attrs:{label:"数据库管理权限:"}},[n("p",[e._v(e._s(e.formItem.base))])])],1)]],2)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancelAuthModal}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.savePassLoading},on:{click:e.saveAuthInfo}},[e._v("保存")])],1)],1),e._v(" "),n("Modal",{attrs:{closable:!1,"mask-closable":!1,width:500},model:{value:e.deluserModal,callback:function(t){e.deluserModal=t},expression:"deluserModal"}},[n("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("删除用户")]),e._v(" "),n("Form",{attrs:{"label-width":100,"label-position":"right"}},[n("FormItem",{attrs:{label:"用户名"}},[n("Input",{attrs:{readonly:"readonly"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),n("FormItem",{attrs:{label:"请输入用户名"}},[n("Input",{attrs:{placeholder:"请确认用户名"},model:{value:e.confirmuser,callback:function(t){e.confirmuser=t},expression:"confirmuser"}})],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:e.cancelDelInfo}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"warning"},on:{click:e.delUser}},[e._v("删除")])],1)],1),e._v(" "),n("Modal",{attrs:{closable:!1,"mask-closable":!1,width:500},model:{value:e.editemail,callback:function(t){e.editemail=t},expression:"editemail"}},[n("h3",{staticStyle:{color:"#2D8CF0"},attrs:{slot:"header"},slot:"header"},[e._v("更改email邮箱")]),e._v(" "),n("Form",{attrs:{"label-width":100,"label-position":"right"}},[n("FormItem",{attrs:{label:"E-mail"}},[n("Input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"text"},on:{click:function(t){e.editemail=!1}}},[e._v("取消")]),e._v(" "),n("Button",{attrs:{type:"warning"},on:{click:e.putemail}},[e._v("更改")])],1)],1)],1)},staticRenderFns:[]}},94:function(e,t,n){function o(e){n(629)}var a=n(1)(n(313),n(668),o,null,null);e.exports=a.exports}});
//# sourceMappingURL=10.c6d042bca17158daea4f.js.map