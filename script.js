// ================= BANNER ROTATIVO AUTOMÁTICO =================

// Seleciona todos os slides
const slides = document.querySelectorAll(".slide");

let index = 0;

// Função que troca os slides automaticamente
function trocarSlide() {

    // Remove classe active do slide atual
    slides[index].classList.remove("active");

    // Atualiza índice
    index = (index + 1) % slides.length;

    // Adiciona classe active ao próximo slide
    slides[index].classList.add("active");
}

// Troca a cada 3 segundos
setInterval(trocarSlide, 3000);