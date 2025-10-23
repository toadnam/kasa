import { useId, useState } from "react";
import PropTypes from "prop-types";

export default function Collapse({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const btnId = `${panelId}-btn`;

  return (
    <section className="collapse">
      <h3 className="collapse__heading">
        <button
          id={btnId}
          className="collapse__btn"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(o => !o)}
        >
          <span className="collapse__title">{title}</span>
          <svg
            className={`collapse__chevron ${open ? "is-open" : ""}`}
            width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"
          >
            <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`collapse__panel ${open ? "is-open" : ""}`}
      >
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool
};
