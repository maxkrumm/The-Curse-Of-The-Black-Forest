namespace blackforest {
    export async function Arrival03(): ƒS.SceneReturn {
      console.log("Arrival03");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival03);
      //ƒS.Sound.fade(sound.mainTheme, 0.2, 0.1, true);
      await ƒS.Character.show (characters.warden, characters.warden.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      // await ƒS.Speech.tell (characters.warden, "");
      await ƒS.Speech.tell (characters.warden, "Greetings stranger, I am the Warden of the Eastern Gate, what is your name?");
      ƒS.Speech.clear();
      await ƒS.Speech.tell (characters.Narrator, "Enter your name: ");
      dataForProgress.Protagonist.name = await ƒS.Speech.getInput();
      console.log(dataForProgress.Protagonist.name);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.warden, "Ah, nice to finally meet you "+ dataForProgress.Protagonist.name +", I know why you are here, the forest has been awaiting your arrival. I assume you might have a lot of questions, you will have to wait a bit longer, I am not the one who can answer them.");
      await ƒS.Speech.tell (characters.warden, "Please go see the people at the quarry and talk to Quill, the Head of the Beahorns. He is already waiting there for you, he will tell you what to do next!");
      await ƒS.Speech.tell (characters.warden, "Thank you for coming, we really need your help here. Now go on and take care, just follow the river and you can't miss the quarry!");
      await ƒS.update(1);
      ƒS.Speech.clear();
      await ƒS.Character.hide(characters.warden);
      await ƒS.update(1);
      await ƒS.Speech.tell (characters.Narrator, "It is still early in the morning as you make your way towards the sound of water rushing in the distance..");
  
      
  
  
      ƒS.Speech.clear();
  
  
  
  // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
  
  
  
  
  
  
  
      
    }
  }