/* storage of all user information */
class User {
    constructor(){
        this.apiUrl = 'https://fakestoreapi.com/'
    }
    /**script to log into the site --ajax; using api info*/
    dologin(username, password){
        localStorage.clear()
        $.ajax({
            type : 'GET',
            url : this.apiUrl + 'users',
            success : function(data){
                console.log(data)
                // local storage
                $(data).each(function(index, user){
                    if(user.username == username && user.password == password){
                        localStorage.setItem('user', JSON.stringify(user))
                    }
                })
                if(localStorage.getItem('user') != null){
                    window.location.href = '/account.html'
                }else{
                    $(".loginMsg").html(
						'<div class="alert alert-danger" role="alert">Invalid Password or Username.Try Again!!!</div>')
                }
            }

        })
    }
}