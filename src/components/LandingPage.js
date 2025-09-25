import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onNavigateToChat }) => {
  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="landing-nav">
        <div className="nav-left">
          <div className="logo">
            <span className="logo-icon">AR</span>
            <span className="logo-text">ARGO Explorer</span>
          </div>
        </div>
        <div className="nav-center">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link" onClick={onNavigateToChat}>Chat</a>
          <a href="#" className="nav-link">Visualization</a>
        </div>
        <div className="nav-right">
          <button className="theme-toggle">Dark</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="landing-main">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Explore ARGO Float Data</h1>
          <p className="hero-description">
            Discover oceanographic data from the global network of ARGO floats. Visualize temperature,
            salinity, and pressure measurements across the world's oceans.
          </p>
        </section>

        {/* Content Sections */}
        <section className="content-sections">
          <div className="section-grid">
            {/* Interactive Visualizations */}
            <div className="content-section">
              <h2 className="section-title">Interactive Visualizations</h2>
              <div className="section-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-text">Chart Placeholder</span>
                </div>
              </div>
            </div>

            {/* Global Coverage */}
            <div className="content-section">
              <h2 className="section-title">Global Coverage</h2>
              <div className="section-placeholder">
                <div className="placeholder-content">
                  <span className="placeholder-text">Map Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <span>© 2025 ARGO Explorer</span>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link" onClick={onNavigateToChat}>Chat</a>
            <a href="#" className="footer-link">Visualization</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
