-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2024 at 03:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petdailykit`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`, `email`, `created_at`) VALUES
(1, 'Admin-PDK', '342334', 'admin@gmail.com', '2024-06-29 18:26:44');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(1, 'Dog', '2024-06-29 18:29:35'),
(2, 'Cat', '2024-06-29 18:29:35'),
(3, 'Bird', '2024-06-29 18:29:35'),
(4, 'Fish', '2024-06-29 18:29:35'),
(5, 'Reptiles', '2024-06-29 18:29:35'),
(6, 'Small-Pets', '2024-06-29 18:29:35');

-- --------------------------------------------------------

--
-- Table structure for table `checkout`
--

CREATE TABLE `checkout` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `variation_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `checkout_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `size_id`, `color`, `image_url`) VALUES
(1, 4, 'Army Green', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Army-Green.webp'),
(2, 4, 'Black', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Black.webp'),
(3, 4, 'Khaki', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Khaki-250x250.webp'),
(4, 4, 'Khaki + Camo', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Khaki-Camo.webp'),
(5, 5, 'Army Green', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Army-Green.webp'),
(6, 5, 'Black', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Black.webp'),
(7, 5, 'Khaki', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Khaki-250x250.webp'),
(8, 5, 'Khaki + Camo', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Khaki-Camo.webp'),
(9, 6, 'Army Green', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Army-Green.webp'),
(10, 6, 'Black', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Black.webp'),
(11, 6, 'Khaki', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Khaki-250x250.webp'),
(12, 6, 'Khaki + Camo', 'https://petdailykit.com/wp-content/uploads/2023/10/Adjustable-Dog-Collar-Khaki-Camo.webp');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_date` datetime NOT NULL,
  `total_amount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `variation_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_title` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `SKU` varchar(50) NOT NULL,
  `short_description` text DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `price_min` decimal(10,2) DEFAULT NULL,
  `price_max` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_title`, `category_id`, `subcategory_id`, `SKU`, `short_description`, `long_description`, `created_at`, `price_min`, `price_max`) VALUES
(1, 'Adjustable Dog Collar', 1, 17, 'PDK-313(1)', 'High-quality materials: the comfort collar is made of specially selected materials for toughness and durability.\r\nReflective stitching: stay safe and be spotted during your morning and evening walks.\r\nHeavy-duty and lightweight-designed for all dog breeds, the comfortable collar is designed to maintain a lightweight design.\r\nSafety buckle: The side release buckle is made of high-quality, environmentally friendly plastic with a safety lock to prevent accidental opening of the collar\r\nNote: Please use a soft ruler to measure the widest part of the dog’s neck and add 1 inch to get the correct length.', 'Look into our amazing selection of adjustable dog collar! We understand that every pup is unique, and that’s why we offer a wide range of sizes and styles to ensure your furry friend is comfortable and secure on every walk, adventure, or playtime.\r\n\r\nThe Benefits of an Adjustable Dog Collar\r\nPerfect Fit, Guaranteed: No more frustration with ill-fitting collars! Our adjustable collars grow with your pup, offering a comfortable fit throughout their life stages.\r\nSafety First: A properly fitted collar is essential for safe walks and outings. An adjustable collar allows for a snug, secure fit that prevents slipping or escape attempts.\r\nUnmatched Comfort: Our adjustable collars are designed with your dog’s comfort in mind. Soft, padded materials and smooth buckles ensure a pleasant wearing experience for your furry best friend.\r\nStyle for Every Pup: Adjustable collars don’t have to be boring! We offer a variety of colors, patterns, and even personalized options to let your dog’s unique personality shine.\r\n\r\nShop with Confidence\r\nWe are committed to providing high-quality, durable dog collars that you and your pup can love. Browse our selection today and find the perfect adjustable collar for your furry companion!\r\n\r\nProduct Specification\r\nMaterial: Nylon\r\nType: Dogs\r\nSeason: All seasons\r\nProduct Name:  Dog Collar Adjustable\r\nColor: Black, Brown, Khaki and Army Green\r\nFeatures: 5-hole gear\r\nSize: M, L, XL', '2024-06-29 19:32:35', 11.99, 15.99);

--
-- Triggers `products`
--
DELIMITER $$
CREATE TRIGGER `generate_sku` BEFORE INSERT ON `products` FOR EACH ROW BEGIN
    DECLARE new_sku_suffix INT;
    -- Get the maximum existing suffix and increment it by 1
    SET new_sku_suffix = (SELECT COUNT(*) + 1 FROM products);
    SET NEW.SKU = CONCAT('PDK-313(', new_sku_suffix, ')');
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `product_id`, `size`) VALUES
(4, 1, 'Large'),
(5, 1, 'Medium'),
(6, 1, 'X-Large');

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `category_id`, `name`, `created_at`) VALUES
(13, 1, ' Dog Bed', '2024-06-29 19:29:29'),
(14, 1, 'Dog Bowls & Feeders', '2024-06-29 19:29:29'),
(15, 1, 'Dog Cages', '2024-06-29 19:29:29'),
(16, 1, 'Dog Clothes', '2024-06-29 19:29:29'),
(17, 1, 'Dog Collars', '2024-06-29 19:29:29'),
(18, 1, 'Dog Food Storage', '2024-06-29 19:29:29'),
(19, 1, 'Dog Grooming', '2024-06-29 19:29:29'),
(20, 1, 'Dog Harnesses', '2024-06-29 19:29:29'),
(21, 1, 'Dogs Houses', '2024-06-29 19:29:29'),
(22, 1, 'Dog Leash', '2024-06-29 19:29:29'),
(23, 1, 'Dog Toys', '2024-06-29 19:29:29'),
(24, 1, 'Dogs Carries and Travel', '2024-06-29 19:29:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `variations`
--

CREATE TABLE `variations` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `variations`
--

INSERT INTO `variations` (`id`, `product_id`, `size_id`, `color_id`, `price`, `stock`) VALUES
(1, 1, 4, 1, 13.99, 20),
(2, 1, 4, 2, 13.99, 20),
(3, 1, 4, 3, 13.99, 20),
(4, 1, 4, 4, 13.99, 20),
(5, 1, 5, 5, 11.99, 12),
(6, 1, 5, 6, 11.99, 12),
(7, 1, 5, 7, 11.99, 12),
(8, 1, 5, 8, 11.99, 12),
(9, 1, 6, 9, 15.99, 12),
(10, 1, 6, 10, 15.99, 12),
(11, 1, 6, 11, 15.99, 12),
(12, 1, 6, 12, 15.99, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `checkout`
--
ALTER TABLE `checkout`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `subcategory_id` (`subcategory_id`),
  ADD KEY `variation_id` (`variation_id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `size_id` (`size_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `variation_id` (`variation_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `SKU` (`SKU`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `subcategory_id` (`subcategory_id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `variations`
--
ALTER TABLE `variations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `size_id` (`size_id`),
  ADD KEY `color_id` (`color_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `checkout`
--
ALTER TABLE `checkout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `variations`
--
ALTER TABLE `variations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `checkout`
--
ALTER TABLE `checkout`
  ADD CONSTRAINT `checkout_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `checkout_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `checkout_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `checkout_ibfk_4` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`),
  ADD CONSTRAINT `checkout_ibfk_5` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`);

--
-- Constraints for table `colors`
--
ALTER TABLE `colors`
  ADD CONSTRAINT `colors_ibfk_1` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`variation_id`) REFERENCES `variations` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`);

--
-- Constraints for table `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `variations`
--
ALTER TABLE `variations`
  ADD CONSTRAINT `variations_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `variations_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `variations_ibfk_3` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
