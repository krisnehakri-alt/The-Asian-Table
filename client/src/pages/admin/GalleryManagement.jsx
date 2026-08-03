import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  Plus,
  Trash2,
  Edit2,
  X,
  ArrowUp,
  ArrowDown,
  Image as ImageIcon
} from 'lucide-react';

const GalleryManagement = () => {
  const { galleryImages, galleryCategories, addGalleryImage, editGalleryImage, deleteGalleryImage, reorderGalleryImages } = useData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'interior',
    image: '',
    description: ''
  });

  const handleOpenModal = (img = null) => {
    if (img) {
      setEditingImage(img);
      setFormData({
        title: img.title,
        category: img.category,
        image: img.image,
        description: img.description || ''
      });
    } else {
      setEditingImage(null);
      setFormData({
        title: '',
        category: 'interior',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200',
        description: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingImage) {
      editGalleryImage(editingImage.id, formData);
    } else {
      addGalleryImage(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to remove "${title}" from the gallery?`)) {
      deleteGalleryImage(id);
    }
  };

  const moveUp = (index) => {
    if (index > 0) reorderGalleryImages(index, index - 1);
  };

  const moveDown = (index) => {
    if (index < galleryImages.length - 1) reorderGalleryImages(index, index + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', margin: '0 0 6px 0' }}>
            Gallery Management
          </h2>
          <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
            Upload ambience images, assign view categories, edit titles, and reorder visual showcase.
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
          <Plus size={18} /> Upload Image
        </button>
      </div>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {galleryImages.map((img, index) => (
          <div key={img.id} style={{
            background: 'rgba(22, 18, 15, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
              <img
                src={img.image}
                alt={img.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600'; }}
              />
              <span style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(0, 0, 0, 0.75)',
                color: '#d4af37',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                textTransform: 'uppercase'
              }}>
                {img.category}
              </span>
            </div>

            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ color: '#fff', fontSize: '15px', margin: '0 0 6px 0', fontWeight: '600' }}>
                  {img.title}
                </h4>
                <p style={{ color: '#8c7e6b', fontSize: '12px', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {img.description || 'No description provided.'}
                </p>
              </div>

              {/* Action Controls & Reordering */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    disabled={index === 0}
                    onClick={() => moveUp(index)}
                    style={{ padding: '4px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: 'none', color: index === 0 ? '#444' : '#fff', cursor: index === 0 ? 'default' : 'pointer' }}
                  >
                    <ArrowUp size={14} />
                  </button>
                  <button
                    disabled={index === galleryImages.length - 1}
                    onClick={() => moveDown(index)}
                    style={{ padding: '4px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', border: 'none', color: index === galleryImages.length - 1 ? '#444' : '#fff', cursor: index === galleryImages.length - 1 ? 'default' : 'pointer' }}
                  >
                    <ArrowDown size={14} />
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => handleOpenModal(img)}
                    style={{ padding: '6px 10px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img.id, img.title)}
                    style={{ padding: '6px 10px', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.15)', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#f87171', cursor: 'pointer', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload/Edit Modal */}
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
                {editingImage ? 'Edit Gallery Item' : 'Upload Gallery Image'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Image Title *</label>
                <input
                  type="text" required value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Gallery Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: '#1e1a16', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                >
                  <option value="interior">Main Dining & Booths (interior)</option>
                  <option value="ambience">VIP & Private Alcoves (ambience)</option>
                  <option value="terrace">Garden Terrace & Patio (terrace)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Image URL *</label>
                <input
                  type="text" required value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Description</label>
                <textarea
                  rows={3} value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '10px 18px', background: 'transparent', border: '1px solid #555', color: '#ccc', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '10px 22px', background: '#d4af37', color: '#000', fontWeight: '600', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Save Image</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default GalleryManagement;
