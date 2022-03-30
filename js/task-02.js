const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const makeIngredientsOptions = () => {
    return ingredients.map(ingredient => {
        const itemEl = document.createElement("li");
        itemEl.textContent = ingredient;
        itemEl.classList.add('item');

        return itemEl;
    });
}

const ingredientsEl = document.querySelector('#ingredients');
const elements = makeIngredientsOptions(ingredients);
ingredientsEl.append(...elements);