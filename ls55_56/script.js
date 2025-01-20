// 1. Зробити сторінку із довільним контентом і переходами на 3 сторінки:
//    users
//    posts
//    comments



// 2. На сторінці users вивести в html список юзерів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/users

console.log('-------------------users fetch---------------');


const userDom = document.getElementById('users');

fetch ('https://jsonplaceholder.typicode.com/users').then(resp=> {
    console.log(resp);
     return resp.json()
}).then(users=> {
    console.log(users);
    
    users.forEach((user, i) => {
        const newUserDiv = document.createElement('div')
        newUserDiv.classList.add('users-style')

        newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
        userDom.appendChild(newUserDiv);
    });
});


console.log('-------------------users XMLHttpRequest---------------');


const users2DOM = document.getElementById('users-xhr');

const getUsers = new XMLHttpRequest();
getUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
getUsers.send();

getUsers.onload = function () {
    const newUsers = JSON.parse(this.responseText); 
    console.log(newUsers);

    newUsers.forEach((user) => {
    const newUser2Div = document.createElement('div');
    newUser2Div.classList.add('users2'); 
    newUser2Div.innerHTML = `${user.id}. ${user.name} - ${user.email} (${user.website})`;
    users2DOM.appendChild(newUser2Div);
    });
};

// 3. На сторінці posts вивести в html список постів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/posts


console.log('-------------------posts fetch---------------');


const postsDom = document.getElementById('posts-style');

fetch ('https://jsonplaceholder.typicode.com/posts').then(resp=> {
    console.log(resp);
     return resp.json()
}).then(posts=> {
    console.log(posts);
    
    posts.forEach((post) => {
        const newPostDiv = document.createElement('div')
        newPostDiv.classList.add('posts-style')

        newPostDiv.innerHTML = `<h4 class="braun">${post.id}. ${post.title} </h4> <hr><p>${post.body}</p>`;
        postsDom.appendChild(newPostDiv);
    });
});


// console.log('-------------------posts XMLHttpRequest---------------');


const posts2DOM = document.getElementById('posts2-style');

const getPosts = new XMLHttpRequest();
getPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts');
getPosts.send();

getPosts.onload = function () {
    const newPosts = JSON.parse(this.responseText); 
    console.log(newPosts);

    newPosts.forEach((post) => {
    const newPost2Div = document.createElement('div');
    newPost2Div.classList.add('posts2'); 
    newPost2Div.innerHTML = `<h4 class="blue">${post.id}. ${post.title} </h4> <hr><p>${post.body}</p>`;
    posts2DOM.appendChild(newPost2Div);
    });
};




// 4. На сторінці comments вивести в html список коментарів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/comments




console.log('-------------------comments fetch---------------');


const commentsDom = document.getElementById('comments-style');

fetch ('https://jsonplaceholder.typicode.com/comments').then(resp=> {
    console.log(resp);
     return resp.json()
}).then(comments=> {
    console.log(comments);
    
    comments.forEach((comment) => {
        const newCommentDiv = document.createElement('div')
        newCommentDiv.classList.add('comments-style')

        newCommentDiv.innerHTML = `<h4 class="braun">${comment.name}.</h4> <div>${comment.email}</div><p>${comment.body}</p>`;
        commentsDom.appendChild(newCommentDiv);
    });
});


// // console.log('-------------------comments XMLHttpRequest---------------');


const comments2DOM = document.getElementById('comments2-style');

const getComments = new XMLHttpRequest();
getComments.open('GET', 'https://jsonplaceholder.typicode.com/comments');
getComments.send();

getComments.onload = function () {
    const newComments = JSON.parse(this.responseText); 
    console.log(newComments);

    newComments.forEach((comment) => {
    const newComment2Div = document.createElement('div');
    newComment2Div.classList.add('comments2-style'); 
    newComment2Div.innerHTML = `<h4 class="blue">${comment.name}.</h4> <div>${comment.email}</div><p>${comment.body}</p>`;
    comments2DOM.appendChild(newComment2Div);
    });
};

