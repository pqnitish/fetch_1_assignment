function setData() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  if (name == name && age == age) {
    let data = { name: name, age: age };
    localStorage.setItem("userData", JSON.stringify(data));
    alert("Data stored successfully!");
  } else {
    alert("Both are required");
  }
}

function getData() {
  let userDataStr = localStorage.getItem("userData");

  if (userDataStr) {
    let userData = JSON.parse(userDataStr);
    let display = document.getElementById("display");
    display.innerHTML = `<p><strong>Name:</strong> ${userData.name}</p><p><strong>Age:</strong> ${userData.age}</p>`;
  } else {
    alert("No data found in Local Storage.");
  }
}
