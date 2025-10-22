import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export function useProperties() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        async function run() {
            try {
                setStatus("loading");
                const res = await fetch(`${API_BASE}/api/properties`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                if (!cancelled) {
                    setData(Array.isArray(json) ? json : []);
                    setStatus("success");
                }
            } catch (e) {
                if (!cancelled) {
                    setError(e);
                    setStatus("error");
                }
            }
        }
        run();
        return () => { cancelled = true; };
    }, []);

    return { data, status, error };
}