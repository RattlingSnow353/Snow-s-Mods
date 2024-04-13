let jokersh = [
    {
        name: "Egg Basket",
        text: [
            "Gains {C:money}$7{} in {C:attention}sell value{} every round. {C:green,E:1,S:1.1}1 in 4{} chance this is {C:mult}destroyed{} at the end of round.",
            "{C:inactive}(Art by {C:green,E:1,S:1.1}Grassy{}{C:inactive})"
        ],
        image_url: "img/j_egg_basket.png",
        rarity: "Common",
        related: "Easter"
    },
    {
        name: "Ritual Sacrifice",
        text: [
            "If {C:attention}consumable{} slots are full when blind is selected, {C:mult}destroy{} all {C:attention}consumables{} and create a random {C:blue}Spectral{} card.",
            "{C:inactive}(Art by {C:red,E:1,S:1.1}CADIO{}{C:inactive})"
        ],
        image_url: "img/j_ritual_sacrifice.png",
        rarity: "Rare",
        related: "Halloween"
    },
    {
        name: "7th Heaven",
        text: [
            "If played hand is a single {C:attention}7{} create a {C:attention}Judgement tarot{}",
            "{C:inactive}(Must have room){}"
        ],
        image_url: "img/j_seventh_heaven.png",
        rarity: "Uncommon",
        related: "Christmas"
    },
    {
        name: "Clover",
        text: [
            "Rerolls cost {C:money}$4{} less. {C:green,E:1,S:1.1}1 in 4{} chance to decrease price by {C:money}$1{} when blind is selected."
        ],
        image_url: "img/j_clover.png",
        rarity: "Uncommon",
        related: "St.Patrick's Day"
    },
    {
        name: "Verdant Shift",
        text: [
            "{C:purple}Picks{}:{C:black} a season in order whenever a blind is selected{}",
            "{C:inactive}(Currently {C:chips}+1{C:inactive} Chips, {C:mult}+1{C:inactive} Mult)",
            "{C:inactive}(Hover Over Card)"
        ],
        image_url: "img/j_blank.png",
        rarity: "Rare",
        related: "Earth Day",
        hoverText: "{C:purple}Spring{C:black}: each played card with the club suit gives random enhancement to it.<br/> {C:purple}Summer{C:black}: +4 chips for each discarded card with the diamond suit.<br/> {C:purple}Autumn{C:black}: +3 Mult for each played card with the heart suit.<br/> {C:purple}Winter{C:black}: each discarded card with the spade suit gives random enhancement to it.",
    },
    {
        name: "Fool's Fortune",
        text: [
            "Sell this card to create {C:attention}2{} free copies of {C:tarot}The Fool{}",
            "{C:inactive}(Must have room){}"
        ],
        image_url: "img/j_fools_fortune.png",
        rarity: "Uncommon",
        related: "April Fools' Day"
    },
    {
        name: "Combat Confection",
        text: [
            "If every scored card in played hand is a spade gain {C:mult}X0.13{} Mult.",
            "{C:inactive}(Currently{} {C:mult}X1.6{} {C:inactive}Mult){}"
        ],
        image_url: "img/j_combat_confection.png",
        rarity: "Uncommon",
        related: "Birthday"
    },
    {
        name: "Black Swan",
        text: [
            "Playing a {C:attention}Pair{} of face cards gives {C:mult}+10{} Mult",
            "{C:inactive}(Currently {C:mult}+10{}{C:inactive} Mult)"
        ],
        image_url: "img/j_black_swan.png",
        rarity: "Uncommon",
        related: "Pride Day"
    },
    {
        name: "Love Is Blind",
        text: [
            "{C:mult}X3{} Mult, all non-hearts cards inhand become face down for the round"
        ],
        image_url: "img/j_love_is_blind.png",
        rarity: "Uncommon",
        related: "Valentine's Day"
    }
]

// works the same. 
let consumablesh = [
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/j_joker.png",
    //   rarity: "Tarot"
    // },
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/j_joker.png",
    //   rarity: "Planet"
    // },
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/j_joker.png",
    //   rarity: "Spectral"
    // },
]

let card_modificationsh = [
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/j_joker.png",
    //   rarity: "Enhancement"
    // },
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/j_joker.png",
    //   rarity: "Edition"
    // },
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/sticker_example.png",
    //   rarity: "Seal"
    // },
]

let decksh = [
    {
        name: "Dawn Deck",
        text: [
            "{C:attention}Retrigger{} last played hand {C:mult}twice{},",
            "{C:chips}-1{} hand per round"
        ],
        image_url: "img/d_dawn_deck.png",
        rarity: "Deck",
        related: "New Years"
    },
]

let stickersh = [
    // {
    //   name: "Joker",
    //   text: [
    //     "{C:mult}+4{} Mult"
    //   ],
    //   image_url: "img/sticker_example.png",
    //   rarity: "Sticker"
    // },
]

let blindsh = [
    // {
    //   name: "The Wall",
    //   text: [
    //     "Extra large blind",
    //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
    //     "{C:inactive}(Appears from Ante 2)"
    //   ],
    //   image_url: "img/the_wall.png",
    //   rarity: "Boss Blind"
    // },
    // {
    //   name: "Violet Vessel",
    //   text: [
    //     "Very large blind",
    //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
    //     "{C:inactive}(Appears from Ante 8)"
    //   ],
    //   image_url: "img/violet_vessel.png",
    //   rarity: "Showdown"
    // },
]

let cols = {

    MULT: "#FE5F55",
    CHIPS: "#009dff",
    MONEY: "#f3b958",
    XMULT: "#FE5F55",
    FILTER: "#ff9a00",
    ATTENTION: "#ff9a00",
    BLUE: "#009dff",
    RED: "#FE5F55",
    GREEN: "#4BC292",
    PALE_GREEN: "#56a887",
    ORANGE: "#fda200",
    IMPORTANT: "#ff9a00",
    GOLD: "#eac058",
    YELLOW: "#ffff00",
    CLEAR: "#00000000",
    WHITE: "#ffffff",
    PURPLE: "#8867a5",
    BLACK: "#374244",
    L_BLACK: "#4f6367",
    GREY: "#5f7377",
    CHANCE: "#4BC292",
    JOKER_GREY: "#bfc7d5",
    VOUCHER: "#cb724c",
    BOOSTER: "#646eb7",
    EDITION: "#ffffff",
    DARK_EDITION: "#5d5dff",
    ETERNAL: "#c75985",
    INACTIVE: "#ffffff99",
    HEARTS: "#f03464",
    DIAMONDS: "#f06b3f",
    SPADES: "#403995",
    CLUBS: "#235955",
    DYN_UI: {
        MAIN: "#374244",
        DARK: "#374244",
        BOSS_MAIN: "#374244",
        BOSS_DARK: "#374244",
        BOSS_PALE: "#374244"
    },
    SO_1: {
        Hearts: "#f03464",
        Diamonds: "#f06b3f",
        Spades: "#403995",
        Clubs: "#235955",
    },
    SO_2: {
        Hearts: "#f83b2f",
        Diamonds: "#e29000",
        Spades: "#4f31b9",
        Clubs: "#008ee6",
    },
    SUITS: {
        Hearts: "#FE5F55",
        Diamonds: "#FE5F55",
        Spades: "#374649",
        Clubs: "#424e54",
    },

    SET: {
        Default: "#cdd9dc",
        Enhanced: "#cdd9dc",
        Joker: "#424e54",
        Tarot: "#424e54",
        Planet: "#424e54",
        Spectral: "#424e54",
        Voucher: "#424e54",
    },
    SECONDARY_SET: {
        Default: "#9bb6bdFF",
        Enhanced: "#8389DDFF",
        Joker: "#708b91",
        Tarot: "#a782d1",
        Planet: "#13afce",
        Spectral: "#4584fa",
        Voucher: "#fd682b",
        Edition: "#4ca893",
    },
}

let rarities = {
    "Common": "#009dff",
    "Uncommon": "#4BC292",
    "Rare": "#fe5f55",
    "Legendary": "#b26cbb",
    "Joker": "#708b91",
    "Tarot": "#a782d1",
    "Planet": "#13afce",
    "Spectral": "#4584fa",
    "Voucher": "#fd682b",
    "Enhancement": "#8389DD",
    "Edition": "#4ca893",
    "Seal": "#4584fa",
    "Deck": "#9bb6bd",
    "Sticker": "#5d5dff",
    "Boss Blind": "#5d5dff",
    "Showdown": "#4584fa",
}

let relateds = {
    "Birthday": "#FF69B4",
    "Halloween": "#FFA500",
    "Easter": "#90EE90",
    "Christmas": "#FFD700",
    "New Years": "#191970",
    "St.Patrick's Day": "#2E8B57",
    "Earth Day": "#228B22",
    "April Fools' Day": "#FFD700",
    "Pride Day": "#FF6CB5",
    "Valentine's Day": "#FFB6C1"
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokersh, jokersh_div, showHoverText = false) => {
    for (let joker of jokersh) {
        console.log("adding joker", joker.name);

        let hoverText = showHoverText && joker.hoverText ? joker.hoverText : "";

        joker.text = joker.text.map((line) => { return line + "{}" });

        joker.text = joker.text.join("<br/>");
        joker.text = joker.text.replaceAll("{}", "</span>");
        joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
            let classes = p1.split(",");

            let css_styling = "";

            for (let i = 0; i < classes.length; i++) {
                let parts = classes[i].split(":");
                if (parts[0] === "C") {
                    css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
                } else if (parts[0] === "X") {
                    css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
                }
            }

            return `</span><span style='${css_styling}'>`;
        });

        let joker_div = document.createElement("div");
        joker_div.classList.add("joker");
        if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
            joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <h4 class="related" style="background-color: ${relateds[joker.related]}">${joker.related}</h4>
        <div class="text">${joker.text}</div>
      `;
        } else if (joker.soul) {
            joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <h4 class="related" style="background-color: ${relateds[joker.related]}">${joker.related}</h4>
        <div class="text">${joker.text}</div>
      `;
        } else {
            joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <h4 class="related" style="background-color: ${relateds[joker.related]}">${joker.related}</h4>
        <div class="text">${joker.text}</div>
      `;
        }

        // Inside the add_cards_to_div function
        if (showHoverText && joker.hoverText) {
            let hoverTextDiv = document.createElement("div");
            hoverTextDiv.classList.add("hover-text");
            // Split hover text by comma and add span with color styling to each part
            let hoverTextParts = joker.hoverText.split(',');
            hoverTextParts.forEach(part => {
                let span = document.createElement('span');
                span.innerHTML = part.replaceAll(/{([^}]+)}/g, function (match, p1) {
                    let classes = p1.split(",");

                    let css_styling = "";

                    for (let i = 0; i < classes.length; i++) {
                        let parts = classes[i].split(":");
                        if (parts[0] === "C") {
                            css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
                        } else if (parts[0] === "X") {
                            css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
                        }
                    }

                    return `</span><span style='${css_styling}'>`;
                });
                hoverTextDiv.appendChild(span);
            });
            joker_div.appendChild(hoverTextDiv);
            // Set the ID for the joker element if hover text is added
            joker_div.id = joker.name.toLowerCase().replace(/\s/g, "-");
        }

        jokersh_div.appendChild(joker_div);
    }
}


if (jokersh.length === 0) {
    document.querySelector(".jokersfull").style.display = "none";
} else {
    let jokersh_div = document.querySelector(".jokers-holiday");
    add_cards_to_div(jokersh, jokersh_div, true);
}

if (consumablesh.length === 0) {
    document.querySelector(".consumablesfull").style.display = "none";
} else {
    let consumables_div = document.querySelector(".consumables-holiday");
    add_cards_to_div(consumablesh, consumables_div);
}

if (card_modificationsh.length === 0) {
    document.querySelector(".cardmodsfull").style.display = "none";
} else {
    let cardmods_div = document.querySelector(".cardmods-holiday");
    add_cards_to_div(card_modificationsh, cardmods_div);
}

if (decksh.length === 0) {
    document.querySelector(".decksfull").style.display = "none";
} else {
    let decks_div = document.querySelector(".decks-holiday");
    add_cards_to_div(decksh, decks_div);
}

if (stickersh.length === 0) {
    document.querySelector(".stickersfull").style.display = "none";
} else {
    let stickers_div = document.querySelector(".stickers-holiday");
    add_cards_to_div(stickersh, stickers_div);
}

if (blindsh.length === 0) {
    document.querySelector(".blindsfull").style.display = "none";
} else {
    let blinds_div = document.querySelector(".blinds-holiday");
    add_cards_to_div(blindsh, blinds_div);
}

if (jokers.length === 0) {
    document.querySelector(".jokersfull").style.display = "none"
} else {
    let jokers_div = document.querySelector(".jokers-another-theme");
    add_cards_to_div(jokers, jokers_div);
}