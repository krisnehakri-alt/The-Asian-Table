import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  Mail,
  CheckCircle,
  Clock,
  Trash2,
  Phone,
  User,
  MessageSquare,
  Search,
  Eye
} from 'lucide-react';

const ContactInbox = () => {
  const { messages, toggleMessageRead, deleteMessage } = useData();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [search, setSearch] = useState('');

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this message?')) {
      deleteMessage(id);
      if (selectedMessage?.id === id) setSelectedMessage(null);
    }
  };

  const filteredMessages = messages.filter((m) => {
    return (
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div>
        <h2 style={{ fontFamily: 'Cinzel, serif', fontSize: '24px', color: '#d4af37', margin: '0 0 6px 0' }}>
          Contact Messages Inbox
        </h2>
        <p style={{ color: '#a09585', fontSize: '14px', margin: 0 }}>
          View customer inquiries submitted via website contact form, mark status as read, or delete.
        </p>
      </div>

      {/* Main Layout: Split Inbox & Detail View */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="inbox-container">
        
        {/* Messages List Column */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Search bar */}
          <div style={{ padding: '16px', borderBottom: '1px solid rgba(212, 175, 55, 0.15)', position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '28px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
            <input
              type="text"
              placeholder="Search messages..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px 10px 36px',
                background: 'rgba(30, 26, 22, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '13px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ overflowY: 'auto', maxHeight: '550px' }}>
            {filteredMessages.length === 0 ? (
              <div style={{ padding: '40px 20px', textAlign: 'center', color: '#888', fontSize: '13px' }}>
                No contact messages found.
              </div>
            ) : (
              filteredMessages.map((msg) => {
                const isSelected = selectedMessage?.id === msg.id;
                return (
                  <div
                    key={msg.id}
                    onClick={() => {
                      setSelectedMessage(msg);
                      if (!msg.read) toggleMessageRead(msg.id);
                    }}
                    style={{
                      padding: '16px 20px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      background: isSelected
                        ? 'rgba(212, 175, 55, 0.15)'
                        : msg.read
                        ? 'transparent'
                        : 'rgba(212, 175, 55, 0.05)',
                      cursor: 'pointer',
                      borderLeft: msg.read ? '3px solid transparent' : '3px solid #d4af37',
                      transition: 'background 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '14px', fontWeight: msg.read ? '500' : '700', color: '#fff' }}>
                        {msg.name}
                      </span>
                      <span style={{ fontSize: '11px', color: '#888' }}>{msg.date}</span>
                    </div>

                    <div style={{ fontSize: '13px', color: '#d4af37', marginBottom: '4px', fontWeight: '500' }}>
                      {msg.subject}
                    </div>

                    <div style={{ fontSize: '12px', color: '#a09585', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {msg.message}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: '#666' }}>{msg.email}</span>
                      <button
                        onClick={(e) => handleDelete(msg.id, e)}
                        style={{ background: 'none', border: 'none', color: '#f87171', cursor: 'pointer', opacity: 0.7 }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Message Content Viewer */}
        <div style={{
          background: 'rgba(22, 18, 15, 0.8)',
          border: '1px solid rgba(212, 175, 55, 0.15)',
          borderRadius: '12px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: selectedMessage ? 'space-between' : 'center',
          alignItems: selectedMessage ? 'stretch' : 'center',
          minHeight: '400px'
        }}>
          {!selectedMessage ? (
            <div style={{ textAlign: 'center', color: '#777' }}>
              <Mail size={48} style={{ opacity: 0.3, marginBottom: '12px' }} />
              <p style={{ fontSize: '14px', margin: 0 }}>Select a message from the list to view full details.</p>
            </div>
          ) : (
            <>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(212, 175, 55, 0.15)', paddingBottom: '16px', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Cinzel, serif', fontSize: '20px', color: '#d4af37', margin: '0 0 6px 0' }}>
                      {selectedMessage.subject}
                    </h3>
                    <div style={{ fontSize: '12px', color: '#888', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={12} /> Received: {selectedMessage.date}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleMessageRead(selectedMessage.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      background: selectedMessage.read ? 'rgba(255,255,255,0.05)' : 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                      color: selectedMessage.read ? '#aaa' : '#d4af37',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    {selectedMessage.read ? 'Mark Unread' : 'Mark Read'}
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <User size={14} style={{ color: '#d4af37' }} />
                    <strong>From:</strong> {selectedMessage.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <Mail size={14} style={{ color: '#d4af37' }} />
                    <strong>Email:</strong> <a href={`mailto:${selectedMessage.email}`} style={{ color: '#d4af37' }}>{selectedMessage.email}</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                    <Phone size={14} style={{ color: '#d4af37' }} />
                    <strong>Phone:</strong> {selectedMessage.phone || 'N/A'}
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '13px', color: '#c5b59b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    Message Body
                  </h4>
                  <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(212,175,55,0.1)', padding: '16px', borderRadius: '8px', color: '#f3e8d8', fontSize: '14px', lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
                    {selectedMessage.message}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '20px', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <button
                  onClick={() => deleteMessage(selectedMessage.id)}
                  style={{ padding: '8px 16px', borderRadius: '6px', background: 'rgba(220, 38, 38, 0.15)', border: '1px solid rgba(220, 38, 38, 0.3)', color: '#f87171', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Trash2 size={14} /> Delete Message
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .inbox-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactInbox;
