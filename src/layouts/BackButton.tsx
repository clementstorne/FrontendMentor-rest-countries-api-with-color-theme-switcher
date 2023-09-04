import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = (): JSX.Element => {
  return (
    <Link
      to={"/"}
      className={
        "relative bg-lightElement dark:bg-darkElement rounded drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] w-[104px] h-8 pl-[50px] pr-6 mx-7 mt-10 mb-16 flex flex-row flex-nowrap justify-center items-center text-sm"
      }
    >
      <IoArrowBack className="absolute h-6 w-6 left-[21px] top-1 " />
      Back
    </Link>
  );
};

export default BackButton;
