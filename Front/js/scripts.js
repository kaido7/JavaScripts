

function ativarContagem(){
    document.getElementById('tempo').innerHTML = 'Começou'
    setTimeout(function(){
        document.getElementById('tempo').innerHTML = 'Executado o tempo'
    }, 5000);
}