namespace myfirstnovel {
  export async function Hallway(): ƒS.SceneReturn {
    console.log("Hallway");

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



    await ƒS.Location.show(locations.hallway);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
    await ƒS.Character.show(characters.Risa, characters.Risa.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    //  await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);
    await ƒS.Speech.tell(characters.Risa, "初めまして！水泳のチームのキャプテン、リサと申します！ようやく直接会えてとても嬉しいです！");
    await ƒS.Character.hide(characters.Risa);
    await ƒS.Character.show(characters.Risa, characters.Risa.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Risa, "今日午後に最初のトレーニングもあるんですが、何か手伝うことがありませんか？", false);

    let firstDialogueElementAnswers = {
      iSayOk: "大丈夫です。",
      iSayYes: "はい！はい！はい！はい！",
      iSayNo: "自分のこと構え！"
    };

    let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "Decisions");

    switch (firstDialogueElement) {
      case firstDialogueElementAnswers.iSayOk:
        //continue writing on this path here
        dataForProgress.Points.Risa += 10;
        dataForProgress.Points.Sae += 10;
        console.log(dataForProgress.Points.Risa);
        console.log(dataForProgress.Points.Sae);
        await ƒS.Speech.tell(characters.Risa, "分かりました。よろしくお願いします！")
        await ƒS.update(1);
        ƒS.Character.hide(characters.Risa);
        ƒS.Speech.clear();
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        break;
      case firstDialogueElementAnswers.iSayYes:
        dataForProgress.Points.Risa += 50;
        console.log(dataForProgress.Points.Risa);
        await ƒS.Speech.tell(characters.Risa, "もちろんです！絶対ほかのメンバーにも伝えておきます！。よろしくお願いします！")
        await ƒS.update(1);
        ƒS.Character.hide(characters.Risa);
        ƒS.Speech.clear();
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
        break;
      case firstDialogueElementAnswers.iSayNo:
        await ƒS.Character.hide(characters.Risa);
        await ƒS.Character.show(characters.Risa, characters.Risa.pose.angry, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Risa, "言い方ひどいですよ！もういいです。");
        await ƒS.Character.hide(characters.Risa);
        ƒS.Speech.clear();
        await ƒS.update(1);
        break;
    };




  }
}