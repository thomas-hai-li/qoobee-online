import './GalleryItem.css';

function GalleryItem({ img, setSpotlight }) {
  const src = img.default;

  const handleClick = () => {
    setSpotlight(src);
  };

  return (
    <div className="GalleryItem">
      <img className="GalleryItem-Pic" src={src} alt="qoobee" onClick={handleClick} />
    </div>
  );
}

export default GalleryItem;
