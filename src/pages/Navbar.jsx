import { useState } from 'react';

export default function Navbar({ scrollTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="header-bar">
      <div className="logo">Desika Sekar</div>

      {/* Desktop Nav */}
      <nav className="nav-links desktop">
        {menuItems.map((item) => (
          <a key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? 'line open1' : 'line'}></div>
        <div className={isOpen ? 'line open2' : 'line'}></div>
        <div className={isOpen ? 'line open3' : 'line'}></div>
      </div>

      {isOpen && (
        <nav className="nav-links mobile">
          {menuItems.map((item) => (
            <a
              key={item.id}
              onClick={() => {
                scrollTo(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}