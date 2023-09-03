import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

type LinkButtonProps = {
  text: string;
  target?: string;
};

const LinkButton = ({ text, target }: LinkButtonProps): JSX.Element => {
  return (
    <Link
      to={target ? target : "/"}
      className={
        text === "Back"
          ? "relative bg-lightElement dark:bg-darkElement rounded drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] w-[104px] h-8 pl-[50px] pr-6 mb-16 flex flex-row flex-nowrap justify-center items-center text-sm"
          : "bg-lightElement dark:bg-darkElement rounded drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] min-w-[96px] h-8 px-4 py-1.5 items-center text-xs"
      }
    >
      {text === "Back" ? (
        <IoArrowBack className="absolute h-6 w-6 left-[21px] top-1 " />
      ) : (
        ""
      )}
      {text}
    </Link>
  );
};

export default LinkButton;
