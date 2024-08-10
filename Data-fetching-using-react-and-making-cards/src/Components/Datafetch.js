import React, { useState, useEffect } from 'react';
import './Datafetch.css'

     function Datafetch() {

        const [card, setCard] = useState(0);

        let data;

       


        
        useEffect(() => {
            async function fetchData(){

                let result = await fetch("https://makemytrip-backend-w2d2.onrender.com/cities");
                let data = await result.json();
                console.log(data);
                setCard(data);
                }
            fetchData();
    },[])
    
    return (
    <div className="Abc">
        {card && card.map((dat)=>(
            <div id="Card-container">
            <img src={dat.image} alt=" "></img>
            <h3>{dat.city}</h3>
            <p>{dat.description}</p>
            </div>
            ))}
        </div>
  );
}


export default Datafetch;