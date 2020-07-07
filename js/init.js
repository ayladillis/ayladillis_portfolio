(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// const searchTerm = document.querySelector("#srch-trm");
const contactButton = document.querySelector("#contact-button");
const homePage = document.querySelector(".home-page");
const contactPage = document.querySelector(".contact-page");

let address;

contactButton.addEventListener("click", function(event) {
  event.preventDefault();
  // address = searchTerm.value;
  // console.log(address);
  homePage.setAttribute("style", "display: none");
  contactPage.setAttribute("style", "display: block");
});
