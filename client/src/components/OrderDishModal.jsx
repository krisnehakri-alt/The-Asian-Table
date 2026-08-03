import React, { useState } from 'react';
import { X, ShoppingBag, CheckCircle2, MapPin, Utensils, Minus, Plus } from 'lucide-react';
import { branchData } from '../data/restaurantData';

const OrderDishModal = ({ isOpen, onClose, selectedDish }) => {
  const [quantity, setQuantity] = useState(1);
  const [orderDetails, setOrderDetails] = useState({
    branch: 'downtown',
    deliveryType: 'Takeaway',
    name: '',
    phone: '',
    address: '',
    specialInstructions: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const dishName = selectedDish?.name || 'Asian Gourmet Dish';
  const dishPrice = selectedDish?.price || '$20.00';
  const dishImage = selectedDish?.image || 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800';

  // Calculate numeric subtotal if price starts with $
  const numericPrice = parseFloat(dishPrice.replace(/[^0-9.]/g, '')) || 20;
  const totalPrice = `$${(numericPrice * quantity).toFixed(2)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setQuantity(1);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(5, 7, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        style={{
          backgroundColor: '#0F151C',
          borderRadius: '12px',
          border: '1px solid var(--accent)',
          boxShadow: '0 25px 60px rgba(0, 210, 180, 0.25)',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2.2rem',
          color: '#FFFFFF'
        }}
      >
        {/* Close Button */}
        <button
          onClick={resetModal}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent)';
            e.currentTarget.style.color = '#0A0D10';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 210, 180, 0.15)',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={40} color="var(--accent)" />
            </div>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
              ORDER RECEIVED
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFFFFF', margin: '0.5rem 0 1rem 0' }}>
              Order Placed Successfully!
            </h3>
            <div
              style={{
                backgroundColor: '#07090C',
                padding: '1.25rem',
                borderRadius: '8px',
                border: '1px solid rgba(0, 210, 180, 0.2)',
                textAlign: 'left',
                margin: '1.5rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.92rem',
                color: 'var(--text-muted)'
              }}
            >
              <div><strong style={{ color: '#FFFFFF' }}>Item Ordered:</strong> {quantity}x {dishName}</div>
              <div><strong style={{ color: '#FFFFFF' }}>Total Amount:</strong> <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>{totalPrice}</span></div>
              <div><strong style={{ color: '#FFFFFF' }}>Pickup/Delivery:</strong> {orderDetails.deliveryType} ({branchData.find(b => b.id === orderDetails.branch)?.name})</div>
              <div><strong style={{ color: '#FFFFFF' }}>Customer Name:</strong> {orderDetails.name || 'Honored Guest'}</div>
              <div><strong style={{ color: '#FFFFFF' }}>Contact Phone:</strong> {orderDetails.phone}</div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Our kitchen team is preparing your dish. We will contact you at {orderDetails.phone} when your order is ready.
            </p>
            <button onClick={resetModal} className="btn btn-teal" style={{ width: '100%' }}>
              Done & Return To Menu
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="section-tag" style={{ justifyContent: 'flex-start' }}>
                ONLINE DISH ORDER
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: '#FFFFFF', margin: 0 }}>
                Order Your Favorite Dish
              </h2>
            </div>

            {/* Selected Dish Card Preview */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: '#07090C',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--border-light)',
              marginBottom: '1.25rem'
            }}>
              <img
                src={dishImage}
                alt={dishName}
                style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'cover', border: '1px solid var(--accent)' }}
              />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: '#FFFFFF', margin: 0 }}>
                  {dishName}
                </h4>
                <span style={{ fontSize: '0.88rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                  {dishPrice} per portion
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#0F151C', padding: '0.3rem 0.6rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '2px' }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '2px' }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {/* Branch & Order Type */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Select Kitchen Branch
                  </label>
                  <div style={{ position: 'relative' }}>
                    <MapPin size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      value={orderDetails.branch}
                      onChange={(e) => setOrderDetails({ ...orderDetails, branch: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.7rem',
                        borderRadius: '6px',
                        backgroundColor: '#07090C',
                        border: '1px solid var(--border-light)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    >
                      {branchData.map((b) => (
                        <option key={b.id} value={b.id}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Fulfillment Type
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Utensils size={18} color="var(--accent)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                    <select
                      value={orderDetails.deliveryType}
                      onChange={(e) => setOrderDetails({ ...orderDetails, deliveryType: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem 0.8rem 2.7rem',
                        borderRadius: '6px',
                        backgroundColor: '#07090C',
                        border: '1px solid var(--border-light)',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Takeaway Pickup">Takeaway Pickup</option>
                      <option value="Dine-in Order">Dine-in Order</option>
                      <option value="Home Delivery">Home Delivery</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Customer Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={orderDetails.name}
                    onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={orderDetails.phone}
                    onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {orderDetails.deliveryType === 'Home Delivery' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street address, apartment, or suite number"
                    value={orderDetails.address}
                    onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: '#07090C',
                      border: '1px solid var(--border-light)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-teal" style={{ padding: '0.95rem', marginTop: '0.5rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <ShoppingBag size={18} />
                <span>Confirm Order ({totalPrice})</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDishModal;
