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
  const pageEnd = useRef<HTMLDivElement>(null);

  const [rooms, setRooms] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // useEffect(() => {
  //   console.log(rooms);
  // }, [rooms]);

  const getRooms = async (page: number) => {
    try {
      // console.log(selectedRoomConcept, page);
      const data = await fetchRooms(selectedRoomConcept, page);
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
    if (currentPage === 1) return;

    getRooms(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prev) => prev + 1);
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
      <div ref={pageEnd}>로딩 중...</div>
    </div>
  );
}

export default Main;
