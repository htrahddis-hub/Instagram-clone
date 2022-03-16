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
    <div class="container mt-5 pt-4 mb-5">
      <div class="row d-flex align-items-center justify-content-center mb-5">
        <div class="col-md-8">
          <div class="card">
            <div class="d-flex justify-content-between p-2 px-3">
              <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle" />
                <div class="d-flex flex-column ml-2"> <span class="font-weight-bold fw-bolder h5 p-2">Jeanette Sun</span>  </div>
              </div>
              <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">20 mins</small> <i class="fa fa-ellipsis-h"></i> </div>
            </div> <img src="https://i.imgur.com/xhzhaGA.jpg" class="img-fluid" />
            <div class="p-2">
              <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="d-flex justify-content-between p-2 px-3">
              <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle" />
                <div class="d-flex flex-column ml-2"> <span class="font-weight-bold fw-bolder h5 p-2">Jeanette Sun</span>  </div>
              </div>
              <div class="d-flex flex-row mt-1 ellipsis"> <small class="mr-2">20 mins</small> <i class="fa fa-ellipsis-h"></i> </div>
            </div> <img src="https://i.imgur.com/xhzhaGA.jpg" class="img-fluid" />
            <div class="p-2">
              <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
</>
  )
}

export default AllPost;