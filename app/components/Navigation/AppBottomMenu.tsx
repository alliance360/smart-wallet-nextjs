export default function AppBottomMenu() {
  const menuItems = [
    { href: '/', icon: '📊', label: 'Overview', active: true },
    { href: '/pages', icon: '📄', label: 'Pages', active: false },
    { href: '/components', icon: '⚙️', label: 'Components', active: false },
    { href: '/cards', icon: '💳', label: 'My Cards', active: false },
    { href: '/settings', icon: '⚙️', label: 'Settings', active: false },
  ];

  return (
    <div className="appBottomMenu">
      {menuItems.map((item) => (
        <a 
          key={item.href}
          href={item.href} 
          className={`item ${item.active ? 'active' : ''}`}
        >
          <div className="col">
            <span>{item.icon}</span>
            <strong>{item.label}</strong>
          </div>
        </a>
      ))}
    </div>
  );
}