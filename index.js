
gsap.registerPlugin(ScrollTrigger);

gsap.from(".pinkred", {
    rotation: 100,
    scale: 1.5,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
});

gsap.from(".box", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
    delay: 0.2
});


gsap.to(".box", {
    y: 20,
    duration: 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

gsap.from(".text-group > *", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2, 
    ease: "power4.out",
    delay: 0.5
});


gsap.to(".scroll-indicator", {
    opacity: 1,
    duration: 1,
    delay: 2
});


document.addEventListener("mousemove", (e) => {
    const xMove = (e.clientX - window.innerWidth / 2) / 50;
    const yMove = (e.clientY - window.innerHeight / 2) / 50;
    
    gsap.to(".pinkred", {
        x: xMove,
        y: yMove,
        duration: 2,
        ease: "power1.out"
    });
});

const navbar = document.querySelector('.navBar');
let hideTimeout;

document.addEventListener('mousemove', function(e) {
    if (e.clientY < 80) {
        navbar.classList.remove('hidden');
        clearTimeout(hideTimeout);
    } 
    else if (e.clientY > 100) {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            navbar.classList.add('hidden');
        }, 1000);
    }
});

const box = document.querySelector('.box');
box.addEventListener('mouseenter', () => {
    gsap.to(".box", {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out"
    });
});

box.addEventListener('mouseleave', () => {
    gsap.to(".box", {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
    });

});
