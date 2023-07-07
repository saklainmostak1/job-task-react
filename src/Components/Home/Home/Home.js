import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeHotDeals from '../HomeHotDeals/HomeHotDeals';
import SearchItems from '../SearchItem/SearchItems';
import HomeSlider2 from '../HomeSlider2/HomeSlider2';
import DealsOnFurniture from '../DealsOnFurniture/DealsOnFurniture';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='mt-20'>
            <HomeProducts></HomeProducts>
            <HomeSlider></HomeSlider>
            <HomeHotDeals></HomeHotDeals>
            <SearchItems></SearchItems>
            <HomeSlider2></HomeSlider2>
            <DealsOnFurniture></DealsOnFurniture>
           
        </div>
    );
};

export default Home;