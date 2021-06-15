declare namespace myfirstnovel {
    function Entrance(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Arrival03(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Pool(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function bad(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
    function Animation(): ƒS.SceneReturn;
}
declare namespace myfirstnovel {
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
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        entrance: {
            name: string;
            background: string;
        };
        arrival03: {
            name: string;
            background: string;
        };
        pool: {
            name: string;
            background: string;
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
                smile: string;
                angry: string;
            };
        };
        Sae: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                angry: string;
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
