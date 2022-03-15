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
      if (follower.username === props.user) {
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
        setOwner(props.user === data[0].username);
      })
    })
      .catch((err) => console.error(err));
  }
  React.useEffect(() => {
    updateProflie(params.username)
  }, [params.username, props.user]);

  const followClick = () => {
    if (owner) return;
    if (!following) {
      addFollower(props.user,profileData._id)
      .then((data)=>updateProflie(params.username));
    }
    else{
      deleteFollower(props.user,profileData._id)
      .then((data)=>updateProflie(params.username)); 
    }
  }

  const hideEdit = () => {
    updateProflie(params.username);
    setEditing(false);
  }



  if (profileData == {}) return null;

  return (
    <div className="profile">
      <EditProfile
        user={props.user}
        show={editing}
        hideCallback={hideEdit}
        profileData={profileData}
        setAlert={props.setAlert}
      />
      <div className="profile-banner">
        <h4>@{profileData.username}</h4>
        <div className="profile-data">
          <img src={profileData.photo ? profileData.photo.asset.url : "/80.png"}
            id="profile-img"
          />
          <div className="vertical-data">
            <p><strong>Posts</strong></p>
            <h4>{posts ? posts.length : 0}</h4>
          </div>
          <div className="vertical-data">
            <p><strong>Followers</strong></p>
            <h4>{profileData.followers ? profileData.followers.length : 0}</h4>
          </div>
          <div className="vertical-data">
            <p><strong>Following</strong></p>
            <h4>{profileData.following ? profileData.following : 0}</h4>
          </div>
          <div className="follow-button">
            {props.user && !owner ? (
              <Button variant={following ? "danger" : "primary"} onClick={followClick}>
                {following ? "Unfollow" : "Follow"}
              </Button>
            ) : null}
            {props.user && owner ? <Button variant="primary" onClick={() => setEditing(true)}>Edit</Button> : null}
          </div>
        </div>
        <div className="profile-bio">
          <div className="profile-name">
            <strong>
              {(profileData.first_name ? profileData.first_name : "") + " " + (profileData.last_name ? profileData.last_name : "")}
            </strong>
          </div>
          <div className="profile-text">
            {profileData.bio}
          </div>
        </div>
      </div>
      <div className="break"></div>
      <div className="profile-posts-wrapper">
          {posts && posts.length > 0 ? posts.map((post, idx) => {
            return <div className="profile-posts"> <img className="postimage" src={post.photo.asset.url} key={idx} />
          </div>}) : null}
      </div>
    </div>
  )
}

export default Profile;