function search() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const category = item.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || category.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById('search-input').addEventListener('input', search);

