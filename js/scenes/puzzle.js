/* =========================================================
   SCENE 02 — PUZZLE
   3 columns × 2 rows
========================================================= */


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    full:
        "./assets/images/puzzle_ema_huntrix_full.png",

    frame:
        "./assets/images/puzzle_frame.png",


    /* =========================
       CHARACTERS
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    mira:
        "./assets/images/mira_neutral.png",

    zoey:
        "./assets/images/zoey_excited.png",


    /* =========================
       PUZZLE PIECES
    ========================= */

    pieces: [

        "./assets/images/puzzle_piece_01.png",

        "./assets/images/puzzle_piece_02.png",

        "./assets/images/puzzle_piece_03.png",

        "./assets/images/puzzle_piece_04.png",

        "./assets/images/puzzle_piece_05.png",

        "./assets/images/puzzle_piece_06.png"

    ]
};


/* =========================================================
   VOICES
========================================================= */

const VOICE = {

    broken:
        "./assets/audio/s02_rumi_01_broken.mp3",

    sixPieces:
        "./assets/audio/s02_zoey_01_six_pieces.mp3",

    weSee:
        "./assets/audio/s02_mira_01_we_see.mp3",

    checkingAgain:
        "./assets/audio/s02_zoey_02_checking_again.mp3",

    helpUs:
        "./assets/audio/s02_rumi_02_help_us.mp3",

    dragPiece:
        "./assets/audio/s02_rumi_03_drag_piece.mp3",

    tryIt:
        "./assets/audio/s02_rumi_04_try_it.mp3",

    wrongPlaceHint:
        "./assets/audio/s02_rumi_05_wrong_place_hint.mp3",

    idleHint:
        "./assets/audio/s02_rumi_06_idle_hint.mp3",

    gettingIt:
        "./assets/audio/s02_zoey_03_getting_it.mp3",

    oneLeft:
        "./assets/audio/s02_mira_02_one_left.mp3",

    emaWithUs:
        "./assets/audio/s02_zoey_05_ema_with_us.mp3",

    looksLikeIt:
        "./assets/audio/s02_mira_04_looks_like_it.mp3",

    yourAdventure:
        "./assets/audio/s02_rumi_07_your_adventure.mp3",

    star:
        "./assets/audio/s02_zoey_06_star.mp3",

    oneFound:
        "./assets/audio/s02_rumi_08_one_found.mp3",

    sixLeft:
        "./assets/audio/s02_rumi_09_six_left.mp3",

    hiddenInCity:
        "./assets/audio/s02_mira_05_hidden_in_city.mp3",

    orAteThem:
        "./assets/audio/s02_zoey_07_or_ate_them.mp3",

    doesntEatStars:
        "./assets/audio/s02_mira_06_doesnt_eat_stars.mp3",

    areYouSure:
        "./assets/audio/s02_zoey_08_are_you_sure.mp3",


    /*
        Хоши использует ОБЩИЙ банк звуков.
    */

    hoshiGiggleFar:
        "./assets/audio/hoshi_giggle_short.mp3",

    there:
        "./assets/audio/s02_zoey_09_there.mp3",

    followHim:
        "./assets/audio/s02_rumi_10_follow_him.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    pickup:
        "./assets/audio/puzzle_pickup.mp3",

    place:
        "./assets/audio/puzzle_place.mp3",

    back:
        "./assets/audio/puzzle_return.mp3",

    complete:
        "./assets/audio/puzzle_complete.mp3",

    starAppear:
        "./assets/audio/star_appear.mp3",

    starCollect:
        "./assets/audio/star_collect.mp3"

};


/* =========================================================
   CHARACTER VOICE VOLUMES
========================================================= */

/*
    У Миры исходная запись тише.

    Поэтому:
    Mira = максимум 1
    остальные девочки слегка приглушены.
*/

const CHARACTER_VOLUME = {

    rumi:
        0.82,

    mira:
        1,

    zoey:
        0.82

};


/* =========================================================
   FREE PIECE POSITIONS
========================================================= */

const PIECE_LAYOUT = [

    {
        left: "7%",
        top: "20%"
    },

    {
        left: "91%",
        top: "20%"
    },

    {
        left: "7%",
        top: "50%"
    },

    {
        left: "91%",
        top: "50%"
    },

    {
        left: "22%",
        top: "84%"
    },

    {
        left: "78%",
        top: "84%"
    }

];


/* =========================================================
   CREATE SCENE
========================================================= */

export function createPuzzleScene({
    game,
    audio
}) {

    return {

        async mount(root) {


            /* =====================================================
               STATE
            ===================================================== */

            let interactionEnabled =
                false;

            let wrongHintPlayed =
                false;

            let idleHintPlayed =
                false;

            let placedCount =
                0;

            let afterThirdPlayed =
                false;

            let afterFifthPlayed =
                false;

            let completed =
                false;

            let idleTimer =
                null;


            const placedMap =
                new Map();

            const CELL_SCALE = 0.75;             // уменьшение на 25% (0.75 = 75% от исходного)
            const CELL_ASPECT = 4 / 3;           // ширина / высота = 4/3 (т.е. высота = ширина * 3/4)


            /* =====================================================
               SCREEN
            ===================================================== */

            const screen =
                document.createElement(
                    "div"
                );


            screen.className =
                "puzzle-scene";


            screen.innerHTML = `

                <!-- =============================================
                     TOP BAR
                ============================================== -->

                <div
                    class="puzzle-topbar"
                >

                    <div
                        class="puzzle-subtitle"
                        id="puzzleSubtitle"
                    >
                    </div>

                    <div class="game-star-hud" id="starHud">
                    <img class="game-star-hud-panel" src="./assets/images/star_hud_panel.png" alt="">
                    <div class="game-star-hud-stars">
                        <img class="game-star-hud-star" data-star-index="0" src="" alt="">
                        <img class="game-star-hud-star" data-star-index="1" src="" alt="">
                        <img class="game-star-hud-star" data-star-index="2" src="" alt="">
                        <img class="game-star-hud-star" data-star-index="3" src="" alt="">
                        <img class="game-star-hud-star" data-star-index="4" src="" alt="">
                        <img class="game-star-hud-star" data-star-index="5" src="" alt="">
                        <img class="game-star-hud-star" data-star-index="6" src="" alt="">
                    </div>
                </div>
                    

                </div>


                <!-- =============================================
                     SPEAKING CHARACTERS
                ============================================== -->

                <img
                    class="
                        puzzle-speaker
                        puzzle-speaker-rumi
                        puzzle-speaker-left
                    "
                    id="puzzleRumi"
                    src="${IMG.rumi}"
                    alt=""
                >


                <img
                    class="
                        puzzle-speaker
                        puzzle-speaker-mira
                        puzzle-speaker-right
                    "
                    id="puzzleMira"
                    src="${IMG.mira}"
                    alt=""
                >


                <img
                    class="
                        puzzle-speaker
                        puzzle-speaker-zoey
                        puzzle-speaker-right
                    "
                    id="puzzleZoey"
                    src="${IMG.zoey}"
                    alt=""
                >


                <!-- =============================================
                     PUZZLE AREA
                ============================================== -->

                <div
                    class="puzzle-stage"
                    id="puzzleStage"
                >

                    <div
                        class="puzzle-board-wrap"
                        id="boardWrap"
                    >

                        <div
                            class="puzzle-board"
                            id="board"
                        >

                            <!--
                                Полная картинка.
                                Видна только после завершения.
                            -->

                            <img
                                class="puzzle-full"
                                id="fullPuzzleImage"
                                src="${IMG.full}"
                                alt=""
                            >


                            <img
                                class="puzzle-frame"
                                id="puzzleFrame"
                                src="${IMG.frame}"
                                alt=""
                            >

                        </div>

                    </div>

                </div>


    

            `;


            root.appendChild(
                screen
            );


            /* =====================================================
               ELEMENTS
            ===================================================== */

            const subtitle =
                screen.querySelector(
                    "#puzzleSubtitle"
                );


            const stage =
                screen.querySelector(
                    "#puzzleStage"
                );


            const board =
                screen.querySelector(
                    "#board"
                );


            const puzzleFrame =
                screen.querySelector(
                    "#puzzleFrame"
                );


            const fullPuzzleImage =
                screen.querySelector(
                    "#fullPuzzleImage"
                );


            const rumi =
                screen.querySelector(
                    "#puzzleRumi"
                );


            const mira =
                screen.querySelector(
                    "#puzzleMira"
                );


            const zoey =
                screen.querySelector(
                    "#puzzleZoey"
                );


            const speakers = [
                rumi,
                mira,
                zoey
            ];


            const starHudSlots = [
                ...screen.querySelectorAll(".game-star-hud-star")
            ];




            /* =====================================================
               SUBTITLE
            ===================================================== */

            function setSubtitle(
                text
            ) {

                subtitle.textContent =
                    text || "";

            }


            /* =====================================================
               WAIT
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
               SPEAKER HELPERS
            ===================================================== */

            function hideAllSpeakers() {

                speakers.forEach(
                    speaker => {

                        speaker.classList.remove(
                            "show"
                        );

                        speaker.classList.remove(
                            "character-speaking"
                        );

                    }
                );

            }


            async function speak(
                character,
                text,
                path,
                volume = 0.82
            ) {

                /*
                    Сначала прячем предыдущего персонажа.
                */

                hideAllSpeakers();


                /*
                    Текст.
                */

                setSubtitle(
                    text
                );


                if (character) {

                    character.classList.add(
                        "show"
                    );


                    /*
                        Даём персонажу доехать
                        с края экрана.
                    */

                    await wait(
                        180
                    );


                    character.classList.add(
                        "character-speaking"
                    );

                }


                /*
                    Голос.
                */

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


                /*
                    Реплика закончилась.
                */

                if (character) {

                    character.classList.remove(
                        "character-speaking"
                    );


                    await wait(
                        80
                    );


                    character.classList.remove(
                        "show"
                    );

                }


                await wait(
                    100
                );

            }


            /* =====================================================
               IDLE TIMER
            ===================================================== */

            function resetIdleTimer() {

                clearTimeout(
                    idleTimer
                );


                if (
                    !interactionEnabled ||
                    completed
                ) {

                    return;

                }


                idleTimer =
                    setTimeout(

                        async () => {

                            if (
                                idleHintPlayed ||
                                completed
                            ) {

                                return;

                            }


                            idleHintPlayed =
                                true;


                            await speak(
                                rumi,
                                "Посмотри внимательно. Где может быть этот кусочек?",
                                VOICE.idleHint,
                                CHARACTER_VOLUME.rumi
                            );

                        },

                        9000

                    );

            }


            /* =====================================================
               CREATE SLOTS
            ===================================================== */

            function makeSlot(index) {
                const slot = document.createElement("div");
                slot.className = "puzzle-slot";
                slot.dataset.slotIndex = index;

                const col = index % 3;
                const row = Math.floor(index / 3);

                // Заполняем ячейку полностью (без отступов)
                slot.style.left = col * (100 / 3) + '%';
                slot.style.top = row * 50 + '%';
                slot.style.width = (100 / 3) + '%';
                slot.style.height = '50%';

                board.appendChild(slot);
                return slot;
            }


            const slots =
                Array.from(

                    {
                        length:
                            6
                    },

                    (_, i) =>
                        makeSlot(i)

                );


            /* =====================================================
               BOARD METRICS
            ===================================================== */

            function getBoardMetrics() {
                const boardRect = board.getBoundingClientRect();
                const stageRect = stage.getBoundingClientRect();
                return {
                    boardRect,
                    stageRect,
                    pieceW: boardRect.width / 3,
                    pieceH: boardRect.height / 2
                };
            }

            /* =====================================================
               LOAD FULL IMAGE META
            ===================================================== */

            const fullImageMeta =
                await loadImageMeta(
                    IMG.full
                );


            /*
                Доска принимает ГОРИЗОНТАЛЬНЫЕ
                пропорции полной картинки.
            */

            board.style.aspectRatio = "2 / 1";



            function syncPuzzleFrame() {
                const boardRect = board.getBoundingClientRect();

                // Увеличиваем рамку на 15% (можете подобрать свой коэффициент)
                const scale = 1.4;

                puzzleFrame.style.width = `${boardRect.width * scale}px`;
                puzzleFrame.style.height = `${boardRect.height * 1.7}px`;
            }


            /* =====================================================
               CREATE PIECES
            ===================================================== */

            const pieces =
                IMG.pieces.map(
                    (
                        src,
                        index
                    ) => {

                        const piece =
                            document.createElement(
                                "img"
                            );


                        piece.className =
                            "puzzle-piece";


                        piece.src =
                            src;


                        piece.alt =
                            "";


                        piece.dataset.index =
                            index;


                        stage.appendChild(
                            piece
                        );


                        return piece;

                    }
                );


            /* =====================================================
               POSITION FREE PIECES
            ===================================================== */

            function positionFreePieces() {

                const {

                    pieceW,
                    pieceH,
                    stageRect

                } =
                    getBoardMetrics();


                pieces.forEach(
                    (
                        piece,
                        index
                    ) => {


                        const isPlaced =
                            piece.dataset.placed ===
                            "true";


                        piece.style.width =
                            `${pieceW}px`;


                        piece.style.height =
                            `${pieceH}px`;


                        if (isPlaced) {

                            const slotIndex =
                                Number(
                                    piece.dataset.slotIndex
                                );


                            snapPieceToSlot(
                                piece,
                                slots[slotIndex],
                                false
                            );


                            return;

                        }


                        const layout =
                            PIECE_LAYOUT[index];


                        const leftPx =
                            (
                                parseFloat(
                                    layout.left
                                ) / 100
                            ) *
                            stageRect.width -
                            pieceW / 2;


                        const topPx =
                            (
                                parseFloat(
                                    layout.top
                                ) / 100
                            ) *
                            stageRect.height -
                            pieceH / 2;


                        piece.style.left =
                            `${leftPx}px`;


                        piece.style.top =
                            `${topPx}px`;

                    }
                );

            }


            /* =====================================================
               SNAP PIECE
            ===================================================== */

            function snapPieceToSlot(
                piece,
                slot,
                animate = true
            ) {

                const slotRect =
                    slot.getBoundingClientRect();


                const stageRect =
                    stage.getBoundingClientRect();


                const left =
                    slotRect.left -
                    stageRect.left;


                const top =
                    slotRect.top -
                    stageRect.top;


                if (!animate) {

                    piece.style.transition =
                        "none";

                } else {

                    piece.style.transition =
                        "left 0.18s ease, top 0.18s ease, transform 0.18s ease";

                }


                piece.style.left =
                    `${left}px`;


                piece.style.top =
                    `${top}px`;


                requestAnimationFrame(
                    () => {

                        piece.style.transition =
                            "";

                    }
                );

            }


            /* =====================================================
               DRAGGING
            ===================================================== */

            function enableDragging(piece) {

                let carrying = false;

                let offsetX = 0;
                let offsetY = 0;


                /* =====================================================
                PICK UP / DROP WITH CLICK
                ===================================================== */

                piece.addEventListener(
                    "pointerdown",
                    async (event) => {

                        event.preventDefault();


                        if (
                            !interactionEnabled ||
                            completed
                        ) {
                            return;
                        }


                        if (
                            piece.dataset.placed ===
                            "true"
                        ) {
                            return;
                        }


                        resetIdleTimer();


                        /* =================================================
                        FIRST CLICK — PICK UP
                        ================================================= */

                        if (!carrying) {

                            carrying = true;


                            const pieceRect =
                                piece.getBoundingClientRect();


                            /*
                                Сохраняем точку клика,
                                чтобы кусочек не прыгал
                                центром прямо под курсор.
                            */

                            offsetX =
                                event.clientX -
                                pieceRect.left;


                            offsetY =
                                event.clientY -
                                pieceRect.top;


                            piece.classList.add(
                                "dragging"
                            );


                            piece.style.zIndex =
                                "30";


                            audio.playSfx(
                                SFX.pickup,
                                0.65
                            );


                            return;
                        }


                        /* =================================================
                        SECOND CLICK — TRY TO PLACE
                        ================================================= */

                        carrying =
                            false;


                        piece.classList.remove(
                            "dragging"
                        );


                        clearAllSlotHighlights();


                        const pieceIndex =
                            Number(
                                piece.dataset.index
                            );


                        const correctSlot =
                            slots[pieceIndex];


                        const correctSlotTaken =
                            placedMap.has(
                                pieceIndex
                            );


                        /*
                            Очень щедрый магнит.

                            Если кусочек достаточно близко
                            к своей ячейке — ставим автоматически.
                        */

                        if (
                            !correctSlotTaken &&
                            isNearCorrectSlot(
                                piece,
                                correctSlot
                            )
                        ) {

                            snapPieceToSlot(
                                piece,
                                correctSlot
                            );


                            piece.dataset.placed =
                                "true";


                            piece.dataset.slotIndex =
                                pieceIndex;


                            piece.classList.add(
                                "placed"
                            );


                            piece.style.zIndex =
                                "4";


                            correctSlot.classList.add(
                                "filled"
                            );


                            placedMap.set(
                                pieceIndex,
                                piece
                            );


                            placedCount +=
                                1;


                            audio.playSfx(
                                SFX.place,
                                0.8
                            );


                            /* =========================
                            3 PIECES
                            ========================= */

                            if (
                                placedCount === 3 &&
                                !afterThirdPlayed
                            ) {

                                afterThirdPlayed =
                                    true;


                                await speak(
                                    zoey,
                                    "Получается!",
                                    VOICE.gettingIt,
                                    CHARACTER_VOLUME.zoey
                                );

                            }


                            /* =========================
                            5 PIECES
                            ========================= */

                            if (
                                placedCount === 5 &&
                                !afterFifthPlayed
                            ) {

                                afterFifthPlayed =
                                    true;


                                await speak(
                                    mira,
                                    "Остался один.",
                                    VOICE.oneLeft,
                                    CHARACTER_VOLUME.mira
                                );

                            }


                            /* =========================
                            COMPLETE
                            ========================= */

                            if (
                                placedCount === 6 &&
                                !completed
                            ) {

                                completed =
                                    true;


                                interactionEnabled =
                                    false;


                                clearTimeout(
                                    idleTimer
                                );


                                await finishPuzzle();

                                return;
                            }

                        }

                        else {

                            /*
                                Не попала —
                                кусочек спокойно возвращается назад.
                            */

                            positionBackToFreeLayout(
                                piece
                            );


                            audio.playSfx(
                                SFX.back,
                                0.6
                            );


                            if (
                                !wrongHintPlayed
                            ) {

                                wrongHintPlayed =
                                    true;


                                await speak(
                                    rumi,
                                    "Ничего страшного. Попробуй другое место.",
                                    VOICE.wrongPlaceHint,
                                    CHARACTER_VOLUME.rumi
                                );

                            }

                        }


                        resetIdleTimer();

                    }
                );


                /* =====================================================
                PIECE FOLLOWS CURSOR
                ===================================================== */

                window.addEventListener(
                    "pointermove",
                    (event) => {

                        if (!carrying) {
                            return;
                        }


                        const stageRect =
                            stage.getBoundingClientRect();


                        let left =
                            event.clientX -
                            stageRect.left -
                            offsetX;


                        let top =
                            event.clientY -
                            stageRect.top -
                            offsetY;


                        /*
                            Не позволяем кусочку
                            полностью исчезнуть за экраном.
                        */

                        const pieceRect =
                            piece.getBoundingClientRect();


                        left =
                            Math.max(
                                -pieceRect.width * 0.25,
                                Math.min(
                                    stageRect.width -
                                        pieceRect.width * 0.75,
                                    left
                                )
                            );


                        top =
                            Math.max(
                                0,
                                Math.min(
                                    stageRect.height -
                                        pieceRect.height,
                                    top
                                )
                            );


                        piece.style.left =
                            `${left}px`;


                        piece.style.top =
                            `${top}px`;


                        highlightClosestCorrectSlot(
                            piece
                        );

                    }
                );


                /* =====================================================
                DISABLE DEFAULT IMAGE DRAG
                ===================================================== */

                piece.draggable =
                    false;


                piece.addEventListener(
                    "dragstart",
                    (event) => {

                        event.preventDefault();

                    }
                );

            }


            /* =====================================================
               RETURN PIECE
            ===================================================== */

            function positionBackToFreeLayout(
                piece
            ) {

                const index =
                    Number(
                        piece.dataset.index
                    );


                const layout =
                    PIECE_LAYOUT[index];


                const {

                    pieceW,
                    pieceH,
                    stageRect

                } =
                    getBoardMetrics();


                const leftPx =
                    (
                        parseFloat(
                            layout.left
                        ) / 100
                    ) *
                    stageRect.width -
                    pieceW / 2;


                const topPx =
                    (
                        parseFloat(
                            layout.top
                        ) / 100
                    ) *
                    stageRect.height -
                    pieceH / 2;


                piece.style.transition =
                    "left 0.18s ease, top 0.18s ease";


                piece.style.left =
                    `${leftPx}px`;


                piece.style.top =
                    `${topPx}px`;


                setTimeout(
                    () => {

                        piece.style.transition =
                            "";

                    },
                    200
                );

            }


            /* =====================================================
               IS NEAR CORRECT SLOT
            ===================================================== */

            function isNearCorrectSlot(
                piece,
                slot
            ) {

                const pieceRect =
                    piece.getBoundingClientRect();


                const slotRect =
                    slot.getBoundingClientRect();


                const pieceCenterX =
                    pieceRect.left +
                    pieceRect.width / 2;


                const pieceCenterY =
                    pieceRect.top +
                    pieceRect.height / 2;


                const slotCenterX =
                    slotRect.left +
                    slotRect.width / 2;


                const slotCenterY =
                    slotRect.top +
                    slotRect.height / 2;


                const dx =
                    pieceCenterX -
                    slotCenterX;


                const dy =
                    pieceCenterY -
                    slotCenterY;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                const threshold =
                    Math.min(
                        slotRect.width,
                        slotRect.height
                    ) *
                    0.85;


                return (
                    distance <=
                    threshold
                );

            }


            /* =====================================================
               SLOT HIGHLIGHT
            ===================================================== */

            function clearAllSlotHighlights() {

                slots.forEach(
                    slot => {

                        slot.classList.remove(
                            "highlight"
                        );

                    }
                );

            }


            function highlightClosestCorrectSlot(
                piece
            ) {

                clearAllSlotHighlights();


                const pieceIndex =
                    Number(
                        piece.dataset.index
                    );


                const slot =
                    slots[pieceIndex];


                if (
                    placedMap.has(
                        pieceIndex
                    )
                ) {

                    return;

                }


                if (
                    isNearCorrectSlot(
                        piece,
                        slot
                    )
                ) {

                    slot.classList.add(
                        "highlight"
                    );

                }

            }


            /* =====================================================
               FINISH PUZZLE
            ===================================================== */

            async function finishPuzzle() {


                /* =========================
                   COMPLETION EFFECT
                ========================= */

                audio.playSfx(
                    SFX.complete,
                    0.9
                );


                await wait(
                    350
                );


                fullPuzzleImage.classList.add(
                    "visible"
                );


                await wait(
                    350
                );


                /* =========================
                   ZOEY
                ========================= */

                await speak(
                    zoey,
                    "Эма тоже с нами!",
                    VOICE.emaWithUs,
                    CHARACTER_VOLUME.zoey
                );


                /* =========================
                   MIRA
                ========================= */

                await speak(
                    mira,
                    "Похоже на то.",
                    VOICE.looksLikeIt,
                    CHARACTER_VOLUME.mira
                );


                /* =========================
                   RUMI
                ========================= */

                await speak(
                    rumi,
                    "Значит, теперь это и твоё приключение.",
                    VOICE.yourAdventure,
                    CHARACTER_VOLUME.rumi
                );


                await wait(
                    250
                );


                /* =========================
                STAR — АНИМИРОВАННОЕ ПОЯВЛЕНИЕ
                ========================= */

                audio.playSfx(SFX.starAppear, 0.85);

                await speak(zoey, "Звезда!", VOICE.star, CHARACTER_VOLUME.zoey);

                // Создаем анимированную звезду в центре экрана
                const starImg = document.createElement('img');
                starImg.className = 'animated-star';
                starImg.src = './assets/images/star_hud_active.png';
                starImg.style.left = '50%';
                starImg.style.top = '50%';
                document.body.appendChild(starImg);

                // Небольшая пауза перед анимацией
                await wait(100);

                // Получаем позицию первого слота на панели
                const targetSlot = starHudSlots[0];
                const slotRect = targetSlot.getBoundingClientRect();

                // Координаты слота на экране
                const targetX = slotRect.left + slotRect.width / 2;
                const targetY = slotRect.top + slotRect.height / 2;

                // Смещение для точной посадки (подберите сами)
                const offsetX = 10;   // отрицательное = левее, положительное = правее
                const offsetY = -40;  // отрицательное = выше, положительное = ниже

                // Устанавливаем CSS переменные для полета
                starImg.style.setProperty('--fly-x', `${targetX + offsetX}px`);
                starImg.style.setProperty('--fly-y', `${targetY + offsetY}px`);

                // Запускаем анимацию
                starImg.classList.add('animate');

                // Ждем окончания анимации (2 секунды)
                await wait(2000);

                // Удаляем анимированную звезду
                starImg.remove();

                const firstStar = starHudSlots[0];
                firstStar.src = './assets/images/star_hud_active.png';
                firstStar.classList.add('active');

                audio.playSfx(SFX.starCollect, 0.9);

                game.setStarsCollected(1);

                /* =========================
                   STAR COUNT
                ========================= */

                await speak(
                    rumi,
                    "Одна нашлась.",
                    VOICE.oneFound,
                    CHARACTER_VOLUME.rumi
                );


                await speak(
                    rumi,
                    "Осталось ещё шесть.",
                    VOICE.sixLeft,
                    CHARACTER_VOLUME.rumi
                );


                /* =========================
                   WHERE IS HOSHI?
                ========================= */

                await speak(
                    mira,
                    "Пока Хоши не спрятал их по всему городу.",
                    VOICE.hiddenInCity,
                    CHARACTER_VOLUME.mira
                );


                await speak(
                    zoey,
                    "Или съел.",
                    VOICE.orAteThem,
                    CHARACTER_VOLUME.zoey
                );


                await speak(
                    mira,
                    "Он не ест звёзды.",
                    VOICE.doesntEatStars,
                    CHARACTER_VOLUME.mira
                );


                await speak(
                    zoey,
                    "Ты уверена?",
                    VOICE.areYouSure,
                    CHARACTER_VOLUME.zoey
                );


                /* =========================
                   HOSHI FAR AWAY
                ========================= */

                hideAllSpeakers();

                setSubtitle(
                    ""
                );


                await audio.playVoice(
                    VOICE.hoshiGiggleFar,
                    0.82
                );


                /* =========================
                   THERE!
                ========================= */

                await speak(
                    zoey,
                    "Там!",
                    VOICE.there,
                    CHARACTER_VOLUME.zoey
                );


                await speak(
                    rumi,
                    "За ним!",
                    VOICE.followHim,
                    CHARACTER_VOLUME.rumi
                );


                hideAllSpeakers();

                setSubtitle(
                    ""
                );


                await wait(
                    500
                );

                game.showScene(
                    "citySearch"
                );

            }


            /* =====================================================
               INTRO DIALOGUE
            ===================================================== */

            async function playIntroDialogue() {


                await speak(
                    rumi,
                    "Ой. Кажется, Хоши кое-что сломал.",
                    VOICE.broken,
                    CHARACTER_VOLUME.rumi
                );


                await speak(
                    zoey,
                    "На шесть кусочков!",
                    VOICE.sixPieces,
                    CHARACTER_VOLUME.zoey
                );


                await speak(
                    mira,
                    "Спасибо, Zoey. Мы видим.",
                    VOICE.weSee,
                    CHARACTER_VOLUME.mira
                );


                await speak(
                    zoey,
                    "Я опять просто проверяла.",
                    VOICE.checkingAgain,
                    CHARACTER_VOLUME.zoey
                );


                await wait(
                    200
                );


                await speak(
                    rumi,
                    "Эма, поможешь нам?",
                    VOICE.helpUs,
                    CHARACTER_VOLUME.rumi
                );


                await speak(
                    rumi,
                    "Возьми кусочек мышкой и перетащи его на место.",
                    VOICE.dragPiece,
                    CHARACTER_VOLUME.rumi
                );


                await speak(
                    rumi,
                    "Попробуй!",
                    VOICE.tryIt,
                    CHARACTER_VOLUME.rumi
                );


                interactionEnabled =
                    true;


                hideAllSpeakers();

                setSubtitle(
                    ""
                );


                resetIdleTimer();

            }


            /* =====================================================
               RESIZE
            ===================================================== */

            function onResize() {

                syncPuzzleFrame();

                positionFreePieces();

            }


            /* =====================================================
               INIT
            ===================================================== */

            pieces.forEach(
                enableDragging
            );


            /*
                Сначала ждём layout браузера.
            */

            await wait(
                50
            );


            syncPuzzleFrame();

            positionFreePieces();


            window.addEventListener(
                "resize",
                onResize
            );


            await playIntroDialogue();

        }

    };

}


/* =========================================================
   LOAD IMAGE META
========================================================= */

function loadImageMeta(
    src
) {

    return new Promise(
        (
            resolve,
            reject
        ) => {


            const img =
                new Image();


            img.onload =
                () => {

                    resolve({

                        width:
                            img.naturalWidth,

                        height:
                            img.naturalHeight

                    });

                };


            img.onerror =
                reject;


            img.src =
                src;

        }
    );

}