/* creating jquery's load function */
$(function(){ // creating a function that pulls other js
    loadScript()
})

function loadScript(url, callback){
    var head = document.head
    var script = document.createElement('script')
    script.type = "text/javascript"
    script.src = url
    script.onreadystatechange = callback // callback is made when the script is full and ready
    script.onload = callback
    head.appendChild(script)
}