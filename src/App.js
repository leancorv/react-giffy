import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Route } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href='/gif/colombia'>Gifs de Colombia</a>
        <a href='/gif/ecuador'>Gifs de Ecuador</a>
        <a href='/gif/chile'>Gifs de Chile</a>
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
