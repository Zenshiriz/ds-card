import { useEffect, useState } from "react";
import video from "./assets/video.mp4";
import Card from "./Card";
export default function App() {
  const [time, setTime] = useState("00 : 00 : 00")
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const   
 times = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
      setTime(times);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen max-h-screen relative">
      <video
        playsInline
        autoPlay
        muted
        loop
        className=" h-full w-full object-cover aspect-auto  filter brightness-50"
      >
        <source src={video} />
      </video>
      <div className="absolute top-0 left-0 bottom-0 right-0 w-full text-center">
        <h1  className=" uppercase text-white font-bold text-xl md:text-3xl mt-8 md:mt-14">web dev & designer</h1>
        <p className=" text-white text-3xl mt-4">{time}</p>
        <div className=" grid col-span-1 row-span-1  justify-items-center pt-10">
        <Card/>
        </div>
      </div>
    </div>
  );
}
