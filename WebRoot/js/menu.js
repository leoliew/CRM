if (document.getElementById) {
var root = new WebFXTree('�·�����');
root.setBehavior('classic');

//--------------------------------------------------------------------------------
var subsys_01 = new WebFXTreeItem('�ͷ�����', "javascript:navigate('../zhifawuliu/ordermanager/cust_serv_main.htm')");
root.add(subsys_01);

var subsys_01_01 = new WebFXTreeItem('��������', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do')");
subsys_01.add(subsys_01_01);
var subsys_01_02 = new WebFXTreeItem('��������', "javascript:navigate('')");
subsys_01.add(subsys_01_02);
var subsys_01_03 = new WebFXTreeItem('�ص�ǩ��', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_SIGN_IN_LIST')");
subsys_01.add(subsys_01_03);
var subsys_01_04 = new WebFXTreeItem('��������', "javascript:navigate('')");
subsys_01.add(subsys_01_04);
var subsys_01_05 = new WebFXTreeItem('ͳ�Ʋ�ѯ', "javascript:navigate('')");
subsys_01.add(subsys_01_05);
var subsys_01_06 = new WebFXTreeItem('�ͻ�����', "javascript:navigate('')");
subsys_01.add(subsys_01_06);

//��������
var subsys_01_01_01 = new WebFXTreeItem('���䶩������', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_LIST')");
subsys_01_01.add(subsys_01_01_01);
var subsys_01_01_02 = new WebFXTreeItem('�ִ���������', "javascript:navigate('../zhifawuliu/ordermanager/warehouse_order_list.htm')");
subsys_01_01.add(subsys_01_01_02);
//��������
var subsys_01_02_01 = new WebFXTreeItem('��ҵ�������', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_02.add(subsys_01_02_01);
var subsys_01_02_02 = new WebFXTreeItem('���÷������', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_02.add(subsys_01_02_02);
//��������
var subsys_01_04_01 = new WebFXTreeItem('���䶩������', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_stat.htm')");
subsys_01_04.add(subsys_01_04_01);
var subsys_01_04_02 = new WebFXTreeItem('�ִ���������', "javascript:navigate('../zhifawuliu/ordermanager/warehouse_order_stat.htm')");
subsys_01_04.add(subsys_01_04_02);

//ͳ�Ʋ�ѯ
var subsys_01_05_01 = new WebFXTreeItem('������ѯ', "javascript:navigate('../zhifawuliu/ordermanager/orderAction.do?command=CMD_ORDER_QUERY')");
subsys_01_05.add(subsys_01_05_01);
var subsys_01_05_02 = new WebFXTreeItem('������ѯ', "javascript:navigate('../zhifawuliu/ordermanager/balance_bill_query.htm')");
subsys_01_05.add(subsys_01_05_02);

//�ͻ�����
var subsys_01_06_01 = new WebFXTreeItem('�ͻ���ͬ�����', "javascript:navigate('../zhifawuliu/ordermanager/CustomerContract.htm')");
subsys_01_06.add(subsys_01_06_01);
var subsys_01_06_02 = new WebFXTreeItem('�ͻ�����', "javascript:navigate('../zhifawuliu/ordermanager/CustomerAssignment.htm')");
subsys_01_06.add(subsys_01_06_02);
var subsys_01_06_03 = new WebFXTreeItem('�ͻ�Ͷ��', "javascript:navigate('')");
subsys_01_06.add(subsys_01_06_03);
//�ͻ�Ͷ��
var subsys_01_06_03_01 = new WebFXTreeItem('Ͷ������', "javascript:navigate('../zhifawuliu/lodge/lodge_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_01);
var subsys_01_06_03_02 = new WebFXTreeItem('��������', "javascript:navigate('../zhifawuliu/lodge/lodge_checkup.htm')");
subsys_01_06_03.add(subsys_01_06_03_02);
var subsys_01_06_03_03 = new WebFXTreeItem('Ͷ�ߴ���', "javascript:navigate('../zhifawuliu/lodge/lodge_do_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_03);
var subsys_01_06_03_04 = new WebFXTreeItem('��������', "javascript:navigate('../zhifawuliu/lodge/lodge_do_checkup.htm')");
subsys_01_06_03.add(subsys_01_06_03_04);
var subsys_01_06_03_05 = new WebFXTreeItem('�������', "javascript:navigate('../zhifawuliu/lodge/lodge_result_checkup_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_05);
var subsys_01_06_03_06 = new WebFXTreeItem('Ͷ��ͳ��', "javascript:navigate('../zhifawuliu/lodge/lodge_stat.htm')");
subsys_01_06_03.add(subsys_01_06_03_06);

/*
var subsys_01_06_03_01 = new WebFXTreeItem('Ͷ������', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_01);
var subsys_01_06_03_02 = new WebFXTreeItem('Ͷ�ߴ���', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_02);
var subsys_01_06_03_03 = new WebFXTreeItem('Ͷ��ͳ��', "javascript:navigate('../zhifawuliu/ordermanager/transport_order_list.htm')");
subsys_01_06_03.add(subsys_01_06_03_03);
*/
/*
var subsys_01_03 = new WebFXTreeItem('��ͬ����', "javascript:navigate('')");
subsys_01.add(subsys_01_03);
var subsys_01_03_01 = new WebFXTreeItem('��ͬ�Ǽ����޸�', "javascript:navigate('')");
subsys_01_03.add(subsys_01_03_01);
var subsys_01_03_02 = new WebFXTreeItem('�ͻ�����۸�Ǽ����޸�', "javascript:navigate('')");
subsys_01_03.add(subsys_01_03_02);
var subsys_01_03_03 = new WebFXTreeItem('�ͻ���ϵ�˵Ǽ����޸�', "javascript:navigate('')");
subsys_01_03.add(subsys_01_03_03);
*/

//--------------------------------------------------------------------------------
var subsys_02 = new WebFXTreeItem('���ȹ���', "javascript:navigate('../zhifawuliu/dispatchmanager/pendingtask_list.htm')");
root.add(subsys_02);

var subsys_02_01 = new WebFXTreeItem('�ܵ���', "javascript:navigate('../zhifawuliu/dispatchmanager/ch_pendingtask_list.htm')");
subsys_02.add(subsys_02_01);

var subsys_02_02 = new WebFXTreeItem('��;����', "javascript:navigate('')");
subsys_02.add(subsys_02_02);
var subsys_02_03 = new WebFXTreeItem('��;����', "javascript:navigate('')");
subsys_02.add(subsys_02_03);
var subsys_02_04 = new WebFXTreeItem('��ѯͳ��', "javascript:navigate('')");
subsys_02.add(subsys_02_04);

//�ܵ���
var subsys_02_01_01 = new WebFXTreeItem('������ҵ', "javascript:navigate('../zhifawuliu/dispatchmanager/ch_pendingtask_list.htm')");
subsys_02_01.add(subsys_02_01_01);
var subsys_02_01_06 = new WebFXTreeItem('��ҵ���', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_01.add(subsys_02_01_06);

var subsys_02_01_07 = new WebFXTreeItem('��ҵ����', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_01.add(subsys_02_01_07);

//��;����
var subsys_02_02_01 = new WebFXTreeItem('������ҵ', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
subsys_02_02.add(subsys_02_02_01);

var subsys_02_02_04 = new WebFXTreeItem('��ҵ����', "javascript:navigate('../zhifawuliu/dispatchmanager/task_list.htm')");
subsys_02_02.add(subsys_02_02_04);

var subsys_02_02_03 = new WebFXTreeItem('���ù���', "javascript:navigate('../zhifawuliu/dispatchmanager/car_hired_list.htm')");
subsys_02_02.add(subsys_02_02_03);

var subsys_02_02_02 = new WebFXTreeItem('��������', "javascript:navigate('../zhifawuliu/dispatchmanager/dept_auditing_list.htm')");
subsys_02_02.add(subsys_02_02_02);


var subsys_02_02_05 = new WebFXTreeItem('��ҵ����', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_paiche_daily_.htm')");
//subsys_02_02.add(subsys_02_02_05);
var subsys_02_02_06 = new WebFXTreeItem('����֧������', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_02.add(subsys_02_02_06);
//��;����
var subsys_02_03_01 = new WebFXTreeItem('������ҵ', "javascript:navigate('../zhifawuliu/dispatchmanager/ld_pendingtask_list.htm')");
subsys_02_03.add(subsys_02_03_01);

var subsys_02_03_04 = new WebFXTreeItem('��ҵ����', "javascript:navigate('../zhifawuliu/dispatchmanager/task_list.htm')");
subsys_02_03.add(subsys_02_03_04);

var subsys_02_03_03 = new WebFXTreeItem('���ù���', "javascript:navigate('../zhifawuliu/dispatchmanager/car_hired_list.htm')");
subsys_02_03.add(subsys_02_03_03);

var subsys_02_03_02 = new WebFXTreeItem('��������', "javascript:navigate('../zhifawuliu/dispatchmanager/dept_auditing_list.htm')");
subsys_02_03.add(subsys_02_03_02);


var subsys_02_03_05 = new WebFXTreeItem('��ҵ����', "javascript:navigate('../zhifawuliu/dispatchmanager/ld_dispatch_daily.htm')");
//subsys_02_03.add(subsys_02_03_05);
var subsys_02_03_06 = new WebFXTreeItem('����֧������', "javascript:navigate('../zhifawuliu/dispatchmanager/sd_pendingtask_list.htm')");
//subsys_02_03.add(subsys_02_03_06);
//������ҵͳ��

var subsys_02_04_01 = new WebFXTreeItem('��ҵ״̬��ѯ', "javascript:navigate('../zhifawuliu/dispatchmanager/task_state_rearch.htm')");
subsys_02_04.add(subsys_02_04_01);

var subsys_02_04_02 = new WebFXTreeItem('��ҵ��ͳ��', "javascript:navigate('../zhifawuliu/dispatchmanager/task_daily.htm')");
subsys_02_04.add(subsys_02_04_02);

var subsys_02_04_03 = new WebFXTreeItem('��ҵ����ͳ��', "javascript:navigate('../zhifawuliu/dispatchmanager/car_hired_search.htm')");
subsys_02_04.add(subsys_02_04_03);
//---------
//--------------------------------------------------------------------------------

var subsys_03 = new WebFXTreeItem('���ӹ���', "javascript:navigate('')");
root.add(subsys_03);

var subsys_03_03 = new WebFXTreeItem('������������', "javascript:navigate('')");
subsys_03.add(subsys_03_03);
var subsys_03_03_01 = new WebFXTreeItem('��������Ǽ�', "javascript:navigate('../zhifawuliu/autoOut/listAutoOutAction.do')");
subsys_03_03.add(subsys_03_03_01);
var subsys_03_03_02 = new WebFXTreeItem('����������', "javascript:navigate('../zhifawuliu/autoOut/listAutoOutCheckAction.do?command=CMD_AUTO_OUT_CHECK_LIST')");
subsys_03_03.add(subsys_03_03_02);
var subsys_03_03_03 = new WebFXTreeItem('���������ѯ', "javascript:navigate('../zhifawuliu/autoOut/searchAutoOutMoreAction.do?command=CMD_OUT_SEARCH_REQ')");
subsys_03_03.add(subsys_03_03_03);
var subsys_03_03_04 = new WebFXTreeItem('ͳ�Ʊ��', "javascript:navigate('')");
subsys_03_03.add(subsys_03_03_04);
var subsys_03_03_04_01 = new WebFXTreeItem('�ֳ���ɱ�', "javascript:navigate('../zhifawuliu/autoOut/listSearchTunBonusAction.do')");
subsys_03_03_04.add(subsys_03_03_04_01);
var subsys_03_03_04_02 = new WebFXTreeItem('�ϳ���ɱ�', "javascript:navigate('../zhifawuliu/autoOut/listSearchTuoCheBonusAction.do')");
subsys_03_03_04.add(subsys_03_03_04_02);
var subsys_03_03_04_03 = new WebFXTreeItem('������ϸ��', "javascript:navigate('../zhifawuliu/autoOut/listSearchAutoOutDetailAction.do')");
subsys_03_03_04.add(subsys_03_03_04_03);
var subsys_03_03_04_04 = new WebFXTreeItem('�ͺġ���������', "javascript:navigate('../zhifawuliu/autoOut/listSearchOutFuelDetailAction.do')");
subsys_03_03_04.add(subsys_03_03_04_04);

var subsys_03_04 = new WebFXTreeItem('����ά�޹���', "javascript:navigate('')");
subsys_03.add(subsys_03_04);
var subsys_03_04_01 = new WebFXTreeItem('ά������Ǽ�', "javascript:navigate('../zhifawuliu/autoFix/addAutoFixAction.do?command=add')");
subsys_03_04.add(subsys_03_04_01);
var subsys_03_04_02 = new WebFXTreeItem('ά�޽���Ǽ�', "javascript:navigate('../zhifawuliu/autoFix/listAutoFixAction.do')");
subsys_03_04.add(subsys_03_04_02);
var subsys_03_04_03 = new WebFXTreeItem('ά�޲�ѯ', "javascript:navigate('../zhifawuliu/autoFix/searchAutoFixAction.do?command=CMD_AUTO_FIX_SEARCH')");
subsys_03_04.add(subsys_03_04_03);


var subsys_03_05 = new WebFXTreeItem('�¹ʴ���', "javascript:navigate('')");
subsys_03.add(subsys_03_05);
var subsys_03_05_01 = new WebFXTreeItem('�¹�����', "javascript:navigate('../zhifawuliu/accident/addAccidentAction.do')");
subsys_03_05.add(subsys_03_05_01);
var subsys_03_05_02 = new WebFXTreeItem('����¼��', "javascript:navigate('../zhifawuliu/accident/listAccidentAction.do?command=list')");
subsys_03_05.add(subsys_03_05_02);
//var subsys_03_05_03 = new WebFXTreeItem('�¹���ʧ���ܱ�', "javascript:navigate('')");
//subsys_03_05.add(subsys_03_05_03);
var subsys_03_05_04 = new WebFXTreeItem('�¹ʲ�ѯ', "javascript:navigate('../zhifawuliu/accident/searchAccidentAction.do')");
subsys_03_05.add(subsys_03_05_04);

var subsys_03_06 = new WebFXTreeItem('��������ά��', "javascript:navigate('')");
subsys_03.add(subsys_03_06);
var subsys_03_06_01 = new WebFXTreeItem('����ά��', "javascript:navigate('../zhifawuliu/fixFactory/listFixFactoryAction.do')");
subsys_03_06.add(subsys_03_06_01);
var subsys_03_06_02 = new WebFXTreeItem('������ɹ���ά��', "javascript:navigate('')");
subsys_03_06.add(subsys_03_06_02);
var subsys_03_06_02_01 = new WebFXTreeItem('�ص����ά��', "javascript:navigate('../zhifawuliu/bonusRule/listPositionBonusAction.do')");
subsys_03_06_02.add(subsys_03_06_02_01);
var subsys_03_06_02_02 = new WebFXTreeItem('��ɷ������ά��', "javascript:navigate('../zhifawuliu/serviceBonus/listServiceBonusAction.do')");
subsys_03_06_02.add(subsys_03_06_02_02);
var subsys_03_06_03 = new WebFXTreeItem('������Ϣ����', "javascript:navigate('../zhifawuliu/auto/listAutoAction.do')");
subsys_03_06.add(subsys_03_06_03);
var subsys_03_06_04 = new WebFXTreeItem('˾����Ϣ����', "javascript:navigate('../zhifawuliu/driver/listDriverAction.do')");
subsys_03_06.add(subsys_03_06_04);



//--------------------------------------------------------------------------------
var subsys_04 = new WebFXTreeItem('����������', "javascript:navigate('')");
root.add(subsys_04);

var subsys_04_04 = new WebFXTreeItem('�복', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_04 = new WebFXTreeItem('�ӻ�', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_04 = new WebFXTreeItem('����', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_04 = new WebFXTreeItem('�ص�', "javascript:navigate('')");
subsys_04.add(subsys_04_04);

var subsys_04_05 = new WebFXTreeItem('�복�����ձ���', "javascript:navigate('')");
subsys_04.add(subsys_04_05);
//--------------------------------------------------------------------------------

var subsys_05 = new WebFXTreeItem('װж����', "javascript:navigate('')");
root.add(subsys_05);

var subsys_05_01 = new WebFXTreeItem('�ֳ�װж���ɹ���ҵ', "javascript:navigate('../zhifawuliu/zhuangxie/fengong_list.htm')");
subsys_05.add(subsys_05_01);
var subsys_05_02 = new WebFXTreeItem('����װж�ӵǼ���ҵ', "javascript:navigate('../zhifawuliu/zhuangxie/dengji_list.htm')");
subsys_05.add(subsys_05_02);
var subsys_05_03 = new WebFXTreeItem('�����±�', "javascript:navigate('../zhifawuliu/zhuangxie/ticheng.htm')");
subsys_05.add(subsys_05_03);

/*
var subsys_05_01 = new WebFXTreeItem('�ֳ�װж�ӹ���', "javascript:navigate('')");
subsys_05.add(subsys_05_01);

//var subsys_05_01_01 = new WebFXTreeItem('����װж', "javascript:navigate('')");
//subsys_05_01.add(subsys_05_01_01);
var subsys_05_01_02 = new WebFXTreeItem('�ֹ�', "javascript:navigate('')");
subsys_05_01.add(subsys_05_01_02);
var subsys_05_01_03 = new WebFXTreeItem('�����±���', "javascript:navigate('')");
subsys_05_01.add(subsys_05_01_03);

var subsys_05_02 = new WebFXTreeItem('����װж�ӹ���', "javascript:navigate('')");
subsys_05.add(subsys_05_02);
//var subsys_05_02_01 = new WebFXTreeItem('����װж', "javascript:navigate('')");
//subsys_05_02.add(subsys_05_02_01);
var subsys_05_02_02 = new WebFXTreeItem('�Ǽ�', "javascript:navigate('')");
subsys_05_02.add(subsys_05_02_02);
*/
//--------------------------------------------------------------------------------
var subsys_06 = new WebFXTreeItem('�ֿ����', "javascript:navigate('../zhifawuliu/storemanager/operate/planconfirm_list.htm')");
root.add(subsys_06);

//var subsys_06_02 = new WebFXTreeItem('�ֿ���ҵ', "javascript:navigate('')");
//subsys_06.add(subsys_06_02);
var subsys_06_01 = new WebFXTreeItem('����������ҵ', "javascript:navigate('../zhifawuliu/storemanager/operate/plan_list.htm')");
subsys_06.add(subsys_06_01);
var subsys_06_02 = new WebFXTreeItem('��λ�̵������ҵ', "javascript:navigate('../zhifawuliu/storemanager/operate/plan2_list.htm')");
subsys_06.add(subsys_06_02);
var subsys_06_03 = new WebFXTreeItem('�ƻ�ִ�и���', "javascript:navigate('../zhifawuliu/storemanager/operate/plan_view_list.htm')");
subsys_06.add(subsys_06_03);
var subsys_06_04 = new WebFXTreeItem('���Ǽ�', "javascript:navigate('../zhifawuliu/storemanager/operate/inbill_list.htm')");
subsys_06.add(subsys_06_04);
var subsys_06_05 = new WebFXTreeItem('����Ǽ�', "javascript:navigate('../zhifawuliu/storemanager/operate/outbill_list.htm')");
subsys_06.add(subsys_06_05);
var subsys_06_06 = new WebFXTreeItem('��λ�Ǽ�', "javascript:navigate('../zhifawuliu/storemanager/operate/movebill_list.htm')");
subsys_06.add(subsys_06_06);
var subsys_06_07 = new WebFXTreeItem('�̵����', "javascript:navigate('../zhifawuliu/storemanager/operate/checkbill_list.htm')");
subsys_06.add(subsys_06_07);
var subsys_06_08 = new WebFXTreeItem('װж�Ǽ�', "javascript:navigate('../zhifawuliu/storemanager/operate/task_list.htm')");
subsys_06.add(subsys_06_08);
var subsys_06_09 = new WebFXTreeItem('ͳ�Ʊ���', "javascript:navigate('../zhifawuliu/storemanager/operate/report.htm')");
subsys_06.add(subsys_06_09);
var subsys_06_10 = new WebFXTreeItem('�����ʷѽ���', "javascript:navigate('../zhifawuliu/storemanager/operate/mngfee_list.htm')");
subsys_06.add(subsys_06_10);
var subsys_06_11 = new WebFXTreeItem('����ʷѽ���', "javascript:navigate('../zhifawuliu/storemanager/operate/percentfee_list.htm')");
subsys_06.add(subsys_06_11);
var subsys_06_12 = new WebFXTreeItem('����ƻ�����', "javascript:navigate('../zhifawuliu/storemanager/operate/xiamen_outplan_list.htm')");
subsys_06.add(subsys_06_12);


var subsys_06_13 = new WebFXTreeItem('�������Ϲ���', "javascript:navigate('')");
subsys_06.add(subsys_06_13);
var subsys_06_13_01 = new WebFXTreeItem('�ֿ���Ϣ����', "javascript:navigate('../zhifawuliu/storemanager/basedata/storemap_list.htm')");
subsys_06_13.add(subsys_06_13_01);
var subsys_06_13_02 = new WebFXTreeItem('�泵����', "javascript:navigate('../zhifawuliu/storemanager/basedata/forkvehicle_list.htm')");
subsys_06_13.add(subsys_06_13_02);
var subsys_06_13_03 = new WebFXTreeItem('��Ʒ��ȫ������', "javascript:navigate('../zhifawuliu/storemanager/basedata/quantitysafety_list.htm')");
subsys_06_13.add(subsys_06_13_03);
var subsys_06_13_04 = new WebFXTreeItem('����������', "javascript:navigate('../zhifawuliu/storemanager/basedata/outrule_list.htm')");
subsys_06_13.add(subsys_06_13_04);
var subsys_06_13_05 = new WebFXTreeItem('�̵����ѹ������', "javascript:navigate('../zhifawuliu/storemanager/basedata/checkrule_list.htm')");
subsys_06_13.add(subsys_06_13_05);
var subsys_06_13_06 = new WebFXTreeItem('��ɱ�������', "javascript:navigate('../zhifawuliu/storemanager/basedata/percentagerule_list.htm')");
subsys_06_13.add(subsys_06_13_06);
var subsys_06_13_07 = new WebFXTreeItem('��ɵ��۹���', "javascript:navigate('../zhifawuliu/storemanager/basedata/pricerule_list.htm')");
subsys_06_13.add(subsys_06_13_07);



//--------------------------------------------------------------------------------
var subsys_07 = new WebFXTreeItem('��������', "javascript:navigate('')");
root.add(subsys_07);

var subsys_07_01 = new WebFXTreeItem('�ƶ��ƻ�', "javascript:navigate('../zhifawuliu/reDone/reDone_list.htm')");
subsys_07.add(subsys_07_01);

var subsys_07_02 = new WebFXTreeItem('������ҵ', "javascript:navigate('../zhifawuliu/reDone/reDone_include_list.htm')");
subsys_07.add(subsys_07_02);


var subsys_07_04 = new WebFXTreeItem('��ѯͳ��', "javascript:navigate('')");
subsys_07.add(subsys_07_04);
var subsys_07_04_01 = new WebFXTreeItem('������ˮ��', "javascript:navigate('../zhifawuliu/reDone/reDone_flow_tb.htm')");
subsys_07_04.add(subsys_07_04_01);
var subsys_07_04_02 = new WebFXTreeItem('ʵ�ʿ���', "javascript:navigate('../zhifawuliu/reDone/reDone_kucun.htm')");
subsys_07_04.add(subsys_07_04_02);
var subsys_07_04_03 = new WebFXTreeItem('�»��ܱ�', "javascript:navigate('../zhifawuliu/reDone/reDone_huizong.htm')");
subsys_07_04.add(subsys_07_04_03);
var subsys_07_04_04 = new WebFXTreeItem('�����嵥', "javascript:navigate('../zhifawuliu/reDone/reDone_wuliao.htm')");
subsys_07_04.add(subsys_07_04_04);

//--------------------------------------------------------------------------------
var subsys_08 = new WebFXTreeItem('�������', "javascript:navigate('')");
root.add(subsys_08);

var subsys_08_01 = new WebFXTreeItem('֧��������', "javascript:navigate('../zhifawuliu/balancemanager/payout_auditing_list.htm')");
subsys_08.add(subsys_08_01);

var subsys_08_02 = new WebFXTreeItem('����������', "javascript:navigate('../zhifawuliu/balancemanager/income_auditing_list.htm')");
subsys_08.add(subsys_08_02);

var subsys_08_02 = new WebFXTreeItem('֧���������', "javascript:navigate('../zhifawuliu/balancemanager/totalpayout_auditing_list.htm')");
subsys_08.add(subsys_08_02);

var subsys_08_02 = new WebFXTreeItem('�ڲ�����', "javascript:navigate('../zhifawuliu/balancemanager/inside_balance_list.htm')");
subsys_08.add(subsys_08_02);

var subsys_08_10 = new WebFXTreeItem('�������', "javascript:navigate('../zhifawuliu/balancemanager/adjust.htm')");
subsys_08.add(subsys_08_10);

var subsys_08_07 = new WebFXTreeItem('��ʷ�۸��ѯ', "javascript:navigate('../zhifawuliu/balancemanager/history_list.htm')");
subsys_08.add(subsys_08_07);

var subsys_08_08 = new WebFXTreeItem('�ɱ��۸����', "javascript:navigate('../zhifawuliu/balancemanager/cost_list.htm')");
subsys_08.add(subsys_08_08);
//--------------------------------------------------------------------------------
var subsys_09 = new WebFXTreeItem('�������', "javascript:navigate('')");
root.add(subsys_09);

//var subsys_09_01 = new WebFXTreeItem('�������ȷ��', "javascript:navigate('../zhifawuliu/financemanager/income_confirm_list.htm')");
//subsys_09.add(subsys_09_01);

//var subsys_09_02 = new WebFXTreeItem('֧������ȷ��', "javascript:navigate('../zhifawuliu/financemanager/payout_confirm_list.htm')");
//subsys_09.add(subsys_09_02);

var subsys_09_01 = new WebFXTreeItem('������ҵ', "javascript:navigate('../zhifawuliu/financemanager/confirm_list.htm')");
subsys_09.add(subsys_09_01);

//--------------------------------------------------------------------------------
var subsys_10 = new WebFXTreeItem('��Ӫ����', "javascript:navigate('')");
root.add(subsys_10);
//--------------------------------------------------------------------------------
//var subsys_11 = new WebFXTreeItem('���칤��', "javascript:navigate('')");
//root.add(subsys_11);
//--------------------------------------------------------------------------------
var subsys_12 = new WebFXTreeItem('�ۺϹ���', "javascript:navigate('')");
root.add(subsys_12);

//var subsys_12_01 = new WebFXTreeItem('��ϵͳ����(��)', "javascript:navigate('../zhifawuliu/configmanager/subsystem_list.htm')");
//subsys_12.add(subsys_12_01);

var subsys_12_02 = new WebFXTreeItem('ģ�����', "javascript:navigate('../zhifawuliu/configmanager/module_list.htm')");
subsys_12.add(subsys_12_02);

var subsys_12_03 = new WebFXTreeItem('��ɫ����', "javascript:navigate('../zhifawuliu/configmanager/role_list.htm')");
subsys_12.add(subsys_12_03);

var subsys_12_04 = new WebFXTreeItem('���Ź���', "javascript:navigate('../zhifawuliu/configmanager/organ_list.htm')");
subsys_12.add(subsys_12_04);

var subsys_12_05 = new WebFXTreeItem('�û�����', "javascript:navigate('../zhifawuliu/configmanager/user_list.htm')");
subsys_12.add(subsys_12_05);

var subsys_12_06 = new WebFXTreeItem('��λ����', "javascript:navigate('../zhifawuliu/configmanager/post_list.htm')");
subsys_12.add(subsys_12_06);

var subsys_12_07 = new WebFXTreeItem('ϵͳ��������', "javascript:navigate('../zhifawuliu/configmanager/param_list.htm')");
subsys_12.add(subsys_12_07);

var subsys_12_08 = new WebFXTreeItem('ϵͳ��־��ѯ', "javascript:navigate('../zhifawuliu/configmanager/log_list.htm')");
subsys_12.add(subsys_12_08);

var subsys_12_09 = new WebFXTreeItem('�ͻ����̼����Ϲ���', "javascript:navigate('../zhifawuliu/configmanager/cust_list.htm')");
subsys_12.add(subsys_12_09);

var subsys_12_10 = new WebFXTreeItem('����������Ϲ���', "javascript:navigate('../zhifawuliu/configmanager/partner_list.htm')");
subsys_12.add(subsys_12_10);

var subsys_12_11 = new WebFXTreeItem('��Ʒ���Ϲ���', "javascript:navigate('../zhifawuliu/configmanager/goods_list.htm')");
subsys_12.add(subsys_12_11);

var subsys_12_12 = new WebFXTreeItem('��Ʒ��λ����', "javascript:navigate('../zhifawuliu/configmanager/goodsunit_list.htm')");
subsys_12.add(subsys_12_12);

var subsys_12_13 = new WebFXTreeItem('����������ɷ��ù���', "javascript:navigate('../zhifawuliu/configmanager/scorefee_list.htm')");
subsys_12.add(subsys_12_13);


document.write(root);
}
