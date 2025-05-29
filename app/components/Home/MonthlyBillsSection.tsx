export default function MonthlyBillsSection() {
  const bills = [
    {
      id: 1,
      image: '/assets/img/sample/brand/1.jpg',
      price: '$ 14',
      description: 'Prime Monthly Subscription',
      type: 'image'
    },
    {
      id: 2,
      image: '/assets/img/sample/brand/2.jpg',
      price: '$ 9',
      description: 'Music Monthly Subscription',
      type: 'image'
    },
    {
      id: 3,
      icon: '🏥',
      iconColor: 'bg-danger',
      price: '$ 299',
      description: 'Monthly Health Insurance',
      type: 'icon'
    },
    {
      id: 4,
      icon: '💳',
      iconColor: '',
      price: '$ 962',
      description: 'Credit Card Statement',
      type: 'icon'
    },
  ];

  return (
    <div className="section full mt-4">
      <div className="section-heading padding">
        <h2 className="title">Monthly Bills</h2>
        <a href="/bills" className="link">View All</a>
      </div>
      
      <div className="carousel-multiple splide">
        <div className="splide__track">
          <ul className="splide__list">
            {bills.map((bill) => (
              <li key={bill.id} className="splide__slide">
                <div className="bill-box">
                  <div className="img-wrapper">
                    {bill.type === 'image' ? (
                      <img 
                        src={bill.image} 
                        alt="img" 
                        className="image-block imaged w48" 
                      />
                    ) : (
                      <div className={`iconbox ${bill.iconColor}`}>
                        {/* Replace ion-icon with span containing emoji */}
                        <span>{bill.icon}</span>
                      </div>
                    )}
                  </div>
                  <div className="price">{bill.price}</div>
                  <p>{bill.description}</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}