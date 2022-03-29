const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const makeIngredientsOptions = options => {
    return ingredients.map(option => {
        const itemEl = document.createElement("li");
        itemEl.textContent = option;
        itemEl.classList.add('item');

        return itemEl;
    });
}

const ingredientsEl = document.querySelector('#ingredients');
const elements = makeIngredientsOptions(ingredients);
ingredientsEl.append(...elements);