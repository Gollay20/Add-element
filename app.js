let tbody = document.querySelector("#tbody");
let submitBtn = document.querySelector("#submitBtn");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");

submitBtn.addEventListener("click", function () {
  if (firstName.value.trim() == "" || lastName.value.trim() == "") {
    alert("Fadlan ku qor magaca magacaaga iyo kan aabbahaa!");
  } else {
    let new_row = document.createElement("tr");
    let new_firstName = document.createElement("td");
    let new_lastName = document.createElement("td");

    new_firstName.innerHTML = firstName.value;
    new_lastName.innerHTML = lastName.value;

    new_row.appendChild(new_firstName);
    new_row.appendChild(new_lastName);
    tbody.appendChild(new_row);
  }
});
