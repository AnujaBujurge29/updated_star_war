import { useState, useEffect } from "react";
import getStarShips from "../services/starWar";

export default function GetAllStarships() {
  const [starShips, setStarShips] = useState([]);
  const getData = async () => {
    let data = await getStarShips();
    setStarShips(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const showStarShips = () => {
    return starShips.map((item, index) => (
      <div className="star-ship" key={index}>
        <h2>{item.name}</h2>
        <div>
            <p><span>Manufacturer:</span> {item.manufacturer}</p>
          <p><span>Model: </span>{item.model}</p>
          <p><span>No. of Passengers: </span>{item.passengers}</p>
          <p><span>Edited on: </span>{item.edited}</p>
          <p><span>Created on: </span>{item.created}</p>
        </div>
      </div>
    ));
  };

  return <>{showStarShips()}</>;
}
