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
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
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
        <div className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out" >
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/13.png"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3  text-xl font-semibold text-gray-800 dark:text-white">Personality Development Program</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    We provide Personality Development Program, fostering learning spaces. Our offerings include institute management, student and teacher training...
    </p>
    <a
      href="/section1"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</div>

    
   {/* 2 Card */}
   <div className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin1">
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/19.png"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">The Acumen Club</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    English is vital for global communication, aids travel and multinational jobs. Acumen Club fosters English skills through innovative curriculum, building...
    </p>
    <a
      href="/section2"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</div>

     {/* 3 Card */}
     <div className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin2">
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/14.png"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Tutions</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    Atoms Tuition offers practical, non-traditional learning for students, partnering with educators to foster a positive community for academic growth...
    </p>
    <a
      href="/section3"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</div>
{/*card-4 */}
<div className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out" >
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/22.png"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Atoms Summer Camps</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    Acumen Club's mission capitalizes on summer to boost student success via school partnerships. It enhances English, offers diverse sessions like...
    </p>
    <a
      href="/section4"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</div>

    
   {/* 5 Card */}
   <div className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin1 " >
  <div className="relative w-full h-48 overflow-hidden">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/11.png"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30"></div>
  </div>
  <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">atoms education</small>
    <h2 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">Placement Assistance Packages</h2>
    <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
    In the fierce job market, Atoms Education offers specialized training to conquer MNC job hurdles. Our modules enhance resumes, LinkedIn profiles...
    </p>
    <a
      href="/section5"
      className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
    >
      <button className="bg-blue-500 text-white rounded-md px-2 py-1">Know More</button>
    </a>
  </div>
</div>
{/*card-0 */}
<div className="max-w-sm mx-8 my-4  margin2 ">
  <div className="relative w-full h-48 ">
    <img
      className="object-cover object-center w-full h-full"
      src="./images/educationcards/14.png"
      alt="card image"
      style={{ visibility: 'hidden' }}
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-30"></div>
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














<section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black spaceu">
       
          
           



<div className="logos" >
        <div className="logos-slide" >
       


    <img src="./images/clients/1.png" alt="client-1 logo image" />



    <img src="./images/clients/2.png" alt="client-2 logo image" />



    <img src="./images/clients/3.png" alt="client-3 logo image" />



    <img src="./images/clients/4.png" alt="client-4 logo image" />



    <img src="./images/clients/5.png" alt="client-5 logo image" />



    <img src="./images/clients/6.png" alt="client-6 logo image" />



    <img src="./images/clients/7.png" alt="client-7 logo image" />



    <img src="./images/clients/8.png" alt="client-8 logo image" />



    <img src="./images/clients/9.png" alt="client-9 logo image" />




    <img src="./images/clients/10.png" alt="client-10 logo image" />




    <img src="./images/clients/11.png" alt="client-11 logo image" />




    <img src="./images/clients/12.png" alt="client-12 logo image" />




    <img src="./images/clients/13.png" alt="client-13 logo image" />




    <img src="./images/clients/14.png" alt="client-14 logo image" />




    <img src="./images/clients/15.png" alt="client-15 logo image" />




    <img src="./images/clients/16.png" alt="client-16 logo image" />




    <img src="./images/clients/17.png" alt="client-17 logo image" />




    <img src="./images/clients/18.png" alt="client-18 logo image" />




    <img src="./images/clients/19.png" alt="client-19 logo image" />




    <img src="./images/clients/20.png" alt="client-20 logo image" />




    <img src="./images/clients/21.png" alt="client-21 logo image" />




    <img src="./images/clients/22.png" alt="client-22 logo image" />




    <img src="./images/clients/23.png" alt="client-23 logo image" />




    <img src="./images/clients/24.png" alt="client-24 logo image" />




    <img src="./images/clients/25.png" alt="client-25 logo image" />




    <img src="./images/clients/26.png" alt="client-26 logo image" />




    <img src="./images/clients/27.png" alt="client-27 logo image" />




    <img src="./images/clients/28.png" alt="client-28 logo image" />




    <img src="./images/clients/29.png" alt="client-29 logo image" />




    <img src="./images/clients/30.png" alt="client-30 logo image" />




    <img src="./images/clients/31.png" alt="client-31 logo image" />




    <img src="./images/clients/32.png" alt="client-32 logo image" />




    <img src="./images/clients/33.png" alt="client-33 logo image" />




    <img src="./images/clients/34.png" alt="client-34 logo image" />




        
  </div>

 
</div>

</section>











    </>
  );
};

export default About;
