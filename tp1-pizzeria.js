class Pizza {
    id = 0 ;
    code = '';
    libelle = '';
    prix = '';
 
    constructor(id, code, libelle, prix) {
        this.id = id;
        
        this.code = code;
        this.libelle = libelle;
        this.prix = prix;
    }
}
 
import { createInterface } from 'readline';
 
const promptMessage = `**** Pizzeria Information *****  \n 
                        1. Lister les pizzas \n 
                        2. Ajouter une nouvelle pizza \n
                        3. Mettre à jour une pizza \n
                        4. Supprimer une pizza \n
                        99. Sortir \n :`
 
let pizzas = [];
 
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: promptMessage
});
 
rl.prompt();
 
rl.on('line', (line) => {
    switch (line.trim()) {
        case '1':
            console.log('List Pizzas');
            showPizzas();
            break;
        case '2':
            console.log('Add Pizza');
            addPizza();
            break;
        case '3':
            console.log('Update Pizza');
            rl.question('Please type your pizza id ? ', (pizzaId) => {
                updatePizza(pizzaId);
            })
            break;
        case '4':
            console.log('Delete Pizza');
            rl.question('Please type your pizza id ? ', (pizzaId) => {
                deletePizza(pizzaId);
            })
            break;
        case '99':
            console.log('Bye !');
            process.exit(0);
            break;
        default:
            showPizzas();
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Bye !');
    process.exit(0);
});
 
function showPizzas() {
    console.log(pizzas);
}
 
function addPizza() {
    let pizza = new Pizza();
    rl.question('Please type your pizza id ? ', (pizzaId) => {
        pizza.id = pizzaId;
        rl.question('Please type your pizza code ? ', (pizzaCode) => {
            pizza.code = pizzaCode;
            rl.question('Please type your pizza libelle ? ', (pizzaLibelle) => {
                pizza.libelle = pizzaLibelle;
                rl.question('Please type your pizza price ? ', (pizzaPrice) => {
                    pizza.prix = pizzaPrice;
                    pizzas.push(pizza);
                });
            });
        });
    });
}
 
function updatePizza(id) {
    let pizza = pizzas[id];
    rl.question('Please type your pizza code ? ', (pizzaCode) => {
        pizza.code = pizzaCode;
        rl.question('Please type your pizza libelle ? ', (pizzaLibelle) => {
            pizza.libelle = pizzaLibelle;
            rl.question('Please type your pizza price ? ', (pizzaPrice) => {
                pizza.prix = pizzaPrice;
                pizzas[id] = pizza;
            });
        });
    });
}
 
function deletePizza(id) {
    pizzas.splice(id, 1)
}