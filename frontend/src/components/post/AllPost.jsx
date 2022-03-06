import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { getAllPosts, getPostsOfFollowing } from '../../api/post';

const AllPost = (props) => {
  const [allPostsData, setAllPostsData] = React.useState([]);

  React.useEffect(() => {
    if (!props.user) {
      const data = getAllPosts();
      data.then((data) => setAllPostsData(data))
        .catch((err) => console.error(err));
    }
    else {
      const data = getPostsOfFollowing(props.user);
      data.then((data) => {
        console.log(data);
        return setAllPostsData(data)})
        .catch((err) => console.error(err));
    }
  }, [props.user]);

  return (
    <div className="center mt-3">
      {allPostsData.length!=0 ? allPostsData.map((post, index) => (
        <div
          className="center m-2"
          style={{ minWidth: "30%", maxWidth: "400px" }}
          key={index}
        >
          <Card>
            <div className="d-flex align-items-center flex-column">
              <Card.Img
                variant='top'
                src={post.photo.asset.url}
                style={{ wodth: '100%' }}
              ></Card.Img>
            </div>
            <Card.Body>
              <Link to={'/profile/' + post.username}>
                <Card.Title>@{post.username} </Card.Title>
              </Link>
              <Card.Text>{post.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{post.created_at}</Card.Footer>
          </Card>
        </div>
      )) : <p>No posts to show</p>}
    </div>
  )
}

export default AllPost;