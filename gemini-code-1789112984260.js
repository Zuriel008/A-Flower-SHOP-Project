import React, { useState } from 'react';

export default function FlowerLandingPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const featuredProducts = [
    {
      id: 1,
      name: 'Spring Romance Bouquet',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80',
      category: 'Best Seller'
    },
    {
      id: 2,
      name: 'Sunlit Meadow Arrangement',
      price: '$52.00',
      image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80',
      category: 'New'
    },
    {
      id: 3,
      name: 'Velvet Rose Deluxe',
      price: '$65.00',
      image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=600&q=80',
      category: 'Popular'
    }
  ];

  const features = [
    { title: 'Fresh Daily', desc: 'Sourced directly from local sustainable farms every morning.' },
    { title: 'Same-Day Delivery', desc: 'Order before 2 PM for guaranteed same-day local delivery.' },
    { title: 'Handcrafted Joy', desc: 'Arranged with love and care by master floral designers.' }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>🌸 Bloom & Petal</div>
        <div style={{ ...styles.navLinks, ...(mobileMenuOpen ? styles.navLinksMobile : {}) }}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#featured" style={styles.navLink}>Featured</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <button style={styles.shopBtn}>Shop Now</button>
        </div>
        <button 
          style={styles.hamburger} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.subtitle}>Handpicked with Love</span>
          <h1 style={styles.heroTitle}>Fresh Flowers Delivered to Your Doorstep</h1>
          <p style={styles.heroDescription}>
            Bring natural beauty, vibrant colors, and delight into every room with our handcrafted floral arrangements.
          </p>
          <div style={styles.heroButtons}>
            <a href="#featured" style={styles.primaryBtn}>Explore Collection</a>
            <a href="#about" style={styles.secondaryBtn}>Our Story</a>
          </div>
        </div>
      </header>

      {/* Features Banner */}
      <section style={styles.featuresSection}>
        <div style={styles.featuresGrid}>
          {features.map((feat, index) => (
            <div key={index} style={styles.featureCard}>
              <h3 style={styles.featureTitle}>{feat.title}</h3>
              <p style={styles.featureDesc}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Arrangements</h2>
        <p style={styles.sectionSubtitle}>Carefully curated bouquets for every occasion</p>
        
        <div style={styles.productsGrid}>
          {featuredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <div style={styles.imageWrapper}>
                <span style={styles.badge}>{product.category}</span>
                <img src={product.image} alt={product.name} style={styles.productImg} />
              </div>
              <div style={styles.productDetails}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>{product.price}</p>
                <button style={styles.addToCartBtn}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section id="contact" style={styles.newsletterSection}>
        <div style={styles.newsletterContent}>
          <h2 style={styles.newsletterTitle}>Get 15% Off Your First Order</h2>
          <p style={styles.newsletterDesc}>Subscribe to receive special offers, flower care tips, and seasonal updates.</p>
          
          {subscribed ? (
            <p style={styles.successMessage}>🎉 Thank you for subscribing! Use code <strong>BLOOM15</strong> at checkout.</p>
          ) : (
            <form onSubmit={handleSubscribe} style={styles.form}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
              />
              <button type="submit" style={styles.submitBtn}>Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Bloom & Petal. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Inline Styles (CSS-in-JS)
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#2d3748',
    backgroundColor: '#faf8f5',
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#d53f8c'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  navLink: {
    textDecoration: 'none',
    color: '#4a5568',
    fontWeight: '500',
    transition: 'color 0.2s'
  },
  shopBtn: {
    backgroundColor: '#d53f8c',
    color: '#fff',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  hamburger: {
    display: 'none',
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  hero: {
    padding: '5rem 2rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #fff5f7 0%, #fed7e2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroContent: {
    maxWidth: '700px'
  },
  subtitle: {
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    color: '#b83280',
    marginBottom: '0.5rem',
    display: 'block'
  },
  heroTitle: {
    fontSize: '2.8rem',
    lineHeight: '1.2',
    color: '#1a202c',
    marginBottom: '1rem'
  },
  heroDescription: {
    fontSize: '1.15rem',
    color: '#718096',
    marginBottom: '2rem'
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    backgroundColor: '#d53f8c',
    color: '#fff',
    padding: '0.8rem 1.8rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: '600'
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#d53f8c',
    border: '2px solid #d53f8c',
    padding: '0.8rem 1.8rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: '600'
  },
  featuresSection: {
    backgroundColor: '#ffffff',
    padding: '3rem 2rem'
  },
  featuresGrid: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  featureCard: {
    textAlign: 'center',
    padding: '1rem'
  },
  featureTitle: {
    fontSize: '1.2rem',
    color: '#2d3748',
    marginBottom: '0.5rem'
  },
  featureDesc: {
    color: '#718096',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  },
  section: {
    padding: '4rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#1a202c',
    marginBottom: '0.5rem'
  },
  sectionSubtitle: {
    color: '#718096',
    marginBottom: '3rem'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column'
  },
  imageWrapper: {
    position: 'relative',
    height: '250px'
  },
  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  badge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#d53f8c',
    color: '#fff',
    padding: '0.2rem 0.6rem',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  },
  productDetails: {
    padding: '1.5rem',
    textAlign: 'left'
  },
  productName: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: '#2d3748'
  },
  productPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#b83280',
    marginBottom: '1rem'
  },
  addToCartBtn: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#edf2f7',
    border: 'none',
    borderRadius: '6px',
    color: '#2d3748',
    fontWeight: '600',
    cursor: 'pointer'
  },
  newsletterSection: {
    backgroundColor: '#fbb6ce',
    padding: '4rem 2rem',
    textAlign: 'center'
  },
  newsletterContent: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  newsletterTitle: {
    fontSize: '1.8rem',
    color: '#702459',
    marginBottom: '0.5rem'
  },
  newsletterDesc: {
    color: '#702459',
    marginBottom: '2rem'
  },
  form: {
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  input: {
    padding: '0.8rem 1rem',
    borderRadius: '25px',
    border: '1px solid #ccc',
    outline: 'none',
    minWidth: '250px',
    flex: '1'
  },
  submitBtn: {
    padding: '0.8rem 1.5rem',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#702459',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  successMessage: {
    color: '#702459',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px'
  },
  footer: {
    backgroundColor: '#1a202c',
    color: '#a0aec0',
    textAlign: 'center',
    padding: '1.5rem',
    fontSize: '0.9rem'
  }
};