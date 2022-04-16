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



