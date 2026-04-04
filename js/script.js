
function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

document.getElementById("age").textContent = calculateAge("2010-01-14");

document.getElementById("year").textContent = new Date().getFullYear();

const avatar = document.getElementById("avatar");
const username = document.getElementById("username");

let clickCount = 0;
let activated = false;

const secretNames = [
    "Ivan0n",
    "АААА ФУРРИ",
    "idk",
    "пупупу",
    "фурри",
    "CHAT GPT "
];

avatar.addEventListener("mousedown", () => {
    const tilt = (Math.random() * 16 - 8).toFixed(2);
    avatar.style.transform = `scale(0.9) rotate(${tilt}deg)`;
});

avatar.addEventListener("mouseup", () => {
    avatar.style.transform = "scale(1.05) rotate(0deg)";
    
    setTimeout(() => {
        avatar.style.transform = "scale(1) rotate(0deg)";
    }, 100);
});

avatar.addEventListener("mouseleave", () => {
    avatar.style.transform = "scale(1) rotate(0deg)";
});

avatar.addEventListener("click", () => {
    if (activated) return;
    
    clickCount++;
    
    if (clickCount >= 10) {
        activated = true;
        
        const randomName = secretNames[Math.floor(Math.random() * secretNames.length)];
        username.textContent = randomName;
        username.setAttribute('data-text', randomName);
        username.style.textShadow = "0 0 10px rgba(102, 126, 234, 0.8)";
        
        setTimeout(() => {
            username.textContent = "Ivan"; 
            username.setAttribute('data-text', "ivan");
            username.style.textShadow = "none";
            clickCount = 0;
            activated = false;
        }, 5000);
    }
});

const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'KeyB', 'KeyA'
];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            toggleRainbowMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function toggleRainbowMode() {
    const body = document.body;
    const isRainbow = body.classList.toggle('rainbow-mode');
    
    if (isRainbow) {
        console.log("🌈 PARTY MODE ACTIVATED! 🌈");
    }
}


window.addEventListener('load', () => {
    document.querySelector('.content').style.opacity = '0';
    document.querySelector('.content').style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        document.querySelector('.content').style.transition = 'opacity 0.6s, transform 0.6s';
        document.querySelector('.content').style.opacity = '1';
        document.querySelector('.content').style.transform = 'translateY(0)';
    }, 100);
});