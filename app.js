(function () {
  //varijable
  let btns = document.querySelectorAll(".btn");
  let customerImg = document.querySelector(".customer-img");
  let customerReview = document.querySelector(".customer-review");
  let customerName = document.querySelector(".customer-name");
  let index = 0;
  let customers = [];
  //Object constructor
  function Customer(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
  }
  function createCustomer(name, img, text) {
    //img
    let fullImg = `/img/user-${img}.jpg`;
    let customer = new Customer(name, fullImg, text);
    customers.push(customer);
  }
  createCustomer("Lana", 0, "Best website ever");
  createCustomer("Adam", 1, "Great experience");
  createCustomer("Mark", 2, "If i need to grade it its 10+");
  createCustomer("Sofie", 3, "Excellent support");
  createCustomer("Katy", 4, "Great UI");
  //click event
  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.parentElement.classList.contains("left")) {
        index--;
        if (index < 0) {
          index = customers.length - 1;
        }
      } else if (event.target.parentElement.classList.contains("right")) {
        index++;
        if (index > customers.length - 1) {
          index = 0;
        }
      }
      customerName.textContent = customers[index].name;
      customerReview.textContent = customers[index].text;
      customerImg.src = customers[index].img;
    });
  });
})();
