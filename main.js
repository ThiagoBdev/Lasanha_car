$(document).ready(function(){
    $('form').validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email:'Por favor, insira o seu e-mail'
        }
    })
})