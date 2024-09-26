import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.25;

const FlipLink = ({ children, className}) => {
    return (
      <motion.p
        initial="initial"
        whileHover="hovered"
        animate='hovered'
        className={` relative overflow-hidden whitespace-nowrap text-4xl  uppercase ${className && className} `}
        style={{lineHeight:0.95}}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              className=" inline-block"
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className=" absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              className=" inline-block"
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.p>
    );
  };
  
  export default FlipLink;