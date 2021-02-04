import { useMediaQuery } from 'react-responsive';
import Slider from 'infinite-react-carousel';
import GalleryItem from '../GalleryItem/GalleryItem';
import './PictureScroller.css';

function PictureScroller({ pics, reverse, setSpotlight }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  });

  const settings = {
    autoplay: true,
    autoplayScroll: reverse ? -1 : 1,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: isTabletOrMobile || isTabletOrMobileDevice ? 2 : 7,
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
