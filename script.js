const track = document.getElementById('img');
const itens = track.querySelectorAll('li');

let index = 0;
const visiveis = 4;

function moverCarousel() {
    index++;

    if (index > itens.length - visiveis) {
        index = 0;
    }

    const larguraItem = itens[0].clientWidth;
    track.style.transform = `translateX(-${index * larguraItem}px)`;
}

setInterval(moverCarousel, 3000);

const btnFeedback = document.getElementById("btn-feedback");
const feedbackBox = document.getElementById("feedback-box");
const form = document.getElementById("feedback-form");

btnFeedback.addEventListener("click", () => {
    feedbackBox.style.display =
        feedbackBox.style.display === "block" ? "none" : "block";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const sugestao = document.getElementById("sugestao").value.trim();

    if (!nome || !email || !sugestao) {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Sugestão enviada com sucesso! 😊");
    form.reset();
    feedbackBox.style.display = "none";
});

const closeBtn = document.getElementById("close-feedback");

closeBtn.addEventListener("click", () => {
    feedbackBox.style.display = "none";
});