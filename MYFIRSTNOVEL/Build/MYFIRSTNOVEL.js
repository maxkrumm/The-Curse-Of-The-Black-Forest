"use strict";
var MYFIRSTNOVEL;
(function (MYFIRSTNOVEL) {
    async function Hallway() {
        console.log("Hallway");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Risa: {
                T0000: "Willkommen",
                T0001: ""
            }
        };
        await MYFIRSTNOVEL.ƒS.Location.show(MYFIRSTNOVEL.locations.inferno);
        await MYFIRSTNOVEL.ƒS.Character.show(MYFIRSTNOVEL.characters.Risa, MYFIRSTNOVEL.characters.Risa.pose.normal, MYFIRSTNOVEL.ƒS.positions.bottomright);
        await MYFIRSTNOVEL.ƒS.update(1);
        await MYFIRSTNOVEL.ƒS.Speech.tell(MYFIRSTNOVEL.characters.Risa, text.Risa.T0000);
        await MYFIRSTNOVEL.ƒS.Speech.tell(MYFIRSTNOVEL.characters.Risa, "hey <3");
        await MYFIRSTNOVEL.ƒS.update(1);
    }
    MYFIRSTNOVEL.Hallway = Hallway;
})(MYFIRSTNOVEL || (MYFIRSTNOVEL = {}));
var MYFIRSTNOVEL;
(function (MYFIRSTNOVEL) {
    MYFIRSTNOVEL.ƒ = FudgeCore;
    MYFIRSTNOVEL.ƒS = FudgeStory;
    console.log("FudgeStoryyyyyyyyyyyyyyy");
    //define transition
    MYFIRSTNOVEL.transition = {
        clock: {
            duration: 3,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    MYFIRSTNOVEL.sound = {
        //Musik
        backgroundTheme: "",
        //Sound
        click: ""
    };
    MYFIRSTNOVEL.locations = {
        inferno: {
            name: "Inferno",
            background: "../Images/Backgrounds/inferno.png"
        }
    };
    //define characters
    MYFIRSTNOVEL.characters = {
        Narrator: {
            name: ""
        },
        Protagonist: {
            name: "James"
        },
        Risa: {
            name: "Risa",
            origin: MYFIRSTNOVEL.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "../Images/Characters/risa_normal.png",
                smile: "",
                sad: ""
            }
        }
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case MYFIRSTNOVEL.ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await MYFIRSTNOVEL.ƒS.Progress.save();
                break;
            case MYFIRSTNOVEL.ƒ.KEYBOARD_CODE.D:
                console.log("Load");
                await MYFIRSTNOVEL.ƒS.Progress.load();
                break;
        }
    }
    ;
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: MYFIRSTNOVEL.Hallway, name: "Hallway" }
        ];
        // start the sequence
        MYFIRSTNOVEL.ƒS.Progress.go(scenes);
    }
})(MYFIRSTNOVEL || (MYFIRSTNOVEL = {}));
//# sourceMappingURL=MYFIRSTNOVEL.js.map