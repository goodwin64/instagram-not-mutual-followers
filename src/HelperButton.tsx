import React from 'react';
import './App.css';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import userScript from './userscript';

function HelperButton() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Button onClick={openModal} title={userScript.name}>
        <PeopleIcon/>
      </Button>

      <Dialog open={isModalOpen} onClose={closeModal} maxWidth={'md'}>
        <DialogTitle>
          <Typography variant={'h3'}>{userScript.name}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant={'h4'}>{userScript.description}</Typography>
          <Typography variant={'body2'}>Version: {userScript.version}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HelperButton;
