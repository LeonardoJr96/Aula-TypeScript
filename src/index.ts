type heroi = {
    name: string;
    vulgo:string;
};

function printObjetos(pessoa:heroi) {
    console.log(pessoa);
}

//isso printa um objeto
printObjetos({
    name: "Bruce Wayne",
    vulgo: "Batman",
});