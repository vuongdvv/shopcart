<?php
session_start();
include('conect.php'); // Kết nối cơ sở dữ liệu

if (!isset($_SESSION['user_id'])) {
    // Nếu người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
    header("Location: login.php");
    exit;
}

$userId = $_SESSION['user_id'];

if (isset($_GET['id'])) {
    $productId = $_GET['id'];

    // Lấy số lượng hiện có của sản phẩm từ bảng `gaubong`
    $query = "SELECT quantity FROM gaubong WHERE id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $productId);
    $stmt->execute();
    $result = $stmt->get_result();
    $product = $result->fetch_assoc();

    if (!$product) {
        // Nếu sản phẩm không tồn tại, chuyển hướng về trang chủ
        header("Location: home.php");
        exit;
    }

    $availableQuantity = $product['quantity']; // Số lượng hiện có trong kho

    // Kiểm tra sản phẩm trong giỏ hàng của người dùng
    $query = "SELECT quantity FROM cart WHERE product_id = ? AND user_id = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ii", $productId, $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $cartItem = $result->fetch_assoc();

    $cartQuantity = $cartItem['quantity'] ?? 0; // Số lượng trong giỏ hàng (nếu có)

    if ($cartQuantity + 1 > $availableQuantity) {
        // Nếu số lượng trong giỏ hàng vượt quá số lượng trong kho
        $_SESSION['error'] = "Số lượng sản phẩm vượt quá số lượng trong kho. Chỉ còn $availableQuantity sản phẩm.";
        header("Location: cart.php");
        exit;
    }

    if ($cartItem) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
        $query = "UPDATE cart SET quantity = quantity + 1 WHERE product_id = ? AND user_id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ii", $productId, $userId);
        $stmt->execute();
    } else {
        // Thêm sản phẩm vào giỏ hàng
        $query = "SELECT id, ten, gia, anh FROM gaubong WHERE id = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $productId);
        $stmt->execute();
        $result = $stmt->get_result();
        $product = $result->fetch_assoc();

        $query = "INSERT INTO cart (user_id, product_id, ten, gia, anh, quantity) VALUES (?, ?, ?, ?, ?, 1)";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("iisss", $userId, $product['id'], $product['ten'], $product['gia'], $product['anh']);
        $stmt->execute();
    }

    // Cập nhật session để hiển thị trong giỏ hàng trên web
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = [];
    }

    $productFound = false;
    foreach ($_SESSION['cart'] as $key => $item) {
        if ($item['id'] == $productId) {
            $_SESSION['cart'][$key]['quantity'] += 1;
            $productFound = true;
            break;
        }
    }

    if (!$productFound) {
        $_SESSION['cart'][] = [
            'id' => $product['id'],
            'ten' => $product['ten'],
            'gia' => $product['gia'],
            'anh' => $product['anh'],
            'quantity' => 1,
        ];
    }

    header("Location: cart.php");
    exit;
} else {
    header("Location: home.php");
    exit;
}
