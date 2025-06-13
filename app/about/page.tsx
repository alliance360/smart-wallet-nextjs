// app/about/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "A word about Legacy Feeder",
      image: "/assets/img/sample/photo/1.jpg",
      slug: "legacy-feeder"
    },
    {
      id: 2,
      title: "How can Legacy Feeder help your endeavor",
      image: "/assets/img/sample/photo/2.jpg",
      slug: "tools-to-grow"
    },
    {
      id: 3,
      title: "The Legacy Feeder program",
      image: "/assets/img/sample/photo/3.jpg",
      slug: "feeder-program"
    },
    {
      id: 4,
      title: "The Marketplace",
      image: "/assets/img/sample/photo/4.jpg",
      slug: "marketplace"
    },
    {
      id: 5,
      title: "The Social Network",
      image: "/assets/img/sample/photo/5.jpg",
      slug: "social-network"
    },
    {
      id: 6,
      title: "What you need to handle money",
      image: "/assets/img/sample/photo/6.jpg",
      slug: "finacial-ecosystem"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* App Header */}
      <div className="appHeader">
        <div className="pageTitle left">
          News
        </div>
        <div className="right">
          <button 
            className="headerButton"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <span>🔍</span>
          </button>
        </div>
      </div>

      {/* Search Component */}
      {searchVisible && (
        <div id="search" className="appHeader">
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group searchbox">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="input-icon icon ion-ios-search"></i>
              <button 
                type="button"
                className="ms-1 close"
                onClick={() => {
                  setSearchVisible(false);
                  setSearchQuery('');
                }}
              >
                <i className="icon ion-ios-close-circle"></i>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section tab-content mt-2 mb-2">
          <div className="row">
            {filteredPosts.map((post) => (
              <div key={post.id} className="col-6 mb-2">
                <Link href={`/about/${post.slug}`}>
                  <div className="blog-card">
                    <img 
                      src={post.image} 
                      alt="image" 
                      className="imaged w-100"
                    />
                    <div className="text">
                      <h4 className="title">{post.title}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && searchQuery && (
            <div className="text-center mt-4">
              <p>No posts found matching "{searchQuery}"</p>
            </div>
          )}

          <div>
            <button className="btn btn-block btn-primary btn-lg">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}