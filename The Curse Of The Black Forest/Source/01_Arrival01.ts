namespace blackforest {
    export async function Arrival01(): ƒS.SceneReturn {
      console.log("Arrival01");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);

      await ƒS.Location.show(locations.arrival01);
   //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "You've arrived at the forest that you have been called to. The atmosphere is eerie, no birds are singing...");
      // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
      
  
  
  
    
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }