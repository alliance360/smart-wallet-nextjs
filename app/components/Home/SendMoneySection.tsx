export default function SendMoneySection() {
  const contacts = [
    { name: 'Jurrien', avatar: '/assets/img/sample/avatar/avatar2.jpg' },
    { name: 'Elwin', avatar: '/assets/img/sample/avatar/avatar3.jpg' },
    { name: 'Alma', avatar: '/assets/img/sample/avatar/avatar4.jpg' },
    { name: 'Justine', avatar: '/assets/img/sample/avatar/avatar5.jpg' },
    { name: 'Maria', avatar: '/assets/img/sample/avatar/avatar6.jpg' },
    { name: 'Pamela', avatar: '/assets/img/sample/avatar/avatar7.jpg' },
    { name: 'Neville', avatar: '/assets/img/sample/avatar/avatar8.jpg' },
    { name: 'Alex', avatar: '/assets/img/sample/avatar/avatar9.jpg' },
    { name: 'Stina', avatar: '/assets/img/sample/avatar/avatar10.jpg' },
  ];

  return (
    <div className="section full mt-4">
      <div className="section-heading padding">
        <h2 className="title">Send Money</h2>
        <a href="#" className="link">Add New</a>
      </div>
      
      <div className="carousel-small splide">
        <div className="splide__track">
          <ul className="splide__list">
            {contacts.map((contact, index) => (
              <li key={index} className="splide__slide">
                <a href="#">
                  <div className="user-card">
                    <img 
                      src={contact.avatar} 
                      alt="img" 
                      className="imaged w-100" 
                    />
                    <strong>{contact.name}</strong>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}