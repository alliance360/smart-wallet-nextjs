interface SidebarPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarPanel({ isOpen, onClose }: SidebarPanelProps) {
  if (!isOpen) return null;

  return (
    <div className={`modal fade panelbox panelbox-left ${isOpen ? 'show' : ''}`} 
         style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-0">
            {/* Profile Box */}
            <div className="profileBox pt-2 pb-2">
              <div className="image-wrapper">
                <img src="/assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w36" />
              </div>
              <div className="in">
                <strong>Sebastian Doe</strong>
                <div className="text-muted">4029209</div>
              </div>
              <button 
                className="btn btn-link btn-icon sidebar-close" 
                onClick={onClose}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>

            {/* Balance */}
            <div className="sidebar-balance">
              <div className="listview-title">Balance</div>
              <div className="in">
                <h1 className="amount">$ 2,562.50</h1>
              </div>
            </div>

            {/* Action Group */}
            <div className="action-group">
              <a href="/" className="action-button">
                <div className="in">
                  <div className="iconbox">
                    <ion-icon name="add-outline"></ion-icon>
                  </div>
                  Deposit
                </div>
              </a>
              <a href="/" className="action-button">
                <div className="in">
                  <div className="iconbox">
                    <ion-icon name="arrow-down-outline"></ion-icon>
                  </div>
                  Withdraw
                </div>
              </a>
              <a href="/" className="action-button">
                <div className="in">
                  <div className="iconbox">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                  Send
                </div>
              </a>
              <a href="/cards" className="action-button">
                <div className="in">
                  <div className="iconbox">
                    <ion-icon name="card-outline"></ion-icon>
                  </div>
                  My Cards
                </div>
              </a>
            </div>

            {/* Menu Items */}
            <div className="listview-title mt-1">Menu</div>
            <ul className="listview flush transparent no-line image-listview">
              <li>
                <a href="/" className="item">
                  <div className="icon-box bg-primary">
                    <ion-icon name="pie-chart-outline"></ion-icon>
                  </div>
                  <div className="in">
                    Overview
                    <span className="badge badge-primary">10</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/pages" className="item">
                  <div className="icon-box bg-primary">
                    <ion-icon name="document-text-outline"></ion-icon>
                  </div>
                  <div className="in">Pages</div>
                </a>
              </li>
              <li>
                <a href="/components" className="item">
                  <div className="icon-box bg-primary">
                    <ion-icon name="apps-outline"></ion-icon>
                  </div>
                  <div className="in">Components</div>
                </a>
              </li>
              <li>
                <a href="/cards" className="item">
                  <div className="icon-box bg-primary">
                    <ion-icon name="card-outline"></ion-icon>
                  </div>
                  <div className="in">My Cards</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}