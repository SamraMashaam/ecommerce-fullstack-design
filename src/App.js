import './App.css';
import Header from './components/Header';
import Hero from './components/HeroCarousel';
import CategorySection from './components/CategorySection';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <CategorySection/>
      <FeaturedProducts/>
      {/* Add main content here */}
    </div>
  );
}

export default App;
