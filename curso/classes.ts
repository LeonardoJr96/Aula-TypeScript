//classes
/*
    data modifiers
    public - onde todos vê
    private - só as classes vê
    protected - classes e subclasses vê
    readonly - somente leitura, impedi a troca de valor
*/
class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    protected attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character("Ryu", 10, 98);
console.log(p1); //exibe Character { stregth: [valor] , skill: [valor]}

p1.attack(); //exibe "Attack with ${this.stregth} points"
