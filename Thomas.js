let titre = document.getElementById('titre')
let lasousdiv = document.getElementById('lasousdiv')
let footer = document.getElementById('footer')
let lessaisons = document.getElementById('lessaisons')
let printemps = document.querySelector('#printemps')
let ete = document.querySelector('#ete')
let automne = document.querySelector('#automne')
let hiver = document.querySelector('#hiver')
let recherche = document.getElementById('recherche')
let contacte = document.getElementById('contacte')
let aPropos = document.getElementById('aPropos')
let mentionsLegales = document.getElementById('mentionsLegales')
let connexion = document.getElementById('connexion')
let imageRecherche = document.getElementById('imagerecherche')
let fruitPrintemps = document.querySelector('#content-printemps')
let fruitEte = document.querySelector('#content-ete')
let fruitAutomne = document.querySelector('#content-automne')
let fruitHiver = document.querySelector('#content-hiver')

button.addEventListener('click',function(){
    if (button.textContent == "Light Mode"){
        button.textContent = "Dark Mode"
        imageRecherche.src = "rechercheB.png"
    }else{
        button.textContent = "Light Mode"
        imageRecherche.src = "Recherche.png"
    }

    this.classList.toggle('buttonb')
    console.log("clique")
    lasousdiv.classList.toggle('lasousdivb')
    background.classList.toggle('background')
    footer.classList.toggle('footerb')
    lessaisons.classList.toggle('lessaisonsb')
    printemps.classList.toggle('printempsb')
    ete.classList.toggle('eteb')
    automne.classList.toggle('automneb')
    hiver.classList.toggle('hiverb')
    recherche.classList.toggle('rechercheb')
    contacte.classList.toggle('contacteb')
    aPropos.classList.toggle('aProposb')
    mentionsLegales.classList.toggle('mentionsLegalesb')
    connexion.classList.toggle('connexionb')
})
printemps.addEventListener("click", function () {
    fruitPrintemps.classList.toggle("active")
    fruitEte.classList.remove("active")
    fruitAutomne.classList.remove("active")
    fruitHiver.classList.remove("active")
  })
ete.addEventListener("click", function () {
    fruitPrintemps.classList.remove("active")
    fruitEte.classList.toggle("active")
    fruitAutomne.classList.remove("active")
    fruitHiver.classList.remove("active")
})
automne.addEventListener("click", function () {
    fruitPrintemps.classList.remove("active")
    fruitEte.classList.remove("active")
    fruitAutomne.classList.toggle("active")
    fruitHiver.classList.remove("active")
})
hiver.addEventListener("click", function () {
    fruitPrintemps.classList.remove("active")
    fruitEte.classList.remove("active")
    fruitAutomne.classList.remove("active")
    fruitHiver.classList.toggle("active")
})