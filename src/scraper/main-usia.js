require("./config")

async function hitungUsia(teks) {
    try {
        const response = await fetchJson(urlApi+`/usia?query=${encodeURIComponent(teks)}`);

        if (!response) {
            throw new Error(`HTTP Error: ${response}`);
        }

        const data = await response
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error dalam mendapatkan data dari API Usia',
        };
    }
}

module.exports = {
  hitungUsia
}
