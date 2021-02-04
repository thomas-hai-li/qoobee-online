import { useState } from 'react';
import PictureScroller from '../PictureScroller/PictureScroller';
import shuffle from 'shuffle-array';
import './App.css';

const logo = require('../../img/logo.png');

const pics = shuffle([
  require('../../img/a.webp'),
  require('../../img/b.png'),
  require('../../img/c.png'),
  require('../../img/d.png'),
  require('../../img/e.png'),
  require('../../img/f.png'),
  require('../../img/g.png'),
  require('../../img/h.png'),
  require('../../img/i.webp'),
  require('../../img/j.png'),
  require('../../img/k.png'),
  require('../../img/l.png'),
  require('../../img/m.png'),
  require('../../img/n.png'),
  require('../../img/o.png'),
  require('../../img/p.png')
]);

function App() {
  const [ spotlight, setSpotlight ] = useState(pics[Math.floor(Math.random() * pics.length)].default);

  const firstHalf = pics.slice(0, pics.length / 2);
  const secondHalf = pics.slice(pics.length / 2);

  return (
    <div className="App">
      <PictureScroller pics={firstHalf} setSpotlight={setSpotlight} />
      <div className="App-Center">
        <img src={spotlight} className="App-logo" alt="logo" />
        <p>
          <code>qoobee.online</code>
        </p>
      </div>
      <PictureScroller pics={secondHalf} setSpotlight={setSpotlight} reverse />
    </div>
  );
}

export default App;
