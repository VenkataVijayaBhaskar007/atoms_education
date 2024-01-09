"use client";
import About1 from "./About1";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import "./style.css"
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      title: 'Atoms Digital Services',
      description: 'Description for card 1. Add more detailed information about the card content.',
    },
    {
      title: 'Atoms Visual Media',
      description: 'Description for card 2. Add more detailed information about the card content.',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate to the next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [currentIndex, cardData.length]);

  const handleViewMore = () => {
    // Handle "View More" button click
    console.log(`View more clicked for card ${currentIndex + 1}`);
  };

  
  return (
    <>
     

      <About1/>
     
<section id="Projects" className="container  my-10 mt-2 " >
  
    {/* First Card */}
    <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: -40,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.3 }}
        className="animate_top rounded-lg bg-white px-4 lg:py-2  pb-9 "
      >    
      <div className="px-4 text-left  full-text " style={{ marginTop: "2rem" }}>
                          
                         
                       <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
            <span className="text-content">Education projects</span>
          </h2><div className="px-3">
                       
                        
              <p>
            Our comprehensive services encompass the management of educational institutes, delivering courses and training to various stakeholders, including students, teachers, management, and parents. Additionally, we specialize in designing and implementing educational activities and services that enrich learning experiences across both online and offline platforms. Through our dedication and commitment, we strive to facilitate lifelong learning and foster a brighter future for all.

              </p>
                             
              </div>              
                          </div>
        <div className="flex flex-wrap justify-center items-center project-text" >
          {/*card-1 */}
        <a href="/section1" className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out" >
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/13.webp"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3  text-xl font-semibold text-gray-800 dark:text-white">Institute Management Services</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    Institute Management Services are designed aiming to create a learning space where students can identify their hidden skills and choose ... </p>
    <a
      href="/section1"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</a>

    
   {/* 2 Card */}
   <a href="/TheAcumenClub" className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin1">
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/19.webp"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">The Acumen Club</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    The Acumen Club is designed to create an environment to help students and professionals to communicate in English... </p>
    <a
      href="TheAcumenClub"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</a>

     {/* 3 Card */}
     <a href="/section3" className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin2">
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/14.webp"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Tutions</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    Atoms Tuition serves as a platform where students can not only learn new concepts but also put them into practice effectively... </p>
    <a
      href="/section3"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</a>
{/*card-4 */}
<a href="/section4" className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out" >
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/22.webp"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Summer Camps</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    Our mission is to recognize the crucial role of summer in a child's development and ensure its effective utilization to help...  </p>
    <a
      href="/section4"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</a>

    
   {/* 5 Card */}
   <a href="/section5" className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin1 " >
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/11.webp"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Placement Assistance Packages</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    In the current competitive job market, securing a position in a multinational corporation (MNC) can be a daunting task...</p>
    <a
      href="/section5"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</a>
{/*card-0 */}
<div className="max-w-sm mx-8 my-4  margin2 z-[-1]">
  <div className="relative w-full h-48 ">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/14.png"
      alt="card image"
      style={{ visibility: 'hidden' }}
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-100"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-white text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-white dark:text-white">Atoms Tutions</h2>
    <p className="text-sm tracking-tight font-light text-white leading-6">
    Atoms Tuition offers practical, non-traditional learning for students, partnering with educators to foster a positive community for academic growth...
    </p>
    <a
      href="/section3"
      className="inline-flex items-center gap-2.5 text-white  dark:text-white dark:hover:text-primary mt-5"
    >
      
    </a>
  </div>
</div>

  </div>
  </motion.div>
</section>














 
<section className="border border-x-0 border-y-stroke bg-alabaster py-1 dark:border-y-strokedark dark:bg-black spaceu" >
       
   
       <div className="flex items-center justify-center">
       <motion.div
   variants={{
   hidden: {
   opacity: 0,
   y: -40,
   },
   visible: {
   opacity: 1,
   y: 0,
   },
   }}
   initial="hidden"
   whileInView="visible"
   transition={{ duration: 1, delay: 0.1 }}
   
   className="animate_top "
   >  <h2 className="text-center mb-4 text-2xl font-bold text-black dark:text-white xl:text-3xl 2xl:text-4xl  ">
     <span className="text-content  nowraps">Our Clients</span>
   </h2></motion.div>
   
   
   </div>  
      

<div className="logos" >
        <div className="logos-slide" >
       


    <img src="./images/clients/1.png" alt="client-1 logo image" />



  



    <img src="./images/clients/3.png" alt="client-3 logo image" />



   


        
  </div>

 
</div>

</section>











    </>
  );
};

export default About;
