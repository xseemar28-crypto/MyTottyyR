/* =====================================================
   ERROR POPUP
===================================================== */

const errorOverlay =
    document.getElementById("errorOverlay");


function showErrorPopup() {

    if (!errorOverlay) {
        return;
    }

    errorOverlay.classList.add("show");

}


function hideErrorPopup() {

    if (!errorOverlay) {
        return;
    }

    errorOverlay.classList.remove("show");

}


/* =====================================================
   NUMBER ANIMATION
===================================================== */

const numberButtonsForAnimation =
    document.querySelectorAll(".number-button");


numberButtonsForAnimation.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.remove(
            "number-click-animation"
        );


        void button.offsetWidth;


        button.classList.add(
            "number-click-animation"
        );

    });

});


/* =====================================================
   SONG
===================================================== */

const songArea =
    document.getElementById("songArea");

const birthdaySong =
    document.getElementById("birthdaySong");

const songMainImage =
    document.querySelector(".song-main-image");

const songStatus =
    document.getElementById("songStatus");


if (songArea && birthdaySong) {

    songArea.addEventListener(
        "dblclick",
        () => {

            if (birthdaySong.paused) {

                birthdaySong
                    .play()
                    .then(() => {

                        if (songMainImage) {

                            songMainImage.classList.add(
                                "playing"
                            );

                        }


                        if (songStatus) {

                            songStatus.textContent =
                                "Playing...";

                        }

                    })
                    .catch(() => {

                        if (songStatus) {

                            songStatus.textContent =
                                "Could not play the song";

                        }

                    });

            } else {

                birthdaySong.pause();


                if (songMainImage) {

                    songMainImage.classList.remove(
                        "playing"
                    );

                }


                if (songStatus) {

                    songStatus.textContent =
                        "Double click to play";

                }

            }

        }
    );


    birthdaySong.addEventListener(
        "ended",
        () => {

            if (songMainImage) {

                songMainImage.classList.remove(
                    "playing"
                );

            }


            if (songStatus) {

                songStatus.textContent =
                    "Double click to play";

            }

        }
    );

}
