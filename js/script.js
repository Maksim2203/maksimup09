let popupСall = document.querySelector(".popup-call");
let openPopupСall = document.querySelectorAll(".call-btn");
let closePopupCall = document.querySelector(".popup-close");
const questAccord = document.querySelector(".questions .panel-group");
const nameInp = document.querySelector("#name_1"),
  phoneInp = document.querySelector("#phone_1");
openPopupСall.forEach((element) => {
  element.addEventListener("click", function () {
    popupСall.style.display = "flex";
  });
});

closePopupCall.addEventListener("click", function () {
  popupСall.style.display = "none";
});
popupСall.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.closest(".popup-content")) {
    closeModal(popupСall, nameInp, phoneInp);
  }
});
const closeModal = (modalWindow, nameInp, phoneInp) => {
  modalWindow.style.display = "none";
  nameInp.value = "";
  phoneInp.value = "";
  nameInp.style.border = "1px solid #ddd";
  phoneInp.style.border = "1px solid #ddd";
};
// let popupDiscount = document.querySelector('popup-discount')
// let openPopupDiscount = document.querySelector('popup-discount')

questAccord.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.closest(".panel") ? openAccord(e.target.closest(".panel")) : none;
});
const openAccord = (item) => {
  const itemText = item.querySelector(".panel-collapse");
  const itemLink = item.querySelector("a");
  const parentItem = item.parentElement;
  const allItems = parentItem.querySelectorAll(".panel");

  const close = (itemTextArg, itemLinkArg) => {
    itemTextArg.style.display = "none";
    itemLinkArg.classList.add("collapsed");
  };
  const open = (itemTextArg, itemLinkArg) => {
    itemTextArg.style.display = "block";
    itemLinkArg.classList.remove("collapsed");
  };
  if (!itemLink.classList.contains("collapsed")) {
    close(itemText, itemLink);
  } else {
    allItems.forEach((el) => {
      const itemSecLink = el.querySelector("a");
      const itemSecText = el.querySelector(".panel-collapse");
      close(itemSecText, itemSecLink);
    });
    open(itemText, itemLink);
  }
};
