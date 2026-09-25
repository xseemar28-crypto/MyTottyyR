/* =====================================================
   PAGE MANAGEMENT
===================================================== */

const pages = {

    passwordPage:
        document.getElementById("passwordPage"),

    envelopePage:
        document.getElementById("envelopePage"),

    openedEnvelopePage:
        document.getElementById("openedEnvelopePage"),

    letterPage:
        document.getElementById("letterPage"),

    messagePage:
        document.getElementById("messagePage"),

    flowerPage:
        document.getElementById("flowerPage"),

    songPage:
        document.getElementById("songPage"),

    finalPage:
        document.getElementById("finalPage")

};


/* =====================================================
   SHOW PAGE
===================================================== */

function showPage(pageId) {

    Object.values(pages).forEach(page => {

        if (page) {

            page.classList.remove("active-page");

        }

    });


    const targetPage =
        document.getElementById(pageId);


    if (targetPage) {

        targetPage.classList.add("active-page");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   PASSWORD
===================================================== */

const correctPassword = "143";

let enteredPassword = "";


/* =====================================================
   ADD PASSWORD NUMBER
===================================================== */

function addPasswordNumber(number) {

    // لا يسمح بأكثر من 3 أرقام

    if (enteredPassword.length >= 3) {
        return;
    }


    enteredPassword += number;


    updatePasswordDisplay();


    // عندما تكتمل 3 أرقام
    if (enteredPassword.length === 3) {

        setTimeout(() => {

            checkPassword();

        }, 180);

    }

}


/* =====================================================
   CHECK PASSWORD
===================================================== */

function checkPassword() {

    if (enteredPassword === correctPassword) {

        clearPassword();

        showPage("envelopePage");

    } else {

        showErrorPopup();

    }

}


/* =====================================================
   PASSWORD DISPLAY
===================================================== */

function updatePasswordDisplay() {

    const dots =
        document.querySelectorAll(
            "#passwordDisplay span"
        );


    dots.forEach((dot, index) => {

        if (index < enteredPassword.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    });

}


/* =====================================================
   CLEAR PASSWORD
===================================================== */

function clearPassword() {

    enteredPassword = "";

    updatePasswordDisplay();

}


/* =====================================================
   ERROR POPUP
===================================================== */

const errorOverlay =
    document.getElementById("errorOverlay");

const tryAgainButton =
    document.getElementById("tryAgainButton");


/* =====================================================
   SHOW ERROR POPUP
===================================================== */

function showErrorPopup() {

    if (errorOverlay) {

        errorOverlay.style.display = "flex";

    }

}


/* =====================================================
   TRY AGAIN
===================================================== */

function closeErrorPopup() {

    if (errorOverlay) {

        errorOverlay.style.display = "none";

    }


    // تصفير الرقم حتى تقدر تدخل كلمة المرور من جديد

    clearPassword();

}


/* =====================================================
   TRY AGAIN BUTTON
===================================================== */

if (tryAgainButton) {

    tryAgainButton.addEventListener(
        "click",
        closeErrorPopup
    );

}


/* =====================================================
   OPEN ENVELOPE
===================================================== */

function openEnvelope() {

    showPage("openedEnvelopePage");

}


/* =====================================================
   OPEN FLOWER PAGE
===================================================== */

function openFlowerPage() {

    showPage("flowerPage");

}


/* =====================================================
   OPEN LETTER PAGE
===================================================== */

function openLetterPage() {

    showPage("letterPage");

}


/* =====================================================
   OPEN SONG PAGE
===================================================== */

function openSongPage() {

    showPage("songPage");

}


/* =====================================================
   OPEN FINAL PAGE
===================================================== */

function openFinalPage() {

    showPage("finalPage");

}


/* =====================================================
   GO BACK
===================================================== */

function goBack(pageId) {

    if (pageId) {

        showPage(pageId);

    }

}
