'use strict';

var produtoVisitado;
var produtosRecomendados;
var templatePrateleira;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {

	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
		var produtoVisitado = json[0].data.item;
		var produtosRecomendados = json[0].data.recommendation;

		document.querySelector('.visited').innerHTML = montarPrateleira(produtoVisitado);
    document.querySelector('.recommended').innerHTML = montarPrateleiraRecomendados(produtosRecomendados);
    
    montarSlick();
	}
};

xhttp.open("GET", "https://www.extra-imagens.com.br/html/json-teste/products.json", true);
xhttp.send();

function montarPrateleira(produto) {

	return '' +
	'<div class="product">' +
      '<a href="#">' +
        '<span class="productImg">' +
          '<img src="http:' + produto.imageName + '" class="thumb">' +
        '</span>' +
        '</a>' +
        '<strong class="name">' + produto.name + '</strong>' +
        '<span class="productDetail">' +
          '<span class="salePrice">Por: <strong>' + produto.price +'</strong></span>' +
          '<span class="paymentConditions">ou <strong>' + produto.productInfo.paymentConditions + '</strong> sem juros</span>' +
        '</span>' +
      '<a href="#" class="addCar"><span class="border"></span> adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></a>' +
    '</div>';
}

function montarPrateleiraRecomendados(produtos) {
	var conteudo = '';
	
	produtos.forEach(function(produto) {
		conteudo += 
		'<div class="product">' +
      '<a href="#">' +
        '<span class="productImg">' +
          '<img src="http:' + produto.imageName + '" class="thumb">' +
        '</span>' +
        '</a>' +
        '<strong class="name">' + produto.name + '</strong>' +
        '<span class="productDetail">' +
          '<span class="salePrice">Por: <strong>' + produto.price +'</strong></span>' +
          '<span class="paymentConditions">ou <strong>' + produto.productInfo.paymentConditions + '</strong> sem juros</span>' +
        '</span>' +
      '<a href="#" class="addCar"><span class="border"></span> adicionar ao carrinho <i class="material-icons">add_shopping_cart</i></a>' +
    '</div>';
	})

	return conteudo;
}
