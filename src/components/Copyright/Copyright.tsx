import React from 'react';
import { Typography } from '@material-ui/core';

import userScript from '../../userscript';

export function Copyright() {
  return (
    <>
      <Typography variant={'h4'}>{userScript.description}</Typography>
      <Typography variant={'body2'}>Version: {userScript.version}</Typography>
    </>
  )
}
