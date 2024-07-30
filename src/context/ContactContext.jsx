import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, updateContact }}>
      {children}
    </ContactContext.Provider>
  );
};
