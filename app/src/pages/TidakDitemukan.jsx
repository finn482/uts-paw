import { Link } from "react-router-dom";
import "./TidakDitemukan.css";

export default function TidakDitemukan() {
  return (
    <section id="not-found-page">
      <div className="not-found-card">
        <h1 className="not-found-title">404</h1>
        <p>Halaman tidak ditemukan.</p>
        <Link className="not-found-link" to="/">
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
