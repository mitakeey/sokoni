/* fetch all categories of products from the api*/

class categories{
    constructor(){
        this.apiUrl = 'https://fakestoreapi.com/'
    }

    getAllCategories(){
        /* Using ajax */
        $.ajax({
            type: 'GET',
            url : this.apiUrl + 'products/categories',
            success: function(data){
                console.log(data);
            }
        })
    }
}