class Pizza {
    id = 0;
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

const readline = require('readline');

const promptMessage = `**** Pizzeria Information *****  \n 
                        1. Lister les pizzas \n 
                        2. Ajouter une nouvelle pizza \n
                        3. Mettre à jour une pizza \n
                        4. Supprimer une pizza \n
                        99. Sortir \n :`

let pizzas = [
    new Pizza(0, "PEP", "Pépéroni", 12.50),
    new Pizza(1, "MAR", "Margharita", 14.00),
    new Pizza(2, "REIN", "La Reine", 11.50),
    new Pizza(3, "FRO", "La 4 Fromages", 12.00),
    new Pizza(4, "CAN", "La cannibale", 12.50),
    new Pizza(5, "SAV", "La savoyarde", 13.00),
    new Pizza(6, "ORI", "L'orientale", 13.50),
    new Pizza(7, "IND", "L'indienne", 14.00),
];

const rl = readline.createInterface({
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
            rl.question('Please type your pizza code ? ', (pizzaCode) => {
                updatePizza(pizzaCode);
            })
            break;
        case '4':
            console.log('Delete Pizza');
            rl.question('Please type your pizza code ? ', (pizzaCode) => {
                deletePizza(pizzaCode);
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
    pizza.id = pizzas.length;
    rl.question('Please type your pizza code ? ', (pizzaCode) => {
        pizza.code = pizzaCode;
        rl.question('Please type your pizza libelle ? ', (pizzaLibelle) => {
            pizza.libelle = pizzaLibelle;
            rl.question('Please type your pizza price ? ', (pizzaPrice) => {
                pizza.prix = Number(pizzaPrice);
                pizzas.push(pizza);
            });
        });
    });
}

function updatePizza(code) {
    let pizza = findPizzaByCode(code);
    rl.question('Please type your new pizza code ? ', (pizzaCode) => {
        pizza.code = pizzaCode;
        rl.question('Please type your new pizza libelle ? ', (pizzaLibelle) => {
            pizza.libelle = pizzaLibelle;
            rl.question('Please type your new pizza price ? ', (pizzaPrice) => {
                pizza.prix = Number(pizzaPrice);
                pizzas[pizza.id] = pizza;
            });
        });
    });
}

function deletePizza(code) {
    let pizza = findPizzaByCode(code);
    pizzas.splice(pizza.id, 1)
}

function findPizzaByCode(code) {
    let pizza = new Pizza();
    for (i = 0; i < pizzas.length ; i++) {
        if (pizzas[i].code == code) {
            pizza = pizzas[i];
        }
    }
    return pizza;
}