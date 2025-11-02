import React, { useState, useEffect, useRef } from 'react';
import ContactCard from './ContactCard';
import { getContacts, deleteContact } from '../services/contactService';

const ContactList = ({ onEditContact, refreshTrigger }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const searchTermRef = useRef(searchTerm);

  // Keep searchTermRef in sync with searchTerm
  useEffect(() => {
    searchTermRef.current = searchTerm;
  }, [searchTerm]);

  const loadContacts = async (page = 1, search = '') => {
    try {
      setLoading(true);
      const response = await getContacts(page, search);
      setContacts(response.contacts);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
      setError(null);
    } catch (err) {
      setError('Failed to load contacts');
      console.error('Error loading contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load contacts on mount and when refresh trigger or page changes
  useEffect(() => {
    loadContacts(currentPage, searchTermRef.current);
  }, [refreshTrigger, currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    loadContacts(1, searchTerm);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setCurrentPage(1);
    loadContacts(1, '');
  };

  const handleDelete = async (contactId) => {
    try {
      await deleteContact(contactId);
      loadContacts(currentPage, searchTerm);
    } catch (err) {
      setError('Failed to delete contact');
      console.error('Error deleting contact:', err);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    loadContacts(page, searchTerm);
  };

  if (loading) {
    return <div className="loading">Loading contacts...</div>;
  }

  return (
    <div className="contact-list">
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="btn btn-search">
            Search
          </button>
          {searchTerm && (
            <button 
              type="button" 
              onClick={handleClearSearch} 
              className="btn btn-secondary"
            >
              Clear
            </button>
          )}
        </form>
      </div>

      {error && <div className="error">{error}</div>}

      {contacts.length === 0 ? (
        <div className="no-contacts">
          <p>No contacts found. Add your first contact!</p>
        </div>
      ) : (
        <>
          <div className="contacts-grid">
            {contacts.map((contact) => (
              <ContactCard
                key={contact._id}
                contact={contact}
                onEdit={onEditContact}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-pagination"
              >
                Previous
              </button>
              <span className="page-info">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-pagination"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContactList;
