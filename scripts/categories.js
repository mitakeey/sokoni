/* fetch all categories of products from the api*/

class Categories{
    constructor(){
        this.apiUrl = 'https://fakestoreapi.com/'
    }

    getAllCategories(){
        /* Using ajax */
        $.ajax({
            type: 'GET',
            url : this.apiUrl + 'products/categories',
            success : function(data){
                $(data).each(function(index, category) {
                    $('.categories').append(
                        '<a class="dropdown-item" href="/category.htm?category= '+ 
                        encodeURIComponent(category)+
                        '">'+ 
                        titleUppercase(category)+
                        '</a>'
                    )
                })
            }
        })
    }
}