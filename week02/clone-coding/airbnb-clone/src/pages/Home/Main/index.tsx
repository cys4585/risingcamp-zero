import { useState, useEffect } from "react";
import Card from "../../../components/Card";
import { CardData } from "./data";
import "./style.css";

function Main() {
  const [rooms, setRooms] = useState<CardData[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/rooms?_page=1");
        const jsonData = await response.json();
        setRooms(jsonData);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="main">
      {rooms && rooms.map((data) => <Card key={data.id} data={data} />)}
    </div>
  );
}

export default Main;
