import Banner from "../components/Banner";
import PropertiesGrid from "../components/PropertiesGrid";
import { useProperties } from "../hooks/useProperties";

import bannerImg from "../../img/Image_source_1.png";

export default function Home() {
  const { data, status, error } = useProperties();

  return (
    <main className="home k-main">
      <Banner
        image={bannerImg}
        title="Chez vous, partout et ailleurs"
      />

      {status === "loading" && <p aria-live="polite">Chargement…</p>}
      {status === "error" && (
        <p role="alert">
          Impossible de charger les propriétés {String(error?.message || "")}
        </p>
      )}
      {status === "success" && (
        <PropertiesGrid
          items={data}
          onSelect={(p) => {}}
        />
      )}
    </main>
  );
}