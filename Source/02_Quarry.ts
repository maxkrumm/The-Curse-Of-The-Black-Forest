namespace blackforest {
    export async function Quarry(): ƒS.SceneReturn {
        console.log("Quarry");



        ƒS.Speech.setTickerDelays(30, 2);

        //Blackscreen
        ƒS.Sound.fade(sound.arrivalLoop, 0, 3);
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "In the distance your hear the noise of pickaxes hitting on stone, this has to be it. You make your way around the next corner.");
        ƒS.Speech.clear();

        //Scene 1
        ƒS.Sound.fade(sound.quarryLoop, 0.4, 0.1, true);
        await ƒS.Location.show(locations.quarry01);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Finally! In front of you you see the quarry, Beahorns working on the walls, mining stones and carrrying them away. The place is very busy and looks a bit chaotic at first glance, but as you watch the proceedings you recognize a very efficient system.");
        await ƒS.Speech.tell(characters.Narrator, "One of the Beahorns that looks a bit differently suddenly notices you and comes up to you.");
        ƒS.Speech.clear();
        await ƒS.Character.show(characters.quill, characters.quill.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "Introducing himself.");
        await ƒS.Character.hide(characters.quill);
        await ƒS.Character.show(characters.quill, characters.quill.pose.angry, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "Telling you more about the situation forest and the mission.");
        await ƒS.Character.hide(characters.quill);
        await ƒS.Character.show(characters.quill, characters.quill.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "I think the best thing is if you head directly to the guardian of the forest and bring him the medicine. We can take one of our boats to get you there a lot faster, follow me to the harbor!");
        await ƒS.Character.hide(characters.quill);
        ƒS.Speech.clear();
        await ƒS.update(1);

        //Scene 2
        await ƒS.Location.show(locations.quarry02);
        await ƒS.update(1);
        await ƒS.Character.show(characters.quill, characters.quill.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "This is the harbor, from here we deliver our resources into all the corners of the forest! Usually we don’t allow any passengers, but for you I will make an exception. I’ll get us a boat!");
        ƒS.Speech.clear();
        await ƒS.Character.hide(characters.quill);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "You follow Quill to the water and get with him into a small wooden boat.");
        ƒS.Speech.clear();
        ƒS.Sound.fade(sound.quarryLoop, 0, 3);
        await ƒS.update(1);

        

    }
}