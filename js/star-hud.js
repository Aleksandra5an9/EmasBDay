/* =========================================================
   GLOBAL STAR HUD
========================================================= */


const TOTAL_STARS =
    7;


const IMG = {

    panel:
        "./assets/images/star_hud_panel.png",

    activeStar:
        "./assets/images/star_hud_active.png"

};


/* =========================================================
   CREATE
========================================================= */

export function createStarHud(
    collectedStars = 0
) {

    const hud =
        document.createElement(
            "div"
        );


    hud.className =
        "game-star-hud";


    hud.innerHTML = `

        <img
            class="game-star-hud-panel"
            src="${IMG.panel}"
            alt=""
        >


        <div
            class="game-star-hud-stars"
        >

            ${Array.from(
                {
                    length:
                        TOTAL_STARS
                },
                (
                    _,
                    index
                ) => `

                    <img
                        class="game-star-hud-star"
                        data-star-index="${index}"
                        src="${IMG.activeStar}"
                        alt=""
                    >

                `
            ).join("")}

        </div>

    `;


    updateStarHud(
        hud,
        collectedStars
    );


    return hud;

}


/* =========================================================
   UPDATE
========================================================= */

export function updateStarHud(
    hud,
    collectedStars
) {

    if (!hud) {

        return;

    }


    const amount =
        Math.max(
            0,
            Math.min(
                TOTAL_STARS,
                collectedStars
            )
        );


    const stars = [

        ...hud.querySelectorAll(
            ".game-star-hud-star"
        )

    ];


    stars.forEach(
        (
            star,
            index
        ) => {

            star.classList.toggle(
                "active",
                index < amount
            );

        }
    );

}