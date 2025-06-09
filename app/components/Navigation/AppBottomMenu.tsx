export default function AppBottomMenu() {
  const menuItems = [
    { href: '/', icon: '📊', label: 'Overview', active: true },
    { href: '/about', icon: '📰', label: 'About', active: false },
    { href: '/transactions', icon: '💸', label: 'Transactions', active: false },
    { href: '/team', icon: '👥', label: 'My Team', active: false },
    { href: '/settings', icon: '⚙️', label: 'Settings', active: false },
  ];

  return (
    <div className="appBottomMenu">
      {menuItems.map((item) => (
        <a 
          key={item.href}
          href={item.href} 
          className={`item ${item.active ? 'active' : ''}`}
          title={item.label}
          style={{ textDecoration: 'none' }}
        >
          <div className="col">
            <span style={{ fontSize: '26px', lineHeight: '1' }}>{item.icon}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
