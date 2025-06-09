// app/team/page.tsx
export default function TeamPage() {
  return (
    <>
      {/* App Header */}
      <div className="appHeader">
        <div className="pageTitle left">
          My Team
        </div>
      </div>

      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section mt-4 text-center">
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>👥</div>
          <h2 style={{ marginBottom: '15px', color: '#333' }}>Coming Soon</h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.5' }}>
            Your team management dashboard is under development. 
            Get ready to collaborate like never before!
          </p>
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '10px',
            border: '2px dashed #dee2e6'
          }}>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>
              Features coming: Team members, Roles & permissions, Chat, Project collaboration
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
