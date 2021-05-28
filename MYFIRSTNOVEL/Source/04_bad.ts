namespace myfirstnovel {
  export async function bad(): ƒS.SceneReturn {
    console.log("bad");



    ƒS.Speech.setTickerDelays(30, 2);

    await ƒS.Location.show(locations.entrance);
 //   ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
    // Um Text direkt anzuzeigen  ƒS.Speech.set(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
    
    //Name Field
    dataForProgress.Protagonist.name = await ƒS.Speech.getInput();
    console.log(dataForProgress.Protagonist.name);




    await ƒS.update(1);
    ƒS.Speech.clear();



// Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);







    
  }
}