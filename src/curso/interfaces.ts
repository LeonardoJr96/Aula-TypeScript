//interfaces (type x interface)
type robo = {                       //tipa variaveis
    readonly id: number | string;
    name: string;
};

interface robot2 {                  // tipa classes
    readonly id: number | string;
    name: string;
    sayHello(): string
};

const bot: robo = {
    id: 1,
    name: "megaman",
};

const bot1: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot);
console.log(bot1);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor (id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello ${this.name}`
    }
}

const p = new Pessoa(1, "Leonardo");
console.log(p.sayHello());