console.log("Javascript has loaded");

const inputText = document.querySelector("#searchInput");
console.log(inputText.value);

function onSearchButtonClick() {
  console.log("I was clicked");
  const inputText = document.querySelector("#searchInput");
  console.log(inputText.value);
  alert(inputText.value);
}

const searchButton = document.getElementById("searchButton");
searchButton.onclick = onSearchButtonClick;

const inventory = [
  {
    prodName: "Mango",
    imageSrc: "mango2.jpg",
    price: 50,
  },
  {
    prodName: "Carrot",
    imageSrc: "carrot.jpg",
    price: 60,
  },
  {
    prodName: "Apple",
    imageSrc: "apple.jpg",
    price: 70,
  },
];

function getPriceTagDiv(price) {
  ele = document.createElement("div");
  ele.setAttribute("class", "price-tag");
  ele.innerHTML = "Price: Rs. " + price;
  return ele;
}

function getProductImg(url) {
  ele = document.createElement("img");
  ele.setAttribute("src", url);
  ele.setAttribute("class", "product-image");
  return ele;
}

function getCardDiv(product) {
  const imgElement = getProductImg(product.imageSrc);
  const priceTag = getPriceTagDiv(product.price);

  ele = document.createElement("div");
  ele.setAttribute("class", "card");
  ele.appendChild(imgElement);
  ele.appendChild(priceTag);
  return ele;
}

// for (let i = 0; i < inventory.length; i++) {
//   const card = getCardDiv(inventory[i]);
//   document.getElementById("prodContainer").appendChild(card);
// }

// listOfCards = inventory.map((inventoryItem) => getCardDiv(inventoryItem))

listOfCards = inventory.map(getCardDiv);

listOfCards.forEach((element) => {
  document.getElementById("prodContainer").appendChild(element);
});
// document.getElementById("prodContainer").append(listOfCards);

// inventory item          Card HTML
// {name:, price: url:} -> <div class="card"
