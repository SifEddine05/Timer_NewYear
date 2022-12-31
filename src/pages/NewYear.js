import vect1 from "../assets/a1.png"
import vect2 from "../assets/a2.png"
import Y2 from "../assets/2022.png"
import Y3 from "../assets/2023.png"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
const NewYear = () => {
    const[trans,setTrans]=useState("")
    return ( 
    <div className="bg-[#1C3879] min-h-screenflex flex-col justify-between">
        <div className="flex justify-between w-full">
            <motion.div
                    className="w-[25%] h-[200px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}> 
                        <img src={vect2} alt="vect1 " className={"w-[100%] h-[100%] transition-opacity duration-[8000ms] ease-out opacity-100"+trans} />
            </motion.div>
            <motion.div
                    className="w-[25%] h-[200px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}> 
                        <img src={vect2} alt="vect1 " className={"w-[100%] h-[100%] transition-opacity duration-[8000ms] ease-out opacity-100"+trans} />
            </motion.div>          
        </div> 


        <div className="flex justify-around items-center rounded-full  p-5 lg:mb-8 md:mb-6  sm:mb-4 mb-2 w-[80%] mx-auto ">
                <motion.div 
                    initial={{ opacity: 1}}
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                        
                    }}
                    transition={{
                        delay:0,
                        opacity:1,
                        duration: 3,
                        ease: "easeInOut",
                        times: [2.5, 2.7, 3, 3.3, 3.5],
                        repeat: "norepeat",
                    }}className="w-[60%] md:h-[180px] h-[100px] "> 
                            <img src={Y3} alt="vect1 " className="w-[100%] self-center" />

                </motion.div>
        </div>
        <div className="flex justify-between w-full">
            <motion.div
                    className="w-[25%] h-[225px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}> 
                        <img src={vect2} alt="vect1 " className={"w-[100%] h-[100%] transition-opacity duration-[8000ms] ease-out opacity-100"+trans} />
            </motion.div>
            <motion.div
                    className="w-[25%] h-[200px] self-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 2.5,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}> 
                        <img src={vect1} alt="vect1 " className={"w-[100%] h-[100%] transition-opacity duration-[8000ms] ease-out opacity-100"+trans} />
            </motion.div> 
            <motion.div
                    className="w-[25%] h-[225px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 1,
                    delay: 2,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}> 
                        <img src={vect2} alt="vect1 " className={"w-[100%] h-[100%] transition-opacity duration-[8000ms] ease-out opacity-100"+trans} />
            </motion.div>          
        </div>      
    </div>  );
}
 
export default NewYear;