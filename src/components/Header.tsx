import DarkModeButton from "./DarkModeButton";

export default function Header() {
  return (
    <header className="bg-lightElement dark:bg-darkElement h-20 w-full px-4 flex flex-row flex-nowrap justify-between items-center">
      <h1 className="text-sm font-extrabold">Where in the world?</h1>
      <DarkModeButton />
    </header>
  );
}
