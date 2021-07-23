namespace blackforest {
  export async function EndingGood(): ƒS.SceneReturn {
    console.log("EndingGood");



    ƒS.Speech.setTickerDelays(30, 2);

    //Good Ending
    await ƒS.Speech.tell(characters.moora, "Hold there," + dataForProgress.Protagonist.name + ". You cannot go any further from here. First I need to see the rune, show it to me, then I will tell you what will happen.");
    //Show Rune
    await ƒS.Speech.tell(characters.moora, "Thank you. My name is Moora. I am here to speak for the guardian of this forest, for he does not speak our language. I believe you have heard about the condition he is currently in, for this is the reason you are here. Do you have what was given to you with you?");
    //Show Medicine
    await ƒS.Speech.tell(characters.moora, "This is it! Thank you very much, you have saved us all.");
    await ƒS.Character.hide(characters.moora);
    ƒS.Speech.clear();
    await ƒS.update(1);

    await ƒS.Location.show(locations.endingGood);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "What a journey this has been! You slowly walk back the way you came and enjoy the sun on your skin. Life has come back into the forest and the birds are singing in the trees again, what a beautiful day…");
    ƒS.Speech.clear();

    await ƒS.Location.show(locations.black);
    await ƒS.update(3);

    let replayButtonOptions = {
      replay: "Play again",
    }

    let replayButton = await ƒS.Menu.getInput(replayButtonOptions, "Replay");

    switch (replayButton) {
      case replayButtonOptions.replay:
        return "Arrival";
    }






  }
}