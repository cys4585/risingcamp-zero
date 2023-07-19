import { useState } from "react";
import "./style.css";
import { dataList } from "./data";

function Nav() {
  const [selectedItem, setSelectedItem] = useState<string>(dataList[0].text);

  return (
    <nav className="concept-nav">
      <div className="concept-nav__content">
        {/* <div>{"<"}</div> */}
        <ul className="concept-nav__list">
          {dataList.map(({ text, imgSrc }) => (
            <li
              className={`concept-nav__item ${
                selectedItem === text ? "concept-nav__item--selected" : null
              }`}
              onClick={() => setSelectedItem(text)}
              key={text}
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
        <div>{">"}</div>
      </div>
      <div className="concept-nav__filter">필터</div>
    </nav>
  );
}

export default Nav;
