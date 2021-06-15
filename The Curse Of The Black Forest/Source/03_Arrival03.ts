namespace blackforest {
    export async function Arrival03(): ƒS.SceneReturn {
      console.log("Arrival03");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival03);
      ƒS.Sound.fade(sound.mainTheme, 0.2, 0.1, true);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.Narrator, "After some time walking a silhouette approaches you..");
      await ƒS.update(1);
      ƒS.Speech.clear();
      await ƒS.Character.show (characters.warden, characters.warden.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.warden, "");
      await ƒS.Speech.tell (characters.warden, "Greetings stranger, what is your name?");
      dataForProgress.Protagonist.name = await ƒS.Speech.getInput();
      console.log(dataForProgress.Protagonist.name);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.warden, "Ah, nice to meet you ..., I know why you are here. Please go see the people at the quarry, Story Character 1 is already awaiting your arrival, he will tell you what to do!");
      await ƒS.Speech.tell (characters.warden, "Just follow the river and you can't miss the quarry.");
      await ƒS.update(1);
      ƒS.Speech.clear();
      await ƒS.Character.hide(characters.warden);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.Narrator, "It's still early in the morning...");
  
      
  
  
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }