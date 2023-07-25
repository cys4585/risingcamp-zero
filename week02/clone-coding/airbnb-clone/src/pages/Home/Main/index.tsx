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

  const [isLast, setIsLast] = useState<boolean>(false);
  const [rooms, setRooms] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getRooms = async (page: number) => {
    try {
      const data = await fetchRooms(selectedRoomConcept, page);
      if (data.length === 0) {
        setIsLast(true);
      } else {
        setRooms((prev) => [...prev, ...data]);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (rooms.length > 0) setRooms([]);
    if (currentPage > 1) setCurrentPage(1);
    setIsLast(false);
  }, [selectedRoomConcept]);

  useEffect(() => {
    if (currentPage < 1) return;
    (async () => await getRooms(currentPage))();
  }, [currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrentPage((prev) => prev + 1);
      });
    });

    if (pageEnd.current) observer.observe(pageEnd.current);

    return () => {
      if (pageEnd.current) observer.unobserve(pageEnd.current);
    };
  }, [rooms]);

  return (
    <div className="main">
      {rooms.length > 0 &&
        rooms.map((data) => <Card key={data.id} data={data} />)}
      {!isLast && <div ref={pageEnd}>load more...</div>}
    </div>
  );
}

export default Main;
