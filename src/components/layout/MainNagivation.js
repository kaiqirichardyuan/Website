import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Kai Qi (Richard) Yuan</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>About Me</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Experience</Link>
          </li>
          <li>
            <Link to='/favorites'>Hobbies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
