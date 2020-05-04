import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonIcon from '@material-ui/icons/Person';
import { h } from 'preact';

export function NotMutualFollower() {
  return (
    <span>
      <PersonIcon/>
      <ChevronLeftIcon color={'primary'}/>
    </span>
  )
}

export function NotMutualFollowing() {
  return (
    <span>
      <PersonIcon/>
      <ChevronRightIcon color={'secondary'}/>
    </span>
  )
}
