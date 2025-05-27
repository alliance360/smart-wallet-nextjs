export default function TransactionsSection() {
  const transactions = [
    {
      id: 1,
      image: '/assets/img/sample/brand/1.jpg',
      name: 'Amazon',
      category: 'Shopping',
      amount: '- $ 150',
      color: 'text-danger'
    },
    {
      id: 2,
      image: '/assets/img/sample/brand/2.jpg',
      name: 'Apple',
      category: 'Appstore Purchase',
      amount: '- $ 29',
      color: 'text-danger'
    },
    {
      id: 3,
      image: '/assets/img/sample/avatar/avatar3.jpg',
      name: 'Alex Ljung',
      category: 'Transfer',
      amount: '+ $ 1,000',
      color: ''
    },
    {
      id: 4,
      image: '/assets/img/sample/avatar/avatar4.jpg',
      name: 'Beatriz Brito',
      category: 'Transfer',
      amount: '- $ 186',
      color: 'text-danger'
    },
  ];

  return (
    <div className="section mt-4">
      <div className="section-heading">
        <h2 className="title">Transactions</h2>
        <a href="/transactions" className="link">View All</a>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => (
          <a 
            key={transaction.id} 
            href={`/transaction/${transaction.id}`} 
            className="item"
          >
            <div className="detail">
              <img 
                src={transaction.image} 
                alt="img" 
                className="image-block imaged w48" 
              />
              <div>
                <strong>{transaction.name}</strong>
                <p>{transaction.category}</p>
              </div>
            </div>
            <div className="right">
              <div className={`price ${transaction.color}`}>
                {transaction.amount}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}