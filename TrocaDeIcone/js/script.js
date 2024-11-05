// Função para alternar os ícones
setInterval(() => {
    const icon1 = document.getElementById("icon1");
    const icon2 = document.getElementById("icon2");

    // Alterna entre os ícones
    icon1.classList.toggle("active");
    icon2.classList.toggle("active");
}, 1000); // 1000 ms = 1 segundos