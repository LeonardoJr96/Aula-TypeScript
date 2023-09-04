//interfaces (type x interface)
type robo = {                       //tipa variaveis
    readonly id: number | string;
    name: string;
};

interface robot2 {                  // tipa classes
    readonly id: number | string;
    name: string;
};

const bot: robo = {
    id: 1,
    name: "megaman",
};

const bot1: robot2 = {
    id: 1,
    name: "megaman",
};

console.log(bot);
console.log(bot1);