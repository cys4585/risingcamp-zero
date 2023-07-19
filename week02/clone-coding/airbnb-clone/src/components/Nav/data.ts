import aShapeHouse from "../../assets/a-shape-house.jpg";
import beach from "../../assets/beach.jpg";
import bestView from "../../assets/best-view.jpg";
import campground from "../../assets/campground.jpg";
import countryside from "../../assets/countryside.jpg";
import farm from "../../assets/farm.jpg";
import koreanHouse from "../../assets/korean-house.jpg";
import nationalPark from "../../assets/national-park.jpg";
import room from "../../assets/room.jpg";
import surfing from "../../assets/surfing.jpg";
import surgePopularity from "../../assets/surge-popularity.jpg";
import simmingPool from "../../assets/swimming-pool.jpg";

export const dataList = [
  { text: "멋진 수영장", imgSrc: simmingPool },
  { text: "방", imgSrc: room },
  { text: "해변 바로 앞", imgSrc: beach },
  { text: "A자형 주택", imgSrc: aShapeHouse },
  { text: "서핑", imgSrc: surfing },
  { text: "최고의 전망", imgSrc: bestView },
  { text: "한적한 시골", imgSrc: countryside },
  { text: "한옥", imgSrc: koreanHouse },
  { text: "국립공원", imgSrc: nationalPark },
  // { text: "인기 급상승", imgSrc: surgePopularity },
  // { text: "캠핑장", imgSrc: campground },
  // { text: "농장", imgSrc: farm },

  // "기상천외한 숙소",
  // "초소형 주택",
  // "통나무집",
  // "료칸",
  // "키즈",
  // "호숫가",
  // "디자인",
  // "스키",
  // "열대 지역",
  // "호수 근처",
  // "신규",
  // "캐슬",
  // "와인농장",
] as const;
