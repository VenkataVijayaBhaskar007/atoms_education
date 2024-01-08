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
    
      <h2 className="text-with-circle background-circle mb-1 text-lg lg:text-2xl font-bold text-black dark:text-white 2xl:text-Section5 nowraps">
        <span className="text-content">Placement Assistance Packages</span>
      </h2>

      <div className="px-3">
        <p>
        &emsp;&emsp; In the current competitive job market, securing a position in a multinational corporation (MNC) can be a daunting task, even for individuals with the necessary technical skills and qualifications. At Atoms Education, we understand the challenges candidates face during the screening process, and that's why we offer a range of specialized courses and training programs.
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
  
    className="animate_top flex flex-col lg:flex-row rounded-lg px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
   

    <div className=" lg:w-1/1 px-4 text-left full-text" >
    
    <h2 className="text-with-circle background-circle mb-1 text-lg lg:text-2xl font-bold text-black dark:text-white 2xl:text-Section5 nowraps">
        <span className="text-content">Program Overview {/*&  Educational Approach*/}</span>
      </h2>
    
    </div>
 
      
  </motion.div>
  
</section>

<div className=" px-10 lg:px-20 mb-10 -mt-10 lg:mt-0">
<p>
&emsp;&emsp; Our comprehensive training modules cater to students, colleges, and universities, equipping them with the tools to excel in the screening process. These training sessions cover essential aspects such as resume building, providing personalized resume-building services, optimizing LinkedIn profiles for professional visibility, and mastering effective networking strategies. Additionally, we conduct mock group discussions and mock interviews to simulate real-world scenarios and enhance candidates' confidence and performance.

</p><br/> <p>
        &emsp;&emsp; We offer tailor-made packages designed to meet the specific needs of colleges, universities, and individuals, ensuring that everyone receives the guidance and support required to stand out in the job market. At Atoms Education, our goal is to empower candidates with the skills and expertise needed to navigate the competitive landscape and secure their desired positions in top-tier MNCs.

        </p>
     </div>






</>





    
  );
};

export default Section5;
