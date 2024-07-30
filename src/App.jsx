import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AddContact from './pages/AddContact';
import ContactList from './pages/ContactList';
import DeleteContact from './pages/DeleteContact';
import EditContact from './pages/EditContact';
import { ContactProvider } from './context/ContactContext';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <ContactProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/ContextList" element={<ContactList />} />
              <Route path="/contacts/new" element={<AddContact />} />
              <Route path="/contacts/:id/edit" element={<EditContact />} />
              <Route path="/contacts/:id/delete" element={<DeleteContact />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContactProvider>
  );
};

export default App;
