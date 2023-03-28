import styles from "../style";
import { motion } from "framer-motion";
import { logo } from "../assets";

const Loading = ({isLoading}) => {
    return(
        <motion.div
            id="loading"
            className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
            initial={{ scale: 1.0, opacity: 0.25 }}
            animate={{ scale: 2.0, opacity: 0.75 }}
            transition={{
                yoyo: Infinity,
                duration: 1.0,
                ease: "easeIn",
            }}
          >
              <img
                src={logo}
                alt="Om Prakash"
                className="w-[103px] h-[54px]"
              />
          </motion.div>
        )
   
};

export default Loading;
