namespace blackforest {
  export async function Arrival(): ƒS.SceneReturn {
    console.log("Arrival");

    let animation: ƒS.AnimationDefinition = {
      start: { translation: ƒS.positions.bottomright},
      end: { translation: ƒS.positions.bottomleft},
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    }

    ƒS.Speech.setTickerDelays(30, 2);

    //Blackscreen
    await ƒS.Location.show(locations.black);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "<em>“Hello wanderer, thank you for your time. This is of utmost importance, you have to bring this medicine to the black forest in the south immediately! Head there as fast as your feet will carry you, your troubles shall not be in vein. Travel safely, friend...”</em>");
    ƒS.Speech.clear();
    await ƒS.update(2);

    //Scene 1
    ƒS.Sound.fade(sound.arrivalLoop, 1, 0.5, true);
    await ƒS.Location.show(locations.arrival01);
    await ƒS.update(transition.blur.duration, transition.blur.alpha, transition.blur.edge);
    await ƒS.Speech.tell(characters.Narrator, "Walking, walking, walking... The last couple of days have been quite a journey. Although nothing special has really happened on the way, you're glad you have finally arrived here at the black forest.");
    await ƒS.Speech.tell(characters.Narrator, "Black forest.. what a scary name. Something is really off about this place, an eeriness that makes you feel uncomfortable. You realize there are no birds singing at all, what is going on here?");
    ƒS.Speech.clear();

    //Scene 2
    await ƒS.Location.show(locations.arrival02);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "The sun is shining through the trees, casting shadows on the ground that is still coated in dew.");
    await ƒS.Speech.tell(characters.Narrator, "Now that you think about it, the guy who told you to go here back in Grayrock didn't look like the most trustworthy creature in the world, a Kwelk after all.");
    await ƒS.Speech.tell(characters.Narrator, "Not a lot of information that he gave you either, just told you that they really needed a Wanderer to help them. You would not regret it, he said...");
    ƒS.Speech.clear();

    //Blackscreen
    await ƒS.Location.show(locations.black);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "You're following a narrow path along some old firs. Suddenly a silhouette steps out from behind a thick tree and stands in your way..");
    ƒS.Speech.clear();

    //Scene 3
    await ƒS.Location.show(locations.arrival03);
    await ƒS.Character.animate(characters.warden, characters.warden.pose.normal, animation);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.warden, "Greetings stranger, I am the Warden of the Eastern Gate, what is your name?");
    ƒS.Speech.clear();
    await ƒS.Speech.tell(characters.Narrator, "Enter your name: ");
    dataForProgress.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForProgress.Protagonist.name);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.warden, "Ah, nice to finally meet you " + dataForProgress.Protagonist.name + ", I know why you are here, the forest has been awaiting your arrival. I assume you might have a lot of questions, you will have to wait a bit longer, I am not the one who can answer them.");
    await ƒS.Speech.tell(characters.warden, "Please go see the people at the quarry and talk to Quill, the Head of the Beahorns. He is already waiting there for you, he will tell you what to do next!");
    await ƒS.Speech.tell(characters.warden, "Thank you for coming, we really need your help here. Now go on and take care, just follow the river and you can't miss the quarry!");
    await ƒS.update(1);
    ƒS.Speech.clear();
    await ƒS.Character.hide(characters.warden);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "It is still early in the morning as you make your way towards the sound of water rushing in the distance..");
    ƒS.Speech.clear();

    //Scene 4
    await ƒS.Location.show(locations.arrival04);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "In this light the forest does not look scary at all anymore, if only it wasn't for the silence, only the wind blowing through the trees and the river rushing in the background.. Other than that, no sign of life. This has to be the reason they called you here..");
    ƒS.Speech.clear();

    //Scene 5
    await ƒS.Location.show(locations.arrival05);
    ƒS.Sound.fade(sound.riverLoop, 0.2, 0.5, true);
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

    //Scene 6
    await ƒS.Location.show(locations.arrival06);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.monk, "These are Beahorns, water folks, they are really good at hiding if they don't want to be seen. Watch the dark spots!");
    await ƒS.Character.show(overlays.eyes, overlays.eyes.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.monk, "They live between the roots of the trees along the river banks, collecting valuable resources and distributing them over the whole forest using boats. Without them, this place would not be the same... Really nice creatures, reliable and trustworthy, but not naive!");
    ƒS.Speech.clear();
    await ƒS.Character.hide(overlays.eyes);

    //Back To Scene 5
    await ƒS.Location.show(locations.arrival05);
    ƒS.Sound.fade(sound.riverLoop, 0.2, 0.5, true);
    await ƒS.Character.show(characters.monk, characters.monk.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.monk, "You're already on your way to the quarry I reckon, they will definitely be able to support you! It is not far from here, just cross the river and follow the path.");
    await ƒS.Speech.tell(characters.monk, "Farewell and best of luck on your journey, friend!");
    ƒS.Speech.clear();
    await ƒS.Character.hide(characters.monk);
    await ƒS.update(1);

    //Blackscreen
    await ƒS.Location.show(locations.black);
    ƒS.Sound.fade(sound.riverLoop, 0, 1);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "After you watched Yareem make his way into the forest you carefully cross the bridge over the river and look for the path he was talking about.");
    ƒS.Speech.clear();

    //Scene 7
    await ƒS.Location.show(locations.arrival07);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "The forest is getting denser again but can clearly make out the path along some dead trees. This place is very different from everywhere you have been before, the mystical aura that surrounds everything here has completely caught you. You feel motivated and excited to find out what adventures may lie ahead.");
    ƒS.Speech.clear();

    //Scene 8
    await ƒS.Location.show(locations.arrival08);
    ƒS.Sound.fade(sound.waterfallLoop, 0.4, 0.5, true);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "After some time you reach the impressive scenery of a waterfall. What a beautiful, calming place. You think about taking a rest..");
    ƒS.Speech.clear();

    let decisionRestAnswers = {
      rest: "Take a break and rest",
      continue: "Continue walking"
    };

    let decisionRest = await ƒS.Menu.getInput(decisionRestAnswers, "Decisions");

    switch (decisionRest) {
      case decisionRestAnswers.rest:
        dataForProgress.Points.time += 10;
        //Blackscreen
        await ƒS.Location.show(locations.black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "You sit down, take of your shoes and cool you sore feet in the ice cold river water. Refreshed and motivated you feel ready for the rest of your journey!");
        ƒS.Speech.clear();
        break;
      case decisionRestAnswers.continue:

        break;
    }

    //Scene 9
    await ƒS.Location.show(locations.arrival09);
    ƒS.Sound.fade(sound.waterfallLoop, 0.1, 0.5, true);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "To your left you see a bridge across the river made of some wood planks. The Quarry can’t be far from here..");
    ƒS.Speech.clear();







    // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
    // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
    // ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);






  }
}