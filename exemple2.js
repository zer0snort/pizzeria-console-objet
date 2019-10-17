 class Voiture {
    run() {
        console.log ("parent");
    }
}

class pando extends Voiture {
    run() {
        this.vitesse = 42;
        console.log(this.vitesse);
    }
}

class punto extends Voiture {

}

class Clio extends Voiture {
    run(){
        this.vitesse = 44;
        console.log(this.vitesse);
    }

}

const Voitures =[
new pando(),
new punto(),
new Clio()
];

// ce sont toutes les classe qui héritent, elle ont donc \ toutes une méthode run

for (let i =0; i < Voiture.length; i++) {
    Voitures[i].run();
}