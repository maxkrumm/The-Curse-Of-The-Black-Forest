namespace myfirstnovel {
  export async function Hallway(): ƒS.SceneReturn {
    console.log("Hallway");

    let text = {
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
    };



    await ƒS.Location.show(locations.inferno);
    await ƒS.Character.show(characters.Risa, characters.Risa.pose.normal, ƒS.positions.bottomright);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);
    await ƒS.Speech.tell(characters.Risa, "hey <3");

    await ƒS.update(1);








    
  }
}