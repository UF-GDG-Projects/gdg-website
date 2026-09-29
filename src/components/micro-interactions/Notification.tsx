import { AnimatePresence, easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

const notifications = [
  { name: "Theo Weise", time: "5m ago" },
  { name: "Jack Detweiler", time: "10m ago" },
  { name: "Andrew Chuang Saladin", time: "15m ago" },
  { name: "Jack Harris", time: "20m ago" },
  { name: "Weedchenska Jeanbaptiste", time: "Just Now" },
];

export default function Notification() {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setValue((prevValue) => (prevValue + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center p-4 mt-16 ">
      <div className="mx-6 h-16 w-full rounded-xl border border-grayer bg-[#fafafa] shadow-sm" />
      <div className="absolute top-2 h-16 w-[calc(100%-40px)] rounded-xl border border-grayer bg-[#fafafa] shadow-sm" />

      <AnimatePresence>
        <AnimatedNotification key={value} name={notifications[value].name} time={notifications[value].time}/>
      </AnimatePresence>
    </div>
  );
}

type AnimatedNotificationProps = {
  name: string;
  time: string;
};

const AnimatedNotification: React.FC<AnimatedNotificationProps> = ({name,time}) => {
  return (
    <motion.div 
    initial={{x:30, opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration: 0.6, ease: easeOut}}
    className="absolute -top-2 sm:-top-4 flex h-[72px] sm:h-20 w-[calc(100%)] rounded-xl border border-grayer bg-[#fafafa] px-3 sm:px-5 py-3.5 shadow-sm">
      <div className="flex items-center">
        <figure className="flex aspect-square h-8 sm:h-10 items-center justify-center rounded-xl bg-blue text-lg sm:text-xl text-white">
          <FaLinkedinIn />
        </figure>
      </div>
      <div className="w-full pl-3 sm:pl-5">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm sm:text-base">New Notification</p>
          <p className="text-xs sm:text-sm font-light">{time}</p>
        </div>
        <p className="pt-1 sm:pt-0.5 text-xs sm:text-sm text-dull">
          {name} would like to connect<span className="hidden sm:inline"> with you</span>!
        </p>
      </div>
    </motion.div>
  );
};
