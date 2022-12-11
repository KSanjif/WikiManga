import React, { useEffect, useState } from "react";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAnim } from "../api/api";
import AnimeDetail from "../component/AnimeDetail/AnimeDetail";
import AnimeList from "../component/AnimeList/AnimeList";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

export default function Router() {
  const [inputValue, setInputValue] = useState(null);
  const [animeList, setAnimeList] = useState(null);

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          onSearchUpdate={(e) => {
            setInputValue(e);
          }}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AnimeList
                inputValue={inputValue}
                animeListProps={{ animeList, setAnimeList }}
              />
            }
          />
          <Route exact path="/detail/:id" element={<AnimeDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
