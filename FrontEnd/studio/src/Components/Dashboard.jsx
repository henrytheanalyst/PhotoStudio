function Dashboard(){
    return(
        <div className="container">
            <aside className="sidebar">
            <div className="left">
                <div className="image-area">
                    <img src="https://static.vecteezy.com/system/resources/previews/020/643/620/non_2x/camera-photography-logo-abstract-camera-icon-design-template-camera-illustration-vector.jpg" alt="logo" />
                      <h2>
                        Lumiere
                    </h2>
                </div>
              
                <div className="div-area">
                    <h2>MENU</h2>
                    <div className="action selected">
                        <span className="emoji">▣</span>
                        <span className="action-name">Dashboard</span>
                        
                    </div>
                    <div className="action">
                         <span className="emoji">◧</span>
                        <span className="action-name">Bookings</span>
                    </div>
                    <div className="action">
                         <span className="emoji">◉</span>
                        <span className="action-name">Clients</span>
                    </div>
                    <div className="action">
                         <span className="emoji">⊞</span>
                        <span className="action-name">Gallery</span>
                    </div>
                    <div className="action">
                         <span className="emoji">🗓️</span>
                        <span className="action-name">Calendar</span>
                    </div>
                
                </div>
                <button type="button">
                    Sign out
                </button>
            </div>
            </aside>
            <section className="content">
                <header>
                    <h2>Dashboard</h2>
                    <p>
                        {new Date().toLocaleDateString()}
                    </p>
                </header>
                <button>
                    New Booking
                </button>
            </section>
        </div>
    );
}
export default Dashboard