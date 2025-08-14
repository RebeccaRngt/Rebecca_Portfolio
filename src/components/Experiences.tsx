import Title from "./Title"
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer } from "../utils/motion";

import imgCSS from "../assets/techno/css.png";
import imgHTML from "../assets/techno/html.png";
import imgDAVINCI from "../assets/techno/DaVinci.png";
import imgOBS from "../assets/techno/obs.png";
import imgSQL from "../assets/techno/sql.png";
import imgJAVA from "../assets/techno/java.png";
import imgC from "../assets/techno/c.png";
import imgPYTHON from "../assets/techno/python.png";
import imgBASH from "../assets/techno/bash.png";
import imgDJANGO from "../assets/techno/django.png";
import imgRESEAUX from "../assets/techno/reseaux.png";




import aida from "../assets/companies/aida.png";
import sofrecom from "../assets/companies/sofrecom.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "DaVinci", image: imgDAVINCI },
    { id: 4, name: "OBS", image: imgOBS },
    { id: 5, name: "SQL", image: imgSQL },
    { id: 6, name: "Java", image: imgJAVA },
    { id: 7, name: "C", image: imgC },
    { id: 8, name: "Python", image: imgPYTHON },
    { id: 9, name: "Bash", image: imgBASH },
    { id: 10, name: "Django", image: imgDJANGO },
    { id: 11, name: "Réseaux", image: imgRESEAUX },
];


const experiences = [
    {
        id: 1,
        role: "Ingénieur réseau et sécurité IP",
        company: "Sofrecom (Orange)",
        period: "Sep 2024 - Présent",
        description: [
            "Gestion des infrastructures bureautiques, réseaux IP et cybersécurité.",
            "Réalisation de microprojets, analyses, déploiements et initiatives Green IT.",
        ],
        image: sofrecom,
    },
    {
        id: 2,
        role: "Bénévole",
        company: "Association Aïda",
        period: "Jan 2021 - Présent",
        description: [
            "Participation à la vie associative",
            "Conception et organisation d’activités pour les jeunes hospitalisés",
        ],
        image: aida,
    },
];

const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Mes Expériences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <motion.div 
                    className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0"
                    variants={staggerContainer(0.08, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill) => (
                        <motion.div key={skill.id} className="flex justify-center items-center flex-col"
                            variants={fadeInLeft}
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="md:ml-4 flex flex-col space-y-4"
                    variants={staggerContainer(0.12, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {experiences.map((expericence) => (
                        <motion.div
                        key={expericence.id}
                        className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        variants={fadeInRight}
                        whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center">
                                <img 
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role}, {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>

                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Experiences