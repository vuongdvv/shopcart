
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const product = array.find(item => item.id === parseInt(productId));

let duongdanhinhanh = "";
if (product.idLoai === 100) {
    duongdanhinhanh = "img/GẤU BÔNG/Gấu bông teddy/"
}

if (product.idLoai === 3) {
    duongdanhinhanh = "img/BÚP BÊ/Thời trang/"
}
if (product.idLoai === 105) {
    duongdanhinhanh = "img/BÚP BÊ/Handmade/"
}

if (product.idLoai === 101) {
    duongdanhinhanh = "img/BÚP BÊ/Barbie/"
}
if(product.idLoai===2){
    duongdanhinhanh = "img/GẤU BÔNG/Gấu bông hoạt hình/"
}

let html = "";
let hinhanh = "";

const hienthi = document.getElementById('chitietsanpham');
const sanphamlq = document.getElementById('sanphamlienquan');
const hinhanhchitiet = document.getElementById('hinhanh');


if (hienthi && product) {
   
  hinhanh +=
    `
    <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" >
                          <img src="${duongdanhinhanh+product.anh}" class="d-block w-100" alt="Product Image 1">
                        </div>
                    </div>
                </div>
            
                <div class="product-details mt-3">
                    <h3 class="text-primary">Thông tin sản phẩm</h3>
            
                    <div class="detail-item">
                        <h5 class="detail-title">Mã sản phẩm</h5>
                        <p>${product.id}</p>
                    </div>
            
                    <div class="detail-item">
                        <h5 class="detail-title">Kích thước</h5>
                        <p>${product.kichThuoc}</p>
                    </div>
            
                    <div class="detail-item">
                        <h5 class="detail-title">Mô tả</h5>
                        <p>${product.moTa}</p>
                    </div>
                </div>
   ` 
   html += `
   <h2 class="text-primary">${product.ten}</h2>
   <p class="text-secondary">Chất liệu: Vải cotton cao cấp, mềm mại và an toàn cho trẻ em.</p>
   <h3 class="text-danger">Giá: ${formatMoney(product.gia)} VNĐ</h3>
   <p class="mb-4">Mô tả sản phẩm: ${product.moTa}</p>

   <div class="d-flex align-items-center mb-4">
       <label class="me-2" for="quantity">Số lượng:</label>
       <input type="number" id="quantity" class="form-control w-25" value="1" min="1">
   </div>
   <button class="btn btn-primary py-2 px-4"  onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>

   <div class="mt-4">
       <h4 class="text-light mb-3">Đánh giá sản phẩm</h4>
       <div class="d-flex align-items-center mb-2">
           <i class="fas fa-star text-warning"></i>
           <i class="fas fa-star text-warning"></i>
           <i class="fas fa-star text-warning"></i>
           <i class="fas fa-star text-warning"></i>
           <i class="fas fa-star-half-alt text-warning"></i>
           <span class="ms-2">4.5 (120 Đánh giá)</span>
       </div>
       <button class="btn btn-outline-secondary py-2 px-4">Đọc thêm</button>
   </div>

   <!-- Trust and Address Information Section -->
   <div class="mt-5">
       <h4 class="text-primary">Vì sao chọn chúng tôi?</h4>
       <ul class="list-unstyled">
           <li><i class="fas fa-check-circle text-success me-2"></i> Uy tín với hơn 10 năm kinh nghiệm trong lĩnh vực đồ chơi trẻ em</li>
           <li><i class="fas fa-check-circle text-success me-2"></i> Sản phẩm chất lượng, đảm bảo an toàn cho trẻ nhỏ</li>
           <li><i class="fas fa-check-circle text-success me-2"></i> Chính sách đổi trả linh hoạt, hỗ trợ khách hàng tận tình</li>
       </ul>

       <h5 class="text-secondary mt-4">Địa chỉ cửa hàng:</h5>
       <p class="mb-1">Số 123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</p>
       <p><i class="fas fa-phone me-2"></i>Số điện thoại liên hệ: <strong>0123 456 789</strong></p>
   </div>
`;

} else {
   html = "<p class='text-danger'>Sản phẩm không tìm thấy.</p>";
}




let relatedHtml = '';

if (product) {
    const relatedProducts = array.filter(item => item.idLoai === product.idLoai && item.id !== productId);

    relatedProducts.slice(0,4).forEach(item => {
        relatedHtml += `
        
            <div class="col-md-3">
                <div class="card">
                    <img src="${duongdanhinhanh+item.anh}" class="card-img-top" alt="${item.ten}">
                    <div class="card-body">
                        <h5 class="card-title" style ="height:60px">${item.ten}</h5>
                        <p class="card-text" style ="height:60px">${item.moTa ? item.moTa.substring(0, 50) + '...' : 'Mô tả sản phẩm liên quan'}</p>
                        <a href="?id=${item.id}" class="btn btn-primary">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        `;
    });

}



if (hienthi) {
    hienthi.innerHTML = html;
    sanphamlq.innerHTML = relatedHtml;
    hinhanhchitiet.innerHTML = hinhanh;
}







//thêm vào giỏ hàng
function addToCart(item) {
    var quantity = document.getElementById('quantity').value;
    ///Lấy về đối tượng trong danh sách có id giống id truyền vào
    let value = array.find(product => product.id === item);
    ///Đặt số lượng = 1;
    value.quantity = quantity;
    let local_storage = [];
    /// Nếu kho lưu trữ có key là cart trống thì gán = đối tượng đó
    if (localStorage.getItem('cart') == null) {
      local_storage = [value];
    } else {
      local_storage = JSON.parse(localStorage.getItem('cart')|| '[]');
      let ok = true;
      //Ngược lại nếu sản phẩm đó có trong giỏ hàng thì số lượng +1;
      for (let x of local_storage) {
        if (x.id === item) {
          x.quantity += 1;
          ok = false;
          break;
        }
      }
      //Chưa có thì thêm vào danh sách;
      if(ok){
        local_storage.push(value); 
      } 
    }
    ///Cập nhật giỏ hàng và thông báo
    localStorage.setItem('cart', JSON.stringify(local_storage));
    alert("Thêm giỏ hàng thành công!")

  }










function formatMoney(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}
