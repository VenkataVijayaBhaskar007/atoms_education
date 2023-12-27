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
      {/* tart ===== --> */}
      {/* <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  hie...
                </span>{" "}
               About us
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                This is about
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 Atoms  Educationss
                </span>
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div className="gap-3">
              <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-hero">
              our
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-2 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    vision
                </span>
              </h2>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  Educations...
                  </h3>
                  <p>Atoms  Educations....</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  Educations
                  </h3>
                  <p>Atoms  Educations....</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  Educations...
                  </h3>
                  <p>Atoms  Educations....</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* nd ===== --> */}

      {/* wo Start ===== --> */}


      <About1/>
     
<section className="container  my-10 mt-2" >
  
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
        className="animate_top rounded-lg bg-white px-4 lg:py-2  pb-9 shadow-solid-8 dark:bg-blacksection"
      >    
      <div className="px-4 text-left  full-text " style={{ marginTop: "2rem" }}>
                          
                         
                       <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
            <span className="text-content">Education projects</span>
          </h2><div className="px-3">
                       
                        
              <p>
              We are proudly announcing that Atoms is growing bigger day by day at rapid growth. Here are the major companies that we contribute through...We are proudly announcing that Atoms is growing bigger day by day at rapid growth. Here are the major companies that we contribute through...We are proudly announcing that Atoms is growing bigger day by day at rapid growth. Here are the major companies that we contribute through...
              </p>
                             
              </div>              
                          </div>
        <div className="flex flex-wrap justify-center items-center project-text" >
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
    <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Personality Development Program</h2>
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
    <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">The Acumen Club</h2>
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
    <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Atoms Tutions</h2>
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

  </div>
  </motion.div>
</section>






<section className="container mb-20 my-100 mx10 bg-white" >
  
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
        className="animate_top rounded-lg"
      >
        <div className="flex flex-wrap card-margin items-center">
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
    <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Atoms Summer Camps</h2>
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

    
   {/* 2 Card */}
   <div className="max-w-sm mx-8 my-4 overflow-hidden bg-white dark:bg-btndark rounded-radius shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out margin1" >
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
    <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Placement Assistance Packages</h2>
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

     {/* 3 Card */}
   

  </div>
  </motion.div>
</section>










<section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
       
          
           



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
