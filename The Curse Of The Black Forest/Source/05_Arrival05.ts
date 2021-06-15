namespace blackforest {
    export async function Arrival05(): ƒS.SceneReturn {
      console.log("Arrival05");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival05);
   //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "This must be the river, the warden was speaking of.");
      // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
      
  
  
  
    
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }