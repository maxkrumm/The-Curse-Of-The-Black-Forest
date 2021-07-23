declare namespace blackforest {
    function Arrival(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Quarry(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function River(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Journey(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Woods(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function EndingSecret(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function EndingGood(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function EndingBad(): ƒS.SceneReturn;
}
declare namespace blackforest {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        blur: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        arrivalLoop: string;
        quarryLoop: string;
    };
    let locations: {
        black: {
            name: string;
            background: string;
        };
        white: {
            name: string;
            background: string;
        };
        arrival01: {
            name: string;
            background: string;
        };
        arrival02: {
            name: string;
            background: string;
        };
        arrival03: {
            name: string;
            background: string;
        };
        arrival04: {
            name: string;
            background: string;
        };
        arrival05: {
            name: string;
            background: string;
        };
        arrival06: {
            name: string;
            background: string;
        };
        arrival07: {
            name: string;
            background: string;
        };
        arrival08: {
            name: string;
            background: string;
        };
        arrival09: {
            name: string;
            background: string;
        };
        quarry01: {
            name: string;
            background: string;
        };
        quarry02: {
            name: string;
            background: string;
        };
        river01: {
            name: string;
            background: string;
        };
        river02: {
            name: string;
            background: string;
        };
        river03: {
            name: string;
            background: string;
        };
        journey01: {
            name: string;
            background: string;
        };
        journey02: {
            name: string;
            background: string;
        };
        journey03: {
            name: string;
            background: string;
        };
        woods01: {
            name: string;
            background: string;
        };
        woods02: {
            name: string;
            background: string;
        };
        woods03: {
            name: string;
            background: string;
        };
        woods04: {
            name: string;
            background: string;
        };
        woods05: {
            name: string;
            background: string;
        };
        endingGood: {
            name: string;
            background: string;
        };
    };
    let overlays: {
        monk: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        eyes: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        warden: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        monk: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                pointing: string;
            };
        };
        quill: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                laughing: string;
                angry: string;
            };
        };
        moora: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
    };
    function incrementSound(): void;
    function decrementSound(): void;
    let dataForProgress: {
        Protagonist: {
            name: string;
        };
        Points: {
            time: number;
        };
        volume: number;
    };
}
