import { Link, useNavigate, useParams } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items, loading, hapus } = useKoleksi();
  const item = items.find((i) => String(i.id) === id);

  if (loading) return <p>Memuat data...</p>;
  if (!item) {
    return (
      <section id="detail-page" className="detail-not-found">
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    );
  }

  function konfirmasiHapus() {
    const yakin = window.confirm(`Hapus "${item.judul}"?`);

    if (yakin) {
      hapus(item.id);
      navigate("/koleksi");
    }
  }

  return (
    <section id="detail-page">
      <article className="detail-card">
        <p className="detail-category">{item.kategori}</p>
        <h1 id="detail-title">{item.judul}</h1>
        <dl className="detail-list">
          <dt>Kategori</dt>
          <dd>{item.kategori}</dd>
          <dt>Alamat</dt>
          <dd>{item.alamat}</dd>
          <dt>Harga Rata-rata (Rp)</dt>
          <dd>{item.hargaRataRata}</dd>
          <dt>Jam Buka</dt>
          <dd>{item.jamBuka}</dd>
        </dl>

        <div className="detail-actions">
          <button
            className="detail-button danger"
            type="button"
            onClick={konfirmasiHapus}
          >
            Hapus
          </button>
          <Link className="detail-button" to="/koleksi">
            Kembali
          </Link>
        </div>
      </article>
    </section>
  );
}
