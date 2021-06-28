namespace blackforest {
    export async function Arrival05(): ƒS.SceneReturn {
      console.log("Arrival05");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival05);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "This must be the river, the warden was speaking of.");
      ƒS.Speech.clear();
      await ƒS.Character.show(overlays.monk, overlays.monk.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "Someone is slowly coming towards you over the bridge.");
      await ƒS.Speech.tell(characters.Narrator, "He looks a bit clumsy with his long robe, but manages to cross the river with surprising confidence. When he notices you he comes up to you and starts talking to you.");
      await ƒS.Character.hide(overlays.monk);
      ƒS.Speech.clear();
      await ƒS.Character.show(characters.monk, characters.monk.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "Hi my name is Jeff. I am wandering through this forest, always looking for adventure.");
      await ƒS.Speech.tell(characters.monk, "introduces himself and talks a bit about the situation in the forest without giving too much away");
      ƒS.Speech.clear();
      await ƒS.Character.hide(characters.monk);
      await ƒS.Character.show(characters.monk, characters.monk.pose.pointing, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "Look over there!");

      await ƒS.Character.hide(characters.monk);
      await ƒS.Location.show(locations.arrival055);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "The Quabbels live under the trees between the roots on the river banks. They are collecting resources and transport them to all the areas in the forest.");
      await ƒS.Character.show(overlays.eyes, overlays.eyes.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "JAJAJAJAJJAJAJAJAJAJAJAJA");
      
      await ƒS.Character.hide(overlays.eyes);
      await ƒS.Location.show(locations.arrival05);
      await ƒS.Character.show(characters.monk, characters.monk.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "Hi my name is Jeff. I am wandering through this forest, always looking for adventure.");
      await ƒS.Speech.tell(characters.monk, "They are friendly folks, you will like them! The quarry is not far from here, across this bridge and follow the path!");
      await ƒS.Speech.tell(characters.monk, "Farewell and best of luck on your Journey!");
      ƒS.Speech.clear();
      await ƒS.Character.hide(characters.monk);
      await ƒS.update(1);

  
  
  
  
  
  
  
      
    }
  }