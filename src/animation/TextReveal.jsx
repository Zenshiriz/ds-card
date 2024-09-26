import React from "react";
import splitStringUsingRegex from "./utils/SplitRegex";
import { motion } from "framer-motion";

const TextReveal = ({title, para}) => {
  const heading = title
  const text = para
   

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const headingChars = splitStringUsingRegex(heading);
  const textChars = splitStringUsingRegex(text);
  return (
    <>
      {title && <motion.h1 transition={{ staggerChildren: 0.15}}>
        {headingChars.map((char) => (
          <motion.div
            key={char}
            variants={charVariants}
            initial="hidden"
            whileInView="reveal"
            className=" inline-block"
            transition={{ duration: 0.5 }}
          >
            {char}
          </motion.div>
        ))}
      </motion.h1>}
     {para && <motion.p transition={{ staggerChildren: 0.02 }}>
        {textChars.map((char) => (
          <motion.span
            key={char}
            variants={charVariants}
            initial="hidden"
            whileInView="reveal"
            transition={{ duration: 0.35 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>}
    </>
  );
};

export default TextReveal;
