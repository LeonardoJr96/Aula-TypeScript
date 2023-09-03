//tipos primitivos: boolean, number, string
let on = false; //boolean
let ligado: boolean = false; //boolean com trava

let nome: string = "Felipe";
let idade: number = 30
let altura: number = 1.9;

//null
let nulo: null = null;

//undefined
let indefinido: undefined = undefined;

//any
let retornoView: any = ""; //aceita qualquer coisa e é utilizado quando o valor que retorna não é previsivel

//void
let retorno: void //utilizado em funções e não cria retorno


//objeto - sem previsibilidade

//tem que dar valores dentro de um objeto
let produto: object = {
    name: "Felipe",
    cidade: "sp",
    idade: 30,
}; 


//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
}


//array
//declarar array
let dados: string[] = ["Felipe", "ana", "adriana"];
let dados2: Array<string> = ["Felipe", "ana", "adriana"];

//array com multitypes - | significa "ou"
let infos: (string | number)[] = ["Felipe", 30, 30, "adriana"];

// Tuplas - cria uma ordem nos array
let ex: [] = [] //formula
let boleto: [string, number, number] = ["agua conta", 199.90, 3218615616]; //precisa estar na exata ordem