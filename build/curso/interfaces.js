"use strict";
;
const bot = {
    id: 1,
    name: "megaman",
};
const bot1 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot1);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Leonardo");
console.log(p.sayHello());
