"use strict";
var blackforest;
(function (blackforest) {
    async function Arrival() {
        console.log("Arrival");
        let animation = {
            start: { translation: blackforest.ƒS.positions.bottomright },
            end: { translation: blackforest.ƒS.positions.bottomleft },
            duration: 1,
            playmode: blackforest.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Blackscreen
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "<em>“Hello wanderer, thank you for your time. This is of utmost importance, you have to bring this medicine to the black forest in the south immediately! Head there as fast as your feet will carry you, your troubles shall not be in vein. Travel safely, friend...”</em>");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.update(2);
        //Scene 1
        blackforest.ƒS.Sound.fade(blackforest.sound.arrivalLoop, 0.2, 0.1, true);
        await blackforest.ƒS.Location.show(blackforest.locations.arrival01);
        await blackforest.ƒS.update(blackforest.transition.blur.duration, blackforest.transition.blur.alpha, blackforest.transition.blur.edge);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Walking, walking, walking... The last couple of days have been quite a journey. Although nothing special has really happened on the way, you're glad you have finally arrived here at the black forest.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Black forest.. what a scary name. Something is really off about this place, an eeriness that makes you feel uncomfortable. You realize there are no birds singing at all, what is going on here?");
        blackforest.ƒS.Speech.clear();
        //Scene 2
        await blackforest.ƒS.Location.show(blackforest.locations.arrival02);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "The sun is shining through the trees, casting shadows on the ground that is still coated in dew.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Now that you think about it, the guy who told you to go here back in Grayrock didn't look like the most trustworthy creature in the world, a Kwelk after all.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Not a lot of information that he gave you either, just told you that they really needed a Wanderer to help them. You would not regret it, he said...");
        blackforest.ƒS.Speech.clear();
        //Blackscreen
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You're following a narrow path along some old firs. Suddenly a silhouette steps out from behind a thick tree and stands in your way..");
        blackforest.ƒS.Speech.clear();
        //Scene 3
        await blackforest.ƒS.Location.show(blackforest.locations.arrival03);
        await blackforest.ƒS.Character.animate(blackforest.characters.warden, blackforest.characters.warden.pose.normal, animation);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Greetings stranger, I am the Warden of the Eastern Gate, what is your name?");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Enter your name: ");
        blackforest.dataForProgress.Protagonist.name = await blackforest.ƒS.Speech.getInput();
        console.log(blackforest.dataForProgress.Protagonist.name);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Ah, nice to finally meet you " + blackforest.dataForProgress.Protagonist.name + ", I know why you are here, the forest has been awaiting your arrival. I assume you might have a lot of questions, you will have to wait a bit longer, I am not the one who can answer them.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Please go see the people at the quarry and talk to Quill, the Head of the Beahorns. He is already waiting there for you, he will tell you what to do next!");
        await blackforest.ƒS.Speech.tell(blackforest.characters.warden, "Thank you for coming, we really need your help here. Now go on and take care, just follow the river and you can't miss the quarry!");
        await blackforest.ƒS.update(1);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.warden);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "It is still early in the morning as you make your way towards the sound of water rushing in the distance..");
        blackforest.ƒS.Speech.clear();
        //Scene 4
        await blackforest.ƒS.Location.show(blackforest.locations.arrival04);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "In this light the forest does not look scary at all anymore, if only it wasn't for the silence, only the wind blowing through the trees and the river rushing in the background.. Other than that, no sign of life. This has to be the reason they called you here..");
        blackforest.ƒS.Speech.clear();
        //Scene 5
        await blackforest.ƒS.Location.show(blackforest.locations.arrival05);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After another couple of minutes you reach a stream that has carved its way through the thicket between the trunks. This must be the river the warden was talking about.");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.show(blackforest.overlays.monk, blackforest.overlays.monk.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "To your left you see a narrow bridge and on it you see a creature holding a walking stick, trying to keep its balance. He looks a bit clumsy with his long robe, but manages to cross the river with surprising confidence. As soon as he notices you he comes up and starts talking.");
        await blackforest.ƒS.Character.hide(blackforest.overlays.monk);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.show(blackforest.characters.monk, blackforest.characters.monk.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "Hey, hey.. Uh, that was really close, I almost fell off that bridge. Good thing I have always got my stick with me, that thing saved my life quiet a few times!                 ... I have never seen you here before.. you look different, you're not from here. Hmm, you must be the Wanderer they called!");
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "My name is Yareem, delighted to meet you. I live in this forest, wandering around, always looking for adventure. We do rarely see Wanderers walk our paths, so excuse me for talking a lot. The forest is in bad condition.. the birds.. what is a forest without their beautiful voices. But you're here to save us, finally!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.monk);
        await blackforest.ƒS.Character.show(blackforest.characters.monk, blackforest.characters.monk.pose.pointing, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "Look there!");
        await blackforest.ƒS.Character.hide(blackforest.characters.monk);
        //Scene 6
        await blackforest.ƒS.Location.show(blackforest.locations.arrival06);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "These are Beahorns, water folks, they are really good at hiding if they don't want to be seen. Watch the dark spots!");
        await blackforest.ƒS.Character.show(blackforest.overlays.eyes, blackforest.overlays.eyes.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "They live between the roots of the trees along the river banks, collecting valuable resources and distributing them over the whole forest using boats. Without them, this place would not be the same... Really nice creatures, reliable and trustworthy, but not naive!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.overlays.eyes);
        //Back To Scene 5
        await blackforest.ƒS.Location.show(blackforest.locations.arrival05);
        await blackforest.ƒS.Character.show(blackforest.characters.monk, blackforest.characters.monk.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "You're already on your way to the quarry I reckon, they will definitely be able to support you! It is not far from here, just cross the river and follow the path.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.monk, "Farewell and best of luck on your journey, friend!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.hide(blackforest.characters.monk);
        await blackforest.ƒS.update(1);
        //Blackscreen
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After you watched Yareem make his way into the forest you carefully cross the bridge over the river and look for the path he was talking about.");
        blackforest.ƒS.Speech.clear();
        //Scene 7
        await blackforest.ƒS.Location.show(blackforest.locations.arrival07);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "The forest is getting denser again but can clearly make out the path along some dead trees. This place is very different from everywhere you have been before, the mystical aura that surrounds everything here has completely caught you. You feel motivated and excited to find out what adventures may lie ahead.");
        blackforest.ƒS.Speech.clear();
        //Scene 8
        await blackforest.ƒS.Location.show(blackforest.locations.arrival08);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After some time you reach the impressive scenery of a waterfall. What a beautiful, calming place. You think about taking a rest..");
        blackforest.ƒS.Speech.clear();
        let decisionRestAnswers = {
            rest: "Take a break and rest",
            continue: "Continue walking"
        };
        let decisionRest = await blackforest.ƒS.Menu.getInput(decisionRestAnswers, "Decisions");
        switch (decisionRest) {
            case decisionRestAnswers.rest:
                blackforest.dataForProgress.Points.time += 10;
                //Blackscreen
                await blackforest.ƒS.Location.show(blackforest.locations.black);
                await blackforest.ƒS.update(1);
                await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You sit down, take of your shoes and cool you sore feet in the ice cold river water. Refreshed and motivated you feel ready for the rest of your journey!");
                blackforest.ƒS.Speech.clear();
                break;
            case decisionRestAnswers.continue:
                break;
        }
        //Scene 9
        await blackforest.ƒS.Location.show(blackforest.locations.arrival09);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "To your left you see a bridge across the river made of some wood planks. The Quarry can’t be far from here..");
        blackforest.ƒS.Speech.clear();
        // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);
        // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
        // ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    }
    blackforest.Arrival = Arrival;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Quarry() {
        console.log("Quarry");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Blackscreen
        blackforest.ƒS.Sound.fade(blackforest.sound.arrivalLoop, 0, 3);
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "In the distance your hear the noise of pickaxes hitting on stone, this has to be it. You make your way around the next corner.");
        blackforest.ƒS.Speech.clear();
        //Scene 1
        blackforest.ƒS.Sound.fade(blackforest.sound.quarryLoop, 0.4, 0.1, true);
        await blackforest.ƒS.Location.show(blackforest.locations.quarry01);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Finally! In front of you you see the quarry, Beahorns working on the walls, mining stones and carrrying them away. The place is very busy and looks a bit chaotic at first glance, but as you watch the proceedings you recognize a very efficient system.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "One of the Beahorns that looks a bit differently suddenly notices you and comes up to you.");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.show(blackforest.characters.quill, blackforest.characters.quill.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "Welcome stranger, you must be the wanderer they sent! What is your name? ……..ah, " + blackforest.dataForProgress.Protagonist.name + " good to meet you. My Name is Quill, you could say I run this place but on the other hand I would be nothing without my workers. You have to know we are very hard working folks, not that I wanted to brag or anything but.. you know.. this forest wouldn’t be the same without us! Hahahahah!");
        await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "However, I know you are here for a reason and I’m just the right guy to help you out! Hahahah! ..to be honest, the situation here has been anything but funny lately. The guardian of the forest, you might not have heard about him, let me tell you.. He is the spirit of this forest, he keeps balance and watches over us all.");
        await blackforest.ƒS.Character.hide(blackforest.characters.quill);
        await blackforest.ƒS.Character.show(blackforest.characters.quill, blackforest.characters.quill.pose.angry, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "But things haven’t been the same since a couple of days, rumor has it he has become ill, some even say he was... ...cursed. Well I don’t know much about those magic things, but I know one thing for sure, this place has lost it’s lifeliness. We don’t feel safe anymore.");
        await blackforest.ƒS.Character.hide(blackforest.characters.quill);
        await blackforest.ƒS.Character.show(blackforest.characters.quill, blackforest.characters.quill.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "This is where you come in! I heard you carry some kind of medicine with you, let’s hope this will solve our problem! I think the best thing is if you head directly to the guardian of the forest and bring him the medicine. We can take one of our boats to get you there a lot faster or you can walk, however you prefer!");
        let decisionTravelAnswers = {
            boat: "Take the boat",
            walk: "Walk"
        };
        let decisionTravel = await blackforest.ƒS.Menu.getInput(decisionTravelAnswers, "Decisions");
        switch (decisionTravel) {
            case decisionTravelAnswers.boat:
                await blackforest.ƒS.Character.hide(blackforest.characters.quill);
                blackforest.ƒS.Speech.clear();
                await blackforest.ƒS.update(1);
                //Scene 2
                await blackforest.ƒS.Location.show(blackforest.locations.quarry02);
                await blackforest.ƒS.update(1);
                await blackforest.ƒS.Character.show(blackforest.characters.quill, blackforest.characters.quill.pose.normal, blackforest.ƒS.positions.bottomleft);
                await blackforest.ƒS.update(1);
                await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "This is the harbor, from here we deliver our resources into all the corners of the forest! Usually we don’t allow any passengers, but for you I will make an exception. I’ll get us a boat!");
                blackforest.ƒS.Speech.clear();
                await blackforest.ƒS.Character.hide(blackforest.characters.quill);
                await blackforest.ƒS.update(1);
                await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You follow Quill to the water and get with him into a small wooden boat.");
                blackforest.ƒS.Speech.clear();
                blackforest.ƒS.Sound.fade(blackforest.sound.quarryLoop, 0, 3);
                await blackforest.ƒS.update(1);
                return "River";
            case decisionTravelAnswers.walk:
                blackforest.dataForProgress.Points.time += 10;
                blackforest.ƒS.Speech.clear();
                await blackforest.ƒS.update(1);
                await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "Alright fine, whatever works best for you, you know what you are doing!");
                await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "It was great getting to meet you, you are the only hope we have got right now! To get to your destination just follow the path along the river until you get to the entrance of the woods, you won’t be able to miss it. Good luck my friend!");
                await blackforest.ƒS.Character.hide(blackforest.characters.quill);
                blackforest.ƒS.Speech.clear();
                await blackforest.ƒS.update(1);
                return "Journey";
        }
    }
    blackforest.Quarry = Quarry;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function River() {
        console.log("River");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Scene 1
        await blackforest.ƒS.Location.show(blackforest.locations.river01);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "It’s your first time riding a boat and you are really excited. The view is great and since the weather is great you lean back, close your eyes and let the sun that is shining through the trees warm your skin.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You’re listening to the sounds around you, the water below you and the soft breeze of wind above you. How beautiful this forest will be when the birds are singing again!");
        blackforest.ƒS.Speech.clear();
        //Scene 2
        await blackforest.ƒS.Location.show(blackforest.locations.river02);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After some time the water is getting a bit more rough and the boats starts to shake, you start to feel a bit ill and uncomfortable. ");
        blackforest.ƒS.Speech.clear();
        //Blackscreen
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Before it gets too bad you arrive at a small bay where Quill maneuvers the boat to the river bank and gets off. You follow him..");
        blackforest.ƒS.Speech.clear();
        //Scene 3
        await blackforest.ƒS.Location.show(blackforest.locations.river03);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Character.show(blackforest.characters.quill, blackforest.characters.quill.pose.normal, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "Alright, this is as far as I can take you, you’ll have to walk the rest on your own. A short way down the path behind you you will find the entrance to the mystical part of the woods where the guardian of the forest resides.");
        await blackforest.ƒS.Character.hide(blackforest.characters.quill);
        await blackforest.ƒS.Character.show(blackforest.characters.quill, blackforest.characters.quill.pose.laughing, blackforest.ƒS.positions.bottomleft);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.quill, "From there just walk without thinking, do not try to find what you’re looking for or you will never find it. If you free your mind your feet will find the way on their own.");
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "With these words Quill waves you a last goodbye and gets back to the boat. You turn around and face towards the road ahead of you.");
        await blackforest.ƒS.Character.hide(blackforest.characters.quill);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.update(1);
    }
    blackforest.River = River;
    ;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Journey() {
        console.log("Journey");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Scene 1
        await blackforest.ƒS.Location.show(blackforest.locations.journey01);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You leave the place over a massive bridge that is leading up onto a hill from where you get a nice view onto the quarry and the workings of the beahorns.");
        blackforest.ƒS.Speech.clear();
        //Scene 2
        await blackforest.ƒS.Location.show(blackforest.locations.journey02);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "The path stays high and leads along the river through the beautiful morning sun.");
        blackforest.ƒS.Speech.clear();
        //Scene 3
        await blackforest.ƒS.Location.show(blackforest.locations.journey03);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Along the way you come across a couple more interesting places like some huge collapsed trees and their roots springing up into the sky, still holding on the earth they ripped out of the ground with them.");
        blackforest.ƒS.Speech.clear();
        //Blackscreen
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After some time walking you arrive at the end of the road. This must be the entrance Quill was talking about..");
        blackforest.ƒS.Speech.clear();
    }
    blackforest.Journey = Journey;
    ;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function Woods() {
        console.log("Woods");
        let animation = {
            start: { translation: blackforest.ƒS.positions.bottomright },
            end: { translation: blackforest.ƒS.positions.bottomleft },
            duration: 1,
            playmode: blackforest.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Scene 1
        await blackforest.ƒS.Location.show(blackforest.locations.woods01);
        //check time value for debug
        console.log(blackforest.dataForProgress.Points.time);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "In front of you you see another, much more narrow path forging through an overgrown thicket and you’re barely able to make out where it leads. Without thinking about it too much you head on into the unknown.");
        blackforest.ƒS.Speech.clear();
        //Scene 2
        await blackforest.ƒS.Location.show(blackforest.locations.woods02);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "After a short while the overgrowth starts to thin out and as you slowly march up the hill in front of you, you start to feel a strong and calming aura around you.");
        blackforest.ƒS.Speech.clear();
        //Trigger Secret Ending
        if (blackforest.dataForProgress.Points.time == 10) {
            return "EndingSecret";
        }
        //Scene 3
        await blackforest.ƒS.Location.show(blackforest.locations.woods03);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Walking is feeling a lot easier than before and stop paying attention to your steps. The path has dissolved into a mossy ground beneath your feet and you feel like you’re walking on clouds, dreaming away..");
        blackforest.ƒS.Speech.clear();
        //Blackscreen
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(blackforest.transition.blur.duration, blackforest.transition.blur.alpha, blackforest.transition.blur.edge);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "You have lost track of how long you have been in this mesmerizing place.");
        blackforest.ƒS.Speech.clear();
        //Scene 4
        await blackforest.ƒS.Location.show(blackforest.locations.woods04);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Suddenly you step out of the woods onto a glade between the trees, the sun is shining down and as your eyes get used to the brightness, in front of you, you see it..");
        blackforest.ƒS.Speech.clear();
        //Scene 5
        await blackforest.ƒS.Location.show(blackforest.locations.woods05);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "There he is lying, the guardian of the forest. You immediately know that it is him, the aura has gotten really strong. As you take another step forward you notice something in the corner of your eye. A creature appears in front of you and stops in your way.");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Character.animate(blackforest.characters.moora, blackforest.characters.moora.pose.normal, animation);
        await blackforest.ƒS.update(1);
        if (blackforest.dataForProgress.Points.time == 0) {
            return "EndingGood";
        }
        else {
            return "EndingBad";
        }
    }
    blackforest.Woods = Woods;
    ;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function EndingSecret() {
        console.log("EndingSecret");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Ending Scene 1
        await blackforest.ƒS.Location.show(blackforest.locations.woods03);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Walking is feeling a lot easier than before and stop paying attention to your steps. The path has dissolved into a mossy ground beneath your feet and you feel like you’re walking on clouds, dreaming away..");
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(blackforest.transition.blur.duration, blackforest.transition.blur.alpha, blackforest.transition.blur.edge);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "Suddenly you hear a rustling noise behind you!");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Location.show(blackforest.locations.white);
        await blackforest.ƒS.update(0);
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(4);
        let replayButtonOptions = {
            replay: "Play again",
        };
        let replayButton = await blackforest.ƒS.Menu.getInput(replayButtonOptions, "Replay");
        switch (replayButton) {
            case replayButtonOptions.replay:
                return "Arrival";
        }
    }
    blackforest.EndingSecret = EndingSecret;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function EndingGood() {
        console.log("EndingGood");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Good Ending
        await blackforest.ƒS.Speech.tell(blackforest.characters.moora, "Hold there," + blackforest.dataForProgress.Protagonist.name + ". You cannot go any further from here. First I need to see the rune, show it to me, then I will tell you what will happen.");
        //Show Rune
        await blackforest.ƒS.Speech.tell(blackforest.characters.moora, "Thank you. My name is Moora. I am here to speak for the guardian of this forest, for he does not speak our language. I believe you have heard about the condition he is currently in, for this is the reason you are here. Do you have what was given to you with you?");
        //Show Medicine
        await blackforest.ƒS.Speech.tell(blackforest.characters.moora, "This is it! Thank you very much, you have saved us all.");
        await blackforest.ƒS.Character.hide(blackforest.characters.moora);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Location.show(blackforest.locations.endingGood);
        await blackforest.ƒS.update(1);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "What a journey this has been! You slowly walk back the way you came and enjoy the sun on your skin. Life has come back into the forest and the birds are singing in the trees again, what a beautiful day…");
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(3);
        let replayButtonOptions = {
            replay: "Play again",
        };
        let replayButton = await blackforest.ƒS.Menu.getInput(replayButtonOptions, "Replay");
        switch (replayButton) {
            case replayButtonOptions.replay:
                return "Arrival";
        }
    }
    blackforest.EndingGood = EndingGood;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    async function EndingBad() {
        console.log("EndingBad");
        blackforest.ƒS.Speech.setTickerDelays(30, 2);
        //Bad Ending
        await blackforest.ƒS.Speech.tell(blackforest.characters.moora, "Hold there, wanderer! I am afraid you’re too late.. I don’t know what took you so long, but there is nothing left for you to do here, leave this place!");
        await blackforest.ƒS.Character.hide(blackforest.characters.moora);
        blackforest.ƒS.Speech.clear();
        await blackforest.ƒS.Location.show(blackforest.locations.black);
        await blackforest.ƒS.update(3);
        await blackforest.ƒS.Speech.tell(blackforest.characters.Narrator, "In shock you stumble back into the woods behind you, how could this have happened? You realize that you have been way too careless and lost focus on your mission too easily, what a rookie mistake..");
        blackforest.ƒS.Speech.clear();
        let replayButtonOptions = {
            replay: "Play again",
        };
        let replayButton = await blackforest.ƒS.Menu.getInput(replayButtonOptions, "Replay");
        switch (replayButton) {
            case replayButtonOptions.replay:
                blackforest.dataForProgress.Points.time = 0;
                return "Arrival";
        }
    }
    blackforest.EndingBad = EndingBad;
})(blackforest || (blackforest = {}));
var blackforest;
(function (blackforest) {
    blackforest.ƒ = FudgeCore;
    blackforest.ƒS = FudgeStory;
    console.log("Loaded!");
    blackforest.transition = {
        blur: {
            duration: 2,
            alpha: "Images/Transitions/trans_blur.jpg",
            edge: 1
        }
    };
    //define sound
    blackforest.sound = {
        //Musik
        arrivalLoop: "Sound/Music/mus_arrival_loop.wav",
        quarryLoop: "Sound/Music/mus_quarry_loop.wav",
        travelLoop: "Sound/Music/mus_travel_loop.wav",
        woodsLoop: "Sound/Music/mus_woods_loop.wav",
        //Sounds
        forestLoop: "Sound/SFX/amb_forest_loop.wav",
        riverLoop: "Sound/SFX/amb_river_loop.wav",
        waterfallLoop: "Sound/SFX/amb_waterfall_loop.wav",
        birdsLoop: "Sound/SFX/amb_birds_loop.wav",
        endingGood: "Sound/SFX/sti_ending_good.wav",
        endingBad: "Sound/SFX/sti_ending_bad.wav",
        endingSecret: "Sound/SFX/sti_ending_secret.wav",
        glade: "Sound/SFX/sti_glade.wav"
    };
    blackforest.locations = {
        black: {
            name: "Black",
            background: "Images/Black.jpg"
        },
        white: {
            name: "White",
            background: "Images/White.jpg"
        },
        arrival01: {
            name: "Arrival01",
            background: "Images/Backgrounds/bg_arrival01.jpg"
        },
        arrival02: {
            name: "Arrival02",
            background: "Images/Backgrounds/bg_arrival02.jpg"
        },
        arrival03: {
            name: "Arrival03",
            background: "Images/Backgrounds/bg_arrival03.jpg"
        },
        arrival04: {
            name: "Arrival04",
            background: "Images/Backgrounds/bg_arrival04.jpg"
        },
        arrival05: {
            name: "Arrival05",
            background: "Images/Backgrounds/bg_arrival05.jpg"
        },
        arrival06: {
            name: "Arrival06",
            background: "Images/Backgrounds/bg_arrival06.jpg"
        },
        arrival07: {
            name: "Arrival07",
            background: "Images/Backgrounds/bg_arrival07.jpg"
        },
        arrival08: {
            name: "Arrival08",
            background: "Images/Backgrounds/bg_arrival08.jpg"
        },
        arrival09: {
            name: "Arrival09",
            background: "Images/Backgrounds/bg_arrival09.jpg"
        },
        quarry01: {
            name: "Quarry01",
            background: "Images/Backgrounds/bg_quarry01.jpg"
        },
        quarry02: {
            name: "Quarry02",
            background: "Images/Backgrounds/bg_quarry02.jpg"
        },
        river01: {
            name: "River01",
            background: "Images/Backgrounds/bg_river01.jpg"
        },
        river02: {
            name: "River02",
            background: "Images/Backgrounds/bg_river02.jpg"
        },
        river03: {
            name: "River03",
            background: "Images/Backgrounds/bg_river03.jpg"
        },
        journey01: {
            name: "Journey01",
            background: "Images/Backgrounds/bg_journey01.jpg"
        },
        journey02: {
            name: "Journey02",
            background: "Images/Backgrounds/bg_journey02.jpg"
        },
        journey03: {
            name: "Journey03",
            background: "Images/Backgrounds/bg_journey03.jpg"
        },
        woods01: {
            name: "Woods01",
            background: "Images/Backgrounds/bg_woods01.jpg"
        },
        woods02: {
            name: "Woods02",
            background: "Images/Backgrounds/bg_woods02.jpg"
        },
        woods03: {
            name: "Woods03",
            background: "Images/Backgrounds/bg_woods03.jpg"
        },
        woods04: {
            name: "Woods04",
            background: "Images/Backgrounds/bg_woods04.jpg"
        },
        woods05: {
            name: "Woods05",
            background: "Images/Backgrounds/bg_woods05.jpg"
        },
        endingGood: {
            name: "EndingGood",
            background: "Images/ending_good.jpg"
        },
    };
    blackforest.overlays = {
        monk: {
            name: "Monk",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Overlays/ol_monk.png",
            }
        },
        eyes: {
            name: "Eyes",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Overlays/ol_eyes.png",
            }
        },
    };
    //define characters
    blackforest.characters = {
        Narrator: {
            name: ""
        },
        warden: {
            name: "Warden:",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_warden.png",
            }
        },
        monk: {
            name: "Yareem:",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_monk_normal.png",
                pointing: "Images/Characters/ch_monk_pointing.png",
            }
        },
        quill: {
            name: "Quill:",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_quill_normal.png",
                laughing: "Images/Characters/ch_quill_laughing.png",
                angry: "Images/Characters/ch_quill_angry.png",
            }
        },
        moora: {
            name: "Moora:",
            origin: blackforest.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "Images/Characters/ch_moora.png",
            }
        },
    };
    let volume = 1.0;
    function incrementSound() {
        if (volume < 100) {
            volume += 0.1;
            blackforest.ƒS.Sound.setMasterVolume(volume);
        }
    }
    blackforest.incrementSound = incrementSound;
    function decrementSound() {
        if (volume > 0) {
            volume -= 0.1;
            blackforest.ƒS.Sound.setMasterVolume(volume);
        }
    }
    blackforest.decrementSound = decrementSound;
    /*let creditsOpen: boolean = false;
    
      async function credits(): Promise<void> {
        await ƒS.Text.print("These are the credits.")
      }*/
    let inGameMenu = {
        save: "Save",
        load: "Load",
        turnUpVolume: "Volume up",
        turnDownVolume: "Volume down",
        //  credits: "Credits",
    };
    let gameMenu;
    async function menuButtons(_option) {
        console.log(_option);
        if (_option == inGameMenu.save) {
            await blackforest.ƒS.Progress.save();
        }
        else if (_option == inGameMenu.load) {
            await blackforest.ƒS.Progress.load();
        }
        else if (_option == inGameMenu.turnUpVolume) {
            incrementSound();
        }
        else if (_option == inGameMenu.turnDownVolume) {
            decrementSound();
        }
        /*   else if (_option == inGameMenu.credits) {
             credits();
           }*/
    }
    ;
    // Variablen die für den Spielverlauf gespeichert werden sollen
    blackforest.dataForProgress = {
        Protagonist: {
            name: "Wanderer"
        },
        Points: {
            time: 0,
        },
        volume
    };
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = blackforest.ƒS.Menu.create(inGameMenu, menuButtons, "gameMenu");
        let scenes = [
            { scene: blackforest.Arrival, name: "Arrival", id: "Arrival" },
            { scene: blackforest.Quarry, name: "Quarry", id: "Quarry" },
            { scene: blackforest.River, name: "River", id: "River", next: "Woods" },
            { scene: blackforest.Journey, name: "journey", id: "Journey", next: "Woods" },
            { scene: blackforest.Woods, name: "Woods", id: "Woods" },
            { scene: blackforest.EndingGood, name: "EndingGood", id: "EndingGood" },
            { scene: blackforest.EndingBad, name: "EndingBad", id: "EndingBad" },
            { scene: blackforest.EndingSecret, name: "EndingSecret", id: "EndingSecret" },
        ];
        blackforest.ƒS.Progress.setData(blackforest.dataForProgress);
        // start the sequence
        blackforest.ƒS.Progress.go(scenes);
    }
    ;
})(blackforest || (blackforest = {}));
;
//# sourceMappingURL=THECURSEOFTHEBLACKFOREST.js.map