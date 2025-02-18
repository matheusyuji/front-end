import bruschetta from "../images/bruschetta.jpg";
import cake from "../images/cake.jpg";
import calamari from "../images/calamari.jpg";
import cocktail from "../images/cocktail.jpg";
import mojito from "../images/mojito.jpg";
import risotto from "../images/risotto.jpg";
import sorbet from "../images/sorbet.jpg";
import soup from "../images/soup.jpg";
import steak from "../images/steak.jpg";
import vegetable from "../images/vegetable.jpg";

export const menu = {
  render: function() {
    this.content = document.querySelector("#content");
    this.content.innerHTML = "";

    let divMenu = document.createElement("div");
    divMenu.setAttribute("class", "menu");

    let menuTitle = document.createElement("h2");
    menuTitle.setAttribute("class", "menu-title");
    menuTitle.textContent = "Menu";
    
    let ulMenu = document.createElement("ul");

    const items = [
      { title: "Bruschetta Trio", desc: "Fresh tomatoes, basil, and balsamic glaze on toasted baguette slices.", img: bruschetta },
      { title: "Golden Soup", desc: "A rich blend of fresh seasonal vegetables.", img: soup },
      { title: "Crispy Calamari", desc: "Served with a tangy lemon aioli.", img: calamari },
      { title: "Grilled Steak", desc: "Perfectly seasoned and grilled to perfection, served with a side of roasted vegetables.", img: steak },
      { title: "Lobster Risotto", desc: "Creamy risotto with succulent lobster tail, finished with a touch of parmesan.", img: risotto },
      { title: "Vegetable Stir Fry", desc: "A colorful mix of fresh veggies stir-fried with a savory soy sauce, served over jasmine rice.", img: vegetable },
      { title: "Lemon Sorbet", desc: "A refreshing and tangy lemon sorbet to cleanse your palate.", img: sorbet },
      { title: "Chocolate Lava Cake", desc: "Warm, gooey chocolate cake served with vanilla ice cream.", img: cake },
      { title: "The Golden Cocktail", desc: "A signature blend of rum, pineapple juice, and a splash of grenadine.", img: cocktail },
      { title: "Classic Mojito", desc: "Fresh mint, lime, rum, and soda water.", img: mojito }
    ];

    items.forEach(item => {
      let liItem = document.createElement("li");
      liItem.setAttribute("class", "menu-item");

      let divItemText = document.createElement("div");
      divItemText.setAttribute("class", "menu-item-text");

      let h3ItemTitle = document.createElement("h3");
      h3ItemTitle.setAttribute("class", "menu-item-title");
      h3ItemTitle.textContent = item.title;

      let pItemDescription = document.createElement("p");
      pItemDescription.textContent = item.desc;

      let imgItem = document.createElement("img");
      imgItem.setAttribute("class", "menu-img");
      imgItem.setAttribute("src", item.img);
      imgItem.setAttribute("alt", `${item.title} image`);

      divItemText.appendChild(h3ItemTitle);
      divItemText.appendChild(pItemDescription);
      
      if (item.title === "Golden Soup" || item.title === "Grilled Steak" || item.title === "Vegetable Stir Fry" || item.title === "Chocolate Lava Cake" || item.title === "Classic Mojito") {
        liItem.appendChild(imgItem);
        liItem.appendChild(divItemText);
      } else {
        liItem.appendChild(divItemText);
        liItem.appendChild(imgItem);
      }

      ulMenu.appendChild(liItem);
    });

    divMenu.appendChild(menuTitle);
    divMenu.appendChild(ulMenu);
    this.content.appendChild(divMenu);
  }
};
