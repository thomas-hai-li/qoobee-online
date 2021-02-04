import { useState } from 'react';
import PictureScroller from '../PictureScroller/PictureScroller';
import shuffle from 'shuffle-array';
import useSound from 'use-sound';
// import qoob from '../../sounds/qoob5.mp3';
import './App.css';

const sounds = [
  require('../../sounds/qoob0.mp3'),
  require('../../sounds/qoob1.mp3'),
  require('../../sounds/qoob2.mp3'),
  require('../../sounds/qoob3.mp3'),
  require('../../sounds/qoob4.mp3'),
  require('../../sounds/qoob5.mp3'),
  require('../../sounds/qoob6.mp3'),
  require('../../sounds/qoob7.mp3'),
  require('../../sounds/qoob8.mp3'),
  require('../../sounds/qoob9.mp3')
];

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
  const [ playQoob0 ] = useSound(sounds[0].default, { volume: 0.25 });
  const [ playQoob1 ] = useSound(sounds[1].default, { volume: 0.25 });
  const [ playQoob2 ] = useSound(sounds[2].default, { volume: 0.25 });
  const [ playQoob3 ] = useSound(sounds[3].default, { volume: 0.25 });
  const [ playQoob4 ] = useSound(sounds[4].default, { volume: 0.25 });
  const [ playQoob5 ] = useSound(sounds[5].default, { volume: 0.25 });
  const [ playQoob6 ] = useSound(sounds[6].default, { volume: 0.25 });
  const [ playQoob7 ] = useSound(sounds[7].default, { volume: 0.25 });
  const [ playQoob8 ] = useSound(sounds[8].default, { volume: 0.25 });
  const [ playQoob9 ] = useSound(sounds[9].default, { volume: 0.25 });

  const playSounds = [
    playQoob0,
    playQoob1,
    playQoob2,
    playQoob3,
    playQoob4,
    playQoob5,
    playQoob6,
    playQoob7,
    playQoob8,
    playQoob9
  ];

  const firstHalf = pics.slice(0, pics.length / 2);
  const secondHalf = pics.slice(pics.length / 2);

  const handleClick = () => {
    playSounds[Math.floor(Math.random() * playSounds.length)]();
  };

  return (
    <div className="App">
      <PictureScroller pics={firstHalf} setSpotlight={setSpotlight} />
      <div className="App-Center">
        <img src={spotlight} className="App-logo" alt="logo" onClick={handleClick} />
        <p>
          <code>qoobee.online</code>
        </p>
      </div>
      <PictureScroller pics={secondHalf} setSpotlight={setSpotlight} reverse />
    </div>
  );
}

export default App;
