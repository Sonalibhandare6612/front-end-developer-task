
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            boxes.forEach(b => {
                if (b !== box) {
                    b.classList.remove('expanded');
                }
            });

            this.classList.toggle('expanded');
        });
    });
});



//
// JavaScript code for adding product to cart and displaying discount
document.getElementById('addToCart').addEventListener('click', function () {
    const selectedColor = document.getElementById('color').value;
    const selectedSize = document.getElementById('size').value;
    const product = {
        name: 'Product Name',
        price: 50,
        color: selectedColor,
        size: selectedSize
    };

    // Simulating adding the product to the cart
    addToCart(product);
});

function addToCart(product) {
    // Logic to add the product to the cart goes here
    console.log('Added to cart:', product);
}

// Displaying discount
const originalPrice = 50;
const discount = 50; // 50% off

const discountedPrice = originalPrice * (discount / 100);
document.getElementById('discount').textContent = `($${discountedPrice} with 50% off)`;




function expandBox(box) {
    box.classList.toggle('expandedis');
    const content = box.querySelector('.content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}  
