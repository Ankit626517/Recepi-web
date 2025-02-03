import React from 'react';


function MealCard({ detail }) {
  console.log(detail)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-6">
      {detail.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">Data Not Found</p>
      ) : (
        detail.map((curItem) => (
          <div key={curItem.idMeal}
            className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-2xl shadow-xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl h-[500px] items-center" >
            <img src={curItem.strMealThumb} alt="image noot found"
              className="w-full h-48 object-cover rounded-lg shadow-md" />
            <p className="text-lg font-semibold mt-3">{curItem.strMeal}</p>
            <a href={curItem.strYoutube}
              className="inline-block mt-3 bg-white text-purple-600 hover:text-white hover:bg-purple-700 font-medium px-4 py-2 rounded-lg transition duration-300"
            >Watch Recipe</a>

          </div>
        ))
      )}
    </div>
  );
}

export default MealCard;
