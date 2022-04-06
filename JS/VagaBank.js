let barra = document.querySelector('#barra-interna');  
let Contador = document.querySelector('#contador'); 
const limite = 100; 
let inicio = 0; 
const TelaInicial = document.querySelector("#telaDeEntrada"); 
const TelaDeLogin = document.querySelector("#TelaDeLogin"); 
const TelaDeRegitro = document.querySelector('#CriarUmaConta');
const home = document.querySelector("#home");


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
    TelaDeLogin.style.display = "none";
    home.style.display = "grid";
})