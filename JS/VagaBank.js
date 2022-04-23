
import {dataAnimation} from "./animationTelas.js";
import {timerAnimation} from "./animationTelas.js";
import AtivandoOModal from './ModalGeral.js'; 

let barra = document.querySelector('#barra-interna');  
let Contador = document.querySelector('#contador'); 
const limite = 100; 
let inicio = 0; 
const TelaInicial = document.querySelector("#telaDeEntrada"); 
const TelaDeLogin = document.querySelector("#TelaDeLogin"); 
const TelaDeRegitro = document.querySelector('#CriarUmaConta');
const home = document.querySelector("#home");
const saldo = document.querySelector("#saldo");


setInterval(() => {
    barra.style.width = '100%';  
}, 0);

function AtivandoTexto() {
    clearInterval(TempoCorrido);
    TelaInicial.style.display = 'none'; 
    TelaDeLogin.style.display = 'flex'; 
}

const TempoCorrido = setInterval(() => {
    inicio ++ 
    Contador.innerHTML = `${inicio}%`; 
    inicio == 100 ? AtivandoTexto() : null; 
}, 45);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Forms de Entrada do usuário

const BotoaCrirConta = document.getElementById('BotaoCriaUmaConta').addEventListener('click', (e) => {
    // Tira a função natural do botão de redirecionamento
    // O parâmetro E seleciona o próprio elemento

    e.preventDefault() 
    TelaDeLogin.style.display = "none";
    TelaDeRegitro.style.display = "flex";
})

const botaoLogar = document.querySelector("#LoginNoSite").addEventListener('click', (btn) =>{
    btn.preventDefault()
    let Validado = CapturandoOValorDoInput(['Agencia', 'Conta', 'Senha'])

    if (Validado === true) { AtivandoOModal('home', true , "Parabéns, você conseguiu entrar no site") 
    TelaDeLogin.style.display = "none";
    home.style.display = "grid";

    /* ------         ------*/
    dataAnimation[0].forEach((element) =>{
        timerAnimation(element)
    }) 

    }
    if (Validado === false) { AtivandoOModal('TelaDeLogin', false , "Preencha corretamente os campos de entrada, para que você consiga logar!") }

});

document.getElementsByName('btnRegistro')[0].addEventListener('click', (btn) => {
    btn.preventDefault(); 
    let Validado = CapturandoOValorDoInput(['Nome', 'Email', 'CPF', 'CEP', 'SenhaCadastro'])

    if (Validado === true) { AtivandoOModal('home', true , "Parabéns, você conseguiu entrar no site") 
    TelaDeRegitro.style.display = "none";
    home.style.display = "grid";

    /* ------         ------*/
    dataAnimation[0].forEach((element) =>{
        timerAnimation(element)
    }) 
}
    if (Validado === false) { AtivandoOModal('CriarUmaConta', false , "Preencha corretamente os campos de entrada, para que você consiga logar!") }
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNÇÃO DE VALIDAÇÃO DE FORMULÁRIO 

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

function ExpondoOErro (InputComOErro) {
    const ElementoPai = document.getElementById(InputComOErro);
    ElementoPai.classList.add('BordaDeErro')
}




