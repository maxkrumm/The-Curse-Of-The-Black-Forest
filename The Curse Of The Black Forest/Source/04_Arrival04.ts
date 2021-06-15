namespace blackforest {
    export async function Arrival04(): ƒS.SceneReturn {
      console.log("Arrival04");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival04);
   //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "Reflect about what MC knows about why he was called to this forest. Maybe it has something to do with the silence?");
      // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
      
  
  
  
    
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }