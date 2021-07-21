namespace blackforest {
    export async function Woods(): ƒS.SceneReturn {
        console.log("Woods");



        ƒS.Speech.setTickerDelays(30, 2);

        //Scene 1
        await ƒS.Location.show(locations.woods01);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "In front of you you see a path forging through an overgrown thicket and you’re hardly able to make out where it leads. Without thinking about it too much you head on into the unknown.");
        ƒS.Speech.clear();

        //Scene 2
        await ƒS.Location.show(locations.woods02);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "After a short while the overgrowth starts to thin out and as you slowly march up the hill in front of you, you start to feel a strong and calming aura around you.");
        ƒS.Speech.clear();

        //Scene 3
        await ƒS.Location.show(locations.woods03);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Walking is feeling a lot easier than before and stop paying attention to your steps. The path has dissolved into a mossy ground beneath your feet and you feel like you’re walking on clouds, dreaming away..");
        ƒS.Speech.clear();

        //Blackscreen
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "You have lost track of how long you have been in this mesmerizing place. Suddenly you step out of the woods onto a glade between the trees, the sun is shining down and as your eyes get used to the brightness, in front of you, you see it..");
        ƒS.Speech.clear();

        //Scene 4
        await ƒS.Location.show(locations.woods04);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "There he is lying, the guardian of the forest. You immediately know that it is him, the aura has gotten really strong. As you take another step forward you notice something in the corner of your eye. A creature appears in front of you and stops in your way.");
        ƒS.Speech.clear();
        await ƒS.Character.show(characters.quill, characters.quill.pose.laughing, ƒS.positions.bottomleft);
        await ƒS.update(1);


        //Good Ending
        await ƒS.Speech.tell(characters.quill, "Hold there," + dataForProgress.Protagonist.name +". You cannot go any further from here. First I need to see the rune, show it to me, then I will tell you what will happen.");
        //Show Rune
        await ƒS.Speech.tell(characters.Narrator, "“Thank you. My name is Moora. I am here to speak for the guardian of this forest, for he does not speak our language. I believe you have heard about the condition he is currently in, for this is the reason you are here. Do you have what was given to you with you?”");
        //Show Medicine
        await ƒS.Character.hide(characters.quill);
        ƒS.Speech.clear();
        await ƒS.update(1);


    };
}