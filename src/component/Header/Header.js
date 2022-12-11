import React from "react";

import "../Header/Header.scss";

function Header({ onSearchUpdate }) {
  return (
    <div className="header">
      <h1>Logo</h1>
      <input
        type="search"
        onChange={(e) => {
          onSearchUpdate(e.target.value);
        }}
      />
      <h1> Find The Perfect Anime ! </h1>
    </div>
  );
}

export default Header;
