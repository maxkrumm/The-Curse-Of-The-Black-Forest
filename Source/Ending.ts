namespace blackforest {
    export async function Ending(): ƒS.SceneReturn {
      console.log("Ending");
  
  
  
      ƒS.Speech.setTickerDelays(30, 2);
  
      await ƒS.Location.show(locations.black);
      
      var link = document.getElementById('speech');   
      link.style.visibility = 'hidden';
  
      await ƒS.update(1);
  
  
  
  
  
  
  
      
    }
  }