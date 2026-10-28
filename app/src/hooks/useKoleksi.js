import {useEffect, useState} from "react";

const KUNCI_STORAAGE = 'uts-paw:k7'

export async function muatKoleksiK7() {
    const respons = await fetch('${import.meta.env.BASE_URL}data/koleksi.json')
    if (!respons.ok) {
        throw new Error('Gagal memuat koleksi')
    }
    return respons.json()
}

export default function useKoleksi() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function ambilKoleksi() {
            try {
                const dataLokal = localStorage.getItem(KUNCI_STORAAGE)
                if (dataLokal) {
                    setItems(JSON.parse(dataLokal))
                    setLoading(false)
                    return
                }

                const dataAwal = await muatKoleksiK7()
                localStorage.setItem(KUNCI_STORAAGE, JSON.stringify(dataAwal))

                setItems(dataAwal)
            }
            catch (error) {
                console.error('Terjadi kesalahan saat memuat koleksi:', error)
                setItems([])
            }
            finally {
                setLoading(false)
            }
        }
        ambilKoleksi()
    })
    return { items, loading }
}
