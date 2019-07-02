$(document).ready(function(event){
    $("form").submit(function(event){
        $("input:text").each(function(){
            var user = $("#usuario").val().trim();
            var senha = $("#senha").val().trim();
            if(user == "" && senha == ""){
                alert("Preencha os campos usuário e senha corretamente");
                event.preventDefault();
            }else if (user == ""){
                alert("O campo usuário tem que ser preenchido");
                event.preventDefault();
            }else if(senha == ""){
                alert("O campo senha tem que ser preenchido");
                event.preventDefault();
            }
        });
    });
});