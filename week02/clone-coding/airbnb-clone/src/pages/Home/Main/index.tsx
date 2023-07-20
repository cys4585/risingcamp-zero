import { useState, useEffect } from "react";
import Card, { CardData } from "../../../components/Card";
import "./style.css";

function Main({ selectedRoomConcept }: { selectedRoomConcept: string }) {
  const [rooms, setRooms] = useState<CardData[]>();

  useEffect(() => {
    if (selectedRoomConcept === "") return;
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/rooms-${selectedRoomConcept}`
        );
        const jsonData = await response.json();
        setRooms(jsonData);
      } catch (error) {
        alert(error);
      }
    })();
  }, [selectedRoomConcept]);

  return (
    <div className="main">
      {rooms && rooms.map((data) => <Card key={data.id} data={data} />)}
    </div>
  );
}

export default Main;
