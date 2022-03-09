import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { editUser } from "../../api/user";

const EditProfile = (props) => {
  const [bio, setBio] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [file, setFile] = React.useState("");

  React.useEffect(()=>{
    setFirstName(props.profileData.first_name);
    setLastName(props.profileData.last_name);
    setBio(props.profileData.bio);
  },[props.profileData]);

  const handleUpdate = () => {

    if(!firstName) setFirstName(props.profileData.first_name);
    if(!lastName) setFirstName(props.profileData.last_name);
    if(!bio) setFirstName(props.profileData.bio);
    const formData = new FormData();

    formData.append("file", file);
    formData.append("user", props.user);
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("bio", bio);
  
    const data = editUser(formData)
      .then((data) => {
        props.setAlert({
          variant: "success",
          message: "Profile updated successfullly."
        });
        if (file) data.image_url = URL.createObjectURL(file);
        props.hideCallback();
      }).catch((err) => {
        props.setAlert({ variant: "danger", message: err.message });
        props.hideCallback();
      });
  }

  return (
    <Modal show={props.show} onHide={props.hideCallback}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            {props.profileData.photo && !file ? <img src={props.profileData.photo.asset.urls} className="upload-image" />
              : <img src={file ? URL.createObjectURL(file) : null} className="upload-image" />
            }
          </Form.Group>
          <Form.Group className="mb-3">
            <input type="file" accept="image/*" onChange={(event) => setFile(event.target.files[0])} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="First Name"
              defaultValue={props.profileData.first_name}
              onInput={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Last Name"
              defaultValue={props.profileData.last_name}
              onInput={(event) => setLastName(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Bio"
              defaultValue={props.profileData.bio}
              onInput={(event) => setBio(event.target.value)}
            />
          </Form.Group>
          <div>
            <Button variant="primary" onClick={handleUpdate}>Edit</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditProfile;