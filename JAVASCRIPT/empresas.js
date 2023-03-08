function filterFruits() {
    const input = document.getElementById('fruitSearch');
    const filter = input.value.toUpperCase();
    const fruitList = document.getElementById('fruitList');
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