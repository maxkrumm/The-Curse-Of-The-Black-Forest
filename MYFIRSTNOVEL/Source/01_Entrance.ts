namespace myfirstnovel {
  export async function Entrance(): ƒS.SceneReturn {
    console.log("Entrance");

  /*  let text = {
      Narrator: {
        T0000: "",
        T0001: ""
      },
      Protagonist:{
        T0000:"",
        T0001: ""
      },
      Risa: {
        T0000: "Willkommen",
        T0001: ""
      }
    };   */

    ƒS.Speech.setTickerDelays(30, 2);

    await ƒS.Location.show(locations.entrance);
    ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);
    await ƒS.update(1);
    //await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);
    await ƒS.Speech.tell(characters.Narrator, "Today is your first day at your new job as a Swim Teacher at Ryukoku University!");
    
    await ƒS.update(1);
    ƒS.Speech.clear();



// Musik ausblenden ƒS.Sound.fade(sound.backgroundTheme, 0, 1);







    
  }
}