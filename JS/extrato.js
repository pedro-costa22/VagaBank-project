const extratoItems = document.querySelectorAll(".extrato");
const detalhesCompras = document.querySelectorAll(".detalhes");


extratoItems.forEach((items) =>{
    items.addEventListener("click", () =>{
        switch(items){
            case extratoItems[0]:
                detalhesCompras[0].classList.toggle("active");

                for(let i = 1; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")
                }

                break;

            case extratoItems[1]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 1){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[2]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 2){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[3]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 3){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[4]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 4){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[5]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 5){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[6]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 6){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[7]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 7){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[8]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 8){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

            case extratoItems[9]:
                for(let i = 0; i <= extratoItems.length; i++){
                    detalhesCompras[i].classList.remove("active")

                    if(i == 9){
                        detalhesCompras[i].classList.toggle("active");
                    }
                }
                break;

           
        }
    })

})



