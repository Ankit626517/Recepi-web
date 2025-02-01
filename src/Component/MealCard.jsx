import React from 'react';


function MealCard({ detail }) {
  console.log(detail)
  return (
    <div className='meals'>
      {detail.length === 0 ? (
        <p>Data Not Found</p>
      ) : (
        detail.map((curItem) => (
          <div key={curItem.idMeal}>
            <img src={curItem.strMealThumb} alt="image noot found" />
            <p>{curItem.strMeal}</p>
            <a href={curItem.strYoutube} >Linl</a>

          </div>
        ))
      )}
    </div>
  );
}

export default MealCard;
