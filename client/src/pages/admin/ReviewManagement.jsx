import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  Plus,
  Edit2,
  Trash2,
  X,
  Star,
  User,
  Quote
} from 'lucide-react';

const ReviewManagement = () => {
  const { reviews, addReview, editReview, deleteReview } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    role: 'Valued Guest',
    avatar: '',
    rating: 5,
    review: ''
  });

  const handleOpenModal = (rev = null) => {
    if (rev) {
      setEditingReview(rev);
      setFormData({
        name: rev.name,
        role: rev.role || 'Valued Guest',
        avatar: rev.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
        rating: rev.rating || 5,
        review: rev.review || ''
      });
    } else {
      setEditingReview(null);
      setFormData({
        name: '',
        role: 'Valued Guest',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
        rating: 5,
        review: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingReview) {
      editReview(editingReview.id, formData);
    } else {
      addReview(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete review by "${name}"?`)) {
      deleteReview(id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', margin: '0 0 6px 0' }}>
            Customer Reviews Management
          </h2>
          <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
            Add, update, or remove guest testimonials and rating scores shown on the homepage.
          </p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          style={{
            padding: '12px 20px',
            background: 'linear-gradient(135deg, #d4af37 0%, #aa820a 100%)',
            color: '#000',
            fontWeight: '600',
            fontSize: '14px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
          }}
        >
          <Plus size={18} /> Add Review
        </button>
      </div>

      {/* Reviews Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {reviews.map((rev) => (
          <div key={rev.id} style={{
            background: 'rgba(22, 18, 15, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(212, 175, 55, 0.3)' }}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'; }}
                />
                <div>
                  <h4 style={{ color: '#fff', fontSize: '16px', margin: '0 0 2px 0', fontWeight: '600' }}>
                    {rev.name}
                  </h4>
                  <span style={{ fontSize: '12px', color: '#a09585' }}>{rev.role}</span>
                </div>
              </div>

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '12px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < rev.rating ? '#f59e0b' : 'none'} color={i < rev.rating ? '#f59e0b' : '#555'} />
                ))}
              </div>

              <p style={{ color: '#e2d5c3', fontSize: '13px', lineHeight: '1.6', fontStyle: 'italic', margin: 0, position: 'relative', paddingLeft: '16px', borderLeft: '2px solid rgba(212, 175, 55, 0.3)' }}>
                "{rev.review}"
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <button
                onClick={() => handleOpenModal(rev)}
                style={{ padding: '6px 12px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Edit2 size={14} /> Edit
              </button>
              <button
                onClick={() => handleDelete(rev.id, rev.name)}
                style={{ padding: '6px 12px', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.15)', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#f87171', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div style={{
            background: '#16120f',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '16px',
            width: '100%', maxWidth: '500px',
            padding: '28px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '20px', color: '#d4af37', margin: 0 }}>
                {editingReview ? 'Edit Review' : 'Add New Review'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Customer Name *</label>
                <input
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Designation/Role</label>
                  <input
                    type="text" value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Star Rating (1 - 5) *</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    style={{ width: '100%', padding: '10px', background: '#1e1a16', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                  >
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★</option>
                    <option value={3}>3 Stars ★★★</option>
                    <option value={2}>2 Stars ★★</option>
                    <option value={1}>1 Star ★</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Customer Photo URL</label>
                <input
                  type="text" value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Review Text *</label>
                <textarea
                  rows={4} required value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '10px 18px', background: 'transparent', border: '1px solid #555', color: '#ccc', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '10px 22px', background: '#d4af37', color: '#000', fontWeight: '600', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Save Review</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ReviewManagement;
