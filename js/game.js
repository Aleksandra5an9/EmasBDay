export class Game {
    constructor({ root, audio, scenes }) {
        this.root = root;
        this.audio = audio;
        this.scenes = scenes;
        this.currentScene = null;

        this.state = {
            starsCollected: 0
        };

        // ---- Хранилище для раскрашенной эмблемы ----
        this.coloredEmblem = null;
    }

    start() {
        this.showStartScreen();
    }

    clearRoot() {
        this.root.innerHTML = "";
    }

    showStartScreen() {
        this.clearRoot();

        const screen = document.createElement("div");
        screen.className = "screen";

        screen.innerHTML = `
            <div class="center-overlay">
                <div class="title-big">Ema Birthday Adventure</div>
                <div class="subtitle">Нажми, чтобы начать игру</div>
                <button class="primary-btn" id="startGameBtn">Начать</button>
            </div>
        `;

        this.root.appendChild(screen);

        const btn = screen.querySelector("#startGameBtn");
        btn.addEventListener("click", () => {
            this.showScene("intro");
        });
    }

    async showScene(sceneName, data = {}) {
        this.clearRoot();
        this.currentScene = sceneName;

        const sceneFactory = this.scenes[sceneName];

        if (!sceneFactory) {
            console.error(`Scene "${sceneName}" not found`);
            return;
        }

        const scene = sceneFactory({
            game: this,
            audio: this.audio,
            state: this.state,
            data
        });

        await scene.mount(this.root);
    }

    setStarsCollected(count) {
        this.state.starsCollected = count;
    }

    // ---- Методы для работы с раскрашенной эмблемой ----

    /**
     * Сохраняет раскрашенную эмблему (DataURL)
     */
    setColoredEmblem(dataUrl) {
        this.coloredEmblem = dataUrl;
    }

    /**
     * Возвращает сохранённую раскрашенную эмблему (DataURL или null)
     */
    getColoredEmblem() {
        return this.coloredEmblem;
    }
}
