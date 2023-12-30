import React from "react";
import {motion} from "framer-motion"
const About1 = () => {
  return (
    <>
      <section id="About" className="overflow-hidden  pb-20 lg:pt-[10px] lg:pb-[90px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
          

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}> 
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
    transition={{ duration: 1, delay: 1.5 }}
  
    className="animate_top "
  ><h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero " style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Atoms education</span>
</h2></motion.div></div>
      <div>       
              
    <p>
    At Atoms Education, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
   
    <div className="mt-5">
              <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Vision
                
              </h2>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className="w-3/4 mt-2">
                
                  <p>Inspiring the world to learn To be a global leader in transformative education, inspiring individuals to learn, innovate, and contribute to a brighter world.
 </p>
                </div>
              </div>
              <div className="mt-5">
              <h2 className=" text-blue-600   text2xl font-bold dark:text-white xl:text-hero" style={{ whiteSpace:'nowrap'}}>
              Our Mission
                
              </h2>
              </div>
    <div className=" flex items-center gap-5">
            
                <div className="w-3/4 mt-2">
                
                  <p>Atoms Education is dedicated to creating dynamic learning environments that empower students, teachers, and educational institutions. Through innovative models, we offer comprehensive services, fostering lifelong learning and contributing to a better world.
             
 </p>
                </div>
              </div>
             
              
                   </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
             
                  <video
  className="object-contain rounded-3xl w-full"
  height="600"
  width="778"
  src="./images/about/about3.mp4"
  autoPlay
  muted
  loop
/>
                  
               
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    
                  <div className="relative py-3 ">
                  <img
                      src="./images/about/short1.svg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <div className="gradient-overlay-about " ></div>
                  </div>
                 
                  <div className="relative py-3 ">
                    <img
                      src="./images/about/short2.svg"
                      alt=""
                      className="w-full  rounded-2xl "
                    />
                      <div className="gradient-overlay-about " ></div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
