namespace blackforest {
    export async function EndingBad(): ƒS.SceneReturn {
      console.log("EndingBad");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
    //Bad Ending
    await ƒS.Speech.tell(characters.moora, "Hold there, wanderer! I am afraid you’re too late.. I don’t know what took you so long, but there is nothing left for you to do here, leave this place!");
    await ƒS.Character.hide(characters.moora);
    ƒS.Speech.clear();
    await ƒS.Location.show(locations.black);
    await ƒS.update(3);
    await ƒS.Speech.tell(characters.Narrator, "In shock you stumble back into the woods behind you, how could this have happened? You realize that you have been way too careless and lost focus on your mission too easily, what a rookie mistake..");
    ƒS.Speech.clear();

    let replayButtonOptions = {
      replay: "Play again",
    }

    let replayButton = await ƒS.Menu.getInput(replayButtonOptions, "Replay");

    switch (replayButton) {
      case replayButtonOptions.replay:
        dataForProgress.Points.time = 0;
        return "Arrival";
    }
  
      
    }
  }