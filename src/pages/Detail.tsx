import Header from "../layouts/Header";
import LinkButton from "../layouts/LinkButton";

export default function Detail() {
  return (
    <>
      <Header />

      <main className="px-7 py-10">
        <LinkButton text={"Back"} />
      </main>
    </>
  );
}
