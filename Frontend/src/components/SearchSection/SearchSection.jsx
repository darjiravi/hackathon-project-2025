import { Search, ChevronDown } from "lucide-react"
import "./SearchSection.css"

function SearchSection() {
  return (
    <div className="search-section">
      <div className="search-container">
        <div className="filter-row">
          <button className="filter-button">
            Category <ChevronDown size={16} />
          </button>
          <button className="filter-button">
            Product <ChevronDown size={16} />
          </button>
          <button className="filter-button">
            Variety <ChevronDown size={16} />
          </button>
          <button className="filter-button">
            Worldwide <ChevronDown size={16} />
          </button>
        </div>
        <div className="search-row">
          <input type="text" placeholder="Any product or supplier" className="search-input" />
          <input type="text" placeholder="Any location" className="search-input" />
          <button className="search-button">
            <Search size={16} />
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection

