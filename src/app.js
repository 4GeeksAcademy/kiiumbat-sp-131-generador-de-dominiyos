import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronom = ["el" , "Ella" , "nosotros" , "vosotros"] 
  let adj = ["guapo" , "feo" , "tolerante" , "alegre"] 
  let sustantivo = ["cerdo" , "caserio" , "avion" , "boa"] 

for (let p of pronom){
  for (let a of adj){
    for (let s of sustantivo){
      console.log (p+a+s+".com")
    }
  }
}
};
