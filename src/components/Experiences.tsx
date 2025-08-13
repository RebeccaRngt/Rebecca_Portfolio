import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgHTML from "../assets/techno/html.png";
import imgDAVINCI from "../assets/techno/DaVinci.png";
import imgOBS from "../assets/techno/obs.png";
import imgSQL from "../assets/techno/sql.png";
import imgJAVA from "../assets/techno/java.png";
import imgC from "../assets/techno/c.png";
import imgPYTHON from "../assets/techno/python.png";
import imgBASH from "../assets/techno/bash.png";




import aida from "../assets/companies/aida.png";
import sofrecom from "../assets/companies/sofrecom.png";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "DaVinci", image: imgDAVINCI },
    { id: 4, name: "OBS", image: imgOBS },
    { id: 5, name: "SQL", image: imgSQL },
    { id: 6, name: "JAVA", image: imgJAVA },
    { id: 7, name: "C", image: imgC },
    { id: 8, name: "PYTHON", image: imgPYTHON },
    { id: 9, name: "BASH", image: imgBASH },
];


const experiences = [
    {
        id: 1,
        role: "Ingénieur réseau et sécurité IP",
        company: "Sofrecom (Orange)",
        period: "Sep 2024 - Présent",
        description: [
            "Tache 1",
            "Tache 2",
        ],
        image: sofrecom,
    },
    {
        id: 2,
        role: "Bénévole",
        company: "Association Aïda",
        period: "Jan 2021 - Août 2022",
        description: [
            "Tâche 1",
            "Tâche 2",
        ],
        image: aida,
    },
];

const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Experiences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div 
                    className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                        key={expericence.id}
                        className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
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
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences