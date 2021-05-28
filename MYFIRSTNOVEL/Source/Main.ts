namespace myfirstnovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Loaded!");

  //define transition
  export let transition = {
    clock: {
      duration: 1,
      alpha: "Images/Transitions/circlewipe-cw.jpg",
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
    entrance: {
      name: "Entrance",
      background: "Images/Backgrounds/bg_entrance.jpg"
    },
    hallway: {
      name: "Hallway",
      background: "Images/Backgrounds/bg_hallway.jpg"
    },
    pool: {
      name: "Pool",
      background: "Images/Backgrounds/bg_pool.jpg"
    },
  };

  //define characters
  export let characters = {
    Narrator: {
      name: ""
    },
    Risa: {
      name: "リサ",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/ch_risa_normal.png",
        smile: "Images/Characters/ch_risa_smile.png",
        angry: "Images/Characters/ch_risa_angry.png"
      }
    },
    Sae: {
      name: "サエ",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/ch_sae_normal.png",
        smile: "Images/Characters/ch_sae_smile.png",
        angry: ""
      }
    }

  };


  // Variablen die für den Spielverlauf gespeichert werden sollen
  export let dataForProgress =
  {
    Protagonist: {
      name: "James"
    },
    Points: {
      Risa: 0,
      Sae: 0
    }
  }



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
      { scene: Entrance, name: "Entrance" },
      { scene: Hallway, name: "Hallway" },
      { scene: Pool, name: "Pool", id: "good_01", next: "Entrance"},
      { scene: bad, name: "bad", id: "bad_01", next: "Hallway"},
    ];

    ƒS.Progress.setData(dataForProgress);
    // start the sequence
    ƒS.Progress.go(scenes);
  }
}