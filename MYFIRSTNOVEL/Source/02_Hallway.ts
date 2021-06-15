namespace myfirstnovel {
  export async function Arrival03(): ƒS.SceneReturn {
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


   let animation: ƒS.AnimationDefinition = {
      start: { translation: ƒS.positions.bottomright /*, rotation: 360, scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("blue, 0") */},
      end: { translation: ƒS.positions.bottomleft /*, rotation: 360, scaling: new ƒS.Position(1, 1), color: ƒS.Color.CSS("red") */},
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }



    await ƒS.Location.show(locations.arrival03);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
    await ƒS.Character.animate(characters.warden, characters.warden.pose.normal, animation);
    await ƒS.update(1);
    //  await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);
    await ƒS.Speech.tell(characters.warden, "初めまして！水泳のチームのキャプテン、リサと申します！ようやく直接会えてとても嬉しいです！");
    await ƒS.Character.hide(characters.warden);
    await ƒS.Character.show(characters.warden, characters.warden.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.warden, "今日午後に最初のトレーニングもあるんですが、何か手伝うことがありませんか？", false);

    let firstDialogueElementAnswers = {
      iSayOk: "大丈夫です。",
      iSayYes: "はい！はい！はい！はい！",
      iSayNo: "自分のこと構え！"
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "Decisions");

    switch (firstDialogueElement) {
      case firstDialogueElementAnswers.iSayOk:
        //continue writing on this path here
        dataForProgress.Points.warden += 10;
        dataForProgress.Points.Sae += 10;
        console.log(dataForProgress.Points.warden);
        console.log(dataForProgress.Points.Sae);
        await ƒS.Speech.tell(characters.warden, "分かりました。よろしくお願いします！")
        await ƒS.update(1);
        ƒS.Character.hide(characters.warden);
        ƒS.Speech.clear();
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        return "good_01"
        break;
      case firstDialogueElementAnswers.iSayYes:
        dataForProgress.Points.warden += 50;
        console.log(dataForProgress.Points.warden);
        await ƒS.Speech.tell(characters.warden, "もちろんです！絶対ほかのメンバーにも伝えておきます！。よろしくお願いします！")
        await ƒS.update(1);
        ƒS.Character.hide(characters.warden);
        ƒS.Speech.clear();
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
        break;
      case firstDialogueElementAnswers.iSayNo:
        await ƒS.Character.hide(characters.warden);
        await ƒS.Character.show(characters.warden, characters.warden.pose.angry, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.warden, "言い方ひどいですよ！もういいです。");
        await ƒS.Character.hide(characters.warden);
        ƒS.Speech.clear();
        await ƒS.update(1);
        return "bad_01";
        break;
    };




  }
}