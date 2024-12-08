<?php
session_start(); // Ensure this is at the top
ob_start(); // Start output buffering if needed
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>GIỎ HÀNG TEDDY BOO</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="./css/css2.css" rel="stylesheet">
    <link href="./css/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <div class="container px-0">
        <nav class="navbar navbar-light bg-white navbar-expand-xl">
            <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars text-primary"></span>
            </button>
            <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a href="home.php" class="nav-item nav-link active">Trang chủ</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Thú bông</a>
                        <div class="dropdown-menu m-0 bg-secondary rounded-0">
                            <a href="shop-detail.html?idloai=2" class="dropdown-item">Gấu bông hoạt hình</a>
                            <a href="shop-detail.html?idloai=100" class="dropdown-item">Gấu bông teddy</a>
                            <a href="shop-detail.html?idloai=33" class="dropdown-item">Bó hoa bông</a>
                        </div>
                    </div>
                    <a href="shop.html" class="nav-item nav-link ">Tất cả sản phẩm</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Về Teddy Boo</a>
                    </div>
                </div>
                <div class="d-flex m-3 me-0">
                    <button class="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fas fa-search text-primary"></i></button>
                    <a href="./cart.html" class="position-relative me-4 my-auto">
                        <i class="fa fa-shopping-cart fa-2x"></i>

                    </a>
                    <a href="login.php" class="my-auto">
                        <i class="fas fa-user fa-2x"></i>
                    </a>
                </div>
            </div>
        </nav>
    </div>
    </div>
    <!-- Bắt đầu Phần Header cho Trang đơn -->
    <!-- <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Giỏ hàng</h1>
        <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item"><a href="home.php">Trang chủ</a></li>

            <li class="breadcrumb-item active text-red">Giỏ hàng</li>
        </ol>
    </div> -->
    <!-- Kết thúc Phần Header cho Trang đơn -->
    <?php

    // Hàm xóa sản phẩm khỏi giỏ hàng
    function removeItemFromCart($productId)
    {
        if (isset($_SESSION['cart'])) {
            foreach ($_SESSION['cart'] as $key => $item) {
                if ($item['id'] == $productId) {
                    unset($_SESSION['cart'][$key]);
                    break;
                }
            }
            // Reindex lại mảng để sửa các khoảng trống trong các chỉ số mảng
            $_SESSION['cart'] = array_values($_SESSION['cart']);
        }
    }

    // Kiểm tra xem có yêu cầu xóa sản phẩm không
    if (isset($_GET['action']) && $_GET['action'] == 'remove' && isset($_GET['id'])) {
        $productId = $_GET['id'];
        removeItemFromCart($productId); // Xóa sản phẩm khỏi giỏ hàng
        header("Location: cart.php"); // Tải lại trang giỏ hàng
        exit; // Dừng việc xử lý để tránh lỗi
    }

    // Kiểm tra xem giỏ hàng có tồn tại trong session không
    if (isset($_SESSION['cart']) && count($_SESSION['cart']) > 0) {

        $cart = $_SESSION['cart'];
        $html = "";  // Chuỗi HTML để chứa giỏ hàng

        // Duyệt qua giỏ hàng và xây dựng HTML
        foreach ($cart as $x) {
            $html .= "
        <tr>
        <th scope='row'>
            <div class='d-flex align-items-center'>
                  <img src='" .  "img/GẤU BÔNG/Gấu bông teddy/" . $x['anh'] . "' class='img-fluid me-5 rounded-circle' style='width: 80px; height: 80px;' alt=''>
            </div>
        </th>
        <td>
            <p class='mb-0 mt-4'>{$x['ten']}</p>
        </td>
        <td>
            <p class='mb-0 mt-4'>" . formatMoney($x['gia']) . "</p>
        </td>
        <td>
                <div class='input-group quantity mt-4' style='width: 105px;'>
                    <div class='input-group-btn'>
                        <a href='?action=decrease&id={$x['id']}' class='btn btn-sm btn-minus rounded-circle bg-light border'>
                            <i class='fa fa-minus'></i>
                        </a>
                    </div>
                    <input type='text' class='form-control form-control-sm text-center border-0' value='{$x['quantity']}' readonly>
                    <div class='input-group-btn'>
                        <a href='?action=increase&id={$x['id']}' class='btn btn-sm btn-plus rounded-circle bg-light border'>
                            <i class='fa fa-plus'></i>
                        </a>
                    </div>
                </div>
            </td>
        <td>
            <p class='mb-0 mt-4'>" . formatMoney($x['gia'] * $x['quantity']) . "</p>
        </td>
      <td>
    <a href='?action=remove&id={$x['id']}' class='btn btn-md rounded-circle bg-light border mt-4'>
        <i class='fa fa-times text-danger'></i>
    </a>
</td>

    </tr>
        ";
        }

        $total = 0;
        foreach ($cart as $x) {
            $total += $x['gia'] * $x['quantity'];
        }

        echo "<script>document.getElementById('sum').innerText = '" . formatMoney($total) . "';</script>";
    } else {
        echo "<tr><td colspan='6' class='text-center'>Giỏ hàng trống</td></tr>";
    }

    function formatMoney($amount)
    {
        return number_format($amount, 0, ',', '.') . ' VNĐ';
    }
    ?>

    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sản phẩm</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Tổng</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- PHP Code to Generate Cart -->
                        <?= $html ?? "<tr><td colspan='6' class='text-center'>Giỏ hàng trống</td></tr>" ?>
                    </tbody>
                </table>
            </div>
            <div class="mt-5">
                <input type="text" class="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Mã giảm giá" id="coupon">
                <button class="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button" onclick="AddCoupon()">Áp dụng mã giảm giá</button>
            </div>
            <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                <div class="bg-light rounded">
                    <div class="p-4">
                        <h1 class="display-6 mb-4">Tổng giỏ hàng <span class="fw-normal">của bạn</span></h1>
                    </div>
                    <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                        <h5 class="mb-0 ps-4 me-4">Tổng cộng</h5>
                        <?php
                        if (isset($_SESSION['cart']) && count($_SESSION['cart']) > 0) {
                            $cart = $_SESSION['cart'];
                            $total = 0;

                            $html2 = "";


                            foreach ($cart as $x) {
                                $total += $x['gia'] * $x['quantity'];
                            }
                            $grandTotal = $total;

                            $html2 .= "<p class='mb-0' id='total'>" . formatMoney($grandTotal) . "</p>";
                        }

                        ?>
                        <?= $html2
                        ?>
                    </div>
                    <button class="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button" onclick="Payment()">Tiến hành thanh toán</button>
                </div>
            </div>
        </div>
    </div>
    </div>

    <a href="clear_cart.php" class="btn btn-danger">Xóa Giỏ Hàng</a>

</body>

</html>

<?php
// session_start();
include('conect.php'); // Kết nối cơ sở dữ liệu



// Kiểm tra giỏ hàng có tồn tại trong session không
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

if (isset($_GET['action']) && isset($_GET['id'])) {
    $action = $_GET['action'];
    $id = $_GET['id'];

    // Kiểm tra hành động yêu cầu
    switch ($action) {
        case 'increase':
            // Tăng số lượng sản phẩm trong giỏ hàng
            foreach ($_SESSION['cart'] as &$item) {
                if ($item['id'] == $id) {
                    $item['quantity']++;
                    // Cập nhật số lượng sản phẩm trong cơ sở dữ liệu
                    $query = "UPDATE cart SET quantity = ? WHERE product_id = ?";
                    $stmt = $conn->prepare($query);
                    $stmt->bind_param("ii", $item['quantity'], $id);
                    $stmt->execute();
                    break;
                }
            }
            break;

        case 'decrease':
            // Giảm số lượng sản phẩm trong giỏ hàng
            foreach ($_SESSION['cart'] as &$item) {
                if ($item['id'] == $id && $item['quantity'] > 1) {
                    $item['quantity']--;
                    // Cập nhật số lượng sản phẩm trong cơ sở dữ liệu
                    $query = "UPDATE cart SET quantity = ? WHERE product_id = ?";
                    $stmt = $conn->prepare($query);
                    $stmt->bind_param("ii", $item['quantity'], $id);
                    $stmt->execute();
                    break;
                }
            }
            break;

        case 'remove':
            // Xóa sản phẩm khỏi giỏ hàng trong session
            foreach ($_SESSION['cart'] as $key => $item) {
                if ($item['id'] == $id) {
                    unset($_SESSION['cart'][$key]);
                    // Xóa sản phẩm khỏi cơ sở dữ liệu
                    $query = "DELETE FROM cart WHERE id = ?";
                    $stmt = $conn->prepare($query);
                    $stmt->bind_param("i", $id);
                    $stmt->execute();
                    if ($stmt->affected_rows > 0) {
                        // Nếu xóa thành công
                        echo "Sản phẩm đã được xóa khỏi cơ sở dữ liệu.";
                    } else {
                        // Nếu không xóa thành công
                        echo "Có lỗi khi xóa sản phẩm khỏi cơ sở dữ liệu.";
                    }
                    break;
                }
            }
            $_SESSION['cart'] = array_values($_SESSION['cart']); // Đặt lại chỉ số mảng
            break;
    }

    // Chuyển hướng lại trang giỏ hàng
    header("Location: cart.php");
    exit;
}

?>

<?php
ob_end_flush();
?>