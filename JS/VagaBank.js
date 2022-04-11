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
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "flex";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none";

   
    animateSaldo.forEach((element) =>{
        timerAnimation(element)
    })

});
const btnExtrato = document.querySelector("#btn-extrato").addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "flex";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none";

    animateExtrato.forEach((element) =>{
        timerAnimation(element)
    })
   
})

const btnTransfer = document.querySelector("#btn-transfer").addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "flex";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none";

    animateTransf.forEach((element) =>{
        timerAnimation(element)
    })
})

const btnDeposito = document.querySelector("#btn-depositar").addEventListener("click", () =>{
    conteudoDepositar.style.display = "flex";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none";

    animateDeposito.forEach((element) =>{
        timerAnimation(element)
    })
});

// Area PIX
const btnpix = document.querySelector("#btn-pix").addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "flex";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none"; 
  

    animatePix.forEach((element) =>{
        timerAnimation(element)
    })
   
});

const btnEfePagamento = document.querySelector("#btn-pagamento").addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "flex";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none"; 

    animatePag.forEach((element) =>{
        timerAnimation(element)
    })
   
});

//Recarca Celular btn-recarga
const btnRecCel = document.querySelector("#btn-recarga").addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "flex";
    conteudoSuporte.style.display = "none"; 


    animateCel.forEach((element) =>{
        timerAnimation(element)
    })

    
   
});

//Suporte btn-suporte
const btnSuporte = document.querySelector("#btn-suporte").addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "flex"; 

    animateSup.forEach((element) =>{
        timerAnimation(element)
    })

});


const conteudoSuporte = document.querySelector(".conteudo-suporte");
const conteudoRecCel = document.querySelector(".conteudo-recCel");
const conteudoEfePagamento = document.querySelector(".conteudo-efePagamento");
const conteudopix = document.querySelector(".conteudo-pix");
const conteudoExtrato = document.querySelector(".conteudo-extrato");
const conteudoSaldo = document.querySelector(".conteudo-saldo");
const conteudoHome = document.querySelector(".conteudo");
const conteudoTransfer = document.querySelector(".conteudo-transfer");
const conteudoDepositar = document.querySelector(".conteudo-depositar");

const menu = document.querySelector(".menu");

const animate = document.querySelectorAll('[data-home]');
const animateSaldo = document.querySelectorAll('[data-saldo');
const animateExtrato = document.querySelectorAll('[data-extrato]');
const animateTransf = document.querySelectorAll('[data-transf]');
const animateDeposito = document.querySelectorAll('[data-deposito]');
const animationClass = 'animate';
const animatePag = document.querySelectorAll('[data-efePagamento]');
const animatePix = document.querySelectorAll('[data-pix]');
const animateCel = document.querySelectorAll('[data-cel]');
const animateSup = document.querySelectorAll('[data-sup]');


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



const extratoItems = document.querySelectorAll(".extrato");
const detalhesCompras = document.querySelectorAll(".detalhes");

extratoItems.forEach((items) =>{
    items.addEventListener("click", () =>{
        switch(items){
            case extratoItems[0]:
                detalhesCompras[0].style.display= "flex";

                for(let i = 1; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";
                }

                break;

            case extratoItems[1]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 1){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[2]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 2){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[3]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 3){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[4]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 4){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[5]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 5){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[6]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 6){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[7]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 7){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[8]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 8){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

            case extratoItems[9]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].style = "none";

                    if(i == 9){
                        detalhesCompras[i].style.display = "flex";
                    }
                }
                break;

           
        }
    })

})


const navbar = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");


menuMobile.addEventListener("click", () =>{
    navbar.classList.toggle('mobileOpen');
    menuMobile.classList.toggle('fa-times')
})



