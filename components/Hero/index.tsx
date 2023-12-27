"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"
const images = [
  "/herosection/1.png",
  "/herosection/3.png",
  "/herosection/5.png",
  "/herosection/7.png",


];


const Hero = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
  };

  return (
    <>
   <section id="home" className=" pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative space" >
  <div className="pt-7 sm:pt-16 lg:pt-20 mx-auto w-full h-full">
    <div className=" md:block scale-95 rounded-lg relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className="rounded-lg cursor-pointer"
              />
           <div className="hero-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
             
             
          
           <div className="mt-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
  <p className="max-w-2xl mb-2 font-light text-white textsize1  lg:mb-2  dark:text-gray-400">Welcome to</p>   
            <h1 className="max-w-2xl mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-8xl text-white dark:text-white">Atoms Education</h1>
            <p className="max-w-2xl mb-4 font-light text-white textsize lg:mb-6  dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
           
        </div>
              
    </div>
              <div className="mt-8">
                {/* <form onSubmit={handleSubmit}> */}
                  {/* <div className="flex flex-wrap gap-5"> */}
                    {/* <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    /> */}
                    {/* <button
                      aria-label="get started button"
                      className="flex rounded-full bg-purple-600 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-purple-600 dark:hover:bg-blackho hover:translate-y-[-5px]"
                    >
                      Our Projects
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-gray-100  px-7.5 py-2.5 text-black  dark:text-white hover:text-white duration-300 ease-in-out hover:bg-purple-600 dark:bg-btndark dark:hover:bg-purple-600 hover:translate-y-[-5px]"
                    >
                      Our Team
                    </button>
                  </div> */}
               

               
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="block md:hidden scale-95 rounded-lg pt-6 relative">
     
    </div>
  </div>
</section>















      {/* <section>   <Image
                  src="/images/shape/shape-01.svg"
                  alt="shape"
                  width={200}
                  height={200}
                  className="absolute -left-0 bottom-90"
                  
                /></section> */}







 





    </>
  );
};

export default Hero;
