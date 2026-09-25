/* =====================================================
   NUMBER BUTTONS
===================================================== */

const numberButtons =
    document.querySelectorAll(".number-button");


numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        const number =
            button.dataset.number;


        if (
            number !== "*" &&
            number !== "#"
        ) {

            addPasswordNumber(number);

        }

    });

});


/* =====================================================
   TRY AGAIN
===================================================== */

const tryAgainButton =
    document.getElementById("tryAgainButton");


if (tryAgainButton) {

    tryAgainButton.addEventListener(
        "click",
        () => {

            hideErrorPopup();

            clearPassword();

            showPage("passwordPage");

        }
    );

}


/* =====================================================
   CLOSE ERROR
===================================================== */

const closeErrorButton =
    document.getElementById("closeErrorButton");


if (closeErrorButton) {

    closeErrorButton.addEventListener(
        "click",
        () => {

            hideErrorPopup();

            clearPassword();

            showPage("passwordPage");

        }
    );

}


/* =====================================================
   ENVELOPE
===================================================== */

const envelopeButton =
    document.getElementById("envelopeButton");


if (envelopeButton) {

    envelopeButton.addEventListener(
        "click",
        () => {

            openEnvelope();

        }
    );

}


/* =====================================================
   FLOWER
===================================================== */

const flowerChoice =
    document.getElementById("flowerChoice");


if (flowerChoice) {

    flowerChoice.addEventListener(
        "click",
        () => {

            openFlowerPage();

        }
    );

}


/* =====================================================
   LETTER
===================================================== */

const letterChoice =
    document.getElementById("letterChoice");


if (letterChoice) {

    letterChoice.addEventListener(
        "click",
        () => {

            openLetterPage();

        }
    );

}


/* =====================================================
   SONG
===================================================== */

const songChoice =
    document.getElementById("songChoice");


if (songChoice) {

    songChoice.addEventListener(
        "click",
        () => {

            openSongPage();

        }
    );

}


/* =====================================================
   ALL GO BACK BUTTONS
===================================================== */

const backButtons =
    document.querySelectorAll(".back-button");


backButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const destination =
                button.dataset.page;


            if (destination) {

                showPage(destination);

            }

        }
    );

});
