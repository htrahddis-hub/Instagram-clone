import React from "react";
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EditProfile from './EditProfile';
import { getProfile, addFollower, deleteFollower } from "../../api/user";
import { getPosts } from "../../api/post";
import '../../css/Profile.css';

const Profile = (props) => {
  const [profileData, setProfileData] = React.useState({});
  const [posts, setPosts] = React.useState({});
  const [following, setFollowing] = React.useState(false);
  const [owner, setOwner] = React.useState(false);
  const [editing, setEditing] = React.useState(false);

  const params = useParams();

  const updateFollowing = (profile) => {
    for (let follower of profile.followers) {
      if (follower.username === props.user.username) {
        setFollowing(true);
        return;
      }
    }
    setFollowing(false);
  }
  const updateProflie = (username) => {
    const data = getProfile(username);
    data.then((data) => {
      if (data.length === 0) {
        props.setAlert({
          variant: "danger",
          message: "No user with this username exists."
        });
        return
      }
      const posts = getPosts(username);
      posts.then((posts) => {
        setProfileData(data[0]);
        setPosts(posts);
        updateFollowing(data[0]);
        setOwner(props.user.username === data[0].username);
      })
    })
      .catch((err) => console.error(err));
  }
  React.useEffect(() => {
    updateProflie(params.username)
  }, [params.username, props.user.username]);

  const followClick = () => {
    if (owner) return;
    if (!following) {
      addFollower(props.user.username, profileData._id)
        .then((data) => updateProflie(params.username));
    }
    else {
      deleteFollower(props.user.username, profileData._id)
        .then((data) => updateProflie(params.username));
    }
  }

  const hideEdit = () => {
    updateProflie(params.username);
    setEditing(false);
  }



  if (profileData == {}) return null;

  return (
    <div className="mt-5 pt-5">
      <EditProfile
        user={props.user.username}
        show={editing}
        hideCallback={hideEdit}
        profileData={profileData}
        setAlert={props.setAlert}
      />
      <div className="d-flex justify-content-center">
        <div className="pe-5 fit-content">
          <img src={profileData.photo ? profileData.photo.asset.url : "/80.png"}
            width='300px'
          />
        </div>
        <div>
          <h4>@{profileData.username}</h4>
          <div className="">
            <div className="">
              <p><strong>Posts</strong></p>
              <h4>{posts ? posts.length : 0}</h4>
            </div>
            <div className="">
              <p><strong>Followers</strong></p>
              <h4>{profileData.followers ? profileData.followers.length : 0}</h4>
            </div>
            <div className="">
              <p><strong>Following</strong></p>
              <h4>{profileData.following ? profileData.following : 0}</h4>
            </div>
            <div className="">
              {props.user.username && !owner ? (
                <Button variant={following ? "danger" : "primary"} onClick={followClick}>
                  {following ? "Unfollow" : "Follow"}
                </Button>
              ) : null}
              {props.user.username && owner ? <Button variant="primary" onClick={() => setEditing(true)}>Edit</Button> : null}
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <strong>
              {(profileData.first_name ? profileData.first_name : "") + " " + (profileData.last_name ? profileData.last_name : "")}
            </strong>
          </div>
          <div className="">
            {profileData.bio}
          </div>
        </div>
      </div>
      <div className=" mt-5 mx-md-5 px-md-5 mx-sm-3 mx-lg-5 px-lg-5 border bg-light">
        <div className="mt-3 row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 g-4 bd-highlight">
          {posts && posts.length > 0 ? posts.map((post, idx) => {
            return <div className="col">
              <div className="card h-100">
                <img className="postimage" src={post.photo.asset.url} key={idx} />
              </div>

            </div>
          })
            : null}
            {posts && posts.length > 0 ? posts.map((post, idx) => {
            return <div className="col">
              <div className="card">
                <img className="postimage" src={post.photo.asset.url} key={idx} />
              </div>

            </div>
          })
            : null}
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Profile;