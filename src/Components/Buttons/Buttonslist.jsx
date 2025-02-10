import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Buttonslist.module.css"; 

export default function Buttonslist({ data }) {
  return (
    <div className="mt-10">
      <h1>
        Learn, Cook, Eat Your Food
      </h1>
      <div className="buttons">
        <NavLink
          className={({ isActive }) =>
            `${style.catLink}  ${style.catLink} transition-all ${
              isActive ? style.active : ""
            }`
          }
          key={"all"}
          to={"/"}
        >
          All
        </NavLink>

        {data?.map((item, index) => (
          <NavLink
            key={index}
            to={`/catigory/${item.strCategory}`}
            className={({ isActive }) =>
              `${style.catLink}  ${style.catLink} transition-all ${
                isActive ? style.active : ""
              }`
            }
          >
            {item.strCategory}
          </NavLink>
        ))}
      </div>
    </div>
  );
}