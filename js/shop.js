 
const message = document.querySelector('#search');
  // Sự kiện input khi giá trị của input search thay đổi
  message.addEventListener('input', function () {
    console.log(this.value);
    let filteredProducts = array.filter(product => product.ten.toLowerCase().includes(this.value));
    // Gọi hàm loadData để hiển thị dữ liệu đã lọc
    loadData(filteredProducts);
 });
  
 
 
 const rangeInput = document.getElementById('rangeInput');
 const amountOutput = document.getElementById('amount');

    // Sự kiện input khi giá trị của input range thay đổi
    rangeInput.addEventListener('input', function() {
        // Lấy giá trị của input range và cập nhật giá trị output
        const value = rangeInput.value;
        let arrayValue = array.filter(product => product.gia >=value);
        loadData(arrayValue);
        amountOutput.textContent = value;
        
        // Thực hiện các hành động khác khi giá trị thay đổi ở đây
        // Ví dụ: gửi giá trị mới đến server, cập nhật giao diện, v.v.
    });
 
 // Lấy tất cả các radio buttons
 
 
 const radioButtons = document.querySelectorAll('input[type="radio"]');

 // Lặp qua từng radio button và gán sự kiện onchange cho mỗi radio button
 radioButtons.forEach(radioButton => {
     radioButton.addEventListener('change', function() {
         // Kiểm tra xem radio button đã được chọn chưa
         if (this.checked) {
             // Lấy giá trị của radio button được chọn và hiển thị nó
             const selectedValue = this.value;
             let arrayValue = array.filter(product => product.idLoai == selectedValue);
             //Nếu giá trị tìm >0
             if(arrayValue.length>0){
              ///Hiển thị giá trị cần tìm
              loadData(arrayValue);
             }
             else{
              //Không thì hiển thị tất cả
              loadData(array);
             }
             // Thực hiện các thao tác mong muốn khác ở đây nếu cần
         }
     });
 });


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







function loadData(array){
    
    let data = document.getElementById('data');
    let html2 =" ";
    array.forEach(x=>{
    html2+= `
    <div class="col-md-6 col-lg-6 col-xl-4">
    <div class="rounded position-relative fruite-item">
        <div class="fruite-img">
            <img src="${Kiemtraduongdan(x)+ x.anh}" class="img-fluid w-100 rounded-top" alt="">
        </div>
        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai}</div>
        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4 style ="height:40px">${x.ten}</h4>
            <p ></p>
            <div class="d-flex justify-content-between flex-lg-wrap">
                <p  class="text-dark fs-5 fw-bold mb-0">${formatMoney(x.gia)}</p>
                <a  onclick="addToCart(${x.id})"  class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
            </div>
        </div>
    </div>
   </div>
    
    `});
    data.innerHTML = html2;
}


loadData(array);  


function addToCart(item) {

    let value = product.find(product => product.id === item);
    value.quantity = 1;
    let local_storage = [];
    if (localStorage.getItem('cart') == null) {
      local_storage = [value];
    } else {
      local_storage = JSON.parse(localStorage.getItem('cart')|| '[]');
      let ok = true;
      for (let x of local_storage) {
        if (x.id === item) {
          x.quantity += 1;
          ok = false;
          break;
        }
      }
      if(ok){
        local_storage.push(value); 
      } 
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
    alert("Thêm giỏ hàng thành công!")

  }




