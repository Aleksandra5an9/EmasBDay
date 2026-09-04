import {
    createStarHud,
    updateStarHud
} from "../star-hud.js";


/* =========================================================
   SCENE 05 — HOSHI'S LAIR

   1. След к логову
   2. Коллекция Хоши
   3. Хоши роняет звезду в барахло
   4. Эма сортирует вещи
   5. Звезда №4
========================================================= */


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    /* =========================
       BACKGROUNDS
    ========================= */

    trailBackground:
        "./assets/images/trail_to_lair_bg.png",

    lairBackground:
        "./assets/images/hoshi_lair_bg.png",


    /* =========================
       LAIR
    ========================= */

    junkPile:
        "./assets/images/hoshi_lair_junk_pile.png",


    /* =========================
       STORY OBJECTS
    ========================= */

    ribbon:
        "./assets/images/item_ribbon.png",

    spoon:
        "./assets/images/item_spoon.png",

    sock:
        "./assets/images/item_sock.png",

    hairclip:
        "./assets/images/item_hairclip.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       BASKETS
    ========================= */

    basketDecorations:
        "./assets/images/basket_decorations.png",

    basketToys:
        "./assets/images/basket_toys.png",

    basketFood:
        "./assets/images/basket_food.png",


    /* =========================
       HOSHI
    ========================= */

    hoshiHappyCollection:
        "./assets/images/hoshi_happy_collection.png",

    hoshiShocked:
        "./assets/images/hoshi_shocked.png",

    hoshiScared:
        "./assets/images/hoshi_scared.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiAngry:
        "./assets/images/hoshi_angry.png",

    hoshiSmug:
        "./assets/images/hoshi_smug.png",

    hoshiRunningCarry:
        "./assets/images/hoshi_running_carry.png",


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
       TRAIL TO LAIR
    ========================= */

    zoeyClue:
        "./assets/audio/s05_zoey_01_clue.mp3",

    miraDangerous:
        "./assets/audio/s05_mira_01_dangerous_criminal.mp3",

    zoeyHumming:
        "./assets/audio/s05_zoey_02_humming.mp3",

    miraStopSoon:
        "./assets/audio/s05_mira_02_stop_soon.mp3",

    rumiQuiet:
        "./assets/audio/s05_rumi_01_quiet.mp3",


    /* =========================
       LAIR REVEAL
    ========================= */

    zoeyAww:
        "./assets/audio/s05_zoey_03_aww.mp3",

    miraDont:
        "./assets/audio/s05_mira_03_dont_start.mp3",

    zoeyLook:
        "./assets/audio/s05_zoey_04_look_at_him.mp3",

    rumiHoshi:
        "./assets/audio/s05_rumi_02_hoshi.mp3",


    /* =========================
       SORTING INTRO
    ========================= */

    rumiCantFind:
        "./assets/audio/s05_rumi_03_cant_find.mp3",

    zoeySort:
        "./assets/audio/s05_zoey_05_sort_it.mp3",

    miraHisMess:
        "./assets/audio/s05_mira_04_his_mess.mp3",

    zoeyOurStar:
        "./assets/audio/s05_zoey_06_our_star.mp3",

    miraBetter:
        "./assets/audio/s05_mira_05_better.mp3",

    rumiInstruction:
        "./assets/audio/s05_rumi_04_sort_baskets.mp3",


    /* =========================
       GAMEPLAY
    ========================= */

    zoeyCorrect:
        "./assets/audio/s05_zoey_07_correct.mp3",

    rumiWrong:
        "./assets/audio/s05_rumi_05_other_basket.mp3",

    rumiRibbon:
        "./assets/audio/s05_rumi_06_hoshi.mp3",

    miraHalf:
        "./assets/audio/s05_mira_06_much_better.mp3",

    zoeyDone:
        "./assets/audio/s05_zoey_08_done.mp3",


    /* =========================
       STAR 4
    ========================= */

    rumiFour:
        "./assets/audio/s05_rumi_07_four_ours.mp3",

    zoeyCollection:
        "./assets/audio/s05_zoey_09_collection.mp3",

    miraMagnificent:
        "./assets/audio/s05_mira_07_magnificent.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    happy:
        "./assets/audio/hoshi_soft_happy.mp3",

    giggle:
        "./assets/audio/hoshi_giggle_happy.mp3",

    surprised:
        "./assets/audio/hoshi_surprised.mp3",

    scared:
        "./assets/audio/hoshi_scared.mp3",

    suspicious:
        "./assets/audio/hoshi_suspicious.mp3",

    grumble:
        "./assets/audio/hoshi_grumble.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    correct:
        "./assets/audio/magic_zap.mp3",

    wrong:
        "./assets/audio/magic_burst.mp3",

    sparkle:
        "./assets/audio/star_appear.mp3",

    collect:
        "./assets/audio/star_collect.mp3",

    clatter:
        "./assets/audio/lair_clatter.mp3",
    lairBgm: "./assets/audio/lair_bgm.mp3"

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
   BASKETS
========================================================= */

const BASKETS = [

    {
        id:
            "decorations",

        image:
            IMG.basketDecorations,

        label:
            "Украшения"
    },


    {
        id:
            "toys",

        image:
            IMG.basketToys,

        label:
            "Игрушки"
    },


    {
        id:
            "food",

        image:
            IMG.basketFood,

        label:
            "Сладости"
    }

];


/* =========================================================
   SORTING ITEMS

   3 украшения
   3 игрушки
   3 сладости
========================================================= */

const ITEMS = [

    /* =========================
       DECORATIONS
    ========================= */

    {
        id:
            "ribbon",

        image:
            "./assets/images/item_ribbon.png",

        category:
            "decorations",

        left:
            "50%",

        top:
            "45%",

        width:
            "7vw"
    },


    {
        id:
            "bracelet",

        image:
            "./assets/images/item_bracelet.png",

        category:
            "decorations",

        left:
            "42%",

        top:
            "55%",

        width:
            "7vw"
    },


    {
        id:
            "hairclip",

        image:
            "./assets/images/item_hairclip.png",

        category:
            "decorations",

        left:
            "60%",

        top:
            "53%",

        width:
            "8vw"
    },


    /* =========================
       TOYS
    ========================= */

    {
        id:
            "ball",

        image:
            "./assets/images/item_ball.png",

        category:
            "toys",

        left:
            "35%",

        top:
            "67%",

        width:
            "12vw"
    },


    {
        id:
            "toyCar",

        image:
            "./assets/images/item_toy_car.png",

        category:
            "toys",

        left:
            "55%",

        top:
            "66%",

        width:
            "10vw"
    },


    {
        id:
            "teddy",

        image:
            "./assets/images/item_teddy.png",

        category:
            "toys",

        left:
            "67%",

        top:
            "62%",

        width:
            "12vw"
    },


    /* =========================
       FOOD
    ========================= */

    {
        id:
            "lollipop",

        image:
            "./assets/images/item_lollipop.png",

        category:
            "food",

        left:
            "31%",

        top:
            "55%",

        width:
            "7vw"
    },


    {
        id:
            "cookie",

        image:
            "./assets/images/item_cookie.png",

        category:
            "food",

        left:
            "49%",

        top:
            "63%",

        width:
            "6vw"
    },


    {
        id:
            "candy",

        image:
            "./assets/images/item_candy.png",

        category:
            "food",

        left:
            "72%",

        top:
            "70%",

        width:
            "6vw"
    }

];


/* =========================================================
   CREATE SCENE
========================================================= */

export function createLairScene({
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


            let sortingEnabled =
                false;


            let selectedItem =
                null;


            let sortedCount =
                0;


            let ribbonGagDone =
                false;


            let halfCommentDone =
                false;


            let starReady =
                false;


            let completed =
                false;

            // ---- Фоновая музыка для логова ----
            let bgmAudio = null;

            function startLairBgm() {
                bgmAudio = new Audio(SFX.lairBgm);
                bgmAudio.loop = true;
                bgmAudio.volume = 0.08;   // тихо, чтобы не перекрывать голоса
                bgmAudio.play().catch(e => console.warn('BGM play blocked:', e));
            }

            function stopLairBgm() {
                if (bgmAudio) {
                    bgmAudio.pause();
                    bgmAudio.currentTime = 0;
                    bgmAudio = null;
                }
            }
            // ---- конец фоновой музыки ----

            let firstCorrectDone = false;


            const sortedItems =
                new Set();


            /* =====================================================
               SCREEN
            ===================================================== */

            const screen =
                document.createElement(
                    "div"
                );


            screen.className =
                "lair-scene";

                        screen.innerHTML = `

                <!-- =============================================
                     TRAIL TO LAIR
                ============================================== -->

                <div
                    class="lair-trail-layer"
                    id="lairTrailLayer"
                >

                    <img
                        class="lair-trail-bg"
                        src="${IMG.trailBackground}"
                        alt=""
                    >


                    <img
                        class="
                            lair-trail-prop
                            lair-trail-ribbon
                        "
                        src="${IMG.ribbon}"
                        alt=""
                    >


                    <img
                        class="
                            lair-trail-prop
                            lair-trail-spoon
                        "
                        id="lairTrailSpoon"
                        src="${IMG.spoon}"
                        alt=""
                    >


                    <img
                        class="
                            lair-trail-prop
                            lair-trail-sock
                        "
                        id="lairTrailSock"
                        src="${IMG.sock}"
                        alt=""
                    >


                    <img
                        class="
                            lair-trail-prop
                            lair-trail-hairclip
                        "
                        src="${IMG.hairclip}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     MAIN LAIR
                ============================================== -->

                <div
                    class="lair-main-layer"
                    id="lairMainLayer"
                >

                    <img
                        class="lair-main-bg"
                        src="${IMG.lairBackground}"
                        alt=""
                    >


                    <!-- =========================================
                         JUNK PILE
                    ========================================== -->

                    <img
                        class="lair-junk-pile"
                        id="lairJunkPile"
                        src="${IMG.junkPile}"
                        alt=""
                    >


                    <!-- =========================================
                         HOSHI
                    ========================================== -->

                    <img
                        class="lair-hoshi"
                        id="lairHoshi"
                        src="${IMG.hoshiHappyCollection}"
                        alt=""
                    >


                    <!-- =========================================
                         FOUR REMAINING STARS
                         Видны только в сюжетном вступлении.
                    ========================================== -->

                    <div
                        class="lair-story-stars"
                        id="lairStoryStars"
                    >

                        <img
                            class="lair-story-star lair-story-star-1"
                            src="${IMG.star}"
                            alt=""
                        >

                        <img
                            class="lair-story-star lair-story-star-2"
                            src="${IMG.star}"
                            alt=""
                        >

                        <img
                            class="lair-story-star lair-story-star-3"
                            src="${IMG.star}"
                            alt=""
                        >

                        <img
                            class="lair-story-star lair-story-star-4"
                            id="lairFallingStar"
                            src="${IMG.star}"
                            alt=""
                        >

                    </div>


                    <!-- =========================================
                         SORTING ITEMS
                    ========================================== -->

                    <div
                        class="lair-items-layer"
                        id="lairItemsLayer"
                    ></div>


                    <!-- =========================================
                         BASKETS
                    ========================================== -->

                    <div
                        class="lair-baskets"
                        id="lairBaskets"
                    ></div>

                    <!-- =============================================
                        ПАНЕЛЬ-ПОДСКАЗКА (СПИСОК ПРЕДМЕТОВ)
                    ============================================= -->
                    <div class="lair-checklist" id="lairChecklist">
                        <!-- Сюда динамически добавятся предметы -->
                    </div>

                    <!-- =========================================
                         STAR 4
                    ========================================== -->

                    <button
                        class="lair-fourth-star"
                        id="lairFourthStar"
                        type="button"
                        aria-label="Забрать четвёртую звезду"
                    >

                        <img
                            src="${IMG.star}"
                            alt=""
                        >

                    </button>

                </div>


                <!-- =============================================
                     TOP UI
                ============================================== -->

                <div
                    class="lair-topbar"
                    id="lairTopbar"
                >

                    <div
                        class="lair-subtitle"
                        id="lairSubtitle"
                    ></div>


                    <div
                        class="lair-star-hud-mount"
                        id="lairStarHudMount"
                    ></div>

                </div>


                <!-- =============================================
                     SPEAKERS
                ============================================== -->

                <img
                    class="
                        lair-speaker
                        lair-speaker-rumi
                        lair-speaker-left
                    "
                    id="lairRumi"
                    src="${IMG.rumi}"
                    alt=""
                >


                <img
                    class="
                        lair-speaker
                        lair-speaker-mira
                        lair-speaker-right
                    "
                    id="lairMira"
                    src="${IMG.mira}"
                    alt=""
                >


                <img
                    class="
                        lair-speaker
                        lair-speaker-zoey
                        lair-speaker-right
                    "
                    id="lairZoey"
                    src="${IMG.zoey}"
                    alt=""
                >

            `;


            root.appendChild(
                screen
            );
            startLairBgm();

            /* =====================================================
               ELEMENTS
            ===================================================== */

            const trailLayer =
                screen.querySelector(
                    "#lairTrailLayer"
                );


            const trailSpoon =
                screen.querySelector(
                    "#lairTrailSpoon"
                );


            const trailSock =
                screen.querySelector(
                    "#lairTrailSock"
                );


            const mainLayer =
                screen.querySelector(
                    "#lairMainLayer"
                );


            const junkPile =
                screen.querySelector(
                    "#lairJunkPile"
                );


            const hoshi =
                screen.querySelector(
                    "#lairHoshi"
                );


            const storyStars =
                screen.querySelector(
                    "#lairStoryStars"
                );


            const fallingStar =
                screen.querySelector(
                    "#lairFallingStar"
                );


            const itemsLayer =
                screen.querySelector(
                    "#lairItemsLayer"
                );


            const basketsLayer =
                screen.querySelector(
                    "#lairBaskets"
                );


            const fourthStar =
                screen.querySelector(
                    "#lairFourthStar"
                );


            const topbar =
                screen.querySelector(
                    "#lairTopbar"
                );


            const subtitle =
                screen.querySelector(
                    "#lairSubtitle"
                );


            const rumi =
                screen.querySelector(
                    "#lairRumi"
                );


            const mira =
                screen.querySelector(
                    "#lairMira"
                );


            const zoey =
                screen.querySelector(
                    "#lairZoey"
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
                    "#lairStarHudMount"
                );


            const checklistContainer = screen.querySelector("#lairChecklist");

            const starHud =
                createStarHud(
                    3
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


            function setHoshiPose(
                path
            ) {

                hoshi.src =
                    path;

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
                        /* =====================================================
               CREATE BASKETS
            ===================================================== */

            const basketElements =
                BASKETS.map(
                    basket => {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "lair-basket";


                        button.dataset.category =
                            basket.id;


                        button.setAttribute(
                            "aria-label",
                            basket.label
                        );


                        button.innerHTML = `

                            <img
                                src="${basket.image}"
                                alt=""
                            >

                        `;


                        basketsLayer.appendChild(
                            button
                        );


                        return button;

                    }
                );


            /* =====================================================
               CREATE SORTING ITEMS
            ===================================================== */

            const itemElements =
                ITEMS.map(
                    (
                        item,
                        index
                    ) => {

                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "lair-sort-item";


                        button.dataset.itemId =
                            item.id;


                        button.dataset.category =
                            item.category;


                        button.dataset.index =
                            index;


                        button.style.left =
                            item.left;


                        button.style.top =
                            item.top;


                        button.style.width =
                            item.width;


                        /*
                            Запоминаем исходное место.

                            Оно понадобится,
                            если Эма выбрала
                            неправильную корзину.
                        */

                        button.dataset.homeLeft =
                            item.left;


                        button.dataset.homeTop =
                            item.top;


                        button.innerHTML = `

                            <span
                                class="lair-item-glow"
                            ></span>

                            <img
                                src="${item.image}"
                                alt=""
                            >

                        `;


                        itemsLayer.appendChild(
                            button
                        );


                        return button;

                    }
                );

            /* =====================================================
            ПОСТРОЕНИЕ СПИСКА-ПОДСКАЗКИ
            ===================================================== */

            function buildChecklist() {
                // Очищаем контейнер (на случай повторного вызова)
                checklistContainer.innerHTML = "";

                ITEMS.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "lair-checklist-item";
                    div.dataset.itemId = item.id;

                    const img = document.createElement("img");
                    img.src = item.image;
                    img.alt = "";

                    div.appendChild(img);
                    checklistContainer.appendChild(div);
                });
            }

            function updateChecklist() {
                const items = checklistContainer.querySelectorAll(".lair-checklist-item");
                items.forEach(el => {
                    const id = el.dataset.itemId;
                    if (sortedItems.has(id)) {
                        el.classList.add("found");
                    } else {
                        el.classList.remove("found");
                    }
                });
            }
            /* =====================================================
               FIND ITEM DATA
            ===================================================== */

            function getItemData(
                element
            ) {

                const itemId =
                    element.dataset
                        .itemId;


                return ITEMS.find(
                    item =>
                        item.id ===
                        itemId
                );

            }


            /* =====================================================
               SELECT ITEM

               Первый клик:
               предмет "прилипает" к курсору.

               Кнопку мыши держать НЕ надо.
            ===================================================== */

            function selectItem(
                element
            ) {

                if (
                    !sortingEnabled ||
                    busy ||
                    completed
                ) {

                    return;

                }


                if (
                    element.classList.contains(
                        "sorted"
                    )
                ) {

                    return;

                }


                /* =========================
                   Если уже был выбран
                   другой предмет —
                   возвращаем его
                ========================= */

                if (
                    selectedItem &&
                    selectedItem !==
                        element
                ) {

                    selectedItem
                        .classList
                        .remove(
                            "selected"
                        );

                }


                selectedItem =
                    element;


                selectedItem.classList.add(
                    "selected"
                );


                /*
                    Поднимаем предмет
                    над остальными.
                */

                selectedItem.style.zIndex =
                    "80";

            }


            /* =====================================================
               RELEASE SELECTED ITEM
            ===================================================== */

            function releaseSelectedItem() {

                if (
                    !selectedItem
                ) {

                    return;

                }


                selectedItem.classList.remove(
                    "selected"
                );


                selectedItem.style.zIndex =
                    "";


                selectedItem =
                    null;

            }


            /* =====================================================
               ITEM CLICK
            ===================================================== */

            itemElements.forEach(
                element => {

                    element.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();


                            if (
                                !sortingEnabled ||
                                busy ||
                                completed
                            ) {

                                return;

                            }


                            /*
                                Если кликаем второй раз
                                по уже выбранному предмету —
                                просто кладём его обратно.
                            */

                            if (
                                selectedItem ===
                                element
                            ) {

                                releaseSelectedItem();


                                return;

                            }


                            selectItem(
                                element
                            );

                        }
                    );

                }
            );


            /* =====================================================
               ITEM FOLLOWS CURSOR

               Предмет двигается за мышкой
               БЕЗ удерживания кнопки.
            ===================================================== */

            screen.addEventListener(
                "pointermove",
                event => {

                    if (
                        !selectedItem ||
                        !sortingEnabled ||
                        busy ||
                        completed
                    ) {

                        return;

                    }


                    const screenRect =
                        screen.getBoundingClientRect();


                    const x =
                        event.clientX -
                        screenRect.left;


                    const y =
                        event.clientY -
                        screenRect.top;


                    selectedItem.style.left =
                        `${x}px`;


                    selectedItem.style.top =
                        `${y}px`;

                }
            );


            /* =====================================================
               RETURN ITEM HOME
            ===================================================== */

            async function returnItemHome(
                element
            ) {

                const homeLeft =
                    element.dataset
                        .homeLeft;


                const homeTop =
                    element.dataset
                        .homeTop;


                element.classList.add(
                    "wrong"
                );


                audio.playSfx(
                    SFX.wrong,
                    0.4
                );


                await wait(
                    300
                );


                element.style.transition =
                    "left 0.4s ease, top 0.4s ease";


                element.style.left =
                    homeLeft;


                element.style.top =
                    homeTop;


                await wait(
                    420
                );


                element.classList.remove(
                    "wrong"
                );


                element.style.transition =
                    "";


                element.style.zIndex =
                    "";

            }


            /* =====================================================
               SEND ITEM INTO BASKET
            ===================================================== */

            async function sendItemToBasket(
                element,
                basketElement
            ) {

                const screenRect =
                    screen.getBoundingClientRect();


                const basketRect =
                    basketElement
                        .getBoundingClientRect();


                const targetX =
                    basketRect.left -
                    screenRect.left +
                    basketRect.width / 2;


                const targetY =
                    basketRect.top -
                    screenRect.top +
                    basketRect.height / 2;


                element.classList.add(
                    "correct"
                );


                audio.playSfx(
                    SFX.correct,
                    0.55
                );


                element.style.transition =
                    "left 0.45s ease, " +
                    "top 0.45s ease, " +
                    "transform 0.45s ease, " +
                    "opacity 0.4s ease";


                element.style.left =
                    `${targetX}px`;


                element.style.top =
                    `${targetY}px`;


                element.style.transform =
                    "translate(-50%, -50%) " +
                    "scale(0.3) " +
                    "rotate(12deg)";


                element.style.opacity =
                    "0";


                basketElement.classList.add(
                    "receive"
                );


                await wait(
                    470
                );


                basketElement.classList.remove(
                    "receive"
                );


                element.classList.add(
                    "sorted"
                );


                element.style.display =
                    "none";

            }


            /* =====================================================
               WRONG BASKET
            ===================================================== */

            async function handleWrongBasket(
                element
            ) {

                busy =
                    true;


                await returnItemHome(
                    element
                );


                await speak(
                    "rumi",
                    "Попробуй другую корзину.",
                    VOICE.rumiWrong
                );


                busy =
                    false;

            }


            /* =====================================================
               CORRECT BASKET
            ===================================================== */

            async function handleCorrectBasket(
                element,
                basketElement
            ) {
                busy = true;

                const itemData =
                    getItemData(element);

                const itemId =
                    itemData.id;

                /* =========================
                ОТПРАВЛЯЕМ ПРЕДМЕТ В КОРЗИНУ
                ========================= */

                await sendItemToBasket(
                    element,
                    basketElement
                );

                sortedItems.add(itemId);
                updateChecklist();

                sortedCount =
                    sortedItems.size;

                /* =========================
                ПЕРВЫЙ ПРАВИЛЬНЫЙ ПРЕДМЕТ
                (кроме бантика — у него свой gag)
                ========================= */

                if (
                    !firstCorrectDone &&
                    itemId !== "ribbon"
                ) {
                    firstCorrectDone = true;

                    await speak(
                        "zoey",
                        "Да!",
                        VOICE.zoeyCorrect
                    );
                }

                /* =========================
                БАНТИК — ОТДЕЛЬНАЯ ШУТКА
                ========================= */

                if (
                    itemId === "ribbon" &&
                    !ribbonGagDone
                ) {
                    ribbonGagDone = true;

                    await playRibbonGag(
                        element,
                        basketElement
                    );
                }

                /* =========================
                ПОЛОВИНА РАЗОБРАНА
                ========================= */

                if (
                    sortedCount >= 5 &&
                    !halfCommentDone
                ) {
                    halfCommentDone = true;

                    setSpeakerPose(
                        "mira",
                        IMG.miraAnnoyed
                    );

                    await speak(
                        "mira",
                        "Уже гораздо лучше.",
                        VOICE.miraHalf
                    );

                    setSpeakerPose(
                        "mira",
                        IMG.mira
                    );

                    playHoshiSound(
                        HOSHI_SOUND.happy,
                        0.75
                    );
                }

                /* =========================
                ВСЕ 9 СОРТИРОВАНЫ
                ========================= */

                if (
                    sortedCount ===
                    ITEMS.length
                ) {
                    await finishSorting();
                    return;
                }

                busy = false;
            }


            /* =====================================================
               BASKET CLICK
            ===================================================== */

            basketElements.forEach(
                basketElement => {

                    basketElement.addEventListener(
                        "click",
                        async event => {

                            event.stopPropagation();


                            if (
                                !sortingEnabled ||
                                busy ||
                                completed
                            ) {

                                return;

                            }


                            /*
                                Без выбранного предмета
                                корзина ничего не делает.
                            */

                            if (
                                !selectedItem
                            ) {

                                basketElement
                                    .classList
                                    .add(
                                        "hint"
                                    );


                                await wait(
                                    300
                                );


                                basketElement
                                    .classList
                                    .remove(
                                        "hint"
                                    );


                                return;

                            }


                            const element =
                                selectedItem;


                            const correctCategory =
                                element.dataset
                                    .category;


                            const selectedCategory =
                                basketElement.dataset
                                    .category;


                            /*
                                Снимаем выбор ДО анимации,
                                чтобы предмет перестал
                                следовать за мышкой.
                            */

                            selectedItem =
                                null;


                            element.classList.remove(
                                "selected"
                            );


                            if (
                                correctCategory ===
                                selectedCategory
                            ) {

                                await handleCorrectBasket(
                                    element,
                                    basketElement
                                );

                            } else {

                                await handleWrongBasket(
                                    element
                                );

                            }

                        }
                    );

                }
            );


            /* =====================================================
               CLICK ON EMPTY SPACE

               Если Эма передумала —
               можно просто кликнуть
               по пустому месту.
            ===================================================== */

            screen.addEventListener(
                "click",
                event => {

                    if (
                        !selectedItem ||
                        busy ||
                        !sortingEnabled
                    ) {

                        return;

                    }


                    if (
                        event.target.closest(
                            ".lair-sort-item"
                        ) ||
                        event.target.closest(
                            ".lair-basket"
                        )
                    ) {

                        return;

                    }


                    releaseSelectedItem();

                }
            );

                        /* =====================================================
               RIBBON GAG
            ===================================================== */

            async function playRibbonGag(
                element,
                basketElement
            ) {

            firstCorrectDone = true;

                /*
                    Сам предмет уже улетел в корзину,
                    поэтому для шутки создаём
                    временный бантик поверх сцены.
                */

                const screenRect =
                    screen.getBoundingClientRect();


                const basketRect =
                    basketElement.getBoundingClientRect();


                const ribbon =
                    document.createElement(
                        "img"
                    );


                ribbon.className =
                    "lair-ribbon-gag-item";


                ribbon.src =
                    IMG.ribbon;


                ribbon.alt =
                    "";


                ribbon.style.left =
                    `${
                        basketRect.left -
                        screenRect.left +
                        basketRect.width / 2
                    }px`;


                ribbon.style.top =
                    `${
                        basketRect.top -
                        screenRect.top +
                        basketRect.height / 2
                    }px`;


                screen.appendChild(
                    ribbon
                );


                /* =========================
                   ХОШИ ВИДИТ,
                   ЧТО УБРАЛИ ЕГО БАНТИК
                ========================= */

                setHoshiPose(
                    IMG.hoshiShocked
                );


                hoshi.classList.add(
                    "ribbon-shock"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.95
                );


                await wait(
                    450
                );


                /* =========================
                   НЕСЁТСЯ К КОРЗИНЕ 😂
                ========================= */

                hoshi.classList.remove(
                    "ribbon-shock"
                );


                hoshi.classList.add(
                    "ribbon-run"
                );


                await wait(
                    500
                );


                /* =========================
                   ВЫТАСКИВАЕТ БАНТИК
                ========================= */

                ribbon.classList.add(
                    "stolen"
                );


                await wait(
                    350
                );


                setHoshiPose(
                    IMG.hoshiAngry
                );


                hoshi.classList.remove(
                    "ribbon-run"
                );


                hoshi.classList.add(
                    "ribbon-protect"
                );


                playHoshiSound(
                    HOSHI_SOUND.grumble,
                    0.8
                );


                await wait(
                    450
                );


                /* =========================
                   РУМИ:
                   "ХОШИ."
                ========================= */

                await speak(
                    "rumi",
                    "Хоши.",
                    VOICE.rumiRibbon
                );


                /* =========================
                   ХОШИ НЕХОТЯ ОТДАЁТ
                ========================= */

                setHoshiPose(
                    IMG.hoshiSmug
                );


                hoshi.classList.remove(
                    "ribbon-protect"
                );


                hoshi.classList.add(
                    "ribbon-give-back"
                );


                playHoshiSound(
                    HOSHI_SOUND.suspicious,
                    0.75
                );


                await wait(
                    450
                );


                ribbon.classList.remove(
                    "stolen"
                );


                ribbon.classList.add(
                    "returned"
                );


                await wait(
                    450
                );


                ribbon.remove();


                hoshi.classList.remove(
                    "ribbon-give-back"
                );


                setHoshiPose(
                    IMG.hoshiHappyCollection
                );


                await wait(
                    200
                );

            }


            /* =====================================================
               TRAIL TO LAIR
            ===================================================== */

            async function playTrailIntro() {

                trailLayer.classList.add(
                    "show"
                );


                topbar.classList.add(
                    "show"
                );


                await wait(
                    500
                );


                /* =========================
                   ЗОИ БЕРЁТ ЛОЖКУ
                ========================= */

                trailSpoon.classList.add(
                    "highlight"
                );


                setSpeakerPose(
                    "zoey",
                    IMG.zoey
                );


                await speak(
                    "zoey",
                    "Эм… это улика?",
                    VOICE.zoeyClue
                );


                trailSpoon.classList.remove(
                    "highlight"
                );


                /* =========================
                   МИРА СМОТРИТ НА НОСОК
                ========================= */

                trailSock.classList.add(
                    "highlight"
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Очень опасный преступник.",
                    VOICE.miraDangerous
                );


                trailSock.classList.remove(
                    "highlight"
                );


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                /* =========================
                   ИЗ ПРОХОДА СЛЫШЕН ХОШИ
                ========================= */

                playHoshiSound(
                    HOSHI_SOUND.happy,
                    0.7
                );


                await wait(
                    350
                );


                await speak(
                    "zoey",
                    "Он… напевает?",
                    VOICE.zoeyHumming
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Сейчас перестанет.",
                    VOICE.miraStopSoon
                );


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                await speak(
                    "rumi",
                    "Тише.",
                    VOICE.rumiQuiet
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ПЕРЕХОД В ЛОГОВО
                ========================= */

                trailLayer.classList.add(
                    "leave"
                );


                await wait(
                    650
                );


                trailLayer.style.display =
                    "none";


                mainLayer.classList.add(
                    "show"
                );


                await wait(
                    550
                );

            }


            /* =====================================================
               LAIR REVEAL
            ===================================================== */

            async function playLairReveal() {

                /* =========================
                   ХОШИ СИДИТ СРЕДИ
                   СВОЕЙ КОЛЛЕКЦИИ
                ========================= */

                junkPile.classList.add(
                    "show"
                );


                hoshi.classList.add(
                    "show"
                );


                storyStars.classList.add(
                    "show"
                );


                setHoshiPose(
                    IMG.hoshiHappyCollection
                );


                playHoshiSound(
                    HOSHI_SOUND.giggle,
                    0.75
                );


                await wait(
                    650
                );


                /* =========================
                   ЗОИ УМИЛЯЕТСЯ
                ========================= */

                setSpeakerPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "О-о-ой...",
                    VOICE.zoeyAww
                );


                /* =========================
                   МИРА СРАЗУ ПРЕСЕКАЕТ 😂
                ========================= */

                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Не начинай.",
                    VOICE.miraDont
                );


                await speak(
                    "zoey",
                    "Но посмотри на него!",
                    VOICE.zoeyLook
                );


                setSpeakerPose(
                    "zoey",
                    IMG.zoey
                );


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                /* =========================
                   ХОШИ НАКОНЕЦ ЗАМЕЧАЕТ ИХ
                ========================= */

                setHoshiPose(
                    IMG.hoshiShocked
                );


                hoshi.classList.add(
                    "noticed"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.95
                );


                await wait(
                    500
                );


                /* =========================
                   СНИМАЕТ БАНТИК,
                   ПРЯЧЕТ ЛОЖКУ 😂

                   Это показываем анимацией,
                   потому что happy_collection
                   уже содержит весь образ.
                ========================= */

                hoshi.classList.remove(
                    "noticed"
                );


                hoshi.classList.add(
                    "hide-treasures"
                );


                await wait(
                    500
                );


                await speak(
                    "rumi",
                    "Хоши.",
                    VOICE.rumiHoshi
                );


                /* =========================
                   ХВАТАЕТ ЗВЁЗДЫ
                   И ПЫТАЕТСЯ УБЕЖАТЬ
                ========================= */

                setHoshiPose(
                    IMG.hoshiRunningCarry
                );


                hoshi.classList.remove(
                    "hide-treasures"
                );


                hoshi.classList.add(
                    "try-run"
                );


                await wait(
                    350
                );


                /* =========================
                   БРЯК-БДЫНЬ-ДЗЫНЬ
                ========================= */

                audio.playSfx(
                    SFX.clatter,
                    0.9
                );


                junkPile.classList.add(
                    "clatter"
                );


                hoshi.classList.add(
                    "trip"
                );


                await wait(
                    550
                );


                /* =========================
                   ОДНА ЗВЕЗДА ПАДАЕТ
                   В КУЧУ
                ========================= */

                fallingStar.classList.add(
                    "fall"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.65
                );


                await wait(
                    600
                );


                fallingStar.classList.add(
                    "lost"
                );


                /* =========================
                   ОСТАЛОСЬ 3 ЗВЕЗДЫ
                   У ХОШИ
                ========================= */

                await wait(300);

                // 1. Убираем все сюжетные звёзды
                storyStars.classList.remove("show");

                // 2. Ставим Хоши в позу бега
                setHoshiPose(IMG.hoshiRunningCarry);
                hoshi.classList.add("show");

                // 3. Убираем лишние классы
                hoshi.classList.remove("try-run", "trip", "searching-star", "noticed");

                // 4. Запускаем анимацию убегания вправо
                hoshi.style.transition = "left 0.9s ease-in, opacity 0.8s ease";
                hoshi.style.left = "120%";
                hoshi.style.opacity = "0";

                // 5. Ждём, пока он скроется
                await wait(950);

                // 6. Сбрасываем инлайн-стили и скрываем элемент
                hoshi.style.left = "";
                hoshi.style.top = "";
                hoshi.style.opacity = "";
                hoshi.style.transition = "";
                hoshi.classList.remove("show");

                // 7. Прячем упавшую звезду (если она ещё видна)
                fallingStar.classList.remove("fall", "lost");
                fallingStar.style.display = "none";

                await wait(450);


                /* =========================
                   ВСЕ СМОТРЯТ НА БАРДАК
                ========================= */

                hideSpeakers();


                setSubtitle(
                    ""
                );


                await wait(
                    300
                );


                await startSortingIntro();

            }

                        /* =====================================================
               SORTING INTRO
            ===================================================== */

            async function startSortingIntro() {

                busy =
                    true;


                setHoshiPose(
                    IMG.hoshiScared
                );


                await speak(
                    "rumi",
                    "Здесь ничего не найти.",
                    VOICE.rumiCantFind
                );


                await speak(
                    "zoey",
                    "Давайте разберём!",
                    VOICE.zoeySort
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Его бардак?",
                    VOICE.miraHisMess
                );


                await speak(
                    "zoey",
                    "Нашу звезду.",
                    VOICE.zoeyOurStar
                );


                await speak(
                    "mira",
                    "А. Так звучит лучше.",
                    VOICE.miraBetter
                );


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   УБИРАЕМ СЮЖЕТНЫЕ ЗВЁЗДЫ

                   Три оставшиеся остаются
                   "у Хоши" сюжетно, но
                   не мешают сортировке.
                ========================= */

                storyStars.classList.add(
                    "hide-for-game"
                );


                /* =========================
                   ПОКАЗЫВАЕМ КОРЗИНЫ
                ========================= */

                basketsLayer.classList.add(
                    "show"
                );


                await wait(
                    350
                );


                /* =========================
                   ПОКАЗЫВАЕМ ПРЕДМЕТЫ
                ========================= */

                itemsLayer.classList.add(
                    "show"
                );

                checklistContainer.classList.add("show");


                itemElements.forEach(
                    (
                        element,
                        index
                    ) => {

                        setTimeout(
                            () => {

                                element.classList.add(
                                    "show"
                                );

                            },
                            index * 70
                        );

                    }
                );


                await wait(
                    750
                );


                /* =========================
                   ИНСТРУКЦИЯ
                ========================= */

                await speak(
                    "rumi",
                    "Эма, разложи вещи по корзинам.",
                    VOICE.rumiInstruction
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                /* =========================
                   ХОШИ НАБЛЮДАЕТ
                ========================= */

                setHoshiPose(
                    
                    IMG.hoshiHappyCollection
                );


                hoshi.classList.add(
                    "sorting-watch"
                );


                sortingEnabled =
                    true;


                busy =
                    false;

            }


            /* =====================================================
               FINISH SORTING
            ===================================================== */

            async function finishSorting() {

                sortingEnabled =
                    false;


                selectedItem =
                    null;


                completed =
                    true;


                busy =
                    true;


                hideSpeakers();


                setSubtitle(
                    ""
                );


                await speak(
                    "zoey",
                    "Готово!",
                    VOICE.zoeyDone
                );


                /* =========================
                   ХОШИ ДОВОЛЕН ПОРЯДКОМ
                ========================= */

                setHoshiPose(
                    IMG.hoshiHappyCollection
                );


                hoshi.classList.remove(
                    "sorting-watch"
                );


                hoshi.classList.add(
                    "sorting-happy"
                );


                playHoshiSound(
                    HOSHI_SOUND.giggle,
                    0.85
                );


                await wait(
                    500
                );


                /* =========================
                   КУЧА НЕМНОГО РАЗЪЕЗЖАЕТСЯ
                ========================= */

                junkPile.classList.add(
                    "cleared"
                );


                await wait(
                    650
                );


                /* =========================
                   ИЗ-ПОД БАРАХЛА —
                   ЗВЕЗДА №4
                ========================= */

                fourthStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.95
                );


                await wait(
                    350
                );


                /* =========================
                   ХОШИ ТОЖЕ ЕЁ УВИДЕЛ 😈
                ========================= */

                setHoshiPose(
                    IMG.hoshiMischief
                );


                hoshi.classList.remove(
                    "sorting-happy"
                );


                hoshi.classList.add(
                    "sees-star"
                );


                await wait(
                    300
                );


                fourthStar.classList.add(
                    "ready"
                );


                starReady =
                    true;


                busy =
                    false;

                checklistContainer.classList.remove("show");

            }


            /* =====================================================
               STAR 4 CLICK
            ===================================================== */

            fourthStar.addEventListener(
                "click",
                async () => {

                    if (
                        !starReady ||
                        busy
                    ) {

                        return;

                    }


                    starReady =
                        false;


                    busy =
                        true;


                    fourthStar.classList.remove(
                        "ready"
                    );


                    /* =========================
                       ЭМА ЗАБИРАЕТ ЗВЕЗДУ
                    ========================= */

                    fourthStar.classList.add(
                        "collect"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.95
                    );


                    /* =========================
                       ХОШИ ОПЯТЬ ПРОМАЗАЛ 😂
                    ========================= */

                    hoshi.classList.add(
                        "star-miss"
                    );


                    setHoshiPose(
                        IMG.hoshiShocked
                    );


                    playHoshiSound(
                        HOSHI_SOUND.surprised,
                        0.85
                    );


                    await wait(
                        550
                    );


                    /* =========================
                       HUD 3 → 4
                    ========================= */

                    updateStarHud(
                        starHud,
                        4
                    );


                    game.setStarsCollected(
                        4
                    );


                    fourthStar.classList.remove(
                        "show"
                    );


                    fourthStar.classList.add(
                        "hidden"
                    );


                    await wait(
                        300
                    );


                    /* =========================
                       ХОШИ НЕДОВОЛЕН
                ========================= */

                    setHoshiPose(
                        IMG.hoshiAngry
                    );


                    hoshi.classList.remove(
                        "star-miss"
                    );


                    hoshi.classList.add(
                        "angry-four"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.grumble,
                        0.8
                    );


                    await wait(
                        400
                    );


                    /* =========================
                       РУМИ
                ========================= */

                    await speak(
                        "rumi",
                        "Четыре у нас.",
                        VOICE.rumiFour
                    );


                    /* =========================
                       ЗОИ СМОТРИТ НА КОЛЛЕКЦИЮ
                ========================= */

                    setSpeakerPose(
                        "zoey",
                        IMG.zoeyExcited
                    );


                    await speak(
                        "zoey",
                        "Ты всё это нашёл?",
                        VOICE.zoeyCollection
                    );


                    setSpeakerPose(
                        "zoey",
                        IMG.zoey
                    );


                    /* =========================
                       ХОШИ ГОРДИТСЯ 😌
                ========================= */

                    setHoshiPose(
                        IMG.hoshiSmug
                    );


                    hoshi.classList.remove(
                        "angry-four"
                    );


                    hoshi.classList.add(
                        "proud"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.happy,
                        0.7
                    );


                    await wait(
                        500
                    );


                    /* =========================
                       МИРА ПОДНИМАЕТ НОСОК 😂
                ========================= */

                    await playSockEnding();

                }
            );


            /* =====================================================
               SOCK ENDING
            ===================================================== */

            async function playSockEnding() {

                const sock =
                    document.createElement(
                        "img"
                    );


                sock.className =
                    "lair-ending-sock";


                sock.src =
                    IMG.sock;


                sock.alt =
                    "";


                screen.appendChild(
                    sock
                );


                await wait(
                    250
                );


                sock.classList.add(
                    "show"
                );


                setSpeakerPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "Великолепная коллекция.",
                    VOICE.miraMagnificent
                );


                /* =========================
                   ХОШИ:
                   ЭТО МОЙ НОСОК 😤
                ========================= */

                setHoshiPose(
                    IMG.hoshiAngry
                );


                hoshi.classList.remove(
                    "proud"
                );


                hoshi.classList.add(
                    "sock-panic"
                );


                playHoshiSound(
                    HOSHI_SOUND.grumble,
                    0.9
                );


                await wait(
                    250
                );


                /* =========================
                   ВЫХВАТЫВАЕТ НОСОК
                ========================= */

                sock.classList.add(
                    "snatched"
                );


                await wait(
                    450
                );


                sock.remove();


                setSpeakerPose(
                    "mira",
                    IMG.mira
                );


                setHoshiPose(
                    IMG.hoshiSmug
                );


                hoshi.classList.remove(
                    "sock-panic"
                );


                hoshi.classList.add(
                    "hugging-treasure"
                );


                await wait(
                    500
                );


                /*
                    Здесь Руми замечает,
                    что Хоши действительно
                    ценит свои странные вещи.

                    Реплики не нужно.
                    Просто маленькая пауза.
                */

                setSpeakerPose(
                    "rumi",
                    IMG.rumi
                );


                rumi.classList.add(
                    "show"
                );


                await wait(
                    550
                );


                rumi.classList.remove(
                    "show"
                );


                /* =========================
                   ХОШИ ВСПОМИНАЕТ
                   ПРО ОСТАВШИЕСЯ 3 ЗВЕЗДЫ
                ========================= */

                setHoshiPose(
                    IMG.hoshiRunningCarry
                );


                hoshi.classList.remove(
                    "hugging-treasure"
                );


                hoshi.classList.add(
                    "escape-ready"
                );


                await wait(
                    300
                );


                playHoshiSound(
                    HOSHI_SOUND.giggle,
                    0.65
                );


                /* =========================
                   УБЕГАЕТ ЧЕРЕЗ ЗАДНИЙ ПРОХОД
                ========================= */

                hoshi.classList.add(
                    "escape"
                );


                await wait(
                    850
                );


                hoshi.classList.remove(
                    "show"
                );


                hideSpeakers();


                setSubtitle(
                    ""
                );


                await wait(
                    450
                );

                stopLairBgm();
                /* =========================
                   СЛЕДУЮЩАЯ СЦЕНА
                   — МАГИЧЕСКИЕ ПЕЧАТИ
                ========================= */

                game.showScene(
                    "seals"
                );

            }


            /* =====================================================
               START SCENE
            ===================================================== */
            buildChecklist();
            await wait(250);
            await playTrailIntro();
            await playLairReveal();

        }

    };

}