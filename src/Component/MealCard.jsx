import React from 'react';
// import Recipes from './recipes.json'


function MealCard({ detail }) {

  console.log(detail)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
    {detail.length === 0 ? (
      <p className="text-gray-500 text-center col-span-full">Data Not Found</p>
    ) : (
      detail.map((curItem) => (
        <div
          key={curItem.idMeal}
          className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl shadow-xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center h-auto"
        >
          <img
            src={curItem.strMealThumb}
            alt="image not found"
            className="w-full aspect-[4/3] object-cover rounded-lg shadow-md"
          />
          <p className="text-lg font-semibold mt-3 text-center">{curItem.strMeal}</p>
  
          {curItem.strTags && (
            <p className="text-md font-semibold mt-1 text-center bg-white text-purple-600 px-2 py-1 rounded-md">
              {curItem.strTags}
            </p>
          )}
  
          <p className="text-lg text-black font-semibold mt-3 text-center">RECIPE</p>
  
          <p className="text-sm font-medium mt-3 text-center break-words max-h-40 overflow-y-auto px-2">
            {curItem.strInstructions}
          </p>
  
          <a
            href={curItem.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-white text-purple-600 hover:text-white hover:bg-purple-700 font-medium px-4 py-2 rounded-lg transition duration-300"
          >
            Watch Recipe
          </a>
        </div>
      ))
    )}
  </div>
  
  );
}

export default MealCard;
