require("./config")

async function stickersearch(teks) {
    try {
        const response = await fetchJson(urlApi+`/searchSticker?query=${encodeURIComponent(teks)}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error dalam mendapatkan data dari API sticker',
        };
    }
}

module.exports = {
  stickersearch
}
