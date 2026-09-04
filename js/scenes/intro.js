const INTRO_VIDEO_PATH =
    "./assets/video/intro.mp4";


export function createIntroScene({
    game
}) {

    return {

        async mount(root) {

            const screen =
                document.createElement("div");


            screen.className =
                "screen";


            screen.innerHTML = `

                <video
                    class="intro-video"
                    id="introVideo"
                    playsinline
                ></video>


                <button
                    class="skip-btn"
                    id="skipIntroBtn"
                >
                    Пропустить
                </button>

            `;


            root.appendChild(
                screen
            );


            const video =
                screen.querySelector(
                    "#introVideo"
                );


            const skipBtn =
                screen.querySelector(
                    "#skipIntroBtn"
                );


            let alreadyFinished =
                false;


            function goNext() {

                if (
                    alreadyFinished
                ) {

                    return;

                }


                alreadyFinished =
                    true;


                video.pause();


                game.showScene(
                    "starTheft"
                );

            }


            video.src =
                INTRO_VIDEO_PATH;


            video.controls =
                false;


            video.addEventListener(
                "ended",
                goNext,
                {
                    once: true
                }
            );


            skipBtn.addEventListener(
                "click",
                goNext
            );


            try {

                await video.play();

            } catch (
                error
            ) {

                console.warn(
                    "Intro video could not start:",
                    error
                );

            }

        }

    };

}