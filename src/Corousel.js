import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from './c1.jpg';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>
        <div>
          <img
            src={img}
            alt="Slide 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://www.adgully.com/img/800/202004/agri-ecommerce_2.jpg"
            alt="Slide 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_om-zulCEYhm31-fKbBve2cXlUi8e7U59MQ&s"
            alt="Slide 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <img
            src="https://media.licdn.com/dms/image/C5612AQEQPQMs3qySMg/article-cover_image-shrink_600_2000/0/1591007905949?e=2147483647&v=beta&t=lMVG0SD9xEFw4ob12k3mUMUKqAbaU_hiD1kGuAcuc0Q"
            alt="Slide 4"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
