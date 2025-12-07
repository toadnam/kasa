import Card from "./Card";

export default function PropertiesGrid({ items = [], onSelect }) {
    return (
        <section className="home-gallery">
            <div className="home-gallery_grid">
                {items.map((p) => (
                    <Card
                        key={p.id}
                        id={p.id}
                        title={p.title}
                        cover={p.cover || p.pictures?.[0] || ""}
                        onClick={() => onSelect?.(p)}
                    />
                ))}
            </div>
        </section>
    );
}