import { Anime } from "@/interfaces";
import AnimeCard from "./AnimeCard";

export interface Props {
  animes: Anime[];
}

const Animes = ({ animes }: Props) => {
  return (
    <>
      {animes ? (
        animes.map((anime, index) => (
          <AnimeCard index={index} anime={anime} key={anime.id} />
        ))
      ) : (
        <div className="text-xl font-bold">No animes available</div>
      )}
    </>
  );
};

export default Animes;
