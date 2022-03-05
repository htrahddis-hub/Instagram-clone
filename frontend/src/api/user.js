export const createUser = (user) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: user,
    }
    let Data = fetch("/user/createUser", requestOptions);
    return Data;
  } catch (err) {

  }
}