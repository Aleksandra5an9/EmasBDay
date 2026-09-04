/* =========================================================
   SCENE 01B — HOSHI STEALS THE STARS
   intro.mp4 заканчивается на Хоши у торта со звёздами.
   Эта сцена продолжает момент:
   Хоши замечает звёзды → крадёт → убегает → начинается погоня
   → одна звезда разбивает картинку → переход в пазл.
========================================================= */


/* =========================
   IMAGES
========================= */

const IMG = {

    // Фоны
    hq:
        "./assets/images/hq_birthday_bg_clean.png",

    foregroundTable:
         "./assets/images/foreground_table_gift.png",

    corridor:
        "./assets/images/magic_corridor_bg.png",


    // RUMI
    rumiNeutral:
        "./assets/images/rumi_neutral.png",

    rumiSurprised:
        "./assets/images/rumi_surprised.png",

    rumiAnnoyed:
        "./assets/images/rumi_annoyed.png",

    rumiRunning:
        "./assets/images/rumi_running.png",

    rumiReaching:
        "./assets/images/rumi_reaching.png",


    // MIRA
    miraNeutral:
        "./assets/images/mira_neutral.png",

    miraAnnoyed:
        "./assets/images/mira_annoyed.png",

    miraSurprised:
        "./assets/images/mira_surprised.png",

    miraRunning:
        "./assets/images/mira_running.png",


    // ZOEY
    zoeyNeutral:
        "./assets/images/zoey_neutral.png",

    zoeySurprised:
        "./assets/images/zoey_surprised.png",

    zoeyRunning:
        "./assets/images/zoey_running.png",

    zoeyExcited:
        "./assets/images/zoey_excited.png",


    // HOSHI
    hoshiCurious:
        "./assets/images/hoshi_curious.png",

    hoshiWonder:
        "./assets/images/hoshi_wonder.png",

    hoshiTouchMark:
        "./assets/images/hoshi_touch_mark.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiReaching:
        "./assets/images/hoshi_reaching.png",

    hoshiCarry:
        "./assets/images/hoshi_carry_pose.png",

    hoshiRunningCarry:
        "./assets/images/hoshi_running_carry.png",


    // Звезда
    star:
        "./assets/images/star_idle.png"
};


/* =========================
   VOICES
========================= */

const VOICE = {

    hoshiCurious:
        "./assets/audio/hoshi_curious.mp3",

    hoshiWonder:
        "./assets/audio/hoshi_wonder.mp3",

    rumiPutItDown:
        "./assets/audio/s01_rumi_02_put_it_down.mp3",

    miraDontThink:
        "./assets/audio/s01_mira_02_dont_even_think.mp3",

    zoeyHeWillRun:
        "./assets/audio/s01_zoey_03_he_will_run.mp3",

    rumiHeWont:
        "./assets/audio/s01_rumi_03_he_wont_run.mp3",

    hoshiGiggle:
        "./assets/audio/hoshi_giggle_short.mp3",

    rumiHeRan:
        "./assets/audio/s01_rumi_04_he_ran.mp3"
};


/* =========================
   SFX
========================= */

const SFX = {

    magic:
        "./assets/audio/magic_burst.mp3",

    starMove:
        "./assets/audio/star_appear.mp3",

    impact:
        "./assets/audio/picture_break.mp3",

    chaseBgm:
        "./assets/audio/chase_bgm.mp3"

};


/* =========================================================
   CREATE SCENE
========================================================= */

export function createStarTheftScene({
    game,
    audio
}) {

    return {

        async mount(root) {

            /* =========================
               SCREEN
            ========================= */

            const screen =
                document.createElement("div");

            screen.className =
                "star-theft-scene";


            screen.innerHTML = `

                <div
                    class="theft-background"
                    id="theftBackground"
                ></div>


                <!-- =========================
                     MAGIC STARS
                ========================== -->

                <div
                    class="theft-stars"
                    id="theftStars"
                ></div>


                <!-- =========================
                     CHARACTERS
                ========================== -->

                <img
                    class="
                        theft-character
                        theft-rumi
                    "
                    id="theftRumi"
                    src="${IMG.rumiNeutral}"
                    alt=""
                >


                <img
                    class="
                        theft-character
                        theft-mira
                    "
                    id="theftMira"
                    src="${IMG.miraNeutral}"
                    alt=""
                >


                <img
                    class="
                        theft-character
                        theft-zoey
                    "
                    id="theftZoey"
                    src="${IMG.zoeyNeutral}"
                    alt=""
                >


                <img
                    class="
                        theft-character
                        theft-hoshi
                    "
                    id="theftHoshi"
                    src="${IMG.hoshiCurious}"
                    alt=""
                >

                <img
                    class="theft-foreground-table"
                    id="theftForegroundTable"
                    src="${IMG.foregroundTable}"
                    alt=""
                >


                <!-- =========================
                     SUBTITLES
                ========================== -->

                <div
                    class="theft-dialogue"
                    id="theftDialogue"
                ></div>


        


                <!-- =========================
                     FLASH
                ========================== -->

                <div
                    class="theft-flash"
                    id="theftFlash"
                ></div>

            `;


            root.appendChild(screen);


            /* =========================
               ELEMENTS
            ========================= */

            const background =
                screen.querySelector(
                    "#theftBackground"
                );


            const starsContainer =
                screen.querySelector(
                    "#theftStars"
                );


            const rumi =
                screen.querySelector(
                    "#theftRumi"
                );


            const mira =
                screen.querySelector(
                    "#theftMira"
                );


            const zoey =
                screen.querySelector(
                    "#theftZoey"
                );


            const hoshi =
                screen.querySelector(
                    "#theftHoshi"
                );


            const dialogue =
                screen.querySelector(
                    "#theftDialogue"
                );


            const foregroundTable =
                screen.querySelector(
                    "#theftForegroundTable"
                );


            const flash =
                screen.querySelector(
                    "#theftFlash"
                );
            
            let chaseAudio = null; // для звука погони

            /* =========================
               BACKGROUND
            ========================= */

            background.style.backgroundImage =
                `url("${IMG.hq}")`;


            /* =========================
               CREATE 7 STARS
            ========================= */

            const stars = [];


            const STAR_POSITIONS = [

                { x: -160, y: 190 },

                { x: -120, y: 175 },

                { x: -70, y: 160 },

                { x: 35, y: 160 },

                { x: 85, y: 175 },

                { x: 140, y: 190 },

                { x: -25, y: 150 }

            ];


            for (
                let i = 0;
                i < 7;
                i++
            ) {

                const star =
                    document.createElement(
                        "img"
                    );


                star.src =
                    IMG.star;


                star.className =
                    "theft-star";


                star.style.setProperty(
                    "--star-x",
                    `${STAR_POSITIONS[i].x}px`
                );


                star.style.setProperty(
                    "--star-y",
                    `${STAR_POSITIONS[i].y}px`
                );


                star.style.animationDelay =
                    `${i * 0.08}s`;


                starsContainer.appendChild(
                    star
                );


                stars.push(star);

            }


            /* =========================
               HELPERS
            ========================= */

            function wait(ms) {

                return new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            ms
                        )
                );

            }


            async function say(
                character,
                text,
                path,
                volume = 0.82
            ) {

                dialogue.textContent =
                    text;

                dialogue.classList.add(
                    "show"
                );


                /*
                    Если указан персонаж —
                    включаем анимацию речи.
                */

                if (character) {

                    character.classList.add(
                        "character-speaking"
                    );

                }


                if (path) {

                    await audio.playVoice(
                        path
                    );

                } else {

                    await wait(1000);

                }


                /*
                    Реплика закончилась —
                    персонаж перестаёт двигаться.
                */

                if (character) {

                    character.classList.remove(
                        "character-speaking"
                    );

                }


                await wait(100);
            }


            function hideDialogue() {

                dialogue.classList.remove(
                    "show"
                );


                dialogue.textContent =
                    "";

            }


            function setCharacter(
                element,
                src
            ) {

                element.src =
                    src;

            }


            async function flashScreen(
                duration = 200
            ) {

                flash.classList.add(
                    "active"
                );


                await wait(
                    duration
                );


                flash.classList.remove(
                    "active"
                );

            }


            /* =====================================================
               SCENE
            ===================================================== */


            /* =========================
               0 — MATCH END OF VIDEO
            ========================= */

            await wait(500);


            /*
                Хоши уже находится около торта.
                Звёзды медленно летают возле него.
            */

            starsContainer.classList.add(
                "visible"
            );


            hoshi.classList.add(
                "visible"
            );


            rumi.classList.add(
                "visible"
            );


            mira.classList.add(
                "visible"
            );


            zoey.classList.add(
                "visible"
            );


            await wait(800);



            /* =========================
               1 — HOSHI NOTICES STARS
            ========================= */

            setCharacter(
                hoshi,
                IMG.hoshiCurious
            );


            hoshi.classList.add(
                "hoshi-look-up"
            );


            await say(
                hoshi,
                "Мм?",
                VOICE.hoshiCurious
            );


            await wait(350);



            /* =========================
               2 — FOREHEAD STAR
            ========================= */

            setCharacter(
                hoshi,
                IMG.hoshiTouchMark
            );


            hoshi.classList.remove(
                "hoshi-look-up"
            );


            await say(
                hoshi,
                "О-о…",
                VOICE.hoshiWonder
            );


            await wait(500);



            /* =========================
               3 — MISCHIEF
            ========================= */

            setCharacter(
                hoshi,
                IMG.hoshiMischief
            );


            hoshi.classList.add(
                "hoshi-mischief-bounce"
            );


            await wait(650);



            /* =========================
               4 — REACH FOR STARS
            ========================= */

            setCharacter(
                hoshi,
                IMG.hoshiReaching
            );


            hoshi.classList.remove(
                "hoshi-mischief-bounce"
            );


            hoshi.classList.add(
                "hoshi-reaching"
            );


            await wait(450);



            /* =========================
               5 — RUMI
            ========================= */

            setCharacter(
                rumi,
                IMG.rumiAnnoyed
            );


            rumi.classList.add(
                "character-alert"
            );


            await say(
                rumi,
                "Положи.",
                VOICE.rumiPutItDown
            );


            await wait(120);



            /* =========================
               6 — MIRA
            ========================= */

            setCharacter(
                mira,
                IMG.miraAnnoyed
            );


            await say(
                mira,
                "Даже не думай.",
                VOICE.miraDontThink
            );


            await wait(150);



            /* =========================
               7 — ZOEY
            ========================= */

            setCharacter(
                zoey,
                IMG.zoeySurprised
            );


            await say(
                zoey,
                "Он сейчас побежит.",
                VOICE.zoeyHeWillRun
            );


            await wait(120);



            /* =========================
               8 — RUMI
            ========================= */

            setCharacter(
                rumi,
                IMG.rumiNeutral
            );


            await say(
                rumi,
                "Не побежит.",
                VOICE.rumiHeWont
            );


            hideDialogue();


            await wait(350);



            /* =========================
               9 — HOSHI STEALS STARS
            ========================= */

            setCharacter(
                hoshi,
                IMG.hoshiCarry
            );


            hoshi.classList.remove(
                "hoshi-reaching"
            );


            starsContainer.classList.add(
                "stolen"
            );


            audio.playSfx(
                SFX.magic,
                0.8
            );


            await flashScreen(
                130
            );


            await wait(250);


            await say(
                hoshi,
                "Хе-хе!",
                VOICE.hoshiGiggle
            );


            hideDialogue();


            // 10 — RUN! (с бегущей картинкой и удалением звёзд)
            // Удаляем контейнер со звёздами (они больше не нужны)
            if (starsContainer && starsContainer.parentNode) {
                starsContainer.remove();
            }

            // Меняем картинку Хоши на бегущего с собранными звёздами
            setCharacter(hoshi, IMG.hoshiRunningCarry);

            // Запускаем анимацию побега (убегает вправо)
            hoshi.classList.add("hoshi-run-away");

            await wait(170);

            // Реакция девушек
            setCharacter(rumi, IMG.rumiSurprised);
            setCharacter(mira, IMG.miraSurprised);
            setCharacter(zoey, IMG.zoeySurprised);

            await say(rumi, "Побежал!", VOICE.rumiHeRan);
            hideDialogue();
            await wait(350);
           



            /* =====================================================
            CHASE TRANSITION
            ===================================================== */

            /*
                Стол нужен только в сцене у подарка.
                Перед переходом в коридор полностью удаляем его.
            */

            if (foregroundTable) {
                foregroundTable.remove();
            }


            /*
                Убираем старые программные 7 звёзд.
                В hoshi_running_carry.png звёзды уже находятся
                непосредственно в руках Хоши.
            */

           /* Удаляем стол (он больше не нужен) */
            if (foregroundTable) {
                foregroundTable.remove();
            }

            /* Удаляем звёзды, если они ещё есть (на случай, если не были удалены ранее) */
            if (starsContainer && starsContainer.parentNode) {
                starsContainer.remove();
            }


            /*
                Небольшое затемнение перед сменой пространства.
            */

            screen.classList.add(
                "start-chase"
            );

            await wait(50);


            /* =========================
            CHANGE BACKGROUND
            ========================= */

            background.style.backgroundImage =
                `url("${IMG.corridor}")`;

            background.classList.add(
                "corridor"
            );


            /* =========================
            RUNNING CHARACTERS
            ========================= */

            setCharacter(
                hoshi,
                IMG.hoshiRunningCarry
            );

            setCharacter(
                rumi,
                IMG.rumiRunning
            );

            setCharacter(
                mira,
                IMG.miraRunning
            );

            setCharacter(
                zoey,
                IMG.zoeyRunning
            );


            /*
                Полностью заменяем старые классы.
                Теперь применяются настройки сцены погони.
            */

            hoshi.className =
                "theft-character chase-hoshi";

            rumi.className =
                "theft-character chase-rumi";

            mira.className =
                "theft-character chase-mira";

            zoey.className =
                "theft-character chase-zoey";


            /*
                Даём браузеру один кадр,
                чтобы начальные позиции применились.
            */

            await wait(100);


            /* =====================================================
            START CHASE
            ===================================================== */

            /*
                Этот класс запускает движение всех персонажей вправо
                и лёгкое движение коридора в противоположную сторону.
            */

            screen.classList.add("chase-moving");

            // --- ЗАПУСКАЕМ ЗВУК ПОГОНИ (loop) ---
            chaseAudio = new Audio(SFX.chaseBgm);
            chaseAudio.volume = 0.7;
            chaseAudio.loop = true;
            await chaseAudio.play().catch(e => console.warn('Audio play blocked:', e));

            /*
                Погоня длится несколько секунд ДО выпадения звезды.
                Вот здесь меняется её продолжительность.
                3200 = 3.2 секунды.
            */
            await wait(3200);


            /* =====================================================
            ONE STAR FALLS OUT OF HOSHI'S ARMS
            ===================================================== */

            const fallingStar =
                document.createElement("img");

            fallingStar.src =
                IMG.star;

            fallingStar.alt =
                "";

            fallingStar.className =
                "chase-falling-star";

            screen.appendChild(
                fallingStar
            );


            /*
                Через один кадр запускаем анимацию,
                чтобы браузер увидел стартовую позицию.
            */

            requestAnimationFrame(
                () => {

                    fallingStar.classList.add(
                        "fly-out"
                    );

                }
            );


            audio.playSfx(
                SFX.starMove,
                0.75
            );


            /*
                Звезда пролетает через экран.
            */

            await wait(1000);


            /* =====================================================
            STAR HITS SOMETHING OFF SCREEN
            ===================================================== */

            await wait(120);

            // Останавливаем звук погони
            if (chaseAudio) {
                chaseAudio.pause();
                chaseAudio.currentTime = 0;
                chaseAudio = null;
            }

            const pictureBreakSound =
                new Audio(
                    "./assets/audio/picture_break.mp3"
                );

            pictureBreakSound.volume = 1;
            pictureBreakSound.preload = "auto";
            await pictureBreakSound.play();

            await wait(70);

            await flashScreen(
                220
            );

            fallingStar.remove();

            /*
                Даём звуку разбития прозвучать,
                прежде чем уйти в пазл.
            */

            await wait(700);


            /* =====================================================
            GO TO PUZZLE
            ===================================================== */

            screen.classList.add(
                "fade-out"
            );

            await wait(450);

            game.showScene(
                "puzzle"
            );

        }

    };

}