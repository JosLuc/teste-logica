function inverterString(str) {
    let strInvertida = '';

    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }

    return strInvertida;
}

let stringOriginal = "inverter";

let resultado = inverterString(stringOriginal);
console.log("String invertida: " + resultado);
