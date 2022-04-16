
const animationClass = 'animate';

export const dataAnimation = [];
dataAnimation[0] = document.querySelectorAll('[data-home]');
dataAnimation[1] = document.querySelectorAll('[data-saldo');
dataAnimation[2] = document.querySelectorAll('[data-extrato]');
dataAnimation[3] = document.querySelectorAll('[data-transf]');
dataAnimation[4] = document.querySelectorAll('[data-deposito]');
dataAnimation[5] = document.querySelectorAll('[data-pix]');
dataAnimation[6] = document.querySelectorAll('[data-efePagamento]');
dataAnimation[7] = document.querySelectorAll('[data-cel]');
dataAnimation[8] = document.querySelectorAll('[data-sup]');  


export function timerAnimation(element){
    setInterval(() =>{
        element.classList.add(animationClass)
    })  
}


