const cardButtons = document.querySelector(".buttons");
const video = document.getElementById("valVideo");
const text = document.getElementById("valText");

let currentStep = "extraInitial"; // starts at the new first step
let noClickCount = 0;
let firstInteraction = false;

// ================= HELPERS =================
function changeVideo(src) {
    video.innerHTML = `<source src="${src}" type="video/mp4">`;
    video.load();
    video.play();
}

function fadeChangeVideo(src) {
    video.classList.add("fade-out");
    text.classList.add("fade-out");
    setTimeout(() => {
        changeVideo(src);
        video.classList.remove("fade-out");
        text.classList.remove("fade-out");
    }, 500);
}

function createButton(id, label, className = "", scale = 1) {
    const btn = document.createElement("button");
    btn.id = id;
    btn.className = className;
    btn.textContent = label;
    btn.style.transform = `scale(${scale})`;
    return btn;
}

function updateNoButton(textContent, scale) {
    const noBtn = document.getElementById("noBtn");
    if (noBtn) {
        noBtn.textContent = textContent;
        noBtn.style.transform = `scale(${scale})`;
    }
}

// ================= FIRST CLICK =================
document.getElementById("yizBtn").addEventListener("click", () => {
    // Unmute first video if not yet
    if (!firstInteraction) {
        video.muted = false;
        video.play();
        firstInteraction = true;
    }

    // Go to original first part
    currentStep = "start";
    handleStartPart();
});

// ================= ORIGINAL FIRST PART =================
function handleStartPart() {
    fadeChangeVideo("video1.mp4");
    text.innerHTML = "HII BABYY KOOO!! UHMM...";

    cardButtons.innerHTML = "";
    const btn = createButton("yesBtn", "HELLOOO BABYY!! YEAH???");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", () => {
        currentStep = "step2";
        handleStep2();
    });
}

// ================= STEP 2 =================
function handleStep2() {
    fadeChangeVideo("video2.mp4");
    text.innerHTML = "IF YOU ARE READING THIS RIGHT NOW SIGURO NAIBIGAY KO NA SAYO YUNG LETTER RIGHT???";

    cardButtons.innerHTML = "";
    const btn = createButton("mhhmBtn", "MHHHM?");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", () => {
        currentStep = "extra1";
        handleExtraStep1();
    });
}

// ================= EXTRA STEP 1 =================
function handleExtraStep1() {
    fadeChangeVideo("video_extra1.mp4");
    text.innerHTML = "YOU MIGHT BE WANDERING NA PARA SAAN BA TO HAHAHAHAHAHHA";

    cardButtons.innerHTML = "";
    const btn = createButton("yesExtra1", "YESSS");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", handleExtraStep2);
}

// ================= EXTRA STEP 2 =================
function handleExtraStep2() {
    fadeChangeVideo("video_extra2.mp4");
    text.innerHTML = "THERE'S JUST A LOT OF THINGS NA I WANT TO TELL YOU BUT BEFOREE THATTT BABYYY...";

    cardButtons.innerHTML = "";
    const btn = createButton("tellBtn", "TELL MEEE ANO PO YONN HMM??");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", handleConfession);
}

// ================= CONFESSION =================
function handleConfession() {
    fadeChangeVideo("video3.mp4");
    text.innerHTML = "I LOVEEEE YOUUUUUU SO MUCHHH BABYYYY IRISHHH KOOO!!";

    cardButtons.innerHTML = "";
    const yesBtn = createButton("yesBtn", "I LOVEE YOUUU MOREEE BABYYY!!");
    const noBtn = createButton("noBtn", "OKAY.");

    cardButtons.appendChild(yesBtn);
    cardButtons.appendChild(noBtn);

    yesBtn.addEventListener("click", yesStep1);
    noBtn.addEventListener("click", noStep1);
}

// ================= YES PATH =================
function yesStep1() {
    fadeChangeVideo("video4.mp4");
    text.innerHTML = "YEEEEYYY SKFJSKDKKD";

    cardButtons.innerHTML = "";
    const btn = createButton("hahaBtn", "HAHAHAHHAA");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", yesStep2);
}

function yesStep2() {
    fadeChangeVideo("video5.mp4");
    text.innerHTML = "SO UHMM... BEFORE MO BUKSAN YUNG LETTER I WANT YOU TO READ THIS DIN MUNA :>>";

    cardButtons.innerHTML = "";
    const btn = createButton("openBtn", "PINDUTIN MO AKO PINDUTIN MO AKO WHAHHAHAHAHAHAHAH");
    cardButtons.appendChild(btn);

    btn.addEventListener("click", () => {
        window.location.href = "letter.html";
    });
}

// ================= NO PATH =================
function noStep1() {
    noClickCount++;

    if (noClickCount === 1) {
        fadeChangeVideo("video_no1.mp4");
        text.innerHTML = "LAHHH DI MO AKO LOVEE😠😠";
        updateNoButton("HINDI.", 0.7);

    } else if (noClickCount === 2) {
        fadeChangeVideo("video_no2.mp4");
        text.innerHTML = "HINDI TALAGAA?? haha";
        updateNoButton("HINDI TALAGA.", 0.49);

    } else if (noClickCount === 3) {
        fadeChangeVideo("video_no3.mp4");
        text.innerHTML = "KAHIT SLIGHTT LANG??";
        updateNoButton("KAHIT CRUSH HINDI.", 0.343);

    } else if (noClickCount === 4) {
        fadeChangeVideo("video_no4.mp4");
        text.innerHTML = "INALIS KO NA BUTTON HAHAHAHAA😠😠😛😛";

        cardButtons.innerHTML = "";
        const yesBtn = createButton("forceYes", "JOKE LANG LOVEE KITA TALAGA");
        cardButtons.appendChild(yesBtn);

        yesBtn.addEventListener("click", yesStep1);
    }
}