import bannerImg from '../../img/Image_source_1.png'

export default function Home() {
  return (

    <main className="home">

      {/* --- Section Bannière --- */}
      <section className="home-banner">
        <img
          src={bannerImg}
          alt="Paysage en arrière-plan"
          className="home-banner__img"
        />
        <div className="home-banner__overlay">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </section>

      {/* --- Section Galerie --- */}
      <section className="home-gallery">
        <div className="home-gallery__grid">
          {/* Cartes provisoires */}
          <article className="card">
            <div className="card__img"></div>
            <div className="card__title">Appartement 2 pièces avec vue sur la mer</div>
          </article>

          <article className="card">
            <div className="card__img"></div>
            <div className="card__title">Titre de la location</div>
          </article>

          <article className="card">
            <div className="card__img"></div>
            <div className="card__title">Titre de la location</div>
          </article>

          <article className="card">
            <div className="card__img"></div>
            <div className="card__title">Titre de la location</div>
          </article>

          <article className="card">
            <div className="card__img"></div>
            <div className="card__title">Titre de la location</div>
          </article>

          <article className="card">
            <div className="card__img"></div>
            <div className="card__title">Titre de la location</div>
          </article>
        </div>
      </section>

    </main>
  )
}