window.onload = function() {
var listPro = [
  {
    id: "1",
    name: "Samsung galaxy note 7",
    price: 1000,
    image: "anh1.jpg"
  },
  {
    id: "2",
    name: "Iphone  7",
    price: 1200,
    image: "anh2.jpg"
  },
  {
    id: "3",
    name: "Samsung Y",
    price: 400,
    image: "anh3.jpg"
  },
  {
    id: "4",
    name: "Zenphone 5",
    price: 560,
    image: "anh4.jpg"
  },
  {
    id: "5",
    name: "Asus 5214",
    price: 1450,
    image: "anh5.jpg"
  },
  {
    id: "6",
    name: "Dell inspiron 3542",
    price: 1500,
    image: "anh6.jpg"
  }
];

var selectedProduct = JSON.parse(window.localStorage.getItem('storage_pro'));
if(selectedProduct === null) selectedProduct = [];
var count_selectedPro = document.getElementById('count-selectedPro');
var product_list = document.getElementById('product-list');
var pro_selected = this.document.getElementById('pro-selected');

if(count_selectedPro) {
  count_selectedPro.innerHTML = selectedProduct.length;
}

function showProduct() {
  var content = "";
  for(var i = 0; i< listPro.length; i++) {    
    var checkSelected = "";   
    if(selectedProduct.includes(listPro[i].id)) checkSelected = 'disabled';
    else checkSelected = '';
    
    content +=  '<li class="product-item">' +
                  '<a href="" class="product-info"><img src="images/' + listPro[i].image + '" alt=""></a>' +
                  '<div class="detail-infor">' +
                    '<h3>' + listPro[i].name +  '</h3>' +
                    '<h3>' + listPro[i].price + '</h3>' +
                    '<button class="btn-add-to-cart" id="' + listPro[i].id + '" ' + checkSelected +  '>Add to cart</button>' + 
                  '</div>' +
                '</li>';  
  }
  product_list.innerHTML = content;
  var btnList = document.getElementsByClassName('btn-add-to-cart');
  for(var i = 0; i< btnList.length; i++) {
    btnList[i].addEventListener('click', addtoCart);    
  }
}
function changeCounter() {
  count_selectedPro.innerHTML = selectedProduct.length;
}
function addtoCart() {
  this.setAttribute('disabled', ''); 
  selectedProduct.push(this.id);
  console.log(selectedProduct);
  window.localStorage.setItem('storage_pro', JSON.stringify(selectedProduct));
  changeCounter();
  
}
function removeFromCart() {
  var index = selectedProduct.indexOf(this.id);
  if (index > -1) {
    selectedProduct.splice(index, 1);
    window.localStorage.setItem('storage_pro', JSON.stringify(selectedProduct));
  }
  var row_del = document.getElementById('row-'+ this.id);
  row_del.parentNode.removeChild(row_del);
  changeCounter();
    
}
function showSelectedProduct() { 
  var inner = "";
  for(var i = 0; i< listPro.length; i++) {
    if(selectedProduct.includes(listPro[i].id)) {
      inner +=  '<tr id="row-' + listPro[i].id + '">' +
                  '<td>' + listPro[i].name + '</td>' + 
                  '<td><a href=""><img src="images/'+ listPro[i].image +  '" alt="" class="images-icon"></a></td>' +
                  '<td>' + listPro[i].price + '</td>' +
                  '<td>1</td>' +
                  '<td><button type="button" class="btn-remove" id="' + listPro[i].id + '"><img src="images/del-icon.jpg" alt=""></button></td>' +
                '</tr>';
    }
  }
  pro_selected.innerHTML = inner;
  var btnRemove = document.getElementsByClassName('btn-remove');  
  for(var i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener('click', removeFromCart);
  }  
}
if(pro_selected) {
  showSelectedProduct();  
}
if(listPro.length) {
  showProduct();
  count_selectedPro.innerHTML = selectedProduct.length;
}

};
