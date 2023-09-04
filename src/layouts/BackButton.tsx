import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = (): JSX.Element => {
  return (
    <Link
      to={"/"}
      className={
        "relative bg-lightElement dark:bg-darkElement rounded drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] w-[104px] md:w-[136px] h-8 md:h-10 pl-[50px] md:pl-[62px] pr-6 md:pr-[39px] mx-7 md:ml-20 mt-10 mb-16 md:my-20 flex flex-row flex-nowrap justify-center items-center text-sm md:text-base"
      }
    >
      <IoArrowBack className="absolute h-6 md:h-[30px] w-6 md:w-[30px] left-[21px] md:left-7 top-1 md:top-[5px] " />
      Back
    </Link>
  );
};

export default BackButton;
