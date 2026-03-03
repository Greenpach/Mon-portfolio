import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgLaravel from "../assets/techno/laravel.png";
import imgNODE from "../assets/techno/node-js.png";
import imgPHP from "../assets/techno/php.png";
import imgTAILWIND from "../assets/techno/tailwind.png";

import mandigo from "../assets/companies/Mandigo.jpg";
import atech from "../assets/companies/ahmed-tech-logo.jpg";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "PHP", image: imgPHP },
    { id: 8, name: "Laravel", image: imgLaravel },
];


const experiences = [
    {
        id: 1,
        role: "Fullstack Developer",
        company: "Mandigo",
        period: "Jan 2021 - Août 2021",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une application de Gestion de scolarite.",
        ],
        image: mandigo,
    },
    {
        id: 2,
        role: "Technicien Informatique & Maintenance",
        company: "Ahmed Technologies",
        period: "Juin 2025 - en cours",
        description: [
            "Gestion et maintenance du parc informatique.",
            "Support technique et résolution d’incidents matériels et logiciels.",
            "Installation et configuration des postes et équipements réseau."
        ],
        image: atech,
    },
    
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
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
                                        {expericence.role} , {expericence.company}
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
