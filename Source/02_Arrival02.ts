namespace blackforest {
  export async function Arrival02(): ƒS.SceneReturn {
    console.log("Arrival02");



    ƒS.Speech.setTickerDelays(30, 2);

    await ƒS.Location.show(locations.arrival02);
    //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "The sun is shining through the trees, casting shadows on the ground that is still coated in dew.");
    await ƒS.Speech.tell(characters.Narrator, "Now that you think about it, the guy who told you to come here back in Grayrock didn't look like the most trustworthy person in the world, a Kwelk after all.");
    await ƒS.Speech.tell(characters.Narrator, "Not a lot of information that he gave you either, just told you that they really needed a Wanderer to help them. You would not regret it, he said...");
    ƒS.Speech.clear();
    await ƒS.Location.show(locations.black);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "You're following a narrow path along some old firs. Suddenly a silhouette steps out from behind a thick tree and stands in your way..");

    ƒS.Speech.clear();



    // Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);


  }
}