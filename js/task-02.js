const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const makeIngredientsMarkup = () => {
    return ingredients.map(ingredient => {
        const itemEl = document.createElement("li");
        itemEl.textContent = ingredient;
        itemEl.classList.add('item');

        return itemEl;
    });
}

const ingredientsEl = document.querySelector('#ingredients');
const elements = makeIngredientsMarkup(ingredients);
ingredientsEl.append(...elements);