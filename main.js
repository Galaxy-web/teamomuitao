// Após a seção #quiz
var ctx = document.getElementById("chart").getContext("2d");

var chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Respostas Corretas", "Respostas Erradas"],
    datasets: [
      {
        data: [0, 0], // Inicialmente, ambas as respostas são 0
        backgroundColor: ["#e91e63", "#ddd"],
      },
    ],
  },
});

function atualizarGrafico(acertos, erros) {
  chart.data.datasets[0].data = [acertos, erros];
  chart.update();
}

// No seu script existente, após verificar a resposta correta
if (resposta === perguntas[0].respostaCerta) {
  $("#resultado").html("Resposta correta!");
  acertos++; // Aumenta o contador de acertos
} else {
  $("#resultado").html("Resposta errada!");
  erros++; // Aumenta o contador de erros
}

// Atualize o gráfico após cada resposta
atualizarGrafico(acertos, erros);
