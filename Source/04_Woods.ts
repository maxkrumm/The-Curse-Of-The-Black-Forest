namespace blackforest {
    export async function Woods(): ƒS.SceneReturn {
        console.log("Woods");

        let animation: ƒS.AnimationDefinition = {
            start: { translation: ƒS.positions.bottomright},
            end: { translation: ƒS.positions.bottomleft},
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
          }

        ƒS.Speech.setTickerDelays(30, 2);

        //Scene 1
        ƒS.Sound.fade(sound.travelLoop, 0, 2);
        ƒS.Sound.fade(sound.riverLoop, 0, 0.5);
        await ƒS.Location.show(locations.woods01);
        //check time value for debug
        console.log(dataForProgress.Points.time);
        await ƒS.update(1);
        ƒS.Sound.fade(sound.woodsLoop, 0.5, 3, true);
        await ƒS.Speech.tell(characters.Narrator, "In front of you you see another, much more narrow path forging through an overgrown thicket and you’re barely able to make out where it leads. Without thinking about it too much you head on into the unknown.");
        ƒS.Speech.clear();

        //Scene 2
        await ƒS.Location.show(locations.woods02);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "After a short while the overgrowth starts to thin out and as you slowly march up the hill in front of you, you start to feel a strong and calming aura around you.");
        ƒS.Speech.clear();

        //Trigger Secret Ending
        if (dataForProgress.Points.time == 10){
            return "EndingSecret";
        }

        //Scene 3
        await ƒS.Location.show(locations.woods03);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "Walking is feeling a lot easier than before and stop paying attention to your steps. The path has dissolved into a mossy ground beneath your feet and you feel like you’re walking on clouds, dreaming away..");
        ƒS.Speech.clear();

        //Blackscreen
        await ƒS.Location.show(locations.black);
        await ƒS.update(transition.blur.duration, transition.blur.alpha, transition.blur.edge);
        await ƒS.Speech.tell(characters.Narrator, "You have lost track of how long you have been in this mesmerizing place.");
        ƒS.Speech.clear();

        //Scene 4
        await ƒS.Location.show(locations.woods04);
        await ƒS.update(1);
        ƒS.Sound.play(sound.glade, 1);
        await ƒS.Speech.tell(characters.Narrator, "Suddenly you step out of the woods onto a glade between the trees, the sun is shining down and as your eyes get used to the brightness, in front of you, you see it..");
        ƒS.Speech.clear();

        //Scene 5
        await ƒS.Location.show(locations.woods05);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "There he is lying, the guardian of the forest. You immediately know that it is him, the aura has gotten really strong. As you take another step forward you notice something in the corner of your eye. A creature appears in front of you and stops in your way.");
        ƒS.Speech.clear();
        await ƒS.Character.animate(characters.moora, characters.moora.pose.normal, animation);
        await ƒS.update(1);

        if (dataForProgress.Points.time == 0){
            return "EndingGood";
        }

        else{
            return "EndingBad";
        }


    };
}