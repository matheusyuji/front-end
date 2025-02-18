import "./style.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { contact } from "./modules/contact.js";

const webSite = {
  pages: {
    home: home,
    menu: menu, 
    contact: contact
  },

  currentPage: "home",

  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.render();
 },

  cacheDom: function() {
    this.buttons = document.querySelectorAll(".btn-header");
    this.content = document.querySelector("#content");
  },

  bindEvents: function() {
    this.buttons.forEach(button => {
       button.addEventListener("click", (event) => this.handlePageChange(event));
    });
  },

  handlePageChange: function(event) {
    const page = event.target.dataset.page;
    if (this.currentPage !== page) {
       this.pages[page].render();
       this.currentPage = page;
    }
  },

  render: function() {
    this.pages[this.currentPage].render();
  }
};


document.addEventListener("DOMContentLoaded", () => {
  webSite.init();
});