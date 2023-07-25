import "./style.css";
import MainLogoLink from "./MainLogoLink";
import Search from "./Search";
import Account from "./Account";
import Host from "./Host";
import LanguageButton from "./LanguageButton";

function Header() {
  return (
    <header className="header">
      <MainLogoLink />
      <Search />
      <Host />
      <LanguageButton />
      <Account />
    </header>
  );
}

export default Header;
