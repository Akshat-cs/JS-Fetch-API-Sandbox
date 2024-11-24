const textbutton = document.getElementById("getText");
const jsonbutton = document.getElementById("getJson");
const apidatabutton = document.getElementById("getAPIData");
const addPostbutton = document.getElementById("addPost");
const outputDiv = document.getElementById("output");

textbutton.addEventListener("click", getTextfunc);

function getTextfunc() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      outputDiv.innerText = `${data}`;
    })
    .catch((err) => console.log(err));
}

jsonbutton.addEventListener("click", getJsonfunc);

function getJsonfunc() {
  fetch("sampleJSON.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 class='mb-4'>Users</h2>";
      data.forEach((user) => {
        output += `
        <ul class="list-group mb-4">
            <li class="list-group-item">ID : ${user.id}</li>
            <li class="list-group-item">Name : ${user.name}</li>
            <li class="list-group-item">Symbol : ${user.email}</li>
        </ul>
        `;
      });
      outputDiv.innerHTML = output;
    })
    .catch((err) => console.log(err));
}

apidatabutton.addEventListener("click", getAPIDatafunc);

function getAPIDatafunc() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2 'mb-4'>Posts</h2>";
      data.forEach((post) => {
        output += `
          <div class="card card-body mb-3">
              <h3 "card-title">${post.title}</h3>
              <p class="card-text">${post.body}</p>
          </div>
          `;
      });
      outputDiv.innerHTML = output;
    })
    .catch((err) => console.log(err));
}

addPostbutton.addEventListener("submit", addPostfunc);

function addPostfunc(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
