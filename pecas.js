//1- Peça pode ser cadastrada caso o peso seja maior que 100g
//2- Lista de peças tem a capacidade máxima de 10 peças, mostrar que a lista está cheia
//3- A peça deve ter um nome maior que 3 caracteres, senão,mostrar erro


let peso = 101;
let capacidadePecas = ["Placa", "Para-Choque", "Filtro de oleo", "Pistão", "Caixa de CâmBio", "Suspensão", "Velas", "Lanterna", "Retrovisor", "Escapamento", "Disco de Freio"];
let nomePeca = "Placa";


if (peso > 100) {
    console.log("O Peso esta dentro dos parametros para cadastro.");
} else {
    console.log("Produto não pode ser cadastrado pois ele é menor que 100g");
};

if (capacidadePecas.length < 10) {
    console.log("Espaço disponivel para cadastro na lista");
} else {
    console.log("A lista de peças esta cheia, não é possivel cadastrar mais.")
}

if (nomePeca.length < 4) {
    console.log("Não é possivel cadastrar, o nome do produto deve ter mais de 3 caracteres.");
} else {
    console.log("Produto Cadastrado");
}