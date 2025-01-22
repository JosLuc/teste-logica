function faturamento(faturamentoDiario) {
    
    let diasComFaturamento = faturamentoDiario.filter(faturamento => faturamento > 0);
    
    let mediaMensal = diasComFaturamento.reduce((acc, valor) => acc + valor, 0) / diasComFaturamento.length;
    
    let menorFaturamento = Math.min(...diasComFaturamento);
    let maiorFaturamento = Math.max(...diasComFaturamento);
    
    let diasAcimaDaMedia = diasComFaturamento.filter(faturamento => faturamento > mediaMensal).length;
    
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

let faturamentoDiario = [
    1000, 2000, 1500, 0, 0, 2500, 2000, 1800, 0, 3000, 2200, 0, 2100, 2500, 
    2000, 1700, 1800, 0, 3000, 2200, 2500, 1900, 2100, 0, 2200, 2000
];

let resultados = faturamento(faturamentoDiario);

console.log(`Menor Faturamento: ${resultados.menorFaturamento}`);
console.log(`Maior Faturamento: ${resultados.maiorFaturamento}`);
console.log(`Número de dias com faturamento superior à média mensal: ${resultados.diasAcimaDaMedia}`);
