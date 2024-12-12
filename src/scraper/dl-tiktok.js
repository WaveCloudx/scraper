require("./config")

async function tiktokdl(url) {
    try {
        const response = await fetchJson(urlApi+`/ttdl?url=${encodeURIComponent(url)}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error dalam mendapatkan data dari API tiktokdl',
        };
    }
}

module.exports = {
  tiktokdl
}
