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