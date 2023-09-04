import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const Header = (): JSX.Element => {
  return (
    <header className="bg-lightElement dark:bg-darkElement drop-shadow-[0_1px_4px_rgba(0,0,0,0.1)] md:drop-shadow-[0_0px_6px_4px_rgba(0,0,0,0.1)] h-20 w-full px-4 md:px-20 flex flex-row flex-nowrap justify-between items-center">
      <Link to={"/"} className="text-sm font-extrabold md:text-2xl">
        <h1>Where in the world?</h1>
      </Link>
      <DarkModeButton />
    </header>
  );
};

export default Header;
