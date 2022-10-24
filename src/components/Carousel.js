// import React from 'react';
// import Slider from "react-slick";
// import {useState} from 'react';
// import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { scientistsData } from './scientists';
// import Profile from './Profiles';

// export default function Carousel() {
//     const slides = scientistsData;
//     const [sliderRef, setSliderRef] = useState()
//     const customeSlider = React.createRef();
//   const [sliderSettings, setSliderSettings] = useState({
//     dots: true,
//     arrows: false,
//     slidesToShow:4,
//     slidesToScroll: 1,
//     infinite: true,
//     lazyLoad: true,
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//   });


//   const gotoNext = () => {
//     customeSlider.current.slickPrev()
//   }

//   const gotoPrev = () => {
//     customeSlider.current.slickNext()
//   }


 

//   return (
//     <div className="content">
//         <div className='controls'>
//         <button onClick={()=>gotoNext()}>
//           <FaChevronLeft />
//         </button>
//         <button onClick={()=>gotoPrev()}> 
//           <FaChevronRight />
//         </button>
//       </div>
//       <Slider ref={customeSlider} {...sliderSettings}>
//         <Profile />
//       </Slider>
//     </div>
//   );
// }


