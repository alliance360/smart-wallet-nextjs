'use client';

// Enhanced Modal Component with external link support
export const EnhancedModal = ({ 
  isOpen, 
  onClose, 
  title,
  description,
  externalUrl,
  isComingSoon = false
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string;
  description: string;
  externalUrl?: string;
  isComingSoon?: boolean;
}) => {
  if (!isOpen) return null;

  const handleExternalLink = () => {
    if (externalUrl) {
      // For PWA: Use window.open with specific parameters
      const newWindow = window.open(
        externalUrl, 
        '_blank',
        'noopener,noreferrer,width=800,height=600'
      );
      
      // Fallback for PWA where window.open might be blocked
      if (!newWindow) {
        // Alternative: Use location.href in PWA context
        window.location.href = externalUrl;
      }
    }
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '16px',
          maxWidth: '400px',
          width: '90%',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ 
          color: '#163563', 
          marginBottom: '1rem',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          {title}
        </h3>
        
        <p style={{ 
          color: '#6b7280', 
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>
          {description}
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {!isComingSoon && externalUrl && (
            <button 
              onClick={handleExternalLink}
              style={{
                padding: '12px 24px',
                backgroundColor: '#163563',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(22, 53, 99, 0.3)'
              }}
            >
              🌐 Open Platform
            </button>
          )}
          
          {isComingSoon && (
            <div style={{
              padding: '12px 24px',
              backgroundColor: '#f3f4f6',
              color: '#6b7280',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              🚧 Coming Soon
            </div>
          )}
          
          <button 
            onClick={onClose}
            style={{
              padding: '12px 24px',
              backgroundColor: '#f8f9fa',
              color: '#163563',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Close
          </button>
        </div>
        
        {!isComingSoon && externalUrl && (
          <p style={{ 
            fontSize: '12px', 
            color: '#9ca3af', 
            marginTop: '1rem',
            marginBottom: '0'
          }}>
            🔗 {externalUrl}
          </p>
        )}
      </div>
    </div>
  );
};

// Modal configuration data
export const modalConfig = {
  marketplace: {
    title: "A360 Marketplace",
    description: "Discover and trade digital assets, NFTs, and exclusive Alliance360 products in our decentralized marketplace.",
    externalUrl: "https://market.alliance360.club"
  },
  backoffice: {
    title: "Back-Office",
    description: "Access your administrative dashboard, analytics, and business management tools.",
    externalUrl: undefined,
    isComingSoon: true
  },
  crowdfunding: {
    title: "A360 Crowdfunding",
    description: "You're already here! This Smart Wallet is your gateway to crowdfunding projects and investment opportunities.",
    externalUrl: "https://finance.alliance360.club"
  },
  social: {
    title: "A360 Social Network",
    description: "Connect with the Alliance360 community, share insights, and collaborate on projects.",
    externalUrl: "https://social.alliance360.club"
  }
};

// Legacy Simple Modal (for backward compatibility if needed)
export const SimpleModal = ({ 
  isOpen, 
  onClose, 
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
}) => {
  if (!isOpen) return null;
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '90%'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{title}</h3>
        <p>Polygon functionality coming soon...</p>
        <button 
          onClick={onClose}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#163563',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};