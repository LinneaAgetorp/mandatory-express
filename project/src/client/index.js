console.log("Frontend server starting!");

// ------------ Demonstrating existing functionality -----------

fetch('/api/products')
  .then(response => response.json())
  .then(products => console.log("DEMO: getting all products", products));

fetch('/api/products/2')
  .then(response => response.json())
  .then(products => console.log("DEMO: getting a single product", products));

fetch('/api/products', {
  method: 'post',
  body: JSON.stringify({
    name: 'a new product',
    description: 'it is shiny',
    price: 777
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(res => console.log("DEMO: adding a product", res))
  .catch(e => console.log("DEMO: Adding a new product doesn't work for the production source, but this is how we would've done it!", e));

// ------------ Testing new functionality -----------

    // ... add code to make fetches to your new routes here ...
fetch('/api/posts')
    .then(response => response.json())
    .then(data => console.log('NEW: test fetch all posts', data));

fetch('/api/posts/2')
    .then(response => response.json())
    .then(data => console.log('NEW: test fetch only one post', data));


fetch('/api/posts', {
    method: 'post',
    body: JSON.stringify({

        "userId": 10,
        "title": "another title",
        "body": "another post"

    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(res => console.log("NEW: Adding a post: ", res))
    .catch(e => console.log("Adding a new post didn't work, see error message: ", e));


fetch('/api/posts/1', {
    method: 'delete',

    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(res => console.log("NEW: Deleting a post: ", res))
    .catch(e => console.log("Deleting a new post didn't work, see error message: ", e));

//fetch all posts again, did delete work?
fetch('/api/posts')
    .then(response => response.json())
    .then(data => console.log('NEW: fetch all posts again', data));

// ----------- CORS demonstration -------------

fetch('http://localhost:8888/api/products')
  .then(response => response.json())
  .then(products => console.log("CORS: Could steal data directly from backend!", products))
  .catch(e => console.log("CORS: Failed to call backend directly :(", e));
