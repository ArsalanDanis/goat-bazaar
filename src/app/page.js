"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import Navbar from "./components/navbar";
import Crousel from "./components/carousel";
import DisplayBook from "./components/books";
// import { Footer } from "./components/footer";
import ImagesContainer from "./components/images";
// import DemoCard from "./components/demoCard";
import NextBook from './components/nextBook';
import GenerBook from './components/generBook';
import PopularAuthor from './components/popularAuth';
import './globals.css'
import HeroSection from './components/heroSection';


export default function Home() {
  return (
    <div className=' '>
      
        <Crousel />
        <ImagesContainer />
        <HeroSection />
        <DisplayBook category="Dairy Goats" />
        <DisplayBook category="Meat Goats"/>
        <PopularAuthor />
        <hr />
        <DisplayBook category="Pet Goats" />
        <hr />
        <GenerBook />
        <hr />
        <DisplayBook category="Dual Purpose" />
        <NextBook />
        {/* <Footer /> */}
 
{/* 
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script> */}
    </div>
  );
}
