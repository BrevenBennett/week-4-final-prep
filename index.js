// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"
// This actually helps gets the html onto the web page in conjunction with line 13
const userListEl = document.querySelector(".user-list");

async function main() {
  // Getting the users API from the backend
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  // Turning the backend into something the frontend can understand
  const usersData = await users.json();
  // Converting every single object in usersData into HTML; array map allows us to do this
  // .join allows us to turn it into a string
  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

function showUserPosts(id) {
    // Saves the id in local storage so when the page refreshes JS remembers
  localStorage.setItem("id", id);
  // Routes to the user.html page; using .origin makes the url responsive
  window.location.href = `${window.location.origin}/user.html`;
}

function userHTML(user) {
  // Using click listener to pass in the current user id
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
        <h3>${user.name}</h4>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
            ${user.website}
            </a></p>
        </div>
    </div>`;
}
