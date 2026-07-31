import React, { useState, useMemo } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Search,
  Sparkles,
  Flame,
  Award,
  Calendar,
  ChevronRight,
  UtensilsCrossed,
  Soup,
  PackageCheck,
  Star,
  CheckCircle,
  XCircle,
  PhoneCall
} from 'lucide-react';
import {
  menuCategoriesData,
  menuItemsData,
  chefsRecommendationData
} from '../data/menuData';
import { images } from '../data/restaurantData';
import ReservationModal from '../components/ReservationModal';

const MenuPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const menuGrid = document.getElementById('menu-items-grid');
    if (menuGrid) {
      menuGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered menu items based on search query and active category filter
  const filteredMenuItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const normalizedQuery = query.replace(/chili/g, 'chilli').replace(/sichuan/g, 'schezwan');

    return menuItemsData.filter((item) => {
      // If search query exists, match globally across all categories
      const matchesCategory =
        !query || activeCategoryFilter === 'all' || item.categoryId === activeCategoryFilter;

      if (!matchesCategory) return false;

      if (!query) return true;

      // Check name, category name, description
      const nameMatch = item.name.toLowerCase().includes(query) || item.name.toLowerCase().includes(normalizedQuery);
      const categoryMatch = item.category.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query) || item.description.toLowerCase().includes(normalizedQuery);

      // Check Veg / Non-Veg search terms
      let vegMatch = false;
      if (query === 'veg' || query === 'vegetarian') {
        vegMatch = item.isVeg === true;
      } else if (query === 'non veg' || query === 'non-veg' || query === 'nonveg') {
        vegMatch = item.isVeg === false;
      }

      // Special & Popular tags match
      const specialMatch =
        (query === 'chef' || query === 'special' || query === 'recommended') && item.isChefRecommended;
      const popularMatch =
        (query === 'popular' || query === 'bestseller') && item.isPopular;

      return nameMatch || categoryMatch || descMatch || vegMatch || specialMatch || popularMatch;
    });
  }, [searchQuery, activeCategoryFilter]);

  // Map category icons dynamically
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Soup':
        return <Soup size={28} color="var(--accent)" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={28} color="var(--accent)" />;
      case 'PackageCheck':
        return <PackageCheck size={28} color="var(--accent)" />;
      case 'Sparkles':
        return <Sparkles size={28} color="var(--accent-gold)" />;
      default:
        return <Sparkles size={28} color="var(--accent)" />;
    }
  };

  return (
    <div style={{ overflowX: 'hidden', backgroundColor: 'var(--bg-cream)' }}>
      {/* Reservation Modal Handler */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />

      {/* 1. HERO SECTION */}
      <section
        className="hero-wrapper"
        style={{
          backgroundImage: `url(${images.heroBg})`,
          minHeight: '65vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          paddingTop: '7rem',
          paddingBottom: '4rem'
        }}
      >
        <div className="hero-overlay" />

        <div className="hero-content animate-fade-in">
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'rgba(10, 13, 16, 0.85)',
              border: '1px solid var(--accent-gold)',
              padding: '0.45rem 1.25rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              boxShadow: '0 0 15px rgba(229, 193, 88, 0.25)'
            }}
          >
            <Sparkles size={16} color="var(--accent-gold)" />
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase'
              }}
            >
              Exquisite Asian Culinary Art
            </span>
          </div>

          <h1 className="hero-title" style={{ marginBottom: '1.25rem' }}>
            Our Signature <span className="text-gradient-teal">Menu</span>
          </h1>

          <p className="hero-subtitle">
            Discover authentic Asian flavors prepared with premium ingredients and traditional recipes.
          </p>
        </div>
      </section>

      {/* 2. SEARCH BAR SECTION (Glassmorphism & Instant Live Filtering) */}
      <section
        style={{
          padding: '2.5rem 0',
          borderBottom: '1px solid var(--border-light)',
          position: 'sticky',
          top: '70px',
          zIndex: 900,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(10, 13, 16, 0.92)'
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              position: 'relative'
            }}
          >
            <form
              onSubmit={handleSearchSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(20, 28, 36, 0.85)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid var(--accent)',
                borderRadius: '50px',
                padding: '0.4rem 0.6rem 0.4rem 1.5rem',
                boxShadow: '0 8px 32px rgba(0, 210, 180, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                type="submit"
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0,
                  marginRight: '0.8rem'
                }}
                title="Search menu"
              >
                <Search size={22} color="var(--accent)" style={{ flexShrink: 0 }} />
              </button>
              <input
                type="text"
                placeholder="Search dishes (Noodles, Rice, Momos, Manchurian, Chicken, Veg...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-sans)',
                  padding: '0.6rem 0'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.4rem',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Clear search"
                >
                  <XCircle size={20} />
                </button>
              )}
            </form>

            {/* Quick Keyword Pills under Search Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                marginTop: '1rem'
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Popular Searches:</span>
              {['Noodles', 'Rice', 'Momos', 'Manchurian', 'Chicken', 'Veg', 'Dragon'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSearchQuery(tag);
                    setActiveCategoryFilter('all');
                    handleSearchSubmit();
                  }}
                  style={{
                    background: searchQuery === tag ? 'var(--accent)' : 'rgba(255, 255, 255, 0.06)',
                    color: searchQuery === tag ? '#0A0D10' : 'var(--text-muted)',
                    border: '1px solid rgba(0, 210, 180, 0.2)',
                    borderRadius: '20px',
                    padding: '0.2rem 0.75rem',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {tag}
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategoryFilter('all');
                  }}
                  style={{
                    background: 'transparent',
                    color: 'var(--accent-gold)',
                    border: 'none',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    marginLeft: '0.5rem'
                  }}
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR CATEGORIES CARDS (4 CATEGORIES) */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">Explore Flavor Spectrum</span>
            <h2 className="section-title">Popular Culinary Categories</h2>
            <p className="section-subtitle">
              Select a category to explore handcrafted noodles, aromatic rice, steamed dim sum, or our chef's special wok masterpieces.
            </p>
          </div>

          {/* 4 Category Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {menuCategoriesData.map((cat) => {
              const isSelected = activeCategoryFilter === cat.id;

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryFilter(cat.id);
                    // Scroll smoothly down to the menu grid
                    const menuGrid = document.getElementById('menu-items-grid');
                    if (menuGrid) {
                      menuGrid.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover-lift"
                  style={{
                    backgroundColor: 'var(--bg-white)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border-light)',
                    boxShadow: isSelected ? 'var(--shadow-teal)' : 'var(--shadow-md)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  {/* Category Image Header */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <img
                      src={cat.image}
                      alt={cat.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(10,13,16,0.9) 100%)'
                      }}
                    />

                    {/* Icon Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(10, 13, 16, 0.85)',
                        border: '1px solid var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0, 210, 180, 0.3)'
                      }}
                    >
                      {getCategoryIcon(cat.iconName)}
                    </div>

                    {/* Special Chef Badge if applicable */}
                    {cat.isSpecial && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          backgroundColor: 'var(--accent-gold)',
                          color: '#0A0D10',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          boxShadow: '0 4px 12px rgba(229, 193, 88, 0.4)'
                        }}
                      >
                        {cat.badgeText}
                      </span>
                    )}

                    <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description */}
                  <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                      {cat.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '1rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid var(--border-subtle)'
                      }}
                    >
                      <span style={{ fontSize: '0.82rem', color: isSelected ? 'var(--accent)' : 'var(--text-muted)', fontWeight: 600 }}>
                        {isSelected ? 'Currently Viewing' : 'View Dishes'}
                      </span>
                      <ChevronRight size={16} color={isSelected ? 'var(--accent)' : 'var(--text-muted)'} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. DISHES MENU GRID (CATEGORY 1 to 4 SECTIONS) */}
      <section id="menu-items-grid" className="section-padding bg-secondary" style={{ borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          {/* Category Quick Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '3.5rem'
            }}
          >
            <button
              onClick={() => setActiveCategoryFilter('all')}
              style={{
                padding: '0.65rem 1.6rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: activeCategoryFilter === 'all' ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: activeCategoryFilter === 'all' ? 'var(--accent)' : 'rgba(10, 13, 16, 0.6)',
                color: activeCategoryFilter === 'all' ? '#0A0D10' : '#E0ECEE',
                boxShadow: activeCategoryFilter === 'all' ? '0 0 18px rgba(0, 210, 180, 0.35)' : 'none'
              }}
            >
              All Categories ({menuItemsData.length})
            </button>

            {menuCategoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                style={{
                  padding: '0.65rem 1.6rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: activeCategoryFilter === cat.id ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: activeCategoryFilter === cat.id ? 'var(--accent)' : 'rgba(10, 13, 16, 0.6)',
                  color: activeCategoryFilter === cat.id ? '#0A0D10' : '#E0ECEE',
                  boxShadow: activeCategoryFilter === cat.id ? '0 0 18px rgba(0, 210, 180, 0.35)' : 'none'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          {searchQuery && (
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>
                Showing results for "<strong style={{ color: 'var(--accent)' }}>{searchQuery}</strong>": {filteredMenuItems.length} dishes found
              </p>
            </div>
          )}

          {filteredMenuItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                No food items match your search "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryFilter('all');
                }}
                className="btn btn-outline-teal"
              >
                View Full Menu
              </button>
            </div>
          ) : (
            // Group by category if viewing 'all' or when search query is entered
            menuCategoriesData
              .filter((cat) => searchQuery.trim() !== '' || activeCategoryFilter === 'all' || activeCategoryFilter === cat.id)
              .map((cat) => {
                const categoryDishes = filteredMenuItems.filter((item) => item.categoryId === cat.id);

                if (categoryDishes.length === 0) return null;

                return (
                  <div key={cat.id} style={{ marginBottom: '5rem' }}>
                    {/* Category Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid var(--border-light)',
                        paddingBottom: '1rem',
                        marginBottom: '2rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span style={{ fontSize: '1.8rem' }}>{cat.icon}</span>
                        <div>
                          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#FFFFFF' }}>
                            {cat.name}
                          </h2>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '2px' }}>
                            {cat.description}
                          </p>
                        </div>
                      </div>

                      {cat.isSpecial && (
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'rgba(229, 193, 88, 0.12)',
                            border: '1px solid var(--accent-gold)',
                            padding: '0.4rem 1rem',
                            borderRadius: '50px'
                          }}
                        >
                          <Sparkles size={16} color="var(--accent-gold)" />
                          <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                            Chef's Special Category
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Dish Cards Grid */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                      }}
                    >
                      {categoryDishes.map((dish) => (
                        <div
                          key={dish.id}
                          className="hover-lift"
                          style={{
                            backgroundColor: 'var(--bg-white)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: dish.isChefRecommended
                              ? '1px solid var(--border-gold)'
                              : '1px solid var(--border-light)',
                            boxShadow: 'var(--shadow-md)',
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                        >
                          {/* Dish HD Image Header */}
                          <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                            <img
                              src={dish.image}
                              alt={dish.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                              }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(10,13,16,0.92) 100%)'
                              }}
                            />

                            {/* Top Left Badges */}
                            <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                              {/* Veg / Non-Veg Indicator Badge */}
                              <span
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.35rem',
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  color: '#FFFFFF',
                                  backgroundColor: dish.isVeg ? 'rgba(46, 125, 50, 0.9)' : 'rgba(198, 40, 40, 0.9)',
                                  padding: '0.25rem 0.65rem',
                                  borderRadius: '4px',
                                  backdropFilter: 'blur(4px)'
                                }}
                              >
                                <span
                                  style={{
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '50%',
                                    backgroundColor: dish.isVeg ? '#81C784' : '#FF8A80',
                                    display: 'inline-block'
                                  }}
                                />
                                {dish.isVeg ? 'VEG' : 'NON-VEG'}
                              </span>

                              {/* Popular Badge */}
                              {dish.isPopular && (
                                <span
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    color: '#0A0D10',
                                    backgroundColor: 'var(--accent)',
                                    padding: '0.25rem 0.65rem',
                                    borderRadius: '4px'
                                  }}
                                >
                                  <Flame size={12} />
                                  POPULAR
                                </span>
                              )}
                            </div>

                            {/* Top Right Chef Recommendation Badge */}
                            {dish.isChefRecommended && (
                              <span
                                style={{
                                  position: 'absolute',
                                  top: '0.85rem',
                                  right: '0.85rem',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.3rem',
                                  fontSize: '0.72rem',
                                  fontWeight: 700,
                                  color: '#0A0D10',
                                  backgroundColor: 'var(--accent-gold)',
                                  padding: '0.25rem 0.65rem',
                                  borderRadius: '4px',
                                  boxShadow: '0 2px 8px rgba(229, 193, 88, 0.4)'
                                }}
                              >
                                <Sparkles size={12} />
                                CHEF's PICK
                              </span>
                            )}

                            {/* Bottom Price Tag */}
                            <span
                              style={{
                                position: 'absolute',
                                bottom: '0.85rem',
                                right: '1rem',
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                color: 'var(--accent-gold)'
                              }}
                            >
                              {dish.price}
                            </span>
                          </div>

                          {/* Card Content Body */}
                          <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                                {dish.name}
                              </h3>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                {dish.description}
                              </p>
                            </div>

                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderTop: '1px solid var(--border-subtle)',
                                paddingTop: '1rem'
                              }}
                            >
                              <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
                                Authentic Asian Recipe
                              </span>

                              <button
                                onClick={() => setIsReservationOpen(true)}
                                className="btn btn-outline-teal"
                                style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
                              >
                                <span>Order Dish</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </section>

      {/* 5. CHEF'S RECOMMENDATION SPOTLIGHT SECTION */}
      <section className="section-padding bg-dark" style={{ borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#0E151C',
              borderRadius: '20px',
              border: '1px solid var(--border-gold)',
              boxShadow: '0 20px 50px rgba(229, 193, 88, 0.15)',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 0
            }}
          >
            {/* Left Image View */}
            <div style={{ position: 'relative', minHeight: '380px' }}>
              <img
                src={chefsRecommendationData.image}
                alt={chefsRecommendationData.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(10,13,16,0.9) 100%)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#0A0D10',
                  padding: '0.45rem 1.1rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  boxShadow: '0 4px 15px rgba(229, 193, 88, 0.4)'
                }}
              >
                <Sparkles size={16} />
                {chefsRecommendationData.badge}
              </div>
            </div>

            {/* Right Story Content */}
            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="section-tag" style={{ color: 'var(--accent-gold)' }}>
                Culinary Spotlight
              </span>
              <h2 className="section-title" style={{ fontSize: '2.4rem', marginBottom: '0.5rem' }}>
                Chef's Recommendation
              </h2>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                {chefsRecommendationData.name}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {chefsRecommendationData.story}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="btn btn-warm-gold"
                  style={{ padding: '1rem 2.2rem' }}
                >
                  <PhoneCall size={18} />
                  <span>Reserve Table</span>
                </button>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Price</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                    {chefsRecommendationData.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section
        className="section-padding"
        style={{
          backgroundColor: '#07090C',
          backgroundImage: `linear-gradient(180deg, rgba(10,13,16,0.92) 0%, rgba(7,9,12,0.98) 100%), url(${images.heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          borderTop: '1px solid var(--border-light)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="section-tag">An Unforgettable Culinary Journey</span>
          <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '1.25rem' }}>
            Reserve Your Table Today
          </h2>
          <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
            Immerse yourself in our tranquil luxury atmosphere, authentic Asian recipes, and impeccable hospitality.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button onClick={() => setIsReservationOpen(true)} className="btn btn-teal" style={{ padding: '1.1rem 2.5rem' }}>
              <Calendar size={18} />
              <span>Book Table Now</span>
            </button>
            <button onClick={() => navigate('/contact')} className="btn btn-outline-light" style={{ padding: '1.1rem 2.5rem' }}>
              <span>Contact Concierge</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
