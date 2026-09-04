import {
    createStarHud,
    updateStarHud
} from "../star-hud.js";


/* =========================================================
   SCENE 08 — QUIET HONMOON

   Здесь резко меняется темп игры.

   ВАЖНО:
   Руми, Мира, Зои и Хоши постоянно
   находятся на экране.

   Они НЕ появляются только
   на время своей реплики.
========================================================= */


/* =========================================================
   IMAGES
========================================================= */

const IMG = {

    /* =========================
       BACKGROUND
    ========================= */

    background:
        "./assets/images/quiet_honmoon_bg.png",


    /* =========================
       STAR
    ========================= */

    star:
        "./assets/images/star_idle.png",


    /* =========================
       HOSHI
    ========================= */

    hoshiQuiet:
        "./assets/images/hoshi_sad_quiet.png",

    hoshiHugStar:
        "./assets/images/hoshi_hug_star.png",

    hoshiConfused:
        "./assets/images/hoshi_confused.png",

    hoshiShrug:
        "./assets/images/hoshi_shrug.png",

    hoshiShy:
        "./assets/images/hoshi_shy.png",

    hoshiOfferStar:
        "./assets/images/hoshi_offer_star.png",

    hoshiHappy:
        "./assets/images/hoshi_happy.png",

    hoshiReachBack:
        "./assets/images/hoshi_reaching_back_for_star.png",

    hoshiScared:
        "./assets/images/hoshi_scared.png",


    /* =========================
       RUMI
    ========================= */

    rumi:
        "./assets/images/rumi_neutral.png",

    rumiGentle:
        "./assets/images/rumi_gentle_crouching.png",

    rumiReaching:
        "./assets/images/rumi_reaching.png",

    rumiSmile:
        "./assets/images/rumi_smile.png",


    /* =========================
       MIRA
    ========================= */

    mira:
        "./assets/images/mira_neutral.png",

    miraWeapon:
        "./assets/images/mira_weapon.png",

    miraAnnoyed:
        "./assets/images/mira_annoyed.png",

    miraSmile:
        "./assets/images/mira_smile.png",


    /* =========================
       ZOEY
    ========================= */

    zoey:
        "./assets/images/zoey_neutral.png",

    zoeyEmotional:
        "./assets/images/zoey_emotional.png",

    zoeyExcited:
        "./assets/images/zoey_excited.png"

};


/* =========================================================
   VOICES
========================================================= */

const VOICE = {

    /* =========================
       ARRIVAL
    ========================= */

    zoeyStopped:
        "./assets/audio/s08_zoey_01_stopped.mp3",

    miraFinally:
        "./assets/audio/s08_mira_01_finally.mp3",

    rumiWait:
        "./assets/audio/s08_rumi_01_wait.mp3",

    miraRumi:
        "./assets/audio/s08_mira_02_rumi.mp3",

    rumiJustWait:
        "./assets/audio/s08_rumi_02_just_wait.mp3",


    /* =========================
       WHY STARS
    ========================= */

    rumiHoshi:
        "./assets/audio/s08_rumi_03_hoshi.mp3",

    rumiLikeStars:
        "./assets/audio/s08_rumi_04_like_stars.mp3",

    rumiLikeYours:
        "./assets/audio/s08_rumi_05_like_yours.mp3",

    zoeyHis:
        "./assets/audio/s08_zoey_02_thought_his.mp3",

    miraSeven:
        "./assets/audio/s08_mira_03_seven.mp3",

    zoeyArgument:
        "./assets/audio/s08_zoey_03_argument.mp3",


    /* =========================
       BIRTHDAY
    ========================= */

    rumiForSomeone:
        "./assets/audio/s08_rumi_06_for_someone.mp3",

    rumiForEma:
        "./assets/audio/s08_rumi_07_for_ema.mp3",

    rumiBirthday:
        "./assets/audio/s08_rumi_08_birthday.mp3",

    zoeyNoBirthday:
        "./assets/audio/s08_zoey_04_no_birthday.mp3",

    miraZoey:
        "./assets/audio/s08_mira_04_zoey.mp3",

    rumiBirthdayMeaning:
        "./assets/audio/s08_rumi_09_birthday_meaning.mp3",

    rumiCelebrateEma:
        "./assets/audio/s08_rumi_10_celebrate_ema.mp3",


    /* =========================
       STAR 7
    ========================= */

    zoeyGiving:
        "./assets/audio/s08_zoey_05_giving.mp3",

    miraHimself:
        "./assets/audio/s08_mira_05_himself.mp3",

    rumiThanks:
        "./assets/audio/s08_rumi_11_thanks.mp3",

    zoeyAllSeven:
        "./assets/audio/s08_zoey_06_all_seven.mp3",

    miraNo:
        "./assets/audio/s08_mira_06_no.mp3"

};


/* =========================================================
   HOSHI SOUNDS
========================================================= */

const HOSHI_SOUND = {

    quiet:
        "./assets/audio/hoshi_soft_happy.mp3",

    confused:
        "./assets/audio/hoshi_suspicious.mp3",

    surprised:
        "./assets/audio/hoshi_surprised.mp3",

    shy:
        "./assets/audio/hoshi_shy.mp3",

    happy:
        "./assets/audio/hoshi_giggle_happy.mp3",

    scared:
        "./assets/audio/hoshi_scared.mp3",

    grumble:
        "./assets/audio/hoshi_grumble.mp3"

};


/* =========================================================
   SFX
========================================================= */

const SFX = {

    starGlow:
        "./assets/audio/star_appear.mp3",

    collect:
        "./assets/audio/star_collect.mp3",

    magic:
        "./assets/audio/magic_burst.mp3",

    quietHonmoonBgm: "./assets/audio/quiet_honmoon_bgm.mp3"

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
   CREATE SCENE
========================================================= */

export function createQuietHonmoonScene({
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


            let starReady =
                false;


            let completed =
                false;
            // ---- Фоновая музыка для тихой сцены ----
            let bgmAudio = null;

            function startQuietBgm() {
                bgmAudio = new Audio(SFX.quietHonmoonBgm);
                bgmAudio.loop = true;
                bgmAudio.volume = 0.08;   // очень тихо, чтобы не перекрывать эмоциональные диалоги
                bgmAudio.play().catch(e => console.warn('BGM play blocked:', e));
            }

            function stopQuietBgm() {
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
                "quiet-honmoon-scene";


            /* =====================================================
               SCREEN HTML
            ===================================================== */

            screen.innerHTML = `

                <!-- =============================================
                     BACKGROUND
                ============================================== -->

                <img
                    class="quiet-honmoon-bg"
                    src="${IMG.background}"
                    alt=""
                >


                <!-- =============================================
                     CHARACTER STAGE

                     ВАЖНО:
                     ВСЕ ЧЕТВЕРО ПОСТОЯННО
                     НАХОДЯТСЯ НА ЭКРАНЕ.
                ============================================== -->

                <div
                    class="quiet-character-stage"
                    id="quietCharacterStage"
                >


                    <!-- =========================================
                         MIRA
                    ========================================== -->

                    <img
                        class="
                            quiet-character
                            quiet-mira
                        "
                        id="quietMira"
                        src="${IMG.mira}"
                        alt=""
                    >


                    <!-- =========================================
                         ZOEY
                    ========================================== -->

                    <img
                        class="
                            quiet-character
                            quiet-zoey
                        "
                        id="quietZoey"
                        src="${IMG.zoey}"
                        alt=""
                    >


                    <!-- =========================================
                         RUMI
                    ========================================== -->

                    <img
                        class="
                            quiet-character
                            quiet-rumi
                        "
                        id="quietRumi"
                        src="${IMG.rumi}"
                        alt=""
                    >


                    <!-- =========================================
                         HOSHI
                    ========================================== -->

                    <div
                        class="quiet-hoshi-wrap"
                        id="quietHoshiWrap"
                    >

                        <img
                            class="quiet-hoshi"
                            id="quietHoshi"
                            src="${IMG.hoshiQuiet}"
                            alt=""
                        >


                        <!-- Последняя звезда -->

                        <button
                            class="quiet-last-star"
                            id="quietLastStar"
                            type="button"
                            aria-label="Забрать последнюю звезду"
                        >

                            <img
                                src="${IMG.star}"
                                alt=""
                            >

                        </button>

                    </div>

                </div>


                <!-- =============================================
                     SOFT FOCUS / LIGHT
                ============================================== -->

                <div
                    class="quiet-soft-light"
                    id="quietSoftLight"
                ></div>


                <!-- =============================================
                     SUBTITLE

                     Здесь только текст.
                     Персонажи уже стоят на сцене.
                ============================================== -->

                <div
                    class="quiet-dialogue-box"
                    id="quietDialogueBox"
                >

                    <div
                        class="quiet-speaker-name"
                        id="quietSpeakerName"
                    ></div>


                    <div
                        class="quiet-subtitle"
                        id="quietSubtitle"
                    ></div>

                </div>


                <!-- =============================================
                     STAR HUD
                ============================================== -->

                <div
                    class="quiet-star-hud-mount"
                    id="quietStarHudMount"
                ></div>

            `;


            root.appendChild(screen);

            startQuietBgm();

            /* =====================================================
               ELEMENTS
            ===================================================== */

            const stage =
                screen.querySelector(
                    "#quietCharacterStage"
                );


            const rumi =
                screen.querySelector(
                    "#quietRumi"
                );


            const mira =
                screen.querySelector(
                    "#quietMira"
                );


            const zoey =
                screen.querySelector(
                    "#quietZoey"
                );


            const hoshiWrap =
                screen.querySelector(
                    "#quietHoshiWrap"
                );


            const hoshi =
                screen.querySelector(
                    "#quietHoshi"
                );


            const lastStar =
                screen.querySelector(
                    "#quietLastStar"
                );


            const softLight =
                screen.querySelector(
                    "#quietSoftLight"
                );


            const dialogueBox =
                screen.querySelector(
                    "#quietDialogueBox"
                );


            const speakerName =
                screen.querySelector(
                    "#quietSpeakerName"
                );


            const subtitle =
                screen.querySelector(
                    "#quietSubtitle"
                );


            const characters = {

                rumi,
                mira,
                zoey

            };


            /* =====================================================
               HUD

               У нас уже:
               ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ☆
            ===================================================== */

            const starHudMount =
                screen.querySelector(
                    "#quietStarHudMount"
                );


            const starHud =
                createStarHud(
                    6
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


            function setCharacterPose(
                characterName,
                image
            ) {

                const character =
                    characters[
                        characterName
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


            function clearSpeakingState() {

                Object.values(
                    characters
                ).forEach(
                    character => {

                        character.classList.remove(
                            "speaking"
                        );

                    }
                );


                hoshiWrap.classList.remove(
                    "speaking"
                );

            }


            /* =====================================================
               NEW SPEAK FUNCTION

               НИКТО НЕ ИСЧЕЗАЕТ.

               Мы только подсвечиваем того,
               кто сейчас говорит.
            ===================================================== */

            async function speak(
                characterName,
                name,
                text,
                path
            ) {

                clearSpeakingState();


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
                        1000
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
                    120
                );

            }


            /* =====================================================
               CLEAR DIALOGUE

               Персонажи всё равно остаются.
            ===================================================== */

            function clearDialogue() {

                clearSpeakingState();


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
                volume = 0.75
            ) {

                audio.playSfx(
                    path,
                    volume
                );

            }

                        /* =====================================================
               QUIET OPENING

               Здесь специально почти ничего
               не происходит.

               После погони даём сцене
               несколько секунд тишины.
            ===================================================== */

            async function playQuietOpening() {

                busy =
                    true;


                /* =========================
                   ПОКА ВИДЕН ТОЛЬКО ХОШИ
                ========================= */

                stage.classList.add(
                    "show"
                );


                hoshiWrap.classList.add(
                    "show"
                );


                /*
                    Девочки существуют на сцене,
                    но пока находятся за её краями.
                */

                rumi.classList.remove(
                    "arrived"
                );


                mira.classList.remove(
                    "arrived"
                );


                zoey.classList.remove(
                    "arrived"
                );


                /* =========================
                   ХОШИ СИДИТ СО ЗВЕЗДОЙ
                ========================= */

                setHoshiPose(
                    IMG.hoshiQuiet
                );


                lastStar.classList.add(
                    "with-hoshi"
                );


                await wait(
                    1100
                );


                /* =========================
                   СМОТРИТ НА ЗВЕЗДУ
                ========================= */

                hoshiWrap.classList.add(
                    "look-at-star"
                );


                await wait(
                    900
                );


                /* =========================
                   КАСАЕТСЯ СВОЕЙ МЕТКИ
                   НА ЛБУ
                ========================= */

                hoshiWrap.classList.remove(
                    "look-at-star"
                );


                hoshiWrap.classList.add(
                    "touch-mark"
                );


                await wait(
                    950
                );


                /* =========================
                   СНОВА СМОТРИТ НА ⭐
                ========================= */

                hoshiWrap.classList.remove(
                    "touch-mark"
                );


                hoshiWrap.classList.add(
                    "compare-star"
                );


                await wait(
                    1100
                );


                hoshiWrap.classList.remove(
                    "compare-star"
                );


                /* =========================
                   МЯГКИЙ ЗВУК ХОШИ
                ========================= */

                playHoshiSound(
                    HOSHI_SOUND.quiet,
                    0.35
                );


                await wait(
                    750
                );


                /* =================================================
                   ДЕВОЧКИ ПОДХОДЯТ

                   Они войдут один раз
                   и останутся на экране
                   до конца сцены.
                ================================================= */

                await bringGirlsIn();

            }


            /* =====================================================
               GIRLS ARRIVE
            ===================================================== */

            async function bringGirlsIn() {

                /* =========================
                   СНАЧАЛА РУМИ
                ========================= */

                rumi.classList.add(
                    "arrived"
                );


                await wait(
                    280
                );


                /* =========================
                   ПОТОМ МИРА
                ========================= */

                mira.classList.add(
                    "arrived"
                );


                await wait(
                    220
                );


                /* =========================
                   ПОТОМ ЗОИ
                ========================= */

                zoey.classList.add(
                    "arrived"
                );


                await wait(
                    500
                );


                /* =========================
                   ЗОИ ТИХО ЗАМЕЧАЕТ
                ========================= */

                await speak(
                    "zoey",
                    "ЗОИ",
                    "Он остановился.",
                    VOICE.zoeyStopped
                );


                /* =========================
                   МИРА:
                   НАКОНЕЦ-ТО.
                ========================= */

                await speak(
                    "mira",
                    "МИРА",
                    "Наконец-то.",
                    VOICE.miraFinally
                );


                /* =================================================
                   МИРА БЕРЁТСЯ ЗА ОРУЖИЕ
                ================================================= */

                setCharacterPose(
                    "mira",
                    IMG.miraWeapon
                );


                mira.classList.add(
                    "weapon-ready"
                );


                /* =========================
                   ХОШИ ПУГАЕТСЯ
                ========================= */

                setHoshiPose(
                    IMG.hoshiScared
                );


                hoshiWrap.classList.add(
                    "scared"
                );


                lastStar.classList.add(
                    "protected"
                );


                playHoshiSound(
                    HOSHI_SOUND.scared,
                    0.65
                );


                await wait(
                    450
                );


                /* =========================
                   РУМИ ОСТАНАВЛИВАЕТ МИРУ
                ========================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "Мира. Подожди.",
                    VOICE.rumiWait
                );


                /* =========================
                   МИРА
                ========================= */

                await speak(
                    "mira",
                    "МИРА",
                    "Руми...",
                    VOICE.miraRumi
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Просто подожди.",
                    VOICE.rumiJustWait
                );


                /* =================================================
                   МИРА ОПУСКАЕТ ОРУЖИЕ
                ================================================= */

                mira.classList.remove(
                    "weapon-ready"
                );


                setCharacterPose(
                    "mira",
                    IMG.mira
                );


                await wait(
                    350
                );


                /* =================================================
                   РУМИ ПОДХОДИТ К ХОШИ
                ================================================= */

                rumi.classList.add(
                    "approach-hoshi"
                );


                await wait(
                    700
                );


                /* =========================
                   РУМИ САДИТСЯ РЯДОМ
                ========================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiGentle
                );


                rumi.classList.add(
                    "crouching"
                );


                /* =========================
                   ХОШИ ЕЩЁ НАПРЯЖЁН
                ========================= */

                setHoshiPose(
                    IMG.hoshiHugStar
                );


                hoshiWrap.classList.remove(
                    "scared"
                );


                hoshiWrap.classList.add(
                    "guarding-star"
                );


                await wait(
                    500
                );


                await talkAboutStars();

            }


            /* =====================================================
               WHY DOES HOSHI WANT THE STARS?
            ===================================================== */

            async function talkAboutStars() {

                /* =========================
                   РУМИ:
                   ХОШИ.
                ========================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "Хоши.",
                    VOICE.rumiHoshi
                );


                /* =========================
                   ХОШИ СМОТРИТ НА НЕЁ
                ========================= */

                hoshiWrap.classList.remove(
                    "guarding-star"
                );


                setHoshiPose(
                    IMG.hoshiQuiet
                );


                hoshiWrap.classList.add(
                    "listening"
                );


                await wait(
                    350
                );


                /* =========================
                   ТЕБЕ НРАВЯТСЯ ЗВЁЗДЫ?
                ========================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "Тебе нравятся звёзды?",
                    VOICE.rumiLikeStars
                );


                /* =========================
                   СМОТРИТ НА ⭐
                   И КИВАЕТ
                ========================= */

                hoshiWrap.classList.add(
                    "look-at-star"
                );


                await wait(
                    350
                );


                hoshiWrap.classList.remove(
                    "look-at-star"
                );


                hoshiWrap.classList.add(
                    "nod"
                );


                playHoshiSound(
                    HOSHI_SOUND.quiet,
                    0.35
                );


                await wait(
                    550
                );


                hoshiWrap.classList.remove(
                    "nod"
                );


                /* =================================================
                   РУМИ ПОКАЗЫВАЕТ НА МЕТКУ
                ================================================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiReaching
                );


                rumi.classList.add(
                    "point-to-mark"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Потому что они похожи на твою?",
                    VOICE.rumiLikeYours
                );


                /* =========================
                   ХОШИ:
                   😯
                ========================= */

                setHoshiPose(
                    IMG.hoshiConfused
                );


                hoshiWrap.classList.add(
                    "surprised"
                );


                playHoshiSound(
                    HOSHI_SOUND.surprised,
                    0.5
                );


                await wait(
                    450
                );


                /* =========================
                   ТРОГАЕТ МЕТКУ
                ========================= */

                hoshiWrap.classList.remove(
                    "surprised"
                );


                hoshiWrap.classList.add(
                    "touch-mark"
                );


                await wait(
                    650
                );


                /* =========================
                   ПОНИМАЕТ:
                   ДА! ИМЕННО! 😂
                ========================= */

                hoshiWrap.classList.remove(
                    "touch-mark"
                );


                setHoshiPose(
                    IMG.hoshiHappy
                );


                hoshiWrap.classList.add(
                    "big-nod"
                );


                playHoshiSound(
                    HOSHI_SOUND.happy,
                    0.45
                );


                await wait(
                    650
                );


                hoshiWrap.classList.remove(
                    "big-nod"
                );


                /* =========================
                   РУМИ ОПУСКАЕТ РУКУ
                ========================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiGentle
                );


                rumi.classList.remove(
                    "point-to-mark"
                );


                /* =================================================
                   ЗОИ ДОГАДЫВАЕТСЯ
                ================================================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyExcited
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Он думал, что они его!",
                    VOICE.zoeyHis
                );


                /* =========================
                   МИРА:
                   СЕМЬ ШТУК?
                ========================= */

                setCharacterPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Семь штук?",
                    VOICE.miraSeven
                );


                /* =========================
                   ХОШИ:
                   🤷
                ========================= */

                setHoshiPose(
                    IMG.hoshiShrug
                );


                hoshiWrap.classList.add(
                    "shrug"
                );


                await wait(
                    400
                );


                playHoshiSound(
                    HOSHI_SOUND.confused,
                    0.4
                );


                await wait(
                    350
                );


                hoshiWrap.classList.remove(
                    "shrug"
                );


                /* =========================
                   ЗОИ 😂
                ========================= */

                await speak(
                    "zoey",
                    "ЗОИ",
                    "Весомый аргумент.",
                    VOICE.zoeyArgument
                );


                /* =========================
                   ВОЗВРАЩАЕМ СПОКОЙНЫЕ ПОЗЫ
                ========================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoey
                );


                setCharacterPose(
                    "mira",
                    IMG.mira
                );


                setHoshiPose(
                    IMG.hoshiQuiet
                );


                await wait(
                    400
                );


                /* =================================================
                   ДАЛЬШЕ —
                   ЧТО ТАКОЕ ДЕНЬ РОЖДЕНИЯ
                ================================================= */

                await explainBirthday();

            }

                        /* =====================================================
               WHAT IS A BIRTHDAY?
            ===================================================== */

            async function explainBirthday() {

                /* =================================================
                   РУМИ:
                   ЗВЁЗДЫ БЫЛИ ДЛЯ КОГО-ТО ДРУГОГО
                ================================================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiGentle
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Но эти звёзды были для кое-кого другого.",
                    VOICE.rumiForSomeone
                );


                /* =========================
                   ХОШИ НЕ ПОНИМАЕТ
                ========================= */

                setHoshiPose(
                    IMG.hoshiConfused
                );


                hoshiWrap.classList.add(
                    "confused"
                );


                playHoshiSound(
                    HOSHI_SOUND.confused,
                    0.4
                );


                await wait(
                    450
                );


                /* =================================================
                   РУМИ СМОТРИТ ПРЯМО НА ЭМУ
                ================================================= */

                rumi.classList.add(
                    "look-at-ema"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Для Эмы.",
                    VOICE.rumiForEma
                );


                /* =========================
                   ХОШИ ТОЖЕ СМОТРИТ
                   В СТОРОНУ ЭКРАНА
                ========================= */

                hoshiWrap.classList.remove(
                    "confused"
                );


                hoshiWrap.classList.add(
                    "look-at-ema"
                );


                await wait(
                    500
                );


                /* =================================================
                   СЕГОДНЯ У НЕЁ ДЕНЬ РОЖДЕНИЯ
                ================================================= */

                await speak(
                    "rumi",
                    "РУМИ",
                    "Сегодня у неё день рождения.",
                    VOICE.rumiBirthday
                );


                /* =========================
                   ХОШИ:
                   🤨
                ========================= */

                setHoshiPose(
                    IMG.hoshiConfused
                );


                hoshiWrap.classList.remove(
                    "look-at-ema"
                );


                hoshiWrap.classList.add(
                    "birthday-confused"
                );


                playHoshiSound(
                    HOSHI_SOUND.confused,
                    0.45
                );


                await wait(
                    550
                );


                /* =================================================
                   ЗОИ В ШОКЕ 😂
                ================================================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyEmotional
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Ты не знаешь, что такое день рождения?!",
                    VOICE.zoeyNoBirthday
                );


                /* =========================
                   ХОШИ МОТАЕТ ГОЛОВОЙ:
                   НЕТ
                ========================= */

                hoshiWrap.classList.remove(
                    "birthday-confused"
                );


                hoshiWrap.classList.add(
                    "shake-no"
                );


                playHoshiSound(
                    HOSHI_SOUND.confused,
                    0.35
                );


                await wait(
                    600
                );


                hoshiWrap.classList.remove(
                    "shake-no"
                );


                /* =========================
                   МИРА:
                   "ЗОИ."
                ========================= */

                setCharacterPose(
                    "mira",
                    IMG.miraAnnoyed
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Зои.",
                    VOICE.miraZoey
                );


                setCharacterPose(
                    "zoey",
                    IMG.zoey
                );


                setCharacterPose(
                    "mira",
                    IMG.mira
                );


                await wait(
                    250
                );


                /* =================================================
                   РУМИ ОБЪЯСНЯЕТ

                   Тут замедляемся.
                ================================================= */

                setCharacterPose(
                    "rumi",
                    IMG.rumiSmile
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "День рождения — это день, когда мы радуемся, что кто-то появился в нашем мире.",
                    VOICE.rumiBirthdayMeaning
                );


                /*
                    Маленькая тишина.

                    Здесь специально ничего
                    не двигается.
                */

                clearSpeakingState();


                await wait(
                    1100
                );


                /* =================================================
                   ГЛАВНАЯ ФРАЗА
                ================================================= */

                rumi.classList.add(
                    "look-at-ema"
                );


                await speak(
                    "rumi",
                    "РУМИ",
                    "Сегодня мы радуемся Эме.",
                    VOICE.rumiCelebrateEma
                );


                /*
                    Эту фразу не перебиваем.

                    Оставляем сцену просто
                    постоять несколько секунд.
                */

                clearSpeakingState();


                await wait(
                    3200
                );


                clearDialogue();


                rumi.classList.remove(
                    "look-at-ema"
                );


                /* =================================================
                   ХОШИ НАЧИНАЕТ ПОНИМАТЬ
                ================================================= */

                setHoshiPose(
                    IMG.hoshiShy
                );


                hoshiWrap.classList.add(
                    "understands"
                );


                playHoshiSound(
                    HOSHI_SOUND.shy,
                    0.4
                );


                await wait(
                    900
                );


                await offerLastStar();

            }


            /* =====================================================
               HOSHI DECIDES TO GIVE THE STAR
            ===================================================== */

            async function offerLastStar() {

                busy =
                    true;


                /* =========================
                   ⭐
                   СНАЧАЛА СМОТРИТ НА ЗВЕЗДУ
                ========================= */

                setHoshiPose(
                    IMG.hoshiQuiet
                );


                hoshiWrap.classList.remove(
                    "understands"
                );


                hoshiWrap.classList.add(
                    "decision-star"
                );


                await wait(
                    700
                );


                /* =========================
                   ПОТОМ НА ЭМУ
                ========================= */

                hoshiWrap.classList.remove(
                    "decision-star"
                );


                hoshiWrap.classList.add(
                    "decision-ema"
                );


                await wait(
                    650
                );


                /* =========================
                   ПОТОМ НА СВОЮ МЕТКУ
                ========================= */

                hoshiWrap.classList.remove(
                    "decision-ema"
                );


                hoshiWrap.classList.add(
                    "decision-mark"
                );


                await wait(
                    650
                );


                /* =========================
                   НЕМНОГО ГРУСТИТ
                ========================= */

                setHoshiPose(
                    IMG.hoshiShy
                );


                hoshiWrap.classList.remove(
                    "decision-mark"
                );


                await wait(
                    650
                );


                /* =================================================
                   И САМ РЕШАЕТ ОТДАТЬ
                ================================================= */

                setHoshiPose(
                    IMG.hoshiOfferStar
                );


                hoshiWrap.classList.add(
                    "offer"
                );


                /*
                    Звезда выходит из положения
                    "на коленях" и оказывается
                    прямо перед Хоши.
                */

                lastStar.classList.remove(
                    "with-hoshi",
                    "protected"
                );


                lastStar.classList.add(
                    "offered"
                );


                audio.playSfx(
                    SFX.starGlow,
                    0.55
                );


                await wait(
                    800
                );


                /* =========================
                   ЗОИ — ТИХО
                ========================= */

                setCharacterPose(
                    "zoey",
                    IMG.zoeyEmotional
                );


                await speak(
                    "zoey",
                    "ЗОИ",
                    "Он отдаёт её.",
                    VOICE.zoeyGiving
                );


                /* =========================
                   МИРА УЖЕ МЯГЧЕ
                ========================= */

                setCharacterPose(
                    "mira",
                    IMG.miraSmile
                );


                await speak(
                    "mira",
                    "МИРА",
                    "Сам.",
                    VOICE.miraHimself
                );


                setCharacterPose(
                    "zoey",
                    IMG.zoey
                );


                clearDialogue();


                /*
                    И вот здесь сцена
                    полностью ОСТАНАВЛИВАЕТСЯ.

                    Ждём Эму.
                */

                lastStar.classList.add(
                    "ready"
                );


                starReady =
                    true;


                busy =
                    false;

            }


            /* =====================================================
               STAR 7 CLICK
            ===================================================== */

            lastStar.addEventListener(
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


                    lastStar.classList.remove(
                        "ready"
                    );


                    /* =================================================
                       ЭМА БЕРЁТСЯ ЗА ЗВЕЗДУ

                       НО ХОШИ ЕЩЁ
                       НЕ ОТПУСКАЕТ.
                    ================================================= */

                    lastStar.classList.add(
                        "ema-touch"
                    );


                    hoshiWrap.classList.add(
                        "holding-together"
                    );


                    await wait(
                        950
                    );


                    /* =================================================
                       ХОШИ ОТПУСКАЕТ
                    ================================================= */

                    hoshiWrap.classList.remove(
                        "holding-together"
                    );


                    hoshiWrap.classList.add(
                        "let-go"
                    );


                    setHoshiPose(
                        IMG.hoshiShy
                    );


                    lastStar.classList.remove(
                        "ema-touch"
                    );


                    lastStar.classList.add(
                        "collect"
                    );


                    audio.playSfx(
                        SFX.collect,
                        0.95
                    );


                    await wait(
                        650
                    );


                    /* =================================================
                       HUD

                       ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐
                    ================================================= */

                    updateStarHud(
                        starHud,
                        7
                    );


                    game.setStarsCollected(
                        7
                    );


                    lastStar.classList.add(
                        "hidden"
                    );


                    await wait(
                        450
                    );


                    /* =========================
                       ВСЕ СЕМЬ!
                ========================= */

                    setCharacterPose(
                        "zoey",
                        IMG.zoeyExcited
                    );


                    await speak(
                        "zoey",
                        "ЗОИ",
                        "Все семь!",
                        VOICE.zoeyAllSeven
                    );


                    /* =========================
                       РУМИ БЛАГОДАРИТ
                ========================= */

                    setCharacterPose(
                        "rumi",
                        IMG.rumiSmile
                    );


                    await speak(
                        "rumi",
                        "РУМИ",
                        "Спасибо, Хоши.",
                        VOICE.rumiThanks
                    );


                    /* =========================
                       ХОШИ ДОВОЛЕН 😌
                ========================= */

                    setHoshiPose(
                        IMG.hoshiHappy
                    );


                    hoshiWrap.classList.remove(
                        "offer",
                        "let-go"
                    );


                    hoshiWrap.classList.add(
                        "proud"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.happy,
                        0.45
                    );


                    await wait(
                        750
                    );


                    /* =================================================
                       ...

                       И ТЯНЕТСЯ ЗА ЗВЕЗДОЙ
                       ОБРАТНО 😂
                    ================================================= */

                    setHoshiPose(
                        IMG.hoshiReachBack
                    );


                    hoshiWrap.classList.remove(
                        "proud"
                    );


                    hoshiWrap.classList.add(
                        "reach-back"
                    );


                    await wait(
                        500
                    );


                    /* =========================
                       МИРА:
                       НЕТ.
                ========================= */

                    setCharacterPose(
                        "mira",
                        IMG.miraAnnoyed
                    );


                    await speak(
                        "mira",
                        "МИРА",
                        "Нет.",
                        VOICE.miraNo
                    );


                    /* =========================
                       ХОШИ 😒
                ========================= */

                    setHoshiPose(
                        IMG.hoshiShy
                    );


                    hoshiWrap.classList.remove(
                        "reach-back"
                    );


                    hoshiWrap.classList.add(
                        "offended"
                    );


                    playHoshiSound(
                        HOSHI_SOUND.grumble,
                        0.45
                    );


                    await wait(
                        650
                    );


                    setCharacterPose(
                        "mira",
                        IMG.mira
                    );


                    setCharacterPose(
                        "zoey",
                        IMG.zoey
                    );


                    clearDialogue();


                    completed =
                        true;


                    /* =================================================
                       ПЕРЕХОД В ACT VII

                       Все семь звёзд начинают
                       собираться в цифру 7.
                    ================================================= */

                    await wait(
                        500
                    );
                    stopQuietBgm();

                    game.showScene(
                        "sevenStars"
                    );

                }
            );


            /* =====================================================
               START
            ===================================================== */

            await wait(
                300
            );


            await playQuietOpening();

        }

    };

}

