declare namespace MYFIRSTNOVEL {
    function Hallway(): ƒS.SceneReturn;
}
declare namespace MYFIRSTNOVEL {
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
        inferno: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Protagonist: {
            name: string;
        };
        Risa: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
                sad: string;
            };
        };
    };
}
