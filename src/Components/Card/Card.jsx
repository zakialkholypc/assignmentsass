import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ data }) {
  return (
    <div className={style.meal}>
      <div className={style.mealimage}>
        <img src={data.strMealThumb} alt={data.strMeal} />
      </div>
      <h3 className={style.mealtitle}>
        {data.strMeal.split(" ").slice(0, 2).join(" ")}
      </h3>
      {data.strArea && (
        <h5 className={style.mealarea}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
          </svg>
          {data.strArea}
        </h5>
      )}

      <NavLink
        
        to={`/mealdetails/${data.idMeal}`}
        className={`${style.navlink} ${style.mealbutton}`}
      >
        View Recipe
      </NavLink>
    </div>
  );
}
