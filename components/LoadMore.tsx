"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { fetchAnime } from "@/app/action";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView({ rootMargin: "20px" });
  const [animes, setAnimes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((data) => {
        setAnimes([...animes, ...data]);
        page++;
      });
    }
  }, [inView, animes]);

  return (
    <>
      {animes}
      <div
        className="flex justify-center items-center w-full col-span-4"
        ref={ref}
      >
        <Image
          src="./spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-contain"
        />
      </div>
    </>
  );
}

export default LoadMore;
