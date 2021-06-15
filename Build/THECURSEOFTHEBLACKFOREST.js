"use strict";
var blackforest;
(function (blackforest) {
    async function Arrival01() {
        console.log("Arrival01");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival01);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You've arrived at the forest that you have been called to. The atmosphere is eerie, no birds are singing...");
        // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        blackforest.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    blackforest.Arrival01 = Arrival01;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Arrival02() {
        console.log("Arrival02");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival02);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "The sun is shining through the trees but it is still cold...");
        blackforest.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    blackforest.Arrival02 = Arrival02;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Arrival03() {
        console.log("Arrival03");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival03);
        blackforest.ƒS.Sound.fade(blackforest.sound.mainTheme, 0.2, 0.1, true);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After some time walking a silhouette approaches you..");
        await blackforest.ƒS.update(1);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.show(blackforest.characters.warden, blackforest.characters.warden.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Greetings stranger, what is your name?");
        blackforest.dataForProgress.Protagonist.name = await blackforest.ƒS.Speech.getInput();
        console.log(blackforest.dataForProgress.Protagonist.name);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Ah, nice to meet you ..., I know why you are here. Please go see the people at the quarry, Story Character 1 is already awaiting your arrival, he will tell you what to do!");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Just follow the river and you can't miss the quarry.");
        await blackforest.ƒS.update(1);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.warden);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "It's still early in the morning...");
        blackforest.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    blackforest.Arrival03 = Arrival03;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Arrival04() {
        console.log("Arrival04");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival04);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Reflect about what MC knows about why he was called to this forest. Maybe it has something to do with the silence?");
        // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        blackforest.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    blackforest.Arrival04 = Arrival04;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Arrival05() {
        console.log("Arrival05");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival05);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "This must be the river, the warden was speaking of.");
        // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        blackforest.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    blackforest.Arrival05 = Arrival05;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    blackforest.ƒ = FudgeCore;
    blackforest.ƒS = FudgeStory;
    console.log("Loaded!");
    //define transition
    blackforest.transition = {
        clock: {
            duration: 1,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    blackforest.sound = {
        //Musik
        mainTheme: "Sound/Music/vn_maintheme_loop.wav",
        //Sound
        click: ""
    };
    blackforest.locations = {
        arrival01: {
            name: "Arrival01",
            background: "Images/Backgrounds/bg_arrival01.jpg"
        },
        arrival02: {
            name: "Arrival02",
            background: "Images/Backgrounds/bg_arrival02.jpg"
        },
        arrival03: {
            name: "Arrival03",
            background: "Images/Backgrounds/bg_arrival03.jpg"
        },
        arrival04: {
            name: "Arrival04",
            background: "Images/Backgrounds/bg_arrival04.jpg"
        },
        arrival05: {
            name: "Arrival05",
            background: "Images/Backgrounds/bg_arrival05.jpg"
        },
        arrival055: {
            name: "Arrival055",
            background: "Images/Backgrounds/bg_arrival055.jpg"
        },
    };
    //define characters
    blackforest.characters = {
        Narrator: {
            name: ""
        },
        warden: {
            name: "Warden",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_warden.png",
            }
        },
    };
    let volume = 1.0;
    function incrementSound() {
        if (volume < 100) {
            volume += 0.1;
            blackforest.ƒS.Sound.setVolume(blackforest.sound.mainTheme, volume);
        }
    }
    blackforest.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            blackforest.ƒS.Sound.setVolume(blackforest.sound.mainTheme, volume);
        }
    }
    blackforest.decrementSound = decrementSound;
    let inGameMenu = {
        save: "Save",
        load: "Load",
        close: "Close",
        turnUpVolume: "+",
        turnDownVolume: "-",
        credits: "Credits",
        about: "About",
    };
    //create Menu with buttons
    let gameMenu;
    async function buttonFunctionalities /*namen ändern*/(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await blackforest.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await blackforest.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            incrementSound();
        }
        else if (_option == inGameMenu.turnDownVolume) {
            decrementSound();
        }
    }
    ;
    // Variablen die für den Spielverlauf gespeichert werden sollen
    blackforest.dataForProgress = {
        Protagonist: {
            name: "Wanderer"
        },
        Points: {
            warden: 0,
            Sae: 0
        },
    };
    let hiddenMenu = true;
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case blackforest.ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await blackforest.ƒS.Progress.save();
                break;
            case blackforest.ƒ.KEYBOARD_CODE.D:
                console.log("Load");
                await blackforest.ƒS.Progress.load();
                break;
            case blackforest.ƒ.KEYBOARD_CODE.M:
                console.log("Menu");
                if (hiddenMenu == false)
                    document.getElementById("MenuID").hidden = true;
                else if (hiddenMenu == true)
                    document.getElementById("MenuID").hidden = false;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = blackforest.ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
        let uff = document.getElementsByClassName("gameMenu")[0];
        uff.setAttribute("id", "MenuID");
        let scenes = [
            { scene: blackforest.Arrival01, name: "Arrival01" },
            { scene: blackforest.Arrival02, name: "Arrival02" },
            { scene: blackforest.Arrival03, name: "Arrival03" },
            { scene: blackforest.Arrival04, name: "Arrival04" },
            { scene: blackforest.Arrival05, name: "Arrival05" },
            //    { scene: Arrival06, name: "Arrival06"},
        ];
        blackforest.ƒS.Progress.setData(blackforest.dataForProgress);
        // start the sequence
        blackforest.ƒS.Progress.go(scenes);
    }
    ;
})(blackforest || (blackforest = {}));
;
//# sourceMappingURL=THECURSEOFTHEBLACKFOREST.js.map