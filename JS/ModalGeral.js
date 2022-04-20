export default function AtivandoOModal(ElementoPai, Status, Descricao) {
    const ElementoPaiDeReferencia = document.getElementById(`${ElementoPai}`)
    ExibindoOModalSucesso(ElementoPaiDeReferencia, Status, Descricao) 
}

function ExibindoOModalSucesso (ElementoPaiDeReferencia, Status, Descricao) {
    const ElementoCriado = document.createElement('div'); 
    ElementoCriado.innerHTML = `<div class="Modal-Icon"></div>
    <p>${Descricao}</p>`

    if (Status === true) { ElementoCriado.setAttribute('class', 'Modal-Sucesso') }
    if (Status === false) { ElementoCriado.setAttribute('class', 'Modal-Erro') }

    ElementoPaiDeReferencia.appendChild(ElementoCriado)

    let Delay = TimerEntreModais(Status); 

    let MostrarModal = setTimeout(() => {
        ElementoCriado.classList.add('Aparecer')
        clearInterval(MostrarModal)
    }, Delay);

    let RemoverModal = setInterval(() => {
        ElementoCriado.classList.remove('Aparecer')
        DeletarModal(ElementoCriado)
        clearInterval(RemoverModal); 
    }, 5000);
}

function DeletarModal(ElementoCriado) {
    
    let DeletarModal = setInterval(() => {
        ElementoCriado.remove();
        console.log("Deletou");
        clearInterval(DeletarModal)
    }, 2000);
    
}

function TimerEntreModais(Status) {
    let Modais; 

    if (Status === true) { Modais = document.querySelectorAll('.Modal-Sucesso') } 
    if (Status === false ) { Modais = document.querySelectorAll('.Modal-Erro') }
   
    if (Modais.length > 1) {
        return 5000
    }
    
    return 0; 
}

