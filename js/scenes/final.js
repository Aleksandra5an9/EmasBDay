/* =========================================================
   FINAL ACT

   ONE FILE FOR THE WHOLE ENDING:

   1. GIFT REVEAL
   2. REAL HOME VIDEO
   3. REAL-WORLD SEARCH
   4. EPILOGUE
   5. END SCREEN
========================================================= */


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    /* =========================
       BACKGROUNDS
    ========================= */

    honmoon:
        "./assets/images/final_honmoon_bg.png",

    finalHonmoon:
        "./assets/images/honmoon_gate_bg.png",


    /* =========================
       GIFT
    ========================= */

    gift:
        "./assets/images/gift_box.png",


    /* =========================
       PORTAL
    ========================= */

    portal:
        "./assets/images/portal_ring.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       FINAL PUZZLE IMAGE
    ========================= */

    emaGroup:
        "./assets/images/ema_huntrix_group.png",


    /* =========================
       RESTORED EMBLEM
    ========================= */

    emblem:
        "./assets/images/huntrix_emblem_normal.png",

    partyHat: "./assets/images/party_hat.png",
    /* =====================================================
       RUMI
    ===================================================== */

    rumi:
        "./assets/images/rumi_neutral.png",

    rumiSmile:
        "./assets/images/rumi_smile.png",

    rumiReaching:
        "./assets/images/rumi_reaching.png",

    rumiExcited:
        "./assets/images/rumi_excited.png",

    rumiFinal:
        "./assets/images/rumi_final.png",


    /* =====================================================
       MIRA
    ===================================================== */

    mira:
        "./assets/images/mira_neutral.png",

    miraAnnoyed:
        "./assets/images/mira_annoyed.png",

    miraStopHoshi:
        "./assets/images/mira_stop_hoshi.png",

    miraSmile:
        "./assets/images/mira_smile.png",

    miraFinal:
        "./assets/images/mira_final.png",


    /* =====================================================
       ZOEY
    ===================================================== */

    zoey:
        "./assets/images/zoey_neutral.png",

    zoeyExcited:
        "./assets/images/zoey_excited.png",

    zoeyEmotional:
        "./assets/images/zoey_emotional.png",

    zoeyFinal:
        "./assets/images/zoey_final.png",


    /* =====================================================
       HOSHI
    ===================================================== */

    hoshi:
        "./assets/images/hoshi_happy.png",

    hoshiWonder:
        "./assets/images/hoshi_wonder.png",

    hoshiMischief:
        "./assets/images/hoshi_mischief.png",

    hoshiShocked:
        "./assets/images/hoshi_shocked.png",

    hoshiShy:
        "./assets/images/hoshi_shy.png",

    hoshiHiding:
        "./assets/images/hoshi_hiding.png",


    /* =========================
       SPOON 😂
    ========================= */

    spoon:
        "./assets/images/item_spoon.png"

};


/* =========================================================
   VIDEO
========================================================= */

const VIDEO = {

    realHome:
        "./assets/video/real_home_gift.mp4"

};


/* =========================================================
   VOICES — GIFT REVEAL
========================================================= */

const VOICE = {

    /* =========================
       GIFT
    ========================= */

    giftRumiEma:
        "./assets/audio/s10_rumi_01_ema.mp3",

    giftStarsPart:
        "./assets/audio/s10_rumi_02_stars_part.mp3",

    giftWhileHelping:
        "./assets/audio/s10_rumi_03_while_helping.mp3",

    giftPrepared:
        "./assets/audio/s10_rumi_04_prepared.mp3",

    giftWantSee:
        "./assets/audio/s10_rumi_05_want_see.mp3",

    giftMiraNo:
        "./assets/audio/s10_mira_01_no.mp3",


    /* =========================
       REAL WORLD SEARCH
    ========================= */

    searchRumiNear:
        "./assets/audio/s11_rumi_01_near.mp3",

    searchZoeyReal:
        "./assets/audio/s11_zoey_01_real.mp3",

    searchMiraSaw:
        "./assets/audio/s11_mira_01_saw.mp3",

    searchRumiGo:
        "./assets/audio/s11_rumi_02_go_find.mp3",

    searchZoeyFound:
        "./assets/audio/s11_zoey_02_found.mp3",

    searchZoeyHooray:
        "./assets/audio/s11_zoey_03_hooray.mp3",


    /* =========================
       EPILOGUE
    ========================= */

    epilogueZoeyFound:
        "./assets/audio/s12_zoey_01_found.mp3",

    epilogueRumiHope:
        "./assets/audio/s12_rumi_01_hope.mp3",

    epilogueMiraHidden:
        "./assets/audio/s12_mira_01_hidden.mp3",

    epilogueRumiSeven:
        "./assets/audio/s12_rumi_02_seven.mp3",

    epilogueZoeyBirthday:
        "./assets/audio/s12_zoey_02_birthday.mp3",

    epilogueMiraBirthday:
        "./assets/audio/s12_mira_02_birthday.mp3",

    epilogueZoeyName:
        "./assets/audio/s12_zoey_03_name.mp3",

        // ---- НОВЫЕ РЕПЛИКИ ЭПИЛОГА ----
        epilogueRumiSchool: "./assets/audio/s12_rumi_03_school.mp3",
        epilogueZoeyStudy: "./assets/audio/s12_zoey_04_study.mp3",
        epilogueMiraHomework: "./assets/audio/s12_mira_03_homework.mp3",
        epilogueZoeyRespect: "./assets/audio/s12_zoey_05_respect.mp3",
        epilogueRumiParents: "./assets/audio/s12_rumi_04_parents.mp3",
        epilogueMiraAdventure: "./assets/audio/s12_mira_04_adventure.mp3",
        epilogueZoeyClass: "./assets/audio/s12_zoey_06_class.mp3",
        epilogueRumiProud: "./assets/audio/s12_rumi_05_proud.mp3",
        epilogueRumiBirthdayEma: "./assets/audio/s12_rumi_birthday_ema.mp3",
        epilogueZoeyBirthdayEma: "./assets/audio/s12_zoey_birthday_ema.mp3",
        epilogueMiraBirthdayEma: "./assets/audio/s12_mira_birthday_ema.mp3",



    /* =========================
       END JOKE 
    ========================= */

    endMiraHoshi:
        "./assets/audio/s12_mira_03_hoshi.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    wonder:
        "./assets/audio/hoshi_wonder.mp3",

    excited:
        "./assets/audio/hoshi_giggle_happy.mp3",

    surprised:
        "./assets/audio/hoshi_surprised.mp3",

    grumble:
        "./assets/audio/hoshi_grumble.mp3",

    happy:
        "./assets/audio/hoshi_soft_happy.mp3",


    /*
        ЭТО ЕДИНСТВЕННОЕ
        НАСТОЯЩЕЕ СЛОВО ХОШИ
        ЗА ВСЮ ИГРУ ❤️
    */

    ema:
        "./assets/audio/hoshi_ema.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    gift:
        "./assets/audio/magic_burst.mp3",

    sparkle:
        "./assets/audio/star_appear.mp3",

    portal:
        "./assets/audio/magic_zap.mp3",

    collect:
        "./assets/audio/star_collect.mp3",

    endScreenBgm: "./assets/audio/end_screen_bgm.mp3"

};


/* =========================================================
   VOLUMES
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
   CREATE FINAL SCENE
========================================================= */

export function createFinalScene({
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


            let portalReady =
                false;


            let returnReady =
                false;


            let completed =
                false;


            /* =====================================================
               SCREEN
            ===================================================== */

            const screen =
                document.createElement(
                    "div"
                );


            screen.className =
                "final-scene";


            /* =====================================================
               HTML
            ===================================================== */

            screen.innerHTML = `

                <!-- =================================================
                     COMMON BACKGROUND
                ================================================== -->

                <img
                    class="final-bg"
                    id="finalBackground"
                    src="${IMG.honmoon}"
                    alt=""
                >


                <!-- =================================================
                     PHASE 1
                     GIFT REVEAL
                ================================================== -->

                <section
                    class="
                        final-phase
                        final-gift-phase
                    "
                    id="finalGiftPhase"
                >


                    <!-- SEVEN STARS -->

                    <div
                        class="final-decor-stars"
                    >

                        ${Array.from({
                            length: 7
                        }, (_, index) => `

                            <img
                                class="
                                    final-decor-star
                                    final-decor-star-${index + 1}
                                "
                                src="${IMG.star}"
                                alt=""
                            >

                        `).join("")}

                    </div>


                    <!-- CHARACTERS -->

                    <div
                        class="final-gift-characters"
                        id="finalGiftCharacters"
                    >

                        <img
                            class="
                                final-character
                                final-gift-mira
                            "
                            id="finalGiftMira"
                            src="${IMG.mira}"
                            alt=""
                        >


                        <img
                            class="
                                final-character
                                final-gift-rumi
                            "
                            id="finalGiftRumi"
                            src="${IMG.rumiSmile}"
                            alt=""
                        >


                        <img
                            class="
                                final-character
                                final-gift-zoey
                            "
                            id="finalGiftZoey"
                            src="${IMG.zoey}"
                            alt=""
                        >


                        <img
                            class="final-gift-hoshi"
                            id="finalGiftHoshi"
                            src="${IMG.hoshi}"
                            alt=""
                        >

                    </div>


                    <!-- THE REAL GIFT BOX -->

                    <div
                        class="final-gift-box-wrap"
                        id="finalGiftBoxWrap"
                    >

                        <div
                            class="final-gift-box-glow"
                        ></div>


                        <img
                            class="final-gift-box"
                            src="${IMG.gift}"
                            alt=""
                        >

                    </div>


                    <!-- PORTAL -->

                    <button
                        class="final-portal"
                        id="finalPortal"
                        type="button"
                        aria-label="Открыть портал"
                    >

                        <div
                            class="final-portal-center"
                        ></div>


                        <img
                            class="final-portal-ring"
                            src="${IMG.portal}"
                            alt=""
                        >


                    </button>

                </section>


                <!-- =================================================
                     PHASE 2
                     REAL HOME VIDEO
                ================================================== -->

                <section
                    class="
                        final-phase
                        final-video-phase
                    "
                    id="finalVideoPhase"
                >

                    <video
                        class="final-real-video"
                        id="finalRealVideo"
                        playsinline
                        preload="auto"
                    >

                        <source
                            src="${VIDEO.realHome}"
                            type="video/mp4"
                        >

                    </video>


                    <!--
                        Если видео по какой-то причине
                        не сможет стартовать автоматически,
                        эта кнопка позволит запустить его.
                    -->

                    <button
                        class="final-video-play"
                        id="finalVideoPlay"
                        type="button"
                    >
                        ▶
                    </button>

                </section>


                <!-- =================================================
                     PHASE 3
                     REAL WORLD SEARCH
                ================================================== -->

                <section
                    class="
                        final-phase
                        final-search-phase
                    "
                    id="finalSearchPhase"
                >

                    <div
                        class="final-search-gift"
                    >
                        🎁
                    </div>


                    <div
                        class="final-search-sparkles"
                    >
                        ✨
                    </div>


                    <div
                        class="final-search-title"
                    >
                        НАЙДИ ПОДАРОК
                    </div>


                    <!--
                        Пока Эма ищет подарок,
                        игра может стоять здесь
                        сколько угодно.
                    -->

                    <button
                        class="final-return-star"
                        id="finalReturnStar"
                        type="button"
                        aria-label="Продолжить"
                    >

                        <img
                            src="${IMG.star}"
                            alt=""
                        >

                    </button>

                </section>


                <!-- =================================================
                     PHASE 4
                     EPILOGUE
                ================================================== -->

                <section
                    class="
                        final-phase
                        final-epilogue-phase
                    "
                    id="finalEpiloguePhase"
                >

                    <!-- RESTORED HONMOON / EMBLEM -->

                    <img
                        class="final-emblem"
                        src="${IMG.emblem}"
                        alt=""
                    >


                    <!-- GROUP -->

                    <div
                        class="final-epilogue-characters"
                        id="finalEpilogueCharacters"
                    >

                        <img
                            class="
                                final-character
                                final-epi-mira
                            "
                            id="finalEpiMira"
                            src="${IMG.miraFinal}"
                            alt=""
                        >


                        <img
                            class="
                                final-character
                                final-epi-rumi
                            "
                            id="finalEpiRumi"
                            src="${IMG.rumiFinal}"
                            alt=""
                        >


                        <img
                            class="
                                final-character
                                final-epi-zoey
                            "
                            id="finalEpiZoey"
                            src="${IMG.zoeyFinal}"
                            alt=""
                        >


                        <div
                            class="final-epi-hoshi-wrap"
                            id="finalEpiHoshiWrap"
                        >

                            <img
                                class="final-epi-hoshi"
                                id="finalEpiHoshi"
                                src="${IMG.hoshi}"
                                alt=""
                            >


                            <!-- PARTY HAT — пока CSS -->

                            <img
                                class="final-hoshi-party-hat"
                                src="${IMG.partyHat}"
                                alt=""
                            >


                            <!-- УКРАДЕННАЯ ЛОЖКА 😂 -->

                            <img
                                class="final-hoshi-spoon"
                                id="finalHoshiSpoon"
                                src="${IMG.spoon}"
                                alt=""
                            >

                        </div>

                    </div>


                    <!-- PUZZLE IMAGE -->

                    <img
                        class="final-ema-group"
                        id="finalEmaGroup"
                        src="${IMG.emaGroup}"
                        alt=""
                    >

                </section>


                <!-- =================================================
                     PHASE 5
                     END SCREEN
                ================================================== -->

                <section
                    class="
                        final-phase
                        final-end-phase
                    "
                    id="finalEndPhase"
                >

                    <div
                        class="final-end-stars"
                    >

                        ${Array.from({
                            length: 7
                        }, () => `

                            <img
                                src="${IMG.star}"
                                alt=""
                            >

                        `).join("")}

                    </div>


                    <img
                        class="final-end-group"
                        src="${IMG.emaGroup}"
                        alt=""
                    >


                    <div
                        class="final-end-name"
                    >
                        ЭМА
                    </div>


                    <div
                        class="final-end-age"
                    >
                        7
                    </div>


                    <div
                        class="final-end-birthday"
                    >
                        С ДНЁМ РОЖДЕНИЯ!
                    </div>


                    <div
                        class="final-the-end"
                    >
                        THE END
                    </div>


                    <div
                        class="final-confetti"
                        id="finalConfetti"
                    ></div>

                </section>


                <!-- =================================================
                     ONE DIALOGUE BOX FOR ALL FINAL PHASES
                ================================================== -->

                <div
                    class="final-dialogue-box"
                    id="finalDialogueBox"
                >

                    <div
                        class="final-speaker-name"
                        id="finalSpeakerName"
                    ></div>


                    <div
                        class="final-subtitle"
                        id="finalSubtitle"
                    ></div>

                </div>

            `;


            root.appendChild(
                screen
            );

                        /* =====================================================
               ELEMENTS
            ===================================================== */

            const phases = [
                ...screen.querySelectorAll(
                    ".final-phase"
                )
            ];


            /* =========================
               GIFT PHASE
            ========================= */

            const giftPhase =
                screen.querySelector(
                    "#finalGiftPhase"
                );


            const giftCharacters =
                screen.querySelector(
                    "#finalGiftCharacters"
                );


            const giftRumi =
                screen.querySelector(
                    "#finalGiftRumi"
                );


            const giftMira =
                screen.querySelector(
                    "#finalGiftMira"
                );


            const giftZoey =
                screen.querySelector(
                    "#finalGiftZoey"
                );


            const giftHoshi =
                screen.querySelector(
                    "#finalGiftHoshi"
                );


            const giftBoxWrap =
                screen.querySelector(
                    "#finalGiftBoxWrap"
                );


            const portal =
                screen.querySelector(
                    "#finalPortal"
                );


            /* =========================
               VIDEO PHASE
            ========================= */

            const videoPhase =
                screen.querySelector(
                    "#finalVideoPhase"
                );


            const realVideo =
                screen.querySelector(
                    "#finalRealVideo"
                );


            const videoPlay =
                screen.querySelector(
                    "#finalVideoPlay"
                );


            /* =========================
               SEARCH PHASE
            ========================= */

            const searchPhase =
                screen.querySelector(
                    "#finalSearchPhase"
                );


            const returnStar =
                screen.querySelector(
                    "#finalReturnStar"
                );


            /* =========================
               EPILOGUE PHASE
            ========================= */

            const epiloguePhase =
                screen.querySelector(
                    "#finalEpiloguePhase"
                );


            const epilogueCharacters =
                screen.querySelector(
                    "#finalEpilogueCharacters"
                );


            const epiRumi =
                screen.querySelector(
                    "#finalEpiRumi"
                );


            const epiMira =
                screen.querySelector(
                    "#finalEpiMira"
                );


            const epiZoey =
                screen.querySelector(
                    "#finalEpiZoey"
                );


            const epiHoshiWrap =
                screen.querySelector(
                    "#finalEpiHoshiWrap"
                );


            const epiHoshi =
                screen.querySelector(
                    "#finalEpiHoshi"
                );


            const hoshiSpoon =
                screen.querySelector(
                    "#finalHoshiSpoon"
                );


            const emaGroup =
                screen.querySelector(
                    "#finalEmaGroup"
                );


            /* =========================
               END PHASE
            ========================= */

            const endPhase =
                screen.querySelector(
                    "#finalEndPhase"
                );


            const confetti =
                screen.querySelector(
                    "#finalConfetti"
                );


            /* =========================
               COMMON
            ========================= */

            const background =
                screen.querySelector(
                    "#finalBackground"
                );


            const dialogueBox =
                screen.querySelector(
                    "#finalDialogueBox"
                );


            const speakerName =
                screen.querySelector(
                    "#finalSpeakerName"
                );


            const subtitle =
                screen.querySelector(
                    "#finalSubtitle"
                );


            /* =====================================================
               CHARACTER SETS
            ===================================================== */

            const giftSpeakerCharacters = {

                rumi:
                    giftRumi,

                mira:
                    giftMira,

                zoey:
                    giftZoey

            };


            const epilogueSpeakerCharacters = {

                rumi:
                    epiRumi,

                mira:
                    epiMira,

                zoey:
                    epiZoey

            };


            let activeSpeakerCharacters =
                giftSpeakerCharacters;


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
            ОДНОВРЕМЕННОЕ ВОСПРОИЗВЕДЕНИЕ ТРЁХ ГОЛОСОВ
            ===================================================== */

            async function speakThree(
                name1, text1, path1,
                name2, text2, path2,
                name3, text3, path3
            ) {
                clearSpeaking();

                // Показываем диалоговое окно с общим текстом (можно один из трёх)
                speakerName.textContent = "РУМИ, ЗОИ, МИРА";
                subtitle.textContent = "С днём рождения, Эма!";
                dialogueBox.classList.add("show");

                // Запускаем все три аудио одновременно
                const volumes = {
                    rumi: 0.82,
                    mira: 1,
                    zoey: 0.82
                };

                const play1 = audio.playVoice(path1, volumes[name1] ?? 0.82);
                const play2 = audio.playVoice(path2, volumes[name2] ?? 0.82);
                const play3 = audio.playVoice(path3, volumes[name3] ?? 0.82);

                // Ждём, пока все три закончатся
                await Promise.all([play1, play2, play3]);

                // Убираем подсветку у всех троих
                [giftRumi, giftMira, giftZoey, epiRumi, epiMira, epiZoey].forEach(
                    character => character.classList.remove("speaking")
                );

                await wait(100);
            }


            /* =====================================================
               PHASE SWITCHER

               Всё происходит внутри final.js.
               game.showScene() здесь больше
               между частями НЕ нужен.
            ===================================================== */

            function showPhase(
                phase
            ) {

                phases.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                clearDialogue();


                phase.classList.add(
                    "active"
                );

            }


            /* =====================================================
               CLEAR SPEAKING STATE
            ===================================================== */

            function clearSpeaking() {

                [
                    giftRumi,
                    giftMira,
                    giftZoey,
                    epiRumi,
                    epiMira,
                    epiZoey
                ].forEach(
                    character => {

                        character.classList.remove(
                            "speaking"
                        );

                    }
                );

            }


            /* =====================================================
               SET POSES — GIFT
            ===================================================== */

            function setGiftPose(
                characterName,
                image
            ) {

                const character =
                    giftSpeakerCharacters[
                        characterName
                    ];


                if (!character) {

                    return;

                }


                character.src =
                    image;

            }


            function setGiftHoshiPose(
                image
            ) {

                giftHoshi.src =
                    image;

            }


            /* =====================================================
               SET POSES — EPILOGUE
            ===================================================== */

            function setEpiloguePose(
                characterName,
                image
            ) {

                const character =
                    epilogueSpeakerCharacters[
                        characterName
                    ];


                if (!character) {

                    return;

                }


                character.src =
                    image;

            }


            function setEpilogueHoshiPose(
                image
            ) {

                epiHoshi.src =
                    image;

            }


            /* =====================================================
               ONE SPEAK FUNCTION FOR THE WHOLE FINAL
            ===================================================== */

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
                    activeSpeakerCharacters[
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


            /* =====================================================
               CLEAR DIALOGUE
            ===================================================== */

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


            /* =====================================================
               HOSHI SOUND
            ===================================================== */

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
               PHASE 1 — THE GIFT
            ===================================================== */

            async function showGiftReveal() {

                busy =
                    true;


                portalReady =
                    false;


                activeSpeakerCharacters =
                    giftSpeakerCharacters;


                background.src =
                    IMG.honmoon;


                showPhase(
                    giftPhase
                );


                giftCharacters.classList.add(
                    "show"
                );


                await wait(
                    500
                );


                /* =================================================
                   ПОЯВЛЯЕТСЯ ПОДАРОК
                ================================================= */

                giftBoxWrap.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.gift,
                    0.7
                );


                await wait(
                    650
                );


                giftBoxWrap.classList.add(
                    "glow"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.5
                );


                await wait(
                    550
                );


                /* =================================================
                   ХОШИ:

                   👁️ ✨ 👁️

                   "Это что ещё такое?!"
                ================================================= */

                setGiftHoshiPose(
                    IMG.hoshiWonder
                );


                giftHoshi.classList.add(
                    "notice-gift"
                );


                playHoshiSound(
                    HOSHI_SOUND.wonder,
                    0.5
                );


                await wait(
                    550
                );


                setGiftHoshiPose(
                    IMG.hoshiMischief
                );


                giftHoshi.classList.remove(
                    "notice-gift"
                );


                giftHoshi.classList.add(
                    "gift-eyes"
                );


                playHoshiSound(
                    HOSHI_SOUND.excited,
                    0.4
                );


                await wait(
                    450
                );


                /* =================================================
                   КОНЕЧНО ЖЕ ОН ИДЁТ
                   К ПОДАРКУ 😂
                ================================================= */

                giftHoshi.classList.add(
                    "sneak"
                );


                await wait(
                    550
                );


                /* =================================================
                   МИРА:

                   ✋
                ================================================= */

                setGiftPose(
                    "mira",
                    IMG.miraStopHoshi
                );


                giftMira.classList.add(
                    "stop-hoshi"
                );


                await wait(
                    250
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Нет.",
                    VOICE.giftMiraNo
                );


                /* =========================
                   ХОШИ 😳
                ========================= */

                setGiftHoshiPose(
                    IMG.hoshiShocked
                );


                giftHoshi.classList.remove(
                    "sneak",
                    "gift-eyes"
                );


                giftHoshi.classList.add(
                    "caught"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.45
                );


                await wait(
                    400
                );


                /* =========================
                   ОТОШЁЛ.

                   НИЧЕГО НЕ ДЕЛАЛ.
                   ВООБЩЕ.
                ========================= */

                setGiftHoshiPose(
                    IMG.hoshi
                );


                giftHoshi.classList.remove(
                    "caught"
                );


                giftHoshi.classList.add(
                    "back-away"
                );


                playHoshiSound(
                    HOSHI_SOUND.grumble,
                    0.3
                );


                await wait(
                    500
                );


                setGiftPose(
                    "mira",
                    IMG.mira
                );


                giftMira.classList.remove(
                    "stop-hoshi"
                );


                giftHoshi.classList.remove(
                    "back-away"
                );


                /* =================================================
                   РУМИ ОБРАЩАЕТСЯ К ЭМЕ
                ================================================= */

                setGiftPose(
                    "rumi",
                    IMG.rumiSmile
                );


                giftRumi.classList.add(
                    "look-at-ema"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Эма...",
                    VOICE.giftRumiEma
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Вообще-то звёзды были только частью нашего сюрприза.",
                    VOICE.giftStarsPart
                );


                /* =========================
                   ПОДАРОК СИЯЕТ
                ========================= */

                giftBoxWrap.classList.add(
                    "story-glow"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Пока ты помогала нам вернуть звёзды...",
                    VOICE.giftWhileHelping
                );


                setGiftPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Мы тоже кое-что приготовили для тебя.",
                    VOICE.giftPrepared
                );


                clearDialogue();


                await wait(
                    450
                );


                /* =================================================
                   ПОРТАЛ
                ================================================= */

                await openFinalPortal();

            }


            /* =====================================================
               OPEN PORTAL
            ===================================================== */

            async function openFinalPortal() {

                setGiftPose(
                    "rumi",
                    IMG.rumiReaching
                );


                giftRumi.classList.remove(
                    "look-at-ema"
                );


                giftRumi.classList.add(
                    "opening-portal"
                );


                portal.classList.add(
                    "forming"
                );


                audio.playSfx(
                    SFX.portal,
                    0.65
                );


                await wait(
                    600
                );


                portal.classList.add(
                    "show"
                );


                await wait(
                    550
                );


                portal.classList.add(
                    "open"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.6
                );


                await wait(
                    450
                );


                setGiftPose(
                    "rumi",
                    IMG.rumiSmile
                );


                giftRumi.classList.remove(
                    "opening-portal"
                );


                giftRumi.classList.add(
                    "look-at-ema"
                );


                /* =================================================
                   ХОЧЕШЬ УВИДЕТЬ?
                ================================================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "Хочешь увидеть?",
                    VOICE.giftWantSee
                );


                clearDialogue();


                /* =================================================
                   ИГРА ОСТАНАВЛИВАЕТСЯ.

                   НИКАКОГО АВТОМАТИЧЕСКОГО
                   ПЕРЕХОДА.

                   ЭМА САМА ЖМЁТ ✨.
                ================================================= */

                portal.classList.add(
                    "ready"
                );


                portalReady =
                    true;


                busy =
                    false;

            }


            /* =====================================================
               PORTAL CLICK
            ===================================================== */

            portal.addEventListener(
                "click",
                async () => {

                    if (
                        !portalReady ||
                        busy ||
                        completed
                    ) {

                        return;

                    }


                    portalReady =
                        false;


                    busy =
                        true;


                    portal.classList.remove(
                        "ready"
                    );


                    portal.classList.add(
                        "clicked"
                    );


                    audio.playSfx(
                        SFX.portal,
                        0.95
                    );


                    await wait(
                        350
                    );


                    /* =========================
                       ПОРТАЛ РАСТЁТ
                ========================= */

                    portal.classList.add(
                        "enter"
                    );


                    giftCharacters.classList.add(
                        "portal-light"
                    );


                    giftBoxWrap.classList.add(
                        "portal-light"
                    );


                    giftPhase.classList.add(
                        "enter-portal"
                    );


                    await wait(
                        950
                    );


                    /* =================================================
                       НЕ ПЕРЕКЛЮЧАЕМ SCENE.

                       ПРОСТО ПЕРЕХОДИМ
                       К СЛЕДУЮЩЕЙ ФУНКЦИИ
                       ЭТОГО ЖЕ final.js.
                ================================================= */

                    await playRealHomeVideo();

                }
            );
                        /* =====================================================
               PHASE 2 — REAL HOME VIDEO

               Настоящее видео из дома Эмы.

               Файл:
               /assets/video/real_home_gift.mp4
            ===================================================== */

            async function playRealHomeVideo() {

                busy =
                    true;


                portalReady =
                    false;


                clearDialogue();


                /* =========================
                   ПЕРЕКЛЮЧАЕМ ВНУТРЕННЮЮ
                   ФАЗУ FINAL
                ========================= */

                showPhase(
                    videoPhase
                );


                /* =========================
                   СБРАСЫВАЕМ ВИДЕО
                ========================= */

                realVideo.pause();


                try {

                    realVideo.currentTime =
                        0;

                } catch (
                    error
                ) {

                    console.warn(
                        "Could not reset final video:",
                        error
                    );

                }


                videoPlay.classList.remove(
                    "show"
                );


                await wait(
                    250
                );


                /* =================================================
                   ЖДЁМ КОНЦА ВИДЕО

                   Эта Promise закончится только
                   тогда, когда ролик действительно
                   закончится.
                ================================================= */

                await new Promise(
                    resolve => {

                        let finished =
                            false;


                        function finishVideo() {

                            if (
                                finished
                            ) {

                                return;

                            }


                            finished =
                                true;


                            realVideo.pause();


                            videoPlay.classList.remove(
                                "show"
                            );


                            realVideo.removeEventListener(
                                "ended",
                                finishVideo
                            );


                            videoPlay.onclick =
                                null;


                            resolve();

                        }


                        /* =========================
                           VIDEO ENDED
                        ========================= */

                        realVideo.addEventListener(
                            "ended",
                            finishVideo
                        );


                        /* =================================================
                           TRY TO PLAY

                           Иногда браузер не разрешает
                           видео со звуком стартовать
                           автоматически.

                           Тогда показываем большую ▶.
                        ================================================= */

                        async function tryPlayVideo() {

                            videoPlay.classList.remove(
                                "show"
                            );


                            try {

                                await realVideo.play();

                            } catch (
                                error
                            ) {

                                console.warn(
                                    "Real home video could not autoplay:",
                                    error
                                );


                                videoPlay.classList.add(
                                    "show"
                                );

                            }

                        }


                        /* =========================
                           FALLBACK PLAY BUTTON
                        ========================= */

                        videoPlay.onclick =
                            async () => {

                                await tryPlayVideo();

                            };


                        /* =========================
                           FIRST ATTEMPT
                        ========================= */

                        tryPlayVideo();

                    }
                );


                /* =========================
                   НЕ СРАЗУ ОБРЫВАЕМ КАДР
                ========================= */

                await wait(
                    350
                );


                /* =================================================
                   ДАЛЬШЕ ЭМА ИДЁТ
                   ИСКАТЬ НАСТОЯЩИЙ ПОДАРОК
                ================================================= */

                await showRealWorldSearch();

            }


            /* =====================================================
               PHASE 3 — REAL WORLD SEARCH

               Здесь игра может ждать
               хоть 30 секунд, хоть 20 минут.

               Никаких таймеров.
               Никакого автоматического продолжения.
            ===================================================== */

            async function showRealWorldSearch() {

                busy =
                    true;


                returnReady =
                    false;


                clearDialogue();


                /* =========================
                   СКРЫВАЕМ / ОСТАНАВЛИВАЕМ ВИДЕО
                ========================= */

                realVideo.pause();


                /* =========================
                   ВОЗВРАЩАЕМ ФОН ИГРЫ
                ========================= */

                background.src =
                    IMG.honmoon;


                /* =========================
                   ПОКАЗЫВАЕМ ЭКРАН ПОИСКА
                ========================= */

                showPhase(
                    searchPhase
                );


                await wait(
                    350
                );


                /* =================================================
                   🎁 ✨

                   Больше ничего не происходит.

                   Эма уже знает из видео,
                   куда ей идти.
                ================================================= */

                searchPhase.classList.add(
                    "show-search"
                );


                await wait(
                    700
                );


                /* =================================================
                   БОЛЬШАЯ ЗВЕЗДА

                   Она остаётся пульсировать.

                   Когда Эма вернётся к ноутбуку,
                   просто нажмёт её.
                ================================================= */

                returnStar.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.4
                );


                await wait(
                    450
                );


                returnStar.classList.add(
                    "ready"
                );


                returnReady =
                    true;


                busy =
                    false;

            }


            /* =====================================================
               EMA RETURNS TO LAPTOP
            ===================================================== */

            returnStar.addEventListener(
                "click",
                async () => {

                    if (
                        !returnReady ||
                        busy ||
                        completed
                    ) {

                        return;

                    }


                    returnReady =
                        false;


                    busy =
                        true;


                    returnStar.classList.remove(
                        "ready"
                    );


                    /* =========================
                       ЭМА ВЕРНУЛАСЬ ⭐
                    ========================= */

                    returnStar.classList.add(
                        "clicked"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.8
                    );


                    await wait(
                        550
                    );


                    /* =========================
                       МАГИЧЕСКАЯ ВСПЫШКА
                    ========================= */

                    searchPhase.classList.add(
                        "leave"
                    );


                    await wait(
                        650
                    );


                    /* =================================================
                       И СРАЗУ ЭПИЛОГ.

                       ВСЁ ЕЩЁ ВНУТРИ
                       ЭТОГО ЖЕ final.js.
                    ================================================= */

                    await playEpilogue();

                }
            );


            /* =====================================================
               PHASE 4 — EPILOGUE
            ===================================================== */

            async function playEpilogue() {

                busy =
                    true;


                activeSpeakerCharacters =
                    epilogueSpeakerCharacters;


                clearDialogue();


                /* =================================================
                   МЕНЯЕМ ФОН

                   Здесь уже возвращается
                   праздничный Honmoon.
                ================================================= */

                background.src =
                    IMG.finalHonmoon;


                showPhase(
                    epiloguePhase
                );


                /* =========================
                   СНАЧАЛА МЯГКО ПОЯВЛЯЕТСЯ
                   САМА СЦЕНА
                ========================= */

                epiloguePhase.classList.add(
                    "show"
                );


                await wait(
                    450
                );


                /* =========================
                   HUNTR/X + ХОШИ
                ========================= */

                epilogueCharacters.classList.add(
                    "show"
                );


                await wait(
                    550
                );


                /* =================================================
                   ЗОИ:

                   НАШЛА?!
                ================================================= */

                setEpiloguePose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Нашла?!",
                    VOICE.epilogueZoeyFound
                );


                /* =================================================
                   РУМИ
                ================================================= */

                setEpiloguePose(
                    "rumi",
                    IMG.rumiFinal
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Надеюсь, тебе понравилось.",
                    VOICE.epilogueRumiHope
                );


                /* =================================================
                   МИРА

                   "...И НАДЕЮСЬ,
                   ХОШИ БОЛЬШЕ НИЧЕГО
                   НЕ СПРЯТАЛ."
                ================================================= */

                setEpiloguePose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "МИРА",
                    "И надеюсь, Хоши больше ничего не спрятал.",
                    VOICE.epilogueMiraHidden
                );


                /* =================================================
                   ВСЕ СМОТРЯТ НА ХОШИ 😂
                ================================================= */

                epilogueCharacters.classList.add(
                    "look-at-hoshi"
                );


                await wait(
                    550
                );


                /* =========================
                   ХОШИ:

                   😇
                ========================= */

                setEpilogueHoshiPose(
                    IMG.hoshiShy
                );


                epiHoshiWrap.classList.add(
                    "innocent"
                );


                playHoshiSound(
                    HOSHI_SOUND.happy,
                    0.3
                );


                await wait(
                    550
                );


                /* =================================================
                   А ЗА СПИНОЙ...

                   ЛОЖКА ИЗ ЛОГОВА 😂
                ================================================= */

                hoshiSpoon.classList.add(
                    "show"
                );


                await wait(
                    650
                );


                /* =========================
                   МИРА ЗАМЕЧАЕТ
                ========================= */

                epiMira.classList.add(
                    "notice-spoon"
                );


                await wait(
                    450
                );


                /* =========================
                   ХОШИ БЫСТРО ПРЯЧЕТ 😂
                ========================= */

                hoshiSpoon.classList.add(
                    "hide"
                );


                epiHoshiWrap.classList.add(
                    "hide-spoon"
                );


                await wait(
                    450
                );


                epilogueCharacters.classList.remove(
                    "look-at-hoshi"
                );


                setEpiloguePose(
                    "mira",
                    IMG.miraFinal
                );


                epiMira.classList.remove(
                    "notice-spoon"
                );


                /* =================================================
                   ТЕПЕРЬ УЖЕ НАСТОЯЩЕЕ
                   ПОЗДРАВЛЕНИЕ ❤️
                ================================================= */

                clearDialogue();


                await wait(
                    350
                );


                await birthdayCongratulations();

            }
                        /* =====================================================
               BIRTHDAY CONGRATULATIONS
            ===================================================== */

            async function birthdayCongratulations() {

                /* =========================
                СПОКОЙНЫЕ ФИНАЛЬНЫЕ ПОЗЫ
                ========================= */

                setEpiloguePose(
                    "rumi",
                    IMG.rumiFinal
                );

                setEpiloguePose(
                    "zoey",
                    IMG.zoeyFinal
                );

                setEpiloguePose(
                    "mira",
                    IMG.miraFinal
                );

                setEpilogueHoshiPose(
                    IMG.hoshiShy
                );

                epiHoshiWrap.classList.remove(
                    "innocent",
                    "hide-spoon"
                );

                await wait(
                    350
                );

                /* =================================================
                РУМИ: ЭМА... С СЕМИЛЕТИЕМ ТЕБЯ ❤️
                ================================================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "Эма... С семилетием тебя.",
                    VOICE.epilogueRumiSeven
                );

                /* =================================================
                ЗОИ
                ================================================= */

                setEpiloguePose(
                    "zoey",
                    IMG.zoeyExcited
                );

                await speak(
                    "zoey",
                    "ЗОИ",
                    "С днём рождения!",
                    VOICE.epilogueZoeyBirthday
                );

                /* =================================================
                МИРА
                ================================================= */

                setEpiloguePose(
                    "mira",
                    IMG.miraSmile
                );

                await speak(
                    "mira",
                    "МИРА",
                    "С днём рождения, Эма.",
                    VOICE.epilogueMiraBirthday
                );

                // ---- НОВЫЕ РЕПЛИКИ О ШКОЛЕ ----

                await speak(
                    "rumi",
                    "РУМИ",
                    "А ещё в этом году ты идёшь в школу.",
                    VOICE.epilogueRumiSchool
                );

                await speak(
                    "zoey",
                    "ЗОИ",
                    "Мы желаем тебе отлично учиться!",
                    VOICE.epilogueZoeyStudy
                );

                await speak(
                    "mira",
                    "МИРА",
                    "Не забывать делать домашние задания...",
                    VOICE.epilogueMiraHomework
                );

                await speak(
                    "zoey",
                    "ЗОИ",
                    "Слушаться учителей и уважать их.",
                    VOICE.epilogueZoeyRespect
                );

                await speak(
                    "rumi",
                    "РУМИ",
                    "И, конечно, слушаться маму и папу.",
                    VOICE.epilogueRumiParents
                );

                await speak(
                    "mira",
                    "МИРА",
                    "И не забывать, что школа — это не только уроки, но и новые друзья, открытия и приключения!",
                    VOICE.epilogueMiraAdventure
                );

                await speak(
                    "zoey",
                    "ЗОИ",
                    "Так что пусть твой первый школьный год будет классным!",
                    VOICE.epilogueZoeyClass
                );

                await speak(
                    "rumi",
                    "РУМИ",
                    "Мы очень тобой гордимся.",
                    VOICE.epilogueRumiProud
                );

                await wait( 500 );

                // ---- ВСЕ ТРОЕ ГОВОРЯТ ОДНОВРЕМЕННО ----
                await speakThree(
                    "rumi", "РУМИ", "С днём рождения, Эма!", VOICE.epilogueRumiBirthdayEma,
                    "zoey", "ЗОИ", "С днём рождения, Эма!", VOICE.epilogueZoeyBirthdayEma,
                    "mira", "МИРА", "С днём рождения, Эма!", VOICE.epilogueMiraBirthdayEma
                );

                // ---- КОНЕЦ НОВЫХ РЕПЛИК ----

                clearDialogue();

                await wait(
                    900
                );

                /* =================================================
                ХОШИ ЧТО-ТО ХОЧЕТ СКАЗАТЬ
                ================================================= */

                epiHoshiWrap.classList.add(
                    "trying-to-speak"
                );

                setEpilogueHoshiPose(
                    IMG.hoshiShy
                );

                await wait(
                    500
                );

                /* =================================================
                ЕДИНСТВЕННОЕ СЛОВО ХОШИ ❤️
                ================================================= */

                speakerName.textContent = "ХОШИ";
                subtitle.textContent = "Э... ма!";
                dialogueBox.classList.add("show");

                epiHoshiWrap.classList.add("speaking");

                await audio.playVoice(
                    HOSHI_SOUND.ema,
                    0.8
                );

                epiHoshiWrap.classList.remove(
                    "speaking",
                    "trying-to-speak"
                );

                await wait(350);

                /* =================================================
                ВСЕ: 😳
                ================================================= */

                epilogueCharacters.classList.add(
                    "hoshi-spoke-reaction"
                );

                setEpiloguePose(
                    "rumi",
                    IMG.rumiExcited
                );

                setEpiloguePose(
                    "zoey",
                    IMG.zoeyEmotional
                );

                setEpiloguePose(
                    "mira",
                    IMG.miraSmile
                );

                setEpilogueHoshiPose(
                    IMG.hoshiShocked
                );

                await wait(650);

                /* =================================================
                ЗОИ 🥹
                ================================================= */

                await speak(
                    "zoey",
                    "ЗОИ",
                    "Он сказал её имя!",
                    VOICE.epilogueZoeyName
                );

                clearDialogue();

                /* =================================================
                ХОШИ САМ ПОНЯЛ
                ================================================= */

                setEpilogueHoshiPose(IMG.hoshiHiding);
                epiHoshiWrap.classList.add("embarrassed");
                await wait(500);

                epiHoshiWrap.classList.add("hide-behind-rumi");
                await wait(750);

                /* =================================================
                КАРТИНКА ЭМЫ + HUNTR/X
                ================================================= */

                emaGroup.classList.add("show");
                audio.playSfx(SFX.sparkle, 0.7);
                await wait(1300);

                /* =================================================
                ПЕРЕХОД К ФИНАЛЬНОМУ ЭКРАНУ
                ================================================= */

                epiloguePhase.classList.add("to-end");
                await wait(850);
                await showEndScreen();

            }


            /* =====================================================
               CREATE CONFETTI

               Без Canvas.
               Просто маленькие DOM-элементы.
            ===================================================== */

            function createConfetti() {

                confetti.innerHTML =
                    "";


                const amount =
                    70;


                for (
                    let index = 0;
                    index < amount;
                    index++
                ) {

                    const piece =
                        document.createElement(
                            "span"
                        );


                    piece.className =
                        "final-confetti-piece";


                    /*
                        Положение и скорость
                        передаём в CSS через variables.
                    */

                    piece.style.setProperty(
                        "--x",
                        `${Math.random() * 100}%`
                    );


                    piece.style.setProperty(
                        "--delay",
                        `${Math.random() * 2.2}s`
                    );


                    piece.style.setProperty(
                        "--duration",
                        `${2.8 + Math.random() * 2.8}s`
                    );


                    piece.style.setProperty(
                        "--rotation",
                        `${Math.random() * 500 - 250}deg`
                    );


                    piece.style.setProperty(
                        "--drift",
                        `${Math.random() * 160 - 80}px`
                    );


                    piece.style.setProperty(
                        "--size",
                        `${7 + Math.random() * 10}px`
                    );


                    confetti.appendChild(
                        piece
                    );

                }

            }


            /* =====================================================
               PHASE 5 — END SCREEN
            ===================================================== */

            async function showEndScreen() {

                busy =
                    true;


                clearDialogue();

                if (game._bgm) {
                    game._bgm.pause();
                    game._bgm.currentTime = 0;
                    game._bgm = null;
                }

                // ---- ЗАПУСКАЕМ ФИНАЛЬНЫЙ ТРЕК ----
                const endBgm = new Audio(SFX.endScreenBgm);
                endBgm.loop = false;   // или true, если хотите повторять
                endBgm.volume = 0.5;
                endBgm.play().catch(e => console.warn('Final BGM play blocked:', e));


                background.src =
                    IMG.finalHonmoon;


                showPhase(
                    endPhase
                );


                /* =================================================
                   ХОШИ ДЛЯ ПОСЛЕДНЕЙ ШУТКИ

                   Его не было в первоначальном HTML,
                   поэтому создаём здесь.
                ================================================= */

                const endHoshi =
                    document.createElement(
                        "img"
                    );


                endHoshi.className =
                    "final-end-hoshi";


                endHoshi.src =
                    IMG.hoshiMischief;


                endHoshi.alt =
                    "";


                endPhase.appendChild(
                    endHoshi
                );


                /* =========================
                   СТАРТ ФИНАЛЬНОЙ КАРТИНКИ
                ========================= */

                endPhase.classList.add(
                    "show"
                );


                createConfetti();


                await wait(
                    400
                );


                /* =================================================
                   7 ЗВЁЗД
                ================================================= */

                const endStars = [

                    ...endPhase.querySelectorAll(
                        ".final-end-stars img"
                    )

                ];


                endStars.forEach(
                    (star, index) => {

                        setTimeout(
                            () => {

                                star.classList.add(
                                    "show"
                                );

                            },
                            index * 100
                        );

                    }
                );


                audio.playSfx(
                    SFX.sparkle,
                    0.65
                );


                await wait(
                    1000
                );


                /* =================================================
                   КАРТИНКА ЭМЫ С HUNTR/X
                ================================================= */

                const endGroup =
                    endPhase.querySelector(
                        ".final-end-group"
                    );


                endGroup.classList.add(
                    "show"
                );


                await wait(
                    550
                );


                /* =================================================
                   ЭМА
                ================================================= */

                const endName =
                    endPhase.querySelector(
                        ".final-end-name"
                    );


                endName.classList.add(
                    "show"
                );


                await wait(
                    300
                );


                /* =================================================
                   7
                ================================================= */

                const endAge =
                    endPhase.querySelector(
                        ".final-end-age"
                    );


                endAge.classList.add(
                    "show"
                );


                await wait(
                    350
                );


                /* =================================================
                   С ДНЁМ РОЖДЕНИЯ!
                ================================================= */

                const birthdayText =
                    endPhase.querySelector(
                        ".final-end-birthday"
                    );


                birthdayText.classList.add(
                    "show"
                );


                /* =================================================
                   КОНФЕТТИ
                ================================================= */

                confetti.classList.add(
                    "show"
                );


                audio.playSfx(
                    SFX.gift,
                    0.55
                );


                await wait(
                    2300
                );


                /* =================================================
                   THE END
                ================================================= */

                const theEnd =
                    endPhase.querySelector(
                        ".final-the-end"
                    );


                theEnd.classList.add(
                    "show"
                );


                await wait(
                    1800
                );


                /* =================================================
                   И ВОТ КОГДА ВСЁ УЖЕ
                   ЗАКОНЧИЛОСЬ...

                   ХОШИ 👀
                ================================================= */

                endHoshi.classList.add(
                    "show"
                );


                await wait(
                    550
                );


                /* =================================================
                   СМОТРИТ НА ОДНУ ИЗ ЗВЁЗД
                ================================================= */

                endHoshi.classList.add(
                    "look-at-star"
                );


                await wait(
                    500
                );


                /* =================================================
                   ТЯНЕТСЯ К НЕЙ 😂
                ================================================= */

                endHoshi.classList.add(
                    "reach-for-star"
                );


                playHoshiSound(
                    HOSHI_SOUND.wonder,
                    0.3
                );


                await wait(
                    650
                );


                /* =================================================
                   МИРА, ДАЖЕ НЕ ПОЯВЛЯЯСЬ
                   НА ЭКРАНЕ:

                   — ХОШИ.
                ================================================= */

                speakerName.textContent =
                    "МИРА";


                subtitle.textContent =
                    "Хоши.";


                dialogueBox.classList.add(
                    "show"
                );


                await audio.playVoice(
                    VOICE.endMiraHoshi,
                    VOLUME.mira
                );


                /* =================================================
                   ХОШИ:

                   😒
                ================================================= */

                endHoshi.classList.remove(
                    "reach-for-star"
                );


                endHoshi.classList.add(
                    "caught-again"
                );


                playHoshiSound(
                    HOSHI_SOUND.grumble,
                    0.35
                );


                await wait(
                    550
                );


                clearDialogue();


                /* =================================================
                   МЕДЛЕННО УБИРАЕТ РУКУ
                   И УХОДИТ 😂
                ================================================= */

                endHoshi.classList.add(
                    "leave"
                );


                await wait(
                    900
                );


                /* =================================================
                   THE END ОСТАЁТСЯ НА ЭКРАНЕ.

                   БОЛЬШЕ НИКУДА НЕ ПЕРЕХОДИМ.
                ================================================= */

                completed =
                    true;


                busy =
                    false;

            }


            /* =====================================================
               START FINAL
            ===================================================== */

            await wait(
                300
            );


            await showGiftReveal();

        }

    };

}
