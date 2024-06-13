import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in  software engineering"
            subTitle="Arbaminch University  (2019 - 2023)"
            result="3.73/4"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pellentesque ligula, sed rhoncus leo. Sed ultrices, orci ac mollis bibendum, dolor purus lobortis libero, id fermentum velit purus sit amet turpis."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Arbaminch Community school (2015 - 2019)"
            result="Good"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pellentesque ligula, sed rhoncus leo. Sed ultrices, orci ac mollis bibendum, dolor purus lobortis libero, id fermentum velit purus sit amet turpis."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Teacher"
            subTitle="Web development teacher at parkland college"
            result="Arbaminch"
            des="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet pellentesque ligula, sed rhoncus leo. Sed ultrices, orci ac mollis bibendum, dolor purus lobortis libero, id fermentum velit purus sit amet turpis."
          />
        
        </div>
      </div>
    </motion.div>
  );
}

export default Education