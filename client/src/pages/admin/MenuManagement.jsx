import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Check,
  Star,
  Leaf,
  Utensils,
  Image as ImageIcon
} from 'lucide-react';

const MenuManagement = () => {
  const { menuItems, menuCategories, addMenuItem, editMenuItem, deleteMenuItem } = useData();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    category: 'Asian Noodles',
    categoryId: 'asian-noodles',
    price: '$20.00',
    description: '',
    image: '',
    isVeg: true,
    isPopular: false,
    isChefRecommended: false
  });

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({
        name: item.name,
        category: item.category,
        categoryId: item.categoryId || 'asian-noodles',
        price: item.price,
        description: item.description,
        image: item.image,
        isVeg: !!item.isVeg,
        isPopular: !!item.isPopular,
        isChefRecommended: !!item.isChefRecommended
      });
    } else {
      setEditingItem(null);
      setFormData({
        name: '',
        category: menuCategories[0]?.name || 'Asian Noodles',
        categoryId: menuCategories[0]?.id || 'asian-noodles',
        price: '$18.00',
        description: '',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
        isVeg: true,
        isPopular: false,
        isChefRecommended: false
      });
    }
    setIsModalOpen(true);
  };

  const handleCategoryChange = (catName) => {
    const matched = menuCategories.find((c) => c.name === catName);
    setFormData((prev) => ({
      ...prev,
      category: catName,
      categoryId: matched ? matched.id : 'asian-noodles'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      editMenuItem(editingItem.id, formData);
    } else {
      addMenuItem(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteMenuItem(id);
    }
  };

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory || item.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Action Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', margin: '0 0 6px 0' }}>
            Menu Management
          </h2>
          <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
            Create, edit, upload food images, set pricing, veg/non-veg status, and chef specials.
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
          <Plus size={18} /> Add New Dish
        </button>
      </div>

      {/* Filter Bar */}
      <div style={{
        background: 'rgba(22, 18, 15, 0.8)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        borderRadius: '12px',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', minWidth: '260px', flex: 1 }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
          <input
            type="text"
            placeholder="Search menu items by title or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px 10px 40px',
              background: 'rgba(30, 26, 22, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Category Selector */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSelectedCategory('all')}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              cursor: 'pointer',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              background: selectedCategory === 'all' ? '#d4af37' : 'transparent',
              color: selectedCategory === 'all' ? '#000' : '#a09585',
              fontWeight: selectedCategory === 'all' ? '600' : '400'
            }}
          >
            All Items
          </button>

          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              style={{
                padding: '8px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                cursor: 'pointer',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                background: selectedCategory === cat.name ? '#d4af37' : 'transparent',
                color: selectedCategory === cat.name ? '#000' : '#a09585',
                fontWeight: selectedCategory === cat.name ? '600' : '400'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid / Table */}
      <div style={{
        background: 'rgba(22, 18, 15, 0.8)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: 'rgba(255, 255, 255, 0.04)', color: '#d4af37', borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <th style={{ padding: '16px 20px' }}>Dish Info</th>
                <th style={{ padding: '16px' }}>Category</th>
                <th style={{ padding: '16px' }}>Price</th>
                <th style={{ padding: '16px' }}>Dietary</th>
                <th style={{ padding: '16px' }}>Chef Special</th>
                <th style={{ padding: '16px 20px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#888' }}>
                    No menu items found matching criteria.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s' }}>
                    <td style={{ padding: '16px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '50px', height: '50px', borderRadius: '8px', objectFit: 'cover', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'; }}
                        />
                        <div>
                          <div style={{ fontWeight: '600', color: '#fff' }}>{item.name}</div>
                          <div style={{ fontSize: '12px', color: '#8c7e6b', maxWidth: '280px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '16px', color: '#a09585' }}>
                      {item.category}
                    </td>

                    <td style={{ padding: '16px', fontWeight: '600', color: '#d4af37' }}>
                      {item.price}
                    </td>

                    <td style={{ padding: '16px' }}>
                      {item.isVeg ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
                          <Leaf size={12} /> Veg
                        </span>
                      ) : (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                          <Utensils size={12} /> Non-Veg
                        </span>
                      )}
                    </td>

                    <td style={{ padding: '16px' }}>
                      {item.isChefRecommended ? (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontSize: '12px' }}>
                          <Star size={14} fill="#f59e0b" /> Special
                        </span>
                      ) : (
                        <span style={{ color: '#555', fontSize: '12px' }}>—</span>
                      )}
                    </td>

                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleOpenModal(item)}
                          style={{ padding: '8px', borderRadius: '6px', background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)', color: '#d4af37', cursor: 'pointer' }}
                        >
                          <Edit2 size={16} />
                        </button>

                        <button
                          onClick={() => handleDelete(item.id, item.name)}
                          style={{ padding: '8px', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.15)', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#f87171', cursor: 'pointer' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: '#16120f',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '28px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(212, 175, 55, 0.15)', paddingBottom: '12px' }}>
              <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '20px', color: '#d4af37', margin: 0 }}>
                {editingItem ? 'Edit Menu Item' : 'Add New Menu Item'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Dish Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    style={{ width: '100%', padding: '10px', background: '#1e1a16', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                  >
                    {menuCategories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Price *</label>
                  <input
                    type="text"
                    required
                    placeholder="$22.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Food Image URL *</label>
                <input
                  type="text"
                  required
                  placeholder="https://images.unsplash.com/..."
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: '#c5b59b', marginBottom: '6px' }}>Description *</label>
                <textarea
                  rows={3}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '10px', background: 'rgba(30,26,22,0.8)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: '6px', color: '#fff', boxSizing: 'border-box', fontFamily: 'inherit' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#fff' }}>
                  <input
                    type="checkbox"
                    checked={formData.isVeg}
                    onChange={(e) => setFormData({ ...formData, isVeg: e.target.checked })}
                  />
                  Mark as Vegetarian
                </label>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#fff' }}>
                  <input
                    type="checkbox"
                    checked={formData.isChefRecommended}
                    onChange={(e) => setFormData({ ...formData, isChefRecommended: e.target.checked })}
                  />
                  Chef's Special
                </label>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ padding: '10px 18px', background: 'transparent', border: '1px solid #555', color: '#ccc', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{ padding: '10px 22px', background: '#d4af37', color: '#000', fontWeight: '600', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                >
                  {editingItem ? 'Save Changes' : 'Create Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default MenuManagement;
