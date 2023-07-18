import "./style.css";
import MainLogoLink from "./MainLogoLink";
import Search from "./Search";
import MyPageButton from "./MyPageButton";
import HostAndLanguageButton from "./HostAndLanguage";

function Header() {
  return (
    <header id="header">
      <div>
        <MainLogoLink />
        <Search />
        <HostAndLanguageButton />
        <MyPageButton />
      </div>
    </header>
  );
}

export default Header;
