window.onload = function(){
    document.querySelector("#sair").addEventListener("click", function(){
        navigator.vibrate(3000);
        navigator.app.exitApp();
    });
}

function chamar (){
    val = document.getElementById("valor").value;
    alert("Saudações, " + val +".");
}

function verificar(){
    function sexo(buttonIndex){
        if(buttonIndex == 1){
            alert("Atenção! É necessário o alistamento!");
        } else {
            alert("Atenção! Já pode tirar carteira de habilitação!");
        }
    }
    let idade = parseInt(document.querySelector("#valoridade").value);

    if(idade>=18){
        navigator.notification.confirm(
            "Você é homem ou mulher?",
            sexo,
            "Pergunta:",
            ['Homem','Mulher']
        );
    } else if(idade<18 && idade>=0){
        navigator.notification.beep(idade);
    } else {
        navigator.vibrate(3000);
    }
}