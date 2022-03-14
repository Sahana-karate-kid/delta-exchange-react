import React, { useEffect, useState } from 'react';
import './Style.css';
import axios from '../axios';
import { v4 as uuidv4 } from "uuid";


function Row({ fetchUrl }) {
  const [char, setChar] = useState([]); 
   

  useEffect(() => {
    async function fetchData(){
     const request = await axios.get(fetchUrl);
     setChar(request.data.result);
     console.log(request.data.result);
     return request;
    } fetchData();    
  }, [setChar]); 

    return (
        <div className="row" >
            <table className='table'  key={uuidv4()}>
                  <thead><tr className='table__align'>
                    <th className='table__head'>Symbol</th>  
                    <th className='table__head'>Description</th>
                    <th className='table__head'>Underlying Asset</th>
                    <th className='table__head'>Mark Price</th>
                  </tr> 
                  </thead>
                  <tbody>
                {char.map(char =>(
                   <tr className='table__align'>                               
                  <td className='table__data' key={uuidv4()}>
                  {char.symbol} </td>
                  <td className='table__data' key={uuidv4()}>
                  {char.description}</td>
                  <td className='table__data' key={uuidv4()}>
                  {char.underlying_asset.symbol} </td>                                    
                  </tr>       
              ))} </tbody>
              
            </table>
            
        </div>
    )
}

export default Row;