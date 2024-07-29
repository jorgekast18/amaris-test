import React from 'react';
import '../assets/css/Menu.css';
import { Link } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
}

const Menu = () => {
  const menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Aperturas', path: '/openings' },
    { label: 'Cancelación', path: '/withdrawals' },
  ];

  return (
    <nav className="menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;