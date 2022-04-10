const btnSaldoT = document.querySelector('#btn-saldoT');
const btnExtratoT = document.querySelector('#btn-extratoT');
const btnTransferT = document.querySelector('#btn-transferT');
const btnDepositoT = document.querySelector('#btn-depositarT');
const btnPixT = document.querySelector('#btn-pixT');
const btnPagamentoT = document.querySelector('#btn-pagamentoT');
const btnRecargaT = document.querySelector('#btn-recargaT');
const btnSuporteT = document.querySelector('#btn-suporteT');
const icones = document.querySelectorAll(".icon");

btnSaldoT.addEventListener("click", () =>{
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "flex";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudoDepositar.style.display = "none"

    animateSaldo.forEach((element) =>{
        timerAnimation(element)
    })
})

btnExtratoT.addEventListener("click", () =>{
    conteudoSaldo.style.display = "none";
    conteudoHome.style.display = "none"
    conteudoTransfer.style.display = "none";
    conteudoExtrato.style.display = "flex";
    conteudoDepositar.style.display = "none"

    animateExtrato.forEach((element) =>{
        timerAnimation(element)
    })
})

btnTransferT.addEventListener("click", () =>{
    conteudoSaldo.style.display = "none";
    conteudoHome.style.display = "none"
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "flex";
    conteudoDepositar.style.display = "none"

    animateTransf.forEach((element) =>{
        timerAnimation(element)
    })
})

btnDepositoT.addEventListener("click", () =>{
    conteudoSaldo.style.display = "none";
    conteudoHome.style.display = "none"
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudoDepositar.style.display = "flex"

    animateDeposito.forEach((element) =>{
        timerAnimation(element)
    })
})

