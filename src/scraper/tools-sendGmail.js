require("./config")

async function kirimGmail(penerima, subject, teks) {
    try {
        const response = await fetchJson(urlApi+`/send-email?penerima=${encodeURIComponent(penerima)}&subject=${encodeURIComponent(subject)}&text=${encodeURIComponent(teks)}`);

        const data = await response
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
