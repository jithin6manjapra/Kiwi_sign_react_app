import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Cards from '../Components/Cards/Cards'
import Footer from '../Components/Footer/Footer';


function Home() {
  return (
    <div className="">
     <Header/>
     <Banner/>
     <Cards title="North Island" />
     <Cards title="South Island"/>
     <Footer/>
    </div>
  );
}

export default Home;
 
