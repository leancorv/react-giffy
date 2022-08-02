import { useEffect, useState } from 'react';
import './App.css';
import Gif from './components/Gif';
import getGifs from './services/getGifs';



function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({ keyword: 'programming' }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({id, title, url}) => 
            <Gif 
              id={id}
              key={id}
              title={title} 
              url={url} 
            />
          )
        }
      </section>
    </div>
  );
}

export default App;
