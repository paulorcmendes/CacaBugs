-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 21-Nov-2016 às 13:53
-- Versão do servidor: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `tipo` varchar(200) NOT NULL DEFAULT 'open',
  `LogDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isRight` tinyint(1) NOT NULL DEFAULT '0',
  `question` int(11) NOT NULL,
  `entries` varchar(200) NOT NULL,
  `timeSpent` int(200) NOT NULL DEFAULT '0'
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
(22, 1, 'open', '2016-11-14 16:43:47', 0, 3, 'a: 12; b: 12', 0),
(23, 3, 'open', '2016-11-14 17:14:08', 1, 0, 'carlos: 10; pedro: 12; welton: 5', 0),
(24, 1, 'submit', '2016-11-21 09:48:20', 1, 1, 'age: 18', 0),
(25, 4, 'submit', '2016-11-21 09:52:45', 1, 1, 'age: 18', 0);

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
(1, 'mendes', 'paulo', '8dc05a2dd9ab9c89fdd980fcea730391', 5),
(3, 'csalles', 'Carlos de Salles', '419789426eeccf07e77dae48ce291063', 2),
(4, 'pedropva', 'pedro', 'a6c4fc689f874ebf8c957113b1266e22', 2);

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
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
