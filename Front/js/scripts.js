
function verificaCor(){
    let cor = document.getElementById('cor').value;
    cor = cor.toLowerCase()
    switch (cor) {
        case "azul":
            // a
            document.body.style.backgroundColor = 'blue';
            break;

        case "vermelho":
            // a
            document.body.style.backgroundColor = 'red';
            break;

        case "preto":
            // a
            document.body.style.backgroundColor = 'black';
            break;

        case "amarelo":
            // a
            document.body.style.backgroundColor = 'yellow';
            break;
        default:
            document.getElementById('text').innerHTML = 'Não foi encerido nehuma cor';
            document.body.style.backgroundColor = 'yellow';
    }


}