document.addEventListener('DOMContentLoaded', () => {

    fetch('http://127.0.0.1:5500/EXCEL/empresas.csv', { headers: { 'Content-Type': 'text/csv; charset=ISO-8859-1' } })
        .then(response => response.text())
        .then(data => {
            // Split the CSV data by lines and remove the header row
            const rows = data.split('\n').slice(1);

            // Get the names from the first column of the CSV
            const names = rows.map(row => row.split(',')[0]);


            console.log(names)


        });
});