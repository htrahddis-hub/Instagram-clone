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
      const data = getAllPosts();
      data.then((data) => {
        console.log(data);
        return setAllPostsData(data)
      })
        .catch((err) => console.error(err));
    }
  }, [props.user]);

  return (
    // <div className="center mt-5">
    //   {allPostsData.length!==0 ? allPostsData.map((post, index) => (
    //     <div
    //       className="center m-2"
    //       style={{ minWidth: "30%", maxWidth: "400px" }}
    //       key={index}
    //     >
    //       <Card>
    //         <div className="d-flex align-items-center flex-column">
    //           <Card.Img
    //             variant='top'
    //             src={post.photo.asset.url}
    //             style={{ wodth: '100%' }}
    //           ></Card.Img>
    //         </div>
    //         <Card.Body>
    //           <Link to={'/profile/' + post.username}>
    //             <Card.Title>@{post.username} </Card.Title>
    //           </Link>
    //           <Card.Text>{post.description}</Card.Text>
    //         </Card.Body>
    //         <Card.Footer className="text-muted">{post.created_at}</Card.Footer>
    //       </Card>
    //     </div>
    //   )) : <p>No posts to show</p>}
    // </div>
    <>
    <div className="container mt-5 pt-4 mb-5">

      {allPostsData.length!==0 ? allPostsData.map((post, index) => (
      <div className="row d-flex align-items-center justify-content-center mb-5">
        <div className="col-md-8">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center"> <img src={post.pro?post.pro.asset.url:"https://i0.wp.com/www.dc-hauswartungen.ch/wp-content/uploads/2018/01/dummy_profile.png"} width="42" height="42" className="rounded-circle" />
                <div className="d-flex flex-column ml-2"> <span className="font-weight-bold fw-bolder h5 p-2">{post.username}</span>  </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">{post._createdAt}</small> <i className="fa fa-ellipsis-h"></i> </div>
            </div> <img src={post.photo.asset.url} className="img-fluid" />
            <div className="p-2">
              <p className="text-justify">{post.description}</p>
            </div>
          </div>
        </div>
      </div>
      )) : <p>No posts to show</p>}
      {/* <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" className="rounded-circle" />
                <div className="d-flex flex-column ml-2"> <span className="font-weight-bold fw-bolder h5 p-2">Jeanette Sun</span>  </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis"> <small className="mr-2">20 mins</small> <i className="fa fa-ellipsis-h"></i> </div>
            </div> <img src="https://i.imgur.com/xhzhaGA.jpg" className="img-fluid" />
            <div className="p-2">
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
   
</>
  )
}

export default AllPost;