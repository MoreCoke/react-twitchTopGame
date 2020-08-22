import React from 'react';

export default function NavItem({ currentName, name, handleTwitchGameList }) {
  const isActive = (currentName === name) ? "active": '';
  return (
    <li className={`nav-item ${isActive}`} onClick={() => handleTwitchGameList(name)}>
      <a href="#">{name}</a>
    </li>
  );
}
