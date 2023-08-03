document.querySelector(".intro-btt").addEventListener("click", () => {
	const nextPage = document.querySelector("#presentation");

	scrollTo(nextPage);
});

document.querySelector(".restartBtt").addEventListener("click", () => {
	const initPage = document.querySelector("#intro");

	scrollTo(initPage);
});

function goToActOne() {
	const actOne = document.querySelector(".act-um");
	scrollTo(actOne);
}

function goToActTwo() {
	const actTwo = document.querySelector(".act-dois");
	scrollTo(actTwo);
}

function scrollTo(place) {
	if (place) {
		place.scrollIntoView({
			behavior: "smooth",
		});
	}
}

function fadeInOnScroll() {
	const fadeElements = document.querySelectorAll(".fade-in");

	fadeElements.forEach((element) => {
		const elementTop = element.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (elementTop < windowHeight) {
			element.classList.add("show");
		}
	});
}

// Adicione um listener para chamar a função sempre que a página é rolada
window.addEventListener("scroll", fadeInOnScroll);

// Chame a função uma vez para verificar os elementos já visíveis na página inicial
fadeInOnScroll();
