import React from "react";
import "./maincontentstyle.css";

function Leftcontent() {
  return (
    <div className="left-content-title">
      <div className="left-content-info">
        <p>Фильтрация по направлениям</p>
      </div>
      <div className="filter-delete">
        <span>X Сбросить</span>
      </div>
    </div>
  );
}

export default Leftcontent;
