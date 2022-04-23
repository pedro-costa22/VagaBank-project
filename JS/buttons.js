import {conteudoTelas} from "./alterandoTelas.js";
import {clearScreen} from "./alterandoTelas.js";
import {dataAnimation} from "./animationTelas.js";
import {timerAnimation} from "./animationTelas.js";



const btnSaldo = document.querySelector("#btn-saldo").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[1].style.display = "flex";
  
    dataAnimation[1].forEach((element) =>{
        timerAnimation(element)
    })

});
const btnExtrato = document.querySelector("#btn-extrato").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[2].style.display = "flex";
 
    dataAnimation[2].forEach((element) =>{
        timerAnimation(element)
    })
   
})

const btnTransfer = document.querySelector("#btn-transfer").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[3].style.display = "flex";
    

    dataAnimation[3].forEach((element) =>{
        timerAnimation(element)
    })
})

const btnDeposito = document.querySelector("#btn-depositar").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[4].style.display = "flex";
    
    dataAnimation[4].forEach((element) =>{
        timerAnimation(element)
    })
});

// Area PIX
const btnpix = document.querySelector("#btn-pix").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[5].style.display = "flex";
  
    dataAnimation[5].forEach((element) =>{
        timerAnimation(element)
    })
   
});

const btnEfePagamento = document.querySelector("#btn-pagamento").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[6].style.display = "flex";
  
    dataAnimation[6].forEach((element) =>{
        timerAnimation(element)
    })
   
});

//Recarca Celular btn-recarga
const btnRecCel = document.querySelector("#btn-recarga").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[7].style.display = "flex";
   
    dataAnimation[7].forEach((element) =>{
        timerAnimation(element)
    })
 
});

//Suporte btn-suporte
const btnSuporte = document.querySelector("#btn-suporte").addEventListener("click", () =>{
    clearScreen()
    conteudoTelas[8].style.display = "flex"; 
    
    dataAnimation[8].forEach((element) =>{
        timerAnimation(element)
    })

}); 



//Menu mobile
const navbar = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");


menuMobile.addEventListener("click", () =>{
    navbar.classList.toggle('mobileOpen');
    menuMobile.classList.toggle('fa-times')
})


// Dark mode

const btnMode = document.querySelector(".btn-mode");
let menu = document.querySelector(".menu");
let user = document.querySelector(".user");

btnMode.addEventListener("click", () =>{
    btnMode.classList.toggle("active")
    menu.classList.toggle("active")
    user.classList.toggle("active")
})
