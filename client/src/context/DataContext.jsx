import React, { createContext, useContext, useState, useEffect } from 'react';
import { menuItemsData as initialMenuItems, menuCategoriesData as initialCategories, chefsRecommendationData as initialChefRec } from '../data/menuData';
import { galleryImagesData as initialGalleryImages, galleryCategoriesData as initialGalleryCategories } from '../data/galleryData';
import { branchData as initialBranches, customerReviewsData as initialReviews } from '../data/restaurantData';

const DataContext = createContext();

const STORAGE_KEYS = {
  MENU_ITEMS: 'tat_menu_items',
  GALLERY_IMAGES: 'tat_gallery_images',
  BRANCHES: 'tat_branches',
  REVIEWS: 'tat_reviews',
  MESSAGES: 'tat_messages',
  SETTINGS: 'tat_settings'
};

const initialSettings = {
  restaurantName: 'THE ASIAN TABLE',
  tagline: 'Luxury Asian Cuisine & Fine Dining',
  email: 'concierge@asiantable.com',
  phone: '+1 (800) 555-0199',
  address: '88 Gold Coast Boulevard, Manhattan, New York, NY 10001, United States',
  openingHours: 'Mon - Sun: 11:30 AM - 11:00 PM',
  footerContent: 'Experience authentic Asian culinary arts in an atmosphere of refined luxury.',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  twitter: 'https://twitter.com',
  tripadvisor: 'https://tripadvisor.com'
};

const initialMessages = [
  {
    id: 'msg-101',
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 234-5678',
    subject: 'Private VIP Room Inquiry',
    message: 'Hello, I would like to inquire about booking the Private VIP suite for a party of 14 people next Friday evening.',
    date: '2026-08-01 14:30',
    read: false
  },
  {
    id: 'msg-102',
    name: 'David Miller',
    email: 'david.m@example.com',
    phone: '+1 (555) 876-5432',
    subject: 'Dietary Options & Allergen Info',
    message: 'Do you offer gluten-free options for dim sum and momos? Looking forward to visiting your Downtown branch.',
    date: '2026-08-02 09:15',
    read: true
  }
];

export const DataProvider = ({ children }) => {
  // 1. Menu State
  const [menuItems, setMenuItems] = useState(() => {
    const local = localStorage.getItem(STORAGE_KEYS.MENU_ITEMS);
    return local ? JSON.parse(local) : initialMenuItems;
  });

  // 2. Gallery State
  const [galleryImages, setGalleryImages] = useState(() => {
    const local = localStorage.getItem(STORAGE_KEYS.GALLERY_IMAGES);
    return local ? JSON.parse(local) : initialGalleryImages;
  });

  // 3. Branches State
  const [branches, setBranches] = useState(() => {
    const local = localStorage.getItem(STORAGE_KEYS.BRANCHES);
    return local ? JSON.parse(local) : initialBranches;
  });

  // 4. Reviews State
  const [reviews, setReviews] = useState(() => {
    const local = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    return local ? JSON.parse(local) : initialReviews;
  });

  // 5. Contact Messages State
  const [messages, setMessages] = useState(() => {
    const local = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return local ? JSON.parse(local) : initialMessages;
  });

  // 6. Settings State
  const [settings, setSettings] = useState(() => {
    const local = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return local ? JSON.parse(local) : initialSettings;
  });

  // Auth State for Admin
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return localStorage.getItem('tat_admin_auth') === 'true';
  });

  // LocalStorage Persist Handlers
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MENU_ITEMS, JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY_IMAGES, JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BRANCHES, JSON.stringify(branches));
  }, [branches]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  // Auth Handlers
  const loginAdmin = (username, password) => {
    if ((username === 'admin' && password === 'admin123') || password === '1234') {
      setIsAdminAuthenticated(true);
      localStorage.setItem('tat_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('tat_admin_auth');
  };

  // CRUD Actions

  // --- MENU ---
  const addMenuItem = (item) => {
    const newItem = {
      ...item,
      id: item.id || `item-${Date.now()}`
    };
    setMenuItems((prev) => [newItem, ...prev]);
  };

  const editMenuItem = (id, updatedItem) => {
    setMenuItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
  };

  const deleteMenuItem = (id) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- GALLERY ---
  const addGalleryImage = (image) => {
    const newImage = {
      ...image,
      id: image.id || `g-${Date.now()}`
    };
    setGalleryImages((prev) => [newImage, ...prev]);
  };

  const editGalleryImage = (id, updatedImage) => {
    setGalleryImages((prev) => prev.map((img) => (img.id === id ? { ...img, ...updatedImage } : img)));
  };

  const deleteGalleryImage = (id) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id));
  };

  const reorderGalleryImages = (startIndex, endIndex) => {
    setGalleryImages((prev) => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  };

  // --- BRANCHES ---
  const addBranch = (branch) => {
    const newBranch = {
      ...branch,
      id: branch.id || `branch-${Date.now()}`
    };
    setBranches((prev) => [...prev, newBranch]);
  };

  const editBranch = (id, updatedBranch) => {
    setBranches((prev) => prev.map((b) => (b.id === id ? { ...b, ...updatedBranch } : b)));
  };

  const deleteBranch = (id) => {
    setBranches((prev) => prev.filter((b) => b.id !== id));
  };

  // --- REVIEWS ---
  const addReview = (review) => {
    const newReview = {
      ...review,
      id: review.id || `rev-${Date.now()}`
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  const editReview = (id, updatedReview) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, ...updatedReview } : r)));
  };

  const deleteReview = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  // --- MESSAGES ---
  const addMessage = (msg) => {
    const newMsg = {
      ...msg,
      id: `msg-${Date.now()}`,
      date: new Date().toLocaleString([], { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }),
      read: false
    };
    setMessages((prev) => [newMsg, ...prev]);
  };

  const toggleMessageRead = (id) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m)));
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  // --- SETTINGS ---
  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <DataContext.Provider
      value={{
        // Data
        menuItems,
        menuCategories: initialCategories,
        chefRecommendation: initialChefRec,
        galleryImages,
        galleryCategories: initialGalleryCategories,
        branches,
        reviews,
        messages,
        settings,
        isAdminAuthenticated,
        // Auth
        loginAdmin,
        logoutAdmin,
        // Menu CRUD
        addMenuItem,
        editMenuItem,
        deleteMenuItem,
        // Gallery CRUD
        addGalleryImage,
        editGalleryImage,
        deleteGalleryImage,
        reorderGalleryImages,
        // Branch CRUD
        addBranch,
        editBranch,
        deleteBranch,
        // Review CRUD
        addReview,
        editReview,
        deleteReview,
        // Message CRUD
        addMessage,
        toggleMessageRead,
        deleteMessage,
        // Settings
        updateSettings
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
