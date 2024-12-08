

Kiemtraduongdan = (x) =>{
    let duongdanhinhanh = "";
        if (x.idLoai === 100) {
            duongdanhinhanh = "img/GẤU BÔNG/Gấu bông teddy/"
        }

        
        if(x.idLoai===2){
            duongdanhinhanh = "img/GẤU BÔNG/Gấu bông hoạt hình/"
        }
        return duongdanhinhanh;
}







// Hàm thanh toán
Payment = () => {
    ///Lấy về các giá trị từ ô input
    let fullName = document.getElementById('fullName').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let sum = document.getElementById('sum').innerText;
    if (fullName.length < 1) {
        alert("Hãy nhập đủ họ tên!");
        return;
    }
    if (address.length < 1) {
        alert("Hãy nhập địa chỉ!");
        return;
    }
    if (phone.length < 1) {
        alert("Hãy nhập số điện thoại!");
        return;

    }
    let cart = JSON.parse(localStorage.getItem('cart') || []);
    //Khai báo danh sách và đối tượng đon hàng
    let listBill;
    let bill = {
        fullName: fullName,
        phone: phone,
        address: address,
        sum: parseVNDtoNumber(sum),
    }
    bill.product = [];
    //Duyệt qua các sản phẩm đã đặt và thêm vào đối tượng
    cart.map(x => {
        console.log(x);
        bill.product.push(x);
    });
    //Nếu kho lưu trữ cục bộ có key là bill mà trống gán nó bằng đối tượng đó luôn
    if (localStorage.getItem('bill') === null) {
        listBill = [];
        listBill = [bill];
    }
    else {
        //Ngược lại thì thêm vào sau
        listBill = JSON.parse(localStorage.getItem('bill') || []);
        listBill.push(bill);
    }
    if (confirm("Xác nhận thanh toán đơn hàng?")) {
        //Đẩy giá trị vào bộ nhớ cục bộ cách xem là F12 tìm phần application mở local storage
        localStorage.setItem('bill', JSON.stringify(listBill));
        ///Hiển thị thông báo
        alert("Thanh toán thành công");
        ///Xóa giỏ hàng
        localStorage.removeItem('cart');
        ///Load lại trang
        window.location.reload();
    }

}


//Thêm voucher
AddCoupon = () => {
    //Danh sách voucher 
    // 0,1 ứng với 10% có thể thêm theo định dạng này

    //Lấy về giá trị nhập từ ô input
    let coupon = document.getElementById('coupon').value;
    /// Lấy về đối tượng voucher thông qua giá code nhập vào
    let value = vouchers.find(voucher => voucher.code.trim() === coupon.trim());
    //Nếu voucher tồn tại
    if (value !== null && value !== undefined) {
        LoadCart();
        //Lấy về thẻ có id là total và sum
        let total = document.getElementById('total');
        let sum = document.getElementById('sum');
        //Tính tổng có voucher và gán giá trị để hiển thị ra màn hình
        total.innerText = formatMoney(Total());
        sum.innerText = formatMoney(Total() + 20000 - (Total() * value.value));
        alert("Đã áp dụng giảm giá")
    }
    else {
        //Ngược lại không tìm thấy voucher
        alert('Mã giảm giá không tồn tại');
    }
}

//Tải dữ liệu giỏ hàng
LoadCart = () => {
    //Lấy dữ liệu về từ localStorage
    var cart = JSON.parse(localStorage.getItem('cart') || []);
    //Xây dựng thẻ html
    let html = "";
    let data = document.getElementById('tbody');
    
    //duyệt qua giỏ hàng lấy dữ liệu
    cart.map(x => {
        
        html += `
    <tr>
    <th scope="row">
        <div class="d-flex align-items-center">
            <img src="${Kiemtraduongdan(x) + x.anh}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
        </div>
    </th>
    <td>
        <p class="mb-0 mt-4">${x.ten}</p>
    </td>
    <td>
        <p class="mb-0 mt-4">${formatMoney(x.gia)}</p>
    </td>
    <td>
        <div class="input-group quantity mt-4" style="width: 105px;">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-minus rounded-circle bg-light border" onclick="DecreaseItem(${x.id})">
                <i class="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" class="form-control form-control-sm text-center border-0" value="${x.quantity}">
            <div class="input-group-btn">
                <button class="btn btn-sm btn-plus rounded-circle bg-light border" onclick="IncreaseItem(${x.id})">
                    <i class="fa fa-plus"></i>
                </button>
            </div>
        </div>
    </td>
    <td>
        <p class="mb-0 mt-4">${formatMoney(x.gia * x.quantity)}</p>
    </td>
    <td>
        <button class="btn btn-md rounded-circle bg-light border mt-4" onclick="removeItem(${x.id})">
            <i class="fa fa-times text-danger"></i>
        </button>
    </td>
</tr>
    `
    });
    ///Tính tổng , gán biến
    data.innerHTML = html;
    let total = document.getElementById('total');
    let sum = document.getElementById('sum');
    total.innerText = formatMoney(Total());
    sum.innerText = formatMoney(Total() + 20000);
   console.log(sum);

}


//Hàm tính tổng tiền
Total = () => {
    let total = 0;
    var cart = JSON.parse(localStorage.getItem('cart') || []);
    cart.map(x => {
        total += x.gia * x.quantity;
    });
    return total;
}

//Tăng số lượng trong giỏ hàng
IncreaseItem = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart') || []);
    //Nếu đúng id thêm 1 số lượng
    for (let x of cart) {
        if (x.id === id) {
            x.quantity++;
            break;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    LoadCart();
}

DecreaseItem = (id) => {
    let cart = JSON.parse(localStorage.getItem('cart') || []);
    ///Duyệt giỏ hàng
    for (let x of cart) {
        //Nếu đúng id trừ đi 1 số lượng
        if (x.id === id) {
            if (x.quantity > 1) {
                x.quantity--;
            }
            break;
        }
    }
    ///Cập nhật lại giỏ hàng
    localStorage.setItem('cart', JSON.stringify(cart));
    LoadCart();

}



///Xóa sản phẩm khỏi giỏ hàng
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart') || []);
    if (confirm("bạn có muốn xóa sản phẩm này khỏi giỏ hàng? ")) {
        ///Lọc ra sản phẩm không có trong giỏ hàng
        let local_storage = cart.filter((x) => x.id != id);
        ///Cập nhật lại giỏ hàng
        localStorage.setItem('cart', JSON.stringify(local_storage));
        LoadCart();
    }
    else {
        return
    }
}
LoadCart();




