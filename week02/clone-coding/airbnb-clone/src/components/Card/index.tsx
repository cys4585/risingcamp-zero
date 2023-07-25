import "./style.css";

export interface CardData {
  id: number;
  imgSrc: string[];
  address: string;
  distance: string;
  duration: string;
  price: string;
}

function Card({ data }: { data: CardData }) {
  return (
    <div className="card">
      <div className="card__img">
        <img src={data.imgSrc[0]} alt="" />
      </div>
      <div className="card__like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
        </svg>
      </div>
      <div className="card__info card-info">
        <div className="card-info__address">{data.address}</div>
        <div className="card-info__distance">{data.distance}</div>
        <div className="card-info__duration">{data.duration}</div>
        <div className="card-info__price">
          <span>₩{data.price}</span>
          <span> /박</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
