import mahasiswa from "../../mahasiswa.json";
import "./Tentang.css";

const REPO = "https://github.com/finn482/uts-paw";

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa;

  return (
    <section id="tentang-page">
      <div className="tentang-card">
        <h1>Tentang</h1>

        <dl className="tentang-info">
          <dt>Nama</dt>
          <dd>{nama}</dd>

          <dt>NIM</dt>
          <dd>{nim}</dd>

          <dt>Kelas</dt>
          <dd>{kelas}</dd>

          <dt>Tema</dt>
          <dd>{tema}</dd>
        </dl>

        <p>
          Kode sumber:{" "}
          <a className="tentang-link" href={REPO}>
            {REPO}
          </a>
        </p>
      </div>
    </section>
  );
}
