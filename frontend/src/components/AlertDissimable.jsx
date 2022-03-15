import React from "react";
import { Alert } from 'react-bootstrap'

const AlertDissimable = (props) => {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert
        variant={props.variant}
        style={{marginTop:"57px"}}
        onClose={() => {
          props.deleteAlert();
          setShow(false);
        }}
        dismissible>
        {props.message}
      </Alert>
    )
  }
  else {
    return null;
  }
}

export default AlertDissimable;