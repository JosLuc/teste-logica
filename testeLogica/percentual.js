function calcularPercentuais(faturamentoPorEstado) {
    let totalFaturamento = 0;
    for (let estado in faturamentoPorEstado) {
        totalFaturamento += faturamentoPorEstado[estado];
    }

    let percentuais = {};
    for (let estado in faturamentoPorEstado) {
        let percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
        percentuais[estado] = percentual.toFixed(2);
    }

    return percentuais;
}

let faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let percentuais = calcularPercentuais(faturamentoPorEstado);

for (let estado in percentuais) {
    console.log(`Percentual de ${estado}: ${percentuais[estado]}%`);
}
