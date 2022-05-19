$(function(){ 
    /*creating a function that pulls other js by referencing urls of script files to use */
    loadScript('scripts/products.js', productSetup)
    loadScript('scripts/categories.js', categorySetup)
    loadScript('scripts/user.js', userInfoSetup) 
});
/* adding html files*/
$.get('/templates/navigation.html', function(data){
    if($('.logout').length){
        localStorage.clear()
    }
    $('#nav-placeholder').replaceWith(data)
})
$.get('/templates/footer.html', function(data){
    $('#footer-placeholder').replaceWith(data)
})


/* creating jquery's load function */



var categorySetup = function(){
    let categories= new Categories()
    categories.getAllCategories()
    if(urlParam('category')){
    categories.getonecategory(decodeURIComponent(urlParam('category'))) //decode... for formatting the displayed results
   
    }
}
var productSetup = function(){
    let products= new Products()
    if($('.products.new').length){
        products.getNewProducts(8)
    }
    if(urlParam('productid')){
    products.getOneProduct(urlParam('productid'))
    }

}

var userInfoSetup = function() {
    let user = new User()
    $('form.login').submit(function(e){
        e.preventDefault()
        var username = $('#username').val()
        var password = $('#password').val()
        user.dologin(username, password)
    })
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
function titleUppercase(str){
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