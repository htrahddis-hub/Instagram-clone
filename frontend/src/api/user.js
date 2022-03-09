export const createUser = (user) => {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: user,
  }
  let Data = fetch("/user/createUser", requestOptions)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(err => err)
  return Data;
}

export const getProfile = (username) => {

  const data = fetch("/user/getProfile?user=" + username)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch(err => err)
  return data;
}

export const getUserList = (searchText) => {

  const data = fetch("/user/searchForUsername?text=" + searchText)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
  return data;
}

export const editUser=(formData)=>{
  const requestOptions = {
    method: "POST",
    body: formData
  }
  const data=fetch("/user/updateProfile",requestOptions)
  .then((res)=>res.json())
  .then((data)=>data)
  .catch(err=>err);
  return data;
}
