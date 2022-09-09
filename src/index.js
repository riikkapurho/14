const addMyButton = document.getElementById("my-button");

addMyButton.addEventListener("click", function () {
  console.log("Hello world");
  document.getElementById("hello").textContent = "My notebook";
});

const addDataButton = document.getElementById("add-data");

const ulist = document.getElementById("ul");

addDataButton.addEventListener("click", function () {
  const text = Math.random().toString(36).substring(2, 7);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ulist.appendChild(li);
});
