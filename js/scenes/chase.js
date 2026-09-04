import {
    createStarHud,
    updateStarHud
} from "../star-hud.js";


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    /* =========================
       MAP
    ========================= */

    map:
        "./assets/images/chase_map_bg.png",


    /* =========================
       COMEDY DEAD ENDS
    ========================= */

    bathroom:
        "./assets/images/chase_bathroom_bg.png",

    kitchen:
        "./assets/images/chase_kitchen_bg.png",

    mirror:
        "./assets/images/chase_mirror_bg.png",

    bathDuck:
        "./assets/images/bath_demon_duck.png",


    /* =========================
       ARROWS
    ========================= */

    arrowUp:
        "./assets/images/ui_arrow_up.png",

    arrowDown:
        "./assets/images/ui_arrow_down.png",

    arrowLeft:
        "./assets/images/ui_arrow_left.png",

    arrowRight:
        "./assets/images/ui_arrow_right.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       RUMI
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    rumiRunning:
        "./assets/images/rumi_running.png",

    rumiCatchStar:
        "./assets/images/rumi_catch_star.png",


    /* =========================
       MIRA
    ========================= */

    mira:
        "./assets/images/mira_neutral.png",

    miraAnnoyed:
        "./assets/images/mira_annoyed.png",


    /* =========================
       ZOEY
    ========================= */

    zoey:
        "./assets/images/zoey_neutral.png",

    zoeyExcited:
        "./assets/images/zoey_excited.png",


    /* =========================
       HOSHI
    ========================= */

    hoshiRunning:
        "./assets/images/hoshi_running_carry.png",

    hoshiFridge:
        "./assets/images/hoshi_fridge.png",
        
    hoshiWonder:
        "./assets/images/hoshi_wonder.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiShocked:
        "./assets/images/hoshi_shocked.png",

    hoshiScared:
        "./assets/images/hoshi_scared.png",

    hoshiJump:
        "./assets/images/hoshi_jump.png",

    hoshiSad:
        "./assets/images/hoshi_sad_quiet.png",

    hoshiHugStar:
        "./assets/images/hoshi_hug_star.png"

    

};


/* =========================================================
   VOICES
========================================================= */

const VOICE = {

    /* =========================
       INTRO
    ========================= */

    rumiChoose:
        "./assets/audio/s07_rumi_01_choose.mp3",

    rumiArrows:
        "./assets/audio/s07_rumi_02_arrows.mp3",

    zoeyAlmost:
        "./assets/audio/s07_zoey_01_almost.mp3",

    zoeyWhere:
        "./assets/audio/s07_zoey_02_where.mp3",

    rumiThere:
        "./assets/audio/s07_rumi_03_there.mp3",


    /* =========================
       BATHROOM
    ========================= */

    zoeyOops:
        "./assets/audio/s07_zoey_03_oops.mp3",

    miraNotHere:
        "./assets/audio/s07_mira_01_not_here.mp3",

    zoeySorry:
        "./assets/audio/s07_zoey_04_sorry.mp3",


    /* =========================
       KITCHEN
    ========================= */

    rumiGotYou:
        "./assets/audio/s07_rumi_04_got_you.mp3",

    miraSeriously:
        "./assets/audio/s07_mira_02_seriously.mp3",

    zoeyHungry:
        "./assets/audio/s07_zoey_05_hungry.mp3",


    /* =========================
       MIRROR
    ========================= */

    zoeyAdmiring:
        "./assets/audio/s07_zoey_07_admiring.mp3",

    miraNoTime:
        "./assets/audio/s07_mira_03_no_time.mp3",

    zoeyRumi:
        "./assets/audio/s07_zoey_06_rumi.mp3",


    /* =========================
       STAR 6
    ========================= */

    miraDontEven:
        "./assets/audio/s07_mira_04_dont_even.mp3",

    zoeyDroppedStar:
        "./assets/audio/s07_zoey_08_dropped_star.mp3",

    rumiSix:
        "./assets/audio/s07_rumi_05_six.mp3",

    zoeyOneLeft:
        "./assets/audio/s07_zoey_09_one_left.mp3",

    zoeyWhyHold:
        "./assets/audio/s07_zoey_10_why_hold_it.mp3",

    miraThief:
        "./assets/audio/s07_mira_05_thief.mp3",

    rumiDontKnow:
        "./assets/audio/s07_rumi_06_dont_know.mp3",

    rumiManyThings:
        "./assets/audio/s07_rumi_07_many_things.mp3",

    rumiOnlyStars:
        "./assets/audio/s07_rumi_08_only_stars.mp3"

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

    giggle:
        "./assets/audio/hoshi_giggle_short.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    move:
        "./assets/audio/magic_zap.mp3",

    sparkle:
        "./assets/audio/star_appear.mp3",

    collect:
        "./assets/audio/star_collect.mp3",
    chaseBgm: "./assets/audio/chase_bgm2.mp3"

};


/* =========================================================
   CHARACTER VOLUME
========================================================= */

const VOLUME = {

    rumi: 0.82,

    mira: 1,

    zoey: 0.82

};


/* =========================================================
   MAP NODES

   ВАЖНО:

   Координаты — проценты относительно НОВОГО chase_map_bg.png.

   x = положение слева
   y = положение сверху

   Они специально привязаны к площадкам,
   которые уже нарисованы на новом фоне.
========================================================= */

const MAP_NODES = {

    /* =====================================================
       0 — СТАРТ

       Верхняя левая площадка перед дверью.
    ===================================================== */

    start: {

        x: 18,

        y: 31,

        connections: {

            right:
                "leftCenter",

            down:
                "bathroom"

        }

    },


    /* =====================================================
       1 — ЛЕВАЯ ЦЕНТРАЛЬНАЯ ПЛОЩАДКА
    ===================================================== */

    leftCenter: {

        x: 34,

        y: 49,

        connections: {

            left:
                "start",

            right:
                "lowerCenter",

            up:
                "upperCenter"

        }

    },


    /* =====================================================
       2 — НИЖНЯЯ ЦЕНТРАЛЬНАЯ ПЛОЩАДКА
    ===================================================== */

    lowerCenter: {

        x: 55,

        y: 67,

        connections: {


            left:
                "kitchen",

            up:
                "rightCenter"

        }

    },


    /* =====================================================
       3 — ПРАВАЯ ЦЕНТРАЛЬНАЯ ПЛОЩАДКА
    ===================================================== */

    rightCenter: {

        x: 68,

        y: 48,

        connections: {

            

            right:
                "mirror",

            up:
                "finalDoor"

        }

    },


    /* =====================================================
       4 — ВЕРХНЯЯ ЦЕНТРАЛЬНАЯ ПЛОЩАДКА
    ===================================================== */

    upperCenter: {

        x: 54,

        y: 31,

        connections: {

            left:
                "leftCenter",

            down:
                "rightCenter",

            right:
                "finalDoor"

        }

    },


    /* =====================================================
       5 — ФИНАЛЬНАЯ ПЛОЩАДКА

       Перед сияющей дверью справа сверху.
    ===================================================== */

    finalDoor: {

        x: 86,

        y: 30,

        connections: {

            left:
                "rightCenter"

        },

        final:
            true

    },


    /* =====================================================
       COMEDY DEAD END — BATHROOM

       Это НЕ физическая точка на карте.

       При входе открываем отдельный
       chase_bathroom_bg.png,
       потом возвращаемся в START.
    ===================================================== */

    bathroom: {

        deadEnd:
            "bathroom",

        returnTo:
            "start"

    },


    /* =====================================================
       COMEDY DEAD END — KITCHEN
    ===================================================== */

    kitchen: {

        deadEnd:
            "kitchen",

        returnTo:
            "lowerCenter"

    },


    /* =====================================================
       COMEDY DEAD END — MIRROR
    ===================================================== */

    mirror: {

        deadEnd:
            "mirror",

        returnTo:
            "rightCenter"

    }

};


/* =========================================================
   CREATE CHASE SCENE
========================================================= */

export function createChaseScene({
    game,
    audio
}) {

    return {

        async mount(root) {

            /* =====================================================
               STATE
            ===================================================== */

            let currentNode = "start";

            let busy = true;

            let gameplayEnabled = false;

            let zoeyMidRepliesDone = false;

            let finished = false;

            let bathroomVisited = false;

            let kitchenVisited = false;

            let mirrorVisited = false;

            // ---- Фоновая музыка для погони ----
            let bgmAudio = null;

            function startChaseBgm() {
                bgmAudio = new Audio(SFX.chaseBgm);
                bgmAudio.loop = true;
                bgmAudio.volume = 0.09;   // тихо, чтобы не перекрывать голоса
                bgmAudio.play().catch(e => console.warn('BGM play blocked:', e));
            }

            function stopChaseBgm() {
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
                "chase-scene";


            screen.innerHTML = `

                <!-- =============================================
                     MAIN MAP
                ============================================== -->

                <div
                    class="chase-map-layer"
                    id="chaseMapLayer"
                >

                    <img
                        class="chase-map-bg"
                        id="chaseMapBg"
                        src="${IMG.map}"
                        alt=""
                    >


                    <!-- =========================================
                         HOSHI AHEAD ON THE MAP
                    ========================================== -->

                    <img
                        class="chase-map-hoshi"
                        id="chaseMapHoshi"
                        src="${IMG.hoshiRunning}"
                        alt=""
                    >


                    <!-- =========================================
                         RUMI — PLAYER
                    ========================================== -->

                    <img
                        class="chase-map-rumi"
                        id="chaseMapRumi"
                        src="${IMG.rumiRunning}"
                        alt=""
                    >


                    <!-- =========================================
                         MOVEMENT ARROWS
                    ========================================== -->

                    <div
                        class="chase-controls"
                        id="chaseControls"
                    >

                        <button
                            class="
                                chase-arrow
                                chase-arrow-up
                            "
                            id="chaseArrowUp"
                            type="button"
                            data-direction="up"
                            aria-label="Вверх"
                        >
                            <img
                                src="${IMG.arrowUp}"
                                alt=""
                            >
                        </button>


                        <button
                            class="
                                chase-arrow
                                chase-arrow-left
                            "
                            id="chaseArrowLeft"
                            type="button"
                            data-direction="left"
                            aria-label="Влево"
                        >
                            <img
                                src="${IMG.arrowLeft}"
                                alt=""
                            >
                        </button>


                        <button
                            class="
                                chase-arrow
                                chase-arrow-right
                            "
                            id="chaseArrowRight"
                            type="button"
                            data-direction="right"
                            aria-label="Вправо"
                        >
                            <img
                                src="${IMG.arrowRight}"
                                alt=""
                            >
                        </button>


                        <button
                            class="
                                chase-arrow
                                chase-arrow-down
                            "
                            id="chaseArrowDown"
                            type="button"
                            data-direction="down"
                            aria-label="Вниз"
                        >
                            <img
                                src="${IMG.arrowDown}"
                                alt=""
                            >
                        </button>

                    </div>

                </div>


                <!-- =============================================
                     DEAD-END ROOM

                     Сюда временно подставляется:
                     bathroom / kitchen / mirror.
                ============================================== -->

                <div
                    class="chase-room-layer"
                    id="chaseRoomLayer"
                >

                    <img
                        class="chase-room-bg"
                        id="chaseRoomBg"
                        src=""
                        alt=""
                    >


                    <img
                        class="chase-room-hoshi"
                        id="chaseRoomHoshi"
                        src="${IMG.hoshiMischief}"
                        alt=""
                    >


                    <img
                        class="chase-bath-duck"
                        id="chaseBathDuck"
                        src="${IMG.bathDuck}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     SIXTH STAR
                ============================================== -->

                <button
                    class="chase-sixth-star"
                    id="chaseSixthStar"
                    type="button"
                    aria-label="Забрать шестую звезду"
                >

                    <img
                        src="${IMG.star}"
                        alt=""
                    >

                </button>


                <!-- =============================================
                     SPEAKERS
                ============================================== -->

                <img
                    class="
                        chase-speaker
                        chase-speaker-rumi
                    "
                    id="chaseRumi"
                    src="${IMG.rumi}"
                    alt=""
                >


                <img
                    class="
                        chase-speaker
                        chase-speaker-mira
                    "
                    id="chaseMira"
                    src="${IMG.mira}"
                    alt=""
                >


                <img
                    class="
                        chase-speaker
                        chase-speaker-zoey
                    "
                    id="chaseZoey"
                    src="${IMG.zoey}"
                    alt=""
                >


                <!-- =============================================
                     STAR HUD
                ============================================== -->

                <div
                    class="chase-star-hud"
                    id="chaseStarHud"
                ></div>


                <!-- =============================================
                     SUBTITLE
                ============================================== -->

                <div
                    class="chase-subtitle"
                    id="chaseSubtitle"
                ></div>

            `;


            root.appendChild(
                screen
            );

            startChaseBgm();
                        /* =====================================================
               ELEMENTS
            ===================================================== */

            const mapLayer =
                screen.querySelector(
                    "#chaseMapLayer"
                );


            const mapRumi =
                screen.querySelector(
                    "#chaseMapRumi"
                );


            const mapHoshi =
                screen.querySelector(
                    "#chaseMapHoshi"
                );


            const controls =
                screen.querySelector(
                    "#chaseControls"
                );


            const arrowUp =
                screen.querySelector(
                    "#chaseArrowUp"
                );


            const arrowDown =
                screen.querySelector(
                    "#chaseArrowDown"
                );


            const arrowLeft =
                screen.querySelector(
                    "#chaseArrowLeft"
                );


            const arrowRight =
                screen.querySelector(
                    "#chaseArrowRight"
                );


            const roomLayer =
                screen.querySelector(
                    "#chaseRoomLayer"
                );


            const roomBg =
                screen.querySelector(
                    "#chaseRoomBg"
                );


            const roomHoshi =
                screen.querySelector(
                    "#chaseRoomHoshi"
                );


            const bathDuck =
                screen.querySelector(
                    "#chaseBathDuck"
                );


            const sixthStar =
                screen.querySelector(
                    "#chaseSixthStar"
                );


            const rumi =
                screen.querySelector(
                    "#chaseRumi"
                );


            const mira =
                screen.querySelector(
                    "#chaseMira"
                );


            const zoey =
                screen.querySelector(
                    "#chaseZoey"
                );


            const subtitle =
                screen.querySelector(
                    "#chaseSubtitle"
                );


            const starHudHost =
                screen.querySelector(
                    "#chaseStarHud"
                );


            /* =====================================================
               SPEAKER MAP
            ===================================================== */

            const speakers = {

                rumi,

                mira,

                zoey

            };


            /* =====================================================
               ARROW MAP
            ===================================================== */

            const arrowButtons = {

                up:
                    arrowUp,

                down:
                    arrowDown,

                left:
                    arrowLeft,

                right:
                    arrowRight

            };


            /* =====================================================
               STAR HUD

               В начале chase уже собрано 5 звёзд.
            ===================================================== */

            const starHud =
                createStarHud(
                    5
                );


            starHudHost.appendChild(
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


            /* =====================================================
               SUBTITLE
            ===================================================== */

            function setSubtitle(
                text
            ) {

                subtitle.textContent =
                    text || "";


                subtitle.classList.toggle(
                    "show",
                    Boolean(text)
                );

            }


            /* =====================================================
               HIDE SPEAKERS
            ===================================================== */

            function hideSpeakers() {

                Object.values(
                    speakers
                ).forEach(
                    character => {

                        character.classList.remove(
                            "show",
                            "speaking"
                        );

                    }
                );

            }


            /* =====================================================
               SET SPEAKER POSE
            ===================================================== */

            function setSpeakerPose(
                characterName,
                image
            ) {

                const character =
                    speakers[
                        characterName
                    ];


                if (
                    !character
                ) {

                    return;

                }


                character.src =
                    image;

            }


            /* =====================================================
               SPEAK
            ===================================================== */

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


                if (
                    character
                ) {

                    character.classList.add(
                        "show"
                    );


                    await wait(
                        140
                    );


                    character.classList.add(
                        "speaking"
                    );

                }


                const volume =
                    VOLUME[
                        characterName
                    ] ?? 0.82;


                if (
                    path
                ) {

                    await audio.playVoice(
                        path,
                        volume
                    );

                } else {

                    await wait(
                        900
                    );

                }


                if (
                    character
                ) {

                    character.classList.remove(
                        "speaking"
                    );

                }


                await wait(
                    80
                );

            }


            /* =====================================================
               HOSHI SOUND
            ===================================================== */

            function playHoshiSound(
                path,
                volume = 0.65
            ) {

                audio.playSfx(
                    path,
                    volume
                );

            }


            /* =====================================================
               POSITION ELEMENT ON MAP NODE
            ===================================================== */

            function positionElementOnNode(
                element,
                nodeName
            ) {

                const node =
                    MAP_NODES[
                        nodeName
                    ];


                if (
                    !node ||
                    node.deadEnd
                ) {

                    return;

                }


                element.style.left =
                    `${node.x}%`;


                element.style.top =
                    `${node.y}%`;

            }


            /* =====================================================
               POSITION RUMI
            ===================================================== */

            function setRumiNode(
                nodeName,
                instant = false
            ) {

                const node =
                    MAP_NODES[
                        nodeName
                    ];


                if (
                    !node ||
                    node.deadEnd
                ) {

                    return;

                }


                if (
                    instant
                ) {

                    mapRumi.classList.add(
                        "instant"
                    );

                }


                positionElementOnNode(
                    mapRumi,
                    nodeName
                );


                /*
                    Стрелки тоже двигаются
                    вместе с текущей площадкой.
                */

                controls.style.left =
                    `${node.x}%`;


                controls.style.top =
                    `${node.y}%`;


                if (
                    instant
                ) {

                    requestAnimationFrame(
                        () => {

                            mapRumi.classList.remove(
                                "instant"
                            );

                        }
                    );

                }

            }


            /* =====================================================
               HOSHI POSITION

               Хоши всегда находится немного впереди.

               Здесь мы НЕ делаем настоящего второго игрока.
               Он просто визуально показывает,
               куда идёт погоня.
            ===================================================== */

            function setHoshiAhead(
                nodeName
            ) {

                let targetNode =
                    null;


                switch (
                    nodeName
                ) {

                    case "start":

                        targetNode =
                            "leftCenter";

                        break;


                    case "leftCenter":

                        targetNode =
                            "upperCenter";

                        break;


                    case "lowerCenter":

                        targetNode =
                            "rightCenter";

                        break;


                    case "rightCenter":

                        targetNode =
                            "finalDoor";

                        break;


                    case "upperCenter":

                        targetNode =
                            "finalDoor";

                        break;


                    case "finalDoor":

                        targetNode =
                            "finalDoor";

                        break;

                }


                if (
                    !targetNode
                ) {

                    mapHoshi.classList.remove(
                        "show"
                    );

                    return;

                }


                const node =
                    MAP_NODES[
                        targetNode
                    ];


                if (
                    !node
                ) {

                    return;

                }


                mapHoshi.style.left =
                    `${node.x}%`;


                mapHoshi.style.top =
                    `${node.y}%`;


                mapHoshi.classList.add(
                    "show"
                );

            }


            /* =====================================================
               HIDE ALL ARROWS
            ===================================================== */

            function hideAllArrows() {

                Object.values(
                    arrowButtons
                ).forEach(
                    button => {

                        button.classList.remove(
                            "show"
                        );


                        button.disabled =
                            true;

                    }
                );

            }


            /* =====================================================
               SHOW AVAILABLE ARROWS
            ===================================================== */

            function showAvailableArrows() {

                hideAllArrows();


                if (
                    !gameplayEnabled ||
                    busy ||
                    finished
                ) {

                    return;

                }


                const node =
                    MAP_NODES[
                        currentNode
                    ];


                if (
                    !node ||
                    !node.connections
                ) {

                    return;

                }


                Object.entries(
                    node.connections
                ).forEach(
                    ([
                        direction,
                        targetNode
                    ]) => {

                        const button =
                            arrowButtons[
                                direction
                            ];


                        if (
                            !button ||
                            !targetNode
                        ) {

                            return;

                        }


                        button.disabled =
                            false;


                        button.classList.add(
                            "show"
                        );

                    }
                );

            }


            /* =====================================================
               SET CURRENT NODE

               Центральная функция карты.
            ===================================================== */

            function setCurrentNode(
                nodeName,
                instant = false
            ) {

                const node =
                    MAP_NODES[
                        nodeName
                    ];


                if (
                    !node ||
                    node.deadEnd
                ) {

                    return;

                }


                currentNode =
                    nodeName;


                setRumiNode(
                    nodeName,
                    instant
                );


                setHoshiAhead(
                    nodeName
                );


                showAvailableArrows();

            }


            /* =====================================================
               MAP VISIBILITY
            ===================================================== */

            function showMap() {

                roomLayer.classList.remove(
                    "show"
                );


                mapLayer.classList.add(
                    "show"
                );


                sixthStar.classList.remove(
                    "show"
                );

            }


            function hideMap() {

                mapLayer.classList.remove(
                    "show"
                );

            }


            /* =====================================================
               ROOM RESET
            ===================================================== */

            function resetRoom() {

                roomLayer.className =
                    "chase-room-layer";


                roomBg.src =
                    "";


                roomHoshi.src =
                    IMG.hoshiMischief;


                roomHoshi.className =
                    "chase-room-hoshi";


                bathDuck.classList.remove(
                    "show"
                );

            }


            /* =====================================================
               DISABLE GAMEPLAY TEMPORARILY
            ===================================================== */

            function lockGameplay() {

                busy =
                    true;


                hideAllArrows();

            }


            /* =====================================================
               ENABLE GAMEPLAY
            ===================================================== */

            function unlockGameplay() {

                busy =
                    false;


                gameplayEnabled =
                    true;


                showAvailableArrows();

            }


            /* =====================================================
               INITIAL MAP POSITION

               Пока стрелки скрыты:
               сначала будет вступительный диалог.
            ===================================================== */

            mapLayer.classList.add(
                "show"
            );


            setCurrentNode(
                "start",
                true
            );


            hideAllArrows();
                        /* =====================================================
               INTRO DIALOGUE
            ===================================================== */

            async function playIntroDialogue() {

                await wait(
                    300
                );


                setSpeakerPose(
                    "rumi",
                    IMG.rumi
                );


                await speak(
                    "rumi",
                    "Эма, выбирай, куда идти.",
                    VOICE.rumiChoose
                );


                await speak(
                    "rumi",
                    "Нажимай на стрелки.",
                    VOICE.rumiArrows
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                await wait(
                    250
                );


                unlockGameplay();

            }


            /* =====================================================
               MOVE TO NODE

               Один клик =
               один переход между площадками.
            ===================================================== */

            async function moveToNode(
                direction
            ) {

                if (
                    !gameplayEnabled ||
                    busy ||
                    finished
                ) {

                    return;

                }


                const current =
                    MAP_NODES[
                        currentNode
                    ];


                if (
                    !current ||
                    !current.connections
                ) {

                    return;

                }


                const targetName =
                    current.connections[
                        direction
                    ];


                if (
                    !targetName
                ) {

                    return;

                }


                const target =
                    MAP_NODES[
                        targetName
                    ];


                if (
                    !target
                ) {

                    return;

                }


                /* =================================================
                   ЕСЛИ ЭТО СМЕШНОЙ ТУПИК
                ================================================= */

                if (
                    target.deadEnd
                ) {

                    await enterDeadEnd(
                        target
                    );


                    return;

                }


                /* =================================================
                   ОБЫЧНОЕ ДВИЖЕНИЕ
                ================================================= */

                lockGameplay();


                mapRumi.classList.add(
                    "moving"
                );


                audio.playSfx(
                    SFX.move,
                    0.28
                );


                /*
                    Пока Руми бежит,
                    Хоши тоже "убегает" дальше.
                */

                mapHoshi.classList.add(
                    "running-away"
                );


                await wait(
                    120
                );


                /* =========================
                   ДВИГАЕМ РУМИ
                ========================= */

                currentNode =
                    targetName;


                setRumiNode(
                    targetName
                );


                await wait(
                    260
                );


                setHoshiAhead(
                    targetName
                );


                await wait(400);

                mapRumi.classList.remove("moving");
                mapHoshi.classList.remove("running-away");

                if (target.final) {
                    await reachFinalDoor();
                    return;
                }

                // Если попали на правый центральный узел и реплики ещё не звучали
                if (targetName === "rightCenter" && !zoeyMidRepliesDone) {
                    zoeyMidRepliesDone = true;
                    lockGameplay(); // блокируем на время диалога

                    setSpeakerPose("zoey", IMG.zoeyExcited);
                    await speak("zoey", "Мы почти его догнали!", VOICE.zoeyAlmost);
                    await speak("zoey", "Куда он побежал?", VOICE.zoeyWhere);
                    hideSpeakers();
                    setSubtitle("");

                    unlockGameplay(); // разблокируем
                }

                unlockGameplay();

            }


            /* =====================================================
               ENTER DEAD END
            ===================================================== */

            async function enterDeadEnd(
                node
            ) {

                lockGameplay();


                await wait(
                    100
                );


                hideMap();


                resetRoom();


                await wait(
                    220
                );


                /* =================================================
                   BATHROOM
                ================================================= */

                if (
                    node.deadEnd ===
                    "bathroom"
                ) {

                    await playBathroomDeadEnd();

                }


                /* =================================================
                   KITCHEN
                ================================================= */

                if (
                    node.deadEnd ===
                    "kitchen"
                ) {

                    await playKitchenDeadEnd();

                }


                /* =================================================
                   MIRROR
                ================================================= */

                if (
                    node.deadEnd ===
                    "mirror"
                ) {

                    await playMirrorDeadEnd();

                }


                /* =================================================
                   ВОЗВРАЩАЕМСЯ НА КАРТУ

                   Не штрафуем.
                   Просто возвращаем Руми
                   туда, откуда она свернула.
                ================================================= */

                resetRoom();


                roomLayer.classList.remove(
                    "show"
                );


                await wait(
                    180
                );


                showMap();


                setCurrentNode(
                    node.returnTo,
                    true
                );


                await wait(
                    350
                );


                unlockGameplay();

            }


            /* =====================================================
               BATHROOM 😂
            ===================================================== */

            async function playBathroomDeadEnd() {

                bathroomVisited =
                    true;


                roomBg.src =
                    IMG.bathroom;


                roomLayer.classList.add(
                    "bathroom"
                );


                roomLayer.classList.add("show");

                bathDuck.classList.add("show")

                await wait(750);


                setSpeakerPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "Ой.",
                    VOICE.zoeyOops
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Не сюда.",
                    VOICE.miraNotHere
                );


                setSpeakerPose(
                    "zoey",
                    IMG.zoey
                );


                await speak(
                    "zoey",
                    "Извини.",
                    VOICE.zoeySorry
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                await wait(
                    350
                );


                bathDuck.classList.remove(
                    "show"
                );


                roomLayer.classList.add(
                    "leave"
                );


                await wait(
                    450
                );

            }


            /* =====================================================
               KITCHEN 😂
            ===================================================== */

            async function playKitchenDeadEnd() {

                kitchenVisited =
                    true;


                roomBg.src =
                    IMG.kitchen;


                roomHoshi.src =
                    IMG.hoshiFridge;


                roomLayer.classList.add(
                    "kitchen"
                );


                roomLayer.classList.add(
                    "show"
                );


                roomHoshi.classList.add(
                    "show",
                    "at-fridge"
                );


                await wait(
                    600
                );


                /* =========================
                   РУМИ ДУМАЕТ,
                   ЧТО НАКОНЕЦ ПОЙМАЛИ
                ========================= */

                setSpeakerPose(
                    "rumi",
                    IMG.rumi
                );


                await speak(
                    "rumi",
                    "Ага!",
                    VOICE.rumiGotYou
                );


                /* =========================
                   ХОШИ...

                   ПРОСТО У ХОЛОДИЛЬНИКА 😂
                ========================= */

                await wait(
                    250
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Серьёзно?",
                    VOICE.miraSeriously
                );


                setSpeakerPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "Он проголодался.",
                    VOICE.zoeyHungry
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ХОШИ ВСПОМИНАЕТ,
                   ЧТО ЗА НИМ ГОНЯТСЯ
                ========================= */

                roomHoshi.src =
                    IMG.hoshiShocked;


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.55
                );


                roomHoshi.classList.add(
                    "startled"
                );


                await wait(
                    350
                );


                roomHoshi.src =
                    IMG.hoshiRunning;


                roomHoshi.classList.remove(
                    "at-fridge",
                    "startled"
                );


                roomHoshi.classList.add(
                    "run-away"
                );


                await wait(
                    650
                );


                roomLayer.classList.add(
                    "leave"
                );


                await wait(
                    400
                );

            }


            /* =====================================================
               MIRROR 😂
            ===================================================== */

            async function playMirrorDeadEnd() {

                mirrorVisited =
                    true;


                roomBg.src =
                    IMG.mirror;


                roomHoshi.src =
                    IMG.hoshiMischief;


                roomLayer.classList.add(
                    "mirror"
                );


                roomLayer.classList.add(
                    "show"
                );


                roomHoshi.classList.add(
                    "show",
                    "at-mirror"
                );


                await wait(
                    550
                );


                playHoshiSound(
                    HOSHI_SOUND.giggle,
                    0.35
                );


                /* =========================
                   ЗОИ 😂
                ========================= */

                setSpeakerPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "Он любуется собой.",
                    VOICE.zoeyAdmiring
                );


                /* =========================
                   МИРА 😑
                ========================= */

                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "У нас нет времени.",
                    VOICE.miraNoTime
                );


                /* =========================
                   ЗОИ ВИДИТ,
                   ЧТО РУМИ УЖЕ УХОДИТ 😂
                ========================= */

                setSpeakerPose(
                    "zoey",
                    IMG.zoey
                );


                await speak(
                    "zoey",
                    "Руми...",
                    VOICE.zoeyRumi
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ХОШИ ЗАМЕЧАЕТ ИХ
                ========================= */

                roomHoshi.src =
                    IMG.hoshiShocked;


                roomHoshi.classList.remove(
                    "at-mirror"
                );


                roomHoshi.classList.add(
                    "startled"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.45
                );


                await wait(
                    300
                );


                /* =========================
                   И СНОВА БЕЖИТ
                ========================= */

                roomHoshi.src =
                    IMG.hoshiRunning;


                roomHoshi.classList.remove(
                    "startled"
                );


                roomHoshi.classList.add(
                    "run-away"
                );


                await wait(
                    650
                );


                roomLayer.classList.add(
                    "leave"
                );


                await wait(
                    400
                );

            }


            /* =====================================================
               ARROW CLICK HANDLER
            ===================================================== */

            async function handleArrowClick(
                event
            ) {

                const button =
                    event.currentTarget;


                const direction =
                    button.dataset.direction;


                if (
                    !direction
                ) {

                    return;

                }


                await moveToNode(
                    direction
                );

            }


            /* =====================================================
               CONNECT ARROWS
            ===================================================== */

            Object.values(
                arrowButtons
            ).forEach(
                button => {

                    button.addEventListener(
                        "click",
                        handleArrowClick
                    );

                }
            );
                /* =====================================================
               FINAL DOOR — HOSHI DROPS STAR 6
            ===================================================== */

            async function reachFinalDoor() {

                lockGameplay();


                gameplayEnabled =
                    false;


                hideAllArrows();


                /* =========================
                   РУМИ У ДВЕРИ
                ========================= */

                setRumiNode(
                    "finalDoor"
                );


                mapHoshi.classList.add(
                    "final-position"
                );


                await wait(
                    500
                );


                /* =================================================
                   ХОШИ ОГЛЯДЫВАЕТСЯ

                   Он понимает, что дальше
                   бежать практически некуда.
                ================================================= */

                mapHoshi.src =
                    IMG.hoshiMischief;


                mapHoshi.classList.add(
                    "turn-around"
                );


                playHoshiSound(
                    HOSHI_SOUND.giggle,
                    0.4
                );


                await wait(
                    450
                );


                /* =================================================
                   МИРА:

                   "ДАЖЕ НЕ ДУМАЙ."
                ================================================= */

                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Даже не думай.",
                    VOICE.miraDontEven
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =================================================
                   ХОШИ:

                   😳
                ================================================= */

                mapHoshi.src =
                    IMG.hoshiShocked;


                mapHoshi.classList.remove(
                    "turn-around"
                );


                mapHoshi.classList.add(
                    "startled"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.55
                );


                await wait(
                    350
                );


                /* =================================================
                   ХОШИ ПРЫГАЕТ —
                   И ОДНА ЗВЕЗДА ВЫСКАЛЬЗЫВАЕТ
                ================================================= */

                mapHoshi.src =
                    IMG.hoshiJump;


                mapHoshi.classList.remove(
                    "startled"
                );


                mapHoshi.classList.add(
                    "jump"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.75
                );


                await wait(
                    250
                );


                /* =================================================
                   ПОКАЗЫВАЕМ ШЕСТУЮ ЗВЕЗДУ
                ================================================= */

                sixthStar.classList.add(
                    "show"
                );


                await wait(
                    300
                );


                sixthStar.classList.add(
                    "fallen"
                );


                await wait(
                    350
                );


                /* =================================================
                   ХОШИ ВИДИТ,
                   ЧТО УРОНИЛ ЕЁ
                ================================================= */

                mapHoshi.src =
                    IMG.hoshiScared;


                mapHoshi.classList.remove(
                    "jump"
                );


                mapHoshi.classList.add(
                    "see-star"
                );


                playHoshiSound(
                    HOSHI_SOUND.scared,
                    0.55
                );


                await wait(
                    350
                );


                /* =================================================
                   ЗОИ:

                   "ОН УРОНИЛ ЗВЕЗДУ!"
                ================================================= */

                setSpeakerPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "Он уронил звезду!",
                    VOICE.zoeyDroppedStar
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =================================================
                   ХОШИ ПЫТАЕТСЯ ВЕРНУТЬСЯ ЗА НЕЙ
                ================================================= */

                mapHoshi.src =
                    IMG.hoshiWonder;


                mapHoshi.classList.remove(
                    "see-star"
                );


                mapHoshi.classList.add(
                    "reach-back"
                );


                await wait(
                    250
                );


                /* =================================================
                   НО РУМИ БЛИЖЕ
                ================================================= */

                mapRumi.src =
                    IMG.rumiCatchStar;


                mapRumi.classList.add(
                    "catch-star"
                );


                await wait(
                    450
                );


                /* =================================================
                   ЗВЕЗДА ГОТОВА ДЛЯ КЛИКА ЭМЫ

                   Ничего автоматически не забираем.
                   Эма должна сама нажать.
                ================================================= */

                sixthStar.classList.add(
                    "ready"
                );


                busy =
                    false;

            }


            /* =====================================================
               SIXTH STAR CLICK
            ===================================================== */

            sixthStar.addEventListener(
                "click",
                async () => {

                    if (
                        busy ||
                        finished ||
                        !sixthStar.classList.contains(
                            "ready"
                        )
                    ) {

                        return;

                    }


                    busy =
                        true;


                    sixthStar.classList.remove(
                        "ready"
                    );


                    sixthStar.classList.add(
                        "collecting"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.9
                    );


                    await wait(
                        450
                    );


                    /* =================================================
                       HUD 5 → 6
                    ================================================= */

                    updateStarHud(
                        starHud,
                        6
                    );


                    if (
                        typeof game.setStarsCollected ===
                        "function"
                    ) {

                        game.setStarsCollected(
                            6
                        );

                    }


                    await wait(
                        300
                    );


                    sixthStar.classList.remove(
                        "show"
                    );


                    /* =================================================
                       РУМИ:

                       "ШЕСТЬ."
                    ================================================= */

                    setSpeakerPose(
                        "rumi",
                        IMG.rumi
                    );


                    await speak(
                        "rumi",
                        "Шесть.",
                        VOICE.rumiSix
                    );


                    /* =================================================
                       ЗОИ:

                       "ОСТАЛАСЬ ОДНА!"
                    ================================================= */

                    setSpeakerPose(
                        "zoey",
                        IMG.zoeyExcited
                    );


                    await speak(
                        "zoey",
                        "Осталась одна!",
                        VOICE.zoeyOneLeft
                    );


                    hideSpeakers();


                    setSubtitle(
                        ""
                    );


                    /* =================================================
                       ХОШИ УБЕГАЕТ ДАЛЬШЕ,
                       НО ОДНУ ЗВЕЗДУ
                       НЕ ОТПУСКАЕТ
                    ================================================= */

                    mapHoshi.src =
                        IMG.hoshiHugStar;


                    mapHoshi.classList.remove(
                        "reach-back"
                    );


                    mapHoshi.classList.add(
                        "hug-last-star"
                    );


                    await wait(
                        500
                    );


                    /* =================================================
                       ЗОИ ЗАМЕЧАЕТ:
                       ОН ПРЯМО ЦЕПЛЯЕТСЯ ЗА НЕЁ
                    ================================================= */

                    setSpeakerPose(
                        "zoey",
                        IMG.zoey
                    );


                    await speak(
                        "zoey",
                        "Почему он так за неё держится?",
                        VOICE.zoeyWhyHold
                    );


                    /* =================================================
                       МИРА 😑
                    ================================================= */

                    setSpeakerPose(
                        "mira",
                        IMG.miraAnnoyed
                    );


                    await speak(
                        "mira",
                        "Потому что он вор.",
                        VOICE.miraThief
                    );


                    /* =================================================
                       РУМИ НАЧИНАЕТ СОМНЕВАТЬСЯ
                    ================================================= */

                    setSpeakerPose(
                        "rumi",
                        IMG.rumi
                    );


                    await speak(
                        "rumi",
                        "Не знаю...",
                        VOICE.rumiDontKnow
                    );


                    await speak(
                        "rumi",
                        "В его логове были десятки вещей.",
                        VOICE.rumiManyThings
                    );


                    await speak(
                        "rumi",
                        "Но он ничего не прятал от нас, кроме звёзд.",
                        VOICE.rumiOnlyStars
                    );


                    hideSpeakers();


                    setSubtitle(
                        ""
                    );


                    await wait(
                        400
                    );


                    /* =================================================
                       ХОШИ УБЕГАЕТ С ПОСЛЕДНЕЙ ЗВЕЗДОЙ
                    ================================================= */

                    mapHoshi.src =
                        IMG.hoshiRunning;


                    mapHoshi.classList.remove(
                        "hug-last-star"
                    );


                    mapHoshi.classList.add(
                        "final-run-away"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.grumble,
                        0.3
                    );


                    await wait(
                        750
                    );


                    /* =================================================
                       РУМИ СНОВА ОБЫЧНАЯ
                    ================================================= */

                    mapRumi.src =
                        IMG.rumiRunning;


                    mapRumi.classList.remove(
                        "catch-star"
                    );


                    /* =================================================
                       FADE
                    ================================================= */

                    screen.classList.add("fade-out");


                    await wait(650);

                    finished = true;

                    stopChaseBgm();

                    game.showScene("quietHonmoon");

                }
            );


            /* =====================================================
               START CHASE
            ===================================================== */

            await wait(250);
            gameplayEnabled = true;
            busy = false;
            showAvailableArrows();

            await playIntroDialogue();

        }

    };

}