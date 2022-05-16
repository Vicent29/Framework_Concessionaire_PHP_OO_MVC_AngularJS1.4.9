-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: concesionario
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `name_brand` varchar(25) NOT NULL,
  `img_brand` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`name_brand`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES ('Audi','views/img/brand/audi.png'),('BMW','views/img/brand/bmw.png'),('Chevrolet','views/img/brand/chevrolet.png'),('Citroen','views/img/brand/citroen.png'),('Dacia','views/img/brand/dacia.png'),('Ferrari','views/img/brand/ferrari.png'),('Fiat','views/img/brand/fiat.png'),('Ford','views/img/brand/ford.png'),('Honda','views/img/brand/honda.png'),('Hyundai','views/img/brand/hyundai.png'),('Infiniti','views/img/brand/infiniti.png'),('Jaguar','views/img/brand/jaguar.png'),('Lamborghini','views/img/brand/lamborghini.png'),('Land Rover','views/img/brand/land_rover.png'),('Lexus','views/img/brand/lexus.png'),('Mazda','views/img/brand/mazda.png'),('Mercedes','views/img/brand/mercedes.png'),('Mini','views/img/brand/mini.png'),('Nissan','views/img/brand/nissan.png'),('Opel','views/img/brand/opel.png'),('Peugot','views/img/brand/peugot.png'),('Porsche','views/img/brand/porche.png'),('Renault','views/img/brand/renault.png'),('Seat','views/img/brand/seat.png'),('Suabru','views/img/brand/subaru.png'),('Suzuki','views/img/brand/suzuki.png'),('Tesla','views/img/brand/tesla.png'),('Volkswagen','views/img/brand/volkswage.png'),('Volvo','views/img/brand/volvo.png');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car` (
  `id_car` int(11) NOT NULL AUTO_INCREMENT,
  `vin_num` varchar(18) DEFAULT NULL,
  `num_plate` varchar(8) DEFAULT NULL,
  `model` int(25) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `Km` int(8) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `num_doors` varchar(20) DEFAULT NULL,
  `motor` varchar(20) DEFAULT NULL,
  `gear_shift` varchar(20) DEFAULT NULL,
  `matricualtion_date` varchar(10) DEFAULT NULL,
  `price` int(8) DEFAULT NULL,
  `img_car` varchar(300) NOT NULL,
  `lat` varchar(50) NOT NULL,
  `lon` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `count` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_car`),
  UNIQUE KEY `vin_num` (`vin_num`),
  UNIQUE KEY `num_plate` (`num_plate`),
  KEY `model` (`model`),
  KEY `category` (`category`),
  KEY `car_ibfk_3` (`motor`),
  CONSTRAINT `car_ibfk_1` FOREIGN KEY (`model`) REFERENCES `model` (`id_model`),
  CONSTRAINT `car_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`id_cat`),
  CONSTRAINT `car_ibfk_3` FOREIGN KEY (`motor`) REFERENCES `type_motor` (`cod_tmotor`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` VALUES (1,'ALOEGLSEO34782341','1393ABC',1,3,1500,'White','5','A','Automatic','10/01/2015',15000,'views/img/cars/car1.1.jpg','39.4697065','-0.3763353','Valencia',74),(2,'BOOEGLSEO34122342','2393HJC',2,2,35000,'Blue','5','G','Automatic','12/05/2017',40000,'views/img/cars/car2.1.jpg','38.8220593','-0.6063927','Ontinyent',2),(3,'CEOEGLSEO34742343','3393NRO',3,5,42000,'Red','3','E','Automatic','23/07/2016',22678,'views/img/cars/car3.1.jpg','40.2518568','-0.0615051','Castellón',0),(4,'SUSEGLSEO12782344','4393LOL',4,6,1,'White','5','A','Automatic','09/08/2019',11230,'views/img/cars/car4.1.jpg','40.4167047','-3.7035825','Madrid',21),(5,'ZLOEGLSEO34782345','5393ARA',5,1,5500,'Grey','5','H','Automatic','21/11/2020',55000,'views/img/cars/car5.1.jpg','37.9923795','-1.1305431','Murcia',2),(6,'NLOEGLSEO54782347','7393YAC',7,3,3100,'White','5','G','Automatic','14/12/2015',32000,'views/img/cars/car6.1.jpg','41.1172364','1.2546057','Tarragona',5),(7,'SOOEGLSEO34712348','8393JBL',8,2,27879,'Black','5','H','Automatic','19/10/2016',80000,'views/img/cars/car7.1.jpg','38.9950921','-1.8559154','Albacete',3),(8,'HTOEGLSEO34782349','9393SOS',9,1,32765,'Grey','3','G','Automatic','05/07/2020',21000,'views/img/cars/car8.1.jpg','41.6521342','-0.8809428','Zaragoza',1),(9,'RMAEGLSEO34782340','0393CAR',10,6,1,'White','5','H','Automatic','30/09/2019',35000,'views/img/cars/car9.1.jpg','42.343926','-3.696977','Burgos',1),(10,'JKLEGLSEO34782341','1093ABC',6,3,1500,'Blue','5','A','Manual','10/01/2015',17000,'views/img/cars/car10.1.jpg','43.1595664','-4.0878382','Cantabria',16),(11,'POLEGLSEO34122342','1193HJC',11,2,35000,'Orange','5','G','Manual','12/05/2017',40000,'views/img/cars/car11.1.jpg','42.8804219','-8.5458608','Santiago',17),(12,'RTYEGLSEO34742343','1293NRO',12,5,42000,'Grey','3','E','Manual','23/07/2016',7678,'views/img/cars/car12.1.jpg','37.6019353','-0.9841152','Cartagena',4),(13,'ILWEGLSEO12782344','1393LOL',13,6,1,'Red','5','A','Automatic','09/08/2019',11230,'views/img/cars/car13.1.jpg','37.8845813','-4.7760138','Cordoba',11),(14,'PLNEGLSEO34782345','1493ARA',14,1,5500,'White','5','H','Automatic','21/11/2020',55000,'views/img/cars/car14.1.jpg','39.1748426','-6.1529891','Extremadura',1),(15,'RTVEGLSEO54782347','1593YAC',15,3,3000,'Brown','5','E','Automatic','14/12/2015',32000,'views/img/cars/car15.1.jpg','42.2814642','-2.482805','La Rioja',1),(16,'VEFEGLSEO34712348','1693JBL',16,2,27879,'White','5','H','Manual','19/10/2016',34000,'views/img/cars/car16.1.jpg','41.6521328','-4.728562','Valladolid',0),(17,'COCEGLSEO34782349','1793SOS',17,1,32765,'Orange','3','G','Manual','05/07/2020',21000,'views/img/cars/car17.1.jpg','43.2630018','-2.9350039','Bilbao',3),(18,'BVCEGLSEO34782340','1893CAR',18,6,1,'Blue','5','H','Automatic','30/09/2019',13040,'views/img/cars/car18.1.jpg','40.9651572','-5.6640182','Salamanca',7),(19,'NTCEGLSEO34782349','1993SOS',19,1,32765,'Brown','3','G','Manual','05/07/2020',17500,'views/img/cars/car19.1.jpg','38.7669181','-0.610892','Bocairent',6),(20,'KOPEGLSEO34782349','2093SOS',20,1,32765,'Black','3','G','Automatic','05/07/2020',16000,'views/img/cars/car20.1.jpg','39.4639546','-0.4293866','Xirivella',4);
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id_cat` int(11) NOT NULL AUTO_INCREMENT,
  `name_cat` varchar(25) NOT NULL,
  `img_cat` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_cat`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Km0','views/img/categories/km0.jpg'),(2,'Second Hand','views/img/categories/second_hand.jpg'),(3,'Renting','views/img/categories/renting.jpg'),(4,'Pre-Owned','views/img/categories/pre_ownded.jpeg'),(5,'Offer','views/img/categories/offer.jpg'),(6,'New','views/img/categories/new.jpg');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exceptions`
--

DROP TABLE IF EXISTS `exceptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exceptions` (
  `type_error` int(10) NOT NULL,
  `spot` varchar(100) NOT NULL,
  `current_date_time` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exceptions`
--

LOCK TABLES `exceptions` WRITE;
/*!40000 ALTER TABLE `exceptions` DISABLE KEYS */;
INSERT INTO `exceptions` VALUES (503,'Function ajxForSearch SHOP','2022-04-28 12:38:49'),(503,'Function ajxForSearch SHOP','2022-04-28 12:38:52'),(503,'Function ajxForSearch SHOP','2022-04-28 12:38:56'),(503,'Function ajxForSearch SHOP','2022-04-28 12:39:54'),(503,'Function ajxForSearch SHOP','2022-04-28 12:40:28'),(503,'Function ajxForSearch SHOP','2022-05-08 19:10:26'),(503,'Function ajxForSearch SHOP','2022-05-08 19:50:53'),(503,'Function ajxForSearch SHOP','2022-05-08 19:50:57'),(503,'Function ajxForSearch SHOP','2022-05-08 19:51:43');
/*!40000 ALTER TABLE `exceptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_cars`
--

DROP TABLE IF EXISTS `img_cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_cars` (
  `id_img` int(11) NOT NULL AUTO_INCREMENT,
  `id_car` int(11) DEFAULT NULL,
  `img_cars` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_img`),
  KEY `id_car` (`id_car`),
  CONSTRAINT `img_cars_ibfk_1` FOREIGN KEY (`id_car`) REFERENCES `car` (`id_car`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_cars`
--

LOCK TABLES `img_cars` WRITE;
/*!40000 ALTER TABLE `img_cars` DISABLE KEYS */;
INSERT INTO `img_cars` VALUES (1,1,'views/img/cars/car1.1.jpg'),(2,1,'views/img/cars/car1.2.jpg'),(3,1,'views/img/cars/car1.3.jpg'),(4,1,'views/img/cars/car1.4.jpg'),(5,2,'views/img/cars/car2.1.jpg'),(6,2,'views/img/cars/car2.2.jpg'),(7,2,'views/img/cars/car2.3.jpg'),(8,2,'views/img/cars/car2.4.jpg'),(9,3,'views/img/cars/car3.1.jpg'),(10,3,'views/img/cars/car3.2.jpg'),(11,3,'views/img/cars/car3.3.jpg'),(12,3,'views/img/cars/car3.4.jpg'),(13,4,'views/img/cars/car4.1.jpg'),(14,4,'views/img/cars/car4.2.jpg'),(15,4,'views/img/cars/car4.3.jpg'),(16,4,'views/img/cars/car4.4.jpg'),(17,5,'views/img/cars/car5.1.jpg'),(18,5,'views/img/cars/car5.2.jpg'),(19,5,'views/img/cars/car5.3.jpg'),(20,5,'views/img/cars/car5.4.jpg'),(21,6,'views/img/cars/car6.1.jpg'),(22,6,'views/img/cars/car6.2.jpg'),(23,6,'views/img/cars/car6.3.jpg'),(24,6,'views/img/cars/car6.4.jpg'),(25,7,'views/img/cars/car7.1.jpg'),(26,7,'views/img/cars/car7.2.jpg'),(27,7,'views/img/cars/car7.3.jpg'),(28,7,'views/img/cars/car7.4.jpg'),(29,8,'views/img/cars/car8.1.jpg'),(30,8,'views/img/cars/car8.2.jpg'),(31,8,'views/img/cars/car8.3.jpg'),(32,8,'views/img/cars/car8.4.jpg'),(33,9,'views/img/cars/car9.1.jpg'),(34,9,'views/img/cars/car9.2.jpg'),(35,9,'views/img/cars/car9.3.jpg'),(36,9,'views/img/cars/car9.4.jpg'),(37,10,'views/img/cars/car10.1.jpg'),(38,10,'views/img/cars/car10.2.jpg'),(39,10,'views/img/cars/car10.3.jpg'),(40,10,'views/img/cars/car10.4.jpg'),(41,11,'views/img/cars/car11.1.jpg'),(42,11,'views/img/cars/car11.2.jpg'),(43,11,'views/img/cars/car11.3.jpg'),(44,11,'views/img/cars/car11.4.jpg'),(45,12,'views/img/cars/car12.1.jpg'),(46,12,'views/img/cars/car12.2.jpg'),(47,12,'views/img/cars/car12.3.jpg'),(48,12,'views/img/cars/car12.4.jpg'),(49,13,'views/img/cars/car13.1.jpg'),(50,13,'views/img/cars/car13.2.jpg'),(51,13,'views/img/cars/car13.3.jpg'),(52,13,'views/img/cars/car13.4.jpg'),(53,14,'views/img/cars/car14.1.jpg'),(54,14,'views/img/cars/car14.2.jpg'),(55,14,'views/img/cars/car14.3.jpg'),(56,14,'views/img/cars/car14.4.jpg'),(57,15,'views/img/cars/car15.1.jpg'),(58,15,'views/img/cars/car15.2.jpg'),(59,15,'views/img/cars/car15.3.jpg'),(60,15,'views/img/cars/car15.4.jpg'),(61,16,'views/img/cars/car16.1.jpg'),(62,16,'views/img/cars/car16.2.jpg'),(63,16,'views/img/cars/car16.3.jpg'),(64,16,'views/img/cars/car16.4.jpg'),(65,17,'views/img/cars/car17.1.jpg'),(66,17,'views/img/cars/car17.2.jpg'),(67,17,'views/img/cars/car17.3.jpg'),(69,18,'views/img/cars/car18.1.jpg'),(70,18,'views/img/cars/car18.2.jpg'),(71,18,'views/img/cars/car18.3.jpg'),(72,18,'views/img/cars/car18.4.jpg'),(73,19,'views/img/cars/car19.1.jpg'),(74,19,'views/img/cars/car19.2.jpg'),(75,19,'views/img/cars/car19.3.jpg'),(76,19,'views/img/cars/car19.4.jpg'),(77,20,'views/img/cars/car20.1.jpg'),(78,20,'views/img/cars/car20.2.jpg'),(79,20,'views/img/cars/car20.3.jpg'),(80,20,'views/img/cars/car20.4.jpg');
/*!40000 ALTER TABLE `img_cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `id_like` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` varchar(30) NOT NULL,
  `id_car` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_like`),
  KEY `id_car` (`id_car`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`id_car`) REFERENCES `car` (`id_car`),
  CONSTRAINT `likes_ibfk_3` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (94,'13b871',1),(95,'13b871',10),(96,'13b871',11),(97,'13b871',17),(98,'13b871',7);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model`
--

DROP TABLE IF EXISTS `model`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `model` (
  `id_model` int(20) NOT NULL AUTO_INCREMENT,
  `name_model` varchar(25) DEFAULT NULL,
  `id_brand` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_model`),
  UNIQUE KEY `name_model` (`name_model`),
  KEY `id_brand` (`id_brand`),
  CONSTRAINT `model_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`name_brand`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model`
--

LOCK TABLES `model` WRITE;
/*!40000 ALTER TABLE `model` DISABLE KEYS */;
INSERT INTO `model` VALUES (1,'A1','Audi'),(2,'Q5','Audi'),(3,'TT','Audi'),(4,'A3','Audi'),(5,'A7','Audi'),(6,'Serie3','BMW'),(7,'x5','BMW'),(8,'x6','BMW'),(9,'Clase A','Mercedes'),(10,'Clase C','Mercedes'),(11,'Clase G','Mercedes'),(12,'GLE','Mercedes'),(13,'Leon','Seat'),(14,'Ibiza','Seat'),(15,'Tucson','Hyundai'),(16,'i30','Hyundai'),(17,'Ranger','Ford'),(18,'Focus','Ford'),(19,'Cooper','Mini'),(20,'Vitara','Suzuki');
/*!40000 ALTER TABLE `model` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_motor`
--

DROP TABLE IF EXISTS `type_motor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type_motor` (
  `cod_tmotor` varchar(10) NOT NULL,
  `name_tmotor` varchar(25) NOT NULL,
  `img_tmotor` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cod_tmotor`) USING BTREE,
  UNIQUE KEY `name_tmotor` (`name_tmotor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_motor`
--

LOCK TABLES `type_motor` WRITE;
/*!40000 ALTER TABLE `type_motor` DISABLE KEYS */;
INSERT INTO `type_motor` VALUES ('A','Adapted','views/img/type_cars/adapted.jpg'),('E','Electric','views/img/type_cars/electric.jpg'),('G','Gasoline','views/img/type_cars/gasoline.jpg'),('H','Hybrid','views/img/type_cars/hibrid.jpg');
/*!40000 ALTER TABLE `type_motor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` varchar(30) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `username` varchar(25) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `email_token` varchar(30) DEFAULT NULL,
  `type_user` varchar(50) DEFAULT NULL,
  `avatar` varchar(200) DEFAULT NULL,
  `provider` varchar(50) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('11111',0,'prueba','sdsdsdd','prueba@gmail.com','4d9528521175177583f9','client','dsdsadsadasd','prueba'),('13b871',1,'Carlos29','$2y$12$D7QXHqn7.NaUtz8iykbVteC6jX67YD8ysKQtWmrWPfWvpPidef.gS','carlos@gmail.com','b773d0deca4926912c8a','client','https://i.pravatar.cc/500?u=db1e0a3750e0399df3eeee808187d9b4','web-concesionaire'),('14',1,'Vicent29','$2y$12$qjen7QF.pQ4S6CLAR/WzuuuI1uvhSTpnK.lpNnaq0VUsX0EKKRXQi','vicentestevee2002@gmail.com','','admin','https://robohash.org/bcad65cbb7e72b2c3eb99b8f4a4d41ee','web-concesionaire'),('gYBf2vJHgKNp8FM7iI5A0wafYwq1',1,'VFM Free Music',NULL,'vfmfreemusic@gmail.com','ddb6bb710f6f2b9ec74b','client','https://lh3.googleusercontent.com/a-/AOh14GhvYYrtOXe48NosaE5k_62tAe0cmlA2gC-Lf9WX=s96-c','google.com'),('jk8P5F7Y7qgp8psbOoieDziqgyT2',1,'Vicent Esteve Ferre',NULL,'esteve.ferre.vicent@gmail.com','e0215125d37319d0636d','client','https://avatars.githubusercontent.com/u/98290471?v=4','github.com'),('vlXJZ6kqUFPljnZKrKweL1TOtDd2',1,'VICENT ESTEVE',NULL,'vicentesteve2002@gmail.com','c7bd15621d3bb4c76267','client','https://lh3.googleusercontent.com/a-/AOh14Gh_c21ZnwmJT2Qb4uCGZcoriPFB1tCmQ8bKLsaxQQ=s96-c','google.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-12 16:37:29
