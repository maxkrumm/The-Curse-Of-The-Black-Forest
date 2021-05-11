namespace myfirstnovel {
  export async function Pool(): ƒS.SceneReturn {
    console.log("Pool");

    /*   let text = {
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
       }; */



    await ƒS.Location.show(locations.pool);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
    await ƒS.Character.show(characters.Sae, characters.Sae.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    //  await ƒS.Speech.tell(characters.Risa, text.Risa.T0000);

    await ƒS.Speech.tell(characters.Sae, "MC LP ist der geilste!");
    await ƒS.Character.hide(characters.Sae);
    await ƒS.Character.show(characters.Sae, characters.Sae.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Sae, "Ich liebe ihn so sehr. <3");

    await ƒS.update(1);
    await ƒS.Character.hide(characters.Sae);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)









  }
}