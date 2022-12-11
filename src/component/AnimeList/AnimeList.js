import React, { useEffect, useState } from "react";
import { getAnim } from "../../api/api";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.scss";

export default function AnimeList({ inputValue, animeListProps }) {
  const { animeList, setAnimeList } = animeListProps;
  const [onLoad, setOnLoad] = useState(true);

  useEffect(() => {
    getAnim({ search: inputValue }).then((data) => {
      setOnLoad(false);
      setAnimeList(data);
    });
  }, [inputValue]);

  return (
    <div className="anime-list">
      {onLoad ? (
        <p>...chargement</p>
      ) : (
        <ul>
          {animeList?.map((item) => (
            <AnimeCard
              key={item.id}
              id={item.id}
              title={item.title.userPreferred}
              image={item.coverImage.large}
              averageScore={item.averageScore}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
