'use client';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        {navItems.map(item => (
          <a key={item.id} href={`#${item.id}`} className="sidebar-link"> {item.label}</a>
        ))}
      </div>
    </nav>
  );
}
