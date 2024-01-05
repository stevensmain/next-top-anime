import { fetchAnime } from "./action";
import LoadMore from "@/components/LoadMore";

let page = 1;

async function Home() {
  const animes = await fetchAnime(page);

  return (
    <main className="container py-16 mx-auto px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {animes}
        <LoadMore />
      </section>
    </main>
  );
}

export default Home;
