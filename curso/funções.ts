//*funções
function addNumber(x: number, y: number): number{
    return x + y;
}

let soma: number = addNumber(4,7);

console.log(soma);

//

function addToHello(name: string): string{
    return `Hello ${name}`;
}

console.log(addToHello("felipe"));

//* Multi tipos
function CalllToPhone(phone: number | string): number | string { // esse é o mais recomendado
    return phone;
}

function CalllToPhone1(phone: number | string): any {
    return phone;
}

console.log(CalllToPhone("41")) // nesse caso retorna number ou string


//* funções assincronas

async function getDatabase(id: number): Promise<string> {
    return "felipe";
}