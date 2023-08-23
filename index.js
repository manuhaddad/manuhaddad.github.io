
let counterPessoas = document.getElementById('counter-pessoas');
let counterValor = document.getElementById('counter-valor');

let animatePessoas = () => {
    let value = counterPessoas.getAttribute('until');
    let data = parseInt(counterPessoas.innerText);

    const time = value / 10000;

    if(data < value){
        counterPessoas.innerText = Math.ceil(data + time);
        setTimeout(animatePessoas, 100);
    } else {
        counterPessoas.innerText = value.toString().replace('.', ',');
    }
}

animatePessoas();

let animateValor = () => {
    let value = counterValor.getAttribute('until');
    let data = parseInt(counterValor.innerText);

    const time = value / 300;

    if(data < value){
        counterValor.innerText = Math.ceil(data + time);
        setTimeout(animateValor, 1);
    } else {
        counterValor.innerText = value.toString().replace('.', ',');
    }
}

animateValor();


function copiarTexto(){
    navigator.clipboard.writeText('6dd4120f-618a-4365-982d-e57114931f7f');
    alert('Chave pix copiada!\nAgradecemos seu apoio :)')
}