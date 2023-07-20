import 여수리조트 from "../../assets/main-contents/여수리조트.webp";
import "./style.css";

function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <img src={여수리조트} alt="" />
      </div>
      <div className="card__like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
        </svg>
      </div>
      <div className="card__info card-info">
        <div className="card-info__address">Dolsan-eup, Yeosu-si, 한국</div>
        <div className="card-info__distance">326km 거리</div>
        <div className="card-info__duration">9월 3일~10일</div>
        <div className="card-info__price">
          <span>₩181,714</span>
          <span> /박</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
