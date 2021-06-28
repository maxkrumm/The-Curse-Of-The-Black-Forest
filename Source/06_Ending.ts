namespace blackforest {
    export async function Ending(): ƒS.SceneReturn {
      console.log("Ending");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.ending);
      await ƒS.update(1);
  
  
  
  
  
  
  
      
    }
  }