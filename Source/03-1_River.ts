namespace blackforest {
    export async function River(): ƒS.SceneReturn {
        console.log("River");



        ƒS.Speech.setTickerDelays(30, 2);

        //Scene 1
        await ƒS.Location.show(locations.river01);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "It’s your first time riding a boat and you are really excited. The view is great and since the weather is great you lean back, close your eyes and let the sun that is shining through the trees warm your skin.");
        await ƒS.Speech.tell(characters.Narrator, "You’re listening to the sounds around you, the water below you and the soft breeze of wind above you. How beautiful this forest will be when the birds are singing again!");
        ƒS.Speech.clear();

        //Scene 2
        await ƒS.Location.show(locations.river02);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "After some time the water is getting a bit more rough and the boats starts to shake, you start to feel a bit ill and uncomfortable. ");
        ƒS.Speech.clear();

        //Blackscreen
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Before it gets too bad you arrive at a small bay where Quill maneuvers the boat to the river bank and gets off. You follow him..");
        ƒS.Speech.clear();

        //Scene 3
        await ƒS.Location.show(locations.river03);
        await ƒS.update(1);
        await ƒS.Character.show(characters.quill, characters.quill.pose.laughing, ƒS.positions.bottomleft);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.quill, "Alright, this is as far as I can take you, you’ll have to walk the rest on your own. A short way down the path behind you you will find the entrance to the mystical part of the woods where the guardian of the forest resides. From there just walk without thinking, do not try to find what you’re looking for or you will never find it. If you free your mind your feet will find the way on their own.");
        await ƒS.Speech.tell(characters.Narrator, "With these words Quill waves you a last goodbye and gets back to the boat. You turn around and face towards the road ahead of you.");
        await ƒS.Character.hide(characters.quill);
        ƒS.Speech.clear();
        await ƒS.update(1);
        
        
    };
}