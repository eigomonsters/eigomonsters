// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//= require audiojs



  window.addEventListener('load', function(){
    

    let menuOpenFlag = "0";

    let nav__center = document.getElementById("nav__center");
    let grayOut = document.getElementById("grayOut");
    let hamburger = document.getElementById("hamburger");

    hamburger.onclick = function() {
      if (menuOpenFlag === "0") {
        nav__center.className = "nav__centerForMobile"
        hamburger.classList.add('active');
        grayOut.className = "grayOut";
        menuOpenFlag = "1";
      } else {
        nav__center.className = "nav__center"
        hamburger.classList.remove('active');
        grayOut.className = "transparent";
        menuOpenFlag = "0";
      }
    };
    grayOut.onclick = function() {
        nav__center.className = "nav__center"
        hamburger.classList.remove('active');
        grayOut.className = "transparent";
        menuOpenFlag = "0";
    };


    
  });

  window.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  
    anchorLinksArr.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.hash;
        const targetElement = document.querySelector(targetId);
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
        
        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth"
        });
      });
    });
  });
