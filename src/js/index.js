const hamBtn = document.querySelector(".header-nav--hamburger");
const navList = document.querySelector(".header-nav--list");
const listItems = document.querySelectorAll(".nav-list");

function removeShowList(list) {
  listItems.forEach(function (item) {
    if (item !== list) {
      item.classList.remove("show-list");
    }
  });
}

hamBtn.addEventListener("click", function () {
  navList.classList.toggle("show-nav-list");
  listItems.forEach(function (list) {
    removeShowList(list);
  });
});

listItems.forEach(function (list) {
  const btn = list.querySelector(".header-nav--list_item-heading");

  btn.addEventListener("click", function () {
    list.classList.toggle("show-list");

    removeShowList(list);
  });
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768) {
    listItems.forEach(function (list) {
      removeShowList(list);
    });
  }
});

window.addEventListener("resize", function () {
  if (this.window.innerWidth < 768) {
    listItems.forEach(function (list) {
      removeShowList(list);
    });
  }
});
