import { useEffect, useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';

const messages = [
  'Andrew Chuang Saladin created a repository "new project".',
  'Jack Detweiler created a new branch "md/Animations".',
  'Theo Weise created a pull request "PR 1".',
  'Jack Harris deployed the project to vercel.',
];

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 1.1,
    }
  }
};

const messageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.1
    }
  },
  exit: { 
    opacity: 0, 
    transition: {
      duration: 0.8
    }
  }
};

export default function Terminal() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKey(prev => prev + 1);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-44 w-full overflow-hidden rounded-md rounded-b-none border border-b-0 border-gray mt-6">
      <div className="flex w-full items-center gap-2 bg-off-white px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red" />
        <div className="h-2 w-2 rounded-full bg-yellow" />
        <div className="h-2 w-2 rounded-full bg-green" />
      </div>
      
      <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={key}
          className="p-3"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              variants={messageVariants}
              className="py-1 text-[11px] font-light tracking-wider text-dull"
            >
              {msg}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
