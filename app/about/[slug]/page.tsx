// app/about/[slug]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const router = useRouter();
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [slug, setSlug] = useState<string>('');

  useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  // Mock data - in real app, this would come from your CMS or API
  const blogPost = {
    title: "Alliance360 Feeder Program",
    author: "GLOBAL Alliance360 Club",
    authorImage: "/assets/img/sample/avatar/avatar1.jpg",
    date: "12, June 2025",
    excerpt: "Your Gateway to the Collaborative Economy",
    content: [
      {
        type: "heading",
        content: "Welcome to the Future of Business Networking"
      },
      {
        type: "text",
        content: "Alliance360 Club is more than a networking platform - it's a revolutionary ecosystem where individual professionals and businesses unite to create a participatory, circular economy that benefits everyone."
      },
      {
        type: "heading",
        content: "What is the Alliance360 Feeder Program?"
      },
      {
        type: "text",
        content: "Your entry point into a dynamic business community designed to: Connect you with like-minded professionals and forward-thinking businesses | Empower your growth through collaborative opportunities | Enable sustainable business practices through our circular economy model | Amplify your capabilities through strategic alliances"
      }
    ]
  };

  const relatedPosts = [
    {
      id: 1,
      title: "What will be the value of bitcoin in the next...",
      image: "/assets/img/sample/photo/1.jpg",
      slug: "bitcoin-value-future"
    },
    {
      id: 2,
      title: "Rules you need to know in business",
      image: "/assets/img/sample/photo/2.jpg",
      slug: "business-rules"
    },
    {
      id: 3,
      title: "10 easy ways to save your money",
      image: "/assets/img/sample/photo/3.jpg",
      slug: "save-money-tips"
    },
    {
      id: 4,
      title: "Follow the financial agenda with...",
      image: "/assets/img/sample/photo/4.jpg",
      slug: "financial-agenda"
    }
  ];

  const shareOptions = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" }
  ];

  return (
    <>
      {/* App Header */}
      <div className="appHeader">
        <div className="left">
          <button 
            className="headerButton goBack"
            onClick={() => router.back()}
          >
            <span>←</span>
          </button>
        </div>
        <div className="pageTitle">
          Blog Post
        </div>
        <div className="right">
          <button 
            className="headerButton"
            onClick={() => setShareModalOpen(true)}
          >
            <span>📤</span>
          </button>
        </div>
      </div>

      {/* App Capsule */}
      <div id="appCapsule">
        {slug && ( // Only render when slug is available
          <>
            <div className="section mt-2">
              <h1>{blogPost.title}</h1>
              <div className="blog-header-info mt-2 mb-2">
                <div>
                  <img 
                    src={blogPost.authorImage} 
                    alt="img" 
                    className="imaged w24 rounded me-05"
                  />
                  by <a href="#">{blogPost.author}</a>
                </div>
                <div>{blogPost.date}</div>
              </div>
              <div className="lead">
                {blogPost.excerpt}
              </div>
            </div>

            <div className="section mt-2">
              {blogPost.content.map((item, index) => {
                switch (item.type) {
                  case 'text':
                    return <p key={index}>{item.content}</p>;
                  case 'image':
                    return (
                      <figure key={index}>
                        <img 
                          src={item.content} 
                          alt="image" 
                          className="imaged img-fluid"
                        />
                      </figure>
                    );
                  case 'heading':
                    return <h3 key={index}>{item.content}</h3>;
                  default:
                    return null;
                }
              })}
            </div>

            <div className="section">
              <button 
                className="btn btn-block btn-primary"
                onClick={() => setShareModalOpen(true)}
              >
                📤 Share This Post
              </button>
            </div>

            <div className="section mt-3">
              <h2>Related Posts</h2>
              <div className="row mt-3">
                {relatedPosts.map((post) => (
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
            </div>
          </>
        )}
      </div>

      {/* Share Modal */}
      {shareModalOpen && (
        <div className="modal-overlay" onClick={() => setShareModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Share with</h5>
              <button 
                className="close-btn"
                onClick={() => setShareModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <ul className="action-button-list">
                {shareOptions.map((option) => (
                  <li key={option.name}>
                    <a 
                      href={option.url} 
                      className="btn btn-list"
                      onClick={() => setShareModalOpen(false)}
                    >
                      <span>
                        {option.icon} {option.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: flex-end;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          width: 100%;
          border-radius: 20px 20px 0 0;
          padding: 20px;
          max-height: 70vh;
          overflow-y: auto;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
        }
        
        .action-button-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .action-button-list li {
          margin-bottom: 10px;
        }
        
        .btn-list {
          display: block;
          width: 100%;
          padding: 15px;
          text-decoration: none;
          color: #333;
          border: 1px solid #eee;
          border-radius: 8px;
          transition: background-color 0.2s;
        }
        
        .btn-list:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}
