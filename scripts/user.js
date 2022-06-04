/* storage of all user information */
class User {
    constructor(){
        this.apiUrl = 'https://fakestoreapi.com/'
    }

    getAccountInfo(user){
        $('#username').val(user.username)
        $('#firstname').val(user.name.firstname)
        $('#lastname').val(user.name.lastname)
        $('#email').val(user.email)
        $('#address').val(user.address.number + "" + user.address.street)
        $('#phone').val(user.phone)
        $('#city').val(user.address.city)
        $('#zip').val(user.address.zipcode)
    }
    /**script to log into the site --ajax; using api info*/
    dologin(username, password){
        localStorage.clear()
        $.ajax({
            type : 'GET',
            url : this.apiUrl + 'users',
            success : function(data){
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