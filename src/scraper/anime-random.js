require("./config")

async function randomAnime() {
    try {
        const response = await fetchJson(urlApi+`/random-anime`);

        if (!response) {
            throw new Error(`HTTP Error: ${response}`);
        }

        const data = await response
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error dalam mendapatkan data dari API ttSearch',
        };
    }
}

module.exports = {
    randomAnime
}