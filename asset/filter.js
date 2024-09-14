const filterButtons = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        // Show all cards if 'all' is selected
        if (filterValue === 'all') {
            filterItems.forEach(item => {
                item.classList.remove('d-none');
            });
        } else {
            // Hide all cards and only show filtered cards
            filterItems.forEach(item => {
                if (item.classList.contains(filterValue)) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });
        }
    });
});

