import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton = (): JSX.Element => {
  return (
    <Link to={"/"} className={"back-button"} data-testid="back-button">
      <IoIosArrowRoundBack className="absolute w-4.5 md:w-5 h-4.5 md:h-5 top-1.75 md:top-2.5 left-6 md:left-8" />
      Back
    </Link>
  );
};

export default BackButton;
