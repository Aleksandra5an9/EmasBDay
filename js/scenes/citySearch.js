import {
    createStarHud,
    updateStarHud
} from "../star-hud.js";

const IMG = {

    background:
        "./assets/images/magic_city_bg.png",


    /* =========================
       CLUES
    ========================= */

    footprint:
        "./assets/images/trail_pawprint.png",

    spark:
        "./assets/images/trail_magic_spark.png",

    clawMarks:
        "./assets/images/trail_claw_marks.png",

    glowingTrace:
        "./assets/images/trail_glowing_trace.png",


    /* =========================
       DISTRACTIONS
    ========================= */

    balloon:
        "./assets/images/city_balloon.png",

    shinySign:
        "./assets/images/city_shiny_sign.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       HOSHI
    ========================= */

    hoshiRunning:
        "./assets/images/hoshi_running_carry.png",

    hoshiWonder:
        "./assets/images/hoshi_wonder.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiReaching:
        "./assets/images/hoshi_reaching.png",


    /* =========================
       HUNTR/X
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    mira:
        "./assets/images/mira_neutral.png",

    zoey:
        "./assets/images/zoey_excited.png",

    rumiRunning:
        "./assets/images/rumi_running.png",

    miraRunning:
        "./assets/images/mira_running.png",

    zoeyRunning:
        "./assets/images/zoey_running.png"

};


/* =========================================================
   VOICES
========================================================= */

const VOICE = {

    miraYell:
        "./assets/audio/s03_mira_00_hoshi.mp3",

    introRumi:
        "./assets/audio/s03_rumi_01_somewhere_here.mp3",

    introMira:
        "./assets/audio/s03_mira_01_leaves_traces.mp3",

    introZoey:
        "./assets/audio/s03_zoey_01_not_sneaky.mp3",

    instructionRumi:
        "./assets/audio/s03_rumi_02_find_unusual.mp3",

    wrongZoey:
        "./assets/audio/s03_zoey_02_pretty_not_trace.mp3",

    wrongMira:
        "./assets/audio/s03_mira_02_not_hoshi.mp3",

    foundZoey:
        "./assets/audio/s03_zoey_03_found.mp3",

    magicRumi:
        "./assets/audio/s03_rumi_03_his_magic.mp3",

    hearsMira:
        "./assets/audio/s03_mira_03_he_hears_us.mp3",

    trailRumi:
        "./assets/audio/s03_rumi_04_trail_goes_on.mp3",

    hereRumi:
        "./assets/audio/s03_rumi_05_here.mp3",

    anotherZoey:
        "./assets/audio/s03_zoey_04_another_star.mp3",

    fasterRumi:
        "./assets/audio/s03_rumi_06_faster.mp3",

    outplayedZoey:
        "./assets/audio/s03_zoey_05_outplayed.mp3",

    aheadMira:
        "./assets/audio/s03_mira_04_still_ahead.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    wonder:
        "./assets/audio/hoshi_wonder.mp3",

    scared:
        "./assets/audio/hoshi_scared.mp3",

    giggle:
        "./assets/audio/hoshi_giggle_short.mp3",

    grumble:
        "./assets/audio/hoshi_grumble.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    clue:
        "./assets/audio/magic_zap.mp3",

    sparkle:
        "./assets/audio/star_appear.mp3",

    collect:
        "./assets/audio/star_collect.mp3",

    wrong:
        "./assets/audio/magic_burst.mp3",

    searchBgm: "./assets/audio/search_bgm.mp3"

};


/* =========================================================
   VOICE VOLUMES
========================================================= */

const VOLUME = {

    rumi:
        0.82,

    mira:
        0.82,

    zoey:
        0.82

};


/* =========================================================
   CLUES

   Здесь потом будем двигать следы по фону.

   left  → вправо / влево
   top   → вверх / вниз
   width → размер
========================================================= */

const CLUES = [

    {
        id:
            "footprint",

        image:
            IMG.footprint,

        left:
            "21%",

        top:
            "70%",

        width:
            "8vw"
    },


    {
        id:
            "spark",

        image:
            IMG.spark,

        left:
            "47%",

        top:
            "49%",

        width:
            "7vw"
    },


    {
        id:
            "claws",

        image:
            IMG.clawMarks,

        left:
            "70%",

        top:
            "39%",

        width:
            "9vw"
    },


    {
        id:
            "trace",

        image:
            IMG.glowingTrace,

        left:
            "82%",

        top:
            "67%",

        width:
            "12vw"
    }

];


/* =========================================================
   HIDDEN HOSHI POSITIONS

   Три места, куда Хоши будет перепрыгивать,
   если Эма его заметила.
========================================================= */

const HIDDEN_HOSHI_POSITIONS = [

    {
        left:
            "78%",

        top:
            "59%",

        width:
            "8vw"
    },


    {
        left:
            "34%",

        top:
            "34%",

        width:
            "7vw"
    },


    {
        left:
            "88%",

        top:
            "27%",

        width:
            "6.5vw"
    }

];

/* =========================================================
   CREATE SCENE
========================================================= */

export function createCitySearchScene({
    game,
    audio
}) {

    return {

        async mount(root) {

            let currentClueIndex = 0;

            let busy = true;

            let searchStarted = false;

            let searchFinished = false;

            let starReady = false;

            let hiddenHoshiBusy = false;

            let hiddenHoshiClicks = 0;

            let lastRoutePoint = null;

            // ---- Фоновая музыка ----
            let bgmAudio = null;

            function startBgm() {
                // используем SFX.chaseBgm или свой трек
                bgmAudio = new Audio(SFX.searchBgm); // или SFX.searchBgm
                bgmAudio.loop = true;
                bgmAudio.volume = 0.7;   // комфортная громкость
                bgmAudio.play().catch(e => console.warn('BGM play blocked:', e));
            }

            function stopBgm() {
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
                "city-search-scene";


            screen.innerHTML = `

                <img
                    class="city-search-bg"
                    src="${IMG.background}"
                    alt=""
                >


                <!-- =============================================
                     MOTION INTRO
                ============================================== -->

                <div
                    class="city-motion-layer"
                    id="cityMotionLayer"
                >

                    <img
                        class="city-motion-hoshi"
                        id="cityMotionHoshi"
                        src="${IMG.hoshiRunning}"
                        alt=""
                    >


                    <img
                        class="
                            city-runner
                            city-runner-rumi
                        "
                        id="cityRunnerRumi"
                        src="${IMG.rumiRunning}"
                        alt=""
                    >


                    <img
                        class="
                            city-runner
                            city-runner-mira
                        "
                        id="cityRunnerMira"
                        src="${IMG.miraRunning}"
                        alt=""
                    >


                    <img
                        class="
                            city-runner
                            city-runner-zoey
                        "
                        id="cityRunnerZoey"
                        src="${IMG.zoeyRunning}"
                        alt=""
                    >


                    <img
                        class="city-dropped-star"
                        id="cityDroppedStar"
                        src="${IMG.star}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     SEARCH UI
                ============================================== -->

                <div
                    class="city-search-ui"
                    id="citySearchUi"
                >

                    <div
                        class="city-search-topbar"
                    >

                        <div
                            class="city-search-subtitle"
                            id="citySearchSubtitle"
                        ></div>


                        <div
                            class="city-star-hud-mount"
                            id="cityStarHudMount"
                        ></div>

                    </div>


                    <!-- =========================================
                         ЧТО СЕЙЧАС ИЩЕМ
                    ========================================== -->

                    <div
                        class="city-target-card"
                        id="cityTargetCard"
                    >

                        <div
                            class="city-target-label"
                        >
                            ИЩИ
                        </div>


                        <img
                            id="cityTargetImage"
                            src=""
                            alt=""
                        >

                    </div>

                </div>


                <!-- =============================================
                     GOLDEN ROUTE
                ============================================== -->

                <div
                    class="city-route-layer"
                    id="cityRouteLayer"
                ></div>


                <!-- =============================================
                     CLUES
                ============================================== -->

                <div
                    class="city-clues-layer"
                    id="cityCluesLayer"
                ></div>


                <!-- =============================================
                     DISTRACTIONS
                ============================================== -->

                <button
                    class="
                        city-distraction
                        city-balloon
                    "
                    id="cityBalloon"
                    type="button"
                    aria-label="Воздушный шар"
                >

                    <img
                        src="${IMG.balloon}"
                        alt=""
                    >

                </button>


                <button
                    class="
                        city-distraction
                        city-shiny-sign
                    "
                    id="cityShinySign"
                    type="button"
                    aria-label="Блестящая вывеска"
                >

                    <img
                        src="${IMG.shinySign}"
                        alt=""
                    >

                </button>


                <!-- =============================================
                     СПРЯТАВШИЙСЯ ХОШИ
                ============================================== -->

                <button
                    class="city-hidden-hoshi"
                    id="cityHiddenHoshi"
                    type="button"
                    aria-label="Хоши спрятался"
                >

                    <img
                        id="cityHiddenHoshiImg"
                        src="${IMG.hoshiMischief}"
                        alt=""
                    >

                </button>


                <!-- =============================================
                     SPEAKERS
                ============================================== -->

                <img
                    class="
                        city-speaker
                        city-speaker-rumi
                        city-speaker-left
                    "
                    id="cityRumi"
                    src="${IMG.rumi}"
                    alt=""
                >


                <img
                    class="
                        city-speaker
                        city-speaker-mira
                        city-speaker-right
                    "
                    id="cityMira"
                    src="${IMG.mira}"
                    alt=""
                >


                <img
                    class="
                        city-speaker
                        city-speaker-zoey
                        city-speaker-right
                    "
                    id="cityZoey"
                    src="${IMG.zoey}"
                    alt=""
                >


                <!-- =============================================
                     FINAL STAR RACE
                ============================================== -->

                <div
                    class="city-star-race"
                    id="cityStarRace"
                >

                    <button
                        class="city-final-star"
                        id="cityFinalStar"
                        type="button"
                        aria-label="Забрать звезду"
                    >

                        <img
                            src="${IMG.star}"
                            alt=""
                        >

                    </button>


                    <img
                        class="city-reaching-hoshi"
                        id="cityReachingHoshi"
                        src="${IMG.hoshiReaching}"
                        alt=""
                    >

                </div>

            `;


            root.appendChild(
                screen
            );


            // ---- ЗАПУСКАЕМ ФОНОВУЮ МУЗЫКУ ----
            startBgm();


            /* =====================================================
               ELEMENTS
            ===================================================== */

            const motionLayer =
                screen.querySelector(
                    "#cityMotionLayer"
                );


            const motionHoshi =
                screen.querySelector(
                    "#cityMotionHoshi"
                );


            const runnerRumi =
                screen.querySelector(
                    "#cityRunnerRumi"
                );


            const runnerMira =
                screen.querySelector(
                    "#cityRunnerMira"
                );


            const runnerZoey =
                screen.querySelector(
                    "#cityRunnerZoey"
                );


            const droppedStar =
                screen.querySelector(
                    "#cityDroppedStar"
                );


            const searchUi =
                screen.querySelector(
                    "#citySearchUi"
                );


            const subtitle =
                screen.querySelector(
                    "#citySearchSubtitle"
                );


            const targetCard =
                screen.querySelector(
                    "#cityTargetCard"
                );


            const targetImage =
                screen.querySelector(
                    "#cityTargetImage"
                );


            const routeLayer =
                screen.querySelector(
                    "#cityRouteLayer"
                );


            const cluesLayer =
                screen.querySelector(
                    "#cityCluesLayer"
                );


            const rumi =
                screen.querySelector(
                    "#cityRumi"
                );


            const mira =
                screen.querySelector(
                    "#cityMira"
                );


            const zoey =
                screen.querySelector(
                    "#cityZoey"
                );


            const speakers = {

                rumi,
                mira,
                zoey

            };


            const starHudMount =
                screen.querySelector(
                    "#cityStarHudMount"
                );


            const starHud =
                createStarHud(
                    1
                );


            starHudMount.appendChild(
                starHud
            );

            


            const balloon =
                screen.querySelector(
                    "#cityBalloon"
                );


            const shinySign =
                screen.querySelector(
                    "#cityShinySign"
                );


            const hiddenHoshi =
                screen.querySelector(
                    "#cityHiddenHoshi"
                );


            const hiddenHoshiImg =
                screen.querySelector(
                    "#cityHiddenHoshiImg"
                );


            const starRace =
                screen.querySelector(
                    "#cityStarRace"
                );


            const finalStar =
                screen.querySelector(
                    "#cityFinalStar"
                );


            const reachingHoshi =
                screen.querySelector(
                    "#cityReachingHoshi"
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


            async function moveElement(
                element,
                left,
                top,
                duration
            ) {

                element.style.transition =
                    `left ${duration}ms linear, ` +
                    `top ${duration}ms ease-in-out`;


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


            function moveRunner(
                element,
                left,
                top,
                duration
            ) {

                element.classList.add(
                    "show"
                );


                element.style.transition =
                    `left ${duration}ms linear, ` +
                    `top ${duration}ms ease-in-out`;


                requestAnimationFrame(
                    () => {

                        element.style.left =
                            left;

                        element.style.top =
                            top;

                    }
                );

            }


                        /* =====================================================
               MOTION INTRO
            ===================================================== */

            async function playCityMotionIntro() {

                motionLayer.classList.add(
                    "show"
                );


                motionHoshi.classList.add(
                    "show"
                );


                /* =========================
                   ХОШИ ВБЕГАЕТ
                ========================= */

                motionHoshi.style.left =
                    "-12%";

                motionHoshi.style.top =
                    "61%";


                await wait(
                    120
                ); 


                await moveElement(
                    motionHoshi,
                    "43%",
                    "78%",
                    1100
                );


                /* =========================
                   ЗАМЕЧАЕТ ВЫВЕСКУ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiWonder
                );


                audio.playSfx(
                    HOSHI_SOUND.wonder,
                    0.9
                );


                motionHoshi.classList.add(
                    "city-hoshi-look-up"
                );


                await wait(
                    850
                );


                motionHoshi.classList.remove(
                    "city-hoshi-look-up"
                );


                /* =========================
                   ВСПОМНИЛ ПРО ПОГОНЮ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                motionHoshi.classList.add(
                    "city-hoshi-startled"
                );


                await wait(
                    250
                );


                motionHoshi.classList.remove(
                    "city-hoshi-startled"
                );


                /* =========================
                   HUNTR/X ПОЯВЛЯЮТСЯ СЗАДИ
                ========================= */

                runnerRumi.style.left =
                    "-1%";

                runnerRumi.style.top =
                    "74%";


                runnerMira.style.left =
                    "-5%";

                runnerMira.style.top =
                    "71%";


                runnerZoey.style.left =
                    "-4%";

                runnerZoey.style.top =
                    "76%";


                moveRunner(
                    runnerRumi,
                    "15%",
                    "74%",
                    950
                );


                moveRunner(
                    runnerMira,
                    "9%",
                    "71%",
                    950
                );


                moveRunner(
                    runnerZoey,
                    "6%",
                    "76%",
                    950
                );


                /* =========================
                   ХОШИ БЕЖИТ ДАЛЬШЕ
                ========================= */

                await moveElement(
                    motionHoshi,
                    "78%",
                    "59%",
                    850
                );

                


                /* =========================
                   ШАРИК!
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiWonder
                );


                audio.playSfx(
                    HOSHI_SOUND.wonder,
                    0.9
                );


                motionHoshi.classList.add(
                    "city-hoshi-balloon-look"
                );


                await wait(
                    850
                );


                /* =========================
                   МИРА: "ХОШИ!"
                ========================= */

                setSubtitle(
                    "ХОШИ!"
                );


                runnerMira.classList.add(
                    "character-speaking"
                );


                await audio.playVoice(
                    VOICE.miraYell,
                    VOLUME.mira
                );


                runnerMira.classList.remove(
                    "character-speaking"
                );


                setSubtitle(
                    ""
                );


                /* =========================
                   ХОШИ ПУГАЕТСЯ
                ========================= */

                motionHoshi.classList.remove(
                    "city-hoshi-balloon-look"
                );


                audio.playSfx(
                    HOSHI_SOUND.scared,
                    0.95
                );


                motionHoshi.classList.add(
                    "city-hoshi-jump"
                );


                await wait(
                    350
                );


                motionHoshi.classList.remove(
                    "city-hoshi-jump"
                );


                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                /* =========================
                   БЕЖИТ И РОНЯЕТ ЗВЕЗДУ
                ========================= */

                droppedStar.style.left =
                    "61%";

                droppedStar.style.top =
                    "52%";


                droppedStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.75
                );


                moveElement(
                    motionHoshi,
                    "108%",
                    "58%",
                    1050
                );


                await wait(
                    180
                );


                droppedStar.classList.add(
                    "fall"
                );


                await wait(
                    650
                );


                /* =========================
                   ДЕВОЧКИ ДОБЕГАЮТ
                ========================= */

                moveRunner(
                    runnerRumi,
                    "120%",
                    "74%",
                    1000
                );


                moveRunner(
                    runnerMira,
                    "120%",
                    "71%",
                    1000
                );


                moveRunner(
                    runnerZoey,
                    "120%",
                    "76%",
                    1000
                );


                await wait(
                    1050
                );


                /* =========================
                   ЗВЕЗДА "ТЕРЯЕТСЯ"
                   В ГОРОДСКОЙ СЦЕНЕ
                ========================= */

                droppedStar.classList.add(
                    "hide"
                );


                await wait(
                    350
                );


                /* =========================
                   MOTION ЗАКОНЧЕН
                ========================= */

                motionLayer.classList.add(
                    "finished"
                );


                await wait(
                    350
                );


                motionLayer.classList.remove(
                    "show"
                );


                motionLayer.style.display =
                    "none";


                runnerRumi.classList.remove(
                    "show"
                );

                runnerMira.classList.remove(
                    "show"
                );

                runnerZoey.classList.remove(
                    "show"
                );


                searchUi.classList.add(
                    "show"
                );

            }


            /* =====================================================
               CREATE CLUES
            ===================================================== */

            const clueElements =
                CLUES.map(
                    (
                        clue,
                        index
                    ) => {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "city-clue";


                        button.dataset.index =
                            index;


                        button.style.left =
                            clue.left;


                        button.style.top =
                            clue.top;


                        button.style.width =
                            clue.width;


                        button.innerHTML = `

                            <span
                                class="city-clue-glow"
                            ></span>

                            <img
                                src="${clue.image}"
                                alt=""
                            >

                        `;


                        cluesLayer.appendChild(
                            button
                        );


                        return button;

                    }
                );


            /* =====================================================
               CURRENT TARGET
            ===================================================== */

            function showCurrentTarget() {

                if (
                    currentClueIndex >=
                    CLUES.length
                ) {

                    targetCard.classList.remove(
                        "show"
                    );

                    return;

                }


                const clue =
                    CLUES[
                        currentClueIndex
                    ];


                targetImage.src =
                    clue.image;


                targetCard.classList.add(
                    "show"
                );

            }


            /* =====================================================
               SHOW CURRENT CLUE
            ===================================================== */

            function showCurrentClue() {

                clueElements.forEach(
                    (
                        element,
                        index
                    ) => {

                        const shouldShow =
                            index ===
                            currentClueIndex;


                        element.classList.toggle(
                            "available",
                            shouldShow
                        );

                    }
                );


                showCurrentTarget();

            }


            /* =====================================================
               ROUTE LINE
            ===================================================== */

            function getElementCenter(
                element
            ) {

                const screenRect =
                    screen.getBoundingClientRect();


                const rect =
                    element.getBoundingClientRect();


                return {

                    x:
                        rect.left -
                        screenRect.left +
                        rect.width / 2,

                    y:
                        rect.top -
                        screenRect.top +
                        rect.height / 2

                };

            }


            function addRouteSegment(
                fromPoint,
                toPoint
            ) {

                const dx =
                    toPoint.x -
                    fromPoint.x;


                const dy =
                    toPoint.y -
                    fromPoint.y;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                const angle =
                    Math.atan2(
                        dy,
                        dx
                    ) *
                    180 /
                    Math.PI;


                const segment =
                    document.createElement(
                        "div"
                    );


                segment.className =
                    "city-route-segment";


                segment.style.left =
                    `${fromPoint.x}px`;


                segment.style.top =
                    `${fromPoint.y}px`;


                segment.style.width =
                    `${distance}px`;


                segment.style.transform =
                    `rotate(${angle}deg)`;


                routeLayer.appendChild(
                    segment
                );


                requestAnimationFrame(
                    () => {

                        segment.classList.add(
                            "draw"
                        );

                    }
                );

            }


            function extendRouteTo(
                element
            ) {

                const currentPoint =
                    getElementCenter(
                        element
                    );


                if (lastRoutePoint) {

                    addRouteSegment(
                        lastRoutePoint,
                        currentPoint
                    );

                }


                lastRoutePoint =
                    currentPoint;

            }


                        /* =====================================================
               HIDDEN HOSHI
            ===================================================== */

            function placeHiddenHoshi(
                positionIndex
            ) {

                const position =
                    HIDDEN_HOSHI_POSITIONS[
                        positionIndex
                    ];


                hiddenHoshi.style.left =
                    position.left;


                hiddenHoshi.style.top =
                    position.top;


                hiddenHoshi.style.width =
                    position.width;

            }


            function showHiddenHoshi() {

                placeHiddenHoshi(
                    0
                );


                hiddenHoshi.classList.add(
                    "show"
                );

            }


            hiddenHoshi.addEventListener(
                "click",
                async () => {

                    if (
                        hiddenHoshiBusy ||
                        !searchStarted ||
                        searchFinished
                    ) {

                        return;

                    }


                    hiddenHoshiBusy =
                        true;


                    hiddenHoshiClicks +=
                        1;


                    audio.playSfx(
                        HOSHI_SOUND.scared,
                        0.9
                    );


                    hiddenHoshi.classList.add(
                        "caught"
                    );


                    await wait(
                        320
                    );


                    hiddenHoshi.classList.remove(
                        "caught"
                    );


                    hiddenHoshi.classList.remove(
                        "show"
                    );


                    await wait(
                        180
                    );


                    if (
                        hiddenHoshiClicks >=
                        HIDDEN_HOSHI_POSITIONS.length
                    ) {

                        /* =========================
                           ПОСЛЕ ТРЕТЬЕГО РАЗА
                           ОН СТАНОВИТСЯ ОЧЕНЬ
                           ОСТОРОЖНЫМ
                        ========================= */

                        hiddenHoshiClicks =
                            HIDDEN_HOSHI_POSITIONS.length -
                            1;


                        hiddenHoshiImg.src =
                            IMG.hoshiMischief;


                        placeHiddenHoshi(
                            HIDDEN_HOSHI_POSITIONS.length -
                            1
                        );


                        hiddenHoshi.classList.add(
                            "peek"
                        );


                        await wait(
                            350
                        );


                        hiddenHoshi.classList.add(
                            "show"
                        );


                        hiddenHoshiBusy =
                            false;


                        return;

                    }


                    /* =========================
                       ПЕРЕПРЫГИВАЕТ В ДРУГОЕ
                       УКРЫТИЕ
                    ========================= */

                    hiddenHoshiImg.src =
                        IMG.hoshiMischief;


                    placeHiddenHoshi(
                        hiddenHoshiClicks
                    );


                    await wait(
                        220
                    );


                    hiddenHoshi.classList.add(
                        "show"
                    );


                    hiddenHoshiBusy =
                        false;

                }
            );


            /* =====================================================
               DISTRACTIONS
            ===================================================== */

            async function reactToDistraction(
                element,
                characterName,
                text,
                voice
            ) {

                if (
                    busy ||
                    !searchStarted ||
                    searchFinished
                ) {

                    return;

                }


                busy =
                    true;


                element.classList.remove(
                    "boop"
                );


                void element.offsetWidth;


                element.classList.add(
                    "boop"
                );


                audio.playSfx(
                    SFX.wrong,
                    0.35
                );


                await wait(
                    250
                );


                await speak(
                    characterName,
                    text,
                    voice
                );


                busy =
                    false;

            }


            balloon.addEventListener(
                "click",
                async () => {

                    await reactToDistraction(
                        balloon,
                        "zoey",
                        "Красиво… но это не след.",
                        VOICE.wrongZoey
                    );

                }
            );


            shinySign.addEventListener(
                "click",
                async () => {

                    await reactToDistraction(
                        shinySign,
                        "mira",
                        "Нет. Хоши здесь ни при чём.",
                        VOICE.wrongMira
                    );

                }
            );


            /* =====================================================
               CLUE DIALOGUE
            ===================================================== */

            async function playClueDialogue(
                index
            ) {

                /* =========================
                   ПЕРВЫЙ СЛЕД
                ========================= */

                if (
                    index ===
                    0
                ) {

                    await speak(
                        "zoey",
                        "Нашла!",
                        VOICE.foundZoey
                    );


                    await speak(
                        "rumi",
                        "Да. Это его магия.",
                        VOICE.magicRumi
                    );


                    return;

                }


                /* =========================
                   ВТОРОЙ СЛЕД
                ========================= */

                if (
                    index ===
                    1
                ) {

                    /* Хоши смеётся где-то вдали */

                    await audio.playVoice(
                        HOSHI_SOUND.giggle,
                        0.85
                    );


                    await wait(
                        120
                    );


                    await speak(
                        "mira",
                        "Он нас слышит.",
                        VOICE.hearsMira
                    );


                    return;

                }


                /* =========================
                   ТРЕТИЙ СЛЕД
                ========================= */

                if (
                    index ===
                    2
                ) {

                    await speak(
                        "rumi",
                        "След ведёт дальше.",
                        VOICE.trailRumi
                    );


                    return;

                }


                /* =========================
                   ПОСЛЕДНИЙ СЛЕД
                ========================= */

                if (
                    index ===
                    3
                ) {

                    await speak(
                        "rumi",
                        "Здесь!",
                        VOICE.hereRumi
                    );

                }

            }


            /* =====================================================
               CLUE CLICK
            ===================================================== */

            clueElements.forEach(
                (
                    element,
                    index
                ) => {

                    element.addEventListener(
                        "click",
                        async () => {

                            if (
                                busy ||
                                searchFinished ||
                                !searchStarted
                            ) {

                                return;

                            }


                            if (
                                index !==
                                currentClueIndex
                            ) {

                                return;

                            }


                            busy =
                                true;


                            element.classList.add(
                                "found"
                            );


                            audio.playSfx(
                                SFX.clue,
                                0.75
                            );


                            /* =========================
                               ДОБАВЛЯЕМ ЛИНИЮ МАРШРУТА
                            ========================= */

                            extendRouteTo(
                                element
                            );


                            await wait(
                                320
                            );


                            await playClueDialogue(
                                index
                            );


                            element.classList.remove(
                                "available"
                            );


                            element.classList.add(
                                "done"
                            );


                            currentClueIndex +=
                                1;


                            /* =========================
                               ЕЩЁ ЕСТЬ СЛЕДЫ
                            ========================= */

                            if (
                                currentClueIndex <
                                CLUES.length
                            ) {

                                showCurrentClue();


                                busy =
                                    false;


                                return;

                            }


                            /* =========================
                               ВСЕ СЛЕДЫ НАЙДЕНЫ
                            ========================= */

                            targetCard.classList.remove(
                                "show"
                            );


                            busy =
                                true;


                            await startStarRace();

                        }
                    );

                }
            );

                        /* =====================================================
               STAR RACE
            ===================================================== */

            async function startStarRace() {

                searchFinished =
                    true;


                starReady =
                    false;


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   УБИРАЕМ СПРЯТАННОГО ХОШИ
                ========================= */

                hiddenHoshi.classList.remove(
                    "show"
                );


                hiddenHoshi.classList.remove(
                    "peek"
                );


                /* =========================
                   ПОКАЗЫВАЕМ ЗВЕЗДУ
                ========================= */

                starRace.classList.add(
                    "show"
                );


                finalStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.9
                );


                await wait(
                    450
                );


                await speak(
                    "zoey",
                    "Ещё одна!",
                    VOICE.anotherZoey
                );


                /* =========================
                   ХОШИ ТЯНЕТСЯ К ЗВЕЗДЕ
                ========================= */

                reachingHoshi.classList.add(
                    "show"
                );


                await wait(
                    300
                );


                reachingHoshi.classList.add(
                    "reach"
                );


                await wait(
                    350
                );


                await speak(
                    "rumi",
                    "Эма, быстрее!",
                    VOICE.fasterRumi
                );


                /*
                    ВАЖНО:
                    Никакого настоящего таймера нет.

                    Хоши будет просто комично
                    медленно тянуться к звезде.

                    Эма может нажать когда угодно.
                */


                starReady =
                    true;

                finalStar.classList.add(
                    "ready"
                );

            }


            /* =====================================================
               FINAL STAR CLICK
            ===================================================== */

            finalStar.addEventListener(
                "click",
                async () => {

                    if (
                        !starReady
                    ) {

                        return;

                    }


                    starReady =
                        false;


                    busy =
                        true;


                    /* =========================
                       ЭМА ЗАБИРАЕТ ЗВЕЗДУ
                    ========================= */

                    finalStar.classList.add(
                        "collect"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.95
                    );


                    /* =========================
                       ХОШИ ХВАТАЕТ ВОЗДУХ
                    ========================= */

                    reachingHoshi.classList.remove(
                        "reach"
                    );


                    reachingHoshi.classList.add(
                        "miss"
                    );


                    await wait(
                        500
                    );


                    /* =========================
                       HUD — ВТОРАЯ ЗВЕЗДА
                    ========================= */

                    updateStarHud(
                        starHud,
                        2
                    );


                    game.setStarsCollected(
                        2
                    );


                    await wait(
                        250
                    );


                    finalStar.classList.remove(
                        "show"
                    );


                    finalStar.classList.add(
                        "hidden"
                    );


                    /* =========================
                       ХОШИ ВОЗМУЩЁН
                    ========================= */

                    audio.playSfx(
                        HOSHI_SOUND.grumble,
                        0.9
                    );


                    reachingHoshi.classList.add(
                        "grumble"
                    );


                    await wait(
                        500
                    );


                    /* =========================
                       ЗОИ СМЕЁТСЯ
                    ========================= */

                    await speak(
                        "zoey",
                        "Она тебя обыграла!",
                        VOICE.outplayedZoey
                    );


                    /* =========================
                       ХОШИ УБЕГАЕТ
                    ========================= */

                    reachingHoshi.classList.remove(
                        "grumble"
                    );


                    reachingHoshi.classList.add(
                        "run-away"
                    );


                    audio.playSfx(
                        HOSHI_SOUND.scared,
                        0.65
                    );


                    await wait(
                        700
                    );


                    /* =========================
                       МИРА
                    ========================= */

                    await speak(
                        "mira",
                        "И он всё ещё впереди.",
                        VOICE.aheadMira
                    );


                    hideSpeakers();


                    setSubtitle(
                        ""
                    );


                    await wait(
                        500
                    );

                    stopBgm();
                    /* =========================
                       ПЕРЕХОД В COLORING
                    ========================= */

                    game.showScene(
                        "coloring"
                    );

                }
            );


            /* =====================================================
               SEARCH INTRO
            ===================================================== */

            async function startSearch() {

                searchStarted =
                    false;


                busy =
                    true;


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ВСТУПИТЕЛЬНЫЕ РЕПЛИКИ
                ========================= */

                await speak(
                    "rumi",
                    "Он где-то здесь.",
                    VOICE.introRumi
                );


                await speak(
                    "mira",
                    "И он оставляет следы.",
                    VOICE.introMira
                );


                await speak(
                    "zoey",
                    "Хоши совсем не умеет быть незаметным.",
                    VOICE.introZoey
                );


                await speak(
                    "rumi",
                    "Эма, найди то, что выглядит необычно.",
                    VOICE.instructionRumi
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ВКЛЮЧАЕМ ИГРОВУЮ ЧАСТЬ
                ========================= */

                searchStarted =
                    true;


                busy =
                    false;


                showCurrentClue();


                showHiddenHoshi();

            }


            /* =====================================================
               START SCENE
            ===================================================== */

            await wait(
                250
            );


            await playCityMotionIntro();


            await wait(
                350
            );


            await startSearch();

        }

    };

}

