import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1024,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const AdminSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClose = () => {
    setModalOpen(false);
  };
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <>
      <Header />
      <Typography variant="h2" component="h2" gutterBottom>
        Admin Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Users
      </Button>
      <Modal open={modalOpen} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <div>Test text</div>
        </div>
      </Modal>
    </>
  );
};


export default AdminSettings;
