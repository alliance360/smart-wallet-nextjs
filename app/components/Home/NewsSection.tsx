export default function NewsSection() {
  const news = [
    {
      id: 1,
      image: '/assets/img/sample/photo/1.jpg',
      title: 'What will be the value of bitcoin in the next...'
    },
    {
      id: 2,
      image: '/assets/img/sample/photo/2.jpg',
      title: 'Rules you need to know in business'
    },
    {
      id: 3,
      image: '/assets/img/sample/photo/3.jpg',
      title: '10 easy ways to save your money'
    },
    {
      id: 4,
      image: '/assets/img/sample/photo/4.jpg',
      title: 'Follow the financial agenda with...'
    },
  ];

  return (
    <div className="section full mt-4 mb-3">
      <div className="section-heading padding">
        <h2 className="title">Latest News</h2>
        <a href="/blog" className="link">View All</a>
      </div>

      <div className="carousel-multiple splide">
        <div className="splide__track">
          <ul className="splide__list">
            {news.map((article) => (
              <li key={article.id} className="splide__slide">
                <a href={`/blog/${article.id}`}>
                  <div className="blog-card">
                    <img 
                      src={article.image} 
                      alt="image" 
                      className="imaged w-100" 
                    />
                    <div className="text">
                      <h4 className="title">{article.title}</h4>
                    </div>
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