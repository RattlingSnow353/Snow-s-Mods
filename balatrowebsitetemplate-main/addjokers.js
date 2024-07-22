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
            "(Hover Over Card)",
            "{C:inactive}(Art by {C:red,E:1,S:1.1}CADIO{}{C:inactive})"
        ],
        image_url: "img/j_verdant_shift.png",
        rarity: "Rare",
        related: "Earth Day",
        hoverText: "{C:inactive}(Currently {C:chips}+1{C:inactive} Chips, {C:mult}+1{C:inactive} Mult)<br/>{C:purple}Spring{C:black}: each played card with the club suit gives random enhancement to it.<br/> {C:purple}Summer{C:black}: +3 Mult for each played card with the heart suit.<br/> {C:purple}Autumn{C:black}: +4 chips for each discarded card with the diamond suit.<br/> {C:purple}Winter{C:black}: each discarded card with the spade suit gives random enhancement to it.",
        hoverSize: "400",
    },
    {
        name: "Fool's Fortune",
        text: [
            "Sell this card to create {C:attention}2{} free copies of {C:tarot}The Fool{}",
            "{C:inactive}(Must have room, Only works during play){}"
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
            "Playing a {C:attention}Pair{} of face cards gives {C:mult}+3{} Mult",
            "{C:inactive}(Currently {C:mult}+5{}{C:inactive} Mult)"
        ],
        image_url: "img/j_black_swan.png",
        rarity: "Uncommon",
        related: "Pride Day"
    },
    {
        name: "Love Is Blind",
        text: [
            "{C:mult}X3{} Mult, all hearts cards in hand become {C:mult}debuffed{}"
        ],
        image_url: "img/j_love_is_blind.png",
        rarity: "Uncommon",
        related: "Valentine's Day"
    },
    {
        name: "Turkey Dinner",
        text: [
            "Sell this card to {C:attention}instantly win{} current blind",
            "{C:inactive}(Only works during play){}"
        ],
        image_url: "img/j_turkey_dinner.png",
        rarity: "Rare",
        related: "Thanksgiving"
    }
]

let jokersot = [
    {
        name: "Cool Egg",
        text: [
            //"Gains {C:money}$4{} in {C:attention}sell value{} and {C:chips}+15{} chips every round",
            //"{C:inactive}(Currently {C:chips}+200{}{C:inactive} Chips)",
            "{C:attention}Temporary removed"
        ],
        image_url: "img/j_cool_egg.png",
        rarity: "Fusion",
        related: "Other",
        //fusion_jokers: [
        //    "img/j_egg.png",
        //    "img/j_stuntman.png"
        //],
    },
    {
        name: "Chick",
        text: [
            "Gains {C:money}$3{} in {C:attention}sell value{}",
            "every round. Lays an",
            "egg when {C:attention}sold{}.",
        ],
        image_url: "img/j_chick.png",
        rarity: "Evolved",
        related: "Other",
        evolved_jokers: [
            "img/j_egg_des.png",
            "img/j_egg.png"
        ],
    },
]

let jokersdi = [
    {
        name: "Opps! All Glorbs!",
        text: [
            "All Probabilities {C:attention}Randomized{}",
            "{C:inactive}(ex: {C:green}1/3{}{C:inactive} -> {C:green}(0-3)/3{}{C:inactive})",
        ],
        image_url: "img/j_opps_all_glorbsDice.png",
        rarity: "Common",
        related: "Dice",
    },
    {
        name: "What? No Numbers?",
        text: [
            "All Probabilities Become {C:mult}0{}",
            "{C:inactive}(ex: {C:green}1/3{}{C:inactive} -> {C:green}0/3{}{C:inactive})",
        ],
        image_url: "img/j_what_no_numbersDice.png",
        rarity: "Uncommon",
        related: "Dice",
    },
    {
        name: "Sicherman",
        text: [
            "All Probabilities {C:green}double{} or {C:mult}half{} each {C:attention}round{}.",
            "{C:inactive}(ex: {C:green}1/3{}{C:inactive} -> {C:green}(0.5/2)/3{}{C:inactive})",
        ],
        image_url: "img/j_sichermanDice.png",
        rarity: "Uncommon",
        related: "Dice",
    },
    {
        name: "AAAH?! It's Infinity!?",
        text: [
            "All Probabilities become {C:green}certain{}",
            "{C:inactive}(ex: {C:green}1/3{}{C:inactive} -> {C:green}999999999999/3{}{C:inactive})",
        ],
        image_url: "img/j_infinityDice.png",
        rarity: "Rare",
        related: "Dice",
    },
    {
        name: "Fudge Dice",
        text: [
            "All Probabilties are {C:green}increased{} or {C:mult}decreased{} by 1 randomly each {C:attention}round{}.",
            "{C:inactive}(ex: {C:green}1/3{}{C:inactive} -> {C:green}(+1/-1)/3{}{C:inactive})",
        ],
        image_url: "img/j_fudgeDice.png",
        rarity: "Common",
        related: "Dice",
    },
    {
        name: "Flux Dice",
        text: [
            "All Probabilties are {C:mult}multiplied{} by {C:green}X1{}. Gains {C:green}X0.03{} every time a {C:attention}lucky card{} is scored.",
        ],
        image_url: "img/j_fluxDice.png",
        rarity: "Uncommon",
        related: "Dice",
    },
    {
        name: "Oops! All Oops!",
        text: [
            "Spawns a {C:attention}random{} dice, {C:mult}destroys{} itself.",
        ],
        image_url: "img/j_oops_all_oopsDice.png",
        rarity: "Rare",
        related: "Dice",
    },
    {
        name: "Coin",
        text: [
            "Has a {C:green,E:1,S:1.1}1 in 2{} chance to gain {C:mult}2{} mult when hand played {C:inactive}(Currently {C:mult}+0{C:inactive} Mult)",
        ],
        image_url: "img/j_coin.png",
        rarity: "Common",
        related: "Coin",
    },
    {
        name: "Ghost Coin",
        text: [
            "Has a {C:green,E:1,S:1.1}1 in 10{} chance to give {C:mult}X10{} mult",
        ],
        image_url: "img/j_ghost_coin.png",
        rarity: "Rare",
        related: "Coin",
    },
]

let consumablesdi = [
    {
        name: "Fuel Cell",
        text: [
            "Enhances {C:attention}1{} selected card into a {C:attention}Platinum card{}.",
        ],
        image_url: "img/c_fuel_cell.png",
        rarity: "Tarot",
        related: "Other",
    },
]

let cardmodsdi = [
    {
        name: "Platinum Card",
        text: [
            "{C:green,E:1,S:1.1}1 in 6{} chance to {C:attention}Retrigger{}",
            "{C:green,E:1,S:1.1}1 in 18{} chance for {C:green}+0.2{} Probability",
        ],
        image_url: "img/m_platinum_card.png",
        rarity: "Enhancement",
        related: "Other",
    },
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
    "Fusion": "#F7D762",
    "Evolved": "#8867a5",
}

let relateds = {
    "Birthday": "#FFD700",
    "Halloween": "#FFA500",
    "Easter": "#90EE90",
    "Christmas": "#C8102E",
    "New Years": "#191970",
    "St.Patrick's Day": "#2E8B57",
    "Earth Day": "#228B22",
    "April Fools' Day": "#00FF00",
    "Pride Day": "#FF6CB5",
    "Valentine's Day": "#FFB6C1",
    "Thanksgiving": "#DAA520",
    "Dice": "#5e469c",
    "Coin": "#e5b637",
    "Other": "#9bb6bd",
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

        if (showHoverText && joker.hoverText) {
            let hoverTextDiv = document.createElement("div");
            hoverTextDiv.classList.add("hover-text");

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
            joker_div.id = joker.name.toLowerCase().replace(/\s/g, "-");

            // Set initial styles for hover text
            hoverTextDiv.style.opacity = '0';
            hoverTextDiv.style.maxHeight = '0';
            hoverTextDiv.style.overflow = 'hidden';

            // Calculate transition duration based on the height of hover text
            let transitionDuration = Math.max(0.3, hoverTextDiv.scrollHeight / 50 * 0.3); // Adjust the factor as needed
            hoverTextDiv.style.transition = `opacity ${transitionDuration}s ease, max-height ${transitionDuration}s ease`;

            // Smoothly transition hover text appearance
            joker_div.addEventListener('mouseenter', function () {
                hoverTextDiv.style.opacity = '1';
                hoverTextDiv.style.maxHeight = `${joker.hoverSize}px`; // Adjust the height based on joker.hoverSize
            });

            // Smoothly transition hover text disappearance
            joker_div.addEventListener('mouseleave', function () {
                hoverTextDiv.style.opacity = '0';
                hoverTextDiv.style.maxHeight = '0';
            });
        }

        if (joker.fusion_jokers) {
          let fusion_div = document.createElement("div");
          fusion_div.innerHTML = `
          <table>
            <tr>
            <td><img src="${joker.fusion_jokers[0]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
            <td><h1 style="padding-right: 20px; padding-left: 20px">+</h1></td>
            <td><img src="${joker.fusion_jokers[1]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
            </tr>
          </table>
          `
          joker_div.innerHTML += `
          <button type="button" class="collapsible">Show Fusion</button>`

          fusion_div.classList.add("content");
          joker_div.appendChild(fusion_div);
        }

        if (joker.evolved_jokers) {
            let evolve_div = document.createElement("div");
            evolve_div.innerHTML = `
          <table>
            <tr>
            <td><img src="${joker.evolved_jokers[0]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
            <td><img src="${joker.evolved_jokers[1]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
            </tr>
          </table>
          `
            joker_div.innerHTML += `
          <button type="button" class="collapsible">Show Evolution</button>`

            evolve_div.classList.add("content");
            joker_div.appendChild(evolve_div);
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

//if (consumablesh.length === 0) {
//    document.querySelector(".consumablesfull").style.display = "none";
//} else {
//    let consumables_div = document.querySelector(".consumables-holiday");
//    add_cards_to_div(consumablesh, consumables_div);
//}
//
//if (card_modificationsh.length === 0) {
//    document.querySelector(".cardmodsfull").style.display = "none";
//} else {
//    let cardmods_div = document.querySelector(".cardmods-holiday");
//    add_cards_to_div(card_modificationsh, cardmods_div);
//}

if (decksh.length === 0) {
    document.querySelector(".decksfull").style.display = "none";
} else {
    let decks_div = document.querySelector(".decks-holiday");
    add_cards_to_div(decksh, decks_div);
}

//if (stickersh.length === 0) {
//    document.querySelector(".stickersfull").style.display = "none";
//} else {
//    let stickers_div = document.querySelector(".stickers-holiday");
//    add_cards_to_div(stickersh, stickers_div);
//}
//
//if (blindsh.length === 0) {
//    document.querySelector(".blindsfull").style.display = "none";
//} else {
//    let blinds_div = document.querySelector(".blinds-holiday");
//    add_cards_to_div(blindsh, blinds_div);
//}

if (jokersdi.length === 0) {
    document.querySelector(".jokersdifull").style.display = "none"
} else {
    let jokersdi_div = document.querySelector(".jokers-diced");
    add_cards_to_div(jokersdi, jokersdi_div, true);
}

if (consumablesdi.length === 0) {
    document.querySelector(".consumablesdifull").style.display = "none";
} else {
    let consumablesdi_div = document.querySelector(".consumables-diced");
    add_cards_to_div(consumablesdi, consumablesdi_div);
}

if (cardmodsdi.length === 0) {
    document.querySelector(".cardmodsdifull").style.display = "none";
} else {
    let cardmodsdi_div = document.querySelector(".cardmods-diced");
    add_cards_to_div(cardmodsdi, cardmodsdi_div);
}

if (jokersot.length === 0) {
    document.querySelector(".jokersotfull").style.display = "none"
} else {
    let jokersot_div = document.querySelector(".jokers-other");
    add_cards_to_div(jokersot, jokersot_div, true);
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    var button = coll[i];
    var originalText = button.innerHTML;
    originalText = originalText.replace(/^(Show |Hide )/, '');

    button.setAttribute('data-original-text', originalText);
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            this.innerHTML = "Show " + this.getAttribute('data-original-text');
            content.style.maxHeight = null;
        } else {
            this.innerHTML = "Hide " + this.getAttribute('data-original-text');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}