import {
    createStarHud,
    updateStarHud
} from "../star-hud.js";


/* =========================================================
   SCENE 06 — THREE MAGICAL SEALS

   1. Хоши прибегает к закрытой двери
   2. Получает разряд
   3. Застревает рогами
   4. Роняет звезду №5 за дверь
   5. Эма открывает три печати
   6. Забирает звезду
   7. Хоши обнаруживается наверху 😂
========================================================= */


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    /* =========================
       BACKGROUND
    ========================= */

    background:
        "./assets/images/magic_door_bg.png",

    doorOpen:
        "./assets/images/magic_door_open.png",


    /* =========================
       SEALS
    ========================= */

    sealClosed:
        "./assets/images/magic_seal_closed.png",

    sealOpen:
        "./assets/images/magic_seal_open.png",


    /* =========================
       GAME ICONS
    ========================= */

    cat:
        "./assets/images/icon_cat.png",

    moon:
        "./assets/images/icon_moon.png",

    sun:
        "./assets/images/icon_sun.png",

    heart:
        "./assets/images/icon_heart.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       HOSHI — MOTION
    ========================= */

    hoshiRunning:
        "./assets/images/hoshi_running_carry.png",

    hoshiZapped:
        "./assets/images/hoshi_zapped.png",

    hoshiStuck:
        "./assets/images/hoshi_stuck_horns.png",

    hoshiScared:
        "./assets/images/hoshi_scared.png",

    hoshiJump:
        "./assets/images/hoshi_jump.png",


    /* =========================
       HOSHI — ENDING
    ========================= */

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiShocked:
        "./assets/images/hoshi_shocked.png",

    hoshiHiding:
        "./assets/images/hoshi_hiding.png",


    /* =========================
       HUNTR/X
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    mira:
        "./assets/images/mira_neutral.png",

    miraAnnoyed:
        "./assets/images/mira_annoyed.png",

    zoey:
        "./assets/images/zoey_neutral.png",

    zoeyExcited:
        "./assets/images/zoey_excited.png"

};


/* =========================================================
   VOICES
========================================================= */

const VOICE = {

    /* =========================
       MOTION INTRO
    ========================= */

    miraPlan:
        "./assets/audio/s06_mira_01_plan.mp3",

    rumiHoshi:
        "./assets/audio/s06_rumi_01_hoshi.mp3",

    miraNothing:
        "./assets/audio/s06_mira_02_do_nothing.mp3",


    /* =========================
       BEFORE PUZZLES
    ========================= */

    rumiStarThere:
        "./assets/audio/s06_rumi_02_star_there.mp3",

    rumiOpen:
        "./assets/audio/s06_rumi_03_open_it.mp3",

    zoeyThree:
        "./assets/audio/s06_zoey_01_three_riddles.mp3",

    miraTooHappy:
        "./assets/audio/s06_mira_03_too_happy.mp3",

    zoeyLikes:
        "./assets/audio/s06_zoey_02_like_riddles.mp3",


    /* =========================
       SEAL 1
    ========================= */

    rumiNumbers:
        "./assets/audio/s06_rumi_04_numbers.mp3",

    rumiSequence:
        "./assets/audio/s06_rumi_05_two_four_six.mp3",

    zoeyNext:
        "./assets/audio/s06_zoey_03_what_next.mp3",

    rumiTryAgain:
        "./assets/audio/s06_rumi_06_try_again.mp3",

    miraEight:
        "./assets/audio/s06_mira_04_eight.mp3",

    zoeyOne:
        "./assets/audio/s06_zoey_04_one_done.mp3",


    /* =========================
       SEAL 2
    ========================= */

    rumiWord:
        "./assets/audio/s06_rumi_07_word.mp3",

    zoeyCat:
        "./assets/audio/s06_zoey_05_cat.mp3",

    miraLetter:
        "./assets/audio/s06_mira_05_last_letter.mp3",

    rumiT:
        "./assets/audio/s06_rumi_08_t.mp3",

    zoeyTwo:
        "./assets/audio/s06_zoey_06_two.mp3",


    /* =========================
       SEAL 3
    ========================= */

    rumiPattern:
        "./assets/audio/s06_rumi_09_pattern.mp3",

    zoeyPattern:
        "./assets/audio/s06_zoey_07_star_moon.mp3",

    miraNext:
        "./assets/audio/s06_mira_06_what_next.mp3",

    zoeyMoon:
        "./assets/audio/s06_zoey_08_moon.mp3",

    rumiAllThree:
        "./assets/audio/s06_rumi_10_all_three.mp3",


    /* =========================
       STAR 5
    ========================= */

    zoeyEma:
        "./assets/audio/s06_zoey_09_ema.mp3",

    rumiFive:
        "./assets/audio/s06_rumi_11_five.mp3",

    miraTwoLeft:
        "./assets/audio/s06_mira_07_two_left.mp3",


    /* =========================
       HOSHI ENDING
    ========================= */

    zoeyAllTime:
        "./assets/audio/s06_zoey_10_all_this_time.mp3",

    miraComeDown:
        "./assets/audio/s06_mira_08_come_down.mp3",

    miraNowRunning:
        "./assets/audio/s06_mira_09_now_running.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    surprised:
        "./assets/audio/hoshi_surprised.mp3",

    scared:
        "./assets/audio/hoshi_scared.mp3",

    grumble:
        "./assets/audio/hoshi_grumble.mp3",

    suspicious:
        "./assets/audio/hoshi_suspicious.mp3",

    giggle:
        "./assets/audio/hoshi_giggle_short.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    zap:
        "./assets/audio/magic_zap.mp3",

    wrong:
        "./assets/audio/magic_burst.mp3",

    sealOpen:
        "./assets/audio/star_appear.mp3",

    doorOpen:
        "./assets/audio/magic_burst.mp3",

    collect:
        "./assets/audio/star_collect.mp3",

    sparkle:
        "./assets/audio/star_appear.mp3",

    sealsBgm: "./assets/audio/seals_bgm.mp3"

};


/* =========================================================
   VOICE VOLUMES
========================================================= */

const VOLUME = {

    rumi:
        0.82,

    mira:
        1,

    zoey:
        0.82

};


/* =========================================================
   SEALS DATA
========================================================= */

const SEALS = [

    /* =====================================================
       SEAL 1

       2 4 6 ?
       7 / 8 / 9
    ===================================================== */

    {
        id:
            "numbers",

        type:
            "numbers",

        sequence: [
            "2",
            "4",
            "6",
            "?"
        ],

        options: [
            {
                value:
                    "7",

                correct:
                    false
            },

            {
                value:
                    "8",

                correct:
                    true
            },

            {
                value:
                    "9",

                correct:
                    false
            }
        ]
    },


    /* =====================================================
       SEAL 2

       🐱
       КО_
       Т / М / С
    ===================================================== */

    {
        id:
            "word",

        type:
            "word",

        image:
            IMG.cat,

        word:
            "КО_",

        options: [
            {
                value:
                    "Т",

                correct:
                    true
            },

            {
                value:
                    "М",

                correct:
                    false
            },

            {
                value:
                    "С",

                correct:
                    false
            }
        ]
    },


    /* =====================================================
       SEAL 3

       ⭐ 🌙 ⭐ 🌙 ⭐ ?
       🌙 / ☀️ / ❤️
    ===================================================== */

    {
        id:
            "pattern",

        type:
            "pattern",

        sequence: [
            {
                type:
                    "star"
            },

            {
                type:
                    "moon"
            },

            {
                type:
                    "star"
            },

            {
                type:
                    "moon"
            },

            {
                type:
                    "star"
            },

            {
                type:
                    "question"
            }
        ],

        options: [
            {
                image:
                    IMG.moon,

                value:
                    "moon",

                correct:
                    true
            },

            {
                image:
                    IMG.sun,

                value:
                    "sun",

                correct:
                    false
            },

            {
                image:
                    IMG.heart,

                value:
                    "heart",

                correct:
                    false
            }
        ]
    }

];


/* =========================================================
   CREATE SCENE
========================================================= */

export function createSealsScene({
    game,
    audio
}) {

    return {

        async mount(root) {

            /* =====================================================
               STATE
            ===================================================== */

            let busy =
                true;


            let gameplayEnabled =
                false;


            let currentSealIndex =
                0;


            let solvedSeals =
                0;


            let starReady =
                false;


            let completed =
                false;

            // ---- Фоновая музыка для сцены печатей ----
            let bgmAudio = null;

            function startSealsBgm() {
                bgmAudio = new Audio(SFX.sealsBgm);
                bgmAudio.loop = true;
                bgmAudio.volume = 0.15;   // можно регулировать
                bgmAudio.play().catch(e => console.warn('BGM play blocked:', e));
            }

            function stopSealsBgm() {
                if (bgmAudio) {
                    bgmAudio.pause();
                    bgmAudio.currentTime = 0;
                    bgmAudio = null;
                }
            }
            // ---- конец фоновой музыки ----


            /* =====================================================
               SCREEN
            ===================================================== */

            const screen =
                document.createElement(
                    "div"
                );


            screen.className =
                "seals-scene";

                        screen.innerHTML = `

                <!-- =============================================
                     BACKGROUND
                ============================================== -->

                <img
                    class="seals-bg"
                    src="${IMG.background}"
                    alt=""
                >


                <!-- =============================================
                     MOTION INTRO
                ============================================== -->

                <div
                    class="seals-motion-layer"
                    id="sealsMotionLayer"
                >

                    <img
                        class="seals-motion-hoshi"
                        id="sealsMotionHoshi"
                        src="${IMG.hoshiRunning}"
                        alt=""
                    >


                    <img
                        class="
                            seals-motion-mira
                            seals-runner
                        "
                        id="sealsMotionMira"
                        src="${IMG.mira}"
                        alt=""
                    >


                    <!-- Три печати на двери -->

                    <div
                        class="seals-door-locks"
                        id="sealsDoorLocks"
                    >

                        <img
                            class="seals-door-lock seals-door-lock-1"
                            src="${IMG.sealClosed}"
                            alt=""
                        >

                        <img
                            class="seals-door-lock seals-door-lock-2"
                            src="${IMG.sealClosed}"
                            alt=""
                        >

                        <img
                            class="seals-door-lock seals-door-lock-3"
                            src="${IMG.sealClosed}"
                            alt=""
                        >

                    </div>


                    <!-- Звезда, которую Хоши роняет за дверь -->

                    <img
                        class="seals-dropped-star"
                        id="sealsDroppedStar"
                        src="${IMG.star}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     GAMEPLAY LAYER
                ============================================== -->

                <div
                    class="seals-game-layer"
                    id="sealsGameLayer"
                >

                    <!-- Декоративные печати -->

                    <div
                        class="seals-game-locks"
                        id="sealsGameLocks"
                    >

                        <button
                            class="
                                seals-game-lock
                                seals-game-lock-1
                            "
                            type="button"
                            data-lock-index="0"
                            aria-label="Первая печать"
                        >

                            <img
                                src="${IMG.sealClosed}"
                                alt=""
                            >

                        </button>


                        <button
                            class="
                                seals-game-lock
                                seals-game-lock-2
                            "
                            type="button"
                            data-lock-index="1"
                            aria-label="Вторая печать"
                        >

                            <img
                                src="${IMG.sealClosed}"
                                alt=""
                            >

                        </button>


                        <button
                            class="
                                seals-game-lock
                                seals-game-lock-3
                            "
                            type="button"
                            data-lock-index="2"
                            aria-label="Третья печать"
                        >

                            <img
                                src="${IMG.sealClosed}"
                                alt=""
                            >

                        </button>

                    </div>


                    <!-- =========================================
                         PUZZLE PANEL
                    ========================================== -->

                    <div
                        class="seals-puzzle-panel"
                        id="sealsPuzzlePanel"
                    >

                        <div
                            class="seals-question"
                            id="sealsQuestion"
                        ></div>


                        <div
                            class="seals-options"
                            id="sealsOptions"
                        ></div>

                    </div>


                    <!-- =========================================
                        DOOR OPEN EFFECT (CSS) - можно оставить или заменить
                    ========================================== -->

                    <div
                        class="seals-door-open-effect"
                        id="sealsDoorOpenEffect"
                    ></div>

                    <!-- =========================================
                        DOOR OPEN IMAGE (новая картинка)
                    ========================================== -->

                    <img
                        class="seals-door-open-image"
                        id="sealsDoorOpenImage"
                        src="${IMG.doorOpen}"
                        alt=""
                    >


                    <!-- =========================================
                         STAR 5
                    ========================================== -->

                    <button
                        class="seals-fifth-star"
                        id="sealsFifthStar"
                        type="button"
                        aria-label="Забрать пятую звезду"
                    >

                        <img
                            src="${IMG.star}"
                            alt=""
                        >

                    </button>


                    <!-- =========================================
                         HOSHI ON BEAM
                    ========================================== -->

                    <div
                        class="seals-hoshi-ending"
                        id="sealsHoshiEnding"
                    >

                        <img
                            class="seals-ending-hoshi"
                            id="sealsEndingHoshi"
                            src="${IMG.hoshiMischief}"
                            alt=""
                        >


                        <div
                            class="seals-ending-stars"
                            id="sealsEndingStars"
                        >

                            <img
                                src="${IMG.star}"
                                alt=""
                            >

                            <img
                                src="${IMG.star}"
                                alt=""
                            >

                        </div>

                    </div>

                </div>


                <!-- =============================================
                     TOP UI
                ============================================== -->

                <div
                    class="seals-topbar"
                    id="sealsTopbar"
                >

                    <div
                        class="seals-subtitle"
                        id="sealsSubtitle"
                    ></div>


                    <div
                        class="seals-star-hud-mount"
                        id="sealsStarHudMount"
                    ></div>

                </div>


                <!-- =============================================
                     SPEAKERS
                ============================================== -->

                <img
                    class="
                        seals-speaker
                        seals-speaker-rumi
                        seals-speaker-right
                    "
                    id="sealsRumi"
                    src="${IMG.rumi}"
                    alt=""
                >


                <img
                    class="
                        seals-speaker
                        seals-speaker-mira
                        seals-speaker-right
                    "
                    id="sealsMira"
                    src="${IMG.mira}"
                    alt=""
                >


                <img
                    class="
                        seals-speaker
                        seals-speaker-zoey
                        seals-speaker-right
                    "
                    id="sealsZoey"
                    src="${IMG.zoey}"
                    alt=""
                >

            `;


            root.appendChild(
                screen
            );
            startSealsBgm();


            /* =====================================================
               ELEMENTS
            ===================================================== */

            const motionLayer =
                screen.querySelector(
                    "#sealsMotionLayer"
                );


            const motionHoshi =
                screen.querySelector(
                    "#sealsMotionHoshi"
                );


            const motionMira =
                screen.querySelector(
                    "#sealsMotionMira"
                );


            const motionDoorLocks = [

                ...screen.querySelectorAll(
                    "#sealsDoorLocks .seals-door-lock"
                )

            ];

            


            const droppedStar =
                screen.querySelector(
                    "#sealsDroppedStar"
                );


            const gameLayer =
                screen.querySelector(
                    "#sealsGameLayer"
                );


            const gameLocks = [

                ...screen.querySelectorAll(
                    "#sealsGameLocks .seals-game-lock"
                )

            ];


            const puzzlePanel =
                screen.querySelector(
                    "#sealsPuzzlePanel"
                );


            const question =
                screen.querySelector(
                    "#sealsQuestion"
                );


            const options =
                screen.querySelector(
                    "#sealsOptions"
                );


            const doorOpenEffect =
                screen.querySelector(
                    "#sealsDoorOpenEffect"
                );

            const doorOpenImage =
                screen.querySelector(
                    "#sealsDoorOpenImage"
                );


            const fifthStar =
                screen.querySelector(
                    "#sealsFifthStar"
                );


            const hoshiEnding =
                screen.querySelector(
                    "#sealsHoshiEnding"
                );


            const endingHoshi =
                screen.querySelector(
                    "#sealsEndingHoshi"
                );


            const topbar =
                screen.querySelector(
                    "#sealsTopbar"
                );


            const subtitle =
                screen.querySelector(
                    "#sealsSubtitle"
                );


            const rumi =
                screen.querySelector(
                    "#sealsRumi"
                );


            const mira =
                screen.querySelector(
                    "#sealsMira"
                );


            const zoey =
                screen.querySelector(
                    "#sealsZoey"
                );


            const speakers = {

                rumi,
                mira,
                zoey

            };


            /* =====================================================
               STAR HUD
            ===================================================== */

            const starHudMount =
                screen.querySelector(
                    "#sealsStarHudMount"
                );


            const starHud =
                createStarHud(
                    4
                );


            starHudMount.appendChild(
                starHud
            );


            /* =====================================================
               HELPERS
            ===================================================== */

            function wait(ms) {

                return new Promise(
                    resolve =>
                        setTimeout(
                            resolve,
                            ms
                        )
                );

            }


            function setSubtitle(
                text
            ) {

                subtitle.textContent =
                    text || "";

            }


            function hideSpeakers() {

                Object.values(
                    speakers
                ).forEach(
                    character => {

                        character.classList.remove(
                            "show"
                        );


                        character.classList.remove(
                            "character-speaking"
                        );

                    }
                );

            }


            function setSpeakerPose(
                characterName,
                image
            ) {

                const character =
                    speakers[
                        characterName
                    ];


                if (!character) {

                    return;

                }


                character.src =
                    image;

            }


            async function speak(
                characterName,
                text,
                path
            ) {

                hideSpeakers();


                setSubtitle(
                    text
                );


                const character =
                    speakers[
                        characterName
                    ];


                if (!character) {

                    if (path) {

                        await audio.playVoice(
                            path
                        );

                    } else {

                        await wait(
                            900
                        );

                    }


                    return;

                }


                character.classList.add(
                    "show"
                );


                await wait(
                    180
                );


                character.classList.add(
                    "character-speaking"
                );


                const volume =
                    VOLUME[
                        characterName
                    ] ?? 0.82;


                if (path) {

                    await audio.playVoice(
                        path,
                        volume
                    );

                } else {

                    await wait(
                        900
                    );

                }


                character.classList.remove(
                    "character-speaking"
                );


                await wait(
                    80
                );


                character.classList.remove(
                    "show"
                );


                await wait(
                    100
                );

            }


            function setMotionHoshiPose(
                path
            ) {

                motionHoshi.src =
                    path;

            }


            function setEndingHoshiPose(
                path
            ) {

                endingHoshi.src =
                    path;

            }


            async function moveElement(
                element,
                left,
                top,
                duration,
                easing = "ease"
            ) {

                element.style.transition =
                    `left ${duration}ms ${easing}, ` +
                    `top ${duration}ms ${easing}`;


                requestAnimationFrame(
                    () => {

                        element.style.left =
                            left;

                        element.style.top =
                            top;

                    }
                );


                await wait(
                    duration
                );

            }


            function playHoshiSound(
                path,
                volume = 0.85
            ) {

                audio.playSfx(
                    path,
                    volume
                );

            }


            function clearPuzzle() {

                question.innerHTML =
                    "";


                options.innerHTML =
                    "";

            }

            /* =====================================================
            UPDATE QUESTION WITH CORRECT ANSWER
            ===================================================== */

            function updateQuestionWithAnswer(sealIndex) {
                const seal = SEALS[sealIndex];
                if (!seal) return;

                const correctOption = seal.options.find(opt => opt.correct);
                if (!correctOption) return;

                const correctValue = correctOption.value;

                if (seal.type === "numbers") {
                    // Находим все ячейки с числами
                    const cells = document.querySelectorAll(".seals-number-sequence .seals-sequence-cell");
                    if (cells.length > 0) {
                        const lastCell = cells[cells.length - 1];
                        if (lastCell.textContent === "?") {
                            lastCell.textContent = correctValue;
                        }
                    }
                }
                else if (seal.type === "word") {
                    const wordElem = document.querySelector(".seals-word-text");
                    if (wordElem) {
                        // Заменяем "_" на правильную букву
                        let currentText = wordElem.textContent;
                        if (currentText.includes("_")) {
                            wordElem.textContent = currentText.replace("_", correctValue);
                        }
                    }
                }
                else if (seal.type === "pattern") {
                    const cells = document.querySelectorAll(".seals-pattern-sequence .seals-pattern-cell");
                    if (cells.length > 0) {
                        const lastCell = cells[cells.length - 1];
                        if (lastCell.textContent === "?") {
                            // Для паттерна правильный ответ — это изображение
                            const correctImg = correctOption.image;
                            if (correctImg) {
                                lastCell.innerHTML = `<img src="${correctImg}" alt="">`;
                            }
                        }
                    }
                }
            }

                        /* =====================================================
               RENDER SEAL PUZZLE
            ===================================================== */

            function renderSealPuzzle(
                sealIndex
            ) {

                clearPuzzle();


                const seal =
                    SEALS[
                        sealIndex
                    ];


                if (!seal) {

                    return;

                }


                /* =================================================
                   SEAL 1 — NUMBERS
                ================================================= */

                if (
                    seal.type ===
                    "numbers"
                ) {

                    const sequence =
                        document.createElement(
                            "div"
                        );


                    sequence.className =
                        "seals-number-sequence";


                    seal.sequence.forEach(
                        value => {

                            const cell =
                                document.createElement(
                                    "div"
                                );


                            cell.className =
                                "seals-sequence-cell";


                            cell.textContent =
                                value;


                            sequence.appendChild(
                                cell
                            );

                        }
                    );


                    question.appendChild(
                        sequence
                    );

                }


                /* =================================================
                   SEAL 2 — WORD
                ================================================= */

                if (
                    seal.type ===
                    "word"
                ) {

                    const wordWrap =
                        document.createElement(
                            "div"
                        );


                    wordWrap.className =
                        "seals-word-question";


                    wordWrap.innerHTML = `

                        <img
                            class="seals-word-cat"
                            src="${seal.image}"
                            alt=""
                        >

                        <div
                            class="seals-word-text"
                        >
                            ${seal.word}
                        </div>

                    `;


                    question.appendChild(
                        wordWrap
                    );

                }


                /* =================================================
                   SEAL 3 — PATTERN
                ================================================= */

                if (
                    seal.type ===
                    "pattern"
                ) {

                    const pattern =
                        document.createElement(
                            "div"
                        );


                    pattern.className =
                        "seals-pattern-sequence";


                    seal.sequence.forEach(
                        item => {

                            const cell =
                                document.createElement(
                                    "div"
                                );


                            cell.className =
                                "seals-pattern-cell";


                            if (
                                item.type ===
                                "star"
                            ) {

                                cell.innerHTML = `

                                    <img
                                        src="${IMG.star}"
                                        alt=""
                                    >

                                `;

                            }


                            if (
                                item.type ===
                                "moon"
                            ) {

                                cell.innerHTML = `

                                    <img
                                        src="${IMG.moon}"
                                        alt=""
                                    >

                                `;

                            }


                            if (
                                item.type ===
                                "question"
                            ) {

                                cell.textContent =
                                    "?";

                            }


                            pattern.appendChild(
                                cell
                            );

                        }
                    );


                    question.appendChild(
                        pattern
                    );

                }


                /* =================================================
                   OPTIONS
                ================================================= */

                seal.options.forEach(
                    (
                        option,
                        optionIndex
                    ) => {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "seals-option-btn";


                        button.dataset.optionIndex =
                            optionIndex;


                        button.dataset.correct =
                            option.correct
                                ? "true"
                                : "false";


                        if (
                            option.image
                        ) {

                            button.innerHTML = `

                                <img
                                    src="${option.image}"
                                    alt=""
                                >

                            `;

                        } else {

                            button.textContent =
                                option.value;

                        }


                        button.addEventListener(
                            "click",
                            async () => {

                                if (
                                    busy ||
                                    !gameplayEnabled ||
                                    completed
                                ) {

                                    return;

                                }


                                if (
                                    option.correct
                                ) {

                                    await handleCorrectAnswer(
                                        button,
                                        sealIndex
                                    );

                                } else {

                                    await handleWrongAnswer(
                                        button
                                    );

                                }

                            }
                        );


                        options.appendChild(
                            button
                        );

                    }
                );


                puzzlePanel.classList.add(
                    "show"
                );

            }


            /* =====================================================
               WRONG ANSWER
            ===================================================== */

            async function handleWrongAnswer(
                button
            ) {

                busy =
                    true;


                button.classList.remove(
                    "wrong"
                );


                void button.offsetWidth;


                button.classList.add(
                    "wrong"
                );


                audio.playSfx(
                    SFX.wrong,
                    0.35
                );


                await wait(
                    300
                );


                await speak(
                    "rumi",
                    "Попробуем ещё.",
                    VOICE.rumiTryAgain
                );


                button.classList.remove(
                    "wrong"
                );


                busy =
                    false;

            }


            /* =====================================================
               CORRECT ANSWER
            ===================================================== */

            async function handleCorrectAnswer(
                button,
                sealIndex
            ) {

                busy =
                    true;

                updateQuestionWithAnswer(sealIndex);

                button.classList.add(
                    "correct"
                );


                audio.playSfx(
                    SFX.sealOpen,
                    0.75
                );


                await wait(
                    350
                );


                /* =================================================
                   OPEN CURRENT LOCK
                ================================================= */

                const lock =
                    gameLocks[
                        sealIndex
                    ];


                if (
                    lock
                ) {

                    const image =
                        lock.querySelector(
                            "img"
                        );


                    if (
                        image
                    ) {

                        image.src =
                            IMG.sealOpen;

                    }


                    lock.classList.add(
                        "opened"
                    );

                }


                solvedSeals +=
                    1;


                /* =================================================
                   SEAL-SPECIFIC RESPONSE
                ================================================= */

                if (
                    sealIndex ===
                    0
                ) {

                    await speak(
                        "mira",
                        "Восемь.",
                        VOICE.miraEight
                    );


                    await speak(
                        "zoey",
                        "Одна готова!",
                        VOICE.zoeyOne
                    );

                }


                if (
                    sealIndex ===
                    1
                ) {

                    await speak(
                        "rumi",
                        "Т.",
                        VOICE.rumiT
                    );


                    await speak(
                        "zoey",
                        "Две!",
                        VOICE.zoeyTwo
                    );

                }


                if (
                    sealIndex ===
                    2
                ) {

                    await speak(
                        "zoey",
                        "Луна!",
                        VOICE.zoeyMoon
                    );


                    await speak(
                        "rumi",
                        "Все три.",
                        VOICE.rumiAllThree
                    );

                }

                

                // Даём время увидеть ответ
                await wait(300);

                /* =================================================
                NEXT PUZZLE
                ================================================= */
                if (solvedSeals < SEALS.length) {
                    currentSealIndex += 1;
                    puzzlePanel.classList.remove("show");
                    await wait(300);
                    renderSealPuzzle(currentSealIndex);
                    await playSealIntro(currentSealIndex);
                    busy = false;
                    return;
                }

            
                /* =================================================
                   ALL THREE SOLVED
                ================================================= */

                gameplayEnabled =
                    false;


                puzzlePanel.classList.remove(
                    "show"
                );


                await wait(
                    350
                );


                await openDoor();

            }


            /* =====================================================
               INTRO FOR EACH SEAL
            ===================================================== */

            async function playSealIntro(
                sealIndex
            ) {

                if (
                    sealIndex ===
                    0
                ) {

                    await speak(
                        "rumi",
                        "Посмотри на числа.",
                        VOICE.rumiNumbers
                    );


                    await speak(
                        "rumi",
                        "Два. Четыре. Шесть...",
                        VOICE.rumiSequence
                    );


                    await speak(
                        "zoey",
                        "Что будет дальше?",
                        VOICE.zoeyNext
                    );


                    return;

                }


                if (
                    sealIndex ===
                    1
                ) {

                    await speak(
                        "rumi",
                        "Теперь слово.",
                        VOICE.rumiWord
                    );


                    await speak(
                        "zoey",
                        "Кот!",
                        VOICE.zoeyCat
                    );


                    await speak(
                        "mira",
                        "Нужна последняя буква.",
                        VOICE.miraLetter
                    );


                    return;

                }


                if (
                    sealIndex ===
                    2
                ) {

                    await speak(
                        "rumi",
                        "Посмотри на порядок.",
                        VOICE.rumiPattern
                    );


                    await speak(
                        "zoey",
                        "Звезда, луна, звезда, луна...",
                        VOICE.zoeyPattern
                    );


                    await speak(
                        "mira",
                        "Что должно быть дальше?",
                        VOICE.miraNext
                    );

                }

            }

                        /* =====================================================
               MOTION INTRO
            ===================================================== */

            async function playMotionIntro() {

                motionLayer.classList.add(
                    "show"
                );


                topbar.classList.add(
                    "show"
                );


                /* =========================
                   НАЧАЛЬНЫЕ ПОЗИЦИИ
                ========================= */

                motionHoshi.style.left =
                    "-15%";

                motionHoshi.style.top =
                    "63%";


                motionMira.style.left =
                    "-20%";

                motionMira.style.top =
                    "64%";


                motionDoorLocks.forEach(
                    lock => {

                        lock.classList.add(
                            "show"
                        );

                    }
                );


                await wait(
                    250
                );


                /* =========================
                   ХОШИ ПРИБЕГАЕТ К ДВЕРИ
                ========================= */

                motionHoshi.classList.add(
                    "show"
                );


                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                await moveElement(
                    motionHoshi,
                    "31%",
                    "63%",
                    1100,
                    "linear"
                );


                /* =========================
                   ДЁРГАЕТСЯ У ДВЕРИ
                ========================= */

                motionHoshi.classList.add(
                    "door-confused"
                );


                playHoshiSound(
                    HOSHI_SOUND.suspicious,
                    0.75
                );


                await wait(
                    550
                );


                /* =========================
                   ТЫКАЕТ В ПЕРВУЮ ПЕЧАТЬ
                ========================= */

                motionHoshi.classList.remove(
                    "door-confused"
                );


                motionHoshi.classList.add(
                    "poke-lock"
                );


                await wait(
                    300
                );


                audio.playSfx(
                    SFX.zap,
                    0.9
                );


                motionDoorLocks[0]
                    .classList
                    .add(
                        "zap"
                    );


                setMotionHoshiPose(
                    IMG.hoshiZapped
                );


                motionHoshi.classList.remove(
                    "poke-lock"
                );


                motionHoshi.classList.add(
                    "zapped"
                );


                await wait(
                    500
                );


                motionDoorLocks[0]
                    .classList
                    .remove(
                        "zap"
                    );


                /* =========================
                   И ОН ПРОБУЕТ СНОВА 😂
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                motionHoshi.classList.remove(
                    "zapped"
                );


                motionHoshi.classList.add(
                    "poke-lock-again"
                );


                await wait(
                    350
                );


                audio.playSfx(
                    SFX.zap,
                    1
                );


                motionDoorLocks[1]
                    .classList
                    .add(
                        "zap"
                    );


                setMotionHoshiPose(
                    IMG.hoshiZapped
                );


                motionHoshi.classList.remove(
                    "poke-lock-again"
                );


                motionHoshi.classList.add(
                    "zapped-hard"
                );


                playHoshiSound(
                    HOSHI_SOUND.grumble,
                    0.75
                );


                await wait(
                    550
                );


                motionDoorLocks[1]
                    .classList
                    .remove(
                        "zap"
                    );


                /* =========================
                   МИРА ПОДХОДИТ СЗАДИ
                ========================= */

                motionMira.classList.add(
                    "show"
                );


                moveElement(
                    motionMira,
                    "7%",
                    "64%",
                    900,
                    "linear"
                );


                await wait(
                    500
                );


                setSpeakerPose("mira", IMG.miraAnnoyed);
                setSubtitle("Продолжай. Мне нравится этот план.");
                motionMira.classList.add("character-speaking");
                await audio.playVoice(VOICE.miraPlan, VOLUME.mira);
                motionMira.classList.remove("character-speaking");
                setSubtitle("");
                motionMira.classList.remove("show");   // <-- добавить эту строку


                /* =========================
                   ХОШИ ОБИЖЕННО СМОТРИТ
                ========================= */

                motionHoshi.classList.remove(
                    "zapped-hard"
                );


                setMotionHoshiPose(
                    IMG.hoshiScared
                );


                motionHoshi.classList.add(
                    "offended"
                );


                await wait(
                    450
                );


                /* =========================
                   ЗАМЕЧАЕТ ЩЕЛЬ СБОКУ
                ========================= */

                motionHoshi.classList.remove(
                    "offended"
                );


                motionHoshi.classList.add(
                    "notices-gap"
                );


                await wait(
                    450
                );


                /* =========================
                   ПЫТАЕТСЯ ПРОЛЕЗТЬ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiStuck
                );


                motionHoshi.classList.remove(
                    "notices-gap"
                );


                await moveElement(
                    motionHoshi,
                    "47%",
                    "56%",
                    650,
                    "ease-in"
                );


                motionHoshi.classList.add(
                    "horns-stuck"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.8
                );


                await wait(
                    550
                );


                /* =========================
                   РУМИ:
                   "ХОШИ..."
                ========================= */

                await speak(
                    "rumi",
                    "Хоши...",
                    VOICE.rumiHoshi
                );


                /* =========================
                   МИРА:
                   "Я ДАЖЕ НИЧЕГО ДЕЛАТЬ НЕ БУДУ"
                ========================= */

                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Я даже ничего делать не буду.",
                    VOICE.miraNothing
                );


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                /* =========================
                   ХОШИ ДЁРГАЕТСЯ
                ========================= */

                motionHoshi.classList.add(
                    "struggle"
                );


                await wait(
                    650
                );


                /* =========================
                   ВЫРЫВАЕТСЯ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiJump
                );


                motionHoshi.classList.remove(
                    "horns-stuck",
                    "struggle"
                );


                motionHoshi.classList.add(
                    "break-free"
                );


                await wait(
                    450
                );


                /* =========================
                   ЗВЕЗДА ПАДАЕТ ЗА ДВЕРЬ
                ========================= */

                droppedStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.85
                );


                await wait(
                    180
                );


                droppedStar.classList.add(
                    "fall-behind"
                );


                setMotionHoshiPose(
                    IMG.hoshiScared
                );


                motionHoshi.classList.remove(
                    "break-free"
                );


                motionHoshi.classList.add(
                    "sees-lost-star"
                );


                playHoshiSound(
                    HOSHI_SOUND.scared,
                    0.9
                );


                await wait(
                    500
                );


                /* =========================
                   ДЕВУШКИ УЖЕ БЛИЗКО
                   — ХОШИ УБЕГАЕТ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                motionHoshi.classList.remove(
                    "sees-lost-star"
                );


                await moveElement(
                    motionHoshi,
                    "110%",
                    "55%",
                    950,
                    "linear"
                );


                await wait(
                    200
                );


                motionHoshi.classList.remove("show");
                motionMira.classList.remove("show");

                // Принудительно скрываем motion-персонажей, чтобы они точно исчезли
                motionHoshi.style.display = "none";
                motionMira.style.display = "none";
                /* =========================
                   MOTION ЗАКОНЧЕН
                ========================= */

                motionLayer.classList.add("finished");
                await wait(350);
                motionLayer.style.display ="none";


                gameLayer.classList.add(
                    "show"
                );


                await wait(
                    400
                );

            }


            /* =====================================================
               GAMEPLAY INTRO
            ===================================================== */

            async function startGameplayIntro() {

                busy =true;
    
                gameplayEnabled = false;


                await speak(
                    "rumi",
                    "Звезда там.",
                    VOICE.rumiStarThere
                );


                await speak(
                    "rumi",
                    "Откроем?",
                    VOICE.rumiOpen
                );


                setSpeakerPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "Три загадки!",
                    VOICE.zoeyThree
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Ты слишком рада.",
                    VOICE.miraTooHappy
                );


                await speak(
                    "zoey",
                    "Я люблю загадки.",
                    VOICE.zoeyLikes
                );


                setSpeakerPose(
                    "zoey",
                    IMG.zoey
                );


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                currentSealIndex = 0;

                // Показываем панель ДО реплик
                renderSealPuzzle(currentSealIndex);

                await playSealIntro(currentSealIndex);

                gameplayEnabled = true;

                busy = false;

            }

                        /* =====================================================
               OPEN DOOR
            ===================================================== */

            async function openDoor() {

                busy =
                    true;


                gameplayEnabled =
                    false;


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ВСЕ ТРИ ПЕЧАТИ ВСПЫХИВАЮТ
                ========================= */

                gameLocks.forEach(
                    (
                        lock,
                        index
                    ) => {

                        setTimeout(
                            () => {

                                lock.classList.add(
                                    "final-glow"
                                );

                            },
                            index * 120
                        );

                    }
                );


                audio.playSfx(
                    SFX.doorOpen,
                    0.9
                );


                // Скрываем старый CSS-эффект (если нужно)
                doorOpenEffect.classList.remove("show");
                // Показываем новую картинку
                doorOpenImage.classList.add("show");


                await wait(
                    850
                );


                /* =========================
                   ДВЕРЬ "ОТКРЫВАЕТСЯ"
                ========================= */

                gameLayer.classList.add(
                    "door-open"
                );


                await wait(
                    650
                );


                /* =========================
                   ПОКАЗЫВАЕМ ЗВЕЗДУ №5
                ========================= */

                fifthStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.95
                );


                await wait(
                    450
                );


                await speak(
                    "zoey",
                    "Эма?",
                    VOICE.zoeyEma
                );


                fifthStar.classList.add(
                    "ready"
                );


                starReady =
                    true;


                busy =
                    false;

            }


            /* =====================================================
               STAR 5 CLICK
            ===================================================== */

            fifthStar.addEventListener(
                "click",
                async () => {

                    if (
                        !starReady ||
                        busy ||
                        completed
                    ) {

                        return;

                    }


                    starReady =
                        false;


                    busy =
                        true;


                    fifthStar.classList.remove(
                        "ready"
                    );


                    /* =========================
                       ЭМА ЗАБИРАЕТ ЗВЕЗДУ
                    ========================= */

                    fifthStar.classList.add(
                        "collect"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.95
                    );


                    await wait(
                        550
                    );


                    /* =========================
                       HUD 4 → 5
                    ========================= */

                    updateStarHud(
                        starHud,
                        5
                    );


                    game.setStarsCollected(
                        5
                    );


                    fifthStar.classList.remove(
                        "show"
                    );


                    fifthStar.classList.add(
                        "hidden"
                    );


                    await wait(
                        250
                    );


                    /* =========================
                       РЕПЛИКИ
                    ========================= */

                    await speak(
                        "rumi",
                        "Пять.",
                        VOICE.rumiFive
                    );


                    await speak(
                        "mira",
                        "Осталось две.",
                        VOICE.miraTwoLeft
                    );


                    hideSpeakers();


                    setSubtitle(
                        ""
                    );


                    await wait(
                        450
                    );


                    /* =========================
                       ЧИХ СВЕРХУ 😂
                    ========================= */

                    playHoshiSound(
                        HOSHI_SOUND.surprised,
                        0.55
                    );


                    hoshiEnding.classList.add(
                        "show"
                    );
                    setEndingHoshiPose(IMG.hoshiHiding);


                    await wait(
                        550
                    );


                    /* =========================
                       ЗОИ ЗАМЕЧАЕТ ХОШИ
                    ========================= */

                    await speak(
                        "zoey",
                        "Ты всё это время был здесь?!",
                        VOICE.zoeyAllTime
                    );


                    /* =========================
                       ХОШИ ПОКАЗЫВАЕТ 2 ЗВЕЗДЫ
                    ========================= */

                    setEndingHoshiPose(
                        IMG.hoshiMischief
                    );


                    hoshiEnding.classList.add(
                        "show-stars"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.giggle,
                        0.65
                    );


                    await wait(
                        450
                    );


                    /* =========================
                       МИРА:
                       "СПУСКАЙСЯ."
                    ========================= */

                    setSpeakerPose(
                        "mira",
                        IMG.miraAnnoyed
                    );


                    await speak(
                        "mira",
                        "Спускайся.",
                        VOICE.miraComeDown
                    );


                    /* =========================
                       ХОШИ: НЕТ 😐
                    ========================= */

                    setEndingHoshiPose(
                        IMG.hoshiMischief
                    );


                    hoshiEnding.classList.add(
                        "refuse"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.suspicious,
                        0.7
                    );


                    await wait(
                        450
                    );


                    /* =========================
                       МИРА ДЕЛАЕТ ШАГ
                    ========================= */

                    mira.classList.add(
                        "show"
                    );


                    mira.classList.add(
                        "step-forward"
                    );


                    await wait(
                        280
                    );


                    /* =========================
                       ХОШИ ПУГАЕТСЯ
                    ========================= */

                    setEndingHoshiPose(
                        IMG.hoshiShocked
                    );


                    hoshiEnding.classList.remove(
                        "refuse"
                    );


                    hoshiEnding.classList.add(
                        "startled"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.scared,
                        0.95
                    );


                    await wait(
                        300
                    );


                    /* =========================
                       ПРЫГАЕТ И УБЕГАЕТ
                    ========================= */

                    setEndingHoshiPose(
                        IMG.hoshiJump
                    );


                    hoshiEnding.classList.add(
                        "escape"
                    );


                    await wait(
                        700
                    );


                    hoshiEnding.classList.remove(
                        "show"
                    );


                    mira.classList.remove(
                        "step-forward"
                    );


                    mira.classList.remove(
                        "show"
                    );


                    setSpeakerPose(
                        "mira",
                        IMG.mira
                    );


                    /* =========================
                       ФИНАЛЬНАЯ РЕПЛИКА
                    ========================= */

                    await speak(
                        "mira",
                        "Вот теперь он точно побежал.",
                        VOICE.miraNowRunning
                    );


                    hideSpeakers();


                    setSubtitle(
                        ""
                    );


                    await wait(
                        450
                    );


                    completed =
                        true;

                    stopSealsBgm();

                    /* =========================
                       СЛЕДУЮЩАЯ СЦЕНА
                    ========================= */

                    game.showScene(
                        "chase"
                    );

                }
            );


            /* =====================================================
               START SCENE
            ===================================================== */

            await wait(
                250
            );


            await playMotionIntro();


            await wait(
                300
            );


            await startGameplayIntro();

        }

    };

}