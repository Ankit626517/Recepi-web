import React, { useState } from 'react';
import MealCard from './MealCard';

function MainSearchBar() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("cake");

    const handleInput = (event) => setSearch(event.target.value);

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        // console.log(j)
        setData(jsonData.meals);

    };
    
    

    return (
        <>
     
            <div className=" bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900  p-4">
           
                <form className="max-w-md mx-auto" action="javascript:void(0)" onSubmit={myFun}>
                    <div className="relative">
                        <input
                            type="search"
                            onChange={handleInput}
                            
                            className="block w-full p-4 ps-10 text-sm text-white border border-gray-600 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"

                            placeholder="🔍 Search for your favorite dish..."
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"

                        >
                            Search
                        </button>
                    </div>
                    
                </form>
              
            </div>
            <div>
                <MealCard detail={data} />
            </div>
        </>
    );
}

export default MainSearchBar;