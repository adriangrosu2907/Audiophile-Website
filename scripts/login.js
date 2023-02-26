const loginOpen = document.getElementById("loginOpen");
const loginClose = document.getElementById("loginClose");

const loginSection = document.querySelector("#loginSection");
const body = document.querySelector("body");

const divOverlay = document.createElement("div");

loginOpen.addEventListener("click", ()=> {
    
    loginSection.style.display = "block";
    divOverlay.classList.add("popupOverlay");
    body.appendChild(divOverlay);    
});


loginClose.addEventListener("click", ()=>{
    loginSection.style.display = "none";
    divOverlay.classList.remove("popupOverlay");
    body.removeChild(divOverlay);
       
});