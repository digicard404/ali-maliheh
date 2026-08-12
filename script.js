// ========================================
// ویدئو
// ========================================

const video = document.getElementById("weddingVideo");

document.addEventListener("click", () => {

    if (video) {
        video.muted = false;
        video.play();
    }

}, { once: true });



// ========================================
// تایمر مراسم
// ========================================

// تاریخ مراسم
// 2026, 9, 7 یعنی 7 اکتبر 2026
let weddingDate = new Date(
    2026,
    8,
    7,
    18,
    0,
    0
).getTime();


function updateTimer() {

    let now = Date.now();

    let diff = weddingDate - now;


    // اگر زمان مراسم گذشته باشد
    if (diff <= 0) {

        document.getElementById("day").innerHTML = "0";
        document.getElementById("hour").innerHTML = "0";
        document.getElementById("min").innerHTML = "0";
        document.getElementById("sec").innerHTML = "0";

        return;
    }


    let days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );


    let hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    let minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );


    let seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );


    document.getElementById("day").innerHTML = days;

    document.getElementById("hour").innerHTML = hours;

    document.getElementById("min").innerHTML = minutes;

    document.getElementById("sec").innerHTML = seconds;
}


// اجرای اولیه
updateTimer();

// به‌روزرسانی هر ثانیه
setInterval(updateTimer, 1000);



// ========================================
// تایید حضور در واتساپ
// ========================================

function sendRSVP(status) {

    // اسم واردشده در فرم RSVP
    let name = document.getElementById("rsvpName").value;


    // اگر اسم وارد نشده باشد
    if (!name.trim()) {

        alert("لطفاً اسم خود را وارد کنید 🌸");

        return;
    }


    // شماره واتساپ
    let phone = "989127777661";


    let text = "";


    // اگر مهمان می‌آید
    if (status === "yes") {

        text = ` سلام، من ${name} هستم.
برای مراسم میام 🌸`;

    }

    // اگر مهمان نمی‌آید
    else {

        text =` سلام، من ${name} هستم.
متاسفانه نمی‌تونم بیام 💐`;

    }


    // ساخت لینک واتساپ
    let url =
    ` https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    // باز کردن واتساپ
    window.open(url, "_blank");
}



// ========================================
// اسامی مهمان‌ها
// ========================================

const guests = {

    mohammad_abrahimi: "آقای محمد ابراهیمی با بانو",

    mehdi_rezaei: "آقای مهدی رضایی با خانواده",

    mehdi_kermanshahi: "آقای مهدی کرمانشاهی با بانو",

    mehrdad_manzar: "آقای مهرداد منظر با خانواده",

    payam_bayat: "آقای پیام بیات با خانواده",

    milad_rezaei: "آقای میلاد رضایی با بانو",

    ali_golestani: "آقای علی گلستانی با خانواده",

    kazem_ghaffari: "آقای کاظم غفاری با بانو",

    farhad_davoodi: "آقای فرهاد داودی با بانو",

    mohammad_karami: "آقای محمد کرمی با خانواده",

    reza_karami: "آقای رضا کرمی با خانواده",

    akram_karami: "آقای اکرم کرمی با خانواده",

    ali_karami: "آقای علی کرمی با خانواده",

    rahim_kati: "آقای رحیم کتی با بانو",

    behzad_valipour: "آقای بهزاد ولیپور با بانو",

    behdad_valipour: "آقای بهداد ولیپور با بانو",

    mojtaba_shekari: "آقای مجتبی شکاری با اقا زاده",

    mostafa_shekari: "آقای مصطفی شکاری",

    reza_aghajani: "آقای رضا اقاجانی با بانو",

    abbas_fattahi: "آقای عباس فتاحی با بانو",

    amir_darvish_gholami: "آقای امیر درویش غلامی با خانواده",

    hesam_darvish_gholami: "آقای حسام درویش غلامی با بانو",

    akbar_magari: "آقای اکبر مغاری با خانواده",

    mina_golestani: "خانم مینا گلستانی",

    maryam_ahmadzadeh: "خانم مریم احمد زاده",

    hassan_pedrammanesh: "آقای حسن پدرام منش با بانو",

    hosein_amiri: "آقای حسین امیری با بانو",


    mohammadreza_alimardani: "آقای محمد رضا علیمردانی با بانو",

    hassan_alimardani: "آقای حسن علیمردانی با خانواده",

    mehdi_daniyali: "آقای مهدی دانیالی با خانواده",

    mohammad_daniyali: "آقای محمد دانیالی با خانواده",

    mahsa_daniyali: "خانم مهسا دانیالی با خانواده",

    hadi_daniyali: "آقای هادی دانیالی با بانو",
    majid_daniyali: "آقای مجید دانیالی با بانو",

    reza_daniyali: "آقای رضا دانیالی با بانو",

    rasoul_daniyali: "آقای رسول دانیالی با خانواده",

    mehdi_haghighatkhah: "آقای مهدی حقیقت خواه با بانو",

    hamid_abdian: "آقای حمید عبدیان",

    touraj_niknam: "آقای تورج نیکنام با بانو",

    mohammad_soltanmohammadi: "آقای محمد سلطان محمدی با خانواده",

    ali_danan: "آقای علی دنان",

    haj_esmail_golzadeh: "آقای حاج اسماعیل گلزاده",

    mohammad_khansari: "آقای محمد خوانساری",

    ali_badi_alzamani: "آقای علی بدیع الزمانی",

    mohammad_badi_alzamani: "آقای محمد بدیع الزمانی با بانو",

    doctor_kazem_khonsari: "آقای دکتر کاظم خونساری با بانو",

    behrouz_rasouli: "آقای بهروز رسولی",

    reza_haj_mashhadi: "آقای رضا حاج مشهدی با بانو",

    kati_kazemi: "خانم کتی کاظمی",

    abdollah_yousefi: "آقای عبدالله یوسفی با بانو",

    amirhesam_yousefi: "آقای امیر حسام یوسفی با بانو",

    mohammad_eftekhari: "آقای محمد افتخاری با بانو",

    ahmad_ghaydi: "آقای احمد قیدی با مادر",

    reza_abdollahvand: "آقای رضا عبداله وند با بانو",

    amir_jangroui: "آقای امیر جنگروی",

    amirreza_raghebi: "آقای امیر رضا راغبی",

    hamid_mousavi: "آقای حمید موسوی با بانو",

    mohammadreza_kazemi: "آقای محمد رضا کاظمی",}


    // ========================================
    // موارد تکراری
    // ========================================

    
    // ========================================
    // تکراری‌های بخش دوم
    // ========================================

    

// ========================================
// نمایش اسم مهمان از روی لینک
// ========================================

const params =
    new URLSearchParams(window.location.search);


const guestCode =
    params.get("g");


const guestNameElement =
    document.getElementById("guestName");


if (
    guestCode &&
    guests[guestCode] &&
    guestNameElement
) {

    guestNameElement.textContent =
        guests[guestCode];

}