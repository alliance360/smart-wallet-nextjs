export default function DesktopHeader() {
  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>

      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button style={{
          padding: '0.5rem',
          border: 'none',
          borderRadius: '6px',
          backgroundColor: '#f3f4f6',
          cursor: 'pointer',
          position: 'relative'
        }}>
          <span style={{ fontSize: '1.25rem' }}>🔔</span>
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '0.625rem',
            padding: '2px 6px',
            borderRadius: '10px',
            minWidth: '16px',
            textAlign: 'center'
          }}>
            4
          </span>
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="/assets/img/sample/avatar/avatar1.jpg" 
            alt="Profile" 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              objectFit: 'cover'
            }}
          />
          <div>
            <div style={{ fontWeight: '600', fontSize: '0.875rem' }}>Sebastian Doe</div>
            <div style={{ color: '#6b7280', fontSize: '0.75rem' }}>sebastian@example.com</div>
          </div>
        </div>
      </div>
    </header>
  );
}