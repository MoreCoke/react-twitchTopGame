import React from 'react';

export default function NavItem({ name }) {
  return (
    <li className="nav-item">
      <a href="#">{name}</a>
    </li>
  );
}
