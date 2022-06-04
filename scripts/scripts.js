$(function(){
    if(localStorage.getItem("user")== null && $(".auth").length){
        window.location.href = "/login.html" 
    } //if info not present, it directs us to login page
    /*creating a function that pulls other js by referencing urls of script files to use */
    loadScript('scripts/products.js', productsSetup)
    loadScript('scripts/categories.js', categoriesSetup)
    loadScript('scripts/user.js', userInfo)
    loadScript('scripts/cart.js', cartInfo) 
});

/* adding html files*/
$.get('/templates/navigation.html', function(data){
    if($('.logout').length){
        localStorage.clear()
    }
    $('#nav-placeholder').replaceWith(data)
    if(localStorage.getItem('user') == null ){
        $('.accountNav').html('<li class="nav-item"><a class="nav-link text-white" href="/login.html">Login</a></li>')
    }else{
        $('.accountNav').html('<li class="nav-item"><a class="nav-link text-white" href="/account.html">Account</a></li><li class="nav-item"><a class="nav-link text-white" href="/logout.html">LOg Out</a></li>')
    }
})
$.get('/templates/footer.html', function(data){
    $('#footer-placeholder').replaceWith(data)
})


/* creating jquery's load function */



var categoriesSetup = function(){
    let categories= new Categories()
    categories.getAllCategories()
    if(urlParam('category')){
    categories.getSingleCategory(decodeURIComponent(urlParam('category'))) //decode... for formatting the displayed results
    }
}
var productsSetup = function(){
    let products= new Products()
    if($('.products.new').length){
        products.getNewProducts(8)
    }
    if(urlParam('productid')){
    products.getSingleProduct(urlParam('productid'))
    }

}

var userInfo = function() {
    let user = new User()
    $('form.login').submit(function(e){
        e.preventDefault()
        var username = $('#username').val()
        var password = $('#password').val()
        user.dologin(username, password)
    })
    if($('.userAccount').length){
        var userAccount = JSON.parse(localStorage.user)
        user.getAccountInfo(userAccount)
    }
}

var cartInfo = function(){
    let cart = new Cart()
    if(localStorage.getItem('user') != null){
        var user = JSON.parse(localStorage.user)
        cart.getCart(user.id)

        /* set to ensure cartcount loads in log in using timeout func
        setTimeout(() => {
            var cartItems = JSON.parse(localStorage.getItem('cart'))
            cart.getCartDisplay(cartItems)
        }, 1000)*/
        if (localStorage.getItem("cartCount") != 0) {
			var cartItems = JSON.parse(localStorage.getItem("cart"));
			cart.getCartDisplay(cartItems);
		}
        
    }
}

function loadScript(url, callback){
    var head = document.head
    var script = document.createElement('script')
    script.type = "text/javascript"
    script.src = url
    script.onreadystatechange = callback // callback is made when the script is full and ready
    script.onload = callback
    head.appendChild(script)
}
// function to turn fetched categories to uppercase using regex
function toTitleCase(str){
    return str.replace(/(?:^|\s)\w/g, function (match){
        return match.toUpperCase()
    })
}

function urlParam(name){
    var results = new RegExp('[?&]' + name + "=(^&#]*)").exec(window.location.href) //to grab info from a url(mens clothing)
    if(results = null){
        return null
    } else{
        return results[1] || 0
    }
}