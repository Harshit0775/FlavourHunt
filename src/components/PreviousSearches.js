// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// // import { faSearch } from "@fortawesome/free-solid-svg-icons"
// // export default function PreviousSearches() {
// //     const searches = ['pizza','burger','cookies','juice','briyani','salad','ice cream', 'lasagna', 'pudding', 'soup']
// //   return (
// //     <div>
// //       <div className="previous-searches section">
// //         <h2>Previous Searches</h2>
// //         <div className="previous-searches-cointainer">
// //           {searches.map((search,index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
// //             {search}
// //           </div>))}

// //           <div className="search-box">
// //             <input type="text" placeholder="Search..." />
// //             <button className="btn">
// //               <FontAwesomeIcon icon={faSearch}/>
// //             </button>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const API_ID = '5a72ab9a';
// const API_KEY = '65bdd2c97ff5249e865eb3773a72451d';

// export default function PreviousSearches() {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   const searches = [
//     'pizza',
//     'burger',
//     'cookies',
//     'juice',
//     'briyani',
//     'salad',
//     'ice cream',
//     'lasagna',
//     'pudding',
//     'soup',
//   ];

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
//       );
//       const data = await response.json();
//       setRecipes(data.hits);
//       setQuery('');
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="previous-searches section">
//         <h2>Previous Searches</h2>
//         <div className="previous-searches-cointainer">
//           {searches.map((search, index) => (
//             <div
//               key={index}
//               style={{ animationDelay: index * 0.1 + 's' }}
//               className="search-item"
//             >
//               {search}
//             </div>
//           ))}

//           <div className="search-box">
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={handleChange}
//               />
//               <button className="btn" type="submit">
//                 <FontAwesomeIcon icon={faSearch} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="searched-recipes">
//         {recipes.map((recipe, index) => (
//           <div key={index}>
//             <h3 className="search-title">{recipe.recipe.label}</h3>
//             <img src={recipe.recipe.image} alt={recipe.recipe.label} />
//             <ul>
//               {recipe.recipe.ingredientLines.map((ingredient, index) => (
//                 <li key={index}>{ingredient}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const API_ID = '5a72ab9a';
// const API_KEY = '65bdd2c97ff5249e865eb3773a72451d';

// export default function PreviousSearches() {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   const searches = [
//     'pizza',
//     'burger',
//     'cookies',
//     'juice',
//     'briyani',
//     'salad',
//     'ice cream',
//     'lasagna',
//     'pudding',
//     'soup',
//   ];

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(
//         `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
//       );
//       const data = await response.json();
//       setRecipes(data.hits);
//       setQuery('');
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//     }
//   };

//   const handleViewRecipe = (url) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <div>
//       <div className="previous-searches section">
//         <h2>Previous Searches</h2>
//         <div className="previous-searches-cointainer">
//           {searches.map((search, index) => (
//             <div
//               key={index}
//               style={{ animationDelay: index * 0.1 + 's' }}
//               className="search-item"
//             >
//               {search}
//             </div>
//           ))}

//           <div className="search-box">
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={handleChange}
//               />
//               <button className="btn" type="submit">
//                 <FontAwesomeIcon icon={faSearch} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="searched-recipes">
//         {recipes.map((recipe, index) => (
//           <div key={index} className="recipes">
//             <h3 className='search-title'>{recipe.recipe.label}</h3>
//             <img className='recipe-img' src={recipe.recipe.image} alt={recipe.recipe.label} />
//             <div className="recipe-details">
//               <div className="calories">
//                 <h4>Calories:</h4>
//                 <p>{Math.round(recipe.recipe.calories)} kcal</p>
//               </div>
//             </div>
//             <button
//               className="view-recipe-btn"
//               onClick={() => handleViewRecipe(recipe.recipe.url)}
//             >
//               View Recipe
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const API_ID = '5a72ab9a';
const API_KEY = '65bdd2c97ff5249e865eb3773a72451d';

export default function PreviousSearches() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searches = [
    'pizza',
    'burger',
    'cookies',
    'juice',
    'briyani',
    'salad',
    'ice cream',
    'lasagna',
    'pudding',
    'soup',
  ];

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      setQuery('');
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleViewRecipe = (url) => {
    window.open(url, '_blank');
  };

  const truncateRecipeLabel = (label) => {
    const words = label.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...';
    }
    return label;
  };

  return (
    <div>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-cointainer">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + 's' }}
              className="search-item"
            >
              {search}
            </div>
          ))}

          <div className="search-box">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
              />
              <button className="btn" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="searched-recipes">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h3 className='search-title'>{truncateRecipeLabel(recipe.recipe.label)}</h3>
            <img className='recipe-img' src={recipe.recipe.image} alt={recipe.recipe.label} />
            <div className="recipe-details">
              <div className="calories">
                <h4>Calories:</h4>
                <p>{Math.round(recipe.recipe.calories)} kcal</p>
              </div>
            </div>
            <button
              className="view-recipe-btn"
              onClick={() => handleViewRecipe(recipe.recipe.url)}
            >
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


