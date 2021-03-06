const url = "https://userpostapi.herokuapp.com";

export const createUser = (user) => {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: user,
  }
  let Data = fetch(url + "/user/createUser", requestOptions)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(err => err)
  return Data;
}

export const getProfile = (username) => {

  const data = fetch(url + "/user/getProfile?user=" + username)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(err => err)
  return data;
}

export const getUserList = (searchText) => {

  const data = fetch(url + "/user/searchForUsername?text=" + searchText)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}

export const editUser = (formData) => {
  const requestOptions = {
    method: "POST",
    body: formData
  }
  const data = fetch(url + "/user/updateProfile", requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch(err => err);
  return data;
}

export const addFollower = (user, id) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: user, id: id })
  }
  const data = fetch(url + "/user/addFollower", requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}

export const deleteFollower = (user, id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: user, id: id })
  }
  const data = fetch(url + "/user/removeFollower", requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}