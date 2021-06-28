namespace blackforest {
    export async function Arrival05(): ƒS.SceneReturn {
      console.log("Arrival05");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.arrival05);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "After another couple of minutes you reach a stream that has carved its way through the thicket between the trunks. This must be the river the warden was talking about.");
      ƒS.Speech.clear();
      await ƒS.Character.show(overlays.monk, overlays.monk.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Narrator, "To your left you see a narrow bridge and on it you see a creature holding a walking stick, trying to keep its balance. He looks a bit clumsy with his long robe, but manages to cross the river with surprising confidence. As soon as he notices you he comes up and starts talking.");
      await ƒS.Character.hide(overlays.monk);
      ƒS.Speech.clear();
      await ƒS.Character.show(characters.monk, characters.monk.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "Hey, hey.. Uh, that was really close, I almost fell off that bridge. Good thing I have always got my stick with me, that thing saved my life quiet a few times!                 ... I have never seen you here before.. you look different, you're not from here. Hmm, you must be the Wanderer they called!");
      await ƒS.Speech.tell(characters.monk, "My name is Yareem, delighted to meet you. I live in this forest, wandering around, always looking for adventure. We do rarely see Wanderers walk our paths, so excuse me for talking a lot. The forest is in bad condition.. the birds.. what is a forest without their beautiful voices. But you're here to save us, finally!");
      ƒS.Speech.clear();
      await ƒS.Character.hide(characters.monk);
      await ƒS.Character.show(characters.monk, characters.monk.pose.pointing, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "Look there!");

      await ƒS.Character.hide(characters.monk);
      await ƒS.Location.show(locations.arrival055);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "These are Beahorns, water folks, they are really good at hiding if they don't want to be seen. Watch the dark spots!");
      await ƒS.Character.show(overlays.eyes, overlays.eyes.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "They live between the roots of the trees along the river banks, collecting valuable resources and distributing them over the whole forest using boats. Without them, this place would not be the same... Really nice creatures, reliable and trustworthy, but not naive!");
      ƒS.Speech.clear();
      await ƒS.Character.hide(overlays.eyes);
      await ƒS.Location.show(locations.arrival05);
      await ƒS.Character.show(characters.monk, characters.monk.pose.normal, ƒS.positions.bottomleft);
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.monk, "You're already on your way to the quarry I reckon, they will definitely be able to support you! It is not far from here, just cross the river and follow the path.");
      await ƒS.Speech.tell(characters.monk, "Farewell and best of luck on your journey, friend!");
      ƒS.Speech.clear();
      await ƒS.Character.hide(characters.monk);
      await ƒS.update(1);

  
  
  
  
  
  
  
      
    }
  }