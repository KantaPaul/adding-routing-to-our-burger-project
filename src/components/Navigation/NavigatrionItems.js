import React from 'react';
import { NavLink } from 'react-router-dom';

let navigationItem = (props) => {
  return (
    <li className="nav-item active">
      <a className="nav-link" href={props.link}>{props.children}</a>
    </li>
  )
}

export default navigationItem;