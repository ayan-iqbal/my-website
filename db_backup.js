// db.js
let db;

const request = indexedDB.open("MyWebsiteDB", 1); // database name aur version

request.onupgradeneeded = function(event) {
  db = event.target.result;

  // Stores
  if (!db.objectStoreNames.contains("users")) {
    let usersStore = db.createObjectStore("users", { keyPath: "email" }); // login/signup store
    usersStore.createIndex("password", "password", { unique: false });
  }

  if (!db.objectStoreNames.contains("cartItems")) {
    let cartStore = db.createObjectStore("cartItems", { keyPath: "id" }); // cart store
    cartStore.createIndex("name", "name", { unique: false });
  }

  if (!db.objectStoreNames.contains("products")) {
    let productStore = db.createObjectStore("products", { keyPath: "id" }); // optional products store
  }

  console.log("DB upgraded / stores created!");
};

request.onsuccess = function(event) {
  db = event.target.result;
  console.log("DB ready to use!");
};

request.onerror = function(event) {
  console.error("DB error:", event.target.error);
};
