/*
 Navicat Premium Data Transfer

 Source Server         : nest-mysql-graphql
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : nest-mysql-graphql

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 23/03/2023 23:33:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6) COMMENT '更新时间',
  `username` varchar(255) NOT NULL DEFAULT '' COMMENT '用户名',
  `email` varchar(255) DEFAULT '' COMMENT '邮件',
  `password` varchar(255) DEFAULT '' COMMENT '密码',
  `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (13, '2023-03-23 22:48:32.000000', 'wujian2', 'wujian2@qq.com', '12345672', '2023-03-23 22:37:55.304762');
INSERT INTO `user` VALUES (15, '2023-03-23 22:42:37.334606', 'wujian1', 'wujian1@qq.com', '1234567', '2023-03-23 22:42:37.334606');
INSERT INTO `user` VALUES (16, '2023-03-23 22:43:04.506525', 'wujian', 'wujian@qq.com', '1234567', '2023-03-23 22:43:04.506525');
INSERT INTO `user` VALUES (17, '2023-03-23 23:02:42.338443', 'wujian4', 'wujian4@qq.com', '1234567', '2023-03-23 23:02:42.338443');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
