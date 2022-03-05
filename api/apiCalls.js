import SanityClient  from "./client.js";

export const createUser=(firstName ,lastName ,username)=>{
  return SanityClient.create({
    _type: "user",
    first_name: firstName,
    last_name: lastName,
    username: username,
    created_at: new Date()
  });
};