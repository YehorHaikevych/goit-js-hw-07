const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log(`Category: ${title}`);

  const itemsCount = item.querySelectorAll("ul li").length;
  console.log(`Elements: ${itemsCount}`);
});
