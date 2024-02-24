import React from "react";
import "./index.css";
import Template from "../../images/template.png";
import Star from "../../images/star.png";
import Search from "../../images/search.png";
import Board from "../../images/board.png";
import Recent from "../../images/clock.png";
import Folder from "../../images/folder.png";
import Lock from "../../images/lock.png";
import Add from "../../images/add.png";

const NavigationBar = ({ navClickHandler, boards, templates }) => (
  <nav>
    <p className="category-wrap">
      <img src={Template} alt="templates start" />
      <b> My templates</b>
    </p>
    <p className="category-wrap">
      <img src={Search} alt="search" />
      <b>Search</b>
    </p>
    {templates.map((item) => {
      const imgSrc = item.bookmarked ? Star : Recent;
      return (
        <p key={item.id} onClick={() => navClickHandler(item.id)}>
          <img src={imgSrc} alt="" /> {item.name}
        </p>
      );
    })}
    <div className="category-add-wrap">
      <p className="category-wrap">
        <img src={Board} alt="boards start" />
        <b>My boards</b>
      </p>
      <img src={Add} alt="add" />
    </div>
    {boards.map((item) => {
      const imgSrc = item.locked ? Lock : Folder;
      return (
        <p key={item.id} onClick={() => navClickHandler(item.id)}>
          <img src={imgSrc} alt="" /> {item.name}
        </p>
      );
    })}
  </nav>
);

export default NavigationBar;
