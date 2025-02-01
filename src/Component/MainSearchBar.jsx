import React, { useState } from 'react';
import MealCard from './MealCard';

function MainSearchBar() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const handleInput = (event) => setSearch(event.target.value);

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        setData(jsonData.meals);
       
    };

    return (
        <>
            <div>
                <form className="max-w-md mx-auto" action="javascript:void(0)" onSubmit={myFun}>
                    <div className="relative">
                        <input
                            type="search"
                            onChange={handleInput}
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search your dish"
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
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
