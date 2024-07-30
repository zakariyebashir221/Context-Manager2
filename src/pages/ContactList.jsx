import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleAddContact = () => {
    navigate('/contacts/new');
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
      <div className="mb-4">
        <button 
          onClick={handleAddContact} 
          className="inline-flex items-center px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Contact
        </button>
      </div>
      
      <ul className="grid grid-cols-1 gap-4">
        {contacts.map(contact => (
          <li key={contact.id} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold">{contact.name}</h2>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-600">{contact.phone}</p>
            <div className="flex space-x-2">
              <Link to={`/contacts/${contact.id}/edit`} className="text-blue-500">Edit</Link>
              <Link to={`/contacts/${contact.id}/delete`} className="text-red-500">Delete</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;