import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../../Components/Card/Card";
import Buttonslist from "../../Components/Buttons/Buttonslist";
import Loadingpage from "../../Components/Loadingpage/Loadingpage";
import NotFound from "../NotFound/NotFound";
import styles from "./Category.module.css"; 

const fetchCategories = async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  return response.data.meals || [];
};

const fetchMealsByCategory = async (category) => {
  if (!category) return [];
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  return response.data.meals || [];
};

export default function Category() {
  const { id } = useParams();

  const {
    data: categories,
    isLoading: loadingCategories,
    isError: errorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: meals,
    isLoading: loadingMeals,
    isError: errorMeals,
  } = useQuery({
    queryKey: ["meals", id],
    queryFn: () => fetchMealsByCategory(id),
    enabled: !!id,
  });

  if (loadingCategories || loadingMeals)
    return (
      <>
        <Buttonslist data={categories} />
        <Loadingpage />
      </>
    );
  if (meals.length === 0 || errorMeals) return <NotFound />;

  return (
    <>
      <Buttonslist data={categories} />
      <div className={styles.mealsGrid}>
        {meals.map((meal, index) => (
          <Card key={index} data={meal} />
        ))}
      </div>
    </>
  );
}