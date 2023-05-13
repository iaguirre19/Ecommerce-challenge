let inputsForms = document.querySelectorAll(".inputsForm");
const diClick = document.querySelector(".baneer__slideshow-container");


// diClick.addEventListener("click", function(e){
//     const siempre = e.target;
//     console.log(siempre)
// })
function activeInputsOnClick() {
    inputsForms.forEach((input) => {
        input.addEventListener("click", () => {
        input.parentElement.classList.add("active");
        inputBlurActivity(input);
        });
    });
};

function inputBlurActivity(input){
    input.addEventListener("blur", () => {
        if(!input.validity.valid){
            input.parentElement.classList.remove("active");
            input.parentElement.classList.remove("active-content");
        }else{
            const activeContent = input.parentElement.classList.contains("active");
            if(activeContent){
                input.parentElement.classList.add("active-content");
            };
        };
    });
};


activeInputsOnClick();







