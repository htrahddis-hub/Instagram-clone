export const createPost = (formData) => {
  const requestOptions = {
    method: "POST",
    body: formData
  }
  const data = fetch("/post/createPost", requestOptions)
    .then((res) => res)
    .catch(err => err);
  return data;
}

export const getAllPosts = () => {
  const data = fetch("/post/getAllPosts")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}

export const getPostsOfFollowing = (user) => {
  const data = fetch("/post/getPostOfFollowing?user=" + user)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}