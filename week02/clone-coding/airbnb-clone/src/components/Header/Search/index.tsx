import "./style.css";

function Search() {
  return (
    <div id="search">
      <div className="darkfont">어디든지</div>
      <span className="divline" />
      <div className="darkfont">언제든 일주일</div>
      <span className="divline" />
      <div>
        <div className="lightfont">게스트 추가</div>
        <div data-icon="true" data-testid="little-search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
