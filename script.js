const video = document.getElementById("weddingVideo");

document.addEventListener("click", () => {
    video.muted = false;   // صدا فعال می‌شود
    video.play();          // ادامه پلی
}, { once: true });         // فقط یک بار اجرا شود

// تاریخ مراسم — نسخه کاملاً سازگار با سافاری
let weddingDate = new Date(2026, 9, 7, 18, 0, 0).getTime();

function updateTimer() {
    let now = Date.now();
    let diff = weddingDate - now;

    if (diff <= 0) {
        day.innerHTML = "0";
        hour.innerHTML = "0";
        min.innerHTML = "0";
        sec.innerHTML = "0";
        return;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}

setInterval(updateTimer, 1000) 


function sendRSVP(status) {
    let name = document.getElementById("guestName").value;

    if (!name.trim()) {
        alert("لطفاً اسم خود را وارد کنید 🌸");
        return;
    }

    // شماره واتساپ مقصد
    let phone = "989127777661"; // ← اینجا شماره عروس یا خودت +98

    let text = "";

    if (status === "yes") {
        text = `سلام، من ${name} هستم.\nبرای مراسم میام 🌸`;
    } else {
        text = `سلام، من ${name} هستم.\nمتاسفانه نمی‌تونم بیام 💐`;
    }

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}

const guests = {
    maryam: "مریم احمد زاده",
    ali: "علی"
};

const params = new URLSearchParams(window.location.search);
const guestCode = params.get("g");

if (guestCode && guests[guestCode]) {
    const guestName = document.getElementById("guestName");

    if (guestName) {
        guestName.textContent = guests[guestCode];
    }
}