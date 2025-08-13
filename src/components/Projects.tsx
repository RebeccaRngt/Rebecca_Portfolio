import Title from "./Title"

import Tinter from '../assets/projects/tinter.png';
import PeakINT from '../assets/projects/PeakINT.png';

import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'TINTer',
        description: 'Il faut que je mette une description',
        technologies: ['Django', 'Docker'],
        demoLink: '#',
        repoLink: '#',
        image: Tinter,
    },
    {
        id: 1,
        title: 'PeakINT',
        description: 'Il faut que je mette une description',
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
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
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
                                <span className="badge badge-accent badge-sm">
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects