
///Xây dựng dữ liệu để hiển thị
function loadData(){
    let hoathinh = document.getElementById('gauhoathinh');
    let data = document.getElementById('listproduct');
    let hoabong = document.getElementById('listhoabong');
    let teddy = document.getElementById('listteddy');
    let bigsize = document.getElementById('teddybigsize');
    let handMades = document.getElementById('handMade');
    

    let hoathinhhtml="";
    ///Chỉ lấy ra 4 sản phẩm
    cartoonTeddyBears.slice(0,4).forEach(x=>{
        hoathinhhtml+= `
         <div class="col-md-6 col-lg-4 col-xl-3">
         <div class="rounded position-relative fruite-item">
            <a href="detail.html?id=${x.id}">
                     <div class="fruite-img">
                         <img src="img/GẤU BÔNG/Gấu bông hoạt hình/${x.anh}" class="img-fluid w-100 rounded-top" alt="">
                     </div>
                 </a>
             <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai==100?"Gấu bông":""}</div>
             <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                 <h4 style ="height:60px">${x.ten} </h4>
                 <p></p>
                 <div class="d-flex justify-content-between flex-lg-wrap">
                     <p class="text-dark fs-5 fw-bold mb-0">
                      <span>${x.kichThuoc}</span> - 
                     ${formatMoney(x.gia)}</p>
                     <a  onclick="addToCart(${x.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng</a>
                 </div>
             </div>
         </div>
         </div>
         `
 
     });
     hoathinh.innerHTML = hoathinhhtml;
   let html = "";
    gauBongArray.slice(0,4).forEach(x=>{
       html+= `
        <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded position-relative fruite-item">
           <a href="detail.html?id=${x.id}">
                    <div class="fruite-img">
                        <img src="img/GẤU BÔNG/Gấu bông teddy/${x.anh}" class="img-fluid w-100 rounded-top" alt="">
                    </div>
                </a>
            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai==100?"Gấu bông":""}</div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4 style ="height:60px">${x.ten} </h4>
                <p></p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">
                     <span>${x.kichThuoc}</span> - 
                    ${formatMoney(x.gia)}</p>
                    <a  onclick="addToCart(${x.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
        </div>
        `

    });
    data.innerHTML = html;
    
    let html2="";
    ///Chỉ lấy ra 4 sản phẩm
    gauBong.slice(0,4).forEach(x=>{
       html2+= `
        <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded position-relative fruite-item">
              <a href="detail.html?id=${x.id}">
            <div class="fruite-img">
                <img src="${x.anh}" class="img-fluid w-100 rounded-top" alt="">
            </div>
            </a>
            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai==2?"Hoa bông":""}</div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4 style ="height:60px">${x.ten} </h4>
                <p></p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p  style ="height:60px" class="text-dark fs-5 fw-bold mb-0">
                     <span>${x.kichThuoc}</span> - 
                    ${formatMoney(x.gia)}</p>
                    <a  onclick="addToCart(${x.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
        </div>
        `

    });
    hoabong.innerHTML = html2;  
    

    let html3="";
    ///Chỉ lấy ra 4 sản phẩm
    thoitrang.slice(0,4).forEach(x=>{
       html3+= `
        <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded position-relative fruite-item">
              <a href="detail.html?id=${x.id}">
            <div class="fruite-img">
                <img src="img/BÚP BÊ/Thời trang/${x.anh}" class="img-fluid w-100 rounded-top" alt="">
            </div>
            </a>
            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai==1?"Hoa bông":""}</div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4 style ="height:60px">${x.ten} </h4>
                <p></p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">
                     <span>${x.kichThuoc}</span> - 
                    ${formatMoney(x.gia)}</p>
                    <a  onclick="addToCart(${x.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
        </div>
        `

    });
    teddy.innerHTML = html3;



    let html4="";
    ///Chỉ lấy ra 4 sản phẩm
    barbie.slice(0,4).forEach(x=>{
       html4+= `
        <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded position-relative fruite-item">
              <a href="detail.html?id=${x.id}">
            <div class="fruite-img">
                <img src="img/BÚP BÊ/Barbie/${x.anh}" class="img-fluid w-100 rounded-top" alt="">
            </div>
            </a>
            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai==1?"Hoa bông":""}</div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4 style ="height:60px">${x.ten} </h4>
                <p></p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">
                     <span>${x.kichThuoc}</span> - 
                    ${formatMoney(x.gia)}</p>
                    <a  onclick="addToCart(${x.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
        </div>
        `

    });

      
    bigsize.innerHTML = html4;


    let handMadehtml="";
    ///Chỉ lấy ra 4 sản phẩm
    handMade.slice(0,4).forEach(x=>{
        handMadehtml+= `
        <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded position-relative fruite-item">
              <a href="detail.html?id=${x.id}">
            <div class="fruite-img">
                <img src="img/BÚP BÊ/Handmade/${x.anh}" class="img-fluid w-100 rounded-top" alt="">
            </div>
            </a>
            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${x.idLoai==1?"Hoa bông":""}</div>
            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4 style ="height:60px">${x.ten} </h4>
                <p></p>
                <div class="d-flex justify-content-between flex-lg-wrap">
                    <p class="text-dark fs-5 fw-bold mb-0">
                     <span>${x.kichThuoc}</span> - 
                    ${formatMoney(x.gia)}</p>
                    <a  onclick="addToCart(${x.id})" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i>Thêm vào giỏ hàng</a>
                </div>
            </div>
        </div>
        </div>
        `

    });

      
    handMades.innerHTML = handMadehtml;
    
}



//thêm vào giỏ hàng
function addToCart(item) {
    
    ///Lấy về đối tượng trong danh sách có id giống id truyền vào
    let value = array.find(product => product.id === item);
    ///Đặt số lượng = 1;
    value.quantity = 1;
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

loadData();



