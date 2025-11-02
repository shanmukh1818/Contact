import React from 'react';

const ContactCard = ({ contact, onEdit, onDelete }) => {
  const handleEdit = () => {
    onEdit(contact);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      onDelete(contact._id);
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-info">
        <h3 className="contact-name">{contact.name}</h3>
        <div className="contact-details">
          <p className="contact-email">
            <strong>Email:</strong> {contact.email}
          </p>
          <p className="contact-phone">
            <strong>Phone:</strong> {contact.phone}
          </p>
          {contact.company && (
            <p className="contact-company">
              <strong>Company:</strong> {contact.company}
            </p>
          )}
          {contact.address && (
            <p className="contact-address">
              <strong>Address:</strong> {contact.address}
            </p>
          )}
          {contact.notes && (
            <p className="contact-notes">
              <strong>Notes:</strong> {contact.notes}
            </p>
          )}
        </div>
      </div>
      <div className="contact-actions">
        <button className="btn btn-edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
