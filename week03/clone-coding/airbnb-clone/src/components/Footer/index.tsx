import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="about">
        <ol className="about__list">
          <li className="about__item">
            <span>© 2023 Airbnb, Inc.</span>
          </li>
          <li className="about__item">
            <span className="about__div-dot">·</span>
            <Link to={"/"}>개인정보 처리방침</Link>
          </li>
          <li className="about__item">
            <span className="about__div-dot">·</span>
            <Link to={"/"}>이용약관</Link>
          </li>
          <li className="about__item">
            <span className="about__div-dot">·</span>
            <Link to={"/"}>사이트맵</Link>
          </li>
          <li className="about__item">
            <span className="about__div-dot">·</span>
            <Link to={"/"}>한국의 변경된 환불 정책</Link>
          </li>
          <li className="about__item">
            <span className="about__div-dot">·</span>
            <Link to={"/"}>회사 세부정보</Link>
          </li>
        </ol>
        <div className="about__additional">
          <div className="country">
            <div className="country__language">
              <span className="country__language-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                </svg>
              </span>
              <span>한국어(KR)</span>
            </div>
            <div className="country__currency">
              <span>₩</span>
              <span>KRW</span>
            </div>
          </div>
          <div className="reference">
            <span className="reference__text">지원 및 참고 자료</span>
            <svg
              className="reference__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path fill="none" d="M4 20 15.3 8.7a1 1 0 0 1 1.4 0L28 20"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="provider">
        <span>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
