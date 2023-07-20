import { useState, useEffect } from "react";
import "./style.css";

interface RoomConcept {
  id: number;
  text: string;
  imgSrc: string;
}

function Nav() {
  const [selectedItem, setSelectedItem] = useState<string>();
  const [roomConcepts, setRoomConcepts] = useState<RoomConcept[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/room-concepts?_page=1"
        );
        const jsonData = await response.json();
        setRoomConcepts(jsonData);
        setSelectedItem(jsonData[0].text);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <nav className="concept-nav">
      <div className="concept-nav__content">
        <div className="concept-nav__prev">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </span>
        </div>
        <ul className="concept-nav__list">
          {roomConcepts &&
            roomConcepts.map(({ id, text, imgSrc }) => (
              <li
                className={`concept-nav__item ${
                  selectedItem === text ? "concept-nav__item--selected" : null
                }`}
                onClick={() => setSelectedItem(text)}
                key={id}
              >
                <div className="item">
                  <img
                    className={`item__img ${
                      selectedItem === text ? "item__img--selected" : null
                    }`}
                    src={imgSrc}
                    alt={text}
                    width="24"
                    height="24"
                  />
                  <span className="item__text">{text}</span>
                </div>
              </li>
            ))}
        </ul>
        <div className="concept-nav__next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
          </svg>
        </div>
      </div>
      <div className="concept-nav__filter">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>
        <span>필터</span>
      </div>
    </nav>
  );
}

export default Nav;
