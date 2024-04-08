import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductFeature from './components/ProductFeature';
import TestimonialsSection from './components/Testimonials';
import BannerWithText from './components/BannerWithText';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerWithText
        image="./Cerveza.jpg"
        text="Por un mejor aquí"
      />
      <BannerWithText
        image="./Cerveza.jpg"
        text="Nos gusta mucho ser de aquí"
      />
      <ProductFeature />
      <TestimonialsSection/>
      <Footer />
    </div>
  );
}

export default App;
