export const home = {
  render: function() {
    this.content = document.querySelector("#content");
    this.content.innerHTML = "";

    let divHome = document.createElement("div");
    let pHomeText = document.createElement("p");

    divHome.setAttribute("class", "home");
    pHomeText.setAttribute("class", "home-text");

    pHomeText.textContent = `Step into The Golden Fork, where every meal is a masterpiece and every guest is family. 
    Our kitchen is driven by a love for fresh ingredients, bold flavors, and the joy of sharing unforgettable moments.
    Whether you’re craving a comforting classic or an adventurous new dish, our chefs bring passion and creativity to 
    every plate. Join us for a dining experience that blends elegance with warmth, and let every bite tell a story.`

    divHome.appendChild(pHomeText);
    this.content.appendChild(divHome);
  }
}