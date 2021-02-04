import './GalleryItem.css';
import useSound from 'use-sound';
import popDown from '../../sounds/pop-down.mp3';
import popUp from '../../sounds/pop-up.mp3';

function GalleryItem({ img, setSpotlight }) {
  const [ playDown ] = useSound(popDown, { volume: 0.25 });
  const [ playUp ] = useSound(popUp, { volume: 0.25 });

  const src = img.default;

  const handleClick = () => {
    setSpotlight(src);
  };

  return (
    <div className="GalleryItem">
      <img
        onMouseDown={playDown}
        onMouseUp={playUp}
        className="GalleryItem-Pic"
        src={src}
        alt="qoobee"
        onClick={handleClick}
      />
    </div>
  );
}

export default GalleryItem;
