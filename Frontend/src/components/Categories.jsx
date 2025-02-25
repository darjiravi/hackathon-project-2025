import { Leaf, Wheat, Apple, Coffee, Fish, Milk } from "lucide-react"
import "./Categories.css"

function Categories() {
  const categories = [
    { icon: <Apple />, name: "Fruits & Vegetables" },
    { icon: <Leaf />, name: "Legumes" },
    { icon: <Wheat />, name: "Nuts & Edible Seeds" },
    { icon: <Wheat />, name: "Grain" },
    { icon: <Wheat />, name: "Cane" },
    { icon: <Wheat />, name: "Livestock" },
    { icon: <Fish />, name: "Seafood" },
    { icon: <Milk />, name: "Eggs & Milk" },
    { icon: <Coffee />, name: "Coffee & Tea" },
    { icon: <Leaf />, name: "Herbs & Spices" },
  ]

  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories

