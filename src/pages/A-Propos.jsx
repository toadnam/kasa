import Banner from "../components/Banner";
import bannerImg from "../../img/Image_source_2.png";
import Collapse from "../components/Collapse";


const SECTIONS = [
  {
    title: "Fiabilité",
    text:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. " +
      "Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title: "Respect",
    text:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. " +
      "Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Service",
    text:
      "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, " +
      "que ce soit avec nos hôtes ou nos locataires,soit empreinte de respect et de bienveillance."
  },
  {
    title: "Sécurité",
    text:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement " +
      "correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au " +
      "locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons " +
      "également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

export default function APropos() {
  return (
    <main className="k-main home" aria-labelledby="apropos-title">
      
            <Banner image={bannerImg} title="" />

      <div className="apropos__list">
        {SECTIONS.map(({ title, text }) => (
          <Collapse key={title} title={title}>
            <p>{text}</p>
          </Collapse>
        ))}
      </div>
    </main>
  );
}