<?php
// Gọi file kết nối cơ sở dữ liệu
include 'conect.php';

// Lấy ID sản phẩm từ URL
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

// Truy vấn lấy thông tin sản phẩm
$sql = "SELECT * FROM gaubong WHERE id = ?";
$stmt = $conn->prepare($sql); // Sử dụng Prepared Statement để tránh SQL Injection
$stmt->bind_param("i", $id);  // Gắn giá trị ID (kiểu số nguyên)
$stmt->execute();
$result = $stmt->get_result();

// Kiểm tra sản phẩm có tồn tại
if ($result->num_rows > 0) {
    $product = $result->fetch_assoc(); // Lấy dữ liệu sản phẩm
} else {
    die("Sản phẩm không tồn tại.");
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết sản phẩm</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9f9f9;
        }

        .product-detail {
            width: 400px;
            padding: 20px;
            border: 1px solid #ddd;
            background: #fff;
            position: relative;
        }

        .product-image {
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: #555;
            margin-bottom: 20px;
        }

        .product-info {
            margin-bottom: 20px;
        }

        .product-info p {
            margin: 5px 0;
        }

        .add-to-cart {

            display: flex;
            padding: 10px 20px;
            background: #007bff;
            color: #fff;
            align-items: center;
            justify-content: center;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
        }

        .add-to-cart:hover {
            background: #0056b3;
        }

        .close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 25px;
            height: 25px;
            background-color: red;
            color: white;
            text-align: center;
            line-height: 25px;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="product-detail">
        <span class="close" onclick="window.history.back();">&times;</span>
        <div class="product-image">
            <img src="img/GẤU BÔNG/Gấu bông teddy/<?php echo htmlspecialchars($product['anh']); ?>"
                class="img-fluid rounded-top"
                alt="Ảnh sản phẩm"
                width="280" height="280">
        </div>
        <div class="product-info">
            <p><strong>Tên sản phẩm:</strong> <?php echo htmlspecialchars($product['ten']); ?></p>
            <p><strong>Kích thước:</strong> <?php echo htmlspecialchars($product['kichThuoc']); ?></p>
            <p><strong>Giá:</strong> <?php echo number_format($product['gia'], 0, ',', '.'); ?> VNĐ</p>
            <p><strong>Mô tả:</strong> <?php echo nl2br(htmlspecialchars($product['moTa'])); ?></p>
        </div>
        <a href="add_to_cart.php?id=<?php echo $product['id']; ?>" class="add-to-cart">Thêm vào giỏ hàng</a>
    </div>
</body>

</html>