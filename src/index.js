// document.addEventListener("DOMContentLoaded", () => {
//   const submit = document.querySelector(#create-task-form)
//   submit.addEventListener(e);
//   e.preventDefault();
//   }
// });


document.addEventListener("#create-task-form", function(e) {
  let submit = document.querySelector("#submit")
  Event.preventDefault(submit)
})

// document.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let submit = document.querySelector("#submit");
// });

// const checkbox = document.querySelector("#id-checkbox");

// checkbox.addEventListener("click", checkboxClick, false);

// function checkboxClick(event) {
//   const warn = "preventDefault() won't let you check this!\n";
//   document.getElementById("output-box").innerText += warn;
//   event.preventDefault();
// }