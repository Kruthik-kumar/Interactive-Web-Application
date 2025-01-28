document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');

    const items = [
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew',
        'Ivy Gourd', 'Jackfruit', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya',
        'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 'Ugli Fruit', 'Vanilla Bean', 'Watermelon', 'Xigua',
        'Yellow Passion Fruit', 'Zucchini', 'Apricot', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cranberry', 'Dragon Fruit',
        'Guava', 'Lychee', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Rambutan'
    ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = '';

        const filteredItems = items.filter(item => item.toLowerCase().includes(query));

        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            resultsContainer.appendChild(li);
        });
    });
});