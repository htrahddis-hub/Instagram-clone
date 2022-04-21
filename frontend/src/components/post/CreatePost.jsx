import React from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createPost } from "../../api/post";
import '../../css/CreatePost.css'

const CreatePost = (props) => {
  const [caption, setCaption] = React.useState('');
  const [file, setFile] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!props.user) {
      props.setAlert({ variant: "danger", message: "Please sign in to make the Post !" });
      navigate('/login');
    }
  }, [props.user]);

  const uploadFile = (event) => {
    setFile(event.target.files[0]);
  }

  const makePost = (event) => {
    const formData = new FormData();
    formData.append('user', props.user.username);
    formData.append('caption', caption);
    formData.append('file', file);
    const data = createPost(formData);
      data.then((_res) => {
        console.log(_res);
        props.setAlert({ variant: "success", message: "Post Created!" });
        navigate('/');
      })
      .catch((err) => {
        props.setAlert({ variant: "danger", message: err.message })
      })
  }

  return (
    <Form className='post-form'>
      <div className="create-post">
        <Form.Group className="mb-5">
          <img src={file ? URL.createObjectURL(file) : null} className='post-image' />
        </Form.Group>
        <Form.Group className="mb-2">
          <input type="file" accept="image/*" onChange={uploadFile} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control
            type="text"
            placeholder="Enter a Caption"
            onInput={(event) => setCaption(event.target.value)} />
        </Form.Group>
        <div className="post-button-wrapper">
          <Button variant="primary" type='button' onClick={makePost} className="post-button">
            Post
          </Button>
        </div>
      </div>
    </Form>
  )
}

export default CreatePost;