import { Mail } from "lucide-react";
import img from '../assets/img.jpg'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/motion";
import { createMailtoLink } from "../utils/mailto";
import { CONTACT_EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY } from "../config/contact";

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
            <motion.div
                className="flex flex-col"
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bienvenue, découvrez<br />
                    <span className="text-accent"> RINGUET Rebecca</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis une jeune étudiante en école d'ingénieur.
                    <br/>
                    Passionnée par la vidéo, dotée d’un esprit déterminé,
                    <br/>
                    d’une nature souriante et d’un goût prononcé pour la découverte.
                    <br/>
                </p>
                <a
                    href={createMailtoLink(CONTACT_EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY)}
                    className="btn btn-accent md:w-fit"
                >
                    <Mail className="w-5 h-5"/>
                    Contactez-moi
                </a>
            </motion.div>

            <motion.div
                className="md:ml-60"
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]"
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </motion.div>
        </div>
    )
}

export default Home;