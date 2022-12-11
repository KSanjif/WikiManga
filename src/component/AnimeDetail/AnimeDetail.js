import React, { useMemo } from "react";
import "./AnimeDetail.scss";
import { useLocation } from "react-router-dom";
import useAnime from "../../hook/useAnime";

export default function AnimeDetail() {
  const { pathname } = useLocation();

  const inputs = useMemo(() => {
    return { id: Number(pathname.split("/")[2]) };
  }, [pathname]);

  const [anime] = useAnime(inputs);

  return (
    <div>
      <div className="anime">
        <div className="anime__poster">
          <div>
            <h1>{anime?.[0]?.title?.userPreferred}</h1>
            <img
              src={anime?.[0]?.coverImage.extraLarge}
              alt={`Poster of ${anime?.[0]?.title?.userPreferred}`}
            />
          </div>
          <div className="anime__infos">
            <ul>
              {anime?.[0]?.duration && (
                <li>Durée des épisode: {anime?.[0].duration} </li>
              )}
              {anime?.[0]?.averdurationageScore && (
                <li>Notes : {anime?.[0].averageScore}/100</li>
              )}
              {anime?.[0]?.status && <li>Statut : {anime?.[0].status}</li>}
              {anime?.[0]?.episodes && (
                <li>Nombre d'épisodes : {anime?.[0].episodes}</li>
              )}
              {anime?.[0]?.genres && (
                <>
                  <li>
                    <ul>
                      Tags
                      {anime?.[0].genres.map((tag) => (
                        <li>{tag}</li>
                      ))}
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="anime__synopsis">
          <h2>Synopsis</h2>
          <p>{anime?.[0]?.description}</p>
        </div>
        <div className="anime__trailer"></div>
      </div>
    </div>
  );
}
