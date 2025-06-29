document.addEventListener("DOMContentLoaded", () => {
	// /* Micro‑animación GSAP al pasar el ratón sobre los botones */
	// document.querySelectorAll(".btn-vibrate").forEach((btn) => {
	// 	btn.addEventListener("mouseenter", () => {
	// 		gsap.fromTo(
	// 			btn,
	// 			{ rotation: -2 },
	// 			{
	// 				rotation: 2,
	// 				duration: 0.1,
	// 				yoyo: true,
	// 				repeat: 5,
	// 				ease: "sine.inOut",
	// 			}
	// 		);
	// 	});
	// });

	/* Scroll reveal para tarjetas de producto */
	gsap.from(".product-card", {
		scrollTrigger: {
			trigger: "#productos",
			start: "top 80%",
		},
		y: 20,
		opacity: 0,
		duration: 0.8,
		stagger: 0.2,
	});

	/* Contadores animados en sección Historia */
	gsap.utils.toArray("[data-count]").forEach((el) => {
		const final = parseInt(el.getAttribute("data-count"));
		gsap.fromTo(
			el,
			{ innerText: 0 },
			{
				innerText: final,
				duration: 2,
				ease: "power1.in",
				snap: { innerText: 1 },
				scrollTrigger: {
					trigger: "#historia",
					start: "top 80%",
				},
			}
		);
	});
});
// Animar la imagen: aparece desde la izquierda con leve zoom-in
gsap.from(".historia-img", {
	scrollTrigger: {
		trigger: "#fragmento-historia",
		start: "top 80%",
	},
	x: -80,
	scale: 0.9,
	opacity: 0,
	duration: 1,
	ease: "power2.out",
});

// Animar el bloque de texto: se desliza desde abajo
gsap.from(".historia-text", {
	scrollTrigger: {
		trigger: "#fragmento-historia",
		start: "top 80%",
	},
	y: 60,
	opacity: 0,
	duration: 1,
	delay: 0.2,
	ease: "power2.out",
});
// <!-- ============ Lógica GSAP ============ -->

document.addEventListener("DOMContentLoaded", () => {
	const wrapper = document.querySelector(".ba-wrapper");
	const slider = wrapper.querySelector(".ba-slider");
	const afterImg = wrapper.querySelector(".after-img");
	const handle = wrapper.querySelector(".ba-handle");

	// Función para actualizar clip y manija
	const updateSplit = (valPct) => {
		afterImg.style.clipPath = `inset(0 ${100 - valPct}% 0 0)`;
		handle.style.left = `${valPct}%`;
	};

	// Inicial
	updateSplit(50);

	// Drag / input
	slider.addEventListener("input", (e) => updateSplit(e.target.value));

	// GSAP: al salir del viewport regresa suave al centro
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.create({
		trigger: wrapper,
		start: "bottom bottom", // cuando deja de ser visible
		onLeave: () =>
			gsap.to(slider, {
				value: 50,
				duration: 0.6,
				onUpdate: () => updateSplit(slider.value),
			}),
		onEnterBack: (self) =>
			gsap.to(slider, {
				value: 50,
				duration: 0.6,
				onUpdate: () => updateSplit(slider.value),
			}),
	});
});

// <!-- ============= Animación GSAP ============= -->

// Efecto fade-up escalonado para cada “uso-card”
gsap.from(".uso-card", {
	scrollTrigger: {
		trigger: "#recomendaciones",
		start: "top 80%",
	},
	y: 40,
	opacity: 0,
	duration: 0.8,
	stagger: 0.2,
	ease: "power2.out",
});

// <!-- ========== Animación GSAP (entrada escalonada) ========== -->

gsap.registerPlugin(ScrollTrigger);
gsap.from(".mosaic-item", {
	scrollTrigger: {
		trigger: "#recomendaciones-mosaico",
		start: "top 80%",
	},
	y: 40,
	opacity: 0,
	duration: 0.8,
	stagger: 0.1,
	ease: "power2.out",
});

// <!-- ========== Animación GSAP ========== -->

gsap.registerPlugin(ScrollTrigger);
gsap.from(".brand-item", {
	scrollTrigger: { trigger: "#donde-comprar", start: "top 80%" },
	y: 30,
	opacity: 0,
	duration: 0.6,
	stagger: 0.1,
	ease: "power1.out",
});

// <!-- ========== Animación GSAP opcional ========== -->

gsap.registerPlugin(ScrollTrigger);
gsap.from("footer .row > div", {
	scrollTrigger: { trigger: "footer", start: "top 80%" },
	y: 30,
	opacity: 0,
	duration: 0.8,
	stagger: 0.15,
	ease: "power2.out",
});

// Validación Bootstrap
(() => {
	"use strict";
	const form = document.getElementById("contactForm");
	form.addEventListener(
		"submit",
		(event) => {
			if (!form.checkValidity()) {
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add("was-validated");
		},
		false
	);
})();

// Animación de aparición
gsap.registerPlugin(ScrollTrigger);
gsap.from("#contacto .card", {
	scrollTrigger: { trigger: "#contacto", start: "top 80%" },
	y: 40,
	opacity: 0,
	duration: 0.8,
	ease: "power2.out",
});
