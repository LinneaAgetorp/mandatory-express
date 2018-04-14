require('isomorphic-fetch'); //makes my fetch-calls work the same in node + browser

class EdumentSource {
    getProducts() {
        return fetch('http://demo.edument.se/api/products')
            .then(response => response.json())
            .then(products => products);
    }

    getProduct(id) {
        return fetch(`http://demo.edument.se/api/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw `Product with ID ${id} not found`;
                }

                return response.json();
            })
            .then(product => product);
    }

    addProduct(productData) {
        throw Error('EdumentSource.addProduct not supported!');
        /* // but otherwise we would've done something like:
        return fetch(`http://demo.edument.se/api/products/`,{
            method: 'post',
            body: JSON.stringify(productData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json());

        */
    }
    getPosts(){
        return fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(posts => posts);
    }

    getPost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw `Post with ID ${id} not found`;
                }

                return response.json();
            })
            .then(post => post);
    }

    addPost(postData) {
        return fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'post',
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        .then(response => response.json());

    }

    deletePost(postData, id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'delete',
            body: JSON.stringify(postData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

            .then(() => postData);
    }
}

module.exports = EdumentSource;
