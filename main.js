const form = document.forms[0];
const notificationHolder = document.querySelector("#notify");

const notify = new Event("notify");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = form.getElementsByTagName("input")[0];

  window.todos.innerHTML += `
  
  	<li>${todo.value}</li>
  
  `;

  todo.value = "";

  document.dispatchEvent(notify);

  setTimeout(() => {
    notificationHolder.innerHTML = "";
  }, 2500);

  window.todos.classList.add("add-display");
});

document.addEventListener("notify", (...e) => {
  const container = document.createElement("div");

  container.classList.add("notification-container");
  container.innerHTML = `Todo added !`;

  notificationHolder.insertAdjacentElement("beforeend", container);
});
