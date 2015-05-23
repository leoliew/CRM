/*
Navicat MySQL Data Transfer

Source Server         : myConnection
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : crm

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2013-02-06 21:10:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_dept`
-- ----------------------------
DROP TABLE IF EXISTS `t_dept`;
CREATE TABLE `t_dept` (
  `DEPT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `DEPT_CODE` varchar(20) DEFAULT NULL,
  `DEPT_NAME` varchar(30) DEFAULT NULL,
  `UPPER_DEPT_ID` int(11) DEFAULT NULL,
  `CHARGE_MAN` varchar(20) DEFAULT NULL,
  `LINK_PHONE` varchar(20) DEFAULT NULL,
  `EMAIL` varchar(30) DEFAULT NULL,
  `FAX` varchar(20) DEFAULT NULL,
  `ADDRESS` varchar(100) DEFAULT NULL,
  `COUNTRY` varchar(20) DEFAULT NULL,
  `PROVINCE` varchar(20) DEFAULT NULL,
  `CITY` varchar(20) DEFAULT NULL,
  `COUNTY` varchar(20) DEFAULT NULL,
  `REMARK` varchar(100) DEFAULT NULL,
  `BEINTEGERTO` varchar(20) DEFAULT NULL,
  `OUTDEPTCODE` varchar(20) DEFAULT NULL,
  `ANCESTOR` varchar(200) DEFAULT NULL,
  `town` varchar(20) DEFAULT NULL,
  `BRANCH_CODE` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`DEPT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_dept
-- ----------------------------
INSERT INTO `t_dept` VALUES ('1', '01', '平台运营', '1', '--', '-', '--', null, '--', '1', '100', '1000', '10159', '', '1', null, ',0000000001,0000000246,0000000001,0000000001,0000000001', '', 'PT');
INSERT INTO `t_dept` VALUES ('2', '01', 'IT部门', '1', '--', '--', '--', null, '--', '1', '100', '100', '3434', null, '1', null, null, null, null);
INSERT INTO `t_dept` VALUES ('3', 'adfsadfdsaf', 'sadfsadfsa', null, 'dsafsafsda', '122222', 'eaewre', null, 'sdfasd', null, null, null, null, 'dsfsd', null, null, null, null, null);
INSERT INTO `t_dept` VALUES ('4', 'adfsadfdsaf', 'sadfsadfsa2', null, 'dsafsafsda', 'ssss', 'dfsdfsdf', null, 'sdfasd', null, null, null, null, 'dsfsd', null, null, null, null, null);
INSERT INTO `t_dept` VALUES ('5', 'pppp', 'sadfsadfsa', null, 'dsafsafsda', 'sssss', '120392039', null, 'ssssssssss', null, null, null, null, 'dsfsd111', null, null, null, null, null);
INSERT INTO `t_dept` VALUES ('7', 'asdf', 'asdf', null, 'sadf', '122', null, null, 'safsd', null, null, null, null, 'dsf', null, null, null, null, null);

-- ----------------------------
-- Table structure for `t_log`
-- ----------------------------
DROP TABLE IF EXISTS `t_log`;
CREATE TABLE `t_log` (
  `LOG_ID` bigint(10) NOT NULL AUTO_INCREMENT,
  `LOG_TYPE` char(1) CHARACTER SET gb2312 DEFAULT NULL,
  `USER_ID` int(10) DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `LOGDES` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`LOG_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_log
-- ----------------------------
INSERT INTO `t_log` VALUES ('87', '0', '1', '2011-11-18 15:12:46', 'admin成功登录系统1');
INSERT INTO `t_log` VALUES ('88', '1', '1', '2011-11-19 16:11:39', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('89', '1', '1', '2011-11-19 16:12:22', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('90', '1', '1', '2011-11-22 09:49:18', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('91', '1', '1', '2011-11-22 10:00:35', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('92', '1', '1', '2011-11-22 10:06:14', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('93', '1', '1', '2011-11-22 10:09:11', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('94', '1', '1', '2011-11-22 10:25:30', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('95', '1', '1', '2011-11-22 10:33:48', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('96', '1', '1', '2011-11-22 10:36:41', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('97', '1', '1', '2011-11-22 10:39:36', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('98', '1', '1', '2011-11-22 13:39:44', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('99', '1', '1', '2011-11-22 13:49:52', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('100', '1', '1', '2011-11-22 13:52:24', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('101', '1', '1', '2011-11-22 14:06:31', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('102', '1', '1', '2011-11-22 14:16:19', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('103', '1', '1', '2011-11-22 14:20:09', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('104', '1', '1', '2011-11-22 14:23:00', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('105', '1', '1', '2011-11-22 14:31:17', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('106', '1', '1', '2011-11-22 14:39:24', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('107', '1', '1', '2011-11-22 14:42:05', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('108', '1', '1', '2011-11-22 14:50:42', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('109', '1', '1', '2011-11-22 15:33:08', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('110', '1', '1', '2011-11-22 15:36:23', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('111', '1', '1', '2011-11-22 16:12:04', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('112', '1', '1', '2011-11-22 16:19:31', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('113', '1', '1', '2011-11-22 16:27:20', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('114', '1', '1', '2011-11-22 16:29:22', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('115', '1', '1', '2011-11-22 16:32:12', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('116', '1', '1', '2011-11-22 16:34:13', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('117', '1', '1', '2011-11-22 16:35:11', 'admin 成功登录系统！');
INSERT INTO `t_log` VALUES ('118', '0', '1', '2011-11-23 09:58:47', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('119', '0', '1', '2011-11-23 10:07:44', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('120', '0', '1', '2011-11-23 10:16:46', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('121', '0', '1', '2011-11-23 10:21:45', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('122', '0', '1', '2011-11-23 10:28:05', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('123', '0', '1', '2011-11-23 10:41:02', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('124', '0', '1', '2011-11-23 10:43:36', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('125', '0', '1', '2011-11-23 10:48:25', 'admin成功登录系统!');
INSERT INTO `t_log` VALUES ('126', '0', '1', '2011-11-23 10:50:22', 'admin成功登录系统!');

-- ----------------------------
-- Table structure for `t_module`
-- ----------------------------
DROP TABLE IF EXISTS `t_module`;
CREATE TABLE `t_module` (
  `MODULE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `MODULE_CODE` varchar(20) DEFAULT NULL,
  `MODULE_NAME` varchar(30) DEFAULT NULL,
  `MENU_FLAG` varchar(1) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `UPPER_MODULE_ID` int(11) DEFAULT NULL,
  `REMARK` varchar(100) DEFAULT NULL,
  `MODULELEVEL` int(11) DEFAULT NULL,
  `ANCESTOR` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`MODULE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_module
-- ----------------------------
INSERT INTO `t_module` VALUES ('2', '60', '综合管理', '1', '', '0', '--', null, ',0000000002');
INSERT INTO `t_module` VALUES ('3', '01', '模块管理', '1', 'moduleManagerAction!list.action', '2', '0000000002', null, '0000000003\r\n0000000003\r\n0000000003');
INSERT INTO `t_module` VALUES ('5', '02', '角色管理', '1', 'roleManagerAction!list.action', '2', null, null, ',0000000002,0000000005');
INSERT INTO `t_module` VALUES ('6', '04', '用户管理', '1', 'userManagerAction!list.action', '2', '', null, ',0000000002,0000000006');
INSERT INTO `t_module` VALUES ('7', '03', '部门管理', '1', 'organManagerAction!list.action', '2', null, null, ',0000000002,0000000007');
INSERT INTO `t_module` VALUES ('9', '05', '测试模块', '0', 'moduleManagerAction!list.action', '3', 'moduleManagerAction!list.action，，，，测试模块，，05', null, null);
INSERT INTO `t_module` VALUES ('10', 'sdfsdf', 'asdfsaf', '1', 'adfasdf', '6', '					  	sdafasd\r\n					  ', null, null);
INSERT INTO `t_module` VALUES ('11', 'sfsdafsda', 'asdfasdf', '0', 'sdafasdf', '0', 'dsafasdf', null, null);
INSERT INTO `t_module` VALUES ('12', 'ewwerw', 'rerwerew', '1', 'rwerw', '0', 'rwerwe', null, null);
INSERT INTO `t_module` VALUES ('13', 'fdsfds', 'sdsadf', '1', 'sadfsda', '5', '					  	asdf\r\n					  ', null, null);
INSERT INTO `t_module` VALUES ('14', 'dfsad', 'sdfsd', '1', 'dsfsda', '0', 'sdfsa', null, null);
INSERT INTO `t_module` VALUES ('15', 'dsfs', '������', '1', 'sdfas', '5', 'asdfds', null, null);

-- ----------------------------
-- Table structure for `t_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_role`;
CREATE TABLE `t_role` (
  `ROLE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_NAME` varchar(30) DEFAULT NULL,
  `ROLE_DESC` varchar(100) DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL,
  PRIMARY KEY (`ROLE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role
-- ----------------------------
INSERT INTO `t_role` VALUES ('1', '系统管理员', '系统管理员', '1');
INSERT INTO `t_role` VALUES ('2', '普通用户', '普通用户', '1');
INSERT INTO `t_role` VALUES ('3', 'adfas', 'sfdf', '0');
INSERT INTO `t_role` VALUES ('4', 'asdfsdaf', 'asdfasd', '1');
INSERT INTO `t_role` VALUES ('5', 'kkkkkkk', 'kkkkkkkk', '1');
INSERT INTO `t_role` VALUES ('6', 'afa', 'asdfsadfas', '1');
INSERT INTO `t_role` VALUES ('7', 'dddddd', 'dddddd', '1');
INSERT INTO `t_role` VALUES ('8', 'wer', 'rewrew', '1');

-- ----------------------------
-- Table structure for `t_role_module`
-- ----------------------------
DROP TABLE IF EXISTS `t_role_module`;
CREATE TABLE `t_role_module` (
  `module_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`role_id`,`module_id`),
  KEY `FKA5B50A041779C728` (`role_id`),
  KEY `FKA5B50A04A713E7E8` (`module_id`),
  CONSTRAINT `FKA5B50A041779C728` FOREIGN KEY (`role_id`) REFERENCES `t_role` (`ROLE_ID`),
  CONSTRAINT `FKA5B50A04A713E7E8` FOREIGN KEY (`module_id`) REFERENCES `t_module` (`MODULE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_role_module
-- ----------------------------
INSERT INTO `t_role_module` VALUES ('2', '1');
INSERT INTO `t_role_module` VALUES ('3', '1');
INSERT INTO `t_role_module` VALUES ('5', '1');
INSERT INTO `t_role_module` VALUES ('6', '1');
INSERT INTO `t_role_module` VALUES ('7', '1');
INSERT INTO `t_role_module` VALUES ('7', '2');
INSERT INTO `t_role_module` VALUES ('6', '3');
INSERT INTO `t_role_module` VALUES ('2', '8');
INSERT INTO `t_role_module` VALUES ('3', '8');
INSERT INTO `t_role_module` VALUES ('5', '8');
INSERT INTO `t_role_module` VALUES ('6', '8');
INSERT INTO `t_role_module` VALUES ('7', '8');
INSERT INTO `t_role_module` VALUES ('9', '8');
INSERT INTO `t_role_module` VALUES ('11', '8');
INSERT INTO `t_role_module` VALUES ('12', '8');


-- ----------------------------
-- Table structure for `t_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `t_user_role`;
CREATE TABLE `t_user_role` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`role_id`,`user_id`),
  KEY `FK37884BD91779C728` (`role_id`),
  KEY `FK37884BD9BCA48B08` (`user_id`),
  CONSTRAINT `FK37884BD91779C728` FOREIGN KEY (`role_id`) REFERENCES `t_role` (`ROLE_ID`),
  CONSTRAINT `FK37884BD9BCA48B08` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_role
-- ----------------------------
INSERT INTO `t_user_role` VALUES ('1', '1');
INSERT INTO `t_user_role` VALUES ('4', '1');
INSERT INTO `t_user_role` VALUES ('1', '2');
INSERT INTO `t_user_role` VALUES ('2', '2');
INSERT INTO `t_user_role` VALUES ('4', '2');
INSERT INTO `t_user_role` VALUES ('26', '2');


-- ----------------------------
-- Table structure for `t_user`
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `dept_id` int(11) DEFAULT NULL,
  `WORK_NO` varchar(50) DEFAULT NULL,
  `LOGIN_NAME` varchar(30) DEFAULT NULL,
  `SEX` varchar(1) DEFAULT NULL,
  `PASSWORD` varchar(40) DEFAULT NULL,
  `MOBILE_PHONE` varchar(20) DEFAULT NULL,
  `WORK_PHONE` varchar(20) DEFAULT NULL,
  `EMAIL` varchar(30) DEFAULT NULL,
  `BIRTHDATE` varchar(10) DEFAULT NULL,
  `NAME` varchar(20) DEFAULT NULL,
  `POST` varchar(20) DEFAULT NULL,
  `FIRSTMODULE` varchar(200) DEFAULT NULL,
  `REMARK` varchar(100) DEFAULT NULL,
  `CREATEMENU` varchar(1) DEFAULT NULL,
  `ISUSER` varchar(1) DEFAULT NULL,
  `valid_flag` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`),
  KEY `FKA4FF6AFC220AC0C8` (`dept_id`),
  CONSTRAINT `FKA4FF6AFC220AC0C8` FOREIGN KEY (`dept_id`) REFERENCES `t_dept` (`DEPT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', '1', '01', 'admin', '1', 'admin', '', '', '', '', '超级管理员', '1;', '3', '', '2', '1', '1');
INSERT INTO `t_user` VALUES ('2', '1', '02', 'sa', '1', 'sa', null, null, null, null, '普通用户', '2', '3', null, '2', '1', '1');
INSERT INTO `t_user` VALUES ('3', '2', '03', 'dsa', '1', 'ewq', '23432432', '1243243', '109@qq.com', null, '扩散到计费看到就', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('4', '1', '04', 'dsfdsa', '0', 'fdasfdsa', 'sssss', 'sssss', 'sssss', null, 'sdfadsasdas', null, null, 'ssssssassdf', null, null, null);
INSERT INTO `t_user` VALUES ('6', '1', '06', '232323', '1', '123', '1382564574', '020-12345678', 'gfdgf@dsa.com', null, '5435432', null, null, 'rtrewtewr54325432', null, null, null);
INSERT INTO `t_user` VALUES ('7', '1', '07', 'fadsfsd', '1', '123', '654654', '5342534', '', null, 'fadsfsd', null, null, '??????', null, null, null);
INSERT INTO `t_user` VALUES ('8', '1', '08', 'rewqrqew', '1', '321', '534534', '5465435', '', null, 'rewqrqew', null, null, 'add user', null, null, null);
INSERT INTO `t_user` VALUES ('9', '1', '09', 'fdsfsd', '1', '222', '', '', '', null, 'fdsfsd', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('10', '1', '10', 'ss', '0', 'ss', '878784545', '5455555', 'ssssssssssaaaaaaaa', null, 'sseeeee', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('11', null, null, 'ssa', null, 'ssa', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `t_user` VALUES ('14', '1', '020', 'sdfdsf', '1', '1', '', '', '', null, 'sdfsdas', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('15', '1', '020', 'sdfdsf', '1', '1', '', '', '', null, 'sdfsdas', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('16', '1', 'sdfdfdfs', 'dfadsfds', '1', '1', '', '21555', '', null, 'dadfd', null, null, 'jahah', null, null, null);
INSERT INTO `t_user` VALUES ('17', '1', 'sdfds', 'dsfds', '1', '1', 'sa', 'adf', '', null, 'adfdf', null, null, 'sdfds', null, null, null);
INSERT INTO `t_user` VALUES ('18', '1', '011', 'dsafds', '0', '1', '545', '1212', '', null, 'sadfd', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('19', '2', '77', 'sdafsd', '1', '1', 'dsf', 'dfsas', 'fsdf', null, 'sdfasd', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('20', '1', '8', 'adsf', '1', 'q', '', '', '', null, 'adsfsd', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('21', '1', '88', 'sdfa', '1', '1', '', 'df', '', null, 'dasfds', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('22', '1', '055', 'adsf', '1', '1', '', '', '', null, 'adf', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('23', '2', '55', 'adsf', '1', '1', '', '', '', null, 'adf', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('24', '1', '44', 'sadf', '0', '1', 'adf', 'df', 'df', null, 'adsf', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('25', '1', '1', 'dsfda', '1', '1', '', '', '', null, 'sadf', null, null, '', null, null, null);
INSERT INTO `t_user` VALUES ('26', '2', 'kkkkkkkkkkk', 'kk', '0', 'kk', '111', '1111', '111', null, 'kkkkkkkkk', null, null, '1111', null, null, null);
INSERT INTO `t_user` VALUES ('27', '2', 'dsfd', 'sdfdf', '0', '123', '99999999', '12233', '', null, 'dsfs', null, null, '', null, null, null);

