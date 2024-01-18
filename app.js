let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

boxes.forEach((e) => {

    e.addEventListener("click", () => {
        if(e.id === "red"){
            body.style.background = "red";
        }
        if(e.id === "orange"){
            body.style.background = "orange";
        }
        if(e.id === "greenyellow"){
            body.style.background = "greenyellow";
        }
        if(e.id === "aqua"){
            body.style.background = "aqua";
        }
    })

});