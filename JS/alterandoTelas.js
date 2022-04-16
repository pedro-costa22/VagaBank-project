
export const conteudoTelas = [];
conteudoTelas[0] = document.querySelector(".conteudo");
conteudoTelas[1] = document.querySelector(".conteudo-saldo");
conteudoTelas[2] = document.querySelector(".conteudo-extrato");
conteudoTelas[3] = document.querySelector(".conteudo-transfer");
conteudoTelas[4] = document.querySelector(".conteudo-depositar");
conteudoTelas[5] = document.querySelector(".conteudo-pix");
conteudoTelas[6] = document.querySelector(".conteudo-efePagamento");
conteudoTelas[7] = document.querySelector(".conteudo-recCel");
conteudoTelas[8] = document.querySelector(".conteudo-suporte"); 

export function clearScreen (){
    conteudoTelas.forEach((tela) =>{
            tela.style.display = "none"
    })
}