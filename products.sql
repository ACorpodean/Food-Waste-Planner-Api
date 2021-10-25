SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `expiration` date NOT NULL,
  `weight` text NOT NULL,
  `price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `products` (`id`, `name`, `expiration`, `weight`, `price`) VALUES
(19, 'Rosii', '2021-10-30', '2500', '15'),
(20, 'Ardei', '2021-11-04', '1000', '8'),
(21, 'Orez', '2022-05-20', '5000', '30'),
(22, 'Pastarnac', '2021-10-21', '250', '3'),
(23, 'Varza', '2021-11-03', '2375', '17'),
(24, 'Spanac', '2021-10-17', '200', '4.7'),
(25, 'Cartofi', '2021-11-14', '8000', '24'),
(26, 'Usturoi', '2021-11-06', '285', '11'),
(27, 'Masline', '2021-10-10', '125', '5'),
(28, 'Linte', '2021-12-25', '1000', '12'),
(29, 'Mango', '2021-10-21', '300', '4'),
(30, 'Carne porc', '2021-10-29', '1700', '28'),
(31, 'Broccoli', '2021-10-23', '420', '6.9'),
(32, 'Patrunjel', '2021-10-19', '100', '2'),
(33, 'Ceapa', '2021-10-30', '1050', '6'),
(34, 'Asparagus', '2021-10-22', '250', '18'),
(35, 'Sare', '2023-03-23', '500', '8'),
(36, 'Spaghete', '2022-02-04', '1000', '6'),
(37, 'Oua', '2021-10-25', '5', '11'),
(38, 'Sunca', '2021-10-26', '350', '19'),
(39, 'Iaurt', '2021-10-27', '400', '25'),
(40, 'Lapte', '2021-10-30', '1000', '7'),
(41, 'Piept de pui', '2021-11-10', '1850', '23'),
(42, 'Pateu de porc', '2021-10-24', '125', '6.5'),
(43, 'Ridichi', '2021-11-02', '2800', '11');


ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
