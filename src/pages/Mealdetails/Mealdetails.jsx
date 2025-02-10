import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Mealdetails() {
  const params = useParams();
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
    );
    setData(response.data.meals[0]);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="p-4  min-h-screen">
        <div className="container p-4">
          <div className="flex gap-4 flex-col lg:flex-row ">
            <div className="lg:w-2/3">
              <h1 className="text-5xl font-semibold mb-4 md:mb-4 font-Pacifico">
                {data.strMeal}
              </h1>
              <div className="grid gap-4 items-stretch lg:grid-cols-2">
                <div>
                  <img
                    className="w-full rounded-2xl mb-8"
                    src={data.strMealThumb}
                    alt={data.strMeal}
                  />
                  <ul className="flex gap-4 justify-center">
                    <li className="bg-red-600  text-white py-2 px-4 rounded-lg ">
                      <a
                        target="_blank"
                        href={data.strYoutube}
                        className="flex gap-2 justify-center items-center"
                      >
                        {" "}
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>{" "}
                        youtube{" "}
                      </a>
                    </li>
                    <li className="bg-secondary  text-white py-2 px-4 rounded-lg ">
                      <a
                        target="_blank"
                        href={data.strSource}
                        className="flex gap-2 justify-center items-center"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          version="1.1"
                          viewBox="0 0 17 17"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g />
                          <path d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z" />
                        </svg>{" "}
                        source{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="font-Pacifico">{data.strInstructions}</p>
              </div>
            </div>
            <div className="lg:w-1/3 p-4">
              <div className="bg-white rounded-2xl p-4">
                <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">
                  Ingredients
                </h3>
                {Object.keys(data)
                  .filter((key) => key.startsWith("strIngredient") && data[key])
                  .map((key, index) => (
                    <div
                      key={index}
                      className="flex justify-between p-2 border-b-2 last-of-type:border-b-0"
                    >
                      <span>{data[key]}</span>
                      <span>
                        {data[`strMeasure${index + 1}`] || "N/A"}
                      </span>{" "}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

