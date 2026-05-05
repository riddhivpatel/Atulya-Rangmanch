// 1. SCROLL REVEAL EFFECT
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};
window.addEventListener('scroll', reveal);

// 2. 3D SLIDER LOGIC
let items = document.querySelectorAll('.item');
let current = 0;

function updateSlider() {
    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        item.style.opacity = "0"; // Hide non-active

        if (index === current) {
            item.classList.add('active');
            item.style.opacity = "1";
        } else if (index === (current - 1 + items.length) % items.length) {
            item.classList.add('prev');
            item.style.opacity = "1";
        } else if (index === (current + 1) % items.length) {
            item.classList.add('next');
            item.style.opacity = "1";
        }
    });
}

document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % items.length;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    updateSlider();
});

// 3. FORM VALIDATIONS
// Login
document.getElementById('loginForm').onsubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById('logUser').value;
    const pass = document.getElementById('logPass').value;
    if (user === "" || pass === "") alert("Fields cannot be empty!");
    else if (pass.length < 6) alert("Password too short!");
    else alert("Welcome back, " + user + "!");
};

// Register
document.getElementById('regForm').onsubmit = (e) => {
    e.preventDefault();
    const p1 = document.getElementById('regPass').value;
    const p2 = document.getElementById('regConfirm').value;
    const email = document.getElementById('regEmail').value;

    if (!email.includes("@")) alert("Invalid Email!");
    else if (p1 !== p2) alert("Passwords do not match!");
    else alert("Account Created Successfully!");
};

// Feedback
document.getElementById('feedForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    e.target.reset();
};

// Init
updateSlider();
reveal();