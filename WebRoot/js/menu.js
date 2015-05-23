if (document.getElementById) {
var root = new WebFXTree('致发物流');
root.setBehavior('classic');

//--------------------------------------------------------------------------------
var subsys_01 = new WebFXTreeItem('客服管理', "javascript:navigate('../zhifawuliu/ordermanager/cust_serv_main.htm')");
root.add(subsys_01);

var subsys_01_01 = new WebFXTreeItem('订单受理', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do')");
subsys_01.add(subsys_01_01);
var subsys_01_02 = new WebFXTreeItem('订单跟踪', "javascript:navigate('')");
subsys_01.add(subsys_01_02);
var subsys_01_03 = new WebFXTreeItem('回单签收', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_SIGN_IN_LIST')");
subsys_01.add(subsys_01_03);
var subsys_01_04 = new WebFXTreeItem('订单结算', "javascript:navigate('')");
subsys_01.add(subsys_01_04);
var subsys_01_05 = new WebFXTreeItem('统计查询', "javascript:navigate('')");
subsys_01.add(subsys_01_05);
var subsys_01_06 = new WebFXTreeItem('客户管理', "javascript:navigate('')");
subsys_01.add(subsys_01_06);

//订单受理
var subsys_01_01_01 = new WebFXTreeItem('运输订单受理', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_LIST')");
subsys_01_01.add(subsys_01_01_01);
var subsys_01_01_02 = new WebFXTreeItem('仓储订单受理', "javascript:navigate('../zhifawuliu/ordermanager/warehouse_order_list.htm')");
subsys_01_01.add(subsys_01_01_02);
//订单跟踪
var subsys_01_02_01 = new WebFXTreeItem('作业运作情况', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_02.add(subsys_01_02_01);
var subsys_01_02_02 = new WebFXTreeItem('费用发生情况', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_02.add(subsys_01_02_02);
//订单结算
var subsys_01_04_01 = new WebFXTreeItem('运输订单结算', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_stat.htm')");
subsys_01_04.add(subsys_01_04_01);
var subsys_01_04_02 = new WebFXTreeItem('仓储订单结算', "javascript:navigate('../zhifawuliu/ordermanager/warehouse_order_stat.htm')");
subsys_01_04.add(subsys_01_04_02);

//统计查询
var subsys_01_05_01 = new WebFXTreeItem('订单查询', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_QUERY')");
subsys_01_05.add(subsys_01_05_01);
var subsys_01_05_02 = new WebFXTreeItem('结算表查询', "javascript:navigate('../zhifawuliu/ordermanager/balance_bill_query.htm')");
subsys_01_05.add(subsys_01_05_02);

//客户管理
var subsys_01_06_01 = new WebFXTreeItem('客户合同与结算', "javascript:navigate('../zhifawuliu/ordermanager/CustomerContract.htm')");
subsys_01_06.add(subsys_01_06_01);
var subsys_01_06_02 = new WebFXTreeItem('客户分派', "javascript:navigate('../zhifawuliu/ordermanager/CustomerAssignment.htm')");
subsys_01_06.add(subsys_01_06_02);
var subsys_01_06_03 = new WebFXTreeItem('客户投诉', "javascript:navigate('')");
subsys_01_06.add(subsys_01_06_03);
//客户投诉
var subsys_01_06_03_01 = new WebFXTreeItem('投诉受理', "javascript:navigate('../zhifawuliu/lodge/lodge_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_01);
var subsys_01_06_03_02 = new WebFXTreeItem('受理审批', "javascript:navigate('../zhifawuliu/lodge/lodge_checkup.htm')");
subsys_01_06_03.add(subsys_01_06_03_02);
var subsys_01_06_03_03 = new WebFXTreeItem('投诉处理', "javascript:navigate('../zhifawuliu/lodge/lodge_do_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_03);
var subsys_01_06_03_04 = new WebFXTreeItem('处理审批', "javascript:navigate('../zhifawuliu/lodge/lodge_do_checkup.htm')");
subsys_01_06_03.add(subsys_01_06_03_04);
var subsys_01_06_03_05 = new WebFXTreeItem('结果审批', "javascript:navigate('../zhifawuliu/lodge/lodge_result_checkup_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_05);
var subsys_01_06_03_06 = new WebFXTreeItem('投诉统计', "javascript:navigate('../zhifawuliu/lodge/lodge_stat.htm')");
subsys_01_06_03.add(subsys_01_06_03_06);

/*
var subsys_01_06_03_01 = new WebFXTreeItem('投诉受理', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_01);
var subsys_01_06_03_02 = new WebFXTreeItem('投诉处理', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_02);
var subsys_01_06_03_03 = new WebFXTreeItem('投诉统计', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_03);
*/
/*
var subsys_01_03 = new WebFXTreeItem('合同管理', "javascript:navigate('')");
subsys_01.add(subsys_01_03);
var subsys_01_03_01 = new WebFXTreeItem('合同登记与修改', "javascript:navigate('')");
subsys_01_03.add(subsys_01_03_01);
var subsys_01_03_02 = new WebFXTreeItem('客户运输价格登记与修改', "javascript:navigate('')");
subsys_01_03.add(subsys_01_03_02);
var subsys_01_03_03 = new WebFXTreeItem('客户联系人登记与修改', "javascript:navigate('')");
subsys_01_03.add(subsys_01_03_03);
*/

//--------------------------------------------------------------------------------
var subsys_02 = new WebFXTreeItem('调度管理', "javascript:navigate('../zhifawuliu/dispatchmanager/pendingtask_list.htm')");
root.add(subsys_02);

var subsys_02_01 = new WebFXTreeItem('总调度', "javascript:navigate('../zhifawuliu/dispatchmanager/ch_pendingtask_list.htm')");
subsys_02.add(subsys_02_01);

var subsys_02_02 = new WebFXTreeItem('短途调度', "javascript:navigate('')");
subsys_02.add(subsys_02_02);
var subsys_02_03 = new WebFXTreeItem('长途调度', "javascript:navigate('')");
subsys_02.add(subsys_02_03);
var subsys_02_04 = new WebFXTreeItem('查询统计', "javascript:navigate('')");
subsys_02.add(subsys_02_04);

//总调度
var subsys_02_01_01 = new WebFXTreeItem('待办作业', "javascript:navigate('../zhifawuliu/dispatchmanager/ch_pendingtask_list.htm')");
subsys_02_01.add(subsys_02_01_01);
var subsys_02_01_06 = new WebFXTreeItem('作业监控', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_01.add(subsys_02_01_06);

var subsys_02_01_07 = new WebFXTreeItem('作业反馈', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_01.add(subsys_02_01_07);

//短途调度
var subsys_02_02_01 = new WebFXTreeItem('待办作业', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
subsys_02_02.add(subsys_02_02_01);

var subsys_02_02_04 = new WebFXTreeItem('作业管理', "javascript:navigate('../zhifawuliu/dispatchmanager/task_list.htm')");
subsys_02_02.add(subsys_02_02_04);

var subsys_02_02_03 = new WebFXTreeItem('费用管理', "javascript:navigate('../zhifawuliu/dispatchmanager/car_hired_list.htm')");
subsys_02_02.add(subsys_02_02_03);

var subsys_02_02_02 = new WebFXTreeItem('费用审批', "javascript:navigate('../zhifawuliu/dispatchmanager/dept_auditing_list.htm')");
subsys_02_02.add(subsys_02_02_02);


var subsys_02_02_05 = new WebFXTreeItem('作业报表', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_paiche_daily_.htm')");
//subsys_02_02.add(subsys_02_02_05);
var subsys_02_02_06 = new WebFXTreeItem('费用支出报表', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_02.add(subsys_02_02_06);
//长途调度
var subsys_02_03_01 = new WebFXTreeItem('待办作业', "javascript:navigate('../zhifawuliu/dispatchmanager/ld_pendingtask_list.htm')");
subsys_02_03.add(subsys_02_03_01);

var subsys_02_03_04 = new WebFXTreeItem('作业管理', "javascript:navigate('../zhifawuliu/dispatchmanager/task_list.htm')");
subsys_02_03.add(subsys_02_03_04);

var subsys_02_03_03 = new WebFXTreeItem('费用管理', "javascript:navigate('../zhifawuliu/dispatchmanager/car_hired_list.htm')");
subsys_02_03.add(subsys_02_03_03);

var subsys_02_03_02 = new WebFXTreeItem('费用审批', "javascript:navigate('../zhifawuliu/dispatchmanager/dept_auditing_list.htm')");
subsys_02_03.add(subsys_02_03_02);


var subsys_02_03_05 = new WebFXTreeItem('作业报表', "javascript:navigate('../zhifawuliu/dispatchmanager/ld_dispatch_daily.htm')");
//subsys_02_03.add(subsys_02_03_05);
var subsys_02_03_06 = new WebFXTreeItem('费用支出报表', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_03.add(subsys_02_03_06);
//运输作业统计

var subsys_02_04_01 = new WebFXTreeItem('作业状态查询', "javascript:navigate('../zhifawuliu/dispatchmanager/task_state_rearch.htm')");
subsys_02_04.add(subsys_02_04_01);

var subsys_02_04_02 = new WebFXTreeItem('作业量统计', "javascript:navigate('../zhifawuliu/dispatchmanager/task_daily.htm')");
subsys_02_04.add(subsys_02_04_02);

var subsys_02_04_03 = new WebFXTreeItem('作业费用统计', "javascript:navigate('../zhifawuliu/dispatchmanager/car_hired_search.htm')");
subsys_02_04.add(subsys_02_04_03);
//---------
//--------------------------------------------------------------------------------

var subsys_03 = new WebFXTreeItem('车队管理', "javascript:navigate('')");
root.add(subsys_03);

var subsys_03_03 = new WebFXTreeItem('车辆出车管理', "javascript:navigate('')");
subsys_03.add(subsys_03_03);
var subsys_03_03_01 = new WebFXTreeItem('出车情况登记', "javascript:navigate('../zhifawuliu/autoOut/listAutoOutAction.do')");
subsys_03_03.add(subsys_03_03_01);
var subsys_03_03_02 = new WebFXTreeItem('出车情况审核', "javascript:navigate('../zhifawuliu/autoOut/listAutoOutCheckAction.do?command=CMD_AUTO_OUT_CHECK_LIST')");
subsys_03_03.add(subsys_03_03_02);
var subsys_03_03_03 = new WebFXTreeItem('出车情况查询', "javascript:navigate('../zhifawuliu/autoOut/searchAutoOutMoreAction.do?command=CMD_OUT_SEARCH_REQ')");
subsys_03_03.add(subsys_03_03_03);
var subsys_03_03_04 = new WebFXTreeItem('统计表格', "javascript:navigate('')");
subsys_03_03.add(subsys_03_03_04);
var subsys_03_03_04_01 = new WebFXTreeItem('吨车提成表', "javascript:navigate('../zhifawuliu/autoOut/listSearchTunBonusAction.do')");
subsys_03_03_04.add(subsys_03_03_04_01);
var subsys_03_03_04_02 = new WebFXTreeItem('拖车提成表', "javascript:navigate('../zhifawuliu/autoOut/listSearchTuoCheBonusAction.do')");
subsys_03_03_04.add(subsys_03_03_04_02);
var subsys_03_03_04_03 = new WebFXTreeItem('出车明细表', "javascript:navigate('../zhifawuliu/autoOut/listSearchAutoOutDetailAction.do')");
subsys_03_03_04.add(subsys_03_03_04_03);
var subsys_03_03_04_04 = new WebFXTreeItem('油耗、里程情况表', "javascript:navigate('../zhifawuliu/autoOut/listSearchOutFuelDetailAction.do')");
subsys_03_03_04.add(subsys_03_03_04_04);

var subsys_03_04 = new WebFXTreeItem('车辆维修管理', "javascript:navigate('')");
subsys_03.add(subsys_03_04);
var subsys_03_04_01 = new WebFXTreeItem('维修申请登记', "javascript:navigate('../zhifawuliu/autoFix/addAutoFixAction.do?command=add')");
subsys_03_04.add(subsys_03_04_01);
var subsys_03_04_02 = new WebFXTreeItem('维修结果登记', "javascript:navigate('../zhifawuliu/autoFix/listAutoFixAction.do')");
subsys_03_04.add(subsys_03_04_02);
var subsys_03_04_03 = new WebFXTreeItem('维修查询', "javascript:navigate('../zhifawuliu/autoFix/searchAutoFixAction.do?command=CMD_AUTO_FIX_SEARCH')");
subsys_03_04.add(subsys_03_04_03);


var subsys_03_05 = new WebFXTreeItem('事故处理', "javascript:navigate('')");
subsys_03.add(subsys_03_05);
var subsys_03_05_01 = new WebFXTreeItem('事故受理', "javascript:navigate('../zhifawuliu/accident/addAccidentAction.do')");
subsys_03_05.add(subsys_03_05_01);
var subsys_03_05_02 = new WebFXTreeItem('理赔录入', "javascript:navigate('../zhifawuliu/accident/listAccidentAction.do?command=list')");
subsys_03_05.add(subsys_03_05_02);
//var subsys_03_05_03 = new WebFXTreeItem('事故损失汇总表', "javascript:navigate('')");
//subsys_03_05.add(subsys_03_05_03);
var subsys_03_05_04 = new WebFXTreeItem('事故查询', "javascript:navigate('../zhifawuliu/accident/searchAccidentAction.do')");
subsys_03_05.add(subsys_03_05_04);

var subsys_03_06 = new WebFXTreeItem('基础数据维护', "javascript:navigate('')");
subsys_03.add(subsys_03_06);
var subsys_03_06_01 = new WebFXTreeItem('修理厂维护', "javascript:navigate('../zhifawuliu/fixFactory/listFixFactoryAction.do')");
subsys_03_06.add(subsys_03_06_01);
var subsys_03_06_02 = new WebFXTreeItem('出车提成规则维护', "javascript:navigate('')");
subsys_03_06.add(subsys_03_06_02);
var subsys_03_06_02_01 = new WebFXTreeItem('地点规则维护', "javascript:navigate('../zhifawuliu/bonusRule/listPositionBonusAction.do')");
subsys_03_06_02.add(subsys_03_06_02_01);
var subsys_03_06_02_02 = new WebFXTreeItem('提成服务规则维护', "javascript:navigate('../zhifawuliu/serviceBonus/listServiceBonusAction.do')");
subsys_03_06_02.add(subsys_03_06_02_02);
var subsys_03_06_03 = new WebFXTreeItem('车辆信息管理', "javascript:navigate('../zhifawuliu/auto/listAutoAction.do')");
subsys_03_06.add(subsys_03_06_03);
var subsys_03_06_04 = new WebFXTreeItem('司机信息管理', "javascript:navigate('../zhifawuliu/driver/listDriverAction.do')");
subsys_03_06.add(subsys_03_06_04);



//--------------------------------------------------------------------------------
var subsys_04 = new WebFXTreeItem('外办事务管理', "javascript:navigate('')");
root.add(subsys_04);

var subsys_04_04 = new WebFXTreeItem('请车', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_04 = new WebFXTreeItem('接货', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_04 = new WebFXTreeItem('付款', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_04 = new WebFXTreeItem('回单', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_05 = new WebFXTreeItem('请车费用日报表', "javascript:navigate('')");
subsys_04.add(subsys_04_05);
//--------------------------------------------------------------------------------

var subsys_05 = new WebFXTreeItem('装卸管理', "javascript:navigate('')");
root.add(subsys_05);

var subsys_05_01 = new WebFXTreeItem('吨车装卸队派工作业', "javascript:navigate('../zhifawuliu/zhuangxie/fengong_list.htm')");
subsys_05.add(subsys_05_01);
var subsys_05_02 = new WebFXTreeItem('厂家装卸队登记作业', "javascript:navigate('../zhifawuliu/zhuangxie/dengji_list.htm')");
subsys_05.add(subsys_05_02);
var subsys_05_03 = new WebFXTreeItem('生成月报', "javascript:navigate('../zhifawuliu/zhuangxie/ticheng.htm')");
subsys_05.add(subsys_05_03);

/*
var subsys_05_01 = new WebFXTreeItem('吨车装卸队管理', "javascript:navigate('')");
subsys_05.add(subsys_05_01);

//var subsys_05_01_01 = new WebFXTreeItem('货物装卸', "javascript:navigate('')");
//subsys_05_01.add(subsys_05_01_01);
var subsys_05_01_02 = new WebFXTreeItem('分工', "javascript:navigate('')");
subsys_05_01.add(subsys_05_01_02);
var subsys_05_01_03 = new WebFXTreeItem('生成月报表', "javascript:navigate('')");
subsys_05_01.add(subsys_05_01_03);

var subsys_05_02 = new WebFXTreeItem('厂家装卸队管理', "javascript:navigate('')");
subsys_05.add(subsys_05_02);
//var subsys_05_02_01 = new WebFXTreeItem('货物装卸', "javascript:navigate('')");
//subsys_05_02.add(subsys_05_02_01);
var subsys_05_02_02 = new WebFXTreeItem('登记', "javascript:navigate('')");
subsys_05_02.add(subsys_05_02_02);
*/
//--------------------------------------------------------------------------------
var subsys_06 = new WebFXTreeItem('仓库管理', "javascript:navigate('../zhifawuliu/storemanager/operate/planconfirm_list.htm')");
root.add(subsys_06);

//var subsys_06_02 = new WebFXTreeItem('仓库作业', "javascript:navigate('')");
//subsys_06.add(subsys_06_02);
var subsys_06_01 = new WebFXTreeItem('出入库待办作业', "javascript:navigate('../zhifawuliu/storemanager/operate/plan_list.htm')");
subsys_06.add(subsys_06_01);
var subsys_06_02 = new WebFXTreeItem('移位盘点待办作业', "javascript:navigate('../zhifawuliu/storemanager/operate/plan2_list.htm')");
subsys_06.add(subsys_06_02);
var subsys_06_03 = new WebFXTreeItem('计划执行跟踪', "javascript:navigate('../zhifawuliu/storemanager/operate/plan_view_list.htm')");
subsys_06.add(subsys_06_03);
var subsys_06_04 = new WebFXTreeItem('入库登记', "javascript:navigate('../zhifawuliu/storemanager/operate/inbill_list.htm')");
subsys_06.add(subsys_06_04);
var subsys_06_05 = new WebFXTreeItem('出库登记', "javascript:navigate('../zhifawuliu/storemanager/operate/outbill_list.htm')");
subsys_06.add(subsys_06_05);
var subsys_06_06 = new WebFXTreeItem('移位登记', "javascript:navigate('../zhifawuliu/storemanager/operate/movebill_list.htm')");
subsys_06.add(subsys_06_06);
var subsys_06_07 = new WebFXTreeItem('盘点对帐', "javascript:navigate('../zhifawuliu/storemanager/operate/checkbill_list.htm')");
subsys_06.add(subsys_06_07);
var subsys_06_08 = new WebFXTreeItem('装卸登记', "javascript:navigate('../zhifawuliu/storemanager/operate/task_list.htm')");
subsys_06.add(subsys_06_08);
var subsys_06_09 = new WebFXTreeItem('统计报表', "javascript:navigate('../zhifawuliu/storemanager/operate/report.htm')");
subsys_06.add(subsys_06_09);
var subsys_06_10 = new WebFXTreeItem('管理资费结算', "javascript:navigate('../zhifawuliu/storemanager/operate/mngfee_list.htm')");
subsys_06.add(subsys_06_10);
var subsys_06_11 = new WebFXTreeItem('提成资费结算', "javascript:navigate('../zhifawuliu/storemanager/operate/percentfee_list.htm')");
subsys_06.add(subsys_06_11);
var subsys_06_12 = new WebFXTreeItem('出库计划管理', "javascript:navigate('../zhifawuliu/storemanager/operate/xiamen_outplan_list.htm')");
subsys_06.add(subsys_06_12);


var subsys_06_13 = new WebFXTreeItem('基础资料管理', "javascript:navigate('')");
subsys_06.add(subsys_06_13);
var subsys_06_13_01 = new WebFXTreeItem('仓库信息管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/storemap_list.htm')");
subsys_06_13.add(subsys_06_13_01);
var subsys_06_13_02 = new WebFXTreeItem('叉车管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/forkvehicle_list.htm')");
subsys_06_13.add(subsys_06_13_02);
var subsys_06_13_03 = new WebFXTreeItem('商品安全库存管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/quantitysafety_list.htm')");
subsys_06_13.add(subsys_06_13_03);
var subsys_06_13_04 = new WebFXTreeItem('出库规则管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/outrule_list.htm')");
subsys_06_13.add(subsys_06_13_04);
var subsys_06_13_05 = new WebFXTreeItem('盘点提醒规则管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/checkrule_list.htm')");
subsys_06_13.add(subsys_06_13_05);
var subsys_06_13_06 = new WebFXTreeItem('提成比例管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/percentagerule_list.htm')");
subsys_06_13.add(subsys_06_13_06);
var subsys_06_13_07 = new WebFXTreeItem('提成单价管理', "javascript:navigate('../zhifawuliu/storemanager/basedata/pricerule_list.htm')");
subsys_06_13.add(subsys_06_13_07);



//--------------------------------------------------------------------------------
var subsys_07 = new WebFXTreeItem('返工管理', "javascript:navigate('')");
root.add(subsys_07);

var subsys_07_01 = new WebFXTreeItem('制定计划', "javascript:navigate('../zhifawuliu/reDone/reDone_list.htm')");
subsys_07.add(subsys_07_01);

var subsys_07_02 = new WebFXTreeItem('返工作业', "javascript:navigate('../zhifawuliu/reDone/reDone_include_list.htm')");
subsys_07.add(subsys_07_02);


var subsys_07_04 = new WebFXTreeItem('查询统计', "javascript:navigate('')");
subsys_07.add(subsys_07_04);
var subsys_07_04_01 = new WebFXTreeItem('返工流水帐', "javascript:navigate('../zhifawuliu/reDone/reDone_flow_tb.htm')");
subsys_07_04.add(subsys_07_04_01);
var subsys_07_04_02 = new WebFXTreeItem('实际库存表', "javascript:navigate('../zhifawuliu/reDone/reDone_kucun.htm')");
subsys_07_04.add(subsys_07_04_02);
var subsys_07_04_03 = new WebFXTreeItem('月汇总表', "javascript:navigate('../zhifawuliu/reDone/reDone_huizong.htm')");
subsys_07_04.add(subsys_07_04_03);
var subsys_07_04_04 = new WebFXTreeItem('物料清单', "javascript:navigate('../zhifawuliu/reDone/reDone_wuliao.htm')");
subsys_07_04.add(subsys_07_04_04);

//--------------------------------------------------------------------------------
var subsys_08 = new WebFXTreeItem('结算管理', "javascript:navigate('')");
root.add(subsys_08);

var subsys_08_01 = new WebFXTreeItem('支出费用审单', "javascript:navigate('../zhifawuliu/balancemanager/payout_auditing_list.htm')");
subsys_08.add(subsys_08_01);

var subsys_08_02 = new WebFXTreeItem('收入结算审核', "javascript:navigate('../zhifawuliu/balancemanager/income_auditing_list.htm')");
subsys_08.add(subsys_08_02);

var subsys_08_02 = new WebFXTreeItem('支出结算审核', "javascript:navigate('../zhifawuliu/balancemanager/totalpayout_auditing_list.htm')");
subsys_08.add(subsys_08_02);

var subsys_08_02 = new WebFXTreeItem('内部结算', "javascript:navigate('../zhifawuliu/balancemanager/inside_balance_list.htm')");
subsys_08.add(subsys_08_02);

var subsys_08_10 = new WebFXTreeItem('结算调整', "javascript:navigate('../zhifawuliu/balancemanager/adjust.htm')");
subsys_08.add(subsys_08_10);

var subsys_08_07 = new WebFXTreeItem('历史价格查询', "javascript:navigate('../zhifawuliu/balancemanager/history_list.htm')");
subsys_08.add(subsys_08_07);

var subsys_08_08 = new WebFXTreeItem('成本价格管理', "javascript:navigate('../zhifawuliu/balancemanager/cost_list.htm')");
subsys_08.add(subsys_08_08);
//--------------------------------------------------------------------------------
var subsys_09 = new WebFXTreeItem('财务管理', "javascript:navigate('')");
root.add(subsys_09);

//var subsys_09_01 = new WebFXTreeItem('收入结算确认', "javascript:navigate('../zhifawuliu/financemanager/income_confirm_list.htm')");
//subsys_09.add(subsys_09_01);

//var subsys_09_02 = new WebFXTreeItem('支出结算确认', "javascript:navigate('../zhifawuliu/financemanager/payout_confirm_list.htm')");
//subsys_09.add(subsys_09_02);

var subsys_09_01 = new WebFXTreeItem('待办作业', "javascript:navigate('../zhifawuliu/financemanager/confirm_list.htm')");
subsys_09.add(subsys_09_01);

//--------------------------------------------------------------------------------
var subsys_10 = new WebFXTreeItem('经营分析', "javascript:navigate('')");
root.add(subsys_10);
//--------------------------------------------------------------------------------
//var subsys_11 = new WebFXTreeItem('待办工作', "javascript:navigate('')");
//root.add(subsys_11);
//--------------------------------------------------------------------------------
var subsys_12 = new WebFXTreeItem('综合管理', "javascript:navigate('')");
root.add(subsys_12);

//var subsys_12_01 = new WebFXTreeItem('子系统管理(略)', "javascript:navigate('../zhifawuliu/configmanager/subsystem_list.htm')");
//subsys_12.add(subsys_12_01);

var subsys_12_02 = new WebFXTreeItem('模块管理', "javascript:navigate('../zhifawuliu/configmanager/module_list.htm')");
subsys_12.add(subsys_12_02);

var subsys_12_03 = new WebFXTreeItem('角色管理', "javascript:navigate('../zhifawuliu/configmanager/role_list.htm')");
subsys_12.add(subsys_12_03);

var subsys_12_04 = new WebFXTreeItem('部门管理', "javascript:navigate('../zhifawuliu/configmanager/organ_list.htm')");
subsys_12.add(subsys_12_04);

var subsys_12_05 = new WebFXTreeItem('用户管理', "javascript:navigate('../zhifawuliu/configmanager/user_list.htm')");
subsys_12.add(subsys_12_05);

var subsys_12_06 = new WebFXTreeItem('岗位管理', "javascript:navigate('../zhifawuliu/configmanager/post_list.htm')");
subsys_12.add(subsys_12_06);

var subsys_12_07 = new WebFXTreeItem('系统参数管理', "javascript:navigate('../zhifawuliu/configmanager/param_list.htm')");
subsys_12.add(subsys_12_07);

var subsys_12_08 = new WebFXTreeItem('系统日志查询', "javascript:navigate('../zhifawuliu/configmanager/log_list.htm')");
subsys_12.add(subsys_12_08);

var subsys_12_09 = new WebFXTreeItem('客户及商家资料管理', "javascript:navigate('../zhifawuliu/configmanager/cust_list.htm')");
subsys_12.add(subsys_12_09);

var subsys_12_10 = new WebFXTreeItem('合作伙伴资料管理', "javascript:navigate('../zhifawuliu/configmanager/partner_list.htm')");
subsys_12.add(subsys_12_10);

var subsys_12_11 = new WebFXTreeItem('商品资料管理', "javascript:navigate('../zhifawuliu/configmanager/goods_list.htm')");
subsys_12.add(subsys_12_11);

var subsys_12_12 = new WebFXTreeItem('商品单位管理', "javascript:navigate('../zhifawuliu/configmanager/goodsunit_list.htm')");
subsys_12.add(subsys_12_12);

var subsys_12_13 = new WebFXTreeItem('工作表现提成费用管理', "javascript:navigate('../zhifawuliu/configmanager/scorefee_list.htm')");
subsys_12.add(subsys_12_13);


document.write(root);
}
