import Title from "./Title"
import cv from '../assets/cv.png'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer } from "../utils/motion";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos de moi"/>
            <div className="md:h-screen flex justify-center items-center">
                <motion.div
                    className="hidden md:block"
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <img src={cv} alt="" className="w-96 object-cover round-xl"
                    />
                </motion.div>
                <motion.div
                    className="md:ml-4 space-y-4"
                    variants={staggerContainer(0.12, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {aboutSections.map((section) => (
                        <motion.div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                            variants={fadeInRight}
                        >
                            <div className="md-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="test-x1 font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </motion.div>

                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default About