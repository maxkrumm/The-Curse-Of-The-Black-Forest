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
        await ƒS.Speech.tell(characters.quill, "Welcome stranger, you must be the wanderer they sent! What is your name? ……..ah, " + dataForProgress.Protagonist.name + " good to meet you. My Name is Quill, you could say I run this place but on the other hand I would be nothing without my workers. You have to know we are very hard working folks, not that I wanted to brag or anything but.. you know.. this forest wouldn’t be the same without us! Hahahahah!");
        await ƒS.Speech.tell(characters.quill, "However, I know you are here for a reason and I’m just the right guy to help you out! Hahahah! ..to be honest, the situation here has been anything but funny lately. The guardian of the forest, you might not have heard about him, let me tell you.. He is the spirit of this forest, he keeps balance and watches over us all.");
        await ƒS.Character.hide(characters.quill);
        await ƒS.Character.show(characters.quill, characters.quill.pose.angry, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "But things haven’t been the same since a couple of days, rumor has it he has become ill, some even say he was... ...cursed. Well I don’t know much about those magic things, but I know one thing for sure, this place has lost it’s lifeliness. We don’t feel safe anymore.");
        await ƒS.Character.hide(characters.quill);
        await ƒS.Character.show(characters.quill, characters.quill.pose.normal, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "This is where you come in! I heard you carry some kind of medicine with you, let’s hope this will solve our problem! I think the best thing is if you head directly to the guardian of the forest and bring him the medicine. We can take one of our boats to get you there a lot faster or you can walk, however you prefer!");

        let decisionTravelAnswers = {
            boat: "Take the boat.",
            walk: "Walk."
        };

        let decisionTravel = await ƒS.Menu.getInput(decisionTravelAnswers, "Decisions");

        switch (decisionTravel) {
            case decisionTravelAnswers.boat:
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
                return "River";

            case decisionTravelAnswers.walk:
                dataForProgress.Points.time += 10;
                ƒS.Speech.clear();
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.quill, "Alright fine, whatever works best for you, you know what you are doing!");
                await ƒS.Speech.tell(characters.quill, "It was great getting to meet you, you are the only hope we have got right now! To get to your destination just follow the path along the river until you get to the entrance of the woods, you won’t be able to miss it. Good luck my friend!");
                await ƒS.Character.hide(characters.quill);
                ƒS.Speech.clear();
                await ƒS.update(1);
                return "Journey";
        }








    }
}