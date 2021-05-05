namespace myfirstnovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStoryyyyyyyyyyyyyyy");

  //define transition
  export let transition = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  };


  //define sound
  export let sound = {
    //Musik
    backgroundTheme: "",
    //Sound
    click: ""
  };

  export let locations = {
    inferno: {
      name: "Inferno",
      background: "../Images/Backgrounds/inferno.png"
    }
  };

  //define characters
  export let characters = {
    Narrator: {
      name: ""
    },
    Protagonist: {
      name: "James"
    },
    Risa: {
      name: "Risa",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "../Images/Characters/risa_normal.png",
        smile: "",
        sad: ""
      }
    }

  };



  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.S:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.D:
        console.log("Load");
        await ƒS.Progress.load();
        break;
    }

  };






  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Hallway, name: "Hallway" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}