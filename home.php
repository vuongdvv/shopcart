<?php
include 'conect.php';

$sql = "SELECT * FROM gaubong";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>TEDDY BOO</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="./css/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet">
    <link href="/css/bootstrap-icons.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

    <div class="container-fluid fixed-top">
        <div class="position-relative mx-5" id="search-input">
            <input class="form-control border-2 border-secondary w-25 py-3 px-4 rounded-pill" type="text" placeholder="Tìm kiếm">
        </div>
        <div class="container topbar bg-primary d-none d-lg-block">
            <div class="d-flex justify-content-between">
                <div class="top-info ps-2">

                </div>
                <div>
                    <div id="imglogo">
                        <img src="./img/lgo/Logo tách nền.png" alt="">
                    </div>
                    <a href="home.html" class="navbar-brand">
                        <h1 class="text-primary display-6">TEDDY BOO</h1>
                    </a>
                </div>
                <div class="top-link pe-2">
                    <div id="user">
                    </div>
                    <div id="frofile">
                        <a href="login.php" class="text-primary"><small class="text-primary mx-2">Đăng nhập</small>/</a>
                        <a href="register.php" class="text-primary"><small class="text-primary ms-2">Đăng ký</small></a>
                    </div>
                </div>
            </div>
        </div>

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
                        <a href="./cart.php" class="position-relative me-4 my-auto">
                            <i class="fa fa-shopping-cart fa-2x"></i>
                            <a href="/login.html" class="my-auto">
                                <i class="fas fa-user fa-2x"></i>
                            </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    <div class="container-fluid py-5 mb-5 hero-header">

    </div>

    <div class="container-fluid fruite py-5">
        <div class="container py-5">
            <div class="tab-class text-center">
                <div class="row g-4">
                    <div class="col-lg-12 ">
                        <h1 class="text-primary">GẤU BÔNG </h1>
                    </div>
                </div>
                <div class="tab-content">
                    <div id="tab-1" class="tab-pane fade show p-0 active">
                        <div class="row g-4">
                            <div class="col-lg-12">
                                <div class="row g-4">
                                    <?php
                                    $hoathinhhtml = ''; // Khởi tạo biến $hoathinhhtml để chứa nội dung HTML
                                    while ($row = $result->fetch_assoc()) {
                                        $hoathinhhtml .= '
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="rounded position-relative fruite-item">
                <a href="detail.php?id=' . $row['id'] . '">
                    <div class="fruite-img">
                        <img src="img/GẤU BÔNG/Gấu bông teddy/' . $row['anh'] . '" class="img-fluid w-100 rounded-top" alt="">
                    </div>
                </a>
                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">
                    ' . ($row['idLoai'] == 100 ? "Gấu bông" : "") . '
                </div>
                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4 style="height:60px">' . $row['ten'] . '</h4>
                    <p></p>
                    <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">
                            <span>' . $row['kichThuoc'] . '</span> - ' . number_format($row['gia'], 0, ',', '.') . ' VNĐ
                        </p>
                    <a href="add_to_cart.php?id=' . $row['id'] . '" class="btn border border-secondary rounded-pill px-3 text-primary">
                            <i class="fa fa-shopping-cart me-2 text-primary"></i>Thêm vào giỏ hàng
                        </a>

                    </div>
                </div>
            </div>
        </div>';
                                    }
                                    echo $hoathinhhtml;
                                    ?>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <div class="container py-5">
            <div class="pb-4 mb-4" style="border-bottom: 1px solid rgba(226, 175, 24, 0.5) ;">
                <div class="row g-4">
                    <div class="col-lg-3">
                        <a href="#">
                            <h1 class="text-primary mb-0">Teddy Boo</h1>
                            <p class="text-secondary mb-0">Sản phẩm chất lượng</p>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <div class="position-relative mx-auto">
                            <input class="form-control border-0 w-100 py-3 px-4 rounded-pill" type="email" placeholder="Email của bạn">
                            <button type="submit" class="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style="top: 0; right: 0;">Đăng ký ngay</button>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="d-flex justify-content-end pt-3">
                            <a class="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-secondary btn-md-square rounded-circle" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="d-flex flex-column text-start footer-item">
                        <h4 class="text-light mb-3">Thông Tin Cửa Hàng</h4>
                        <a class="btn-link" href="">Về Teddy Boo</a>
                        <a class="btn-link" href="">Liên Hệ</a>
                        <a class="btn-link" href="">Chính Sách Bảo Mật</a>
                        <a class="btn-link" href="">Điều Khoản & Điều Kiện</a>
                        <a class="btn-link" href="">Chính Sách Đổi Trả</a>
                        <a class="btn-link" href="">Câu Hỏi Thường Gặp & Trợ Giúp</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="d-flex flex-column text-start footer-item">
                        <h4 class="text-light mb-3">Tài Khoản</h4>
                        <a class="btn-link" href="">Tài Khoản Của Tôi</a>
                        <a class="btn-link" href="">Giỏ Hàng</a>
                        <a class="btn-link" href="">Danh Sách Yêu Thích</a>
                        <a class="btn-link" href="">Lịch Sử Đơn Hàng</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-item">
                        <h4 class="text-light mb-3">Liên Hệ</h4>
                        <p>Địa chỉ: 123 Tôn Đức Thắng, Phường Hòa Khánh Nam, Liên Chiểu, Đà Nẵng</p>
                        <p>Email: teddyboo.nhom8.@gmail.com</p>
                        <p>Điện thoại: +0123 4567 8910</p>
                        <p>Phương thức thanh toán</p>
                        <img src="img/payment.png" class="img-fluid" alt="">
                    </div>
                </div>
            </div>
            <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>
            <script src="./js/jquery.min.js"></script>
            <script src="./js/bootstrap.bundle.min.js"></script>
            <script src="./js/product.js"></script>
            <script src="./js/index.js"></script>
            <script src="./js/main.js"></script>
</body>

</html>
<?php
$conn->close();
?>