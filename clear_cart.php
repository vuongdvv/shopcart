<?php
session_start();

// Check if the cart exists in the session and clear it
if (isset($_SESSION['cart'])) {
    unset($_SESSION['cart']);  // Remove the cart from the session
    echo "Giỏ hàng đã được xóa."; // Optional: Display a message
} else {
    echo "Giỏ hàng không tồn tại.";
}

// Redirect to the cart page or home page after clearing
header("Location: cart.php");  // Redirect to cart page
exit();
?>
