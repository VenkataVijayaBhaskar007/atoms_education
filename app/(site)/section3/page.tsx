"use client";

import { motion } from "framer-motion";
import "./style.css"

const Section3 = () => {


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
        src="./images/educationcards/14.png" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>

    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-4 text-left full-text" >
    
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-Section3 nowraps">
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





<section>
  <div>
  <section className="my-4 lg:px-25" >
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
  
    className="animate_top px-8 xl:px-8 lg:px-6"
  >
   

    <div className="   text-left full-text" >
    
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-Section2 nowraps">
        <span className="text-content">Program Overview </span>
      </h2>

     
      
    </div>
   
  </motion.div>
</section>

<div className="xl:px-28 px-10 lg:px-25 mb-2">


        <p className="mb-2">
          

        We warmly welcome collaborations with schools, college students, and home makers who share our passion for educating the community and are eager to make a positive impact. Through these strategic collaborations we create a dynamic community of educators who are passionate about making a difference. As a business, Atoms Tuition offers a lucrative opportunity for partners to engage in the education sector and contribute to the growth and development of students while earning from their involvement. Together, we create a mutually beneficial ecosystem that enhances learning outcomes and sets students up for success in a competitive world.

        </p>
        </div>
  {/* <div className=" lg:w-1/1 px-4 text-left full-text" >
    
      <h2 className=" mb-6 text2xl font-bold text-black dark:text-white 2xl:text-Section3 nowraps">
        <span className="text-content">Contact</span>
      </h2>
      
      <div className="flex items-center px-6 space-x-4">
      <div className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" aria-hidden="true" className="h-6 w-6"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path></svg>

      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
      atomseducation1@gmail.com  </div>
    </div>
    <div className="flex items-center px-6 space-x-4">
      <div className="flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" aria-hidden="true" className="h-5 w-5"><path fill-rule="evenodd" d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path></svg>


      </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed mt-2 md:whitespace-nowrap">
       91+ 9652185060 </div>
    </div> */}
    <section className="my-4 lg:px-25" >
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
    transition={{ duration: 1, delay: 0.1 }}
  
    className="animate_top px-8 xl:px-8 lg:px-6"
  >
   

    <div className="   text-left full-text" >
    
      <h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white 2xl:text-Section2 nowraps">
       <span className="text-content">Value Added Services </span>
      </h2>
     

    </div>

    </motion.div>

    <div className="px-10 lg:px-0 ">
    <h2 className=" mb-1 text-md font-regular text-black dark:text-white 2xl:text-Section2 ">
        <span className="text-content"> • Improved Academic Performance of the Student </span>
      </h2>
      <h2 className=" mb-1 text-md font-regular text-black dark:text-white 2xl:text-Section2 ">
        <span className="text-content"> • Hand writing, Drawing, and Craft design
Communication Skills

 </span>
      </h2>
      <h2 className=" mb-1 text-md font-regular text-black dark:text-white 2xl:text-Section2 ">
        <span className="text-content"> • Life Skills

 </span>
      </h2>
      <h2 className=" mb-1 text-md font-regular text-black dark:text-white 2xl:text-Section2 ">
        <span className="text-content"> • Awareness on ignored skills, information and general knowledge

 </span>
      </h2>
</div>
  
</section>
    
</div>
</section>







</>





    
  );
};

export default Section3;
