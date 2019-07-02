$(document).ready(function(){
    function validar(){
        if(document.usuario.value == ""){
            alert("Preencha o campo USUÁRIO");
            document.usuario.focus();
            return false;
        }
    }
});