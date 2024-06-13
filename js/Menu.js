// Get the necessary elements
const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.card .checkOut .closeShopping');
const purchaseButton = document.querySelector('.card .checkOut .purchase');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

// Add click event listener to the "shopping" element
openShopping.addEventListener('click', () => {
  body.classList.add('active');
});

// Add click event listener to the "Close" button
closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
});

// Add click event listener to the "Purchase" button
purchaseButton.addEventListener('click', () => {
  handlePurchase();
});

let products = [
  {
     id: 1,
     name: 'Jollof rice',
     image: "Jollof.jpg",
     price: 1000
  },
  {
    id: 2,
    name: 'ACHU',
    image: "achu.jpg",
    price: 1500
 },
 {
  id: 3,
  name: 'Garri and Eru',
  image: 'garri and eru.jpg',
  price: 1500
},
{
  id: 4,
  name: 'NDOLE',
  image: 'ndole.jpg',
  price: 1500
},
{
  id: 5,
  name: 'nkwacoco',
  image: 'nkwacoco.jpg',
  price: 1000
},
{
  id: 6,
  name: 'OKOK',
  image: 'okok.jpg',
  price: 1000
},
{
  id: 7,
  name: 'pomme pile',
  image: 'pomme pile.jpg',
  price: 1000
},
{
  id: 8,
  name: 'KOKI',
  image: 'koki2.jpg',
  price: 1000
},
{
  id: 9,
  name: 'EgusiSoup',
  image: 'EgusiSoup.jpg',
  price: 1000
},
{
  id: 10,
  name: 'Kati-KATI',
  image: 'kati-kati-cameroon.webp',
  price: 1500
},
];




let listCards = [];
function initApp(){
  products.forEach((value, key)=>{
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src="images/${value.image}" />
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  })
}
initApp();
function addToCard(key){
  if(listCards[key] == null){
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}


function reloadCard(){
  listCard.innerHTML = '';
  let count = 0;
  let totalprice = 0;
  listCards.forEach((value, key) => {
      if (value != null) {
          totalprice += value.price * value.quantity;
          count += value.quantity;

          let newDiv = document.createElement('li');
          newDiv.innerHTML = `
              <div><img src="images/${value.image}" alt="${value.name}"></div>
              <div>${value.name}</div>
              <div>${(value.price * value.quantity).toLocaleString()}</div>
              <div>${value.quantity}</div>
              <div>
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
              </div>
          `;
          listCard.appendChild(newDiv);
      }
  });
  total.innerText = totalprice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity){
  if (quantity == 0){
      delete listCards[key];
  } else {
      listCards[key].quantity = quantity;
  }
  reloadCard();
}

function handlePurchase(){
  if (isMobile()) {
      window.location.href = 'tel:+237670890464';
  } else {
      sendEmail();
  }
}

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function sendEmail() {
  const subject = encodeURIComponent('Send your oder with payment reciept attach to it  and get your meals to your door step');
  const body = encodeURIComponent(createOrderDetails());
  const mailtoLink = `mailto:helle@bellefull.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}

function createOrderDetails() {
  let orderDetails = 'Order Details:\n\n';
  listCards.forEach((item) => {
      if (item != null) {
          orderDetails += `${item.name} - Quantity: ${item.quantity}, Price: ${item.price * item.quantity}\n`;
      }
  });
  orderDetails += `\nTotal: ${total.innerText}`;
  return orderDetails;
}