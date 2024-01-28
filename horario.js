// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");

// Obtém a hora atual do sistema
const currentHour = new Date().getHours();

// Forma mais simples de determinar a saudação com base na hora atual
const greetingMessage =
  // Verifica se a hora está entre 5h (inclusive) e 12h (exclusive)
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    // Se não, verifica se a hora está entre 12h (inclusive) e 18h (exclusive)
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    // Se não se encaixar nas condições anteriores, assume-se que é noite
    : "Boa noite";

// Atualiza o conteúdo do elemento HTML com a mensagem da saudação determinada
greetingElement.textContent = greetingMessage;


