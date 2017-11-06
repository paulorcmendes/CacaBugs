-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06-Nov-2017 às 21:57
-- Versão do servidor: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `caca_bugs`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `id_user` int(200) NOT NULL,
  `tipo` varchar(200) NOT NULL DEFAULT 'undefined',
  `LogDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isRight` tinyint(1) NOT NULL DEFAULT '0',
  `question` int(11) NOT NULL,
  `entries` varchar(200) NOT NULL,
  `timeSpent` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `log`
--

INSERT INTO `log` (`id`, `id_user`, `tipo`, `LogDate`, `isRight`, `question`, `entries`, `timeSpent`) VALUES
(8, 1, 'open', '2016-11-11 17:51:29', 1, 2, 'a: 5; b: 5', 0),
(9, 1, 'open', '2016-11-14 10:04:47', 0, 2, 'a: 7; b: 6', 0),
(10, 1, 'open', '2016-11-14 10:08:57', 1, 4, 'a: 8; b: 6; c: 4; d: 3; e: 6', 0),
(11, 1, 'open', '2016-11-14 10:08:59', 1, 4, 'a: 8; b: 6; c: 4; d: 3; e: 6', 0),
(12, 1, 'open', '2016-11-14 10:09:48', 0, 4, 'a: 8; b: 5; c: 4; d: 3; e: 2', 0),
(13, 1, 'open', '2016-11-14 10:10:09', 1, 4, 'a: 0; b: 9; c: 8; d: 7; e: 9', 0),
(14, 3, 'open', '2016-11-14 11:04:05', 0, 0, 'carlos: 12; pedro: 3; welton: 4', 0),
(15, 3, 'open', '2016-11-14 11:04:30', 0, 0, 'carlos: 10; pedro: 4; welton: 11', 0),
(16, 3, 'open', '2016-11-14 11:05:08', 1, 0, 'carlos: 10; pedro: 12; welton: 2', 0),
(17, 3, 'open', '2016-11-14 11:06:41', 0, 0, 'carlos: 10; pedro: 4; welton: 3', 0),
(18, 3, 'open', '2016-11-14 11:06:53', 0, 0, 'carlos: 10; pedro: 2; welton: 12', 0),
(19, 3, 'open', '2016-11-14 11:07:13', 1, 0, 'carlos: 10; pedro: 12; welton: 4', 0),
(20, 3, 'open', '2016-11-14 12:42:23', 1, 0, 'carlos: 45; pedro: 52; welton: 12', 0),
(21, 3, 'open', '2016-11-14 13:06:08', 0, 0, 'carlos: 34; pedro: 6; welton: 4', 0),
(33, 3, 'open', '2016-11-21 10:17:43', 0, 3, 'a: 23; b: 23', 0),
(34, 1, 'submit', '2016-11-21 10:19:44', 0, 5, 'a: 23; b: 23; c: 23', 0),
(35, 1, 'submit', '2016-11-21 10:20:33', 1, 5, 'a: 35; b: 353; c: 35', 0),
(36, 1, 'submit', '2016-11-21 10:21:16', 0, 6, 'b: 23; h: 23', 0),
(37, 1, 'submit', '2016-11-21 10:21:21', 1, 6, 'b: 34; h: 2', 0),
(38, 1, 'submit', '2016-11-21 11:11:24', 1, 6, 'b: 34; h: 23', 3.839),
(39, 1, 'submit', '2016-11-21 11:11:58', 0, 3, 'a: 34; b: 34', 2.432),
(40, 1, 'submit', '2016-11-21 11:12:27', 1, 2, 'a: 23; b: 23', 1.933),
(41, 1, 'open', '2017-11-01 13:17:05', 0, 7, '', 0),
(42, 1, 'open', '2017-11-01 13:17:33', 0, 7, '', 0),
(43, 1, 'submit', '2017-11-01 13:17:44', 1, 7, 'a: 4; b: 4', 11.209),
(44, 1, 'open', '2017-11-01 13:18:01', 0, 8, '', 0),
(45, 1, 'submit', '2017-11-01 13:18:07', 1, 8, 'a: 5; b: 5', 6.384),
(46, 1, 'open', '2017-11-01 13:18:24', 0, 9, '', 0),
(47, 1, 'submit', '2017-11-01 13:18:29', 0, 9, 'channel: 23322', 5.065),
(48, 1, 'open', '2017-11-01 13:18:35', 0, 9, '', 0),
(49, 1, 'open', '2017-11-01 13:18:45', 0, 9, '', 0),
(50, 5, 'open', '2017-11-06 13:39:10', 0, 0, '', 0),
(51, 5, 'submit', '2017-11-06 13:39:18', 0, 0, 'carlos: 4; pedro: 4; welton: 4', 7.512),
(52, 5, 'open', '2017-11-06 13:39:19', 0, 0, '', 0),
(53, 5, 'submit', '2017-11-06 13:39:22', 0, 0, 'carlos: 5; pedro: 5; welton: 6', 2.896),
(54, 5, 'open', '2017-11-06 13:39:23', 0, 0, '', 0),
(55, 5, 'submit', '2017-11-06 13:39:26', 0, 0, 'carlos: 5; pedro: 6; welton: 6', 2.496),
(56, 5, 'open', '2017-11-06 13:39:27', 0, 0, '', 0),
(57, 5, 'submit', '2017-11-06 13:39:29', 0, 0, 'carlos: 6; pedro: 5; welton: 6', 2.255),
(58, 5, 'open', '2017-11-06 13:39:31', 0, 0, '', 0),
(59, 5, 'submit', '2017-11-06 13:39:52', 1, 0, 'carlos: 6; pedro: 8; welton: 2', 21.464),
(60, 3, 'open', '2017-11-06 14:51:32', 0, 3, '', 0),
(61, 6, 'open', '2017-11-06 14:53:37', 0, 0, '', 0),
(62, 6, 'submit', '2017-11-06 14:53:45', 1, 0, 'carlos: 8; pedro: 9; welton: 7', 8.631),
(63, 3, 'open', '2017-11-06 14:57:01', 0, 18, '', 0),
(64, 3, 'submit', '2017-11-06 14:57:30', 0, 18, 'v: 1,2,3,4,5,6,7,8', 29.822),
(65, 3, 'open', '2017-11-06 14:57:32', 0, 18, '', 0),
(66, 3, 'submit', '2017-11-06 14:57:42', 1, 18, 'v: -1,-2,-3,-4,-5,-6,-7,-8', 10.248),
(67, 3, 'open', '2017-11-06 14:57:45', 0, 19, '', 0),
(68, 3, 'submit', '2017-11-06 14:57:57', 1, 19, 'num: 1', 11.528),
(69, 3, 'open', '2017-11-06 14:59:10', 0, 19, '', 0),
(70, 3, 'open', '2017-11-06 14:59:15', 0, 18, '', 0),
(71, 3, 'open', '2017-11-06 14:59:24', 0, 0, '', 0),
(72, 3, 'open', '2017-11-06 14:59:27', 0, 1, '', 0),
(73, 3, 'open', '2017-11-06 14:59:31', 0, 19, '', 0),
(74, 3, 'open', '2017-11-06 15:17:34', 0, 4, '', 0),
(75, 9, 'open', '2017-11-06 15:35:53', 0, 0, '', 0),
(76, 9, 'submit', '2017-11-06 15:36:18', 0, 0, 'carlos: 30; pedro: 12; welton: 45', 25.263),
(77, 9, 'open', '2017-11-06 15:36:23', 0, 0, '', 0),
(78, 9, 'submit', '2017-11-06 15:36:34', 1, 0, 'carlos: 30; pedro: 45; welton: 12', 10.976),
(79, 3, 'open', '2017-11-06 17:45:39', 0, 8, '', 0),
(80, 3, 'submit', '2017-11-06 17:46:16', 1, 8, 'a: 5; b: 5', 37.146);

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `nome` varchar(300) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `question` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `email`, `nome`, `senha`, `question`) VALUES
(1, 'mendes', 'paulo', '8dc05a2dd9ab9c89fdd980fcea730391', 9),
(3, 'csalles', 'Carlos de Salles', '419789426eeccf07e77dae48ce291063', 20),
(4, 'pedropva', 'pedro', 'a6c4fc689f874ebf8c957113b1266e22', 2),
(5, 'cvmcosta', 'Carlos costa', 'batata', 1),
(6, 'peu', 'peu', 'e6916dc5532e0cbd470934a25c8c6e2c', 1),
(7, 'josias', 'josias', '6f09c95915fcc4999fddeed2cad4d0c1', 0),
(8, 'preula', 'preula', 'def7924e3199be5e18060bb3e1d547a7', 0),
(9, 'lucastercas@gmail.com', 'lucastercas@gmail.com', 'dc53fc4f621c80bdc2fa0329a6123708', 1),
(10, 'ylderlan', 'ylderlan', '36aa01b4df2cb91a1f7d42b81575802f', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
