import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"


export default function Recipes() {
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/chiken-pan-pizza.webp",
        authorImg: "/img/top-cheifs/img2.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/sap-meat.jpg",
        authorImg: "/img/top-cheifs/img3.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/american-burger.jpg",
        authorImg: "/img/top-cheifs/img4.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/mutton-biryani.jpg",
        authorImg: "/img/top-cheifs/img5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/jap-sushi.jpg",
        authorImg: "/img/top-cheifs/img6.jpeg",
    
    },
    {
        title: "Za'atar Baked Eggs",
        image: "/img/gallery/Za'atar-Baked-Eggs.webp",
        authorImg: "/img/top-cheifs/img12.jpeg",
    }, 
    {
        title: "Strawberry Cake",
        image: "/img/gallery/img2.jpg",
        authorImg: "/img/top-cheifs/img2.jpg",
    },
    {
        title: "Seared Tuna Tiradito",
        image: "/img/gallery/Seared-Tuna-Tiradito.webp",
        authorImg: "/img/top-cheifs/img4.jpg",
    }
    // {
    //     title: "Emperor's Pork",
    //     image: "/img/gallery/Emperor's-Pork.webp",
    //     authorImg: "/img/top-cheifs/img4.jpg",
    // }
    // {
    //     title: "Japanese Sushi",
    //     image: "/img/gallery/img_10.jpg",
    //     authorImg: "/img/top-cheifs/img6.jpeg",
    // },
    // {
    //     title: "American Cheese Burger",
    //     image: "/img/gallery/img_5.jpg",
    //     authorImg: "/img/top-cheifs/img4.jpg",
    // },
    // {
    //     title: "Mutton Biriyani",
    //     image: "/img/gallery/img_6.jpg",
    //     authorImg: "/img/top-cheifs/img12.jpeg",
    // }
].sort(() => Math.random() - 0.5)

  return (
    <div>
      <PreviousSearches/>
      <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
      </div>
    </div>
  )
}
