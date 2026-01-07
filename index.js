// 1. ลงทะเบียน Plugin (ถ้ามีใช้งาน ScrollTrigger ในอนาคต)
gsap.registerPlugin(ScrollTrigger);

// --- GSAP ANIMATIONS (เมื่อโหลดหน้าเว็บ) ---

// อนิเมทพื้นหลังเฉียงแดง (ขยับจากมุมอื่นแล้วหมุนเข้าที่)
gsap.from(".pinkred", {
    rotation: 100,
    scale: 1.5,
    opacity: 0,
    duration: 2.5,
    ease: "power2.out"
});

// อนิเมทกล่องสีชมพู (วิ่งมาจากทางซ้าย)
gsap.from(".box", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "expo.out",
    delay: 0.2
});

// เอฟเฟกต์กล่องลอย (Floating) ขึ้น-ลง ตลอดเวลา
gsap.to(".box", {
    y: 20,
    duration: 2,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
});

// อนิเมทข้อความใน text-group (ให้ทยอยโผล่ทีละบรรทัด)
// ใช้ "> *" เพื่อเลือกลูกทุกตัวใน text-group (p, subtitle ฯลฯ)
gsap.from(".text-group > *", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2, 
    ease: "power4.out",
    delay: 0.5
});

// อนิเมทปุ่ม Scroll Indicator (เด้งเบาๆ)
gsap.to(".scroll-indicator", {
    opacity: 1,
    duration: 1,
    delay: 2
});


// --- MOUSE INTERACTIONS (ลูกเล่นเมาส์) ---

// 1. พื้นหลังขยับตามเมาส์เล็กน้อย (Parallax Effect)
document.addEventListener("mousemove", (e) => {
    // คำนวณหาจุดกึ่งกลางจอเพื่อหาค่าความต่าง
    const xMove = (e.clientX - window.innerWidth / 2) / 50;
    const yMove = (e.clientY - window.innerHeight / 2) / 50;
    
    gsap.to(".pinkred", {
        x: xMove,
        y: yMove,
        duration: 2, // เพิ่ม duration ให้นิ่มขึ้น
        ease: "power1.out"
    });
});

// 2. ระบบ Navbar (ซ่อน/แสดง ตามตำแหน่งเมาส์)
const navbar = document.querySelector('.navBar');
let hideTimeout;

document.addEventListener('mousemove', function(e) {
    // แสดง Navbar เมื่อเอาเมาส์จ่อด้านบน (น้อยกว่า 80px)
    if (e.clientY < 80) {
        navbar.classList.remove('hidden');
        clearTimeout(hideTimeout);
    } 
    // ซ่อน Navbar เมื่อเมาส์อยู่นอกเขต และให้หน่วงเวลา 1 วินาที
    else if (e.clientY > 100) {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            navbar.classList.add('hidden');
        }, 1000);
    }
});

// 3. Box Hover Effect (ขยายเมื่อเมาส์ชี้)
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