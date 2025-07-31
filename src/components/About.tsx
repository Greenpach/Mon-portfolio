import Title from "./Title"
import img from '../assets/Img.png'
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Developpeur Frontend",
    description: "Développeur frontend passionné avec une solide expérience dans la création d’interfaces web modernes, performantes et responsives",
    icon: <LetterText className="text-accent scale-150" />,
  },

  {
    id: 2,
    title: "Developpeur Backend",
    description: "Développeur backend maîtrisant les fondamentaux de la conception d’API, de la gestion des bases de données et de l’architecture serveur.",
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Passionné de l' UI/UX",
    description:
      "J’aime concevoir des interfaces utilisateurs à la fois esthétiques, intuitives et fonctionnelles, en mettant l’accent sur l’expérience et l’ergonomie",
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];
const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="md:h-screen flex justify-center items-center ">
                <div className="hidden md:block">
                    <img src={img} alt="" className=" w-96 object-cover rounded-xl"
                    />
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl  font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                </div>

            </div>
        </div>
    )
}

export default About
