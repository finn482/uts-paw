import { useState } from "react";
import { Link } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";

export default function Koleksi() {
    const { items, loading } = useKoleksi();
    const [kataKunci, setKataKunci] = useState("");

    const hasilPencarian = items.filter((item) =>
        item.judul.toLowerCase().includes(kataKunci.toLowerCase())
    );

    return (
        <section>
            <h1>Daftar Kuliner</h1>

            <label htmlFor="Pencarian">Cari berdasarkan judul</label>
            <input
                id="Pencarian"
                type="search"
                value={kataKunci}
                onChange={(event) => setKataKunci(event.target.value)}
                placeholder="Cari kuliner..."
            />

            {loading && <p>Memuat data...</p>}
            {!loading && hasilPencarian.length === 0 && (
                <p>Tidak ada kuliner yang ditemukan</p>
            )}

            <ul>
                {hasilPencarian.map((item) => (
                    <li key={item.id}>
                        <h2>{item.judul}</h2>
                        <p>Kategori: {item.kategori}</p>
                        <Link to={`/koleksi/${item.id}`}>Lihat detail</Link>
                    </li>
                ))}
            </ul>

            <Link to="/">Kembali ke beranda</Link>
        </section>
    )
}