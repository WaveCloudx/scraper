require("./config")

async function npmstalk(query) {
    try {
        const response = await fetchJson(urlApi+`/npmstalk?query=${encodeURIComponent(query)}`);

        if (!response) {
            throw new Error(`HTTP Error: ${response}`);
        }

        const data = await response
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error dalam mendapatkan data dari API npmjs',
        };
    }
}

module.exports = {
  npmstalk
}
