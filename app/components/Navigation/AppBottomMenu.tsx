export default function AppBottomMenu() {
  const menuItems = [
    { href: '/', icon: 'pie-chart-outline', label: 'Overview', active: true },
    { href: '/pages', icon: 'document-text-outline', label: 'Pages', active: false },
    { href: '/components', icon: 'apps-outline', label: 'Components', active: false },
    { href: '/cards', icon: 'card-outline', label: 'My Cards', active: false },
    { href: '/settings', icon: 'settings-outline', label: 'Settings', active: false },
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
            <ion-icon name={item.icon}></ion-icon>
            <strong>{item.label}</strong>
          </div>
        </a>
      ))}
    </div>
  );
}
