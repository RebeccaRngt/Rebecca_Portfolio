import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";

interface TitleProps {
    title : string
}

const Title = ({title} : TitleProps) => {
    return (
        <motion.h1 className="uppcase font-bold mb-5 text-center text-3xl"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            {title}
        </motion.h1>
    )
}

export default Title