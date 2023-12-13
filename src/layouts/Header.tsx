import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Header = (): JSX.Element => {
  return (
    <header id="header">
      <Link to={"/"} className="text-sm md:text-2xl font-extrabold">
        <h1>Where in the world?</h1>
      </Link>
      <DarkModeButton />
    </header>
  );
};

export default Header;
