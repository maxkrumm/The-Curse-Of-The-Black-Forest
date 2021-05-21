namespace myfirstnovel {
  export async function Pool(): ƒS.SceneReturn {
    console.log("Pool");


    let text = {
      Narrator: {
        T0000: "これを見ている人の中で日本語を読める人いるはずないから、何を書いても許されると思います！",
        T0001: ""
      },
      Protagonist: {
        T0000: "",
        T0001: ""
      },
      Sae: {
        T0000: "Willkommen",
        T0001: "Wenn das hier angezeigt wird, funktioniert auch das zweite Textsystem.",
        T0002: "Trotzdem erzähle ich weiter um die Verzögerung zu testen."
      }
    };


    let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
   // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);



    await ƒS.Location.show(locations.pool);
    await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge)
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0000, false, /*"CSSKlassePlatzhalterFürEigenesTextfeld"*/);
    ƒS.Speech.clear();
    await ƒS.Character.show(characters.Sae, characters.Sae.pose.normal, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Sae, text.Sae.T0000);

    // await ƒS.Speech.tell(characters.Sae, "");
    await ƒS.Character.hide(characters.Sae);
    await ƒS.Character.show(characters.Sae, characters.Sae.pose.smile, ƒS.positions.bottomleft);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.Sae, text.Sae.T0001);
    // await ƒS.Speech.tell(characters.Sae, "");
    await signalDelay2();
    await ƒS.Speech.tell(characters.Sae, text.Sae.T0002);

    await ƒS.update(1);
    await ƒS.Character.hide(characters.Sae);
    ƒS.Speech.clear();
    await ƒS.update(1);










  }
}