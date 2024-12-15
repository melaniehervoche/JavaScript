class Pilote {
    constructor(nom, energie, vitesse, habilitePilotage) {
        this.nom = nom;
        this.energie = energie;
        this.vitesse = vitesse;
        this.habilitePilotage = habilitePilotage; 
    }
    getManoeuvre() {
        let chance = Math.random();
        return chance < this.habilitePilotage;
    }
    getAttaque(adversaire) {
        if (this.getManoeuvre()) {
            adversaire.energie -= this.vitesse;
            console.log(this.nom,"effectue une manœuvre contre",adversaire.nom, "et lui inflige",this.vitesse, "points de dégâts.");
        } else {
            console.log(this.nom, "rate sa manœuvre contre",adversaire.nom,".");
        }
    }
}

let Max = new Pilote("Max", 100, 30, 0.7);
let Louis = new Pilote("Louis", 100, 25, 0.6);

function course() {
    let tour = 1;

    while (Max.energie > 0 && Louis.energie > 0) {
        console.log("\n<><><> Tour",tour,"<><><>");
        console.log(Max.nom, "(Énergie: ",Max.energie,") vs ",Louis.nom, "(Énergie: ",Louis.energie,")")

        Max.getAttaque(Louis);
        if (Louis.energie <= 0) {
            console.log(Louis.nom,"est éliminé de la course !");
            break;
        }

        Louis.getAttaque(Max);
        if (Max.energie <= 0) {
            console.log(Max.nom ,"est éliminé de la course !");
            break;
        }

        tour++;
    }
    if (Max.energie > 0) {
        console.log(Max.nom,"remporte la course devant",Louis.nom,"!");
    } else {
        console.log(Louis.nom,"remporte la course devant",Max.nom,"!");
    }
}
course();