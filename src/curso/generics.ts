//generics

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["felipe", "goku"], ["vegeta"]);

//tipo any permite adicionar vários tipos 
//T deixa com Tipo especifico

console.log(numArray);
console.log(stgArray);