import "./style.css";

function Search() {
  return (
    <div className="test">
      <div className="search">
        <div className="search__text">어디든지</div>
        <span className="search__divline" />
        <div className="search__text">언제든 일주일</div>
        <span className="search__divline" />
        {/* BEM 규칙을 만족하도록 아래 div의 className을 정할 수 있을지? */}
        <div>
          <div className="search__text search__text--light">게스트 추가</div>
          <div className="search__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
