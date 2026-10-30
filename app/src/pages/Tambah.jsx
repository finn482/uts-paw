import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useKoleksi from "../hooks/useKoleksi.js";
import FieldInput from "../components/FieldInput.jsx";
import "./Tambah.css";

const AWAL = {
  judul: "",
  kategori: "Nasi",
  alamat: "",
  hargaRataRata: "",
  jamBuka: "",
};

export default function Tambah() {
  const { tambah } = useKoleksi();
  const navigate = useNavigate();
  const [form, setForm] = useState(AWAL);
  const [galat, setGalat] = useState("");

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const simpan = (e) => {
    e.preventDefault();
    if (form.judul.trim().length < 3) {
      setGalat("Judul wajib diisi");
      return;
    }
    tambah({ ...form, judul: form.judul.trim() });
    navigate("/koleksi");
  };

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Kuliner</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        name="kategori"
        value={form.kategori}
        onChange={ubah}
      >
        <option>Nasi</option>
        <option>Ayam</option>
        <option>Minuman</option>
        <option>Mi</option>
      </select>

      <FieldInput
        id="alamat"
        label="Alamat"
        value={form.alamat}
        onChange={ubah}
      />

      <FieldInput
        id="hargaRataRata"
        label="Harga Rata-Rata"
        type="number"
        value={form.hargaRataRata}
        onChange={ubah}
      />

      <FieldInput
        id="jamBuka"
        label="Jam Buka"
        value={form.jamBuka}
        onChange={ubah}
      />

      <button type="submit">Simpan</button>
    </form>
  );
}
