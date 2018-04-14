const products = [
    {
        id: 1,
        name: 'JS 101',
        category: 'book'
    },
    {
        id: 2,
        name: 'Avancerad JS',
        category: 'book'
    }
];

const posts = [
    {
        id: 1,
        userId: 10,
        title: "this is title",
        body: "content of this post..."
    },
    {
        id: 2,
        userId: 11,
        title: "this is second title",
        body: "content of this post...Post number two"
    }
];

class mockSource {
    getProducts() {
        return Promise.resolve(products);
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            const found = products.find(product => product.id === +id);
            found ? resolve(found) : reject();
        });

    }

    addProduct({ category, name }) {
        const lastIndex = products.length - 1;
        const lastId    = products[lastIndex].id;
        const newProduct = {
            id: lastId + 1,
            category,
            name
        };
        products.push(newProduct);

        return Promise.resolve(newProduct);
    }
    //getPosts, getPost, addPost, deletePost

    getPosts(){
        return Promise.resolve(posts)
    }

    getPost(id) {
        return new Promise((resolve, reject) => {
            const found = posts.find(post => post.id === +id);
            found ? resolve(found) : reject();
        });
    }

    addPost(postData) {
        const lastIndex = posts.length - 1;
        const lastId    = posts[lastIndex].id;
        const newPost = {
            id: lastId + 1,
            post: postData
        };
        posts.push(newPost);

        return Promise.resolve(newPost);
    }

    deletePost(postData, postId) {

        posts.splice(postId, 1)
        return Promise.resolve(posts[postId]);
    }

}

module.exports = mockSource;