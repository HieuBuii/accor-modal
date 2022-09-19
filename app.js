const blocks = document.querySelectorAll(".accordient__block");

[...blocks].forEach((block) => {
  block.addEventListener("click", handelClick);
});

function handelClick(e) {
  const content = e.target.nextElementSibling;
  content.classList.toggle("active");
  if (!content.classList.contains("active")) {
    content.style.height = "0px";
  } else {
    content.style.height = `${content.scrollHeight}px`;
  }
  e.target.querySelector(".icon").classList.toggle("fa-arrow-down");
  e.target.querySelector(".icon").classList.toggle("fa-arrow-up");
}

// modal
const btnShow = document.querySelector(".btn-modal");
// const modal = document.querySelector(".modal");
// const modalContainer = modal.querySelector(".modal-container");
// const modalClose = modal.querySelector(".modal-close");

btnShow.addEventListener("click", showModal);
// modalClose.addEventListener("click", hideModal);
// modal.addEventListener("click", hideModal);

// function showModal() {
//   modal.classList.add("is-showed");
// }

// function hideModal(e) {
//   if (e.target.matches(".modal-close")) {
//     modal.classList.remove("is-showed");
//   } else if (e.target.matches(".modal")) {
//     modal.classList.remove("is-showed");
//   }
//   console.log(e.target, e.target.classList);
// }

const html = `<div class="modal">
<div class="modal-container">
  <div class="modal-close">X</div>
  <div class="modal-content">
    <input type="text" class="modal-input" />
    <button class="modal-btn">Submit</button>
  </div>
</div>
</div>`;

function showModal() {
  document.body.insertAdjacentHTML("beforeend", html);
}

document.body.addEventListener("click", hideModal);

function hideModal(e) {
  const modal = document.querySelector(".modal");
  if (e.target.matches(".modal-close")) {
    modal.parentElement.removeChild(modal);
  } else if (e.target.matches(".modal")) {
    modal.parentElement.removeChild(modal);
  }
}
