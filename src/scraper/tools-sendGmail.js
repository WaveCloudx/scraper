require("./config")

async function kirimGmail(penerima, subject, teks) {
    try {
        const response = await fetchJson(urlApi+`/send-email?penerima=${encodeURIComponent(penerime)}&subject=${encodeURIComponent(subject)}&text=${encodeURIComponent(teks)}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;  // Mengembalikan JSON langsung tanpa modifikasi
    } catch (error) {
        console.error('Error:', error.message);
        return {
            error: 'Error saat mengirim gmail',
        };
    }
}

module.exports = {
  kirimGmail
}
