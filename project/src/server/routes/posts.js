const express = require('express');
const store = require('../store');
const route = express.Router();


//all posts:
route.get('/', (req, res) => {
    store.getPosts()
        .then(posts => res.json({posts}))
});


//single post:

route.get('/:id', (req, res) => {
    const postId = Number(req.params.id);

    store.getPost(postId)
        .then(post => res.json(post))
        .catch(error => {
            res.status(404).json(
                { error }
            );
        });
});

//add post
route.post('/', (req, res) => {
    const postData = req.body;
    store.addPost(postData)
        .then(newPost => res.json({ newPost }));

});

//delete post
route.delete('/:id', (req, res) => {
    const postData = req.body;
    const postId = Number(req.params.id);

    store.deletePost(postData, postId)
        .then(deletedPost => res.json({ deletedPost }))
});

module.exports = route;