import CardButton from "./Button";
import { scientistsData } from "./scientists.js";
import {React,  useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import '../css/ProfilesList.css'


const color = { color: "black", marginTop: "1rem" };
const carouselButtonsStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: "#bbb",
};

const ProfilesList = () => {
  const data = scientistsData;

  const customeSlider = React.createRef();
  const [sliderSettings] = useState({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const gotoNext = () => {
    customeSlider.current.slickPrev();
  };

  const gotoPrev = () => {
    customeSlider.current.slickNext();
  };

  return (
    <div className="content">
      <Navbar />
      <div className="controls">
        <Button
          onClick={() => gotoNext()}
          variant="light"
          style={carouselButtonsStyle}
          className="button-left"
        >
          <FaChevronLeft />
        </Button>
        <Button
          onClick={() => gotoPrev()}
          variant="light"
          style={carouselButtonsStyle}
        >
          <FaChevronRight />
        </Button>
      </div>

      <div className="p-6">
        <Slider ref={customeSlider} {...sliderSettings}>
          {data &&
            data.map((card, index) => (
              <div>
                <div key={index}>
                  <img
                    className="image"
                    alt={card.name}
                    src={card.src}
                  />
                  <h3 style={color}>{card.name}</h3>

                </div>
                <Link to={`/profile/${card.id}`} key="profile.id">
                  <CardButton />
                </Link>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProfilesList;
