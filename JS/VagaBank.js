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
    TelaDeLogin.style.display = "none";
    home.style.display = "grid";

    /* ------         ------*/
    animate.forEach((element) =>{
        timerAnimation(element)
    }) 
});


const btnSaldo = document.querySelector("#btn-saldo").addEventListener("click", () =>{
    home.style.display = "none";
    saldo.style.display = "grid";

    animateSaldo.forEach((element) =>{
        timerAnimation(element)
    })

});



const animate = document.querySelectorAll('[data-home]');
const animateSaldo = document.querySelectorAll('[data-saldo');
const animationClass = 'animate';

function timerAnimation(element){
    setInterval(() =>{
        element.classList.add(animationClass)
    }, 200)
}


const valoresSaldo = document.querySelectorAll(".value");
const openValue = document.querySelectorAll(".open-value");
const closeValue = document.querySelectorAll(".btn");



openValue.forEach((open) =>{
    open.addEventListener("mouseover", () =>{
        switch(open){
            case openValue[0]:
                valoresSaldo[0].type = "text";
                break;

            case openValue[1]:
                valoresSaldo[1].type = "text";
                break;

            case openValue[2]:
                valoresSaldo[2].type = "text";
                break;

            case openValue[3]:
                valoresSaldo[3].type = "text";
                break;
        }
    })

    open.addEventListener("mouseout", () =>{
        switch(open){
            case openValue[0]:
                valoresSaldo[0].type = "password";
                break;

            case openValue[1]:
                valoresSaldo[1].type = "password";
                break;

            case openValue[2]:
                valoresSaldo[2].type = "password";
                break;

            case openValue[3]:
                valoresSaldo[3].type = "password";
                break;
        }
    })
})


