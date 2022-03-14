import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function  Wss() {
  //give an initial state so that the data won't be undefined at start
  const [bids, setBids] = useState([0]);

  useEffect(() => {
    const ws = new WebSocket("wss://production-esocket.delta.exchange");

  const apiCall = {
    "type": "subscribe",
    "payload": {
        "channels": [
            {
                "name": "v2/ticker",
                "symbols": [
                    "C-SOL-70-150322"
                ]
            }
        ]
    } 
  };

  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    try {        
        const result=event['records'];
        setBids(result.product_id);
        console.log(result.product_id);
      
    } catch (err) {
      console.log(err);
    }
  };  
  }, [setBids]); 

    

  return <div key={uuidv4()}>
    {bids.map((bids) => {
    return (
      <div key={uuidv4()}>
          <table>
              <tbody>
                  <tr>
        <td key={uuidv4()} >{bids.product_id}</td>
        </tr>
        </tbody>
        </table>
      </div>
    )
  } )
 }
  </div>
  
}

export default  Wss;