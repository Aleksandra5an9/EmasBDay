import {
    createStarHud,
    updateStarHud
} from "../star-hud.js";

const IMG = {

    /* =========================
       BACKGROUND
    ========================= */

    background:
        "./assets/images/honmoon_gate_bg.png",


    /* =========================
       EMBLEM / HONMOON
    ========================= */
    emblemColored: "./assets/images/huntrix_emblem_colored.png",
    emblemBroken:
        "./assets/images/huntrix_emblem_broken.png",

    emblemLineart:
        "./assets/images/huntrix_emblem_lineart.png",

    emblemNormal:
        "./assets/images/huntrix_emblem_normal.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       HOSHI — MOTION INTRO
    ========================= */

    hoshiRunning:
        "./assets/images/hoshi_running_carry.png",

    hoshiDistracted:
        "./assets/images/hoshi_distracted.png",

    hoshiRepairing:
        "./assets/images/hoshi_repairing.png",

    hoshiScared:
        "./assets/images/hoshi_scared.png",


    /* =========================
       HOSHI — ENDING
    ========================= */

    hoshiPeek:
        "./assets/images/hoshi_peek.png",

    hoshiWonder:
        "./assets/images/hoshi_wonder.png",

    hoshiCurious:
        "./assets/images/hoshi_curious.png",

    hoshiHappy:
        "./assets/images/hoshi_happy.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",


    /* =========================
       HUNTR/X
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    rumiSmile:
        "./assets/images/rumi_smile.png",

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

   Это новые реплики именно для этой сцены.
   Названия сразу делаем последовательными.
========================================================= */

const VOICE = {

    /* =========================
       MOTION INTRO
    ========================= */

    miraYell:
        "./assets/audio/s04_mira_00_hoshi.mp3",


    /* =========================
       ПОСЛЕ ПОБЕГА ХОШИ
    ========================= */

    zoeyOops:
        "./assets/audio/s04_zoey_01_oops.mp3",

    miraBroken:
        "./assets/audio/s04_mira_01_broken.mp3",

    rumiTriedRepair:
        "./assets/audio/s04_rumi_01_tried_repair.mp3",

    miraSuccessful:
        "./assets/audio/s04_mira_02_very_successful.mp3",

    rumiTry:
        "./assets/audio/s04_rumi_02_ema_try.mp3",


    /* =========================
       COLORING
    ========================= */

    rumiInstruction:
        "./assets/audio/s04_rumi_03_choose_color.mp3",

    zoeyPretty:
        "./assets/audio/s04_zoey_02_pretty.mp3",

    rumiContinue:
        "./assets/audio/s04_rumi_04_continue.mp3",

    rumiReady:
        "./assets/audio/s04_rumi_05_ready.mp3",


    /* =========================
       RESTORED HONMOON
    ========================= */

    rumiWorked:
        "./assets/audio/s04_rumi_06_worked.mp3",

    zoeyDifferent:
        "./assets/audio/s04_zoey_03_different.mp3",

    miraBoring:
        "./assets/audio/s04_mira_03_ours_boring.mp3",

    rumiKeep:
        "./assets/audio/s04_rumi_07_keep_this.mp3",


    /* =========================
       HOSHI ENDING
    ========================= */

    miraHoshi:
        "./assets/audio/s04_mira_04_hoshi.mp3",

    zoeyLiked:
        "./assets/audio/s04_zoey_04_he_liked_it.mp3",

    miraFourStars:
        "./assets/audio/s04_mira_05_four_stars.mp3",

    rumiLetsGo:
        "./assets/audio/s04_rumi_08_lets_go.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    wonder:
        "./assets/audio/hoshi_wonder.mp3",

    scared:
        "./assets/audio/hoshi_scared.mp3",

    curious:
        "./assets/audio/hoshi_curious.mp3",

    grumble:
        "./assets/audio/hoshi_grumble.mp3",

    softHappy:
        "./assets/audio/hoshi_soft_happy.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    crack:
        "./assets/audio/picture_break.mp3",

    magic:
        "./assets/audio/magic_zap.mp3",

    sparkle:
        "./assets/audio/star_appear.mp3",

    collect:
        "./assets/audio/star_collect.mp3",

    coloringBgm: "./assets/audio/coloring_bgm.mp3"

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
   COLORS

   Здесь только игровые значения цветов.

   Никакого правильного варианта нет.
========================================================= */

const COLORS = [

    {
        id:
            "yellow",

        label:
            "Жёлтый",

        value:
            "#FFD95A"
    },


    {
        id:
            "pink",

        label:
            "Розовый",

        value:
            "#FF76C8"
    },


    {
        id:
            "purple",

        label:
            "Фиолетовый",

        value:
            "#A66CFF"
    },


    {
        id:
            "cyan",

        label:
            "Голубой",

        value:
            "#67DFFF"
    },


    {
        id:
            "blue",

        label:
            "Синий",

        value:
            "#548CFF"
    }

];


/* =========================================================
   COLORING ZONES

   Это НЕ отдельные PNG.

   Поверх lineart будут лежать 5 цветных областей.

   После первого запуска мы посмотрим,
   как они совпадают с реальной эмблемой,
   и при необходимости поправим:

   left
   top
   width
   height
   clipPath
========================================================= */

const COLOR_ZONES = [

    /* =========================
       ВЕРХ
    ========================= */

    {
        id:
            "zone1",

        left:
            "48%",

        top:
            "11%",

        width:
            "28%",

        height:
            "29%",

        clipPath:
            "circle(50% at 50% 100%)"
    },


    /* =========================
       ЛЕВАЯ ЧАСТЬ
    ========================= */

    {
        id:
            "zone2",

        left:
            "21%",

        top:
            "40%",

        width:
            "28%",

        height:
            "29%",

        clipPath:
            "circle(50% at 100% 50%)"
    },


    /* =========================
       ЦЕНТР
    ========================= */

    {
        id:
            "zone3",

        left:
            "48%",

        top:
            "40%",

        width:
            "29%",

        height:
            "29%",

        clipPath:
            "inset(0)"
    },


    /* =========================
       ПРАВАЯ ЧАСТЬ
    ========================= */

    {
        id:
            "zone4",

        left:
            "76%",

        top:
            "40%",

        width:
            "28%",

        height:
            "29%",

        clipPath:
            "circle(50% at 0% 50%)"
    },


    /* =========================
       НИЗ
    ========================= */

    {
        id:
            "zone5",

        left:
            "48%",

        top:
            "69%",

        width:
            "28%",

        height:
            "29%",

        clipPath:
            "circle(50% at 50% 0%)"
    }

];


/* =========================================================
   CREATE SCENE
========================================================= */

export function createColoringScene({
    game,
    audio
}) {

    return {

        async mount(root) {

            /* =====================================================
               STATE
            ===================================================== */

            let selectedColor =
                COLORS[1];


            let coloringEnabled =
                false;


            let busy =
                true;


            let finished =
                false;


            let firstColorDone =
                false;


            let continueCommentDone =
                false;

            let readyQuestionDone = false;

            const paintedZones =
                new Set();


            const savedColors =
                {};
            
            // ---- Фоновая музыка для раскраски ----
            let bgmAudio = null;

            function startColoringBgm() {
                bgmAudio = new Audio(SFX.coloringBgm);
                bgmAudio.loop = true;
                bgmAudio.volume = 0.4;   // комфортная громкость (можно регулировать)
                bgmAudio.play().catch(e => console.warn('BGM play blocked:', e));
            }

            function stopColoringBgm() {
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
                "honmoon-scene";

                        screen.innerHTML = `

                <!-- =============================================
                     BACKGROUND
                ============================================== -->

                <img
                    class="honmoon-bg"
                    src="${IMG.background}"
                    alt=""
                >


                <!-- =============================================
                     MOTION INTRO — HOSHI
                ============================================== -->

                <div
                    class="honmoon-motion-layer"
                    id="honmoonMotionLayer"
                >

                    <img
                        class="honmoon-motion-hoshi"
                        id="honmoonMotionHoshi"
                        src="${IMG.hoshiRunning}"
                        alt=""
                    >


                    <img
                        class="honmoon-broken-emblem"
                        id="honmoonBrokenEmblem"
                        src="${IMG.emblemColored}"
                        alt=""
                    >


                    <div
                        class="honmoon-broken-piece"
                        id="honmoonBrokenPiece"
                    ></div>


                    <img
                        class="
                            honmoon-motion-mira
                            honmoon-runner
                        "
                        id="honmoonMotionMira"
                        src="${IMG.miraRunning}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     GAMEPLAY EMBLEM
                ============================================== -->

                <div
                    class="honmoon-game-layer"
                    id="honmoonGameLayer"
                >

                    <div
                        class="honmoon-emblem-wrap"
                        id="honmoonEmblemWrap"
                    >

                        <!-- повреждённая версия под раскраской -->

                        <img
                            class="honmoon-emblem-broken-base"
                            id="honmoonEmblemBrokenBase"
                            src="${IMG.emblemBroken}"
                            alt=""
                        >


                        <!-- цветные зоны -->

                        <div
                            class="honmoon-color-zones"
                            id="honmoonColorZones"
                        ></div>


                        <!-- контур всегда лежит сверху -->

                        <img
                            class="honmoon-emblem-lineart"
                            id="honmoonEmblemLineart"
                            src="${IMG.emblemLineart}"
                            alt=""
                        >


                        <!-- сияние после завершения -->

                        <div
                            class="honmoon-restored-glow"
                            id="honmoonRestoredGlow"
                        ></div>

                    </div>


                    <!-- =========================================
                         COLORS
                    ========================================== -->

                    <div
                        class="honmoon-palette"
                        id="honmoonPalette"
                    ></div>


                    <!-- =========================================
                         READY BUTTON
                    ========================================== -->

                    <button
                        class="honmoon-ready-btn"
                        id="honmoonReadyBtn"
                        type="button"
                    >
                        Готово
                    </button>

                </div>


                <!-- =============================================
                     HUD
                ============================================== -->

                <div
                    class="honmoon-topbar"
                    id="honmoonTopbar"
                >

                    <div
                        class="honmoon-subtitle"
                        id="honmoonSubtitle"
                    ></div>


                    <div
                        class="honmoon-star-hud-mount"
                        id="honmoonStarHudMount"
                    ></div>

                </div>


                <!-- =============================================
                     SPEAKERS
                ============================================== -->

                <img
                    class="
                        honmoon-speaker
                        honmoon-speaker-rumi
                        honmoon-speaker-left
                    "
                    id="honmoonRumi"
                    src="${IMG.rumi}"
                    alt=""
                >


                <img
                    class="
                        honmoon-speaker
                        honmoon-speaker-mira
                        honmoon-speaker-right
                    "
                    id="honmoonMira"
                    src="${IMG.mira}"
                    alt=""
                >


                <img
                    class="
                        honmoon-speaker
                        honmoon-speaker-zoey
                        honmoon-speaker-right
                    "
                    id="honmoonZoey"
                    src="${IMG.zoey}"
                    alt=""
                >


                <!-- =============================================
                     STAR 3
                ============================================== -->

                <button
                    class="honmoon-third-star"
                    id="honmoonThirdStar"
                    type="button"
                    aria-label="Забрать третью звезду"
                >

                    <img
                        src="${IMG.star}"
                        alt=""
                    >

                </button>


                <!-- =============================================
                     HOSHI ENDING
                ============================================== -->

                <div
                    class="honmoon-hoshi-ending"
                    id="honmoonHoshiEnding"
                >

                    <img
                        class="honmoon-ending-hoshi"
                        id="honmoonEndingHoshi"
                        src="${IMG.hoshiPeek}"
                        alt=""
                    >

                </div>

            `;


            root.appendChild(
                screen
            );


            /* =====================================================
               ELEMENTS
            ===================================================== */

            const motionLayer =
                screen.querySelector(
                    "#honmoonMotionLayer"
                );


            const motionHoshi =
                screen.querySelector(
                    "#honmoonMotionHoshi"
                );


            const brokenEmblem =
                screen.querySelector(
                    "#honmoonBrokenEmblem"
                );


            const brokenPiece =
                screen.querySelector(
                    "#honmoonBrokenPiece"
                );


            const motionMira =
                screen.querySelector(
                    "#honmoonMotionMira"
                );


            const gameLayer =
                screen.querySelector(
                    "#honmoonGameLayer"
                );


            const emblemWrap =
                screen.querySelector(
                    "#honmoonEmblemWrap"
                );


            const emblemBrokenBase =
                screen.querySelector(
                    "#honmoonEmblemBrokenBase"
                );


            const colorZonesLayer =
                screen.querySelector(
                    "#honmoonColorZones"
                );


            const emblemLineart =
                screen.querySelector(
                    "#honmoonEmblemLineart"
                );


            const restoredGlow =
                screen.querySelector(
                    "#honmoonRestoredGlow"
                );


            const palette =
                screen.querySelector(
                    "#honmoonPalette"
                );


            const readyBtn =
                screen.querySelector(
                    "#honmoonReadyBtn"
                );


            const topbar =
                screen.querySelector(
                    "#honmoonTopbar"
                );


            const subtitle =
                screen.querySelector(
                    "#honmoonSubtitle"
                );


            const rumi =
                screen.querySelector(
                    "#honmoonRumi"
                );


            const mira =
                screen.querySelector(
                    "#honmoonMira"
                );


            const zoey =
                screen.querySelector(
                    "#honmoonZoey"
                );


            const speakers = {

                rumi,
                mira,
                zoey

            };


            const starHudMount =
                screen.querySelector(
                    "#honmoonStarHudMount"
                );


            const starHud =
                createStarHud(
                    2
                );


            starHudMount.appendChild(
                starHud
            );


            const thirdStar =
                screen.querySelector(
                    "#honmoonThirdStar"
                );


            const hoshiEnding =
                screen.querySelector(
                    "#honmoonHoshiEnding"
                );


            const endingHoshi =
                screen.querySelector(
                    "#honmoonEndingHoshi"
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
                duration,
                easing = "linear"
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
                        /* =====================================================
               CREATE COLOR PALETTE
            ===================================================== */

            const colorButtons =
                COLORS.map(
                    color => {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "honmoon-color-btn";


                        button.dataset.colorId =
                            color.id;


                        button.setAttribute(
                            "aria-label",
                            color.label
                        );


                        button.style.setProperty(
                            "--color-value",
                            color.value
                        );


                        button.innerHTML = `

                            <span
                                class="honmoon-color-dot"
                            ></span>

                        `;


                        palette.appendChild(
                            button
                        );


                        return button;

                    }
                );


            /* =====================================================
               DEFAULT COLOR
            ===================================================== */

            function updateSelectedColorUI() {

                colorButtons.forEach(
                    button => {

                        button.classList.toggle(
                            "selected",
                            button.dataset.colorId ===
                            selectedColor.id
                        );

                    }
                );

            }


            updateSelectedColorUI();


            /* =====================================================
               COLOR BUTTON CLICK
            ===================================================== */

            colorButtons.forEach(
                (
                    button,
                    index
                ) => {

                    button.addEventListener(
                        "click",
                        () => {

                            if (
                                !coloringEnabled ||
                                finished
                            ) {

                                return;

                            }


                            selectedColor =
                                COLORS[
                                    index
                                ];


                            updateSelectedColorUI();

                        }
                    );

                }
            );


            /* =====================================================
               CREATE COLORING ZONES
            ===================================================== */

            const zoneElements =
                COLOR_ZONES.map(
                    (
                        zone,
                        index
                    ) => {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "honmoon-color-zone";


                        button.dataset.zoneId =
                            zone.id;


                        button.dataset.zoneIndex =
                            index;


                        button.style.left =
                            zone.left;


                        button.style.top =
                            zone.top;


                        button.style.width =
                            zone.width;


                        button.style.height =
                            zone.height;


                        button.style.clipPath =
                            zone.clipPath;


                        button.setAttribute(
                            "aria-label",
                            `Раскрасить часть ${index + 1}`
                        );


                        colorZonesLayer.appendChild(
                            button
                        );


                        return button;

                    }
                );


            /* =====================================================
               UPDATE READY BUTTON
            ===================================================== */

            function updateReadyButton() {

                

                const allPainted =
                    paintedZones.size ===
                    COLOR_ZONES.length;


                readyBtn.classList.toggle(
                    "show",
                    allPainted
                );


                readyBtn.disabled =
                    !allPainted;

            }


            /* =====================================================
               PAINT ZONE
            ===================================================== */

            async function paintZone(
                element,
                zoneId
            ) {

                if (
                    !coloringEnabled ||
                    finished
                ) {

                    return;

                }


                const isFirstTime =
                    !paintedZones.has(
                        zoneId
                    );


                savedColors[
                    zoneId
                ] =
                    selectedColor.value;


                paintedZones.add(
                    zoneId
                );


                element.style.background =
                    selectedColor.value;


                element.classList.remove(
                    "paint-pop"
                );


                void element.offsetWidth;


                element.classList.add(
                    "painted",
                    "paint-pop"
                );


                audio.playSfx(
                    SFX.magic,
                    0.45
                );


                /* =========================
                   ПЕРВЫЙ ЦВЕТ
                ========================= */

                if (
                    isFirstTime &&
                    !firstColorDone
                ) {

                    firstColorDone =
                        true;


                    busy =
                        true;


                    await wait(
                        180
                    );


                    await speak(
                        "zoey",
                        "О, красиво!",
                        VOICE.zoeyPretty
                    );


                    busy =
                        false;

                }


                /* =========================
                   ПОСЛЕ НЕСКОЛЬКИХ ОБЛАСТЕЙ
                ========================= */

                if (
                    paintedZones.size >=
                        3 &&
                    !continueCommentDone
                ) {

                    continueCommentDone =
                        true;


                    busy =
                        true;


                    await speak(
                        "rumi",
                        "Продолжай.",
                        VOICE.rumiContinue
                    );


                    busy =
                        false;

                }


                updateReadyButton();

                // ---- АВТОМАТИЧЕСКИЙ ВОПРОС ПОСЛЕ ЗАКРАШИВАНИЯ ВСЕХ ЗОН ----
                if (paintedZones.size === COLOR_ZONES.length && !readyQuestionDone) {
                    readyQuestionDone = true;
                    busy = true;
                    await speak("rumi", "Готово?", VOICE.rumiReady);
                    busy = false;
                }

            }


            /* =====================================================
               ZONE CLICK
            ===================================================== */

            zoneElements.forEach(
                element => {

                    element.addEventListener(
                        "click",
                        async () => {

                            if (
                                busy ||
                                !coloringEnabled ||
                                finished
                            ) {

                                return;

                            }


                            const zoneId =
                                element.dataset
                                    .zoneId;


                            await paintZone(
                                element,
                                zoneId
                            );

                        }
                    );

                }
            );


            /* =====================================================
               READY BUTTON
            ===================================================== */

            readyBtn.addEventListener(
                "click",
                async () => {

                    if (
                        finished ||
                        busy ||
                        paintedZones.size !==
                            COLOR_ZONES.length
                    ) {

                        return;

                    }


                    busy =
                        true;


                    coloringEnabled =
                        false;



                    await finishColoring();

                }
            );

                        /* =====================================================
               MOTION INTRO
            ===================================================== */

            async function playHonmoonIntro() {

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
                    "62%";


                brokenEmblem.classList.add(
                    "show"
                );


                motionMira.style.left =
                    "-20%";

                motionMira.style.top =
                    "63%";


                await wait(
                    250
                );


                /* =========================
                   ХОШИ ВБЕГАЕТ К HONMOON
                ========================= */

                motionHoshi.classList.add(
                    "show"
                );


                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                await moveElement(
                    motionHoshi,
                    "56%",
                    "62%",
                    1200,
                    "linear"
                );


                /* =========================
                   НЕ ПОМЕЩАЕТСЯ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiDistracted
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-stuck"
                );


                audio.playSfx(
                    HOSHI_SOUND.curious,
                    0.8
                );


                await wait(
                    550
                );


                /* =========================
                   СМОТРИТ НА ПРОХОД
                ========================= */

                motionHoshi.classList.remove(
                    "honmoon-hoshi-stuck"
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-thinking"
                );


                audio.playSfx(
                    HOSHI_SOUND.wonder,
                    0.75
                );


                await wait(
                    650
                );


                /* =========================
                   РЕШЕНИЕ:
                   ТОЛКАТЬСЯ СИЛЬНЕЕ 😂
                ========================= */

                motionHoshi.classList.remove(
                    "honmoon-hoshi-thinking"
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-push"
                );


                await wait(
                    500
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-push-hard"
                );


                await wait(
                    650
                );


                /* =========================
                   ТРЕСК
                ========================= */

                audio.playSfx(
                    SFX.crack,
                    1
                );
                brokenEmblem.src = IMG.emblemBroken; 

                brokenEmblem.classList.add(
                    "cracked"
                );


                brokenPiece.classList.add(
                    "fall"
                );


                motionHoshi.classList.remove(
                    "honmoon-hoshi-push",
                    "honmoon-hoshi-push-hard"
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-shocked"
                );


                setMotionHoshiPose(
                    IMG.hoshiScared
                );


                await wait(
                    650
                );


                /* =========================
                   ХОШИ ПОНИМАЕТ,
                   ЧТО ЧТО-ТО СЛОМАЛ
                ========================= */

                motionHoshi.classList.remove(
                    "honmoon-hoshi-shocked"
                );


                setMotionHoshiPose(
                    IMG.hoshiRepairing
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-repair"
                );


                await wait(
                    550
                );


                /* =========================
                   ПРИЖАЛ КУСОК
                ========================= */

                brokenPiece.classList.remove(
                    "fall"
                );


                brokenPiece.classList.add(
                    "held"
                );


                await wait(
                    450
                );


                /* =========================
                   ОТПУСТИЛ —
                   КУСОК СНОВА ПАДАЕТ
                ========================= */

                brokenPiece.classList.remove(
                    "held"
                );


                brokenPiece.classList.add(
                    "fall-again"
                );


                await wait(
                    500
                );


                /* =========================
                   СНОВА ПРИЖАЛ 😂
                ========================= */

                brokenPiece.classList.remove(
                    "fall-again"
                );


                brokenPiece.classList.add(
                    "held"
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-panicking"
                );


                await wait(
                    500
                );


                /* =========================
                   МИРА ПРИБЛИЖАЕТСЯ
                ========================= */

                motionMira.classList.add(
                    "show"
                );


                moveElement(
                    motionMira,
                    "8%",
                    "63%",
                    850,
                    "linear"
                );


                await wait(
                    550
                );


                setSubtitle(
                    "Хоши!"
                );


                motionMira.classList.add(
                    "character-speaking"
                );


                await audio.playVoice(
                    VOICE.miraYell,
                    VOLUME.mira
                );


                motionMira.classList.remove(
                    "character-speaking"
                );


                setSubtitle(
                    ""
                );


                /* =========================
                   ХОШИ ПУГАЕТСЯ
                ========================= */

                audio.playSfx(
                    HOSHI_SOUND.scared,
                    0.95
                );


                setMotionHoshiPose(
                    IMG.hoshiScared
                );


                motionHoshi.classList.remove(
                    "honmoon-hoshi-repair",
                    "honmoon-hoshi-panicking"
                );


                motionHoshi.classList.add(
                    "honmoon-hoshi-jump"
                );


                brokenPiece.classList.remove(
                    "held"
                );


                brokenPiece.classList.add(
                    "fall-final"
                );


                await wait(
                    350
                );


                /* =========================
                   УБЕГАЕТ
                ========================= */

                setMotionHoshiPose(
                    IMG.hoshiRunning
                );


                motionHoshi.classList.remove(
                    "honmoon-hoshi-jump"
                );


                await moveElement(
                    motionHoshi,
                    "112%",
                    "61%",
                    950,
                    "linear"
                );


                await wait(
                    250
                );


                motionHoshi.classList.remove(
                    "show"
                );


                motionMira.classList.remove(
                    "show"
                );


                /* =========================
                   ЗАКАНЧИВАЕМ MOTION
                ========================= */

                await wait(
                    350
                );


                motionLayer.classList.add(
                    "finished"
                );


                await wait(
                    350
                );


                motionLayer.style.display =
                    "none";

            }


            /* =====================================================
               DIALOGUE BEFORE COLORING
            ===================================================== */

            async function playColoringIntroDialogue() {

                hideSpeakers();


                setSubtitle(
                    ""
                );


                await speak(
                    "zoey",
                    "Ой...",
                    VOICE.zoeyOops
                );


                await speak(
                    "mira",
                    "Он сломал Honmoon.",
                    VOICE.miraBroken
                );


                await speak(
                    "rumi",
                    "Он пытался его починить.",
                    VOICE.rumiTriedRepair
                );


                await speak(
                    "mira",
                    "Очень успешно.",
                    VOICE.miraSuccessful
                );


                await speak(
                    "rumi",
                    "Эма, попробуем мы?",
                    VOICE.rumiTry
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );

            }


            /* =====================================================
               START COLORING
            ===================================================== */

            async function startColoring() {

                gameLayer.classList.add(
                    "show"
                );


                await wait(
                    300
                );


                await speak(
                    "rumi",
                    "Выбери цвет и нажимай на части Honmoon.",
                    VOICE.rumiInstruction
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                coloringEnabled =
                    true;
                    


                busy =
                    false;


                updateSelectedColorUI();


                updateReadyButton();

                startColoringBgm();

            }

                        /* =====================================================
               FINISH COLORING
            ===================================================== */

            async function finishColoring() {

                finished = true;


                coloringEnabled = false;


                readyBtn.classList.remove("show");
                // ---- ПЛАВНОЕ ЗАТУХАНИЕ МУЗЫКИ ----
                if (bgmAudio) {
                    const startVolume = bgmAudio.volume;
                    const fadeDuration = 1200;   // 1.2 секунды
                    const stepTime = 50;         // обновление каждые 50 мс
                    const steps = fadeDuration / stepTime;
                    const volumeStep = startVolume / steps;
                    let currentStep = 0;
                    const interval = setInterval(() => {
                        currentStep++;
                        if (currentStep >= steps) {
                            clearInterval(interval);
                            bgmAudio.volume = 0;
                            stopColoringBgm();   // полностью останавливаем и очищаем
                            return;
                        }
                        bgmAudio.volume = Math.max(0, startVolume - volumeStep * currentStep);
                    }, stepTime);
                }

                hideSpeakers();

                setSubtitle(
                    ""
                );


                /* =========================
                   HONMOON НАЧИНАЕТ СИЯТЬ
                ========================= */

                emblemWrap.classList.add(
                    "restored"
                );


                restoredGlow.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.9
                );


                await wait(
                    700
                );


                /* =========================
                   РЕПЛИКИ
                ========================= */

                await speak(
                    "rumi",
                    "Получилось.",
                    VOICE.rumiWorked
                );


                await speak(
                    "zoey",
                    "Наш теперь так не выглядит.",
                    VOICE.zoeyDifferent
                );


                await speak(
                    "mira",
                    "Наш скучный.",
                    VOICE.miraBoring
                );


                await speak(
                    "rumi",
                    "Оставим этот.",
                    VOICE.rumiKeep
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ПОЯВЛЯЕТСЯ ЗВЕЗДА №3
                ========================= */

                thirdStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    1
                );


                await wait(
                    450
                );


                thirdStar.classList.add(
                    "ready"
                );


                busy =
                    false;

            }


            /* =====================================================
               STAR 3 CLICK
            ===================================================== */

            thirdStar.addEventListener(
                "click",
                async () => {

                    if (
                        busy ||
                        !finished ||
                        !thirdStar.classList.contains(
                            "ready"
                        )
                    ) {

                        return;

                    }


                    busy =
                        true;


                    thirdStar.classList.remove(
                        "ready"
                    );


                    thirdStar.classList.add(
                        "collect"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.95
                    );


                    await wait(
                        500
                    );


                    /* =========================
                       HUD — ТРЕТЬЯ ЗВЕЗДА
                    ========================= */

                    updateStarHud(
                        starHud,
                        3
                    );


                    game.setStarsCollected(
                        3
                    );


                    thirdStar.classList.remove(
                        "show"
                    );


                    thirdStar.classList.add(
                        "hidden"
                    );


                    await wait(
                        350
                    );


                    /* =========================
                       ХОШИ ВЫГЛЯДЫВАЕТ
                    ========================= */

                    await playHoshiEnding();

                }
            );


            /* =====================================================
               HOSHI ENDING
            ===================================================== */

            async function playHoshiEnding() {

                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ВЫГЛЯДЫВАЕТ
                ========================= */

                endingHoshi.src =
                    IMG.hoshiPeek;


                hoshiEnding.classList.add(
                    "show"
                );


                await wait(
                    700
                );


                /* =========================
                   ПОДХОДИТ ПОБЛИЖЕ
                ========================= */

                endingHoshi.src =
                    IMG.hoshiWonder;


                hoshiEnding.classList.add(
                    "come-closer"
                );


                audio.playSfx(
                    HOSHI_SOUND.wonder,
                    0.75
                );


                await wait(
                    700
                );


                /* =========================
                   ТРОГАЕТ HONMOON
                ========================= */

                endingHoshi.src =
                    IMG.hoshiCurious;


                hoshiEnding.classList.add(
                    "touch"
                );


                audio.playSfx(
                    SFX.magic,
                    0.45
                );


                await wait(
                    550
                );


                restoredGlow.classList.add(
                    "pulse"
                );


                await wait(
                    350
                );


                /* =========================
                   ЕМУ НРАВИТСЯ
                ========================= */

                endingHoshi.src =
                    IMG.hoshiHappy;


                audio.playSfx(
                    HOSHI_SOUND.softHappy,
                    0.8
                );


                hoshiEnding.classList.add(
                    "happy"
                );


                await wait(
                    850
                );


                /* =========================
                   МИРА ЗАМЕЧАЕТ
                ========================= */

                await speak(
                    "mira",
                    "Хоши.",
                    VOICE.miraHoshi
                );


                /* =========================
                   ХОШИ ВСПОМИНАЕТ,
                   ЧТО ЕГО ЛОВЯТ 😂
                ========================= */

                endingHoshi.src =
                    IMG.hoshiScared;


                hoshiEnding.classList.remove(
                    "happy"
                );


                hoshiEnding.classList.add(
                    "startled"
                );


                audio.playSfx(
                    HOSHI_SOUND.scared,
                    0.95
                );


                await wait(
                    350
                );


                /* =========================
                   И СРАЗУ СНОВА 😈
                ========================= */

                endingHoshi.src =
                    IMG.hoshiMischief;


                await wait(
                    180
                );


                hoshiEnding.classList.add(
                    "run-away"
                );


                await wait(
                    650
                );


                hoshiEnding.classList.remove(
                    "show"
                );


                /* =========================
                   ФИНАЛЬНЫЕ РЕПЛИКИ
                ========================= */

                await speak(
                    "zoey",
                    "Мне кажется, ему понравилось.",
                    VOICE.zoeyLiked
                );


                await speak(
                    "mira",
                    "Мне кажется, у него наши четыре звезды.",
                    VOICE.miraFourStars
                );


                await speak(
                    "rumi",
                    "Тогда идём.",
                    VOICE.rumiLetsGo
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                await wait(
                    500
                );

                stopColoringBgm();

                /* =========================
                   ПЕРЕХОД В LAIR
                ========================= */

                game.showScene(
                    "lair"
                );

            }


            /* =====================================================
               START SCENE
            ===================================================== */

            await wait(
                250
            );


            await playHonmoonIntro();


            await wait(
                350
            );


            await playColoringIntroDialogue();


            await wait(
                250
            );


            await startColoring();

        }

    };

}