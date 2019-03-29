var redShades = {
  title:'Red',
  subtitle:'Rock-N-Stroll',
  img:'images/product-red.jpg',
  price:199.99
};
var blackShades = {
  title:'Black',
  subtitle:'Rock-N-Stroll',
  img:'images/product-black.jpg',
  price:199.99
};
var blueShades = {
  title:'Blue',
  subtitle:'Rock-N-Stroll',
  img:'images/product-blue.jpg',
  price:199.99
};
var greenShades = {
  title:'Green',
  subtitle:'Rock-N-Stroll',
  img:'images/product-green.jpg',
  price:199.99
};
var shades = [redShades, greenShades, blueShades, blackShades];


function mobileProducts(product) {
  return `
      <div class="row">
        <div class="col">
          <img src="${product.img}" />
          <br />
          <span>${product.subtitle}</span>
          <h3>${product.title}</h3>
          <h5>$${product.price}</h5>
          <button type="button" class="btn btn-shop" "btn-sm">Add to Cart</button>
          <div class="bd-example">
          </div>
        </div>
      </div>
  `;
}

$(document).ready(function() {
  $('#mobile-products').html(mobileProducts( shades[0] ));

  $('.circle').click(function(){
    var index = $(this).data('index');

    $('#mobile-products').html(mobileProducts( shades[index] ));
  });
});
