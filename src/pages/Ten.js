
import { useState ,useEffect } from "react";
import { useHistory} from 'react-router-dom';


   
const Ten = () => {
    let history = useHistory();
  

    const calculateTimeLeft = () => {
      const difference = +new Date("2022-12-31T19:50:59+00:00") - +new Date();
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
        <div className="bg-[#1C3879] min-h-screen flex flex-col justify-center">
          <div className="flex justify-around items-center rounded-full  p-5 w-[80%] mx-auto ">
          <div className="rounded-full shadow-lg bg-[#607EAA]  flex flex-col justify-center border-2 border-[#000]   order-[#1C3879]  p-8">
                <h3 className="text-center lg:text-[90px] md:text-[80px] sm:text-[70px] text-[60px] lg:px-10 md:px-8 sm:px-6  px-4 text-[#1C3879] drop-shadow-lg font-black ">{timeLeft.seconds}</h3>
            </div> 
          </div>
          </div>
        </div> );
}
 
export default Ten;