namespace blackforest {
    export async function Arrival04(): ƒS.SceneReturn {
      console.log("Arrival04");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival04);
   //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "In this light the forest does not look scary at all anymore, if only it wasn't for the silence, only the wind blowing through the trees and the river rushing in the background.. Other than that, no sign of life. This has to be the reason they called you here..");
      // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
      
  
  
  
    
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }