const items = [
  {
    name: "Big Mac",
    cost: 5,
    calories: 580,
    catergory: "Burger",
  },
  {
    name: "Quarter Pounder With Cheese",
    cost: 5,
    calories: 520,
    catergory: "Burger",
  },
  {
    name: "Double Quarter Pounder with Cheese",
    cost: 5.5,
    calories: 740,
    catergory: "Burger",
  },
  {
    name: "McDouble",
    cost: 4.5,
    calories: 390,
    catergory: "Burger",
  },
  {
    name: "CheeseBurger",
    cost: 3,
    calories: 300,
    catergory: "Burger",
  },
  {
    name: "Hamburger",
    cost: 2.5,
    calories: 250,
    catergory: "Burger",
  },
  {
    name: "Filet O Fish",
    cost: 5,
    calories: 380,
    catergory: "Burger",
  },
  {
    name: "McCrispy",
    cost: 4,
    calories: 470,
    catergory: "Chicken",
  },
  {
    name: "McChicken",
    cost: 3,
    calories: 390,
    catergory: "Chicken",
  },
  {
    name: "4 Piece Chicken Nuggets",
    cost: 3,
    calories: 170,
    catergory: "Chicken",
  },
  {
    name: "10 Piece Chicken Nuggets",
    cost: 5,
    calories: 410,
    catergory: "Chicken",
  },
  {
    name: "20 Piece Chicken Nuggets",
    cost: 8,
    calories: 830,
    catergory: "Chicken",
  },
  {
    name: "Small Fries",
    cost: 2.5,
    calories: 230,
    catergory: "Fries",
  },
  {
    name: "Medium Fries",
    cost: 3.5,
    calories: 320,
    catergory: "Fries",
  },
  {
    name: "Large Fries",
    cost: 4.5,
    calories: 480,
    catergory: "Fries",
  },
  {
    name: "Happy Meal",
    cost: 5.5,
    calories: 475,
    catergory: "Happy Meal",
  },
  {
    name: "McFlurry",
    cost: 4,
    calories: 410,
    catergory: "Dessert",
  },
  {
    name: "Vanilla Cone",
    cost: 3,
    calories: 200,
    catergory: "Dessert",
  },
  {
    name: "Cookie",
    cost: 1.5,
    calories: 170,
    catergory: "Dessert",
  },
  {
    name: "Small Soda",
    cost: 2.5,
    calories: 200,
    catergory: "Drinks",
  },
  {
    name: "Medium Soda",
    cost: 3.5,
    calories: 270,
    catergory: "Drinks",
  },
  {
    name: "Large Soda",
    cost: 4.5,
    calories: 380,
    catergory: "Drinks",
  },
  {
    name: "Coffee",
    cost: 3,
    calories: 190,
    catergory: "Drinks",
  },
  {
    name: "Egg McMuffin",
    cost: 3.5,
    calories: 310,
    catergory: "Breakfast",
  },
  {
    name: "Sausage McMuffin",
    cost: 3.5,
    calories: 400,
    catergory: "Breakfast",
  },
  {
    name: "Bacon Egg And Cheese McGriddle",
    cost: 4,
    calories: 430,
    catergory: "Breakfast",
  },
  {
    name: "HashBrowns",
    cost: 1,
    calories: 140,
    catergory: "Breakfast",
  },
  {
    name: "HotCakes",
    cost: 4,
    calories: 580,
    catergory: "Breakfast",
  },
];

const itemAliases = {
  doublequarterpounder: "Double Quarter Pounder with Cheese",
  hamburgerhappymeal: "Happy Meal",
  "4mcnuggets": "4 Piece Chicken Nuggets",
  "10mcnuggets": "10 Piece Chicken Nuggets",
  "20mcnuggets": "20 Piece Chicken Nuggets",
  smallfrenchfries: "Small Fries",
  chocolatechipcookie: "Cookie",
  oreomcflurry: "McFlurry",
  icedcoffee: "Coffee",
};
//sorry i used ai for this part i didnt want to manually add cost to all the divs
const itemsByName = new Map(
  items.map((item) => [
    item.name.toLowerCase().replace(/[^a-z0-9]/g, ""),
    item,
  ]),
);

document.querySelectorAll(".Mcdonaldsimg").forEach((card) => {
  const name = card.querySelector("h2")?.textContent.trim();
  const price = card.querySelector("h4");
  if (!name || !price) return;

  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const itemName = itemAliases[normalizedName] ?? name;
  const item = itemsByName.get(
    itemName.toLowerCase().replace(/[^a-z0-9]/g, ""),
  );
  if (item) price.textContent = `$${item.cost.toFixed(2)}`;
});

const button = document.querySelectorAll(".btn");

function injectname(item) {
  const cart = document.querySelector(".pop");
  cart.insertAdjacentHTML(
    "beforeend",
    `<div class="cart">
        <h2 class="card-header">${item.name}</h2>
      </div>`,
  );
}
function injectcost(item) {
  const checkout = document.querySelector(".Checkout");
  checkout.insertAdjacentHTML(
    "beforeend"`
    <div class="cart">
        <h2 class="card-header">${item.cost}</h2>
      </div>
    `,
  );
}
document.querySelector(".removecart").addEventListener("click", () => {
  const cartItems = document.querySelectorAll(".pop .cart");
  cartItems[cartItems.length - 1].remove();
});

document.querySelectorAll(".Mcdonaldsimg .btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".Mcdonaldsimg");
    const cardName = card.querySelector("h2").textContent.trim();
    const normalizedName = cardName.toLowerCase().replace(/[^a-z0-9]/g, "");
    const itemName = itemAliases[normalizedName] ?? cardName;
    const item = itemsByName.get(
      itemName.toLowerCase().replace(/[^a-z0-9]/g, ""),
    );

    if (item) injectname(item);
    if (item) injectcost(item);
  });
});
