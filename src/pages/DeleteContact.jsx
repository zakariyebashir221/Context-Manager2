import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const DeleteContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteContact } = useContext(ContactContext);

  const handleDelete = () => {
    deleteContact(parseFloat(id));
    navigate('/ContextList'); // Redirect to contact list after deleting
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Delete Contact</h2>
      <div className="bg-white p-4 rounded-md shadow">
        <p className="text-lg">Are you sure you want to delete this contact?</p>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-md"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => navigate('/ContextList')}
            className="px-4 py-2 bg-gray-600 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContact;