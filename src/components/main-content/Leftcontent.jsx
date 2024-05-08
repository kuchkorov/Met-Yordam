import React from "react";
import "./maincontentstyle.css";
import { leftcontentdata } from "../../db.js";
import { IoIosSearch } from "react-icons/io";

function Leftcontent() {
  return (
    <>
      <div className="left-content-title">
        <div className="left-content-info">
          <p>
            Фильтрация <br /> по направлениям
          </p>
        </div>
        <div className="filter-delete">
          <span>X Сбросить</span>
        </div>
      </div>
      <div className="search-content">
        <input type="text" placeholder="Поиск направления" />
        <div className="search-content-icon">
          <IoIosSearch />
        </div>
      </div>
      {leftcontentdata.map((value) => {
        return (
          <div className="checkbox-content">
            <div className="checkbox-content-input">
              <input type="checkbox" />
            </div>
            <h5>{value.title}</h5>
            <div className="checkbox-content-number">
              <span>({value.number})</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Leftcontent;
