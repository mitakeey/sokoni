/* creating jquery's load function */


$(function(){ 
    /*creating a function that pulls other js by referencing urls of script files to use */
    loadScript('scripts/products.js', productSetup) 
    loadScript('scripts/categories.js', categorySetup)
});

var categorySetup = function(){
    let categories= new Categories()
    categories.getAllCategories()
}
var productSetup = function(){
    console.log('...')
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