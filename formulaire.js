let formulaire = document.getElementById("formulaire")
formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let pseudo = document.getElementById("pseudo");
    if (pseudo.value.length < 6) {
        console.log("invalide");
    } else {
        pseudo.classList.add("valide");
    }
    
    let email = document.getElementById("email");
    if (email.value == ''){
        console.log("invalide");
    } else {
        email.classList.add("valide");
    }

    let password = document.getElementById("password");
    if (password.value.length < 8) {
        console.log("invalide");
    } else {
        password.classList.add("valide");
    }

    let password2 = document.getElementById("password2");
    if (password2.value !== password.value) {
        console.log("invalide");
    } else {
        password2.classList.add("valide");
    }
    let question = document.querySelectorAll('input[name="fruit"]:checked');
    if (question.length === 0) {
        question.classList.add("valide");
    }else{
        console.log("invalide");
    }
});
