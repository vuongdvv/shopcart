


    const username = JSON.parse(localStorage.getItem('user_'));
    const authLinks = document.getElementById('frofile');
    const userGreeting = document.getElementById('user');


    if (username) {
        authLinks.style.display = 'none'; 
        userGreeting.style.display = 'block'; 
        userGreeting.textContent = `Xin chào, ${username.fullname}`; 
    } else {
        authLinks.style.display = 'block';
        userGreeting.style.display = 'none'; 
    }

// tạo 1 mảng các dối tượng dữ liệu sản phẩm với các thuộc tính id tên , hình ảnh...
const gauBongArray = [
    {
        id: 1,
        idLoai: 100,
        ten: "Gấu Lộn Nhào Vào Lòng Em",
        gia: 95000,
        kichThuoc: "45cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "1.png"
    },
    {
        id: 2,
        idLoai: 100,
        ten: "Gấu Nâu Ngã Tựa Dễ Thương",
        gia: 120000,
        kichThuoc: "45cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "2.png"
    },
    {
        id: 3,
        idLoai: 100,
        ten: "Gấu Bông Nhỏ Bé Tí",
        gia: 85000,
        kichThuoc: "30cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "3.png"
    },
    {
        id: 4,
        idLoai: 100,
        ten: "Gấu Teddy Nhìu Màu Xinh Iu",
        gia: 65000,
        kichThuoc: "25cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "4.png"
    },
    {
        id: 5,
        idLoai: 100,
        ten: "Teddy Thẫn Thờ",
        gia: 130000,
        kichThuoc: "30cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "5.png"
    },
    {
        id: 6,
        idLoai: 100,
        ten: "Đôi Gấu Đưa Mắt Nhìn Bạn",
        gia: 270000,
        kichThuoc: "100cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "6.png"
    },
    {
        id: 7,
        idLoai: 100,
        ten: "Thỏ Hồng Xinh Xắn",
        gia: 110000,
        kichThuoc: "50cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "7.png"
    },
    {
        id: 8,
        idLoai: 100,
        ten: "Gấu Teddy Hồng Nhỏ Tặng Kèm Giỏ Ngọc",
        gia: 185000,
        kichThuoc: "80cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "8.png"
    },
    {
        id: 9,
        idLoai: 100,
        ten: "Gấu Bông Mặc Đồ Stitch",
        gia: 280000,
        kichThuoc: "78cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "9.png"
    },
    {
        id: 10,
        idLoai: 100,
        ten: "Teddy Đeo Kính Xao Xuyến",
        gia: 150000,
        kichThuoc: "50cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "10.png"
    },
    {
        id: 11,
        idLoai: 100,
        ten: "Teddy Nhỏ Ngồi",
        gia: 90000,
        kichThuoc: "40cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "11.png"
    },
    {
        id: 12,
        idLoai: 100,
        ten: "Teddy Nâu Bé Iu",
        gia: 80000,
        kichThuoc: "30cm",
        moTa: "Gấu bông Teddy – người bạn đáng yêu và ấm áp dành cho mọi lứa tuổi! Với thiết kế dễ thương, chất liệu mềm mại và kích thước vừa phải, gấu bông Teddy là món quà tuyệt vời để ôm ấp, mang lại cảm giác an yên. Sản phẩm phù hợp để tặng cho những dịp đặc biệt, thể hiện tình cảm chân thành và làm sáng bừng không gian sống. Hãy chọn ngay gấu bông Teddy để mang lại niềm vui và sự ấm áp cho người nhận!",
        anh: "12.png"
    }
];


const cartoonTeddyBears = [
    {
        id: 11,
        idLoai: 2,
        ten: "Capybara Chúa Của Muôn Loài",
        gia: 240000,
        kichThuoc: "60cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "1.png"
    },
    {
        id: 12,
        idLoai: 2,
        ten: "Gấu Hồng",
        gia: 340000,
        kichThuoc: "80cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "2.png"
    },
    {
        id: 13,
        idLoai: 2,
        ten: "Loopy Hồng",
        gia: 250000,
        kichThuoc: "50cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "3.png"
    },
    {
        id: 14,
        idLoai: 2,
        ten: "Jerry Nằm Ống Ngồi Hóng Chuyện",
        gia: 430000,
        kichThuoc: "80cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "4.png"
    },
    {
        id: 15,
        idLoai: 2,
        ten: "Kuromi Ver Sữa Dâu Gắn Nơ",
        gia: 185000,
        kichThuoc: "45cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "5.png"
    },
    {
        id: 16,
        idLoai: 2,
        ten: "Cừu Hồng Cute",
        gia: 270000,
        kichThuoc: "80cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "6.png"
    },
    {
        id: 17,
        idLoai: 2,
        ten: "Thỏ Hoạt Hình",
        gia: 285000,
        kichThuoc: "75cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "7.png"
    },
    {
        id: 18,
        idLoai: 2,
        ten: "Cừu Ham Ăn",
        gia: 110000,
        kichThuoc: "45cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "8.png"
    },
    {
        id: 19,
        idLoai: 2,
        ten: "Gấu Bông Xanh Biển",
        gia: 120000,
        kichThuoc: "45cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "9.png"
    },
    {
        id: 20,
        idLoai: 2,
        ten: "Gấu Pony Cầu Vồng Đã Kích Thước",
        gia: 540000,
        kichThuoc: "90cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "10.png"
    },
    {
        id: 21,
        idLoai: 2,
        ten: "Tom Dài Thườn Thượt Đang Cọc Đừng Chọc",
        gia: 650000,
        kichThuoc: "90cm",
        thongTin: "Gấu bông hoạt hình – món quà dễ thương và ngộ nghĩnh cho mọi lứa tuổi! Được lấy cảm hứng từ các nhân vật hoạt hình yêu thích, gấu bông mang đến vẻ ngoài đáng yêu, sinh động, giúp bé thêm vui thích và gắn bó. Với chất liệu mềm mại, an toàn, gấu bông hoạt hình là người bạn đồng hành hoàn hảo để ôm ấp, chơi đùa, và trang trí không gian. Sắm ngay gấu bông hoạt hình để mang lại nụ cười và niềm vui cho bé yêu và người thân!",
        anh: "11.png"
    }
];

const thoitrang =
    [
        {
            "id": 221,
            "idLoai": 3,
            "ten": "Em Gái Nhỏ",
            "gia": 350000,
            "kichThuoc": "17cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "1.png"
        },
        {
            "id": 222,
            "idLoai": 3,
            "ten": "Cô Bé Nhật Bản",
            "gia": 650000,
            "kichThuoc": "19cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "2.png"
        },
        {
            "id": 223,
            "idLoai": 3,
            "ten": "Em Gái Nhà Bên",
            "gia": 350000,
            "kichThuoc": "15cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "3.png"
        },
        {
            "id": 224,
            "idLoai": 3,
            "ten": "Em Gái Người Nhật",
            "gia": 435000,
            "kichThuoc": "17cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "4.png"
        },
        {
            "id": 225,
            "idLoai": 3,
            "ten": "Công Chúa Tây Châu",
            "gia": 570000,
            "kichThuoc": "18cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "5.png"
        },
        {
            "id": 226,
            "idLoai": 3,
            "ten": "Xuân Hoa Yếm",
            "gia": 760000,
            "kichThuoc": "20cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "6.png"
        },
        {
            "id": 227,
            "idLoai": 3,
            "ten": "Công Chúa Tóc Hồng",
            "gia": 290000,
            "kichThuoc": "17cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "7.png"
        },
        {
            "id": 228,
            "idLoai": 3,
            "ten": "Tiểu Thư Pháp Quý Tộc",
            "gia": 500000,
            "kichThuoc": "16cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "8.png"
        },
        {
            "id": 229,
            "idLoai": 3,
            "ten": "Công Chúa Ngủ Trong Mơ",
            "gia": 230000,
            "kichThuoc": "18cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "9.png"
        },
        {
            "id": 230,
            "idLoai": 3,
            "ten": "Cô Dâu Hào Môn",
            "gia": 450000,
            "kichThuoc": "18cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "10.png"
        },
        {
            "id": 231,
            "idLoai": 3,
            "ten": "Búp Bê Thôn Nữ",
            "gia": 280000,
            "kichThuoc": "15cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "11.png"
        },
        {
            "id": 232,
            "idLoai": 3,
            "ten": "Búp Bê Hong Hae In Đi Tìm Chồng",
            "gia": 300000,
            "kichThuoc": "15cm",
            "thongTin": "Búp bê thời trang – lựa chọn hoàn hảo cho bé yêu đam mê sáng tạo! Với thiết kế hiện đại, đa dạng trang phục và phụ kiện, búp bê thời trang giúp bé tự do phối đồ và khám phá thế giới thời trang. Mỗi búp bê là một phong cách khác biệt, mang đến niềm vui và khơi dậy trí tưởng tượng. Sắm ngay búp bê thời trang để bé yêu có trải nghiệm thú vị và thỏa sức thể hiện cá tính riêng!",
            "anh": "12.png"
        }
    ]


    const handMade =

    [
        {
            "id": 111,
            "idLoai": 105,
            "ten": "Cô Gái Tóc Xù",
            "gia": 310500,
            "kichThuoc": "13cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "1.png"
        },
        {
            "id": 112,
            "idLoai": 105,
            "ten": "Búp Bê Tóc Xù Hoa",
            "gia": 270000,
            "kichThuoc": "12cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "2.png"
        },
        {
            "id": 113,
            "idLoai": 105,
            "ten": "Thủy Thủ Mặt Trăng",
            "gia": 350000,
            "kichThuoc": "14cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "3.png"
        },
        {
            "id": 114,
            "idLoai": 105,
            "ten": "Công Chúa Tóc Rối",
            "gia": 150000,
            "kichThuoc": "14cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "4.png"
        },
        {
            "id": 115,
            "idLoai": 105,
            "ten": "Hoàng Tử Bé",
            "gia": 430000,
            "kichThuoc": "13cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "5.png"
        },
        {
            "id": 116,
            "idLoai": 105,
            "ten": "Nàng Xuân",
            "gia": 340000,
            "kichThuoc": "18cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "6.png"
        },
        {
            "id": 117,
            "idLoai": 105,
            "ten": "Tinkerbell",
            "gia": 230000,
            "kichThuoc": "10cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "7.png"
        },
        {
            "id": 118,
            "idLoai": 105,
            "ten": "Joy And Sadness",
            "gia": 250000,
            "kichThuoc": "12cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "8.png"
        },
        {
            "id": 119,
            "idLoai": 105,
            "ten": "Nấm Nhỏ",
            "gia": 75000,
            "kichThuoc": "20cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "9.png"
        },
        {
            "id": 1110,
            "idLoai": 105,
            "ten": "Kuromi Tức Giận",
            "gia": 450000,
            "kichThuoc": "25cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "10.png"
        },
        {
            "id": 1111,
            "idLoai": 105,
            "ten": "Nàng Hoa",
            "gia": 220000,
            "kichThuoc": "10cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "11.png"
        },
        {
            "id": 1112,
            "idLoai": 105,
            "ten": "Toy Story",
            "gia": 350000,
            "kichThuoc": "17cm",
            "moTa": "Búp bê handmade – món quà độc đáo và ý nghĩa dành cho bé và người thân yêu! Được làm thủ công tỉ mỉ từ chất liệu an toàn, búp bê handmade mang vẻ đẹp mộc mạc và phong cách riêng biệt. Mỗi búp bê là một tác phẩm có hồn, mang đến sự ấm áp và gần gũi. Sắm ngay búp bê handmade để làm quà tặng đầy tình cảm, tạo dấu ấn riêng và khơi gợi sự sáng tạo cho bé yêu!",
            "anh": "12.png"
        }
    ]

    const barbie =
    [
            {
                "id": 301,
                "idLoai": 101,
                "ten": "Barbie Hồng",
                "gia": 210000,
                "kichThuoc": "13cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "1.png"
            },
            {
                "id": 302,
                "idLoai": 101,
                "ten": "Barbie Đầu Bếp",
                "gia": 200000,
                "kichThuoc": "10cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "2.png"
            },
            {
                "id": 303,
                "idLoai": 101,
                "ten": "Barbie Cơ Trưởng",
                "gia": 240000,
                "kichThuoc": "10cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "3.png"
            },
            {
                "id": 304,
                "idLoai": 101,
                "ten": "Đôi Bạn Thân",
                "gia": 250000,
                "kichThuoc": "15cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "4.png"
            },
            {
                "id": 305,
                "idLoai": 101,
                "ten": "Búp Bê Hong Hae In",
                "gia": 340000,
                "kichThuoc": "14cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "5.png"
            },
            {
                "id": 306,
                "idLoai": 101,
                "ten": "Barbie Dạo Phố",
                "gia": 210000,
                "kichThuoc": "13cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "6.png"
            },
            {
                "id": 307,
                "idLoai": 101,
                "ten": "Barbie Quý Cô Sành Điệu",
                "gia": 240000,
                "kichThuoc": "14cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "7.png"
            },
            {
                "id": 308,
                "idLoai": 101,
                "ten": "Công Chúa Barbie",
                "gia": 230000,
                "kichThuoc": "13cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "8.png"
            },
            {
                "id": 309,
                "idLoai": 101,
                "ten": "Barbie Sinh Nhật",
                "gia": 250000,
                "kichThuoc": "13cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "9.png"
            },
            {
                "id": 310,
                "idLoai": 101,
                "ten": "Barbie Thôn Nữ Đất Pháp",
                "gia": 240000,
                "kichThuoc": "14cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "10.png"
            },
            {
                "id": 311,
                "idLoai": 101,
                "ten": "Nữ Hoàng Barbie",
                "gia": 245000,
                "kichThuoc": "15cm",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "11.png"
            },
            {
                "id": 312,
                "idLoai": 101,
                "ten": "Đôi Bạn Thân 2",
                "gia": 248000,
                "kichThuoc": "230.000",
                "moTa": "Búp bê Barbie – món quà hoàn hảo cho bé yêu thích sáng tạo! Với thiết kế thời trang tinh tế, Barbie mang đến một thế giới phụ kiện và trang phục đa dạng, cho bé thỏa sức thay đổi phong cách mỗi ngày. Barbie không chỉ là búp bê, mà còn là người bạn đồng hành giúp phát triển trí tưởng tượng. Sắm ngay Barbie để bé yêu có thêm niềm vui và trải nghiệm thế giới đầy màu sắc!",
                "anh": "12.png"
            }

    ]

    const gauBong = [
        {
            "id": 41,
        "idLoai": 33,
            "ten": "Hoa Gấu Nhỏ",
            "gia": 130000,
            "kichThuoc": "30cm",
            "thongTin": "Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/1.png"
        },
        {
            "id": 42,
        "idLoai": 33,
            "ten": "Bó Hoa Xinh Tặng Nàng",
            "gia": 260000,
            "kichThuoc": "40cm X 50cm",
            "thongTin": "Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/2.png"
        },
        {
            "id": 43,
        "idLoai": 33,
            "ten": "Stich Xanh Tinh Nghịch",
            "gia": 430000,
            "kichThuoc": "40cm X 80cm",
            "thongTin": "Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/3.png"
        },
        {
            "id": 44,
        "idLoai": 33,
            "ten": "Loppy Hoa Hồng",
            "gia": 190000,
            "kichThuoc": "60cm",
            "thongTin": "Kích Thước: 30 X 45. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/4.png"
        },
        {
            "id": 45,
        "idLoai": 33,
            "ten": "Bó Báo Hồng",
            "gia": 350000,
            "kichThuoc": "50cm",
            "thongTin": "Kích Thước: 50cm X 80cm. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/5.png"
        },
        {
            "id": 46,
          "idLoai": 33,
            "ten": "Bông Thỏ Tập Hợp",
            "gia": 380000,
            "kichThuoc": "50cm",
            "thongTin": "Kích Thước Thỏ Bông 8cm X 10 Con. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/6.png"
        },
        {
            "id": 47,
          "idLoai": 33,
            "ten": "Bó Bông Dễ Thương",
            "gia": 350000,
            "kichThuoc": "50cm",
            "thongTin": "Kích Thước Thỏ Bông 8cm X 10 Con. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/7.png"
        },
        {
            "id": 48,
          "idLoai": 33,
            "ten": "Bó Hoa Gấu Dâu Cài Hoa",
            "gia": 500000,
            "kichThuoc": "50cm",
            "thongTin": "Kích Thước: Gấu Dâu 8cm X 11. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/8.png"
        },
        {
            "id": 49,
          "idLoai": 33,
            "ten": "Bó Hoa Thỏ Phơi Nắng",
            "gia": 350000,
            "kichThuoc": "50cm",
            "thongTin": "Kích Thước: Hoa Mặt Thỏ 8cm X 8cm X 5 Con/ Bó. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/9.png"
        },
        {
            "id": 50,
    "idLoai": 33,
            "ten": "Bó Hoa Chú Gấu Nhỏ",
            "gia": 280000,
            "kichThuoc": "45cm",
            "thongTin": "Kích Thước: 30cm X 45cm. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/10.png"
        },
        {
            "id": 51,
    "idLoai": 33,
            "ten": "Hoa Vịt Mừng Sinh Nhật",
            "gia": 180000,
            "kichThuoc": "45cm x 20cm",
            "thongTin": "Kích Thước: 45cm X 20cm. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/11.png"
        },
    
    
        {
            "id": 412,
        "idLoai": 33,
            "ten": "Bó Gấu Bông Hồng Soa Biển Nhỏ",
            "gia": 580000,
            "kichThuoc": "50cm x 80cm",
            "thongTin": "Kích Thước: 50cm X 80cm. Bó hoa gấu bông – món quà độc đáo và đáng yêu dành tặng những người thân yêu! Được kết hợp tinh tế từ những chú gấu bông nhỏ xinh cùng hoa giả đầy màu sắc, bó hoa gấu bông mang đến sự mới lạ, dễ thương và ngọt ngào. Đây là lựa chọn tuyệt vời để thay lời yêu thương trong những dịp đặc biệt, giúp tạo bất ngờ và lưu giữ kỷ niệm đẹp. Hãy dành tặng bó hoa gấu bông để gửi trọn tình cảm và mang đến niềm vui cho người nhận!",
            "anh": "img/Gấu Bông/Bó hoa bông/12.png"
        }
    
    ]

















//Hàm dùng để định dạng tiền tệ 
var vouchers = [
    {
        id: 1,
        code: "VOUCHER10",
        value: 0.1,
    },
    {
        id: 2,
        code: "VOUCHER20",
        value: 0.2,
    },
    {
        id: 3,
        code: "VOUCHER40",
        value: 0.4,
    },
    {
        id: 4,
        code: "VOUCHER50",
        value: 0.5,
    },

];
formatMoney = (moneyInput) => {
    let formattedMoney;
    if (!isNaN(moneyInput)) {
        // Chuyển đổi sang số và định dạng tiền tệ VND
        formattedMoney = new Intl.NumberFormat('vi-VN', { style: 'decimal' }).format(moneyInput);
        formattedMoney += ' VND'; // Thêm chữ "VND" sau số tiền
    }
    return formattedMoney;
}


//Hàm chyển tiền về dạng số nguyên nếu dạng kia thì không làm phép tính được 
function parseVNDtoNumber(vndString) {
    // Loại bỏ các ký tự không phải số và ký hiệu tiền tệ
    let numberString = vndString.replace(/\D/g, '');
    // Chuyển đổi chuỗi số thành số JavaScript
    let number = parseInt(numberString);
    return number;
}

const array = gauBongArray.concat(gauBongArray).concat(cartoonTeddyBears).concat(thoitrang).concat(handMade).concat(barbie).concat(gauBong)
