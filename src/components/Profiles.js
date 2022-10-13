import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import CardButton from "./Button";
import { scientistsData } from "./scientists.js";
import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";

const center = {
  textAlign: "center",
};

const color = {color: "black", marginTop: "1rem"};
const carouselButtonsStyle = {
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: "#bbb",
};

const Profiles = () => {
  const data = scientistsData;

  const [sliderRef, setSliderRef] = useState();
  const customeSlider = React.createRef();
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    lazyLoad: true,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerPadding: '40px',
          // centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
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
          {/* Using bootstrap cards */}
          {/* {data &&
            data.map((profile, index) => (
              <div key={profile.index} className="card">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={profile.src}
                    alt={profile.name}
                  />
                  <Card.Title style={center}>
                    {profile.name.toUpperCase()}
                  </Card.Title>
                  <Card.Subtitle
                  // style={center}
                  >
                    {profile.subject}
                  </Card.Subtitle>
                  <Card.Link
                    href="https://fi.wikipedia.org/wiki/Albert_Einstein"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link"
                    // style={center}
                  >
                    Source: Wikipedia
                  </Card.Link>
                </Card.Body>

                <div style={center}>
                  <CardButton />
                </div>
              </div>
            ))} */}

          {data && data.map((card, index) => (
                  <div>
                    <div key={index}>
                        <img
                        className='image'
                          alt={card.name}
                          src={card.src}
                          // width="200"
                         
                        />
                        <h2
                        style={color}>{card.name}</h2>
                        <p
                        style={color}>{card.subject}</p>
                        <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={color}>
                            Source: Wikipedia
                        </a>
                    </div>
                    {/* <button 
                    className="btn"
                    style={color}>More</button> */}
                    <CardButton />
                  </div>
                ))}
        </Slider>
      </div>
    </div>
  );
};

export default Profiles;
