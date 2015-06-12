-- MySQL dump 10.13  Distrib 5.6.14, for osx10.7 (i386)
--
-- Host: localhost    Database: sese
-- ------------------------------------------------------
-- Server version	5.6.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `title` varchar(100) NOT NULL,
  `professor` varchar(45) NOT NULL,
  `code` varchar(45) NOT NULL,
  `credits` int(11) NOT NULL,
  `department` varchar(45) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET utf8 collate utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('software engineering','scott lee','22071',4,'computer science&engineering'),('Information Retrieval','kim young hoon','22079',3,'computer science&engineering'),('principles of programming languages','doh kyung goo','22081',3,'computer science&engineering'),('International business startup and Marketing','baek shang hyun','22233',3,'Business and Economics'),('English Communication','David C. Rogers','22553',2,'computer science&engineering'),('Operating Systems','kang kyung tae','22583',3,'computer science&engineering'),('data base','lee dong ho','22589',4,'computer science&engineering'),('Computer Architecture','park sung joo','22612',3,'computer science&engineering');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evaluation`
--

DROP TABLE IF EXISTS `evaluation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evaluation` (
  `email` varchar(50) NOT NULL,
  `code` varchar(45) NOT NULL,
  `year` int(11) NOT NULL,
  `semester` int(11) NOT NULL,
  `fun` int(11) DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  `homework` int(11) DEFAULT NULL,
  `difficulty` int(11) DEFAULT NULL,
  `benefit` int(11) DEFAULT NULL,
  `teamplay` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `inputdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`,`code`,`year`,`semester`),
  KEY `code_idx` (`code`),
  CONSTRAINT `code` FOREIGN KEY (`code`) REFERENCES `course` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `email` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET utf8 collate utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluation`
--

LOCK TABLES `evaluation` WRITE;
/*!40000 ALTER TABLE `evaluation` DISABLE KEYS */;
INSERT INTO `evaluation` VALUES ('espy0117@gmail.com','22071',2014,1,4,2,2,3,3,5,'이 수업 정말로 좋아요!! 짱짱맨','2015-06-12 16:36:18'),('espy0117@gmail.com','22079',2014,1,4,2,2,5,3,5,'수업 들으면서 정말 후회없고 교수님 너무 멋있어요','2015-06-12 16:36:18'),('jht@gmail.com','22071',2015,1,4,2,3,2,2,5,'이거 좀 짱인듯!','2015-06-12 16:36:18'),('kbs@gmail.com','22071',2015,1,3,2,3,1,5,5,'perfect! it is good~~','2015-06-12 16:36:18'),('kht@gmail.com','22071',2015,3,4,4,3,2,2,5,'I hate it!','2015-06-12 16:36:18'),('kht@gmail.com','22079',2015,3,4,4,3,4,2,5,'tire, too many team project and difficulty is hell','2015-06-12 16:36:18'),('leehw8808@gmail.com','22071',2015,1,3,3,5,5,3,5,NULL,'2015-06-12 16:36:18'),('lsy@gmail.com','22071',2015,1,5,5,5,2,5,5,'완전 어렵고 짜증나고ㅠㅠㅠ 미치겠구망','2015-06-12 16:36:18'),('red@gmail.com','22071',2015,1,5,5,5,1,5,5,'It is best course for CS','2015-06-12 16:36:18'),('red@gmail.com','22079',2015,5,1,2,5,4,2,5,'So easy to me','2015-06-12 16:36:18');
/*!40000 ALTER TABLE `evaluation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `total`
--

DROP TABLE IF EXISTS `total`;
/*!50001 DROP VIEW IF EXISTS `total`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `total` (
  `title` tinyint NOT NULL,
  `professor` tinyint NOT NULL,
  `credits` tinyint NOT NULL,
  `code` tinyint NOT NULL,
  `avg(fun)` tinyint NOT NULL,
  `avg(grade)` tinyint NOT NULL,
  `avg(benefit)` tinyint NOT NULL,
  `avg(homework)` tinyint NOT NULL,
  `avg(difficulty)` tinyint NOT NULL,
  `avg(teamplay)` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `email` varchar(50) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `studentid` int(11) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET utf8 collate utf8_general_ci;;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('espy0117@gmail.com','Kim Hyun tae',2009037023,'robot'),('jht@gmail.com','Jeon Hyun tae',2007037777,'jht'),('kbs@gmail.com','Kang Byoung sue',2012037778,'kbs'),('kht@gmail.com','Kim Hyun tae',2009037023,'kht'),('leehw8808@gmail.com','Lee Hyung Woo',2007036756,'abc123'),('lsy@gmail.com','Lee Seung yeon',2012036923,'lsy'),('red@gmail.com','Shin Dong hwan',2012037777,'sdh');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `total`
--

/*!50001 DROP TABLE IF EXISTS `total`*/;
/*!50001 DROP VIEW IF EXISTS `total`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`softcone`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `total` AS select `course`.`title` AS `title`,`course`.`professor` AS `professor`,`course`.`credits` AS `credits`,`course`.`code` AS `code`,avg(`evaluation`.`fun`) AS `avg(fun)`,avg(`evaluation`.`grade`) AS `avg(grade)`,avg(`evaluation`.`benefit`) AS `avg(benefit)`,avg(`evaluation`.`homework`) AS `avg(homework)`,avg(`evaluation`.`difficulty`) AS `avg(difficulty)`,avg(`evaluation`.`teamplay`) AS `avg(teamplay)` from (`course` join `evaluation` on((`course`.`code` = `evaluation`.`code`))) group by `course`.`code` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-13  1:37:35
