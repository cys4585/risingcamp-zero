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
      <HostAndLanguageButton />
      <Account />
    </header>
  );
}

export default Header;
