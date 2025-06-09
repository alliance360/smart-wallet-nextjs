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
    title: "Rules you need to know in business",
    author: "Jack Doe",
    authorImage: "/assets/img/sample/avatar/avatar1.jpg",
    date: "24, September 2021",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam fringilla euismod. Nulla viverra eu ante tincidunt viverra. Sed dignissim maximus turpis et dictum.",
    content: [
      {
        type: "text",
        content: "Proin luctus viverra volutpat. Aenean hendrerit nisi quis consequat pretium. Maecenas ut vestibulum justo. Morbi eleifend ante eget arcu sodales malesuada. Nunc interdum ac diam ut bibendum. Proin gravida sit amet urna ac scelerisque. Vivamus consectetur ex vel felis bibendum fermentum."
      },
      {
        type: "image",
        content: "/assets/img/sample/photo/3.jpg"
      },
      {
        type: "text",
        content: "Nullam augue magna, dignissim sit amet libero eu, ultrices tempus metus. Ut finibus ac justo eu tempor. Quisque egestas lectus neque, quis sodales lacus volutpat id."
      },
      {
        type: "heading",
        content: "Quisque id risus diam"
      },
      {
        type: "text",
        content: "Vivamus venenatis at purus at varius. Nam pharetra, magna et interdum dignissim, purus risus ullamcorper ipsum, et pharetra turpis ex vel orci."
      },
      {
        type: "image",
        content: "/assets/img/sample/photo/1.jpg"
      },
      {
        type: "heading",
        content: "Pellentesque dictum"
      },
      {
        type: "text",
        content: "Pellentesque condimentum ornare nibh, nec iaculis purus faucibus ac. Etiam lacus ante, eleifend et aliquam a, tristique vel urna."
      },
      {
        type: "text",
        content: "Vivamus venenatis at purus at varius. Nam pharetra, magna et interdum dignissim, purus risus ullamcorper ipsum, et pharetra turpis ex vel orci. Nulla tincidunt nibh ac elit semper placerat. Fusce mattis, sapien vel vulputate scelerisque, ligula erat mollis elit, vitae condimentum ante leo quis quam. Vivamus sit amet quam ut eros varius venenatis et et orci. Pellentesque dictum egestas odio, sed auctor nulla euismod quis. Donec elementum feugiat ex, nec pharetra nulla sodales ac."
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
