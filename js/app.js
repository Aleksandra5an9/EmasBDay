import { AudioManager } from "./audio.js";
import { Game } from "./game.js";

import { createIntroScene } from "./scenes/intro.js";
import { createStarTheftScene } from "./scenes/star_theft.js";
import { createPuzzleScene } from "./scenes/puzzle.js";
import { createCitySearchScene } from "./scenes/citySearch.js";
import { createColoringScene } from "./scenes/coloring.js";
import { createLairScene } from "./scenes/lair.js";
import { createSealsScene } from "./scenes/seals.js";
import {createChaseScene} from "./scenes/chase.js";
import {createQuietHonmoonScene} from "./scenes/quietHonmoon.js";
import {createSevenStarsScene} from "./scenes/sevenStars.js";
import {createFinalScene} from "./scenes/final.js";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const root =
            document.querySelector(
                "#app"
            );


        const audio =
            new AudioManager();


        const game =
            new Game({

                root,
                audio,

                scenes: {

                    intro:
                        (ctx) =>
                            createIntroScene(
                                ctx
                            ),

                    starTheft:
                        (ctx) =>
                            createStarTheftScene(
                                ctx
                            ),

                    puzzle:
                        (ctx) =>
                            createPuzzleScene(
                                ctx
                            ),

                    citySearch:
                        (ctx) =>
                            createCitySearchScene(
                                ctx
                            ),

                    coloring:
                        (ctx) =>
                            createColoringScene(
                                ctx
                            ),

                    lair:
                        (ctx) =>
                            createLairScene(
                                ctx
                            ),

                    seals:
                        (ctx) =>
                            createSealsScene(
                                ctx
                            ),

                    chase:
                        (ctx) =>
                            createChaseScene(
                                ctx
                            ),

                    quietHonmoon:
                        (ctx) =>
                            createQuietHonmoonScene(
                                ctx
                            ),

                    sevenStars:
                        (ctx) =>
                            createSevenStarsScene(
                                ctx
                            ),

                    final:
                        (ctx) =>
                            createFinalScene(
                                ctx
                            )

                }

            });


        /* =====================================================
           DEBUG SCENE
        ===================================================== */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const debugScene =
            params.get(
                "scene"
            );


        if (
            debugScene
        ) {

            game.showScene(
                debugScene
            );

        } else {

            game.start();

        }

    }
);