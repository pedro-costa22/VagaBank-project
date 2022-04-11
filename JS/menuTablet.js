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
})

btnExtratoT.addEventListener("click", () =>{
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

btnTransferT.addEventListener("click", () =>{
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

btnDepositoT.addEventListener("click", () =>{
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

btnPixT.addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "flex";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none";

});

btnPagamentoT.addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "flex";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "none";
})

btnRecargaT.addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "flex";
    conteudoSuporte.style.display = "none"; 
});

btnSuporteT.addEventListener("click", () =>{
    conteudoDepositar.style.display = "none";
    conteudoHome.style.display = "none";
    conteudoSaldo.style.display = "none";
    conteudoExtrato.style.display = "none";
    conteudoTransfer.style.display = "none";
    conteudopix.style.display = "none";
    conteudoEfePagamento.style.display = "none";
    conteudoRecCel.style.display = "none";
    conteudoSuporte.style.display = "flex"; 
})

