import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

const SlickSlider = ({ list }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  return (
    <div className='slider-container slick-container'>
      <Slider {...settings}>
        {list.map((item) => {
          const { id, image, name, title, quote } = item;
          return (
            <article className='article-slider' key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;
