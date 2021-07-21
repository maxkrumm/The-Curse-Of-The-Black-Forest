namespace blackforest {
    export async function EndingGood(): ƒS.SceneReturn {
      console.log("Ending");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.endingGood);
      await ƒS.update(1);
  
  
  
  
  
  
  
      
    }
  }