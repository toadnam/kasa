import { useMemo, useState, useCallback, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import { useProperties } from "../hooks/useProperties";

import starActive from "../../img/star-active.png";
import starInactive from "../../img/star-inactive.png";
import arrowPrev from "../../img/arrow_back_ios-24px.png";
import arrowNext from "../../img/arrow_forward_ios-24px.png";


function TagList({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <ul className="tags" aria-label="Mots-clés">
      {tags.map(t => (
        <li className="tag" key={t}>{t}</li>
      ))}
    </ul>
  );
}

function RatingStars({ value = 0 }) {
  const max = 5;
  const rating = Math.max(0, Math.min(max, Number(value) || 0));
  return (
    <div className="rating" aria-label={`Note ${rating} sur ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <img
          key={i}
          src={i < rating ? starActive : starInactive}
          alt={i < rating ? "Étoile pleine" : "Étoile vide"}
          className="rating__star"
        />
      ))}
    </div>
  );
}

function HostCard({ host }) {
  if (!host) return null;
  const [first, ...rest] = (host.name || "").split(" ");
  return (
    <div className="host">
      <div className="host__name">
        <span>{first}</span> {rest.join(" ")}
      </div>
      {host.picture && (
        <img
          className="host__avatar"
          src={host.picture}
          alt={`Photo de ${host.name}`}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function Logement() {
  const { id } = useParams();
  const { data, status, error } = useProperties();

  // trouver le logement demandé
  const item = useMemo(() => (data || []).find(p => String(p.id) === String(id)), [data, id]);

  // forcer affichage Ville,Region
  const locationRaw = item?.location ?? "";
  const niceLocation = useMemo(() => {
    const [region, city] = String(locationRaw).split(" - ").map(s => s.trim());
    return (city && region) ? `${city}, ${region}` : String(locationRaw);
  }, [locationRaw]);

  // carroussel
  const pictures = item?.pictures ?? [];
  const [idx, setIdx] = useState(0);
  const hasMany = pictures.length > 1;

  useEffect(() => { setIdx(0); }, [id, pictures.length]); //pour remettre à zéro si on change de logement 

  const goNext = useCallback(() => {
    if (!hasMany) return;
    setIdx(i => (i + 1) % pictures.length);
  }, [hasMany, pictures.length]);

  const goPrev = useCallback(() => {
    if (!hasMany) return;
    setIdx(i => (i - 1 + pictures.length) % pictures.length);
  }, [hasMany, pictures.length]);

  if (status === "loading") {
    return <main className="k-main home"><p aria-live="polite">Chargement…</p></main>;
  }

  if (status === "error") {
    return (
      <main className="k-main home">
        <p role="alert">Impossible de récupérer le logement. {String(error?.message || "")}</p>
      </main>
    );
  }

  if (status === "success" && !item) {
    return <Navigate to="/404" replace />;
  }

  if (!item) return null;

  const {
    title,
    tags,
    rating,
    host,
    description,
    equipments = [],
  } = item;

  return (
    <main className="k-main home logement" aria-labelledby="logement-title">

      <div
        className="gallery"
        role="region"
        aria-label={`Galerie de ${title}`}
        onKeyDown={(e) => { if (e.key === "ArrowRight") goNext(); if (e.key === "ArrowLeft") goPrev(); }}
        tabIndex={0}
      >
        {pictures[idx] && (
          <img className="gallery__img" src={pictures[idx]} alt={`${title} – photo ${idx + 1}`} />
        )}

        {hasMany && (
          <>
            <button
              className="gallery__btn gallery__btn--prev"
              onClick={goPrev}
              aria-label="Image précédente"
            >
              <img src={arrowPrev} alt="" className="gallery__arrow" />
            </button>

            <button
              className="gallery__btn gallery__btn--next"
              onClick={goNext}
              aria-label="Image suivante"
            >
              <img src={arrowNext} alt="" className="gallery__arrow" />
            </button>

            <div className="gallery__count" aria-live="polite">
              {idx + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>

      <header className="lodg-header">
        <div className="lodg-header__left">
          <h2 className="lodg-title">{title}</h2>
          <p className="lodg-location">{niceLocation}</p>
          <TagList tags={tags} />
        </div>

        <div className="lodg-header__right">
          <HostCard host={host} />
          <RatingStars value={rating} />
        </div>
      </header>

      <section className="lodg-collapses">
        <Collapse title="Description" defaultOpen={false}>
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements" defaultOpen={false}>
          <ul className="equip">
            {equipments.map(eq => <li key={eq}>{eq}</li>)}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

