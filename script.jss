let dados = [];

function adicionar() {
    const valor = document.getElementById("valorInput").value;
    
    if (valor === "") return;

    dados.push(Number(valor));

    atualizarGrafico();
}

function atualizarGrafico() {
    const ctx = document.getElementById("grafico").getContext("2d");

    if (window.graficoAtual) {
        window.graficoAtual.destroy();
    }

    window.graficoAtual = new Chart(ctx, {
        type: "line",
        data: {
            labels: dados.map((v, i) => i + 1),
            datasets: [
                {
                    label: "Valores",
                    data: dados,
                }
            ]
        }
    });
}
