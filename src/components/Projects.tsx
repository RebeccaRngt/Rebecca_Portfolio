import Title from "./Title"
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motion";

import Tinter from '../assets/projects/tinter.png';
import PeakINT from '../assets/projects/PeakINT.png';

import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'T’INTer',
        description: 'T’INTer est une plateforme web conçue pour renforcer les liens entre les étudiants au sein de leur campus en facilitant les connexions autour de leurs besoins académiques et de leurs centres d’intérêt personnels.',
        technologies: ['Django', 'Docker'],
        demoLink: '#',
        repoLink: '#',
        image: Tinter,
    },
    {
        id: 1,
        title: 'PeakINT',
        description: 'PeakINT est une plateforme web dédiée à la gestion complète d’une salle de sport. Elle permet de planifier les cours, gérer les réservations et centraliser les informations des membres, le tout via une interface simple et intuitive.',
        technologies: ['Django'],
        demoLink: '#',
        repoLink: '#',
        image: PeakINT,
    },
];


const Projects = () => {
    return (
        <div id="Projects" className="mt-10">
            <Title title="Mes Projets"/>
            <motion.div className="grid md:grid-cols-3 gap-4"
                variants={staggerContainer(0.12, 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map((project) => (
                    <motion.div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                        variants={fadeInUp}
                    >
                        <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full round-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4"/>
                            </a>
                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4"/>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects