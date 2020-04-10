import React from 'react';
import './App.css';
import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

import userScript from './userscript';
import { Copyright } from './components/Copyright/Copyright';

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
        <DialogTitle disableTypography>
          <Typography variant={'h3'}>
            {userScript.name}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Copyright/>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HelperButton;
