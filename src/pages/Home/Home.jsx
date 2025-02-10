import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Buttonslist from "../../Components/Buttons/Buttonslist";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css"; 
import Loadingpage from "../../Components/Loadingpage/Loadingpage";

const fetchCategories = async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );
  return response.data.meals || [];
};

const fetchAllMeals = async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  return response.data.meals || [];
};

export default function Home() {
  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const {
    data: allMeals,
    isLoading: isLoadingMeals,
    isError: isErrorMeals,
  } = useQuery({
    queryKey: ["allMeals"],
    queryFn: fetchAllMeals,
  });

  if (isLoadingCategories || isLoadingMeals) return <Loadingpage />;

  return (
    <>
      <Buttonslist data={categories} />
      <div className={styles.mealsGrid}>
        {allMeals.map((meal, index) => (
          <Card key={index} data={meal} />
        ))}
      </div>
    </>
  );
}