import PropTypes from "prop-types";

export default function Card({ id, title, cover, onClick }) {
    return (
        <article className="card" role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => { if (e.key === 'Enter') onClick?.(); }}>
            {cover ? <img className="card__img" src={cover} alt="" /> : null}
            <div className="card__title">{title}</div>
        </article>
    );
}

Card.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
    onClick: PropTypes.func
};