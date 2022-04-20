import AtivandoOModal from './ModalGeral.js'; 

function ExpondoOErro (InputComOErro) {
    const ElementoPai = document.getElementById(InputComOErro);
    ElementoPai.classList.add('BordaDeErro')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Validando o formulário de login
document.getElementById('EnviarTransferencia').addEventListener('click', () => {
    let Validador = CapturandoOValorDoInput(['Agencia-Transferencia', "Conta-Transferencia", "Valor-Transferencia"])

    let Seletor = document.getElementById('Instituicoes-Transferencia').value
    let SeletorDois = document.getElementById('TipoDeConta-Trasnferencia').value
   
    if (Seletor == "0" ) {
        ExpondoOErro('Instituicoes-Div-Transferencia')
        Validador = false; 
    } else {
        document.getElementById('Instituicoes-Div-Transferencia').classList.remove('BordaDeErro')
    }

    if (SeletorDois == "0" ) {
        ExpondoOErro('TipoDeConta-Div-Transferencia')
        Validador = false; 
    }else {
        console.log("Seletor dois entrou aqui");
        document.getElementById('TipoDeConta-Div-Transferencia').classList.remove('BordaDeErro')
    }

    if (Validador === false) { AtivandoOModal('home', false, 'Preencha corratamente o formulário para que você possa realizar a transferência') }
    if (Validador === true) { AtivandoOModal('home', true, 'Transferència Realizada com sucesso') }
})

document.getElementById('EnviarDeposito').addEventListener('click', () => {
    let Validador = CapturandoOValorDoInput(['Conta-Deposito', "Agencia-Deposito", "Titular-Deposito", "CPFeCNPJ-Deposito", "Valor-Deposito"])

    let Seletor = document.getElementById('Instituicoes-Deposito').value
    let SeletorDois = document.getElementById('TipoDeConta-Deposito').value
   
    if (Seletor == "0" ) {
        ExpondoOErro('Instituicoes-Div-Deposito')
        Validador = false; 
    } else {
        document.getElementById('Instituicoes-Div-Deposito').classList.remove('BordaDeErro')
    }

    if (SeletorDois == "0" ) {
        ExpondoOErro('TipoDeConta-Div-Deposito')
        Validador = false; 
    }else {
        console.log("Seletor dois entrou aqui");
        document.getElementById('TipoDeConta-Div-Deposito').classList.remove('BordaDeErro')
    }

    if (Validador === false) { AtivandoOModal('home', false, 'Preencha corratamente o formulário para que você possa realizar o deposito') }
    if (Validador === true) { AtivandoOModal('home', true, 'Deposito realizado com sucesso') }
})

document.getElementById('EfetuarRecarga').addEventListener('click', () => {
    let Validador = CapturandoOValorDoInput(['Operadora-Valor', "Operadora-Numero"])

    let Seletor = document.getElementById('Select-Operadora').value
   
    if (Seletor == "0" ) {
        ExpondoOErro('Div-select-Operadora')
        Validador = false; 
    } else {
        document.getElementById('Div-select-Operadora').classList.remove('BordaDeErro')
    }

    if (Validador === false) { AtivandoOModal('home', false, 'Preencha corretamente o formulário para que possa realizar a recarga') }
    if (Validador === true) { AtivandoOModal('home', true, 'Recarga realizada com sucesso!') }
})

document.getElementById('EnviarMensagemDeSuporte').addEventListener('click', (e) => {
    e.preventDefault()
    let Validador = CapturandoOValorDoInput(['Nome-Suporte', "Email-Suporte", "Assunto-Suporte"])

    if (Validador === false) { AtivandoOModal('home', false, 'Preencha corretamente o formulário para que possa enviar a mensagem ao suporte') }
    if (Validador === true) { AtivandoOModal('home', true, 'A mensagem foi enviada para o suporte. Fique atento a sua caixa de Email, onde enviaremos a resposta!') }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Avaliando se os valores dentro dos inputs estão preenchidos ou não, caso estejam será devolvido TRUE 
// O true é uma mensagem de sucesso, do contrário, será atribuido o false,exibindo um erro para o usuário

function CapturandoOValorDoInput(id) {
    let ArrayDeElementos = []; 
    let Acomulador = 0; 

    for (let i = 0; i < id.length; i++) {
        ArrayDeElementos[i] = document.getElementById(`${id[i]}`)

        if (ArrayDeElementos[i].value == "") {
            ExpondoOErro(`${id[i]}`) 
            Acomulador++
        } else {
            ArrayDeElementos[i].classList.remove('BordaDeErro')
        }
    }

    if (Acomulador === 0) { return true; } 
    return false; 
}