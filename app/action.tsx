"use server";
import AnimeCard from "@/components/AnimeCard";
import { Anime } from "@/interfaces";

export const fetchAnime = async (page: number, limit?: number) => {
  const response = await fetch(
    `${process.env.API_HOST}/api/animes?page=${page}&limit=${
      limit ?? 8
    }&order=popularity`
  );
  const data = (await response.json()) as Anime[];

  return data.map((anime, index) => (
    <AnimeCard index={index} anime={anime} key={anime.id} />
  ));
};
