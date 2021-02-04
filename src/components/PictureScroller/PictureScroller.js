import './PictureScroller.css';
import Slider from 'infinite-react-carousel';
import GalleryItem from '../GalleryItem/GalleryItem';

function PictureScroller({ pics, reverse, setSpotlight }) {
  const settings = {
    autoplay: true,
    autoplayScroll: reverse ? -1 : 1,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: 7,
    wheelScroll: 2,
    wheel: true,
    dots: true
  };

  return (
    <div className="PictureScroller">
      <Slider {...settings}>
        {pics.map((pic, i) => <GalleryItem key={i} img={pic} setSpotlight={setSpotlight} />)}
      </Slider>
    </div>
  );
}

export default PictureScroller;
