export default function Banner({ image, title }) {
    return (
        <section className="home-banner" aria-label="bannière">
            <img className="home-banner__img" src={image} alt="" />
            <div className="home-banner__overlay">
                <h1>{title}</h1>
            </div>
        </section>
    );
}