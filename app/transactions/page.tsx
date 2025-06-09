// app/transactions/page.tsx
export default function TransactionsPage() {
  return (
    <>
      {/* App Header */}
      <div className="appHeader">
        <div className="pageTitle left">
          Transactions
        </div>
      </div>

      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section mt-4 text-center">
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>💸</div>
          <h2 style={{ marginBottom: '15px', color: '#333' }}>Coming Soon</h2>
          <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.5' }}>
            We're working hard to bring you an amazing transactions experience. 
            Stay tuned for updates!
          </p>
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '10px',
            border: '2px dashed #dee2e6'
          }}>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: 0 }}>
              Features coming: Transaction history, Send money, Receive payments, Analytics
            </p>
          </div>
        </div>
      </div>
    </>
  );
}