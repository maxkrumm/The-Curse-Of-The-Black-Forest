namespace blackforest {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Loaded!");

  //define transition
  export let transition = {
    clock: {
      duration: 1,
      alpha: "",
      edge: 1
    }
  };


  //define sound
  export let sound = {
    //Musik
    mainTheme: "Sound/Music/vn_maintheme_loop.wav",
    //Sound
    click: ""
  };

  export let locations = {
    black: {
      name: "Black",
      background: "Images/Black.jpg"
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


    endingGood: {
      name: "EndingGood",
      background: "Images/Backgrounds/bg_ending_good.jpg"
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
};

/*let volume: number = 1.0;
 
export function incrementSound(): void {
 if (volume < 100) {
   volume += 0.1;
   ƒS.Sound.setVolume(sound.mainTheme, volume);
 }
}
 
export function decrementSound(): void {
 if (volume > 0) {
   volume -= 0.1;
   ƒS.Sound.setVolume(sound.mainTheme, volume);
 }
}
 
let inGameMenu = {
save: "Save",
load: "Load",
close: "Close",
turnUpVolume: "+",
turnDownVolume: "-",
credits: "Credits",
about: "About",
};
 
//create Menu with buttons
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
};     */


// Variablen die für den Spielverlauf gespeichert werden sollen
export let dataForProgress =
{
  Protagonist: {
    name: "Wanderer"
  },
  Points: {
    warden: 0,
    Sae: 0
  },
}


document.addEventListener("keydown", hndKeypress);
async function hndKeypress(_event: KeyboardEvent): Promise<void> {
  switch (_event.code) {
    /*case ƒ.KEYBOARD_CODE.S:
      console.log("Save");
      await ƒS.Progress.save();
      break;
    case ƒ.KEYBOARD_CODE.D:
      console.log("Load");
      await ƒS.Progress.load();
      break;*/
  }
}


window.addEventListener("load", start);

function start(_event: Event): void {

  /*gameMenu = ƒS.Menu.create(inGameMenu, menuButtons, "gameMenu");

  let uff = document.getElementsByClassName("gameMenu")[0];
  uff.setAttribute("id", "MenuID");*/



  let scenes: ƒS.Scenes = [
    { scene: Arrival, name: "Arrival" },
    { scene: Quarry, name: "Quarry" },
    { scene: River, name: "River" },
    { scene: Woods, name: "Woods" },
    { scene: EndingGood, name: "Ending" },
  ];

  ƒS.Progress.setData(dataForProgress);
  // start the sequence
  ƒS.Progress.go(scenes);
};

};








