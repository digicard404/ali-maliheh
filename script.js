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

    mohammad_abrahimi: "محمد ابراهیمی با بانو",

    mehdi_rezaei: "مهدی رضایی با خانواده",

    mehdi_kermanshahi: "مهدی کرمانشاهی با بانو",

    mehrdad_manzar: "مهرداد منظر با خانواده",

    peyman_bayat: "پیام بیات با خانواده",

    milad_rezaei: "میلاد رضایی با بانو",

    ali_golestani: "علی گلستانی با خانواده",

    kazem_ghaffari: "کاظم غفاری با بانو",

    farhad_davoodi: "فرهاد داودی با بانو",

    mohammad_karami: "محمد کرمی با خانواده",

    reza_karami: "رضا کرمی با خانواده",

    akram_karami: "اکرم کرمی با خانواده",

    ali_karami: "علی کرمی با خانواده",

    rahim_kati: "رحیم کتی با بانو",

    behzad_valipour: "بهزاد ولیپور با بانو",

    behdad_valipour: "بهداد ولیپور با بانو",

    mojtaba_shekari: "مجتبی شکاری با اقا زاده",

    mostafa_shekari: "مصطفی شکاری",

    reza_aghajani: "رضا اقاجانی با بانو",

    abbas_fattahi: "عباس فتاحی با بانو",

    amir_darvish_gholami: "امیر درویش غلامی با خانواده",

    hesam_darvish_gholami: "حسام درویش غلامی با بانو",

    akbar_magari: "اکبر مغاری با خانواده",

    mina_golestani: "مینا گلستانی",

    maryam_ahmadzadeh: "مریم احمد زاده",

    hassan_pedrammanesh: "حسن پدرام منش با بانو",

    hosein_amiri: "حسین امیری با بانو",


    mohammadreza_alimardani: "محمد رضا علیمردانی با بانو",

    hassan_alimardani: "حسن علیمردانی با خانواده",

    mehdi_daniyali: "مهدی دانیالی با خانواده",

    mohammad_daniyali: "محمد دانیالی با خانواده",

    mahsa_daniyali: "مهسا دانیالی با خانواده",

    hadi_daniyali: "هادی دانیالی با بانو",
    majid_daniyali: "مجید دانیالی با بانو",

    reza_daniyali: "رضا دانیالی با بانو",

    rasoul_daniyali: "رسول دانیالی با خانواده",

    mehdi_haghighatkhah: "مهدی حقیقت خواه با بانو",

    hamid_abdian: "حمید عبدیان",

    touraj_niknam: "تورج نیکنام با بانو",

    mohammad_soltanmohammadi: "محمد سلطان محمدی با خانواده",

    ali_danan: "علی دنان",

    haj_esmail_golzadeh: "حاج اسماعیل گلزاده",

    mohammad_khansari: "محمد خوانساری",

    ali_badi_alzamani: "علی بدیع الزمانی",

    mohammad_badi_alzamani: "محمد بدیع الزمانی با بانو",

    doctor_kazem_khonsari: "دکتر کاظم خونساری با بانو",

    behrouz_rasouli: "بهروز رسولی",

    reza_haj_mashhadi: "رضا حاج مشهدی با بانو",

    kati_kazemi: "کتی کاظمی",

    abdollah_yousefi: "عبداله یوسفی با بانو",

    amirhesam_yousefi: "امیر حسام یوسفی با بانو",

    mohammad_eftekhari: "محمد افتخاری با بانو",

    ahmad_ghaydi: "احمد قیدی با مادر",

    reza_abdollahvand: "رضا عبداله وند با بانو",

    amir_jangroui: "امیر جنگروی",

    amirreza_raghebi: "امیر رضا راغبی",

    hamid_mousavi: "حمید موسوی با بانو",

    mohammadreza_kazemi: "محمد رضا کاظمی",}


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