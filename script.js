const categoryButtons = document.querySelectorAll('.category-nav button');
const resourceItems = document.querySelectorAll('.resource-item');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');

        resourceItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});