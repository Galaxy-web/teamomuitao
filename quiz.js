// Após verificar a resposta no seu script existente
if (respostaSelecionada === perguntas[perguntaAtual].respostaCerta) {
  acertos++;
} else {
  document.getElementById("coracaoCanvas").classList.add("erro"); // Adicione a classe "erro"
}
