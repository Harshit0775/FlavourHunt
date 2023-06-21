import ChiefCards from "./ChiefCards"
export default function ChiefSection() {
    const chiefs = [
        {
          name: "Juan Carlos",
          img: "/img/top-cheifs/img12.jpeg",
          recipesCount: "10",
          cuisine: "Mexican",
        },
        {
          name: "John Doe",
          img: "/img/top-cheifs/img2.jpg",
          recipesCount: "05",
          cuisine: "Japanese",
        },
        {
          name: "Erich Maria",
          img: "/img/top-cheifs/img3.jpg",
          recipesCount: "13",
          cuisine: "Italian",
        },
        {
          name: "Chris Brown",
          img: "/img/top-cheifs/img4.jpg",
          recipesCount: "08",
          cuisine: "American",
        },
        {
          name: "Blake Lively",
          img: "/img/top-cheifs/img5.jpg",
          recipesCount: "09",
          cuisine: "French",
        },
        {
          name: "Ben Affleck",
          img: "/img/top-cheifs/img6.jpeg",
          recipesCount: "04",
          cuisine: "Indian",
        }
    ]
  return (
    <div className="section chiefs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
            {/* <ChiefCards/>
            <ChiefCards/>
            <ChiefCards/>
            <ChiefCards/>
            <ChiefCards/>
            <ChiefCards/> */}
            {chiefs.map(chief => <ChiefCards key={chief.name} chief={chief} />)}
      </div>
    </div>
  )
}
