type LinkButtonProps = {
  text: string;
  target: string;
  action: (str: string) => void;
};

const LinkButton = ({ text, target, action }: LinkButtonProps): JSX.Element => {
  const handleClick = (): void => {
    action(target);
  };

  return (
    <div
      className={
        "bg-lightElement dark:bg-darkElement rounded drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)] min-w-[96px] h-8 px-4 py-1.5 mb-2 mr-2 flex justify-center items-center text-xs cursor-pointer"
      }
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default LinkButton;
