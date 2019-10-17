class Voiture {
    Vitesse = 0;

    run() {
        console.log("Is running");
    }

    stop() {
        this.vitesse = 0;

        console.log(this.vitesse);
    }
}
class Twingo extends Voiture {
    run() {
        super.run();
        this.vitesse = 42;
        console.log("Vitesse = " + this.vitesse);
    }
}
let v = new Voiture();
v.run();
v.stop();

let t = new Twingo();
t.run();
t.stop();
