namespace blackforest {
    export async function Journey(): ƒS.SceneReturn {
        console.log("Journey");



        ƒS.Speech.setTickerDelays(30, 2);

        //Scene 1
        ƒS.Sound.fade(sound.travelLoop, 0.5, 0.5, true);
        await ƒS.Location.show(locations.journey01);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "You leave the place over a massive bridge that is leading up onto a hill from where you get a nice view onto the quarry and the workings of the beahorns.");
        ƒS.Speech.clear();

        //Scene 2
        await ƒS.Location.show(locations.journey02);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "The path stays high and leads along the river through the beautiful morning sun.");
        ƒS.Speech.clear();

        //Scene 3
        await ƒS.Location.show(locations.journey03);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Along the way you come across a couple more interesting places like some huge collapsed trees and their roots springing up into the sky, still holding on the earth they ripped out of the ground with them.");
        ƒS.Speech.clear();

        //Blackscreen
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "After some time walking you arrive at the end of the road. This must be the entrance Quill was talking about..");
        ƒS.Speech.clear();


    };
}