import React from 'react'
import list from '../data/list.json'
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ccard = () => {
    const filterData = list.filter((data)=> data.name=== "John")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <>
    <div className='bg-base-200 p-10'>
       <div className='pb-4'>
       <h1 className='font-bold text-xl pb-2'>All Complaints</h1>
       </div>
    
    <div className='pb-5'>
    <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Card item={item} key={item.id}/>
        ))}
      </Slider>
    </div>

    </div>
    </div>
    </>
  )
}

export default Ccard