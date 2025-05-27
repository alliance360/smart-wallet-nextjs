export default function SavingGoalsSection() {
  const goals = [
    {
      id: 1,
      title: 'Gaming Console',
      category: 'Gaming',
      price: '$ 499',
      progress: 85
    },
    {
      id: 2,
      title: 'New House',
      category: 'Living',
      price: '$ 100,000',
      progress: 55
    },
    {
      id: 3,
      title: 'Sport Car',
      category: 'Lifestyle',
      price: '$ 42,500',
      progress: 15
    },
  ];

  return (
    <div className="section mt-4">
      <div className="section-heading">
        <h2 className="title">Saving Goals</h2>
        <a href="/savings" className="link">View All</a>
      </div>
      <div className="goals">
        {goals.map((goal) => (
          <div key={goal.id} className="item">
            <div className="in">
              <div>
                <h4>{goal.title}</h4>
                <p>{goal.category}</p>
              </div>
              <div className="price">{goal.price}</div>
            </div>
            <div className="progress">
              <div 
                className="progress-bar" 
                role="progressbar" 
                style={{ width: `${goal.progress}%` }}
                aria-valuenow={goal.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {goal.progress}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

