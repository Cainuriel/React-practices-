const getPosts = async (userId) => {

const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + userId;
const response = await fetch(url);
const posts = await response.json();

return posts

}

export default getPosts;