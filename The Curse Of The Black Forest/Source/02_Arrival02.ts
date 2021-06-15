namespace blackforest {
    export async function Arrival02(): ƒS.SceneReturn {
      console.log("Arrival02");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival02);
   //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.Narrator, "The sun is shining through the trees but it is still cold...");

      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }