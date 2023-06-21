// import CustomImage from "./Customimage"

// export default function RecipeCard({recipe}) {
//   return (
//     <div>
//       <div className="recipe-card">
//         <CustomImage imgSrc={recipe.image} pt = "65%"/>
//         <div className="recipe-card-info">
//             <img className="auther-img"src="/img/top-cheifs/img2.jpg" alt=""/>
//             <p className="recipe-title">Chicken Pan Pizza</p>
//             <p className="recipe-desc">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, similique.
//             </p>
//             <a className="view-btn" href="#!" >VIEW RECIPE</a>
//         </div>
//       </div>
//     </div>
//   )
// }

import Customimage from "./Customimage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <Customimage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                {/* <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                {/* <a className="view-btn" href="!#">VIEW RECIPE</a> */}
            </div>
        </div>
    )
}
