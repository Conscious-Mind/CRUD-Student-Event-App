let form = document.getElementById("form");
let student_name = document.getElementById("name");
let class_name = document.getElementById("classname");
let event_name = document.getElementById("eventname");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (student_name.value === "") {
    msg.innerHTML = "Name cannot be blank";
    console.log("failure");
  } else if (class_name.value === "") {
    msg.innerHTML = "Class cannot be blank";
    console.log("failure");
  } else if (event_name.value === "") {
    msg.innerHTML = "Event cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["name"] = student_name.value;
  data["class"] = class_name.value;
  data["event"] = event_name.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.name}</p>
    <p>${data.class}</p>
    <p>${data.event}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  student_name.value = "";
  class_name.value = "";
  event_name.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  student_name.value = e.parentElement.previousElementSibling.innerHTML;
  class_name.value = e.parentElement.previousElementSibling.innerHTML;
  event_name.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
