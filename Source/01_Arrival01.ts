namespace blackforest {
    export async function Arrival01(): ƒS.SceneReturn {
      console.log("Arrival01");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);

      await ƒS.Location.show(locations.arrival01);
   //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "Walking, walking, walking... The last couple of days have been quite a journey. Although nothing special has really happened on the way, you're glad you have finally arrived here at the black forest.");
      await ƒS.Speech.tell(characters.Narrator, "Black forest.. what a scary name. Something is really off about this place, an eeriness that makes you feel uncomfortable. You realize there are no birds singing at all, what is going on here?");

      // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
      
  
  
  
    
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }