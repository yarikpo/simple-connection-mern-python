import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
          <ul>
              <li><Link to="/">Tasks</Link></li>
              <li><Link to="/create">Create</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/github">GitHub</Link></li>
              <li><Link to="/help">Help</Link></li>
              <li className="right"><Link to="/tasks">Todo</Link></li>
          </ul>
      </div>
    );
  }
}

export default Header;
