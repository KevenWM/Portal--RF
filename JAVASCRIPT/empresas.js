// Fetch the CSV file

fetch('https://github.com/KevenWM/Portal--RF.git/EXCEL/empresas.csv', { headers: { 'Content-Type': 'text/csv; charset=ISO-8859-1' } })//http://127.0.0.1:5500/EXCEL/empresas.csv--
    .then(response => response.text())
    .then(data => {
        // Split the CSV data by lines and remove the header row
        const rows = data.split('\n').slice(1);

        // Get the names from the first column of the CSV
        const names = rows.map(row => row.split(',')[0]);

        // Populate the selector with the names
        const nameList = document.getElementById('companysList');
        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.text = name;
            nameList.appendChild(option);
        });
    });


function filterCompanys() {
    const input = document.getElementById('companysSearch');
    const filter = input.value.toUpperCase();
    const fruitList = document.getElementById('companysList');
    const options = fruitList.options;

    // loop through all options to hide/show them based on the search query
    for (let i = 0; i < options.length; i++) {
        const text = options[i].text.toUpperCase();
        if (text.indexOf(filter) > -1) {
            options[i].style.display = 'block';
        } else {
            options[i].style.display = 'none';
        }
    }

    // find the first visible option and select it
    for (let i = 0; i < options.length; i++) {
        if (options[i].style.display !== 'none') {
            fruitList.selectedIndex = i;
            break;
        }
    }
}