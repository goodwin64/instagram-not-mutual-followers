import { h } from 'preact';
import Typography from '@material-ui/core/Typography';

export function NoUserDetected() {
  return (
    <Typography variant={'body1'}>
      No user detected from URL. Please navigate to some user profile.
    </Typography>
  )
}
