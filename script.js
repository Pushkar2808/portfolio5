gsap.fromTo('#loader', { opacity: 1 }, { opacity: 0, duration: 0.5, delay: 2, onComplete: () => {
    loader.style.display = 'none'; 
} });

gsap.fromTo('#hero h1', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo('#hero', { scale: 1.1 }, { scale: 1, duration: 1, ease: "back.out(1.7)" });

gsap.fromTo('nav ul li', { opacity: 0, y: -20, stagger: 0.1 }, { opacity: 1, y: 0, duration: 0.8 });

gsap.fromTo('#about h2', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo('#about p', { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 0.8 });

gsap.fromTo('.project', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 1.5 });

gsap.fromTo('#contact h2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
gsap.fromTo('#contact form', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 2.2 });

const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => { 
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.2 });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
    });
}); 