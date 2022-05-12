/* creating jquery's load function */


$(function(){ 
    /*creating a function that pulls other js by referencing urls of script files to use */
    loadScript('scripts/products.js', productSetup) 
    loadScript('scripts/categories.js', categorySetup)
});

var categorySetup = function(){
    let categories= new categories()
    categoro.getAllCategories()
}
var productSetup = function(){
    console.log('product here')
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