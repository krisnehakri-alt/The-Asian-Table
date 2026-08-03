import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  Plus,
  Edit2,
  Trash2,
  X,
  MapPin,
  Phone,
  Clock,
  Mail,
  Building
} from 'lucide-react';

const BranchManagement = () => {
  const { branches, addBranch, editBranch, deleteBranch } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: 'info@asiantable.com',
    openingHours: 'Mon - Sun: 11:30 AM - 11:00 PM',
    description: '',
    image: ''
  });

  const handleOpenModal = (branch = null) => {
    if (branch) {
      setEditingBranch(branch);
      setFormData({
        name: branch.name,
        address: branch.address,
        phone: branch.phone,
        email: branch.email || 'info@asiantable.com',
        openingHours: branch.openingHours,
        description: branch.description || '',
        image: branch.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000'
      });
    } else {
      setEditingBranch(null);
      setFormData({
        name: '',
        address: '',
        phone: '+1 (800) 555-0199',
        email: 'info@asiantable.com',
        openingHours: 'Mon - Sun: 11:30 AM - 11:00 PM',
        description: '',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000'
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingBranch) {
      editBranch(editingBranch.id, formData);
    } else {
      addBranch(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete branch "${name}"?`)) {
      deleteBranch(id);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', margin: '0 0 6px 0' }}>
            Branch Management
          </h2>
          <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
            Manage physical restaurant venues, opening schedules, location addresses, and phone contacts.
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
          <Plus size={18} /> Add New Branch
        </button>
      </div>

      {/* Branch Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {branches.map((branch) => (
          <div key={branch.id} style={{
            background: 'rgba(22, 18, 15, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={branch.image}
                alt={branch.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14, 12, 10, 0.9) 0%, transparent 60%)' }} />
              <h3 style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', margin: 0, fontFamily: 'Cinzel, serif', color: '#d4af37', fontSize: '18px' }}>
                {branch.name}
              </h3>
            </div>

            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#a09585' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <MapPin size={16} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                  <span>{branch.address}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Phone size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                  <span>{branch.phone}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Mail size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                  <span>{branch.email || 'concierge@asiantable.com'}</span>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Clock size={16} style={{ color: '#d4af37', flexShrink: 0 }} />
                  <span>{branch.openingHours}</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <button
                  onClick={() => handleOpenModal(branch)}
                  style={{ padding: '8px 14px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Edit2 size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(branch.id, branch.name)}
                  style={{ padding: '8px 14px', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.15)', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#f87171', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
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
            width: '100%', maxWidth: '520px',
            maxHeight: '90vh', overflowY: 'auto',
            padding: '28px', boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '20px', color: '#d4af37', margin: 0 }}>
                {editingBranch ? 'Edit Branch' : 'Add New Branch'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Branch Name *</label>
                <input
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Address *</label>
                <input
                  type="text" required value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Phone Number *</label>
                  <input
                    type="text" required value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Email *</label>
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Opening Hours *</label>
                <input
                  type="text" required value={formData.openingHours}
                  onChange={(e) => setFormData({ ...formData, openingHours: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Image URL</label>
                <input
                  type="text" value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '10px 18px', background: 'transparent', border: '1px solid #555', color: '#ccc', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '10px 22px', background: '#d4af37', color: '#000', fontWeight: '600', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Save Branch</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default BranchManagement;
