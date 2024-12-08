-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 07, 2024 lúc 10:48 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `gaubong`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `gia` decimal(10,2) NOT NULL,
  `anh` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gaubong`
--

CREATE TABLE `gaubong` (
  `id` int(11) NOT NULL,
  `idLoai` int(11) NOT NULL,
  `ten` varchar(255) NOT NULL,
  `gia` int(11) NOT NULL,
  `kichThuoc` varchar(50) NOT NULL,
  `moTa` text NOT NULL,
  `anh` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `gaubong`
--

INSERT INTO `gaubong` (`id`, `idLoai`, `ten`, `gia`, `kichThuoc`, `moTa`, `anh`) VALUES
(1, 100, 'Gấu Lộn Nhào ', 95000, '45cm', 'Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!', '1.png'),
(2, 100, 'Gấu Nâu ', 120000, '45cm', 'Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!', '2.png'),
(3, 100, 'Gấu Bông Nhỏ ', 85000, '30cm', 'Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!', '3.png'),
(4, 100, 'Gấu Teddy ', 65000, '25cm', 'Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!', '4.png'),
(5, 100, 'Teddy ', 130000, '30cm', 'Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!', '5.png'),
(6, 100, 'gấu teddy', 90000, '30cm', 'Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên.', '6.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `gaubong`
--
ALTER TABLE `gaubong`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `gaubong` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
