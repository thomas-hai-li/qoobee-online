import './GalleryItem.css';
import useSound from 'use-sound';
import bloop from '../../sounds/bloo.mp3';

function GalleryItem({ img, setSpotlight }) {
  const [ playBloop ] = useSound(bloop, { volume: 0.25 });

  const src = img.default;

  const handleClick = () => {
    playBloop();
    setSpotlight(src);
  };

  return (
    <div className="GalleryItem">
      <img className="GalleryItem-Pic" src={src} alt="qoobee" onClick={handleClick} />
    </div>
  );
}

export default GalleryItem;
