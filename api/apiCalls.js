import SanityClient from "./client.js";
import { createReadStream } from "fs";
import { basename } from 'path';

export const createUser = (firstName, lastName, username) => {
  return SanityClient.create({
    _type: "user",
    first_name: firstName,
    last_name: lastName,
    username: username,
    created_at: new Date()
  });
};

export const getProfile = (user) => {
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
    { username: user }
  );
}

export const getUserId = (user) => {
  return SanityClient.fetch(`*[_type == "user" && username == $username]{
    _id
  }`, { username: user })
}

export const createPost = (user, caption, image) => {
  return SanityClient.assets.upload("image", createReadStream(image.path), {
    filename: basename(image.path)
  }).then((data) => {
    const ids = getUserId(user);
    ids.then((getId) => {
      const id = getId[0]._id;
      return SanityClient.create({
        _type: "post",
        author: { _ref: id },
        photo: { asset: { _ref: data._id } },
        description: caption,
        created_at: new Date()
      });
    })
  });
};

export const getAllPosts = () => {
  return SanityClient.fetch(`*[_type == "post"]{
    ...,
    "username": author->username,
    photo{
      asset->{
        _id,
        url
      }
    }
  }`)
}

export const getPostsOfFollowing = (username)=>{
  return SanityClient.fetch(`*[_type == "user" && username == $username]{
    following[]->{
      "posts": *[_type == "post" && references(^._id)]{
        ...,
        "username": author->username,
        phtot{
          asset->{
            _id,
            url
          }
        }
      }
    }
  }`, {username}
  );
};

export const searchForUsername=(text)=>{
  return SanityClient.fetch(`*[_type == "user" && username match "${text}*"]{
    ...,
    "followers": count(*[_type == "user" && references(^._id)]),
    photo{
      assey->{
        _id,
        url
      }
    }
  }`,{text});
}