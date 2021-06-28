"use strict";
var blackforest;
(function (blackforest) {
    async function Arrival01() {
        console.log("Arrival01");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival01);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Walking, walking, walking... The last couple of days have been quite a journey. Although nothing special has really happened on the way, you're glad you have finally arrived here at the black forest.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Black forest.. what a scary name. Something is really off about this place, an eeriness that makes you feel uncomfortable. You realize there are no birds singing at all, what is going on here?");
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
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "The sun is shining through the trees, casting shadows on the ground that is still coated in dew.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Now that you think about it, the guy who told you to come here back in Grayrock didn't look like the most trustworthy person in the world, a Kwelk after all.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Not a lot of information that he gave you either, just told you that they really needed a Wanderer to help them. You would not regret it, he said...");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You're following a narrow path along some old firs. Suddenly a silhouette steps out from behind a thick tree and stands in your way..");
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
        //ƒS.Sound.fade(sound.mainTheme, 0.2, 0.1, true);
        await blackforest.ƒS.Character.show(blackforest.characters.warden, blackforest.characters.warden.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        // await ƒS.Speech.tell (characters.warden, "");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Greetings stranger, I am the Warden of the Eastern Gate, what is your name?");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Enter your name: ");
        blackforest.dataForProgress.Protagonist.name = await blackforest.ƒS.Speech.getInput();
        console.log(blackforest.dataForProgress.Protagonist.name);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Ah, nice to finally meet you " + blackforest.dataForProgress.Protagonist.name + ", I know why you are here, the forest has been awaiting your arrival. I assume you might have a lot of questions, you will have to wait a bit longer, I am not the one who can answer them.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Please go see the people at the quarry and talk to Quill, the Head of the Beahorns. He is already waiting there for you, he will tell you what to do next!");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Thank you for coming, we really need your help here. Now go on and take care, just follow the river and you can't miss the quarry!");
        await blackforest.ƒS.update(1);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.warden);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "It is still early in the morning as you make your way towards the sound of water rushing in the distance..");
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
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "In this light the forest does not look scary at all anymore, if only it wasn't for the silence, only the wind blowing through the trees and the river rushing in the background.. Other than that, no sign of life. This has to be the reason they called you here..");
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
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After another couple of minutes you reach a stream that has carved its way through the thicket between the trunks. This must be the river the warden was talking about.");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.show(blackforest.overlays.monk, blackforest.overlays.monk.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "To your left you see a narrow bridge and on it you see a creature holding a walking stick, trying to keep its balance. He looks a bit clumsy with his long robe, but manages to cross the river with surprising confidence. As soon as he notices you he comes up and starts talking.");
        await blackforest.ƒS.Character.hide(blackforest.overlays.monk);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.show(blackforest.characters.monk, blackforest.characters.monk.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "Hey, hey.. Uh, that was really close, I almost fell off that bridge. Good thing I have always got my stick with me, that thing saved my life quiet a few times!                 ... I have never seen you here before.. you look different, you're not from here. Hmm, you must be the Wanderer they called!");
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "My name is Yareem, delighted to meet you. I live in this forest, wandering around, always looking for adventure. We do rarely see Wanderers walk our paths, so excuse me for talking a lot. The forest is in bad condition.. the birds.. what is a forest without their beautiful voices. But you're here to save us, finally!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.monk);
        await blackforest.ƒS.Character.show(blackforest.characters.monk, blackforest.characters.monk.pose.pointing, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "Look there!");
        await blackforest.ƒS.Character.hide(blackforest.characters.monk);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival055);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "These are Beahorns, water folks, they are really good at hiding if they don't want to be seen. Watch the dark spots!");
        await blackforest.ƒS.Character.show(blackforest.overlays.eyes, blackforest.overlays.eyes.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "They live between the roots of the trees along the river banks, collecting valuable resources and distributing them over the whole forest using boats. Without them, this place would not be the same... Really nice creatures, reliable and trustworthy, but not naive!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.overlays.eyes);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival05);
        await blackforest.ƒS.Character.show(blackforest.characters.monk, blackforest.characters.monk.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "You're already on your way to the quarry I reckon, they will definitely be able to support you! It is not far from here, just cross the river and follow the path.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "Farewell and best of luck on your journey, friend!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.monk);
        await blackforest.ƒS.update(1);
    }
    blackforest.Arrival05 = Arrival05;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Ending() {
        console.log("Ending");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        await blackforest.ƒS.Location.show(blackforest.locations.ending);
        await blackforest.ƒS.update(1);
    }
    blackforest.Ending = Ending;
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
        black: {
            name: "Black",
            background: "Images/Black.jpg"
        },
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
        ending: {
            name: "Ending",
            background: "Images/Ending.jpg"
        },
    };
    blackforest.overlays = {
        monk: {
            name: "Monk",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Overlays/ol_monk.png",
            }
        },
        eyes: {
            name: "Eyes",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Overlays/ol_eyes.png",
            }
        },
    };
    //define characters
    blackforest.characters = {
        Narrator: {
            name: ""
        },
        warden: {
            name: "Warden:",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_warden.png",
            }
        },
        monk: {
            name: "Yareem:",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_monk_normal.png",
                pointing: "Images/Characters/ch_monk_pointing.png",
            }
        },
    };
    /*let volume: number = 1.0;
 
   export function incrementSound(): void {
     if (volume < 100) {
       volume += 0.1;
       ƒS.Sound.setVolume(sound.mainTheme, volume);
     }
   }
 
   export function decrementSound(): void {
     if (volume > 0) {
       volume -= 0.1;
       ƒS.Sound.setVolume(sound.mainTheme, volume);
     }
   }
 
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
 let gameMenu: ƒS.Menu;
 
  async function menuButtons(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
    }
    else if (_option == inGameMenu.turnUpVolume) {
      incrementSound();
    }
    else if (_option == inGameMenu.turnDownVolume) {
      decrementSound();
    }
  };     */
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
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            /*case ƒ.KEYBOARD_CODE.S:
              console.log("Save");
              await ƒS.Progress.save();
              break;
            case ƒ.KEYBOARD_CODE.D:
              console.log("Load");
              await ƒS.Progress.load();
              break;*/
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        /*gameMenu = ƒS.Menu.create(inGameMenu, menuButtons, "gameMenu");
      
        let uff = document.getElementsByClassName("gameMenu")[0];
        uff.setAttribute("id", "MenuID");*/
        let scenes = [
            { scene: blackforest.Arrival01, name: "Arrival01" },
            { scene: blackforest.Arrival02, name: "Arrival02" },
            { scene: blackforest.Arrival03, name: "Arrival03" },
            { scene: blackforest.Arrival04, name: "Arrival04" },
            { scene: blackforest.Arrival05, name: "Arrival05" },
            { scene: blackforest.Ending, name: "Ending" },
        ];
        blackforest.ƒS.Progress.setData(blackforest.dataForProgress);
        // start the sequence
        blackforest.ƒS.Progress.go(scenes);
    }
    ;
})(blackforest || (blackforest = {}));
;
//# sourceMappingURL=THECURSEOFTHEBLACKFOREST.js.map