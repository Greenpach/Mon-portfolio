import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Gestionnaire de scolarité',
        description: 'Application web de gestion de scolarité développée en PHP avec une base de données relationnelle, intégrant JavaScript et jQuery pour une interaction dynamique côté client.Le système permet la gestion des élèves, des inscriptions, des paiements et du suivi académique via une interface administrateur sécurisée. Le projet inclut la manipulation des données en base (CRUD), la validation des formulaires, l’actualisation dynamique des contenus (AJAX) et l’organisation structurée du code côté serveur et client..',
        technologies: ['php', 'Html', 'Boostrap','javascript'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Plateforme Information sur les pays du monde',
        description: 'Application web développée pour consulter les informations détaillées des pays du monde à partir d’une API REST externe. Le projet implémente la récupération et la gestion asynchrone des données, l’affichage dynamique des informations (population, superficie, capitale, région, monnaie, etc.) ainsi qu’un système de recherche et de filtrage en temps réel.L’interface est conçue de manière responsive avec une architecture modulaire basée sur des composants réutilisables. Ce projet met en avant la gestion d’état, l’intégration d’API, l’optimisation des performances et l’organisation structurée du code.',
        technologies: ['React'],
        demoLink: 'https://pays-info.netlify.app/',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio interactif',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
   
   
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
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
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
