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

export const getProfile =(user)=>{
  return SanityClient.fetch(
    `*[_type == "user" && username == $username]{
      ...,
      "following": count(following),
      "followers": *[_type == "user" && references(^._id)],
      photo{
        asset->{
          _id,
          url
        }
      }
    }`,
    {username: user}
  );
}