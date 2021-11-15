import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import test from "../Assests/2nd.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  // border: "5px solid #1d4ed8",
  boxShadow: 24,
  p: -4,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
};

export default function MyModal(props) {
  const [open, setOpen] = React.useState(props.cond);
  const handleClose = () =>{ 
    setOpen(false)
    props.changeFull();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        border="none"
      >
        <Box sx={style}>
          <div className="fullCard w-56  h-64 bg-white ">
            <img src={test} alt="" srcset="" className="w-full h-1/2" />
            <div className="tag"> React </div>
            <div className="contain ">
              <font> OP </font> <font> Simple Website </font>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
