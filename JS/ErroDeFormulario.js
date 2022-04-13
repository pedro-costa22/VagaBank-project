function ExpondoOErro (InputComOErro, Erro) {
    const ElementoPai = document.getElementById(InputComOErro);

    ElementoPai.classList.add('BordaDeErro')

    const DivDaBolinha = document.createElement('div');
    DivDaBolinha.setAttribute('class', 'Erro-Input') 

    ElementoPai.after(DivDaBolinha);

    
    const DivDoErro = document.createElement('div')
    DivDoErro.innerHTML = Erro

    let DivDepois = ElementoPai.nextSibling
    DivDepois.appendChild(DivDoErro).innerHTML = Erro    
}

window.onload = () => {
const Bolinha = document.querySelectorAll('.Erro-Input'); 

// console.log(document.querySelectorAll('.Erro-Input'));

Bolinha.forEach((Bolinha) => {

    Bolinha.addEventListener('mouseover', () => {
        Bolinha.children.item(0).style.display = 'block'; 
    })

    Bolinha.addEventListener('mouseout', () => {
        Bolinha.children.item(0).style.display = 'none';  
    })

});
}

ExpondoOErro('Nome', 'Erro de letra minúsculas'); 
ExpondoOErro('CPF', 'Erro de letra minúsculas');
ExpondoOErro('Senha', 'Erro de letra minúsculas');
ExpondoOErro('CEP', 'O erro é uma coisa muito mais específica que exige um texto maioraaaaa');
