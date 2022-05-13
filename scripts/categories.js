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
            url : this.apiUrl + 'products/category/electronics',
            success : function(data){
                console.log(data)
                $(data).each(function(index, product) {
                    $('.products').append(
                        '<div class="col-md-4"><a href="/product.html?productid='+
                        product.id +
                        '"><img src="'+
                        product.image+'"class="img=fluid">' +
                        product.title +
                        '</a></div'
                    )
                })
            }
        })
    }
}