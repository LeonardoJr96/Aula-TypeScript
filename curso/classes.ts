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

//Character: superclass
//Magician: subclass
class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        stregth: number, 
        skill: number, 
        magicPoints: number){
        super(name, stregth, skill)
        this.magicPoints = magicPoints;
    }
}




const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100)

/*
console.log(p1); //exibe Character { stregth: [valor] , skill: [valor]}

p1.attack(); //exibe "Attack with ${this.stregth} points"
*/