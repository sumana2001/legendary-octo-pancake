//Write this wherever you want to use this rest api
fetch('http://localhost:3000/posts')
.then(result => {
    return result.json();
})
.then(data => {
    console.log(data);
})