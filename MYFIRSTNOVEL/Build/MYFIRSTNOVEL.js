"use strict";
var myfirstnovel;
(function (myfirstnovel) {
    async function Entrance() {
        console.log("Entrance");
        myfirstnovel.ƒS.Speech.setTickerDelays(30, 2);
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.entrance);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        //Name Field
        myfirstnovel.dataForProgress.Protagonist.name = await myfirstnovel.ƒS.Speech.getInput();
        console.log(myfirstnovel.dataForProgress.Protagonist.name);
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    myfirstnovel.Entrance = Entrance;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Arrival03() {
        console.log("Arrival03");
        /*  let text = {
            Narrator: {
              T0000: "",
              T0001: ""
            },
            Protagonist:{
              T0000:"",
              T0001: ""
            },
            Risa: {
              T0000: "Willkommen",
              T0001: ""
            }
          };    */
        let animation = {
            start: { translation: myfirstnovel.ƒS.positions.bottomright /*, rotation: 360, scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("blue, 0") */ },
            end: { translation: myfirstnovel.ƒS.positions.bottomleft /*, rotation: 360, scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("red") */ },
            duration: 2,
            playmode: myfirstnovel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.arrival03);
        await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
        await myfirstnovel.ƒS.Character.animate(myfirstnovel.characters.warden, myfirstnovel.characters.warden.pose.normal, animation);
        await myfirstnovel.ƒS.update(1);
        //  await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.warden, "初めまして！水泳のチームのキャプテン、リサと申します！ようやく直接会えてとても嬉しいです！");
        await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.warden);
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.warden, myfirstnovel.characters.warden.pose.smile, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.warden, "今日午後に最初のトレーニングもあるんですが、何か手伝うことがありませんか？", false);
        let firstDialogueElementAnswers = {
            iSayOk: "大丈夫です。",
            iSayYes: "はい！はい！はい！はい！",
            iSayNo: "自分のこと構え！"
        };
        let firstDialogueElement = await myfirstnovel.ƒS.Menu.getInput(firstDialogueElementAnswers, "Decisions");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                //continue writing on this path here
                myfirstnovel.dataForProgress.Points.warden += 10;
                myfirstnovel.dataForProgress.Points.Sae += 10;
                console.log(myfirstnovel.dataForProgress.Points.warden);
                console.log(myfirstnovel.dataForProgress.Points.Sae);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.warden, "分かりました。よろしくお願いします！");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.warden);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
                return "good_01";
                break;
            case firstDialogueElementAnswers.iSayYes:
                myfirstnovel.dataForProgress.Points.warden += 50;
                console.log(myfirstnovel.dataForProgress.Points.warden);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.warden, "もちろんです！絶対ほかのメンバーにも伝えておきます！。よろしくお願いします！");
                await myfirstnovel.ƒS.update(1);
                myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.warden);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
                break;
            case firstDialogueElementAnswers.iSayNo:
                await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.warden);
                await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.warden, myfirstnovel.characters.warden.pose.angry, myfirstnovel.ƒS.positions.bottomleft);
                await myfirstnovel.ƒS.update(1);
                await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.warden, "言い方ひどいですよ！もういいです。");
                await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.warden);
                myfirstnovel.ƒS.Speech.clear();
                await myfirstnovel.ƒS.update(1);
                return "bad_01";
                break;
        }
        ;
    }
    myfirstnovel.Arrival03 = Arrival03;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Pool() {
        console.log("Pool");
        let text = {
            Narrator: {
                T0000: "これを見ている人の中で日本語を読める人いるはずないから、何を書いても許されると思います！",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Sae: {
                T0000: "Willkommen",
                T0001: "Wenn das hier angezeigt wird, funktioniert auch das zweite Textsystem.",
                T0002: "Trotzdem erzähle ich weiter um die Verzögerung zu testen."
            }
        };
        let signalDelay2 = myfirstnovel.ƒS.Progress.defineSignal([() => myfirstnovel.ƒS.Progress.delay(2)]);
        // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.pool);
        await myfirstnovel.ƒS.update(myfirstnovel.transition.clock.duration, myfirstnovel.transition.clock.alpha, myfirstnovel.transition.clock.edge);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, text.Narrator.T0000, false);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Sae, myfirstnovel.characters.Sae.pose.normal, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Sae, text.Sae.T0000);
        // await ƒS.Speech.tell(characters.Sae, "");
        await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Sae);
        await myfirstnovel.ƒS.Character.show(myfirstnovel.characters.Sae, myfirstnovel.characters.Sae.pose.smile, myfirstnovel.ƒS.positions.bottomleft);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Sae, text.Sae.T0001);
        // await ƒS.Speech.tell(characters.Sae, "");
        await signalDelay2();
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Sae, text.Sae.T0002);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Character.hide(myfirstnovel.characters.Sae);
        myfirstnovel.ƒS.Speech.clear();
        await myfirstnovel.ƒS.update(1);
    }
    myfirstnovel.Pool = Pool;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function bad() {
        console.log("bad");
        myfirstnovel.ƒS.Speech.setTickerDelays(30, 2);
        await myfirstnovel.ƒS.Location.show(myfirstnovel.locations.entrance);
        //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
        await myfirstnovel.ƒS.update(1);
        await myfirstnovel.ƒS.Speech.tell(myfirstnovel.characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        //Name Field
        myfirstnovel.dataForProgress.Protagonist.name = await myfirstnovel.ƒS.Speech.getInput();
        console.log(myfirstnovel.dataForProgress.Protagonist.name);
        await myfirstnovel.ƒS.update(1);
        myfirstnovel.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    }
    myfirstnovel.bad = bad;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    async function Animation() {
        console.log("Animation");
        /*   let animation: ƒS.AnimationDefinition = {
               start: {translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("blue, 0")},
               end: {translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red")},
               duration: 1,
               playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP
           }
   */
    }
    myfirstnovel.Animation = Animation;
})(myfirstnovel || (myfirstnovel = {}));
var myfirstnovel;
(function (myfirstnovel) {
    myfirstnovel.ƒ = FudgeCore;
    myfirstnovel.ƒS = FudgeStory;
    console.log("Loaded!");
    //define transition
    myfirstnovel.transition = {
        clock: {
            duration: 1,
            alpha: "Images/Transitions/circlewipe-cw.jpg",
            edge: 1
        }
    };
    //define sound
    myfirstnovel.sound = {
        //Musik
        backgroundTheme: "",
        //Sound
        click: ""
    };
    myfirstnovel.locations = {
        entrance: {
            name: "Entrance",
            background: "Images/Backgrounds/bg_entrance.jpg"
        },
        arrival03: {
            name: "Arrival03",
            background: "Images/Backgrounds/bg_arrival03.jpg"
        },
        pool: {
            name: "Pool",
            background: "Images/Backgrounds/bg_pool.jpg"
        },
    };
    //define characters
    myfirstnovel.characters = {
        Narrator: {
            name: ""
        },
        warden: {
            name: "Warden",
            origin: myfirstnovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_warden.png",
                smile: "Images/Characters/ch_warden.png",
                angry: "Images/Characters/ch_warden.png"
            }
        },
        Sae: {
            name: "サエ",
            origin: myfirstnovel.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_sae_normal.png",
                smile: "Images/Characters/ch_sae_smile.png",
                angry: ""
            }
        }
    };
    // Variablen die für den Spielverlauf gespeichert werden sollen
    myfirstnovel.dataForProgress = {
        Protagonist: {
            name: "James"
        },
        Points: {
            warden: 0,
            Sae: 0
        }
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case myfirstnovel.ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await myfirstnovel.ƒS.Progress.save();
                break;
            case myfirstnovel.ƒ.KEYBOARD_CODE.D:
                console.log("Load");
                await myfirstnovel.ƒS.Progress.load();
                break;
        }
    }
    ;
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: myfirstnovel.Entrance, name: "Entrance" },
            { scene: myfirstnovel.Arrival03, name: "Arrival03" },
            { scene: myfirstnovel.Pool, name: "Pool", id: "good_01", next: "Entrance" },
            { scene: myfirstnovel.bad, name: "bad", id: "bad_01", next: "Arrival03" },
        ];
        myfirstnovel.ƒS.Progress.setData(myfirstnovel.dataForProgress);
        // start the sequence
        myfirstnovel.ƒS.Progress.go(scenes);
    }
})(myfirstnovel || (myfirstnovel = {}));
//# sourceMappingURL=MYFIRSTNOVEL.js.map