import * as React from 'react';
import Navigation from './Site/nav/Navigation';
import Blog from './Site/blog/Blog';
import Book from './Site/book/Book';
import Footer from './Site/footer/Footer';
import "./App.css";
function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Blog/>
      <Book/>
      <Footer/>
    </div>
  );
}
export default App;