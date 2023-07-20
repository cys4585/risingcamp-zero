import aShapeHouse from "../../assets/concept-nav/a-shape-house.jpg";
import beach from "../../assets/concept-nav/beach.jpg";
import bestView from "../../assets/concept-nav/best-view.jpg";
import campground from "../../assets/concept-nav/campground.jpg";
import countryside from "../../assets/concept-nav/countryside.jpg";
import farm from "../../assets/concept-nav/farm.jpg";
import koreanHouse from "../../assets/concept-nav/korean-house.jpg";
import nationalPark from "../../assets/concept-nav/national-park.jpg";
import room from "../../assets/concept-nav/room.jpg";
import surfing from "../../assets/concept-nav/surfing.jpg";
import surgePopularity from "../../assets/concept-nav/surge-popularity.jpg";
import simmingPool from "../../assets/concept-nav/swimming-pool.jpg";

export const dataList = [
  { text: "멋진 수영장", imgSrc: simmingPool },
  { text: "방", imgSrc: room },
  { text: "해변 바로 앞", imgSrc: beach },
  { text: "A자형 주택", imgSrc: aShapeHouse },
  { text: "서핑", imgSrc: surfing },
  { text: "최고의 전망", imgSrc: bestView },
  { text: "한적한 시골", imgSrc: countryside },
  { text: "한옥", imgSrc: koreanHouse },
  // { text: "국립공원", imgSrc: nationalPark },
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
