import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import Categories from "./components/Categories";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SearchSection />
      <Categories />
    </div>
  );
}

export default App;
