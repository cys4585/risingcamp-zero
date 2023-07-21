import { useState, useEffect, useRef } from "react";
import Card, { CardData } from "../../../components/Card";
import "./style.css";

const fetchRooms = async (roomconcept: string, page: number) => {
  const response = await fetch(
    `http://localhost:5000/rooms-${roomconcept}?_page=${page}`
  );
  return await response.json();
};

function Main({ selectedRoomConcept }: { selectedRoomConcept: string }) {
  const [isLast, setIsLast] = useState<boolean>(false);
  const pageEnd = useRef<HTMLDivElement>(null);

  const [rooms, setRooms] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  // useEffect(() => {
  //   console.log(rooms);
  // }, [rooms]);

  const getRooms = async (page: number) => {
    try {
      // console.log(selectedRoomConcept, page);
      const data = await fetchRooms(selectedRoomConcept, page);
      if (data.length === 0) {
        setIsLast(true);
      }
      setRooms((prev) => [...prev, ...data]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (selectedRoomConcept === "") return;

    setCurrentPage(1);
    getRooms(1);
  }, [selectedRoomConcept]);

  useEffect(() => {
    if (selectedRoomConcept === "") return;
    if (currentPage === 0) return;

    getRooms(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // console.log("entries", entries);
        if (entries[0].isIntersecting) {
          setCurrentPage((prev) => {
            // console.log("prev", prev);
            return prev + 1;
          });
        }
      },
      { threshold: 0 }
    );

    if (pageEnd.current) {
      observer.observe(pageEnd.current);
    }
  }, []);

  return (
    <div className="main">
      {rooms.length > 0 &&
        rooms.map((data) => <Card key={data.id} data={data} />)}
      {!isLast && <div ref={pageEnd}>...</div>}
    </div>
  );
}

export default Main;
