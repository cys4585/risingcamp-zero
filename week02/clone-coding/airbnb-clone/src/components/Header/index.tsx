import "./style.css";
import MainLogoLink from "./MainLogoLink";
import Search from "./Search";
import HostAndLanguageButton from "./HostAndLanguage";
import Account from "./Account";

function Header() {
  return (
    <header className="header">
      <MainLogoLink />
      <Search />
      {/* block 단위로 컴포넌트를 나눴는데, 뭔가 어색한 느낌 */}
      <HostAndLanguageButton />
      <Account />
    </header>
  );
}

export default Header;
