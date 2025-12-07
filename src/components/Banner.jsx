export default function Banner({ image, title }) {
    return (
        <section className="home-banner" aria-label="bannière">
            <img className="home-banner_img" src={image} alt="" />
            <div className="home-banner_overlay">
                <h1>{title}</h1>
            </div>
        </section>
    );
}