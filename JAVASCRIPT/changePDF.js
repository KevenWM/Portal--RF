
function searchPDF() {
    const pdfNameInput = document.getElementById('fruitInput');
    const pdfViewer = document.getElementById('pdfViewer');
    const audio = document.getElementById('tese-audio');


    const pdfName = pdfNameInput.value.trim(); // Trim whitespace from input value
    if (pdfName !== '') { // Check that input value is not empty
        const pdfPath = `../PDF/${pdfName}.pdf`;
        const audioPath = `../AUDIO/${pdfName}.m4a`;
        pdfViewer.src = pdfPath;
        audio.src = audioPath;
    }
}





