"use strict";
var Template;
(function (Template) {
    async function Hallway() {
        console.log("Let's go swimming!");
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
        await Template.ƒS.Location.show(Template.locations.inferno);
        await Template.ƒS.Character.show(Template.characters.Risa, Template.characters.Risa.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Risa, text.Risa.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Risa, "aldeeeeeeeee.");
        await Template.ƒS.update(1);
    }
    Template.Hallway = Hallway;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory izzda");
    //define transition
    Template.transition = {
        clock: {
            duration: 3,
            alpha: "",
            edge: 1
        }
    };
    //define sound
    Template.sound = {
        //Musik
        backgroundTheme: "",
        //Sound
        click: ""
    };
    Template.locations = {
        inferno: {
            name: "Inferno",
            background: "Images/Backgrounds/inferno.png"
        }
    };
    //define characters
    Template.characters = {
        Narrator: {
            name: ""
        },
        Protagonist: {
            name: "James"
        },
        Risa: {
            name: "Risa",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "Images/Characters/risa_normal.png",
                smile: "",
                sad: ""
            }
        }
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.D:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Hallway, name: "HallwayStart" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
//# sourceMappingURL=XMain.js.map