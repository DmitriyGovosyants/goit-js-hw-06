const listOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listOfCategories.length}`);

const categoriesNameAndElementsQuantity = () => {
    listOfCategories.forEach(element => console.log(
        `Category: ${element.querySelector('h2').textContent}
Elements: ${element.querySelectorAll('li').length}`
    ));
}

categoriesNameAndElementsQuantity();