import React from 'react';
import img from './Rectangle 2.png'

const HomeSlider = () => {
    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img} alt='' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default HomeSlider;