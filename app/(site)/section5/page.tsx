"use client";

import { motion } from "framer-motion";
import "./style.css"

const Section5 = () => {


  return (
    <>
<section className="my-4" style={{ marginTop: "8rem" }}>
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
    transition={{ duration: 1, delay: 0.5 }}
  
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
    {/* Image on the Left */}
    <div className="lg:order-1 lg:w-1/2 lg:pr-4 ">
      <img
        src="./images/educationcards/23.png" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-4 text-left full-text" >
    
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-Section5 nowraps">
        <span className="text-content">Atoms Tutions</span>
      </h2>

      <div className="px-3">
        <p>
        Atoms Tuition serves as a platform where students can not only learn new concepts but also put them into practice effectively. Our primary aim is to help school-going students implement and gain practical experience from their learnings. In addition to covering school topics, our tuition sessions also encompass subjects and skills not typically taught in schools. We place a strong emphasis on practical learning and offer sessions that focus on building life skills, leading to transformative changes in a student's life.

</p>
  </div>
      
    </div>
  </motion.div>
</section>





<section className="my-4 lg:px-20" >
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
    transition={{ duration: 1, delay: 0.5 }}
  
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
   

    <div className=" lg:w-1/1 px-4 text-left full-text" >
    
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-Section2 nowraps">
        <span className="text-content">Program Overview {/*&  Educational Approach*/}</span>
      </h2>
     <div className="px-3">
        <p>
        We warmly welcome collaborations with schools, college students, and home makers who share our passion for educating the community and are eager to make a positive impact. Through these strategic collaborations we create a dynamic community of educators who are passionate about making a difference. As a business, Atoms Tuition offers a lucrative opportunity for partners to engage in the education sector and contribute to the growth and development of students while earning from their involvement. Together, we create a mutually beneficial ecosystem that enhances learning outcomes and sets students up for success in a competitive world.


        </p>
     </div>
      
    </div>
  </motion.div>
</section>








</>





    
  );
};

export default Section5;
