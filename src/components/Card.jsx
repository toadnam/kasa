import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card">
            {cover && <img className="card_img" src={cover} alt={title} />}
            <div className="card_title">{title}</div>
        </Link>
    );
}

Card.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,
};