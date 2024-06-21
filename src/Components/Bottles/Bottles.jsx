import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(() => {
        fetch('Bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    } ,[])
    return (
        <div >
            <h1>LAST UPDATE: 21/06/2024</h1>
            <h1>An incomplete project. <span className="Inshallah">Inshallah </span>One day I will updated it</h1>
            {/* <h2>load hoise vaiii</h2> */}
            {/* <h2>{bottles.length} Bottle here</h2> */}

            <div className="Container">
                {
                    bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;