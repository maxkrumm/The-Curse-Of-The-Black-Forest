namespace blackforest {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Loaded!");

  export let transition = {
    blur: {
      duration: 2,
      alpha: "Images/Transitions/trans_blur.jpg",
      edge: 1
    }
  };

  //define sound
  export let sound = {
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

  export let locations = {
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

  export let overlays = {
    monk: {
      name: "Monk",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Overlays/ol_monk.png",
      }
    },
    eyes: {
      name: "Eyes",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Overlays/ol_eyes.png",
      }
    },
  };

  //define characters
  export let characters = {
    Narrator: {
      name: ""
    },
    warden: {
      name: "Warden:",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/ch_warden.png",
      }
    },
    monk: {
      name: "Yareem:",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/ch_monk_normal.png",
        pointing: "Images/Characters/ch_monk_pointing.png",
      }
    },
    quill: {
      name: "Quill:",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/ch_quill_normal.png",
        laughing: "Images/Characters/ch_quill_laughing.png",
        angry: "Images/Characters/ch_quill_angry.png",
      }
    },
    moora: {
      name: "Moora:",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "Images/Characters/ch_moora.png",
      }
    },
  };

  let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume < 100) {
      volume += 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

  export function decrementSound(): void {
    if (volume > 0) {
      volume -= 0.1;
      ƒS.Sound.setMasterVolume(volume);
    }
  }

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

  let gameMenu: ƒS.Menu;

  async function menuButtons(_option: string): Promise<void> {
    console.log(_option);
    if (_option == inGameMenu.save) {
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenu.load) {
      await ƒS.Progress.load();
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
  };

  // Variablen die für den Spielverlauf gespeichert werden sollen
  export let dataForProgress =
  {
    Protagonist: {
      name: "Wanderer"
    },
    Points: {
      time: 0,
    },
    volume
  }

  window.addEventListener("load", start);

  function start(_event: Event): void {

    gameMenu = ƒS.Menu.create(inGameMenu, menuButtons, "gameMenu");

    let scenes: ƒS.Scenes = [
      { scene: Arrival, name: "Arrival", id: "Arrival" },
      { scene: Quarry, name: "Quarry", id: "Quarry"},
      { scene: River, name: "River", id: "River", next: "Woods"},
      { scene: Journey, name: "journey", id: "Journey", next: "Woods"},
      { scene: Woods, name: "Woods", id: "Woods" },
      { scene: EndingGood, name: "EndingGood", id: "EndingGood" },
      { scene: EndingBad, name: "EndingBad", id: "EndingBad" },
      { scene: EndingSecret, name: "EndingSecret", id: "EndingSecret" },
    ];

    ƒS.Progress.setData(dataForProgress);
    // start the sequence
    ƒS.Progress.go(scenes);
  };

};








