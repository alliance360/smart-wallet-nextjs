export default function StatsSection() {
  const stats = [
    { title: 'Smart Wallet (crypto)', value: '$ 0.00', color: 'text-success' },
    { title: 'NFT Value', value: '$ 0.00', color: 'text-success' },
    { title: 'Cashback Card Balance', value: '$ 0.00', color: 'text-success' },
    { title: 'Commissions to come', value: '$ 0.00', color: 'text-warning' },
  ];

  return (
    <div className="section">
      <div className="row mt-2">
        {stats.map((stat, index) => (
          <div key={index} className="col-6">
            <div className="stat-box">
              <div className="title">{stat.title}</div>
              <div className={`value ${stat.color}`}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}