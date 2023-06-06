import Banner from "./components/Banner";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <>
        <Banner />
        <Card />
      </>
    </main>
  );
}
