namespace blackforest {
    export async function EndingSecret(): ƒS.SceneReturn {
      console.log("EndingSecret");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      //Ending Scene 1
      await ƒS.Location.show(locations.woods03);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "Walking is feeling a lot easier than before and stop paying attention to your steps. The path has dissolved into a mossy ground beneath your feet and you feel like you’re walking on clouds, dreaming away..");
      await ƒS.Location.show(locations.black);
      await ƒS.update(transition.blur.duration, transition.blur.alpha, transition.blur.edge);
      await ƒS.Speech.tell(characters.Narrator, "Suddenly you hear a rustling noise behind you!");
      ƒS.Speech.clear();
      ƒS.Sound.play(sound.endingSecret, 1);
      await ƒS.Location.show(locations.white);
      await ƒS.update(0);
      await ƒS.Location.show(locations.black);
      ƒS.Sound.fade(sound.woodsLoop, 0, 4);
      await ƒS.update(4);
      
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