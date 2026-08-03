import React from 'react';
import { useData } from '../../context/DataContext';
import { NavLink } from 'react-router-dom';
import {
  UtensilsCrossed,
  Image,
  MapPin,
  Mail,
  Star,
  PlusCircle,
  Clock,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';

const DashboardOverview = () => {
  const { menuItems, galleryImages, branches, messages, reviews } = useData();

  const unreadMessagesCount = messages.filter((m) => !m.read).length;

  const statCards = [
    { title: 'Total Menu Items', count: menuItems.length, icon: UtensilsCrossed, link: '/admin/menu', color: '#d4af37' },
    { title: 'Total Gallery Images', count: galleryImages.length, icon: Image, link: '/admin/gallery', color: '#3b82f6' },
    { title: 'Total Branches', count: branches.length, icon: MapPin, link: '/admin/branches', color: '#10b981' },
    { title: 'Total Contact Messages', count: messages.length, badge: unreadMessagesCount > 0 ? `${unreadMessagesCount} unread` : null, icon: Mail, link: '/admin/messages', color: '#f59e0b' },
    { title: 'Total Customer Reviews', count: reviews.length, icon: Star, link: '/admin/reviews', color: '#ec4899' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Welcome Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(20, 17, 14, 0.8) 100%)',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        borderRadius: '16px',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', marginBottom: '8px' }}>
            Welcome to Executive Dashboard
          </h2>
          <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
            Manage menu offerings, luxury gallery, location branches, customer feedback, and website configurations.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <NavLink
            to="/admin/menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              background: '#d4af37',
              color: '#000',
              fontWeight: '600',
              fontSize: '14px',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            <PlusCircle size={16} /> Add Menu Item
          </NavLink>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div>
        <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '18px', color: '#fff', marginBottom: '16px' }}>
          Platform Summary
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px'
        }}>
          {statCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <NavLink
                key={index}
                to={card.link}
                style={{
                  background: 'rgba(22, 18, 15, 0.8)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '12px',
                  padding: '24px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ padding: '10px', borderRadius: '10px', background: `${card.color}15`, color: card.color }}>
                    <Icon size={24} />
                  </div>
                  <ArrowUpRight size={18} style={{ color: '#666' }} />
                </div>

                <div style={{ fontSize: '32px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
                  {card.count}
                </div>

                <div style={{ fontSize: '13px', color: '#a09585', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>{card.title}</span>
                  {card.badge && (
                    <span style={{ fontSize: '11px', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '2px 8px', borderRadius: '12px' }}>
                      {card.badge}
                    </span>
                  )}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Recent Activity & Recent Messages */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        
        {/* Recent Messages Card */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#d4af37', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={18} /> Recent Contact Inbox
            </h4>
            <NavLink to="/admin/messages" style={{ fontSize: '12px', color: '#d4af37', textDecoration: 'none' }}>
              View All
            </NavLink>
          </div>

          {messages.length === 0 ? (
            <p style={{ color: '#888', fontSize: '13px' }}>No messages received yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {messages.slice(0, 4).map((msg) => (
                <div key={msg.id} style={{
                  padding: '12px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '8px',
                  borderLeft: msg.read ? '3px solid #555' : '3px solid #f59e0b'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '13px', color: '#fff' }}>{msg.name}</strong>
                    <span style={{ fontSize: '11px', color: '#777' }}>{msg.date}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#d4af37', marginBottom: '4px' }}>{msg.subject}</div>
                  <p style={{ fontSize: '12px', color: '#a09585', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Activity Audit */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h4 style={{ fontFamily: 'Cinzel, serif', fontSize: '16px', color: '#d4af37', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingUp size={18} /> System Activity & Highlights
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.15)', color: '#d4af37' }}>
                <Clock size={16} />
              </div>
              <div>
                <div style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>
                  {menuItems.filter((i) => i.isChefRecommended).length} Chef's Special Menu Items Active
                </div>
                <div style={{ fontSize: '12px', color: '#888' }}>
                  Featured across menu filters and recommendations.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                <MapPin size={16} />
              </div>
              <div>
                <div style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>
                  {branches.length} Restaurant Locations Configured
                </div>
                <div style={{ fontSize: '12px', color: '#888' }}>
                  Available in interactive Google Maps on Contact page.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ padding: '8px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                <Star size={16} />
              </div>
              <div>
                <div style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>
                  {reviews.length} Verified Customer Testimonials
                </div>
                <div style={{ fontSize: '12px', color: '#888' }}>
                  Displayed on Homepage customer reviews carousel.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DashboardOverview;
