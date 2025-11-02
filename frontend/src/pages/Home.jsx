import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { createContact, updateContact } from '../services/contactService';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleAddContact = () => {
    setEditingContact(null);
    setShowForm(true);
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleSaveContact = async (contactData) => {
    try {
      if (editingContact) {
        await updateContact(editingContact._id, contactData);
      } else {
        await createContact(contactData);
      }
      setShowForm(false);
      setEditingContact(null);
      setRefreshTrigger(prev => prev + 1);
    } catch (error) {
      console.error('Error saving contact:', error);
      alert('Failed to save contact. Please try again.');
    }
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingContact(null);
  };

  return (
    <div className="home">
      <div className="home-header">
        <h1>Contact Manager</h1>
        <button 
          className="btn btn-primary"
          onClick={handleAddContact}
        >
          Add New Contact
        </button>
      </div>

      {showForm && (
        <ContactForm
          contact={editingContact}
          onSave={handleSaveContact}
          onCancel={handleCancelForm}
        />
      )}

      <ContactList
        onEditContact={handleEditContact}
        refreshTrigger={refreshTrigger}
      />
    </div>
  );
};

export default Home;
