// Get the necessary elements
const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.card .checkOut .closeShopping');
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
    totalprice = totalprice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <div><img src="images/${value.image}"></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>${value.quantity}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);

    }

  })
  total.innerText = totalprice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity){
  if (quantity == 0){
    delete listCards[key];
  }else{
    listcards[key].quantity = quantity;
    listCards[key].price = quantity * product[key].price;
  }
  reloadCard();
}