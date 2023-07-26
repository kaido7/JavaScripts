

function ativarContagem(){
    
    // document.getElementById('tempo').innerHTML = 'Começou a Contagem';
    
    // tempo = setTimeout(function(){
        
    //     document.getElementById('tempo').innerHTML = 'Executando o Tempo';
    
    // }, 5000);

    setInterval(function(){
        var tmp = document.getElementById('tempo').innerHTML;
        var soma = parseInt(tmp) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000
    );

}



function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = 'Parou a Contagem';

}