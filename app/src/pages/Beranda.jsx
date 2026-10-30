import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import mahasiswa from "../../mahasiswa.json";
import PesanStatus from "../components/PesanStatus.jsx";

export default function Beranda() {
  const { items, loading, error } = useKoleksi();
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size;

  return (
    <section>
      <h1>Kuliner Sekitar Kampus</h1>
      <p>Tema: {mahasiswa.tema}</p>
      <PesanStatus loading={loading} error={error} />
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : !error ? (
        <p>
          Ada {items.length} kuliner dalam {jumlahKategori} kategori.
        </p>
      ) : null}

      <Link to="/koleksi">Lihat semua kuliner</Link>
    </section>
  );
}
