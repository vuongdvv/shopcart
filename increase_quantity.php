<?php
session_start();  // Start the session

if (isset($_GET['id'])) {
    $productId = $_GET['id'];  // Get the product ID
    $cart = $_SESSION['cart'];  // Get the cart from the session

    // Check if the cart is not empty
    if (!empty($cart)) {
        // Loop through the cart and increase the quantity of the product
        foreach ($cart as $key => $product) {
            if ($product['id'] == $productId) {
                $_SESSION['cart'][$key]['quantity'] += 1;  // Increase the quantity by 1
                break;
            }
        }
    }

    header("Location: cart.php");  // Redirect back to the cart page
    exit;
} else {
    header("Location: cart.php");  // Redirect if no product ID is found
    exit;
}
?>
