import './App.css';
import Content from './components/content/Content'
import Tagline from './components/tagline/Tagline';
import Quote from './components/quote/Quote';
import Footer from './components/footer/Footer';
import { ParallaxProvider } from "react-scroll-parallax";
import Travels from './components/travels/Travels';
import Slider from './components/slider/Slider'

function App() {




  return (
    <ParallaxProvider>
    <div className="App">
      <Slider />
      <Content />
      <Tagline />
      <Quote />
      <Travels />
      <Footer />
    </div>
    </ParallaxProvider>
  );
}

export default App;
