export class AudioManager {

    constructor() {
        this.music = null;
    }


    /* =========================================================
       CREATE AUDIO
    ========================================================= */

    createAudio(
        path,
        volume = 1
    ) {

        const audio =
            new Audio(path);

        audio.volume =
            Math.max(
                0,
                Math.min(
                    1,
                    volume
                )
            );

        audio.preload =
            "auto";

        return audio;
    }


    /* =========================================================
       SOUND EFFECT
    ========================================================= */

    async playSfx(
        path,
        volume = 1
    ) {

        const audio =
            this.createAudio(
                path,
                volume
            );

        try {

            /*
                await здесь ждёт только успешного
                СТАРТА воспроизведения.

                Он НЕ ждёт конца звука.
            */

            await audio.play();

        } catch (error) {

            console.warn(
                "SFX play error:",
                path,
                error
            );

        }

        return audio;
    }


    /* =========================================================
       VOICE
    ========================================================= */

    async playVoice(
        path,
        volume = 1
    ) {

        return new Promise(
            (resolve) => {

                const audio =
                    this.createAudio(
                        path,
                        volume
                    );


                let finished =
                    false;


                const finish =
                    () => {

                        if (finished) {
                            return;
                        }

                        finished =
                            true;

                        resolve();

                    };


                /*
                    Для реплик мы ждём,
                    пока голос закончится.
                */

                audio.addEventListener(
                    "ended",
                    finish,
                    {
                        once: true
                    }
                );


                audio.addEventListener(
                    "error",
                    finish,
                    {
                        once: true
                    }
                );


                audio
                    .play()
                    .catch(
                        (error) => {

                            console.warn(
                                "Voice play error:",
                                path,
                                error
                            );

                            finish();

                        }
                    );

            }
        );
    }


    /* =========================================================
       VOICE SEQUENCE
    ========================================================= */

    async playVoiceSequence(
        sequence = [],
        onLine = null
    ) {

        for (
            const item
            of sequence
        ) {

            /*
                Пауза перед репликой.
            */

            if (item.pause) {

                await this.wait(
                    item.pause
                );

            }


            /*
                Показываем текст,
                если передан callback.
            */

            if (
                item.text &&
                typeof onLine ===
                    "function"
            ) {

                onLine(
                    item.text
                );

            }


            /*
                Проигрываем голос.
            */

            if (item.path) {

                await this.playVoice(
                    item.path,
                    item.volume ?? 1
                );

            }

        }
    }


    /* =========================================================
       WAIT
    ========================================================= */

    async wait(ms) {

        return new Promise(
            (resolve) => {

                setTimeout(
                    resolve,
                    ms
                );

            }
        );
    }


    /* =========================================================
       STOP MUSIC
    ========================================================= */

    stopMusic() {

        if (!this.music) {
            return;
        }


        this.music.pause();

        this.music.currentTime =
            0;

        this.music =
            null;
    }


    /* =========================================================
       PLAY MUSIC
    ========================================================= */

    async playMusic(
        path,
        volume = 0.4,
        loop = true
    ) {

        /*
            Если уже играла музыка —
            сначала выключаем.
        */

        this.stopMusic();


        this.music =
            this.createAudio(
                path,
                volume
            );


        this.music.loop =
            loop;


        try {

            await this.music.play();

        } catch (error) {

            console.warn(
                "Music play error:",
                path,
                error
            );

        }


        return this.music;
    }

}