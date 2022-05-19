/* fetch all categories of products from the api*/

class Categories{
    constructor(){
        this.apiUrl = 'https://fakestoreapi.com/'
    }

    getAllCategories() {
        /* Using ajax */
		$.ajax({
			type: "GET",
			url: this.apiUrl + "products/categories",
			success: function (data) {
				$(data).each(function (index, category) {
					$(".categories").append(
						'<a class="dropdown-item" href="/category.html?category=' +
							encodeURIComponent(category) +
							'">' +
							titleUppercase(category) +
							"</a>"
                    )
                })
            }
        })
    }

    getonecategory(slug){
        /* Using ajax */
        $.ajax({
            type: 'GET',
            url : this.apiUrl + 'products/category/' + slug,
            success : function(data){
                $('.products').append(
                    '<div class="col-md-3">< div class="product"><a href="/product.html?productid='+
                    product.id +
                    '"><div class="image"><img src="'+
                    product.image+'"class="img=fluid"></div><div class="info"><div class="title">' +
                    product.title + '<br>$' +
                    product.price +
                    '</div></div></a></div></div>'
                )
            }
        })
    }
}