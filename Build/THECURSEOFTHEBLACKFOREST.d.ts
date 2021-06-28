declare namespace blackforest {
    function Arrival01(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Arrival02(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Arrival03(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Arrival04(): ƒS.SceneReturn;
}
declare namespace blackforest {
    function Arrival05(): ƒS.SceneReturn;
}
declare namespace blackforest {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        mainTheme: string;
        click: string;
    };
    let locations: {
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
        arrival055: {
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
    };
    let dataForProgress: {
        Protagonist: {
            name: string;
        };
        Points: {
            warden: number;
            Sae: number;
        };
    };
}
