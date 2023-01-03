import vect1 from "../assets/a1.png"
import vect2 from "../assets/a2.png"
import Y2 from "../assets/2022.png"
import { useState ,useEffect } from "react";
import {   useHistory} from 'react-router-dom';

const Year = () => {
    let history = useHistory();
  

  const calculateTimeLeft = () => {
    const difference = +new Date("2023-12-31T23:00:00+00:00") - +new Date();
    let timeLeft = {};
    
    if (difference > 1) {
      timeLeft = {
        days : Math.floor(difference / (1000 * 60 * 60*24)),
        hours: Math.floor(difference / (1000 * 60 * 60)%24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
if(timeLeft.seconds===9 && timeLeft.days===0 && timeLeft.hours===0 && timeLeft.minutes===0 ) { history.replace("/ten"); console.log("ten"); }
     else if (timeLeft.seconds===0 && timeLeft.days===0 && timeLeft.hours===0 && timeLeft.minutes===0 ){ history.replace('/fin')}
    }

    return timeLeft;

  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
    return ( 
    <div>
        <div className="bg-[#1C3879] min-h-screen flex flex-col justify-between">
        <div className="flex justify-center w-full ">
            <img src={vect2} alt="vect1 " className="w-[25%] h-[250px]" />
            <img src={Y2} alt="vect1 " className="w-[50%] h-[150px] self-center" />
            <img src={vect2} alt="vect1 " className="w-[25%] h-[250px]" />
        </div> 
        <div className="flex justify-around items-center rounded-full  p-5 w-[80%] mx-auto ">
         <div className="rounded-full bg-[#607EAA] flex flex-col justify-center border-2 border-[#000]   p-3">
                <h3 className="text-center lg:text-[62px] md:text-[52px] sm:text-[42px] text-[32px] text-[#1C3879] lg:px-8 md:px-6 sm:px-4  px-2 drop-shadow-lg font-black ">{timeLeft.days}</h3>
                <h3 className="text-center lg:text-[48px] md:text-[38px] sm:text-[28px] text-[18px] md:px-8 sm:px-6  px-4 text-[#FFFFFF] ">Days</h3>
            </div> 
            <div className="rounded-full bg-[#607EAA] flex flex-col justify-center border-2  border-[#000]    p-3">
                <h3 className="text-center lg:text-[62px] md:text-[52px] sm:text-[42px] text-[32px] lg:px-8 md:px-6 sm:px-4  px-2 text-[#1C3879] drop-shadow-lg font-black ">{timeLeft.hours}</h3>
                <h3 className="text-center lg:text-[48px] md:text-[38px] sm:text-[28px] text-[18px] sm:px-4 px-3 text-[#FFFFFF] ">Hours</h3>
            </div>
             <div className="rounded-full bg-[#607EAA] flex flex-col justify-center border-2 border-[#000]      p-3">
                <h3 className="text-center lg:text-[62px] md:text-[52px] sm:text-[42px] text-[32px] lg:px-8 md:px-6 sm:px-4  px-2 drop-shadow-lg text-[#1C3879] font-black ">{timeLeft.minutes}</h3>
                <h3 className="text-center lg:text-[48px] md:text-[38px] sm:text-[28px] text-[18px]  md:px-8 sm:px-6  px-4 text-[#FFFFFF] ">Mins</h3>
            </div>
            <div className="rounded-full shadow-lg bg-[#607EAA]  flex flex-col justify-center border-2 border-[#000]   order-[#1C3879]  p-3">
                <h3 className="text-center lg:text-[62px] md:text-[52px] sm:text-[42px] text-[32px] lg:px-8 md:px-6 sm:px-4  px-2 text-[#1C3879] drop-shadow-lg font-black ">{timeLeft.seconds}</h3>
                <h3 className="text-center lg:text-[48px] md:text-[38px] sm:text-[28px] text-[18px] lg:px-12 md:px-10 sm:px-8 px-6 text-[#FFFFFF] ">Sec</h3>
            </div> 
        </div>

        <div className="flex justify-between w-full">
            <img src={vect2} alt="vect1 "  className="w-[25%] h-[250px]" />
            <img src={vect1} alt="vect2 " className="w-[25%] h-[150px] self-center" />
            <img src={vect2} alt="vect1 "  className="w-[25%] h-[250px]" />
        </div> 
      </div> 
      </div> );
}
 
export default Year;
