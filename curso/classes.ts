//classes
/*
    data modifiers
    public - onde todos vê
    private - só as classes vê
    protected - classes e subclasses vê
*/
class Character {
    private name?: string;
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number) {
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character(10, 98);
console.log(p1); //exibe Character { stregth: [valor] , skill: [valor]}

p1.attack(); //exibe "Attack with ${this.stregth} points"