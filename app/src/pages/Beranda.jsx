import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import mahasiswa from "../../mahasiswa.json";
import PesanStatus from "../components/PesanStatus.jsx";
import "./Beranda.css";

export default function Beranda() {
  const { items, loading, error } = useKoleksi();
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section id="beranda-page">
      <div className="beranda-hero">
        <h1 id="beranda-title">Kuliner Sekitar Kampus</h1>

        <p>Temukan tempat makan yang berada di sekitar kampus.</p>

        <Link className="beranda-link" to="/koleksi">
          Lihat semua kuliner
        </Link>
      </div>

      <p className="beranda-theme">Tema: {mahasiswa.tema}</p>

      <div className="beranda-status">
        <PesanStatus loading={loading} error={error} />
      </div>

      {!loading && !error && (
        <div className="beranda-summary">
          <div className="beranda-summary-card">
            <strong>{items.length}</strong>
            <span>Total kuliner</span>
          </div>

          <div className="beranda-summary-card">
            <strong>{jumlahKategori}</strong>
            <span>Jumlah kategori</span>
          </div>
        </div>
      )}
    </section>
  );
}
