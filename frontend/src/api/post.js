const url = "https://userpostapi.herokuapp.com";
// const url="http://localhost:3001";

export const createPost = (formData) => {
  const requestOptions = {
    method: "POST",
    body: formData
  }
  const data = fetch(url + "/post/createPost", requestOptions)
    .then((res) => res)
    .catch(err => err);
  return data;
}

export const getAllPosts = () => {
  const data = fetch(url + "/post/getAllPosts")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}

export const getPostsOfFollowing = (user) => {
  const data = fetch(url + "/post/getPostOfFollowing?user=" + user)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}

export const getPosts = (username) => {
  const data = fetch(url + "/post/getPosts?user=" + username)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}