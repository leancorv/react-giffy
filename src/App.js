import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
