export const contact = {
  render: function() {
    this.content = document.querySelector("#content");
    this.content.innerHTML = "";

    let divContact = document.createElement("div");
    divContact.setAttribute("class", "contact");

    let contactTitle = document.createElement("h2");
    contactTitle.setAttribute("class", "contact-title");
    contactTitle.textContent = "Contact";

    let ul = document.createElement("ul");

    const items = [
      { title: "Address", desc: "123 Food Street, Gourmet City, FL 56789"},
      { title: "Hours", desc: "Mon-Sun: 11:00 AM - 10:00 PM"},
      { title: "Phone", desc: "(123) 456-7890"},
      { title: "Email", desc: "contact@thegoldenfork.com"}
    ];

    items.forEach(item => {
      let li = document.createElement("li");

      let divContactInfo = document.createElement("div");
      divContactInfo.setAttribute("class", "contact-info");

      let h3 = document.createElement("h3");
      h3.setAttribute("class", "contact-info-title");
      h3.textContent = item.title;

      let p = document.createElement("p");
      p.setAttribute("class", "contact-info-text");
      p.textContent = item.desc;

      divContactInfo.appendChild(h3);
      divContactInfo.appendChild(p);

      li.appendChild(divContactInfo);
      ul.appendChild(li);
    });

    divContact.appendChild(contactTitle);
    divContact.appendChild(ul);
    this.content.appendChild(divContact);
  }
}