import * as React from 'react';
import Navigation from './Site/nav/Navigation';
import Biography from './Site/biography/Biography';
import FeaturedProjects from './Site/featured/FeaturedProjects';
import Contact from './Site/contact/Contact';
import Footer from './Site/footer/Footer';
import "./App.css";
function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Biography/>
      <FeaturedProjects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;