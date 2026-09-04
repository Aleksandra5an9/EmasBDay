/* =========================================================
   SCENE 09 — SEVEN STARS

   Все семь звёзд возвращены.

   1. HUD показывает 7 / 7
   2. Звёзды покидают HUD
   3. Кружатся над Honmoon
   4. Складываются в большую цифру 7
   5. Появляется восстановленная эмблема
   6. Все вспоминают про подарок 😂
========================================================= */


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    /* =========================
       BACKGROUND
    ========================= */

    background:
        "./assets/images/final_honmoon_bg.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       RESTORED EMBLEM
    ========================= */

    emblem:
        "./assets/images/huntrix_emblem_normal.png",


    /* =========================
       RUMI
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    rumiSmile:
        "./assets/images/rumi_smile.png",

    rumiSurprised:
        "./assets/images/rumi_surprised.png",

    rumiExcited:
        "./assets/images/rumi_excited.png",


    /* =========================
       MIRA
    ========================= */

    mira:
        "./assets/images/mira_neutral.png",

    miraAnnoyed:
        "./assets/images/mira_annoyed.png",

    miraSmile:
        "./assets/images/mira_smile.png",


    /* =========================
       ZOEY
    ========================= */

    zoey:
        "./assets/images/zoey_neutral.png",

    zoeyExcited:
        "./assets/images/zoey_excited.png",

    zoeyEmotional:
        "./assets/images/zoey_emotional.png",


    /* =========================
       HOSHI
    ========================= */

    hoshi:
        "./assets/images/hoshi_happy.png",

    hoshiWonder:
        "./assets/images/hoshi_wonder.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiShocked:
        "./assets/images/hoshi_shocked.png"

};


/* =========================================================
   VOICES
========================================================= */

const VOICE = {

    /* =========================
       SEVEN STARS
    ========================= */

    zoeySeven:
        "./assets/audio/s09_zoey_01_seven.mp3",

    miraCounting:
        "./assets/audio/s09_mira_01_counting.mp3",

    zoeyThanks:
        "./assets/audio/s09_zoey_02_i_know.mp3",

    rumiReturned:
        "./assets/audio/s09_rumi_01_returned.mp3",

    zoeyLook:
        "./assets/audio/s09_zoey_03_look.mp3",


    /* =========================
       BIG 7
    ========================= */

    zoeySevenForSeven:
        "./assets/audio/s09_zoey_04_seven_for_seven.mp3",

    rumiExactly:
        "./assets/audio/s09_rumi_02_exactly.mp3",


    /* =========================
       EMBLEM
    ========================= */

    miraNotAll:
        "./assets/audio/s09_mira_02_not_all.mp3",

    rumiRemember:
        "./assets/audio/s09_rumi_03_remember.mp3",

    rumiMagic:
        "./assets/audio/s09_rumi_04_returned_magic.mp3",


    /* =========================
       GIFT 😂
    ========================= */

    miraAnd:
        "./assets/audio/s09_mira_03_and.mp3",

    rumiAndWhat:
        "./assets/audio/s09_rumi_05_and_what.mp3",

    zoeyRumi:
        "./assets/audio/s09_zoey_05_rumi.mp3",

    miraGift:
        "./assets/audio/s09_mira_04_gift.mp3",

    rumiGift:
        "./assets/audio/s09_rumi_06_gift.mp3",

    zoeyGift:
        "./assets/audio/s09_zoey_06_gift.mp3",

    miraDont:
        "./assets/audio/s09_mira_05_dont_even.mp3",

    rumiNotHere:
        "./assets/audio/s09_rumi_07_not_here.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    wonder:
        "./assets/audio/hoshi_wonder.mp3",

    happy:
        "./assets/audio/hoshi_giggle_happy.mp3",

    surprised:
        "./assets/audio/hoshi_surprised.mp3",

    suspicious:
        "./assets/audio/hoshi_suspicious.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    star:
        "./assets/audio/star_appear.mp3",

    sparkle:
        "./assets/audio/magic_burst.mp3",

    magic:
        "./assets/audio/magic_zap.mp3"

};


/* =========================================================
   VOLUME
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
   CREATE SCENE
========================================================= */

export function createSevenStarsScene({
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


            /* =====================================================
               SCREEN
            ===================================================== */

            const screen =
                document.createElement(
                    "div"
                );


            screen.className =
                "seven-stars-scene";


            /* =====================================================
               HTML
            ===================================================== */

            screen.innerHTML = `

                <!-- =============================================
                     BACKGROUND
                ============================================== -->

                <img
                    class="seven-stars-bg"
                    src="${IMG.background}"
                    alt=""
                >


                <!-- =============================================
                     CHARACTERS

                     Как и в quietHonmoon:
                     все остаются на экране.
                ============================================== -->

                <div
                    class="seven-stars-stage"
                    id="sevenStarsStage"
                >

                    <img
                        class="
                            seven-character
                            seven-mira
                        "
                        id="sevenMira"
                        src="${IMG.mira}"
                        alt=""
                    >


                    <img
                        class="
                            seven-character
                            seven-rumi
                        "
                        id="sevenRumi"
                        src="${IMG.rumiSmile}"
                        alt=""
                    >


                    <img
                        class="
                            seven-character
                            seven-zoey
                        "
                        id="sevenZoey"
                        src="${IMG.zoeyExcited}"
                        alt=""
                    >


                    <img
                        class="seven-hoshi"
                        id="sevenHoshi"
                        src="${IMG.hoshi}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     TEMPORARY HUD

                     Здесь специально собственный HUD.

                     Он сначала показывает семь,
                     а потом звёзды буквально
                     покидают его.
                ============================================== -->

                <div
                    class="seven-hud"
                    id="sevenHud"
                >

                    <div
                        class="seven-hud-panel"
                    >

                        ${Array.from({
                            length: 7
                        }, (_, index) => `

                            <img
                                class="seven-hud-star"
                                data-star="${index}"
                                src="${IMG.star}"
                                alt=""
                            >

                        `).join("")}

                    </div>

                </div>


                <!-- =============================================
                     FLYING STARS

                     Это уже отдельные 7 звёзд,
                     которые будут кружиться
                     по всему экрану.
                ============================================== -->

                <div
                    class="seven-flying-layer"
                    id="sevenFlyingLayer"
                >

                    ${Array.from({
                        length: 7
                    }, (_, index) => `

                        <img
                            class="
                                seven-flying-star
                                seven-flying-star-${index + 1}
                            "
                            data-flying-star="${index}"
                            src="${IMG.star}"
                            alt=""
                        >

                    `).join("")}

                </div>


                <!-- =============================================
                     BIG NUMBER 7

                     Не текст.

                     Семь настоящих звёзд
                     сами образуют форму семёрки.
                ============================================== -->

                <div
                    class="seven-number"
                    id="sevenNumber"
                ></div>


                <!-- =============================================
                     RESTORED EMBLEM
                ============================================== -->

                <div
                    class="seven-emblem-wrap"
                    id="sevenEmblemWrap"
                >

                    <div
                        class="seven-emblem-light"
                    ></div>


                    <img
                        class="seven-emblem"
                        id="sevenEmblem"
                        src="${IMG.emblem}"
                        alt=""
                    >

                </div>


                <!-- =============================================
                     FINAL MAGIC / PORTAL EFFECT
                ============================================== -->

                <div
                    class="seven-final-light"
                    id="sevenFinalLight"
                ></div>


                <!-- =============================================
                     DIALOGUE
                ============================================== -->

                <div
                    class="seven-dialogue-box"
                    id="sevenDialogueBox"
                >

                    <div
                        class="seven-speaker-name"
                        id="sevenSpeakerName"
                    ></div>


                    <div
                        class="seven-subtitle"
                        id="sevenSubtitle"
                    ></div>

                </div>

            `;


            root.appendChild(
                screen
            );


            /* =====================================================
               ELEMENTS
            ===================================================== */

            const stage =
                screen.querySelector(
                    "#sevenStarsStage"
                );


            const rumi =
                screen.querySelector(
                    "#sevenRumi"
                );


            const mira =
                screen.querySelector(
                    "#sevenMira"
                );


            const zoey =
                screen.querySelector(
                    "#sevenZoey"
                );


            const hoshi =
                screen.querySelector(
                    "#sevenHoshi"
                );


            const sevenHud =
                screen.querySelector(
                    "#sevenHud"
                );


            const hudStars = [

                ...screen.querySelectorAll(
                    ".seven-hud-star"
                )

            ];


            const flyingLayer =
                screen.querySelector(
                    "#sevenFlyingLayer"
                );


            const flyingStars = [

                ...screen.querySelectorAll(
                    ".seven-flying-star"
                )

            ];


            const sevenNumber =
                screen.querySelector(
                    "#sevenNumber"
                );


            const emblemWrap =
                screen.querySelector(
                    "#sevenEmblemWrap"
                );


            const emblem =
                screen.querySelector(
                    "#sevenEmblem"
                );


            const finalLight =
                screen.querySelector(
                    "#sevenFinalLight"
                );


            const dialogueBox =
                screen.querySelector(
                    "#sevenDialogueBox"
                );


            const speakerName =
                screen.querySelector(
                    "#sevenSpeakerName"
                );


            const subtitle =
                screen.querySelector(
                    "#sevenSubtitle"
                );


            const characters = {

                rumi,
                mira,
                zoey

            };


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


            function clearSpeaking() {

                Object.values(
                    characters
                ).forEach(
                    character => {

                        character.classList.remove(
                            "speaking"
                        );

                    }
                );


                hoshi.classList.remove(
                    "speaking"
                );

            }


            function setCharacterPose(
                name,
                image
            ) {

                const character =
                    characters[
                        name
                    ];


                if (!character) {

                    return;

                }


                character.src =
                    image;

            }


            function setHoshiPose(
                image
            ) {

                hoshi.src =
                    image;

            }


            async function speak(
                characterName,
                name,
                text,
                path
            ) {

                clearSpeaking();


                speakerName.textContent =
                    name || "";


                subtitle.textContent =
                    text || "";


                dialogueBox.classList.add(
                    "show"
                );


                const character =
                    characters[
                        characterName
                    ];


                if (
                    character
                ) {

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
                    100
                );

            }


            function clearDialogue() {

                clearSpeaking();


                dialogueBox.classList.remove(
                    "show"
                );


                speakerName.textContent =
                    "";


                subtitle.textContent =
                    "";

            }


            function playHoshiSound(
                path,
                volume = 0.7
            ) {

                audio.playSfx(
                    path,
                    volume
                );

            }

                        /* =====================================================
               SHOW SEVEN STARS
            ===================================================== */

            async function playSevenStarsIntro() {

                busy =
                    true;


                /* =========================
                   ПОКАЗЫВАЕМ ВСЕХ
                ========================= */

                stage.classList.add(
                    "show"
                );


                sevenHud.classList.add(
                    "show"
                );


                await wait(
                    500
                );


                /* =========================
                   ВСЕ 7 ЗВЁЗД ГОРЯТ
                ========================= */

                hudStars.forEach(
                    (star, index) => {

                        setTimeout(
                            () => {

                                star.classList.add(
                                    "glow"
                                );

                            },
                            index * 90
                        );

                    }
                );


                audio.playSfx(
                    SFX.star,
                    0.7
                );


                await wait(
                    950
                );


                /* =================================================
                   ЗОИ:
                   СЕМЬ!
                ================================================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Семь!",
                    VOICE.zoeySeven
                );


                /* =========================
                   МИРА СМОТРИТ НА ЗОИ 😂
                ========================= */

                mira.classList.add(
                    "look-at-zoey"
                );


                await wait(
                    400
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Я знаю. Ты умеешь считать.",
                    VOICE.zoeyThanks
                );


                setCharacterPose(
                    "mira",
                    IMG.miraSmile
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Спасибо.",
                    VOICE.miraCounting
                );


                mira.classList.remove(
                    "look-at-zoey"
                );


                setCharacterPose(
                    "mira",
                    IMG.mira
                );


                setCharacterPose(
                    "zoey",
                    IMG.zoey
                );


                /* =================================================
                   РУМИ
                ================================================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiSmile
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Все семь звёзд вернулись.",
                    VOICE.rumiReturned
                );


                await wait(
                    250
                );


                /* =================================================
                   ЗВЁЗДЫ НАЧИНАЮТ ДВИГАТЬСЯ
                ================================================= */

                hudStars.forEach(
                    star => {

                        star.classList.add(
                            "ready-to-leave"
                        );

                    }
                );


                await wait(
                    550
                );


                setCharacterPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Смотри!",
                    VOICE.zoeyLook
                );


                clearDialogue();


                await starsLeaveHud();

            }


            /* =====================================================
               STARS LEAVE HUD
            ===================================================== */

            async function starsLeaveHud() {

                /*
                    Мы узнаём реальные позиции
                    семи звёзд в HUD.

                    Поэтому летящие звёзды
                    действительно начинают движение
                    именно оттуда, где находился HUD.
                */

                const screenRect =
                    screen.getBoundingClientRect();


                hudStars.forEach(
                    (hudStar, index) => {

                        const rect =
                            hudStar.getBoundingClientRect();


                        const flyingStar =
                            flyingStars[
                                index
                            ];


                        const centerX =
                            rect.left -
                            screenRect.left +
                            rect.width / 2;


                        const centerY =
                            rect.top -
                            screenRect.top +
                            rect.height / 2;


                        flyingStar.style.left =
                            `${centerX}px`;


                        flyingStar.style.top =
                            `${centerY}px`;


                        flyingStar.style.setProperty(
                            "--star-delay",
                            `${index * 0.08}s`
                        );

                    }
                );


                /* =========================
                   ПОКАЗЫВАЕМ ЛЕТЯЩИЕ КОПИИ
                ========================= */

                flyingLayer.classList.add(
                    "show"
                );


                flyingStars.forEach(
                    star => {

                        star.classList.add(
                            "visible"
                        );

                    }
                );


                await wait(
                    100
                );


                /* =================================================
                   ЗВЁЗДЫ ПО ОДНОЙ
                   ПОКИДАЮТ HUD
                ================================================= */

                for (
                    let index = 0;
                    index < hudStars.length;
                    index++
                ) {

                    const hudStar =
                        hudStars[
                            index
                        ];


                    const flyingStar =
                        flyingStars[
                            index
                        ];


                    hudStar.classList.add(
                        "leave"
                    );


                    flyingStar.classList.add(
                        "launch"
                    );


                    audio.playSfx(
                        SFX.star,
                        0.35
                    );


                    await wait(
                        100
                    );

                }


                await wait(
                    450
                );


                /* =========================
                   HUD СТАНОВИТСЯ ПУСТЫМ
                ========================= */

                sevenHud.classList.add(
                    "empty"
                );


                await wait(
                    300
                );


                sevenHud.classList.add(
                    "hide"
                );


                await wait(
                    300
                );


                /* =================================================
                   ЗВЁЗДЫ РАЗЛЕТАЮТСЯ
                   ПО НЕБУ
                ================================================= */

                await orbitStars();

            }


            /* =====================================================
               STAR ORBIT
            ===================================================== */

            async function orbitStars() {

                /*
                    Каждой звезде задаём
                    свою точку вокруг центра.

                    CSS плавно отправит их туда.
                */

                const orbitPoints = [

                    {
                        left: 28,
                        top: 28
                    },

                    {
                        left: 41,
                        top: 18
                    },

                    {
                        left: 57,
                        top: 20
                    },

                    {
                        left: 71,
                        top: 31
                    },

                    {
                        left: 68,
                        top: 51
                    },

                    {
                        left: 51,
                        top: 61
                    },

                    {
                        left: 32,
                        top: 52
                    }

                ];


                flyingStars.forEach(
                    (star, index) => {

                        const point =
                            orbitPoints[
                                index
                            ];


                        star.style.setProperty(
                            "--orbit-left",
                            `${point.left}%`
                        );


                        star.style.setProperty(
                            "--orbit-top",
                            `${point.top}%`
                        );


                        star.style.setProperty(
                            "--orbit-delay",
                            `${index * 0.06}s`
                        );


                        star.classList.remove(
                            "launch"
                        );


                        star.classList.add(
                            "orbit"
                        );

                    }
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.65
                );


                /* =========================
                   ХОШИ В ВОСТОРГЕ
                ========================= */

                setHoshiPose(
                    IMG.hoshiWonder
                );


                hoshi.classList.add(
                    "watch-stars"
                );


                playHoshiSound(
                    HOSHI_SOUND.wonder,
                    0.45
                );


                /* =========================
                   ДЕВОЧКИ СМОТРЯТ ВВЕРХ
                ========================= */

                stage.classList.add(
                    "watch-stars"
                );


                await wait(
                    1900
                );


                /*
                    Ещё один круг.

                    Не слишком долго —
                    иначе сцена начнёт
                    затягиваться.
                */

                flyingLayer.classList.add(
                    "spin"
                );


                await wait(
                    1600
                );


                flyingLayer.classList.remove(
                    "spin"
                );


                /* =================================================
                   СОБИРАЕМ СЕМЁРКУ
                ================================================= */

                await formNumberSeven();

            }


            /* =====================================================
               FORM NUMBER 7
            ===================================================== */

            async function formNumberSeven() {

                /*
                    Расстановка звёзд в форме:

                    ⭐ ⭐ ⭐ ⭐
                          ⭐
                       ⭐
                    ⭐

                    Сам sevenNumber будет
                    только сиянием позади.
                */

                const sevenPoints = [

                    /* верхняя линия */

                    {
                        left: 39,
                        top: 27
                    },

                    {
                        left: 47,
                        top: 27
                    },

                    {
                        left: 55,
                        top: 27
                    },

                    {
                        left: 63,
                        top: 27
                    },


                    /* диагональ */

                    {
                        left: 59,
                        top: 39
                    },

                    {
                        left: 54,
                        top: 52
                    },

                    {
                        left: 49,
                        top: 66
                    }

                ];


                sevenNumber.classList.add(
                    "forming"
                );


                flyingStars.forEach(
                    (star, index) => {

                        const point =
                            sevenPoints[
                                index
                            ];


                        star.classList.remove(
                            "orbit"
                        );


                        star.style.setProperty(
                            "--seven-left",
                            `${point.left}%`
                        );


                        star.style.setProperty(
                            "--seven-top",
                            `${point.top}%`
                        );


                        star.style.setProperty(
                            "--seven-delay",
                            `${index * 0.07}s`
                        );


                        star.classList.add(
                            "form-seven"
                        );

                    }
                );


                await wait(
                    1200
                );


                /* =========================
                   БОЛЬШОЕ СИЯНИЕ
                ========================= */

                sevenNumber.classList.add(
                    "complete"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.9
                );


                await wait(
                    450
                );


                /* =========================
                   ХОШИ 😲
                ========================= */

                setHoshiPose(
                    IMG.hoshiShocked
                );


                hoshi.classList.remove(
                    "watch-stars"
                );


                hoshi.classList.add(
                    "shocked"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.55
                );


                await wait(
                    550
                );


                /* =================================================
                   ЗОИ:
                   7 ЗВЁЗД ДЛЯ 7-ЛЕТНЕЙ ЭМЫ
                ================================================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Семь звёзд для семилетней Эмы!",
                    VOICE.zoeySevenForSeven
                );


                /* =========================
                   РУМИ
                ========================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiSmile
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Именно.",
                    VOICE.rumiExactly
                );


                clearDialogue();


                await wait(
                    700
                );


                /* =================================================
                   СЕМЁРКА ОСТАЁТСЯ В НЕБЕ,
                   НО ЧУТЬ УМЕНЬШАЕТСЯ,
                   ОСВОБОЖДАЯ ЦЕНТР
                ================================================= */

                flyingLayer.classList.add(
                    "seven-finished"
                );


                sevenNumber.classList.add(
                    "seven-finished"
                );


                await wait(
                    650
                );


                stage.classList.remove(
                    "watch-stars"
                );


                setHoshiPose(
                    IMG.hoshiWonder
                );


                hoshi.classList.remove(
                    "shocked"
                );


                /* =================================================
                   ТЕПЕРЬ ЭМБЛЕМА
                ================================================= */

                await restoreEmblem();

            }


            /* =====================================================
               RESTORE EMBLEM
            ===================================================== */

            async function restoreEmblem() {

                /* =========================
                   МИРА:
                   ЭТО ЕЩЁ НЕ ВСЁ
                ========================= */

                setCharacterPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Это ещё не всё.",
                    VOICE.miraNotAll
                );


                clearDialogue();


                await wait(
                    300
                );


                /* =================================================
                   ПОЯВЛЯЕТСЯ ЭМБЛЕМА,
                   КОТОРУЮ ЭМА РАСКРАШИВАЛА
                ================================================= */

                emblemWrap.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.magic,
                    0.65
                );


                await wait(
                    850
                );


                /* =========================
                   РУМИ
                ========================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiSmile
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Помнишь её?",
                    VOICE.rumiRemember
                );


                /* =========================
                   ЭМБЛЕМА ЗАЖИГАЕТСЯ
                ========================= */

                emblemWrap.classList.add(
                    "charged"
                );


                emblem.classList.add(
                    "glow"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.75
                );


                await wait(
                    500
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Ты сама вернула ей магию.",
                    VOICE.rumiMagic
                );


                clearDialogue();


                /* =================================================
                   СВЕТ ОТ ЭМБЛЕМЫ И СЕМЁРКИ
                   СОЕДИНЯЕТСЯ
                ================================================= */

                finalLight.classList.add(
                    "show"
                );


                sevenNumber.classList.add(
                    "magic-linked"
                );


                emblemWrap.classList.add(
                    "magic-linked"
                );


                await wait(
                    1200
                );


                /* =================================================
                   И ВОТ ТЕПЕРЬ...

                   МИРА ВСПОМИНАЕТ,
                   ЧТО ВООБЩЕ-ТО ЕСТЬ ЕЩЁ
                   ОДНА МЕЛКАЯ ДЕТАЛЬ 😂
                ================================================= */

                await giftConversation();

            }

                        /* =====================================================
               THE GIFT 😂
            ===================================================== */

            async function giftConversation() {

                busy =
                    true;


                /* =================================================
                   НЕБОЛЬШАЯ ПАУЗА

                   Все смотрят на восстановленную
                   эмблему и сияющую семёрку.
                ================================================= */

                await wait(
                    650
                );


                /* =========================
                   МИРА СМОТРИТ НА РУМИ
                ========================= */

                setCharacterPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                mira.classList.add(
                    "look-at-rumi"
                );


                await speak(
                    "mira",
                    "МИРА",
                    "И?",
                    VOICE.miraAnd
                );


                /* =========================
                   РУМИ НЕ ПОНИМАЕТ 😂
                ========================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumi
                );


                rumi.classList.add(
                    "confused"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Что — «и»?",
                    VOICE.rumiAndWhat
                );


                /* =========================
                   ЗОИ:
                   РУМИ...
                ========================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyEmotional
                );


                zoey.classList.add(
                    "look-at-rumi"
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Руми...",
                    VOICE.zoeyRumi
                );


                await wait(
                    250
                );


                /* =========================
                   МИРА:
                   ПОДАРОК.
                ========================= */

                await speak(
                    "mira",
                    "МИРА",
                    "Подарок.",
                    VOICE.miraGift
                );


                /* =================================================
                   ...

                   ДО РУМИ ДОХОДИТ.
                ================================================= */

                clearDialogue();


                rumi.classList.remove(
                    "confused"
                );


                setCharacterPose(
                    "rumi",
                    IMG.rumiSurprised
                );


                rumi.classList.add(
                    "realize"
                );


                await wait(
                    650
                );


                /* =========================
                   РУМИ 😳
                ========================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "ПОДАРОК!",
                    VOICE.rumiGift
                );


                rumi.classList.remove(
                    "realize"
                );


                rumi.classList.add(
                    "gift-panic"
                );


                /* =========================
                   ЗОИ ТОЖЕ ОЖИВЛЯЕТСЯ
                ========================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Подарок!",
                    VOICE.zoeyGift
                );


                /* =================================================
                   ХОШИ СЛЫШИТ СЛОВО
                   "ПОДАРОК" 😂
                ================================================= */

                setHoshiPose(
                    IMG.hoshiMischief
                );


                hoshi.classList.add(
                    "gift-alert"
                );


                playHoshiSound(
                    HOSHI_SOUND.suspicious,
                    0.5
                );


                await wait(
                    500
                );


                /* =========================
                   ХОШИ:
                   ОПА. ИНТЕРЕСНО.
                ========================= */

                hoshi.classList.add(
                    "gift-sneak"
                );


                playHoshiSound(
                    HOSHI_SOUND.happy,
                    0.4
                );


                await wait(
                    450
                );


                /* =================================================
                   МИРА ДАЖЕ НЕ СМОТРИТ НА НЕГО 😂
                ================================================= */

                setCharacterPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Даже не думай.",
                    VOICE.miraDont
                );


                /* =========================
                   ХОШИ ЗАМИРАЕТ
                ========================= */

                setHoshiPose(
                    IMG.hoshiShocked
                );


                hoshi.classList.remove(
                    "gift-sneak"
                );


                hoshi.classList.add(
                    "caught"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.45
                );


                await wait(
                    450
                );


                /* =========================
                   А ПОТОМ ДЕЛАЕТ ВИД,
                   ЧТО НИЧЕГО НЕ БЫЛО
                ========================= */

                setHoshiPose(
                    IMG.hoshi
                );


                hoshi.classList.remove(
                    "caught",
                    "gift-alert"
                );


                await wait(
                    250
                );


                /* =================================================
                   РУМИ ОСМАТРИВАЕТСЯ

                   ПОДАРКА ЗДЕСЬ НЕТ.
                ================================================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiSmile
                );


                rumi.classList.remove(
                    "gift-panic"
                );


                rumi.classList.add(
                    "look-around"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Но, кажется, он не здесь.",
                    VOICE.rumiNotHere
                );


                clearDialogue();


                rumi.classList.remove(
                    "look-around"
                );


                mira.classList.remove(
                    "look-at-rumi"
                );


                zoey.classList.remove(
                    "look-at-rumi"
                );


                await wait(
                    500
                );


                /* =================================================
                   ЭМБЛЕМА РЕАГИРУЕТ

                   Именно она теперь открывает
                   дорогу к последней части.
                ================================================= */

                emblemWrap.classList.add(
                    "gift-react"
                );


                finalLight.classList.add(
                    "gift-react"
                );


                audio.playSfx(
                    SFX.magic,
                    0.8
                );


                await wait(
                    650
                );


                /* =================================================
                   СЕМЬ ЗВЁЗД ТОЖЕ ОТДАЮТ СВЕТ
                ================================================= */

                flyingLayer.classList.add(
                    "gift-react"
                );


                sevenNumber.classList.add(
                    "gift-react"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.75
                );


                await wait(
                    700
                );


                /* =================================================
                   ОТКРЫВАЕТСЯ ФИНАЛЬНЫЙ СВЕТ / ПОРТАЛ
                ================================================= */

                finalLight.classList.add(
                    "open"
                );


                screen.classList.add(
                    "final-transition"
                );


                stage.classList.add(
                    "final-reaction"
                );


                setCharacterPose(
                    "rumi",
                    IMG.rumiExcited
                );


                setCharacterPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                setCharacterPose(
                    "mira",
                    IMG.miraSmile
                );


                setHoshiPose(
                    IMG.hoshiWonder
                );


                playHoshiSound(
                    HOSHI_SOUND.wonder,
                    0.4
                );


                await wait(
                    1300
                );


                /* =================================================
                   УХОДИМ В ФИНАЛ

                   Там уже можно делать:
                   магическая дверь / реальное видео /
                   поиск настоящего подарка.
                ================================================= */

                busy =
                    false;


                game.showScene(
                    "final"
                );

            }


            /* =====================================================
               START
            ===================================================== */

            await wait(
                300
            );


            await playSevenStarsIntro();

        }

    };

}



    