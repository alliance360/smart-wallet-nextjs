export default function StatsSection() {
  const stats = [
    { title: 'Income', value: '$ 552.95', color: 'text-success' },
    { title: 'Expenses', value: '$ 86.45', color: 'text-danger' },
    { title: 'Total Bills', value: '$ 53.25', color: '' },
    { title: 'Savings', value: '$ 120.99', color: '' },
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