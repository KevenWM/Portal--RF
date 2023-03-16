
function searchPDF() {
    const pdfNameInput = document.getElementById('fruitInput');
    const pdfViewer = document.getElementById('pdfViewer');


    const pdfName = pdfNameInput.value.trim(); // Trim whitespace from input value
    if (pdfName !== '') { // Check that input value is not empty
        const pdfPath = `../PDF/${pdfName}.pdf`;
        pdfViewer.src = pdfPath;
    }
}





