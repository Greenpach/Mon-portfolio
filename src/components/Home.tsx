import { Mail } from "lucide-react";
import img from "../assets/Img.png";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour ,<br />
          Je suis <span className="text-accent"> Traore issiaka</span>
        </h1>

        <p className="my-4 text-md text-center md:text-left">
          Je suis un développeur fullstack passionné,<br />
          doté de compétences polyvalentes couvrant de nombreux domaines. <br />
          Je m’épanouis dans la résolution de défis complexes sur différentes plateformes <br />
          et environnements, en m’adaptant rapidement aux nouvelles technologies et méthodologies.
          Mon approche holistique allie expertise technique et créativité, <br />
          me permettant de concevoir des solutions à la fois innovantes et pratiques. <br />
          Je suis animé par l’apprentissage continu et la recherche de l’excellence, <br />
          que ce soit en travaillant de manière autonome ou en collaboration avec des équipes diversifiées pour créer
          des applications performantes et évolutives.
        </p>

        <a
          href="mailto:tishaka74@gmail.com"
          className=" btn btn-accent md:w-fit"
        >
          <Mail className="w-5 h-5  " />
          Contactez Moi
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt=""
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
