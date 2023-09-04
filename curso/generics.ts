//generics
function concatArray(...itens: any[]):any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);

numArray.push("saitama"); //tipo any permite adicionar vários tipos 
console.log(numArray);
console.log(stgArray);