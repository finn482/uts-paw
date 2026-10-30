import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";
import App from "./App.jsx";
import KartuItem from "./components/KartuItem.jsx";

// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test("rute tidak dikenal menampilkan 404", () => {
  render(
    <MemoryRouter initialEntries={["/tidak-ada"]}>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
});

test("KartuItem menampilkan judul kuliner", () => {
  render(
    <MemoryRouter>
      <KartuItem
        item={{
          id: "uji-1",
          judul: "Warung Kuliner Uji",
          kategori: "Ayam",
          alamat: "Sekitar kampus",
          hargaRataRata: 10000,
          jamBuka: "10.00-21.00",
        }}
      />
    </MemoryRouter>,
  );
  expect(
    screen.getByRole("heading", { name: "Warung Kuliner Uji" }),
  ).toBeInTheDocument();
});
