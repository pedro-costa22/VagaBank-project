function AtivandoOModal(ElementoPai, Status) {
    const ElementoPaiDeReferencia = document.getElementById(`${ElementoPai}`)
    
    if (Status === "Sucesso") { ExibindoOModalSucesso(ElementoPaiDeReferencia) }
    if (Status === "Erro") {
        alert("Deu certo o Status")
    }
}

function ExibindoOModalSucesso (ElementoPaiDeReferencia) {
    const ReferemciaDeCriacao = ElementoPaiDeReferencia;
    const ElementoCriado = document.createElement('div'); 
    ElementoCriado.innerHTML = `<div class="Modal-Icon"></div>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero et ex cupiditate exercitationem</p>`

    ElementoCriado.setAttribute('class', 'Modal-Sucesso')
    

    ReferemciaDeCriacao.appendChild(ElementoCriado)

    setTimeout(() => {
        ElementoCriado.classList.add('Aparecer')
    }, 0, clearInterval());

    setInterval(() => {
        // console.log("Entrou aqui!!");
        ElementoCriado.classList.remove('Aparecer')
        DeletarModal(ElementoCriado)
        // ElementoCriado.classList.add('Sumir')
    }, 5000);
}

function DeletarModal(ElementoCriado) {
    setInterval(() => {
        ElementoCriado.remove();
    }, 2000, clearInterval());
    
}