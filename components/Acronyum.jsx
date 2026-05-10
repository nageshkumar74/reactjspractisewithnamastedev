

import { useState } from "react";

function Acronym() {

  

    let text="national defence system";
    let usesplit=text.split(),acrynoum="";

    for(let i=0; i<usesplit.length;i++){
        for(let j=0; j<usesplit[i].length;j++){
         acrynoum=usesplit[j][0].toUpperCase();
        }
    }
    return acrynoum;
    // Implement acronym logic here
  }

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input type="text" placeholder="Enter a phrase..." />
        <button>Generate</button>
        <p>Result : </p>
      </div>
    </div>
  );
}
export default AcronymGenerator;