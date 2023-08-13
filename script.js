const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantityValue = document.querySelector('.quantity-value');
const priceValue = document.querySelector('.price');
const totalValue = document.querySelector('.total-price');
const removeBtn = document.querySelector('.remove');
const likeBtn = document.querySelector('.like');

let quantity = parseInt(quantityValue.textContent);
let price = parseInt(priceValue.textContent);

decreaseBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityValue.textContent = quantity;
    updateTotal();
  }
});

increaseBtn.addEventListener('click', () => {
  quantity++;
  quantityValue.textContent = quantity;
  updateTotal();
});

removeBtn.addEventListener('click', () => {
  const item = removeBtn.closest('.item');
  item.remove();
  updateTotal();
});

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('liked');
});

function updateTotal() {
  totalValue.textContent = quantity * price;
}
